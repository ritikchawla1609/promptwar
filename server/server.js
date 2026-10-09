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
  // Authoritative synchronized round schedule
  roundId: 'ROUND_1',
  sessionId: 'pw_sess_default',
  scheduleStatus: 'LOBBY', // 'SCHEDULED' | 'BRIEFING' | 'LIVE' | 'PAUSED' | 'COMPLETED' | 'LOBBY'
  scheduledStartAt: null,
  actualStartedAt: null,
  scheduledEndAt: null,
  actualEndedAt: null,
  durationSeconds: 600,
  pausedAt: null,
  accumulatedPausedSeconds: 0,
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
  if (isMongoConnected) {
    try {
      await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: { matchAssignments: newAssignments, lastUpdated: new Date().toISOString() } },
        { upsert: true }
      );
    } catch (err) {
      console.warn('Could not persist matchAssignments to MongoDB:', err);
    }
  }
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

function checkInMemoryAutoAdvance(s) {
  if (!s) return;
  const now = Date.now();
  if (s.scheduleStatus === 'BRIEFING' || s.scheduleStatus === 'SCHEDULED') {
    if (s.scheduledStartAt && now >= new Date(s.scheduledStartAt).getTime()) {
      console.log(`⏰ [Schedule Clock Memory] Transitioning ${s.scheduleStatus} -> LIVE for ${s.roundId}`);
      s.scheduleStatus = 'LIVE';
      s.actualStartedAt = s.scheduledStartAt;
      if (!s.scheduledEndAt && s.durationSeconds) {
        s.scheduledEndAt = new Date(new Date(s.actualStartedAt).getTime() + s.durationSeconds * 1000).toISOString();
      }
      if (s.roundId === 'ROUND_1' && (s.activePhase === 'BRIEFING' || s.activePhase === 'LOBBY')) {
        s.activePhase = 'CREATE';
        const dur = TIMED_PHASES.CREATE || 600;
        s.phaseDuration = dur;
        s.phaseStartedAt = new Date().toISOString();
        s.phaseEndsAt = s.scheduledEndAt || new Date(now + dur * 1000).toISOString();
      }
      s.lastUpdated = new Date().toISOString();
    }
  } else if (s.scheduleStatus === 'LIVE') {
    if (s.scheduledEndAt && now >= new Date(s.scheduledEndAt).getTime()) {
      console.log(`🏁 [Schedule Clock Memory] Deadline reached for ${s.roundId}. Concluding round.`);
      s.scheduleStatus = 'COMPLETED';
      s.actualEndedAt = new Date().toISOString();
      s.activePhase = 'COMPLETE';
      s.isRoundStarted = false;
      s.lastUpdated = new Date().toISOString();
    }
  }
}

