import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
  {
    submissionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    round: {
      type: String,
      default: 'round-1',
      index: true,
    },
    teamName: {
      type: String,
      required: true,
      index: true,
    },
    scenarioId: {
      type: String,
      default: 'techfest',
    },
    scenarioTitle: {
      type: String,
      default: 'Campus Techfest Launch',
    },
    totalScore: {
      type: Number,
      required: true,
      default: 0,
      index: true,
    },
    baseScore: {
      type: Number,
      default: 0,
    },
    scoreAdjustment: {
      type: Number,
      default: 0,
    },
    adjustmentReason: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'CONTEXT CUTTER',
    },
    cuts: {
      type: Number,
      default: 0,
    },
    trapCount: {
      type: Number,
      default: 0,
    },
    noiseCount: {
      type: Number,
      default: 0,
    },
    scores: {
      cookieCut: { type: Number, default: 0 },
      prompt: { type: Number, default: 0 },
      aiExecution: { type: Number, default: 0 },
      signalsScore: { type: Number, default: 0 },
      trapPenalty: { type: Number, default: 0 },
      noisePenalty: { type: Number, default: 0 },
    },
    promptText: {
      type: String,
      default: '',
    },
    wordCount: {
      type: Number,
      default: 0,
    },
    originalWordCount: {
      type: Number,
      default: 0,
    },
    isRawDataDump: {
      type: Boolean,
      default: false,
    },
    hasDirectiveVerb: {
      type: Boolean,
      default: true,
    },
    survivingFragments: {
      type: Array,
      default: [],
    },
    aiOutput: {
      type: String,
      default: '',
    },
    isContaminated: {
      type: Boolean,
      default: false,
    },
    contaminationReasons: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['submitted', 'approved_r2', 'flagged', 'rejected'],
      default: 'submitted',
      index: true,
    },
    judgeNotes: {
      type: String,
      default: '',
    },
    timestamp: {
      type: Number,
      default: () => Date.now(),
    },
    formattedTime: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Helpful compound index for fast leaderboard queries
submissionSchema.index({ round: 1, totalScore: -1 });

export const Submission = mongoose.model('Submission', submissionSchema);
