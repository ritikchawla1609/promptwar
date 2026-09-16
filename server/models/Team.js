import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    teamCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
      trim: true,
    },
    teamName: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    leaderName: {
      type: String,
      required: true,
      trim: true,
    },
    leaderContact: {
      type: String,
      default: '',
      trim: true,
    },
    college: {
      type: String,
      default: 'Chandigarh University',
      trim: true,
    },
    memberCount: {
      type: Number,
      default: 1,
    },
    members: {
      type: [String],
      default: [],
    },
    // Universal Tournament State Across All 3 Rounds
    round1: {
      status: {
        type: String,
        enum: ['NOT_STARTED', 'IN_PROGRESS', 'FIRST_LOCKED', 'PARASITE', 'EVOLVING', 'COMPLETED'],
        default: 'NOT_STARTED',
      },
      score: {
        type: Number,
        default: 0,
      },
      evaluation: {
        promptQuality: { type: Number, default: 0 },
        problemUnderstanding: { type: Number, default: 0 },
        outputQuality: { type: Number, default: 0 },
        improvement: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
        judgeNotes: { type: String, default: '' },
        evaluatedAt: { type: String },
      },
      firstPrompt: { type: String, default: '' },
      firstOutput: { type: String, default: '' },
      mutationNotes: { type: String, default: '' },
      finalPrompt: { type: String, default: '' },
      finalOutput: { type: String, default: '' },
      matchedOpponents: { type: Array, default: [] },
      isQualifiedR2: { type: Boolean, default: false },
    },
    round2: {
      status: {
        type: String,
        default: 'LOCKED',
      },
      score: {
        type: Number,
        default: 0,
      },
      isQualifiedR3: { type: Boolean, default: false },
    },
    round3: {
      status: {
        type: String,
        default: 'LOCKED',
      },
      score: {
        type: Number,
        default: 0,
      },
      rank: {
        type: Number,
        default: null,
      },
    },
    totalTournamentScore: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

teamSchema.index({ teamCode: 1, teamName: 1 });
teamSchema.index({ 'round1.score': -1 });

export const Team = mongoose.model('Team', teamSchema);
