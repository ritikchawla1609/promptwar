/**
 * Operation Blackbox · Deadline Timer Utility
 * Resilient, refresh-safe, deadline-based timer with pause/resume support.
 */

const STORAGE_KEY = 'blackbox_timer_state_v1';

export function initializeTimer(durationSeconds = 720) {
  const existing = loadTimerState();
  if (existing) {
    return existing;
  }
  const state = {
    totalDuration: durationSeconds,
    remainingSeconds: durationSeconds,
    deadlineTimestamp: null,
    isRunning: false,
    isPaused: false,
    isExpired: false
  };
  saveTimerState(state);
  return state;
}

export function startTimer(state) {
  if (state.isRunning && !state.isPaused) return state;

  const now = Date.now();
  const deadline = now + (state.remainingSeconds * 1000);
  const updated = {
    ...state,
    deadlineTimestamp: deadline,
    isRunning: true,
    isPaused: false,
    isExpired: state.remainingSeconds <= 0
  };
  saveTimerState(updated);
  return updated;
}

export function pauseTimer(state) {
  if (!state.isRunning || state.isPaused) return state;

  const remaining = calculateRemainingSeconds(state);
  const updated = {
    ...state,
    remainingSeconds: remaining,
    deadlineTimestamp: null,
    isPaused: true
  };
  saveTimerState(updated);
  return updated;
}

export function resumeTimer(state) {
  if (!state.isPaused) return state;
  return startTimer(state);
}

export function adjustTimer(state, deltaSeconds) {
  const currentRemaining = calculateRemainingSeconds(state);
  const newRemaining = Math.max(0, currentRemaining + deltaSeconds);
  const now = Date.now();
  const updated = {
    ...state,
    remainingSeconds: newRemaining,
    deadlineTimestamp: state.isRunning && !state.isPaused ? now + (newRemaining * 1000) : null,
    isExpired: newRemaining <= 0
  };
  saveTimerState(updated);
  return updated;
}

export function resetTimer(durationSeconds = 720) {
  localStorage.removeItem(STORAGE_KEY);
  return initializeTimer(durationSeconds);
}

export function calculateRemainingSeconds(state) {
  if (!state) return 0;
  if (state.isExpired) return 0;
  if (state.isPaused || !state.isRunning) return state.remainingSeconds;

  if (state.deadlineTimestamp) {
    const diffMs = state.deadlineTimestamp - Date.now();
    const remaining = Math.max(0, Math.ceil(diffMs / 1000));
    return remaining;
  }
  return state.remainingSeconds;
}

export function formatTimeMMSS(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export const API_BASE = 'https://server-five-flame-54.vercel.app';

export async function fetchAuthoritativeClockAPI() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(`${API_BASE}/api/arena/clock`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    // console.warn('Clock fetch error, using local fallback:', e);
  }
  return {
    success: false,
    serverTime: new Date().toISOString(),
    roundId: 'ROUND_2',
    sessionId: 'pw_sess_fallback',
    status: 'LOBBY',
    scheduledStartAt: null,
    actualStartedAt: null,
    scheduledEndAt: null,
    actualEndedAt: null,
    remainingSeconds: 720,
    secondsUntilStart: 0,
    totalSeconds: 720,
    durationSeconds: 720,
    pausedAt: null,
    accumulatedPausedSeconds: 0,
  };
}

export function calculateSynchronizedRemaining(serverClock, serverOffset = 0) {
  if (!serverClock) return 0;
  const synNow = Date.now() + serverOffset;

  if (serverClock.status === 'LIVE' && serverClock.scheduledEndAt) {
    return Math.max(0, Math.ceil((Date.parse(serverClock.scheduledEndAt) - synNow) / 1000));
  }
  if (serverClock.status === 'PAUSED' && serverClock.pausedAt && serverClock.scheduledEndAt) {
    return Math.max(0, Math.ceil((Date.parse(serverClock.scheduledEndAt) - Date.parse(serverClock.pausedAt)) / 1000));
  }
  if (serverClock.status === 'COMPLETED') {
    return 0;
  }
  if (serverClock.status === 'BRIEFING' || serverClock.status === 'SCHEDULED') {
    return serverClock.durationSeconds || 720;
  }
  return serverClock.remainingSeconds || 720;
}

function saveTimerState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save timer state', e);
  }
}

function loadTimerState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}
