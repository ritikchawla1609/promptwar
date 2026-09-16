import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
  {
    submissionId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    participantId: {
      type: String,
      index: true,
    },
    anonymousId: {
      type: String,
      default: '',
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
    // Prompt Parasite First Form
    firstPrompt: {
      type: String,
      default: '',
    },
    firstOutput: {
      type: String,
      default: '',
    },
    firstSubmittedAt: {
      type: Date,
    },
    // Prompt Parasite Cluster Matched Opponents
    matchedOpponentIds: {
      type: [String],
      default: [],
    },
    mutationNotes: {
      type: String,
      default: '',
    },
    // Prompt Parasite Final Form
    finalPrompt: {
      type: String,
      default: '',
    },
    finalOutput: {
      type: String,
      default: '',
    },
    finalSubmittedAt: {
      type: Date,
    },
    // Scoring & Evaluation
    totalScore: {
      type: Number,
      default: 0,
      index: true,
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
    status: {
      type: String,
      default: 'NOT_STARTED',
      index: true,
    },
    judgeNotes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

submissionSchema.index({ round: 1, totalScore: -1 });

export const Submission = mongoose.model('Submission', submissionSchema);
