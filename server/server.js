import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Submission } from './models/Submission.js';
import { Team } from './models/Team.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// In-memory fallback if MongoDB connection is pending
const inMemoryTeams = [];
const inMemorySubmissions = [];
let isMongoConnected = false;

// -------------------------------------------------------------
// PHASE SEQUENCE & TIMING CONFIGURATION
// -------------------------------------------------------------
const PHASE_SEQUENCE = ['LOBBY', 'BRIEFING', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE', 'COMPLETE'];
const TIMED_PHASES = {
  BRIEFING: 60,    // 1 min briefing
  CREATE: 600,     // 10 min
  MATCH: 30,       // 30s transition
  PARASITE: 600,   // 10 min
  EVOLVE: 600,     // 10 min
};

// Per-team match assignments: { [teamCode]: [{ anonymousId, output, teamCode }] }
let matchAssignments = {};

// Global Arena State (Round 1 lifecycle controller)
let arenaState = {
  isRoundStarted: false,
  activePhase: 'LOBBY',
  startedAt: null,
  phaseStartedAt: null,
  phaseEndsAt: null,
  phaseDuration: 0,
  minTeamsToStart: 3,
  autoAdvance: true,
  activeChallenge: null,
  timers: { create: 600, parasite: 600, evolve: 600 },
  lastUpdated: new Date().toISOString(),
};

// Auto-advance interval reference
let autoAdvanceInterval = null;

// -------------------------------------------------------------
// PHASE TIMER & AUTO-ADVANCE SYSTEM
// -------------------------------------------------------------

function startPhaseTimer(phase) {
  const duration = TIMED_PHASES[phase] || 0;
  const now = new Date();

  arenaState.activePhase = phase;
  arenaState.phaseStartedAt = now.toISOString();
  arenaState.phaseDuration = duration;

  if (duration > 0) {
    arenaState.phaseEndsAt = new Date(now.getTime() + duration * 1000).toISOString();
  } else {
    arenaState.phaseEndsAt = null;
  }

  arenaState.lastUpdated = now.toISOString();
  console.log(`⏱️ [Phase Timer] Started: ${phase} | Duration: ${duration}s | Ends at: ${arenaState.phaseEndsAt || 'N/A'}`);
}

function getNextPhase(currentPhase) {
  const idx = PHASE_SEQUENCE.indexOf(currentPhase);
  if (idx < 0 || idx >= PHASE_SEQUENCE.length - 1) return null;
  return PHASE_SEQUENCE[idx + 1];
}

function advanceToNextPhase() {
  const current = arenaState.activePhase;
  const next = getNextPhase(current);

  if (!next) {
    console.log('🏁 [Phase] Reached COMPLETE — stopping auto-advance.');
    stopAutoAdvance();
    return;
  }

  console.log(`🔄 [Phase Auto-Advance] ${current} → ${next}`);

  // If transitioning from CREATE to MATCH, run matchmaking first
  if (current === 'CREATE' && next === 'MATCH') {
    runServerMatchmaking();
  }

  startPhaseTimer(next);

  // If we reached COMPLETE, stop auto-advance
  if (next === 'COMPLETE') {
    stopAutoAdvance();
  }
}

function startAutoAdvance() {
  stopAutoAdvance(); // Clear any existing

  autoAdvanceInterval = setInterval(() => {
    if (!arenaState.isRoundStarted || !arenaState.autoAdvance) return;
    if (!arenaState.phaseEndsAt) return;

    const now = Date.now();
    const endsAt = new Date(arenaState.phaseEndsAt).getTime();

    if (now >= endsAt) {
      advanceToNextPhase();
    }
  }, 1000);

  console.log('🟢 [Auto-Advance] Timer system activated (1s tick)');
}

function stopAutoAdvance() {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval);
    autoAdvanceInterval = null;
    console.log('🔴 [Auto-Advance] Timer system stopped');
  }
}

// -------------------------------------------------------------
// BALANCED RANDOM MATCHMAKING
// -------------------------------------------------------------

