import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Submission } from './models/Submission.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Track Mongo Connection State
let isMongoConnected = false;

async function connectDB() {
  if (!MONGODB_URI || MONGODB_URI.includes('<db_password>')) {
    console.warn('\n⚠️ [MongoDB] MONGODB_URI is not configured or contains placeholder <db_password>!');
    console.warn('⚠️ [MongoDB] Please update server/.env with your actual Atlas password.\n');
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

// Connect at startup
connectDB();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Prompt War Unified Backend',
    mongoConnected: isMongoConnected,
    hasConfiguredUri: Boolean(MONGODB_URI && !MONGODB_URI.includes('<db_password>')),
    timestamp: new Date().toISOString(),
  });
});

// GET /api/submissions
app.get('/api/submissions', async (req, res) => {
  if (!isMongoConnected) {
    return res.status(503).json({
      error: 'Database not connected',
      mongoConnected: false,
      hint: 'Configure password in server/.env',
    });
  }

  try {
    const filter = {};
    if (req.query.round) {
      filter.round = req.query.round;
    }
    const submissions = await Submission.find(filter).sort({ totalScore: -1, createdAt: -1 });
    res.json({
      success: true,
      count: submissions.length,
      submissions,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/submissions (Upsert by submissionId or teamName + round)
app.post('/api/submissions', async (req, res) => {
  if (!isMongoConnected) {
    return res.status(503).json({
      error: 'Database not connected',
      mongoConnected: false,
    });
  }

  try {
    const data = req.body;
    const subId = data.id || data.submissionId || 'sub_' + Date.now();
    const round = data.round || 'round-1';

    // Upsert submission
    const updated = await Submission.findOneAndUpdate(
      { $or: [{ submissionId: subId }, { teamName: data.teamName, round }] },
      {
        ...data,
        submissionId: subId,
        round,
        baseScore: data.baseScore ?? data.totalScore,
      },
      { new: true, upsert: true }
    );

    res.json({ success: true, submission: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/submissions/:id (Update evaluation, notes, status, score adjustment)
app.patch('/api/submissions/:id', async (req, res) => {
  if (!isMongoConnected) {
    return res.status(503).json({ error: 'Database not connected' });
  }

  try {
    const { id } = req.params;
    const updates = req.body;

    const sub = await Submission.findOne({
      $or: [{ submissionId: id }, { _id: mongoose.isValidObjectId(id) ? id : null }],
    });

    if (!sub) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    // Apply adjustments if present
    if (updates.scoreAdjustment !== undefined) {
      sub.scoreAdjustment = Number(updates.scoreAdjustment);
      const base = sub.baseScore ?? sub.totalScore;
      sub.totalScore = Math.max(0, Math.min(100, Number(base) + Number(sub.scoreAdjustment)));
    }
    if (updates.adjustmentReason !== undefined) sub.adjustmentReason = updates.adjustmentReason;
    if (updates.judgeNotes !== undefined) sub.judgeNotes = updates.judgeNotes;
    if (updates.status !== undefined) sub.status = updates.status;
    if (updates.totalScore !== undefined && updates.scoreAdjustment === undefined) {
      sub.totalScore = Number(updates.totalScore);
    }

    await sub.save();
    res.json({ success: true, submission: sub });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/submissions/:id
app.delete('/api/submissions/:id', async (req, res) => {
  if (!isMongoConnected) {
    return res.status(503).json({ error: 'Database not connected' });
  }

  try {
    const { id } = req.params;
    await Submission.deleteOne({
      $or: [{ submissionId: id }, { _id: mongoose.isValidObjectId(id) ? id : null }],
    });
    res.json({ success: true, message: `Submission ${id} deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/submissions (Clear all)
app.delete('/api/submissions', async (req, res) => {
  if (!isMongoConnected) {
    return res.status(503).json({ error: 'Database not connected' });
  }

  try {
    const round = req.query.round;
    const filter = round ? { round } : {};
    const result = await Submission.deleteMany(filter);
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 [Backend] Prompt War API Server listening on http://localhost:${PORT}`);
  console.log(`📡 [Backend] Endpoints:`);
  console.log(`   - GET  /api/health`);
  console.log(`   - GET  /api/submissions`);
  console.log(`   - POST /api/submissions`);
  console.log(`   - PATCH /api/submissions/:id`);
  console.log(`   - DELETE /api/submissions/:id\n`);
});
