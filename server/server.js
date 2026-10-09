import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Submission } from './models/Submission.js';
import { Team } from './models/Team.js';
import { ArenaState } from './models/ArenaState.js';

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

// Global default arena state
const DEFAULT_ARENA_STATE = {
  key: 'global_arena_state',
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
  matchAssignments: {},
  lastUpdated: new Date().toISOString(),
};

let arenaState = { ...DEFAULT_ARENA_STATE };
let matchAssignments = {};

function getNextPhase(currentPhase) {
  const idx = PHASE_SEQUENCE.indexOf(currentPhase);
  if (idx < 0 || idx >= PHASE_SEQUENCE.length - 1) return null;
  return PHASE_SEQUENCE[idx + 1];
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

  const submittedTeams = getSubmittedTeams(allTeams);

  if (submittedTeams.length < 2) {
    console.log('⚠️ [Matchmaking] Less than 2 submissions with firstOutput — matching from all registered teams if available.');
  }

  // Use submitted teams if available; otherwise use all teams with fallback
  const poolTeams = submittedTeams.length >= 2 ? submittedTeams : allTeams;
  if (poolTeams.length === 0) return {};

  const assignmentCounts = {};
  poolTeams.forEach(t => { assignmentCounts[t.teamCode] = 0; });
  const newAssignments = {};

  for (const team of poolTeams) {
    const pool = poolTeams
      .filter(t => t.teamCode.toUpperCase() !== team.teamCode.toUpperCase())
      .sort((a, b) => (assignmentCounts[a.teamCode] || 0) - (assignmentCounts[b.teamCode] || 0));

    if (pool.length === 0) continue;

    const minCount = assignmentCounts[pool[0].teamCode] || 0;
    const lowestGroup = pool.filter(t => (assignmentCounts[t.teamCode] || 0) === minCount);
    shuffleArray(lowestGroup);

    const pickCount = Math.min(2, pool.length);
    const picked = [];

    for (let i = 0; i < Math.min(pickCount, lowestGroup.length); i++) {
      picked.push(lowestGroup[i]);
    }

    if (picked.length < pickCount) {
      const remaining = pool.filter(t => !picked.some(p => p.teamCode === t.teamCode));
      shuffleArray(remaining);
      for (let i = 0; picked.length < pickCount && i < remaining.length; i++) {
        picked.push(remaining[i]);
      }
    }

    newAssignments[team.teamCode.toUpperCase()] = picked.map((opp, idx) => ({
      id: opp.teamCode,
      anonymousId: `HOST TARGET 0${idx + 1}`,
      output: opp.round1?.firstOutput || opp.firstOutput || 'Draft analysis generated during baseline synthesis.',
      teamCode: opp.teamCode,
      isRealPeer: true,
    }));

    picked.forEach(p => {
      assignmentCounts[p.teamCode] = (assignmentCounts[p.teamCode] || 0) + 1;
    });
  }

  matchAssignments = newAssignments;
  console.log(`✅ [Matchmaking] Assigned opponents to ${Object.keys(newAssignments).length} teams.`);
  return newAssignments;
}

