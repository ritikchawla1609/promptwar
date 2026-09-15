export type SuspectId = 'aarav' | 'riya' | 'kabir' | 'meera' | 'dev';

export type MotiveLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME' | 'CRITICAL';
export type AlibiStatus = 'VERIFIED' | 'QUESTIONABLE' | 'FABRICATED' | 'COLLAPSED';

export interface Suspect {
  id: SuspectId;
  name: string;
  role: string;
  avatarIcon: string;
  relationshipWithVictim: string;
  motiveLevel: MotiveLevel;
  motiveDescription: string;
  alibiStatus: AlibiStatus;
  alibiDescription: string;
  statement: string;
  cctvTimestamp: string;
  cctvAction: string;
  clockSource: string; // The physical clock that recorded this
  twoTruths: [string, string];
  realCrime: string; // The crime they are actually guilty of (NOT murder)
  contradictionNotes?: string;
  connectedEvidenceIds: string[];
  lockQuestion: string;
  lockAnswer: string;
  lockHint: string;
}

export type EvidenceType = 'photo' | 'audio' | 'document' | 'video' | 'cctv' | 'log';

export interface EvidenceItem {
  id: string;
  title: string;
  round: number;
  type: EvidenceType;
  timestamp?: string;
  previewUrl?: string;
  content: string;
  hiddenDetails?: string; // Revealed upon interaction or slow playback
  tags: string[];
  // Interconnected Clue Dependency Graph Fields
  connectedClueIds?: string[];
  contradictsSuspect?: SuspectId;
  leadsToClue?: string;
  significance?: string;
}

export interface CrimeSceneObjectives {
  clockInspected: boolean;
  tapeFound: boolean;
  bloodExamined: boolean;
  doorInspected: boolean;
  luminolRevealed: boolean;
}

export interface FinalBossSubmission {
  attacker: string;
  murderer: string;
  blackoutCauser: string;
  attackTime: string;
  trueDeathTime: string;
  finalRecordingTime: string;
  discoveryTime: string;
  falseEvidenceTime: string;
  aiBiggestError: string;
}

export interface GameState {
  currentRound: number; // 0 to 7
  timeRemainingSeconds: number; // starts at 55 * 60 = 3300
  isTimerRunning: boolean;
  unlockedEvidenceIds: string[];
  suspectLocks: Record<SuspectId, boolean>;
  audioPlaybackSpeed: number; // 1.0 or 0.5
  audioRevealedSecret: boolean;
  round3AiQueries: Array<{
    prompt: string;
    response: string;
    reasoning: string;
    timestamp: string;
  }>;
  round3ReasoningInspected: boolean;
  round4SliderDistinction: {
    attackTime: string;
    deathTime: string;
    discoveryTime: string;
  };
  round4HiddenVideoUnlocked: boolean;
  round5Choice: 'pending' | 'accused_meera' | 'challenged';
  printerLogUnlocked: boolean;
  decodedCipher: string;
  finalBossSubmission: Partial<FinalBossSubmission>;
  finalBossEvaluated: boolean;
  finalBossScore: number;
  finalBossFeedback: string[];
  isClimaxTriggered: boolean;
  isHostModalOpen: boolean;
  audioMuted: boolean;
}
