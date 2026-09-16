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

// Global Arena State (Round 1 lifecycle controller)
let arenaState = {
  isRoundStarted: false, // Default: false (waiting for Tech Tatva host broadcast!)
  activePhase: 'LOBBY', // 'LOBBY' | 'CREATE' | 'MATCH' | 'PARASITE' | 'EVOLVE' | 'COMPLETE'
  startedAt: null,
  activeChallenge: null,
  timers: {
    create: 600,
    parasite: 300,
    evolve: 600,
  },
  lastUpdated: new Date().toISOString(),
};

async function connectDB() {
  if (!MONGODB_URI || MONGODB_URI.includes('<db_password>')) {
    console.warn('\n⚠️ [MongoDB] MONGODB_URI contains placeholder <db_password>!');
    console.warn('ℹ️ [MongoDB] Running in high-reliability in-memory fallback mode for local development.\n');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isMongoConnected = true;
    console.log('✅ [MongoDB] Successfully connected to MongoDB Atlas cluster!');
  } catch (err) {
    isMongoConnected = false;
    console.error('❌ [MongoDB] Connection error:', err.message);
  }
}

mongoose.connection.on('disconnected', () => {
  isMongoConnected = false;
  console.warn('⚠️ [MongoDB] Disconnected from MongoDB');
});

mongoose.connection.on('reconnected', () => {
  isMongoConnected = true;
  console.log('🔄 [MongoDB] Reconnected to MongoDB');
});

connectDB();

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Prompt War Unified Backend',
    mongoConnected: isMongoConnected,
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
app.post('/api/arena/state', (req, res) => {
  try {
    const updates = req.body;
    arenaState = {
      ...arenaState,
      ...updates,
      lastUpdated: new Date().toISOString(),
    };

    if (updates.isRoundStarted && !arenaState.startedAt) {
      arenaState.startedAt = new Date().toISOString();
    }

    if (updates.isRoundStarted === false) {
      arenaState.startedAt = null;
    }

    console.log(`📡 [Arena State Broadcast] Started: ${arenaState.isRoundStarted} | Phase: ${arenaState.activePhase}`);
    return res.json({ success: true, state: arenaState });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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

    if (isMongoConnected) {
      let team = await Team.findOne({
        $or: [{ teamName: new RegExp(`^${trimmedTeamName}$`, 'i') }, { teamCode }],
      });

      if (team) {
        // Update details if already registered
        team.leaderName = leaderName;
        if (leaderContact) team.leaderContact = leaderContact;
        if (college) team.college = college;
        if (memberCount) team.memberCount = Number(memberCount);
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
        memberCount: Number(memberCount) || 1,
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
        if (memberCount) team.memberCount = Number(memberCount);
        if (members) team.members = members;
        return res.json({ success: true, team, isExisting: true });
      }

      team = {
        teamCode,
        teamName: trimmedTeamName,
        leaderName,
        leaderContact: leaderContact || '',
        college: college || 'Chandigarh University',
        memberCount: Number(memberCount) || 1,
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

      // Merge updates
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

      // Clean up linked submissions
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

      // Also sync to Team document if teamName matches
      if (data.teamName) {
        await Team.findOneAndUpdate(
          { teamName: data.teamName },
          {
            $set: {
              'round1.status': data.status || 'IN_PROGRESS',
              'round1.firstOutput': data.firstOutput || '',
              'round1.finalOutput': data.finalOutput || '',
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

      return res.json({ success: true, submission: subObj });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 [Backend] Prompt War Tournament API Server listening on http://127.0.0.1:${PORT}`);
  console.log(`📡 [Backend] Endpoints:`);
  console.log(`   - POST /api/teams/register`);
  console.log(`   - POST /api/teams/login`);
  console.log(`   - GET  /api/teams`);
  console.log(`   - PATCH /api/teams/:codeOrId`);
  console.log(`   - POST /api/teams/:codeOrId/qualify-r2`);
  console.log(`   - GET  /api/submissions`);
  console.log(`   - POST /api/submissions\n`);
});
