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

    // Authoritative synchronized round schedule
    roundId: { type: String, default: 'ROUND_1' }, // 'ROUND_1' | 'ROUND_2' | 'ROUND_3' | 'NONE'
    sessionId: { type: String, default: () => 'pw_sess_' + Date.now() },
    scheduleStatus: { type: String, default: 'LOBBY' }, // 'SCHEDULED' | 'BRIEFING' | 'LIVE' | 'PAUSED' | 'COMPLETED' | 'LOBBY'
    scheduledStartAt: { type: String, default: null },
    actualStartedAt: { type: String, default: null },
    scheduledEndAt: { type: String, default: null },
    actualEndedAt: { type: String, default: null },
    durationSeconds: { type: Number, default: 600 },
    pausedAt: { type: String, default: null },
    accumulatedPausedSeconds: { type: Number, default: 0 },

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