async function runServerMatchmaking() {
  console.log('🎯 [Matchmaking] Running balanced random matchmaking...');

  let allTeams = inMemoryTeams;
  if (isMongoConnected) {
    try {
      allTeams = await Team.find({});
    } catch (e) {
      console.warn('Error fetching teams in matchmaking:', e);
    }
  }

  // Get all teams with firstOutput
  const submittedTeams = getSubmittedTeams(allTeams);

  if (submittedTeams.length < 2) {
    console.log('⚠️ [Matchmaking] Less than 2 submissions — matching with available pool or empty.');
    if (submittedTeams.length === 0) return;
  }

  // Track how many times each team's output has been assigned
  const assignmentCounts = {};
  submittedTeams.forEach(t => { assignmentCounts[t.teamCode] = 0; });

  // Clear previous assignments
  matchAssignments = {};

  // For each team, assign 1-2 opponents using balanced distribution
  for (const team of submittedTeams) {
    // Build pool: all other submitted teams, sorted by assignment count (least assigned first)
    const pool = submittedTeams
      .filter(t => t.teamCode.toUpperCase() !== team.teamCode.toUpperCase())
      .sort((a, b) => (assignmentCounts[a.teamCode] || 0) - (assignmentCounts[b.teamCode] || 0));

    if (pool.length === 0) continue;

    // Among those with the same (lowest) count, shuffle randomly
    const minCount = assignmentCounts[pool[0].teamCode] || 0;
    const lowestGroup = pool.filter(t => (assignmentCounts[t.teamCode] || 0) === minCount);
    shuffleArray(lowestGroup);

    // Pick up to 2 opponents
    const pickCount = Math.min(2, pool.length);
    const picked = [];

    // First pick from the lowest-count group
    for (let i = 0; i < Math.min(pickCount, lowestGroup.length); i++) {
      picked.push(lowestGroup[i]);
    }

    // If we need more, pick from remaining pool
    if (picked.length < pickCount) {
      const remaining = pool.filter(t => !picked.some(p => p.teamCode === t.teamCode));
      shuffleArray(remaining);
      for (let i = 0; picked.length < pickCount && i < remaining.length; i++) {
        picked.push(remaining[i]);
      }
    }

    // Create assignments
    matchAssignments[team.teamCode.toUpperCase()] = picked.map((opp, idx) => ({
      id: opp.teamCode,
      anonymousId: `HOST TARGET 0${idx + 1}`,
      output: opp.round1?.firstOutput || opp.firstOutput || '',
      teamCode: opp.teamCode,
      isRealPeer: true,
    }));

    // Update assignment counts
    picked.forEach(p => {
      assignmentCounts[p.teamCode] = (assignmentCounts[p.teamCode] || 0) + 1;
    });
  }

  const totalAssignments = Object.keys(matchAssignments).length;
  console.log(`✅ [Matchmaking] Assigned opponents to ${totalAssignments} teams.`);
  console.log(`📊 [Matchmaking] Distribution:`, assignmentCounts);
}

function getSubmittedTeams(allTeams = null) {
  const source = allTeams || inMemoryTeams;
  return source.filter(t => {
    const output = t.round1?.firstOutput || '';
    return output.trim().length > 0;
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getSubmittedCount(phase, allTeams = null) {
  const source = allTeams || inMemoryTeams;
  if (phase === 'CREATE') {
    return source.filter(t => (t.round1?.firstOutput || '').trim().length > 0).length;
  } else if (phase === 'EVOLVE') {
    return source.filter(t => (t.round1?.finalOutput || '').trim().length > 0).length;
  }
  return 0;
}

// -------------------------------------------------------------
// DATABASE CONNECTION
let cachedDbPromise = null;

async function ensureDB() {
  if (mongoose.connection.readyState === 1) {
    isMongoConnected = true;
    return;
  }
  if (!MONGODB_URI || MONGODB_URI.includes('<db_password>')) {
    isMongoConnected = false;
    return;
  }
  if (!cachedDbPromise) {
    cachedDbPromise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
      bufferCommands: false,
    }).then(() => {
      isMongoConnected = true;
      console.log('✅ [MongoDB] Connected to MongoDB Atlas cluster');
    }).catch(err => {
      cachedDbPromise = null;
      isMongoConnected = false;
      console.error('❌ [MongoDB] Connection error:', err.message);
    });
  }
  await cachedDbPromise;
}

// Global middleware to guarantee DB is connected before processing requests
app.use(async (req, res, next) => {
  await ensureDB();
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Prompt War Unified Backend',
    mongoConnected: mongoose.connection.readyState === 1,
    hasConfiguredUri: Boolean(MONGODB_URI && !MONGODB_URI.includes('<db_password>')),
    timestamp: new Date().toISOString(),
  });
});