// Authoritative Persistent Arena State Loader & Auto-Advancer
async function getPersistentArenaState() {
  if (!isMongoConnected) {
    checkInMemoryAutoAdvance(arenaState);
    return arenaState;
  }

  try {
    let doc = await ArenaState.findOne({ key: 'global_arena_state' });
    if (!doc) {
      doc = await ArenaState.create(DEFAULT_ARENA_STATE);
    }

    let modified = false;
    const now = Date.now();

    // 1. Authoritative Round Schedule Wall-Clock Auto Advance
    if (doc.scheduleStatus === 'BRIEFING' || doc.scheduleStatus === 'SCHEDULED') {
      if (doc.scheduledStartAt && now >= new Date(doc.scheduledStartAt).getTime()) {
        console.log(`⏰ [Schedule Clock DB] Transitioning ${doc.scheduleStatus} -> LIVE for ${doc.roundId}`);
        doc.scheduleStatus = 'LIVE';
        doc.actualStartedAt = doc.scheduledStartAt;
        if (!doc.scheduledEndAt && doc.durationSeconds) {
          doc.scheduledEndAt = new Date(new Date(doc.actualStartedAt).getTime() + doc.durationSeconds * 1000).toISOString();
        }
        if (doc.roundId === 'ROUND_1' && (doc.activePhase === 'BRIEFING' || doc.activePhase === 'LOBBY')) {
          doc.activePhase = 'CREATE';
          const dur = TIMED_PHASES.CREATE || 600;
          doc.phaseDuration = dur;
          doc.phaseStartedAt = new Date().toISOString();
          doc.phaseEndsAt = doc.scheduledEndAt || new Date(now + dur * 1000).toISOString();
        }
        modified = true;
      }
    } else if (doc.scheduleStatus === 'LIVE') {
      if (doc.scheduledEndAt && now >= new Date(doc.scheduledEndAt).getTime()) {
        console.log(`🏁 [Schedule Clock DB] Deadline reached for ${doc.roundId}. Concluding round.`);
        doc.scheduleStatus = 'COMPLETED';
        doc.actualEndedAt = new Date().toISOString();
        doc.activePhase = 'COMPLETE';
        doc.isRoundStarted = false;
        modified = true;
      }
    }

    // 2. Round 1 Sub-Phase Auto Advance (CREATE -> MATCH -> PARASITE -> EVOLVE -> COMPLETE)
    if (doc.isRoundStarted && doc.autoAdvance && doc.phaseEndsAt && doc.roundId === 'ROUND_1' && doc.scheduleStatus === 'LIVE') {
      const endsAt = new Date(doc.phaseEndsAt).getTime();

      if (now >= endsAt) {
        const nextPhase = getNextPhase(doc.activePhase);
        if (nextPhase) {
          console.log(`🔄 [Auto-Advance DB] Sub-phase timer expired: ${doc.activePhase} -> ${nextPhase}`);
          
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
            doc.scheduleStatus = 'COMPLETED';
          }
          doc.markModified('matchAssignments');
          modified = true;
        }
      }
    }

    if (modified) {
      doc.lastUpdated = new Date().toISOString();
      await doc.save();
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
      const targetRound = updates.roundId || state.roundId || 'ROUND_1';
      const duration = updates.phaseDuration || TIMED_PHASES.BRIEFING; // 60s
      const roundDur = updates.durationSeconds || 600;
      const isBriefing = updates.activePhase === 'BRIEFING' || !updates.activePhase;

      const newState = {
        isRoundStarted: true,
        roundId: targetRound,
        sessionId: updates.sessionId || ('pw_sess_' + Date.now()),
        scheduleStatus: isBriefing ? 'BRIEFING' : 'LIVE',
        startedAt: now.toISOString(),
        activePhase: isBriefing ? 'BRIEFING' : (targetRound === 'ROUND_1' ? 'CREATE' : 'LIVE'),
        phaseStartedAt: now.toISOString(),
        phaseDuration: duration,
        phaseEndsAt: new Date(now.getTime() + duration * 1000).toISOString(),
        scheduledStartAt: isBriefing ? new Date(now.getTime() + duration * 1000).toISOString() : now.toISOString(),
        actualStartedAt: isBriefing ? null : now.toISOString(),
        durationSeconds: roundDur,
        scheduledEndAt: new Date(now.getTime() + ((isBriefing ? duration : 0) + roundDur) * 1000).toISOString(),
        actualEndedAt: null,
        pausedAt: null,
        accumulatedPausedSeconds: 0,
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

      console.log(`🚀 [Arena Started] Round: ${targetRound} | Phase: ${newState.activePhase} | Teams: ${teamCount} | Ends: ${state.phaseEndsAt}`);
      return res.json({ success: true, state });
    }

    // 2. STOP / PAUSE ROUND
    if (updates.isRoundStarted === false) {
      const resetData = {
        isRoundStarted: false,
        scheduleStatus: updates.activePhase === 'COMPLETE' ? 'COMPLETED' : 'LOBBY',
        startedAt: null,
        activePhase: updates.activePhase || 'LOBBY',
        phaseStartedAt: null,
        phaseEndsAt: null,
        phaseDuration: 0,
        pausedAt: null,
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

      if (newPhase === 'COMPLETE') {
        advanceData.scheduleStatus = 'COMPLETED';
        advanceData.actualEndedAt = now.toISOString();
        advanceData.isRoundStarted = false;
      } else if (state.scheduleStatus === 'BRIEFING' && newPhase !== 'BRIEFING') {
        advanceData.scheduleStatus = 'LIVE';
        advanceData.actualStartedAt = now.toISOString();
      }

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
    if (updates.roundId) otherUpdates.roundId = updates.roundId;
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

// POST /api/arena/reset-round (Comprehensive Round Reset: State, Results, or Entire Event)
app.post('/api/arena/reset-round', async (req, res) => {
  try {
    const { roundId = 'ROUND_1', mode = 'RESET_STATE', clearTeams = false } = req.body;
    const now = new Date().toISOString();

    console.log(`🔄 [Reset Round] Requested: roundId=${roundId}, mode=${mode}, clearTeams=${clearTeams}`);

    // Operation A: RESET_STATE (Return selected round to initial phase & timer; keep all teams, submissions, and scores)
    if (mode === 'RESET_STATE') {
      const stateReset = {
        isRoundStarted: false,
        roundId,
        scheduleStatus: 'LOBBY',
        startedAt: null,
        activePhase: 'LOBBY',
        phaseStartedAt: null,
        phaseEndsAt: null,
        phaseDuration: 0,
        scheduledStartAt: null,
        scheduledEndAt: null,
        actualStartedAt: null,
        actualEndedAt: null,
        pausedAt: null,
        accumulatedPausedSeconds: 0,
        lastUpdated: now,
      };

      if (roundId === 'ROUND_1') {
        stateReset.matchAssignments = {};
        matchAssignments = {};
      }

      let updatedState;
      if (isMongoConnected) {
        const doc = await ArenaState.findOneAndUpdate(
          { key: 'global_arena_state' },
          { $set: stateReset },
          { upsert: true, new: true }
        );
        updatedState = doc.toObject();
      } else {
        arenaState = { ...arenaState, ...stateReset };
        updatedState = arenaState;
      }

      console.log(`✅ [Reset Round State] Round ${roundId} returned to initial LOBBY state.`);
      return res.json({
        success: true,
        operation: 'RESET_STATE',
        roundId,
        message: `Round ${roundId} state returned to initial LOBBY. All submissions and scores preserved.`,
        state: updatedState,
      });
    }

    // Operation B: RESET_RESULTS (Clear submissions and scores for THIS round; reset round state)
    if (mode === 'RESET_RESULTS') {
      const stateReset = {
        isRoundStarted: false,
        roundId,
        scheduleStatus: 'LOBBY',
        startedAt: null,
        activePhase: 'LOBBY',
        phaseStartedAt: null,
        phaseEndsAt: null,
        phaseDuration: 0,
        scheduledStartAt: null,
        scheduledEndAt: null,
        actualStartedAt: null,
        actualEndedAt: null,
        pausedAt: null,
        accumulatedPausedSeconds: 0,
        lastUpdated: now,
      };

      if (roundId === 'ROUND_1') {
        stateReset.matchAssignments = {};
        matchAssignments = {};
      }

      let updatedState;
      if (isMongoConnected) {
        const doc = await ArenaState.findOneAndUpdate(
          { key: 'global_arena_state' },
          { $set: stateReset },
          { upsert: true, new: true }
        );
        updatedState = doc.toObject();

        if (roundId === 'ROUND_1') {
          await Team.updateMany(
            {},
            {
              $set: {
                'round1.status': 'NOT_STARTED',
                'round1.score': 0,
                'round1.firstPrompt': '',
                'round1.firstOutput': '',
                'round1.mutationNotes': '',
                'round1.finalPrompt': '',
                'round1.finalOutput': '',
                'round1.matchedOpponents': [],
                'round1.evaluation': { promptQuality: 0, problemUnderstanding: 0, outputQuality: 0, improvement: 0, total: 0, judgeNotes: '', evaluatedAt: null },
              },
            }
          );
          await Submission.deleteMany({
            $or: [{ round: 'round-1' }, { round: 'ROUND_1' }, { round: '1' }],
          });
        } else if (roundId === 'ROUND_2') {
          await Team.updateMany(
            {},
            {
              $set: {
                'round2.status': 'LOCKED',
                'round2.score': 0,
              },
            }
          );
          await Submission.deleteMany({
            $or: [{ round: 'round-2' }, { round: 'ROUND_2' }, { round: '2' }],
          });
        } else if (roundId === 'ROUND_3') {
          await Team.updateMany(
            {},
            {
              $set: {
                'round3.status': 'LOCKED',
                'round3.score': 0,
                'round3.rank': null,
              },
            }
          );
          await Submission.deleteMany({
            $or: [{ round: 'round-3' }, { round: 'ROUND_3' }, { round: '3' }],
          });
        }

        // Recalculate total tournament scores for all teams
        const allTeams = await Team.find({});
        for (const t of allTeams) {
          t.totalTournamentScore = (t.round1?.score || 0) + (t.round2?.score || 0) + (t.round3?.score || 0);
          await t.save();
        }
      } else {
        arenaState = { ...arenaState, ...stateReset };
        updatedState = arenaState;

        inMemoryTeams.forEach(t => {
          if (roundId === 'ROUND_1' && t.round1) {
            t.round1.status = 'NOT_STARTED';
            t.round1.score = 0;
            t.round1.firstPrompt = '';
            t.round1.firstOutput = '';
            t.round1.finalPrompt = '';
            t.round1.finalOutput = '';
          } else if (roundId === 'ROUND_2' && t.round2) {
            t.round2.score = 0;
          } else if (roundId === 'ROUND_3' && t.round3) {
            t.round3.score = 0;
          }
          t.totalTournamentScore = (t.round1?.score || 0) + (t.round2?.score || 0) + (t.round3?.score || 0);
        });
      }

      console.log(`✅ [Reset Round Results] Results for ${roundId} cleared.`);
      return res.json({
        success: true,
        operation: 'RESET_RESULTS',
        roundId,
        message: `Round ${roundId} results and submissions wiped. Round reset to LOBBY.`,
        state: updatedState,
      });
    }

    // Operation C: RESET_EVENT (Reset all rounds, return event to setup/lobby)
    if (mode === 'RESET_EVENT') {
      matchAssignments = {};
      const fullReset = {
        ...DEFAULT_ARENA_STATE,
        lastUpdated: now,
      };

      let updatedState;
      if (isMongoConnected) {
        const doc = await ArenaState.findOneAndUpdate(
          { key: 'global_arena_state' },
          { $set: fullReset },
          { upsert: true, new: true }
        );
        updatedState = doc.toObject();

        if (clearTeams) {
          await Team.deleteMany({});
          await Submission.deleteMany({});
          inMemoryTeams.length = 0;
          inMemorySubmissions.length = 0;
        } else {
          await Team.updateMany(
            {},
            {
              $set: {
                'round1.status': 'NOT_STARTED',
                'round1.score': 0,
                'round1.firstPrompt': '',
                'round1.firstOutput': '',
                'round1.mutationNotes': '',
                'round1.finalPrompt': '',
                'round1.finalOutput': '',
                'round1.matchedOpponents': [],
                'round1.isQualifiedR2': false,
                'round2.status': 'LOCKED',
                'round2.score': 0,
                'round2.isQualifiedR3': false,
                'round3.status': 'LOCKED',
                'round3.score': 0,
                'round3.rank': null,
                totalTournamentScore: 0,
              },
            }
          );
          await Submission.deleteMany({});
        }
      } else {
        arenaState = { ...fullReset };
        updatedState = arenaState;
        if (clearTeams) {
          inMemoryTeams.length = 0;
          inMemorySubmissions.length = 0;
        } else {
          inMemoryTeams.forEach(t => {
            if (t.round1) { t.round1.score = 0; t.round1.status = 'NOT_STARTED'; }
            if (t.round2) { t.round2.score = 0; t.round2.status = 'LOCKED'; }
            if (t.round3) { t.round3.score = 0; t.round3.status = 'LOCKED'; }
            t.totalTournamentScore = 0;
          });
        }
      }

      console.log(`🧹 [Reset Entire Event] Competition completely reset to pre-event status.`);
      return res.json({
        success: true,
        operation: 'RESET_EVENT',
        message: `Entire Prompt War competition reset to pre-event state. ${clearTeams ? 'Teams deleted.' : 'Teams preserved with reset scores.'}`,
        state: updatedState,
      });
    }

    return res.status(400).json({ error: `Unknown reset mode: ${mode}. Valid modes: RESET_STATE, RESET_RESULTS, RESET_EVENT` });
  } catch (err) {
    console.error('Reset Round Error:', err);
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
      // Synchronized Clock Compatibility Fields
      serverTime: new Date().toISOString(),
      roundId: state.roundId || 'ROUND_1',
      sessionId: state.sessionId || 'pw_sess_default',
      scheduleStatus: state.scheduleStatus || 'LOBBY',
      scheduledStartAt: state.scheduledStartAt || null,
      scheduledEndAt: state.scheduledEndAt || null,
      actualStartedAt: state.actualStartedAt || null,
      actualEndedAt: state.actualEndedAt || null,
      pausedAt: state.pausedAt || null,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------------------------------------------------------------
// AUTHORITATIVE SYNCHRONIZED ROUND SCHEDULE API (GLOBAL CLOCK)
// -------------------------------------------------------------

// GET /api/arena/clock (Universal authoritative synchronized clock for all rounds & admin)
app.get('/api/arena/clock', async (req, res) => {
  try {
    const state = await getPersistentArenaState();
    const now = Date.now();
    let remainingSeconds = 0;
    let secondsUntilStart = 0;

    if (state.scheduleStatus === 'PAUSED' && state.pausedAt && state.scheduledEndAt) {
      // Frozen at pause timestamp
      remainingSeconds = Math.max(0, Math.ceil((new Date(state.scheduledEndAt).getTime() - new Date(state.pausedAt).getTime()) / 1000));
    } else if (state.scheduleStatus === 'LIVE' && state.scheduledEndAt) {
      remainingSeconds = Math.max(0, Math.ceil((new Date(state.scheduledEndAt).getTime() - now) / 1000));
    } else if (state.scheduleStatus === 'BRIEFING' || state.scheduleStatus === 'SCHEDULED') {
      remainingSeconds = state.durationSeconds || 600;
      if (state.scheduledStartAt) {
        secondsUntilStart = Math.max(0, Math.ceil((new Date(state.scheduledStartAt).getTime() - now) / 1000));
      }
    } else if (state.scheduleStatus === 'COMPLETED') {
      remainingSeconds = 0;
    } else {
      // LOBBY
      remainingSeconds = state.durationSeconds || 600;
    }

    res.json({
      success: true,
      serverTime: new Date().toISOString(),
      roundId: state.roundId || 'ROUND_1',
      sessionId: state.sessionId || 'pw_sess_default',
      status: state.scheduleStatus || 'LOBBY',
      scheduledStartAt: state.scheduledStartAt || null,
      actualStartedAt: state.actualStartedAt || null,
      scheduledEndAt: state.scheduledEndAt || null,
      actualEndedAt: state.actualEndedAt || null,
      remainingSeconds,
      secondsUntilStart,
      totalSeconds: state.durationSeconds || 600,
      durationSeconds: state.durationSeconds || 600,
      pausedAt: state.pausedAt || null,
      accumulatedPausedSeconds: state.accumulatedPausedSeconds || 0,
      activePhase: state.activePhase || 'LOBBY',
      isRoundStarted: Boolean(state.isRoundStarted),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/schedule (Admin authoritative round schedule setter)
app.post('/api/arena/schedule', async (req, res) => {
  try {
    const {
      roundId = 'ROUND_1',
      durationSeconds = 600,
      briefingSeconds = 60,
      scheduledStartAt = null,
      autoAdvance = true,
    } = req.body;

    const now = new Date();
    const sessionId = 'pw_sess_' + Date.now();
    let computedStartAt;
    let computedStatus;
    let computedEndAt;
    let actualStartedAt = null;

    if (briefingSeconds > 0) {
      computedStartAt = scheduledStartAt || new Date(now.getTime() + briefingSeconds * 1000).toISOString();
      computedStatus = 'BRIEFING';
      computedEndAt = new Date(new Date(computedStartAt).getTime() + durationSeconds * 1000).toISOString();
    } else {
      computedStartAt = scheduledStartAt || now.toISOString();
      computedStatus = 'LIVE';
      actualStartedAt = computedStartAt;
      computedEndAt = new Date(new Date(computedStartAt).getTime() + durationSeconds * 1000).toISOString();
    }

    const scheduleData = {
      isRoundStarted: true,
      roundId,
      sessionId,
      scheduleStatus: computedStatus,
      scheduledStartAt: computedStartAt,
      actualStartedAt,
      scheduledEndAt: computedEndAt,
      actualEndedAt: null,
      durationSeconds: Number(durationSeconds),
      pausedAt: null,
      accumulatedPausedSeconds: 0,
      activePhase: computedStatus === 'BRIEFING' ? 'BRIEFING' : (roundId === 'ROUND_1' ? 'CREATE' : 'LIVE'),
      phaseStartedAt: now.toISOString(),
      phaseDuration: computedStatus === 'BRIEFING' ? briefingSeconds : durationSeconds,
      phaseEndsAt: computedStatus === 'BRIEFING' ? computedStartAt : computedEndAt,
      autoAdvance: Boolean(autoAdvance),
      lastUpdated: now.toISOString(),
    };

    let state;
    if (isMongoConnected) {
      const updated = await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: scheduleData },
        { upsert: true, new: true }
      );
      state = updated.toObject();
    } else {
      arenaState = { ...arenaState, ...scheduleData };
      state = arenaState;
    }

    console.log(`📅 [Schedule Set] Round: ${roundId} | Status: ${computedStatus} | Starts: ${computedStartAt} | Ends: ${computedEndAt}`);
    return res.json({ success: true, state });
  } catch (err) {
    console.error('Arena Schedule Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/schedule/pause
app.post('/api/arena/schedule/pause', async (req, res) => {
  try {
    let state = await getPersistentArenaState();
    if (state.scheduleStatus === 'PAUSED') {
      return res.json({ success: true, state, message: 'Already paused' });
    }

    const now = new Date().toISOString();
    const pauseData = {
      scheduleStatus: 'PAUSED',
      pausedAt: now,
      lastUpdated: now,
    };

    if (isMongoConnected) {
      const updated = await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: pauseData },
        { upsert: true, new: true }
      );
      state = updated.toObject();
    } else {
      arenaState = { ...arenaState, ...pauseData };
      state = arenaState;
    }

    console.log(`⏸️ [Schedule Paused] Paused at: ${now}`);
    return res.json({ success: true, state });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/schedule/resume
app.post('/api/arena/schedule/resume', async (req, res) => {
  try {
    let state = await getPersistentArenaState();
    if (state.scheduleStatus !== 'PAUSED') {
      return res.json({ success: true, state, message: 'Not paused' });
    }

    const now = Date.now();
    const pausedTime = state.pausedAt ? new Date(state.pausedAt).getTime() : now;
    const pauseDurationMs = Math.max(0, now - pausedTime);
    const newEndMs = state.scheduledEndAt ? new Date(state.scheduledEndAt).getTime() + pauseDurationMs : now + (state.durationSeconds || 600) * 1000;
    const newPhaseEndMs = state.phaseEndsAt ? new Date(state.phaseEndsAt).getTime() + pauseDurationMs : newEndMs;

    const resumeData = {
      scheduleStatus: 'LIVE',
      pausedAt: null,
      accumulatedPausedSeconds: (state.accumulatedPausedSeconds || 0) + Math.round(pauseDurationMs / 1000),
      scheduledEndAt: new Date(newEndMs).toISOString(),
      phaseEndsAt: new Date(newPhaseEndMs).toISOString(),
      lastUpdated: new Date().toISOString(),
    };

    if (isMongoConnected) {
      const updated = await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: resumeData },
        { upsert: true, new: true }
      );
      state = updated.toObject();
    } else {
      arenaState = { ...arenaState, ...resumeData };
      state = arenaState;
    }

    console.log(`▶️ [Schedule Resumed] Extended end by ${Math.round(pauseDurationMs / 1000)}s to ${resumeData.scheduledEndAt}`);
    return res.json({ success: true, state });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/schedule/extend (Add extra seconds to current live deadline)
app.post('/api/arena/schedule/extend', async (req, res) => {
  try {
    const { extraSeconds = 120 } = req.body;
    let state = await getPersistentArenaState();

    const addMs = Number(extraSeconds) * 1000;
    const newEndMs = state.scheduledEndAt ? new Date(state.scheduledEndAt).getTime() + addMs : Date.now() + addMs;
    const newPhaseEndMs = state.phaseEndsAt ? new Date(state.phaseEndsAt).getTime() + addMs : newEndMs;

    const extendData = {
      scheduledEndAt: new Date(newEndMs).toISOString(),
      phaseEndsAt: new Date(newPhaseEndMs).toISOString(),
      durationSeconds: (state.durationSeconds || 600) + Number(extraSeconds),
      lastUpdated: new Date().toISOString(),
    };

    if (isMongoConnected) {
      const updated = await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: extendData },
        { upsert: true, new: true }
      );
      state = updated.toObject();
    } else {
      arenaState = { ...arenaState, ...extendData };
      state = arenaState;
    }

    console.log(`⏱️ [Schedule Extended] +${extraSeconds}s, new end: ${extendData.scheduledEndAt}`);
    return res.json({ success: true, state });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/arena/schedule/end (Immediately force conclude active round)
app.post('/api/arena/schedule/end', async (req, res) => {
  try {
    const now = new Date().toISOString();
    const endData = {
      isRoundStarted: false,
      scheduleStatus: 'COMPLETED',
      activePhase: 'COMPLETE',
      actualEndedAt: now,
      scheduledEndAt: now,
      phaseEndsAt: now,
      autoAdvance: false,
      lastUpdated: now,
    };

    let state;
    if (isMongoConnected) {
      const updated = await ArenaState.findOneAndUpdate(
        { key: 'global_arena_state' },
        { $set: endData },
        { upsert: true, new: true }
      );
      state = updated.toObject();
    } else {
      arenaState = { ...arenaState, ...endData };
      state = arenaState;
    }

    console.log(`🏁 [Schedule Force Concluded] Round marked COMPLETED at ${now}`);
    return res.json({ success: true, state });
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
    let assignments = state.matchAssignments || matchAssignments || {};
    let opponents = assignments[upper] || [];

    // If assignments are missing/empty for this team and round is in MATCH, PARASITE, or EVOLVE:
    const isMatchingPhase = ['MATCH', 'PARASITE', 'EVOLVE'].includes(state.activePhase);
    if ((!opponents || opponents.length === 0) && (isMatchingPhase || state.isRoundStarted)) {
      console.log(`⚡ [Matchmaking On-Demand] Assigning opponents for ${upper}...`);
      const freshAssignments = await runServerMatchmaking();
      assignments = freshAssignments || {};
      opponents = assignments[upper] || [];
    }

    res.json({
      success: true,
      teamCode: upper,
      opponents,
      matchPhaseActive: ['MATCH', 'PARASITE', 'EVOLVE'].includes(state.activePhase),
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

    // Authoritative Synchronized Clock submission gate
    const state = await getPersistentArenaState();
    if (state.scheduleStatus === 'LOBBY' || state.scheduleStatus === 'SCHEDULED' || state.scheduleStatus === 'BRIEFING') {
      return res.status(403).json({
        success: false,
        error: 'Submissions not accepted: Round has not officially started yet.',
      });
    }

    if (state.scheduleStatus === 'PAUSED') {
      return res.status(403).json({
        success: false,
        error: 'Submission rejected: Competition arena is currently paused by admin.',
      });
    }

    if (state.scheduleStatus === 'COMPLETED' || (state.scheduledEndAt && Date.now() > new Date(state.scheduledEndAt).getTime() + 5000)) {
      return res.status(403).json({
        success: false,
        error: 'Submission rejected: Official round deadline has passed.',
        scheduledEndAt: state.scheduledEndAt,
        serverTime: new Date().toISOString(),
      });
    }

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
    console.log(`   - GET  /api/arena/clock`);
    console.log(`   - POST /api/arena/schedule`);
    console.log(`   - POST /api/arena/schedule/pause`);
    console.log(`   - POST /api/arena/schedule/resume`);
    console.log(`   - POST /api/arena/schedule/extend`);
    console.log(`   - POST /api/arena/schedule/end`);
    console.log(`   - GET  /api/arena/matches/:teamCode\n`);
  });
}

export default app;
