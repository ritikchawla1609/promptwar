import { SuspectId, CrimeSceneObjectives, FinalBossSubmission } from '../types/game';

export interface GameSettings {
  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;
  voiceVolume: number;
  reduceMotion: boolean;
  reduceFlashing: boolean;
}

export interface SavedGameState {
  version: number;
  currentRound: number;
  hasSeenIntro: boolean;
  timeRemaining: number;
  crimeSceneObjectives: CrimeSceneObjectives;
  suspectLocks: Record<SuspectId, boolean>;
  audioRevealedSecret: boolean;
  hiddenVideoUnlocked: boolean;
  sliderDistinction: {
    attackTime: string;
    deathTime: string;
    discoveryTime: string;
  };
  round5Choice: 'pending' | 'accused_meera' | 'challenged';
  printerLogUnlocked: boolean;
  submission: Partial<FinalBossSubmission>;
  finalEvaluated: boolean;
  finalScore: number;
  finalFeedback: string[];
  reExaminedClues?: string[];
  settings: GameSettings;
  timestamp: number;
}

const STORAGE_KEY = 'promptwar_2_case17b_save';

export const DEFAULT_SETTINGS: GameSettings = {
  masterVolume: 0.85,
  musicVolume: 0.65,
  sfxVolume: 0.80,
  voiceVolume: 0.90,
  reduceMotion: false,
  reduceFlashing: false
};

export const loadSavedGame = (): SavedGameState | null => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.currentRound === 'number' && parsed.version === 2) {
      return parsed as SavedGameState;
    }
    return null;
  } catch (err) {
    console.warn('Unable to load saved game from storage:', err);
    return null;
  }
};

export const saveGame = (state: Omit<SavedGameState, 'version' | 'timestamp'>): void => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }
  try {
    const payload: SavedGameState = {
      ...state,
      version: 2,
      timestamp: Date.now()
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('Unable to save game to storage:', err);
  }
};

export const clearSavedGame = (): void => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Unable to clear saved game storage:', err);
  }
};
