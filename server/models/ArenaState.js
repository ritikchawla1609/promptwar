import mongoose from 'mongoose';

const ArenaStateSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'global_arena_state', unique: true, index: true },
    isRoundStarted: { type: Boolean, default: false },
    activePhase: { type: String, default: 'LOBBY' },
    startedAt: { type: String, default: null },
    phaseStartedAt: { type: String, default: null },
    phaseEndsAt: { type: String, default: null },
    phaseDuration: { type: Number, default: 0 },
    minTeamsToStart: { type: Number, default: 3 },
    autoAdvance: { type: Boolean, default: true },
    activeChallenge: { type: mongoose.Schema.Types.Mixed, default: null },
    timers: {
      type: mongoose.Schema.Types.Mixed,
      default: () => ({ create: 600, parasite: 600, evolve: 600 }),
    },
    matchAssignments: {
      type: mongoose.Schema.Types.Mixed,
      default: () => ({}),
    },
    lastUpdated: { type: String, default: () => new Date().toISOString() },
  },
  { timestamps: true }
);

export const ArenaState = mongoose.model('ArenaState', ArenaStateSchema);
