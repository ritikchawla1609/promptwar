// UNIFIED PROMPT WAR // ADMIN DATA TYPES

export type EventStatus = 'SETUP' | 'READY' | 'LIVE' | 'PAUSED' | 'COMPLETED';

export type ActiveRoundId = 'ROUND_1' | 'ROUND_2' | 'ROUND_3' | 'NONE';

export type TeamStatus = 'ACTIVE' | 'PAUSED' | 'OFFLINE' | 'COMPLETED' | 'DISQUALIFIED';

export interface PromptHistoryItem {
  round: 'ROUND_1' | 'ROUND_2' | 'ROUND_3';
  takeNumber?: number;
  prompt: string;
  output?: string;
  score: number;
  timestamp: string;
  notes?: string;
}

export interface TeamRecord {
  id: string;
  teamCode: string;
  teamName: string;
  leaderName: string;
  leaderContact: string;
  college: string;
  members: string[];
  status: TeamStatus;
  currentRound: 'ROUND_1' | 'ROUND_2' | 'ROUND_3';
  currentPhase: string;
  progressPercentage: number;
  roundScores: {
    round1: number;
    round2: number;
    round3: number;
  };
  totalScore: number;
  qualifiedForR2: boolean;
  qualifiedForR3: boolean;
  registeredAt: string;
  lastActiveAt: string;
  history?: PromptHistoryItem[];
  notes?: string;
}

export interface RoundSummary {
  id: ActiveRoundId;
  name: string;
  subtitle: string;
  status: 'PENDING' | 'READY' | 'ACTIVE' | 'PAUSED' | 'COMPLETED';
  configuredDurationMinutes: number;
  currentPhase: string;
  phases: string[];
  teamsStarted: number;
  teamsCompleted: number;
  averageScore: number;
  highestScore: number;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  target: string;
  actor: string;
  details: string;
  type: 'ROUND' | 'TEAM' | 'SCORE' | 'SETTINGS' | 'SYSTEM';
}

export interface ArenaStateServer {
  isRoundStarted: boolean;
  activePhase: string;
  activeRound?: ActiveRoundId;
  roundId?: ActiveRoundId;
  sessionId?: string;
  scheduleStatus?: 'SCHEDULED' | 'BRIEFING' | 'LIVE' | 'PAUSED' | 'COMPLETED' | 'LOBBY';
  scheduledStartAt?: string | null;
  actualStartedAt?: string | null;
  scheduledEndAt?: string | null;
  actualEndedAt?: string | null;
  durationSeconds?: number;
  pausedAt?: string | null;
  accumulatedPausedSeconds?: number;
  startedAt: string | null;
  phaseStartedAt: string | null;
  phaseEndsAt: string | null;
  phaseDuration: number;
  minTeamsToStart: number;
  autoAdvance: boolean;
  timers?: {
    create: number;
    parasite: number;
    evolve: number;
  };
  lastUpdated?: string;
}

export interface AuthoritativeClockState {
  serverTime: string;
  roundId: ActiveRoundId;
  sessionId: string;
  status: 'SCHEDULED' | 'BRIEFING' | 'LIVE' | 'PAUSED' | 'COMPLETED' | 'LOBBY';
  scheduledStartAt: string | null;
  actualStartedAt: string | null;
  scheduledEndAt: string | null;
  actualEndedAt: string | null;
  remainingSeconds: number;
  secondsUntilStart: number;
  totalSeconds: number;
  durationSeconds: number;
  pausedAt: string | null;
  accumulatedPausedSeconds: number;
  activePhase?: string;
  isRoundStarted?: boolean;
}

export interface EventSettings {
  eventName: string;
  eventStatus: EventStatus;
  activeRound: ActiveRoundId;
  weights: {
    round1: number;
    round2: number;
    round3: number;
  };
  roundDurations: {
    round1: number; // minutes
    round2: number; // minutes
    round3: number; // minutes
  };
  allowWalkIns: boolean;
  leaderboardFrozen: boolean;
  tieBreakerRule: 'TOTAL_HIGH' | 'R3_WEIGHT' | 'TIMESTAMP_FAST';
}
