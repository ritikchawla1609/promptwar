import { INITIAL_CHALLENGES, INITIAL_LEADERBOARD } from '../data/sampleChallenges';

const KEYS = {
  CHALLENGES: 'prompt_war_challenges',
  LEADERBOARD: 'prompt_war_leaderboard',
  SUBMISSIONS: 'prompt_war_submissions',
  SETTINGS: 'prompt_war_settings',
  CURRENT_PLAYER: 'prompt_war_current_player',
};

export const getStoredChallenges = () => {
  try {
    const data = localStorage.getItem(KEYS.CHALLENGES);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Error loading challenges', e);
  }
  return INITIAL_CHALLENGES;
};

export const saveChallenges = (challenges) => {
  try {
    localStorage.setItem(KEYS.CHALLENGES, JSON.stringify(challenges));
  } catch (e) {
    console.error('Error saving challenges', e);
  }
};

export const getStoredLeaderboard = () => {
  try {
    const data = localStorage.getItem(KEYS.LEADERBOARD);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Error loading leaderboard', e);
  }
  return INITIAL_LEADERBOARD;
};

export const saveLeaderboard = (leaderboard) => {
  try {
    localStorage.setItem(KEYS.LEADERBOARD, JSON.stringify(leaderboard));
  } catch (e) {
    console.error('Error saving leaderboard', e);
  }
};

export const addLeaderboardEntry = (entry) => {
  const current = getStoredLeaderboard();
  const updated = [...current, entry];
  updated.sort((a, b) => b.score - a.score);
  // Re-rank
  const ranked = updated.map((item, index) => ({
    ...item,
    rank: index + 1,
  }));
  saveLeaderboard(ranked);
  return ranked;
};

export const getStoredSubmissions = () => {
  try {
    const data = localStorage.getItem(KEYS.SUBMISSIONS);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Error loading submissions', e);
  }
  return [];
};

export const saveSubmission = (submission) => {
  const current = getStoredSubmissions();
  const updated = [submission, ...current];
  try {
    localStorage.setItem(KEYS.SUBMISSIONS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving submission', e);
  }
  return updated;
};

export const getStoredSettings = () => {
  const defaults = {
    fastTimerMode: false, // 30s analysis, 45s prompt for quick demo/testing
    soundEnabled: true,
    scanlinesEnabled: false,
    selectedDifficulty: 'circle',
    briefDurationSeconds: 180,
    promptDurationSeconds: 420,
  };
  try {
    const data = localStorage.getItem(KEYS.SETTINGS);
    if (data) return { ...defaults, ...JSON.parse(data) };
  } catch (e) {
    console.error('Error loading settings', e);
  }
  return defaults;
};

export const saveSettings = (settings) => {
  try {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error('Error saving settings', e);
  }
};

export const resetGameData = () => {
  try {
    localStorage.removeItem(KEYS.CHALLENGES);
    localStorage.removeItem(KEYS.LEADERBOARD);
    localStorage.removeItem(KEYS.SUBMISSIONS);
    localStorage.removeItem(KEYS.SETTINGS);
    return true;
  } catch (e) {
    console.error('Error resetting data', e);
    return false;
  }
};