// -------------------------------------------------------------
// ARENA STATE & LIFECYCLE CONTROLLER (START / PAUSE / PHASES)
// -------------------------------------------------------------

// GET /api/arena/state (Pollable by contestants in Holding Lobby)
app.get('/api/arena/state', (req, res) => {
  res.json({ success: true, state: arenaState });
});

// POST /api/arena/state (Updated exclusively by Tech Tatva Host Admin)
app.post('/api/arena/state', async (req, res) => {
  try {
    const updates = req.body;

    // MIN TEAM GATE: Block round start if not enough teams
    if (updates.isRoundStarted === true && !arenaState.isRoundStarted) {
      let teamCount = inMemoryTeams.length;
      if (isMongoConnected) {
        try {
          const dbTeams = await Team.find({});
          teamCount = dbTeams.length;
        } catch (e) {
          console.warn('Error counting teams in arena state start:', e);
        }
      }

      if (teamCount < arenaState.minTeamsToStart) {
        return res.status(400).json({
          success: false,
          error: `Minimum ${arenaState.minTeamsToStart} teams required to start. Currently registered: ${teamCount}`,
          currentTeamCount: teamCount,
          requiredTeamCount: arenaState.minTeamsToStart,
        });
      }

      // Start the round — begin with BRIEFING phase
      arenaState.isRoundStarted = true;
      arenaState.startedAt = new Date().toISOString();
      matchAssignments = {}; // Clear old assignments

      // Start BRIEFING phase with timer
      startPhaseTimer('BRIEFING');
      startAutoAdvance();

      console.log(`🚀 [Arena] ROUND 01 STARTED! Teams: ${teamCount} | Phase: BRIEFING`);
      return res.json({ success: true, state: arenaState });
    }

    // STOP / PAUSE round
    if (updates.isRoundStarted === false) {
      arenaState.isRoundStarted = false;
      arenaState.startedAt = null;
      arenaState.activePhase = 'LOBBY';
      arenaState.phaseStartedAt = null;
      arenaState.phaseEndsAt = null;
      arenaState.phaseDuration = 0;
      stopAutoAdvance();

      arenaState.lastUpdated = new Date().toISOString();
      console.log('⏸️ [Arena] ROUND 01 PAUSED / STOPPED');
      return res.json({ success: true, state: arenaState });
    }

    // FORCE ADVANCE to specific phase (admin override)
    if (updates.activePhase && updates.activePhase !== arenaState.activePhase) {
      const newPhase = updates.activePhase;

      // If advancing to MATCH from CREATE, run matchmaking first
      if (arenaState.activePhase === 'CREATE' && (newPhase === 'MATCH' || newPhase === 'PARASITE')) {
        runServerMatchmaking();
      }

      // If jumping directly to PARASITE and matchmaking hasn't been done
      if (newPhase === 'PARASITE' && Object.keys(matchAssignments).length === 0) {
        runServerMatchmaking();
      }

      startPhaseTimer(newPhase);

      if (newPhase === 'COMPLETE') {
        stopAutoAdvance();
      } else if (arenaState.isRoundStarted && !autoAdvanceInterval) {
        startAutoAdvance();
      }

      console.log(`📡 [Arena] ADMIN FORCE-ADVANCE to ${newPhase}`);
      return res.json({ success: true, state: arenaState });
    }

    // Generic updates (timers, minTeamsToStart, etc.)
    if (updates.minTeamsToStart !== undefined) {
      arenaState.minTeamsToStart = Number(updates.minTeamsToStart);
    }
    if (updates.timers) {
      arenaState.timers = { ...arenaState.timers, ...updates.timers };
    }
    if (updates.activeChallenge !== undefined) {
      arenaState.activeChallenge = updates.activeChallenge;
    }
    arenaState.lastUpdated = new Date().toISOString();

    return res.json({ success: true, state: arenaState });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/purge-data (Clear all test teams and submissions, reset arena to initial LOBBY)
app.post('/api/arena/purge-data', async (req, res) => {
  try {
    stopAutoAdvance();

    arenaState = {
      isRoundStarted: false,
      activePhase: 'LOBBY',
      startedAt: null,
      phaseStartedAt: null,
      phaseEndsAt: null,
      phaseDuration: 0,
      minTeamsToStart: 3,
      autoAdvance: true,
      activeChallenge: null,
      timers: { create: 600, parasite: 600, evolve: 600 },
      lastUpdated: new Date().toISOString(),
    };

    matchAssignments = {};
    inMemoryTeams.length = 0;
    inMemorySubmissions.length = 0;

    if (isMongoConnected) {
      await Team.deleteMany({});
      await Submission.deleteMany({});
    }

    console.log('🧹 [Arena Purge] All tournament data, teams, and submissions wiped clean.');
    return res.json({ success: true, message: 'All arena data purged successfully', state: arenaState });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/arena/phase-clock (Server-authoritative countdown for all clients)
app.get('/api/arena/phase-clock', async (req, res) => {
  const now = Date.now();
  let remainingSeconds = 0;
  let totalSeconds = arenaState.phaseDuration || 0;

  if (arenaState.phaseEndsAt) {
    remainingSeconds = Math.max(0, Math.ceil((new Date(arenaState.phaseEndsAt).getTime() - now) / 1000));
  }

  let teamCount = inMemoryTeams.length;
  let subCount = getSubmittedCount(arenaState.activePhase);

  if (isMongoConnected) {
    try {
      const teams = await Team.find({});
      teamCount = teams.length;
      subCount = getSubmittedCount(arenaState.activePhase, teams);
    } catch (e) {
      console.warn('Error fetching teams in phase-clock:', e);
    }
  }

  res.json({
    success: true,
    activePhase: arenaState.activePhase,
    isRoundStarted: arenaState.isRoundStarted,
    phaseStartedAt: arenaState.phaseStartedAt,
    phaseEndsAt: arenaState.phaseEndsAt,
    remainingSeconds,
    totalSeconds,
    minTeamsRequired: arenaState.minTeamsToStart,
    registeredTeamCount: teamCount,
    submittedCount: subCount,
  });
});

// GET /api/arena/matches/:teamCode (Get match assignments for a specific team)
app.get('/api/arena/matches/:teamCode', (req, res) => {
  const { teamCode } = req.params;
  const upper = teamCode.toUpperCase();
  const opponents = matchAssignments[upper] || [];

  res.json({
    success: true,
    teamCode: upper,
    opponents,
    matchPhaseActive: arenaState.activePhase === 'MATCH' || arenaState.activePhase === 'PARASITE' || arenaState.activePhase === 'EVOLVE',
  });
});

// Helper: Generate Unique Team Code (e.g. PW-7482)
function generateTeamCode() {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `PW-${num}`;
}

// -------------------------------------------------------------
// TEAM REGISTRATION & TOURNAMENT SYNC ROUTES (ROUNDS 1, 2, 3)
// -------------------------------------------------------------

// POST /api/teams/register
app.post('/api/teams/register', async (req, res) => {
  try {
    const { teamName, leaderName, leaderContact, college, memberCount, members } = req.body;
    if (!teamName || !leaderName) {
      return res.status(400).json({ error: 'Team name and leader name are required.' });
    }

    const trimmedTeamName = teamName.trim();
    const teamCode = req.body.teamCode ? req.body.teamCode.toUpperCase().trim() : generateTeamCode();
    const finalMemberCount = Math.min(4, Math.max(2, Number(memberCount) || 2));

    if (isMongoConnected) {
      let team = await Team.findOne({
        $or: [{ teamName: new RegExp(`^${trimmedTeamName}$`, 'i') }, { teamCode }],
      });

      if (team) {
        team.leaderName = leaderName;
        if (leaderContact) team.leaderContact = leaderContact;
        if (college) team.college = college;
        team.memberCount = finalMemberCount;
        if (members) team.members = members;
        await team.save();
        return res.json({ success: true, team, isExisting: true });
      }

      team = new Team({
        teamCode,
        teamName: trimmedTeamName,
        leaderName,
        leaderContact: leaderContact || '',
        college: college || 'Chandigarh University',
        memberCount: finalMemberCount,
        members: members || [leaderName],
        round1: {
          status: 'NOT_STARTED',
          score: 0,
        },
      });

      await team.save();
      return res.json({ success: true, team, isExisting: false });
    } else {
      // In-memory fallback
      let team = inMemoryTeams.find(
        (t) => t.teamName.toLowerCase() === trimmedTeamName.toLowerCase() || t.teamCode === teamCode
      );

      if (team) {
        team.leaderName = leaderName;
        if (leaderContact) team.leaderContact = leaderContact;
        if (college) team.college = college;
        team.memberCount = finalMemberCount;
        if (members) team.members = members;
        return res.json({ success: true, team, isExisting: true });
      }

      team = {
        teamCode,
        teamName: trimmedTeamName,
        leaderName,
        leaderContact: leaderContact || '',
        college: college || 'Chandigarh University',
        memberCount: finalMemberCount,
        members: members || [leaderName],
        round1: { status: 'NOT_STARTED', score: 0 },
        round2: { status: 'LOCKED', score: 0 },
        round3: { status: 'LOCKED', score: 0 },
        createdAt: new Date().toISOString(),
      };
      inMemoryTeams.push(team);
      return res.json({ success: true, team, isExisting: false });
    }
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/teams/login (Resume with Team Code or Team Name)
app.post('/api/teams/login', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ error: 'Team Code or Team Name required' });
    }

    const trimmed = query.trim();

    if (isMongoConnected) {
      const team = await Team.findOne({
        $or: [
          { teamCode: trimmed.toUpperCase() },
          { teamName: new RegExp(`^${trimmed}$`, 'i') },
        ],
      });

      if (!team) {
        return res.status(404).json({ error: 'Team not found. Please register first.' });
      }

      return res.json({ success: true, team });
    } else {
      const team = inMemoryTeams.find(
        (t) =>
          t.teamCode.toUpperCase() === trimmed.toUpperCase() ||
          t.teamName.toLowerCase() === trimmed.toLowerCase()
      );

      if (!team) {
        return res.status(404).json({ error: 'Team not found in arena.' });
      }

      return res.json({ success: true, team });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/teams (List all teams for Tournament Leaderboard & Rounds 2 & 3)
app.get('/api/teams', async (req, res) => {
  try {
    if (isMongoConnected) {
      const teams = await Team.find({}).sort({ 'round1.score': -1, createdAt: -1 });
      return res.json({ success: true, count: teams.length, teams });
    } else {
      const sorted = [...inMemoryTeams].sort(
        (a, b) => ((b.round1 && b.round1.score) || 0) - ((a.round1 && a.round1.score) || 0)
      );
      return res.json({ success: true, count: sorted.length, teams: sorted });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/teams/:codeOrId (Update Round 1/2/3 progress or scores)
app.patch('/api/teams/:codeOrId', async (req, res) => {
  try {
    const { codeOrId } = req.params;
    const updates = req.body;

    if (isMongoConnected) {
      const team = await Team.findOne({
        $or: [
          { teamCode: codeOrId.toUpperCase() },
          { _id: mongoose.isValidObjectId(codeOrId) ? codeOrId : null },
        ],
      });

      if (!team) {
        return res.status(404).json({ error: 'Team not found' });
      }

      if (updates.round1) team.round1 = { ...team.round1, ...updates.round1 };
      if (updates.round2) team.round2 = { ...team.round2, ...updates.round2 };
      if (updates.round3) team.round3 = { ...team.round3, ...updates.round3 };
      if (updates.totalTournamentScore !== undefined) {
        team.totalTournamentScore = Number(updates.totalTournamentScore);
      }

      await team.save();
      return res.json({ success: true, team });
    } else {
      const idx = inMemoryTeams.findIndex(
        (t) => t.teamCode.toUpperCase() === codeOrId.toUpperCase() || t.teamName === codeOrId
      );

      if (idx === -1) {
        return res.status(404).json({ error: 'Team not found' });
      }

      inMemoryTeams[idx] = {
        ...inMemoryTeams[idx],
        ...updates,
        round1: { ...(inMemoryTeams[idx].round1 || {}), ...(updates.round1 || {}) },
      };

      return res.json({ success: true, team: inMemoryTeams[idx] });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/teams/:codeOrId/qualify-r2 (Host 1-click qualify for Round 2)
app.post('/api/teams/:codeOrId/qualify-r2', async (req, res) => {
  try {
    const { codeOrId } = req.params;
    const isQualified = req.body.isQualified !== false;

    if (isMongoConnected) {
      const team = await Team.findOne({
        $or: [
          { teamCode: codeOrId.toUpperCase() },
          { _id: mongoose.isValidObjectId(codeOrId) ? codeOrId : null },
        ],
      });

      if (!team) return res.status(404).json({ error: 'Team not found' });

      team.round1.isQualifiedR2 = isQualified;
      team.round2.status = isQualified ? 'QUALIFIED' : 'LOCKED';
      await team.save();

      return res.json({ success: true, team });
    } else {
      const team = inMemoryTeams.find(
        (t) => t.teamCode.toUpperCase() === codeOrId.toUpperCase() || t.teamName === codeOrId
      );
      if (!team) return res.status(404).json({ error: 'Team not found' });

      team.round1 = team.round1 || {};
      team.round1.isQualifiedR2 = isQualified;
      team.round2 = team.round2 || {};
      team.round2.status = isQualified ? 'QUALIFIED' : 'LOCKED';

      return res.json({ success: true, team });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/teams/:codeOrId (Host deletion of test/duplicate/disqualified teams)
app.delete('/api/teams/:codeOrId', async (req, res) => {
  try {
    const { codeOrId } = req.params;
    const upper = codeOrId.toUpperCase();

    if (isMongoConnected) {
      const deleted = await Team.findOneAndDelete({
        $or: [
          { teamCode: upper },
          { teamName: new RegExp(`^${codeOrId}$`, 'i') },
          { _id: mongoose.isValidObjectId(codeOrId) ? codeOrId : null },
        ],
      });

      if (!deleted) return res.status(404).json({ error: 'Team not found in arena database.' });

      await Submission.deleteMany({ teamName: deleted.teamName });

      console.log(`🗑️ [Team Deleted] Purged ${deleted.teamName} (${deleted.teamCode})`);
      return res.json({ success: true, message: 'Team successfully purged', team: deleted });
    } else {
      const idx = inMemoryTeams.findIndex(
        (t) => t.teamCode.toUpperCase() === upper || t.teamName.toLowerCase() === codeOrId.toLowerCase()
      );

      if (idx === -1) return res.status(404).json({ error: 'Team not found in arena ledger.' });

      const deleted = inMemoryTeams.splice(idx, 1)[0];
      return res.json({ success: true, message: 'Team successfully purged', team: deleted });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/teams/:codeOrId (Host editing of team details, typos, leader contact)
app.put('/api/teams/:codeOrId', async (req, res) => {
  try {
    const { codeOrId } = req.params;
    const { teamName, leaderName, leaderContact, college, members, memberCount } = req.body;
    const upper = codeOrId.toUpperCase();

    if (isMongoConnected) {
      const team = await Team.findOne({
        $or: [
          { teamCode: upper },
          { teamName: new RegExp(`^${codeOrId}$`, 'i') },
          { _id: mongoose.isValidObjectId(codeOrId) ? codeOrId : null },
        ],
      });

      if (!team) return res.status(404).json({ error: 'Team not found' });

      if (teamName) team.teamName = teamName.trim();
      if (leaderName) team.leaderName = leaderName.trim();
      if (leaderContact !== undefined) team.leaderContact = leaderContact.trim();
      if (college) team.college = college.trim();
      if (members && Array.isArray(members)) team.members = members;
      if (memberCount) team.memberCount = Number(memberCount);

      await team.save();
      return res.json({ success: true, team });
    } else {
      const team = inMemoryTeams.find(
        (t) => t.teamCode.toUpperCase() === upper || t.teamName.toLowerCase() === codeOrId.toLowerCase()
      );
      if (!team) return res.status(404).json({ error: 'Team not found' });

      if (teamName) team.teamName = teamName.trim();
      if (leaderName) team.leaderName = leaderName.trim();
      if (leaderContact !== undefined) team.leaderContact = leaderContact.trim();
      if (college) team.college = college.trim();
      if (members && Array.isArray(members)) team.members = members;
      if (memberCount) team.memberCount = Number(memberCount);

      return res.json({ success: true, team });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/teams/:codeOrId/score (Official Judge verdict submission)
app.post('/api/teams/:codeOrId/score', async (req, res) => {
  try {
    const { codeOrId } = req.params;
    const { promptQuality, problemUnderstanding, outputQuality, improvement, judgeNotes, totalScore, total } = req.body;
    const upper = codeOrId.toUpperCase();
    const computedTotal =
      totalScore != null
        ? Number(totalScore)
        : total != null
        ? Number(total)
        : Number(promptQuality || 0) +
          Number(problemUnderstanding || 0) +
          Number(outputQuality || 0) +
          Number(improvement || 0);
    const score = isNaN(computedTotal) ? 0 : computedTotal;

    if (isMongoConnected) {
      const team = await Team.findOne({
        $or: [
          { teamCode: upper },
          { teamName: new RegExp(`^${codeOrId}$`, 'i') },
          { _id: mongoose.isValidObjectId(codeOrId) ? codeOrId : null },
        ],
      });

      if (!team) return res.status(404).json({ error: 'Team not found' });

      team.round1 = team.round1 || {};
      team.round1.score = score;
      team.round1.status = 'COMPLETED';
      team.round1.evaluation = {
        promptQuality: Number(promptQuality || 0),
        problemUnderstanding: Number(problemUnderstanding || 0),
        outputQuality: Number(outputQuality || 0),
        improvement: Number(improvement || 0),
        total: score,
        judgeNotes: judgeNotes || '',
        evaluatedAt: new Date(),
      };
      team.totalTournamentScore = score;
      await team.save();

      return res.json({ success: true, team });
    } else {
      const team = inMemoryTeams.find(
        (t) => t.teamCode.toUpperCase() === upper || t.teamName.toLowerCase() === codeOrId.toLowerCase()
      );
      if (!team) return res.status(404).json({ error: 'Team not found' });

      team.round1 = team.round1 || {};
      team.round1.score = score;
      team.round1.status = 'COMPLETED';
      team.round1.evaluation = {
        promptQuality: Number(promptQuality || 0),
        problemUnderstanding: Number(problemUnderstanding || 0),
        outputQuality: Number(outputQuality || 0),
        improvement: Number(improvement || 0),
        total: score,
        judgeNotes: judgeNotes || '',
        evaluatedAt: new Date().toISOString(),
      };
      team.totalTournamentScore = score;

      return res.json({ success: true, team });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------------------------------------------------
// SUBMISSIONS API (ROUND 1 PROMPT PARASITE)
// -------------------------------------------------------------

// GET /api/submissions
app.get('/api/submissions', async (req, res) => {
  try {
    if (isMongoConnected) {
      const filter = {};
      if (req.query.round) filter.round = req.query.round;
      const submissions = await Submission.find(filter).sort({ totalScore: -1, createdAt: -1 });
      return res.json({ success: true, count: submissions.length, submissions });
    } else {
      // In-memory: Also ensure any team with firstOutput in inMemoryTeams is mirrored in submissions
      inMemoryTeams.forEach((t) => {
        if (t.round1?.firstOutput) {
          const exists = inMemorySubmissions.some(
            (s) => s.teamCode === t.teamCode || s.teamName === t.teamName
          );
          if (!exists) {
            inMemorySubmissions.push({
              submissionId: `sub_${t.teamCode}`,
              teamCode: t.teamCode,
              teamName: t.teamName,
              leaderName: t.leaderName,
              college: t.college,
              round: 'round-1',
              firstPrompt: t.round1.firstPrompt || '',
              firstOutput: t.round1.firstOutput || '',
              finalPrompt: t.round1.finalPrompt || '',
              finalOutput: t.round1.finalOutput || '',
              status: t.round1.status || 'FIRST_LOCKED',
              updatedAt: new Date().toISOString(),
            });
          }
        }
      });
      return res.json({ success: true, count: inMemorySubmissions.length, submissions: inMemorySubmissions });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/submissions
app.post('/api/submissions', async (req, res) => {
  try {
    const data = req.body;
    const subId = data.id || data.submissionId || 'sub_' + Date.now();
    const round = data.round || 'round-1';

    if (isMongoConnected) {
      const updated = await Submission.findOneAndUpdate(
        { $or: [{ submissionId: subId }, { teamName: data.teamName, round }] },
        { ...data, submissionId: subId, round },
        { new: true, upsert: true }
      );

      // Also sync to Team document if teamName or teamCode matches
      if (data.teamName || data.teamCode) {
        const teamFilter = data.teamCode
          ? { teamCode: data.teamCode.toUpperCase() }
          : { teamName: new RegExp(`^${data.teamName}$`, 'i') };

        await Team.findOneAndUpdate(
          teamFilter,
          {
            $set: {
              'round1.status': data.status || 'FIRST_LOCKED',
              'round1.firstPrompt': data.firstPrompt || '',
              'round1.firstOutput': data.firstOutput || '',
              'round1.finalPrompt': data.finalPrompt || '',
              'round1.finalOutput': data.finalOutput || '',
              'round1.mutationNotes': data.mutationNotes || '',
              'round1.score': data.score ?? data.totalScore ?? 0,
            },
          }
        );
      }

      return res.json({ success: true, submission: updated });
    } else {
      const idx = inMemorySubmissions.findIndex(
        (s) => s.submissionId === subId || (s.teamName === data.teamName && s.round === round)
      );

      const subObj = { ...data, submissionId: subId, round, updatedAt: new Date().toISOString() };
      if (idx >= 0) {
        inMemorySubmissions[idx] = subObj;
      } else {
        inMemorySubmissions.push(subObj);
      }

      // Also update inMemoryTeams!
      const memTeam = inMemoryTeams.find(
        (t) =>
          (data.teamCode && t.teamCode.toUpperCase() === data.teamCode.toUpperCase()) ||
          (data.teamName && t.teamName.toLowerCase() === data.teamName.toLowerCase())
      );
      if (memTeam) {
        memTeam.round1 = memTeam.round1 || {};
        memTeam.round1.status = data.status || 'FIRST_LOCKED';
        if (data.firstPrompt) memTeam.round1.firstPrompt = data.firstPrompt;
        if (data.firstOutput) memTeam.round1.firstOutput = data.firstOutput;
        if (data.finalPrompt) memTeam.round1.finalPrompt = data.finalPrompt;
        if (data.finalOutput) memTeam.round1.finalOutput = data.finalOutput;
        if (data.mutationNotes) memTeam.round1.mutationNotes = data.mutationNotes;
      }

      return res.json({ success: true, submission: subObj });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

if (process.env.VERCEL !== '1') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 [Backend] Prompt War Tournament API Server listening on http://127.0.0.1:${PORT}`);
    console.log(`📡 [Backend] Endpoints:`);
    console.log(`   - POST /api/teams/register`);
    console.log(`   - POST /api/teams/login`);
    console.log(`   - GET  /api/teams`);
    console.log(`   - PATCH /api/teams/:codeOrId`);
    console.log(`   - POST /api/teams/:codeOrId/qualify-r2`);
    console.log(`   - GET  /api/submissions`);
    console.log(`   - POST /api/submissions`);
    console.log(`   - GET  /api/arena/state`);
    console.log(`   - POST /api/arena/state`);
    console.log(`   - GET  /api/arena/phase-clock`);
    console.log(`   - GET  /api/arena/matches/:teamCode\n`);
  });
}

export default app;