function getSubmittedTeams(allTeams = null) {
  const source = allTeams || inMemoryTeams;
  return source.filter(t => {
    const output = t.round1?.firstOutput || t.firstOutput || '';
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
    return source.filter(t => (t.round1?.firstOutput || t.firstOutput || '').trim().length > 0).length;
  } else if (phase === 'EVOLVE') {
    return source.filter(t => (t.round1?.finalOutput || t.finalOutput || '').trim().length > 0).length;
  }
  return 0;
}

// -------------------------------------------------------------
// DATABASE CONNECTION & PERSISTENT ARENA STATE
// -------------------------------------------------------------
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

// Global middleware to guarantee DB is connected
app.use(async (req, res, next) => {
  await ensureDB();
  next();
});

// Authoritative Persistent Arena State Loader & Auto-Advancer
async function getPersistentArenaState() {
  if (!isMongoConnected) {
    return arenaState;
  }

  try {
    let doc = await ArenaState.findOne({ key: 'global_arena_state' });
    if (!doc) {
      doc = await ArenaState.create(DEFAULT_ARENA_STATE);
    }

    // Check wall-clock auto-advance
    if (doc.isRoundStarted && doc.autoAdvance && doc.phaseEndsAt) {
      const now = Date.now();
      const endsAt = new Date(doc.phaseEndsAt).getTime();

      if (now >= endsAt) {
        const nextPhase = getNextPhase(doc.activePhase);
        if (nextPhase) {
          console.log(`🔄 [Auto-Advance DB] Wall-clock timer expired: ${doc.activePhase} -> ${nextPhase}`);
          
          if (doc.activePhase === 'CREATE' && (nextPhase === 'MATCH' || nextPhase === 'PARASITE')) {
            const matches = await runServerMatchmaking();
            doc.matchAssignments = matches;
          }

          doc.activePhase = nextPhase;
          const dur = TIMED_PHASES[nextPhase] || 0;
          doc.phaseDuration = dur;
          doc.phaseStartedAt = new Date().toISOString();
          doc.phaseEndsAt = dur > 0 ? new Date(now + dur * 1000).toISOString() : null;
          if (nextPhase === 'COMPLETE') {
            doc.autoAdvance = false;
          }
          doc.lastUpdated = new Date().toISOString();
          doc.markModified('matchAssignments');
          await doc.save();
        }
      }
    }

    arenaState = doc.toObject();
    matchAssignments = arenaState.matchAssignments || {};
    return arenaState;
  } catch (err) {
    console.warn('Error in getPersistentArenaState:', err);
    return arenaState;
  }
}

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

// GET /api/arena/state
app.get('/api/arena/state', async (req, res) => {
  try {
    const state = await getPersistentArenaState();
    res.json({ success: true, state });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/state (Tech Tatva Host Admin start/advance/pause)
app.post('/api/arena/state', async (req, res) => {
  try {
    const updates = req.body;
    let state = await getPersistentArenaState();

    // 1. START ROUND
    if (updates.isRoundStarted === true && !state.isRoundStarted) {
      let teamCount = inMemoryTeams.length;
      if (isMongoConnected) {
        try {
          const dbTeams = await Team.find({});
          teamCount = dbTeams.length;
        } catch (e) {
          console.warn('Error counting teams in arena start:', e);
        }
      }

      const minTeams = Number(state.minTeamsToStart || 3);
      if (teamCount < minTeams) {
        return res.status(400).json({
          success: false,
          error: `Minimum ${minTeams} teams required to start. Currently registered: ${teamCount}`,
          currentTeamCount: teamCount,
          requiredTeamCount: minTeams,
        });
      }

      const now = new Date();
      const duration = TIMED_PHASES.BRIEFING; // 60s
      const newState = {
        isRoundStarted: true,
        startedAt: now.toISOString(),
        activePhase: 'BRIEFING',
        phaseStartedAt: now.toISOString(),
        phaseDuration: duration,
        phaseEndsAt: new Date(now.getTime() + duration * 1000).toISOString(),
        autoAdvance: true,
        matchAssignments: {},
        lastUpdated: now.toISOString(),
      };

      if (isMongoConnected) {
        const updated = await ArenaState.findOneAndUpdate(
          { key: 'global_arena_state' },
          { $set: newState },
          { upsert: true, new: true }
        );
        state = updated.toObject();
      } else {
        arenaState = { ...arenaState, ...newState };
        state = arenaState;
      }

      console.log(`🚀 [Arena Started] Phase: BRIEFING | Teams: ${teamCount} | Ends: ${state.phaseEndsAt}`);
      return res.json({ success: true, state });
    }

    // 2. STOP / PAUSE ROUND
    if (updates.isRoundStarted === false) {
      const resetData = {
        isRoundStarted: false,
        startedAt: null,
        activePhase: 'LOBBY',
        phaseStartedAt: null,
        phaseEndsAt: null,
        phaseDuration: 0,
        lastUpdated: new Date().toISOString(),
      };

      if (isMongoConnected) {
        const updated = await ArenaState.findOneAndUpdate(
          { key: 'global_arena_state' },
          { $set: resetData },
          { upsert: true, new: true }
        );
        state = updated.toObject();
      } else {
        arenaState = { ...arenaState, ...resetData };
        state = arenaState;
      }

      console.log('⏸️ [Arena Stopped] Phase reset to LOBBY');
      return res.json({ success: true, state });
    }

    // 3. FORCE ADVANCE TO SPECIFIC PHASE
    if (updates.activePhase && updates.activePhase !== state.activePhase) {
      const newPhase = updates.activePhase;
      const now = new Date();
      const duration = TIMED_PHASES[newPhase] || 0;
      let newAssignments = state.matchAssignments || {};

      if (state.activePhase === 'CREATE' && (newPhase === 'MATCH' || newPhase === 'PARASITE')) {
        newAssignments = await runServerMatchmaking();
      } else if (newPhase === 'PARASITE' && Object.keys(newAssignments).length === 0) {
        newAssignments = await runServerMatchmaking();
      }

      const advanceData = {
        isRoundStarted: true,
        activePhase: newPhase,
        phaseStartedAt: now.toISOString(),
        phaseDuration: duration,
        phaseEndsAt: duration > 0 ? new Date(now.getTime() + duration * 1000).toISOString() : null,
        matchAssignments: newAssignments,
        autoAdvance: newPhase !== 'COMPLETE',
        lastUpdated: now.toISOString(),
      };

      if (isMongoConnected) {
        const updated = await ArenaState.findOneAndUpdate(
          { key: 'global_arena_state' },
          { $set: advanceData },
          { upsert: true, new: true }
        );
        state = updated.toObject();
      } else {
        arenaState = { ...arenaState, ...advanceData };
        state = arenaState;
      }

      console.log(`📡 [Admin Force-Advance] Advanced to ${newPhase}`);
      return res.json({ success: true, state });
    }

    // 4. Other updates (timers, challenge, minTeams)
    const otherUpdates = {};
    if (updates.minTeamsToStart !== undefined) otherUpdates.minTeamsToStart = Number(updates.minTeamsToStart);
    if (updates.timers) otherUpdates.timers = { ...(state.timers || {}), ...updates.timers };
    if (updates.activeChallenge !== undefined) otherUpdates.activeChallenge = updates.activeChallenge;
    otherUpdates.lastUpdated = new Date().toISOString();

    if (isMongoConnected) {
      const updated = await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: otherUpdates },
        { upsert: true, new: true }
      );
      state = updated.toObject();
    } else {
      arenaState = { ...arenaState, ...otherUpdates };
      state = arenaState;
    }

    return res.json({ success: true, state });
  } catch (err) {
    console.error('Arena State Update Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/purge-data (Clear all test teams and submissions, reset arena to initial LOBBY)
app.post('/api/arena/purge-data', async (req, res) => {
  try {
    matchAssignments = {};
    inMemoryTeams.length = 0;
    inMemorySubmissions.length = 0;

    let state = { ...DEFAULT_ARENA_STATE, lastUpdated: new Date().toISOString() };

    if (isMongoConnected) {
      await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: state },
        { upsert: true }
      );
      await Team.deleteMany({});
      await Submission.deleteMany({});
    } else {
      arenaState = { ...state };
    }

    console.log('🧹 [Arena Purge] All tournament data, teams, and submissions wiped clean.');
    return res.json({ success: true, message: 'All arena data purged successfully', state });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/arena/phase-clock (Server-authoritative countdown for all clients)
app.get('/api/arena/phase-clock', async (req, res) => {
  try {
    const state = await getPersistentArenaState();
    const now = Date.now();
    let remainingSeconds = 0;
    let totalSeconds = state.phaseDuration || 0;

    if (state.phaseEndsAt) {
      remainingSeconds = Math.max(0, Math.ceil((new Date(state.phaseEndsAt).getTime() - now) / 1000));
    }

    let teamCount = inMemoryTeams.length;
    let subCount = getSubmittedCount(state.activePhase);

    if (isMongoConnected) {
      try {
        const teams = await Team.find({});
        teamCount = teams.length;
        subCount = getSubmittedCount(state.activePhase, teams);
      } catch (e) {
        console.warn('Error fetching teams in phase-clock:', e);
      }
    }

    res.json({
      success: true,
      activePhase: state.activePhase,
      isRoundStarted: Boolean(state.isRoundStarted),
      phaseStartedAt: state.phaseStartedAt,
      phaseEndsAt: state.phaseEndsAt,
      remainingSeconds,
      totalSeconds,
      minTeamsRequired: state.minTeamsToStart || 3,
      registeredTeamCount: teamCount,
      submittedCount: subCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/arena/matches/:teamCode (Get match assignments for a specific team)
app.get('/api/arena/matches/:teamCode', async (req, res) => {
  try {
    const state = await getPersistentArenaState();
    const { teamCode } = req.params;
    const upper = teamCode.toUpperCase();
    const assignments = state.matchAssignments || matchAssignments || {};
    const opponents = assignments[upper] || [];

    res.json({
      success: true,
      teamCode: upper,
      opponents,
      matchPhaseActive: state.activePhase === 'MATCH' || state.activePhase === 'PARASITE' || state.activePhase === 'EVOLVE',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Helper: Generate Unique Team Code
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

// POST /api/teams/login
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

// GET /api/teams
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

// PATCH /api/teams/:codeOrId
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

// POST /api/teams/:codeOrId/qualify-r2
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

// DELETE /api/teams/:codeOrId
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

// PUT /api/teams/:codeOrId
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

// POST /api/teams/:codeOrId/score
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
