/**
 * Authoritative Clock & Submission Utility for Frame Zero (Round 3)
 * Provides server-authoritative synchronized timing, drift compensation,
 * and deadline enforcement against the central Prompt War backend.
 */

export const API_BASE = 'https://server-five-flame-54.vercel.app';

export interface AuthoritativeClockState {
  success: boolean;
  serverTime: string;
  roundId: string;
  sessionId: string;
  status: 'LOBBY' | 'SCHEDULED' | 'BRIEFING' | 'LIVE' | 'PAUSED' | 'COMPLETED';
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
  isLive: boolean;
  isPaused: boolean;
}

export const DEFAULT_CLOCK_STATE: AuthoritativeClockState = {
  success: false,
  serverTime: new Date().toISOString(),
  roundId: 'ROUND_3',
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
  isLive: false,
  isPaused: false,
};

/**
 * Fetch authoritative clock from central backend
 */
export async function fetchAuthoritativeClockAPI(): Promise<AuthoritativeClockState> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(`${API_BASE}/api/arena/clock`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      return {
        success: true,
        serverTime: data.serverTime || new Date().toISOString(),
        roundId: data.schedule?.roundId || 'ROUND_3',
        sessionId: data.schedule?.sessionId || 'pw_sess_live',
        status: data.schedule?.scheduleStatus || (data.isLive ? 'LIVE' : 'LOBBY'),
        scheduledStartAt: data.schedule?.scheduledStartAt || null,
        actualStartedAt: data.schedule?.actualStartedAt || null,
        scheduledEndAt: data.schedule?.scheduledEndAt || null,
        actualEndedAt: data.schedule?.actualEndedAt || null,
        remainingSeconds: data.remainingSeconds ?? 720,
        secondsUntilStart: data.briefingSecondsRemaining ?? 0,
        totalSeconds: data.schedule?.durationSeconds ?? 720,
        durationSeconds: data.schedule?.durationSeconds ?? 720,
        pausedAt: data.schedule?.pausedAt || null,
        accumulatedPausedSeconds: data.schedule?.accumulatedPausedSeconds || 0,
        isLive: Boolean(data.isLive),
        isPaused: Boolean(data.isPaused),
      };
    }
  } catch (e) {
    // console.warn('Clock fetch error, using local fallback:', e);
  }
  return DEFAULT_CLOCK_STATE;
}

/**
 * Compute drift-compensated remaining seconds
 */
export function calculateSynchronizedRemaining(serverClock: AuthoritativeClockState, serverOffset = 0): number {
  if (!serverClock) return 0;
  const synchronizedNow = Date.now() + serverOffset;

  if (serverClock.status === 'LIVE' && serverClock.scheduledEndAt) {
    return Math.max(0, Math.ceil((Date.parse(serverClock.scheduledEndAt) - synchronizedNow) / 1000));
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

/**
 * Compute seconds remaining until scheduled start (during Briefing/Scheduled)
 */
export function calculateSecondsUntilStart(serverClock: AuthoritativeClockState, serverOffset = 0): number {
  if (!serverClock) return 0;
  if (serverClock.status !== 'BRIEFING' && serverClock.status !== 'SCHEDULED') return 0;

  if (serverClock.scheduledStartAt) {
    const synchronizedNow = Date.now() + serverOffset;
    return Math.max(0, Math.ceil((Date.parse(serverClock.scheduledStartAt) - synchronizedNow) / 1000));
  }
  return serverClock.secondsUntilStart || 0;
}

export function formatSecondsToMMSS(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export interface DirectorCutSubmissionPayload {
  teamCode: string;
  score: number;
  prompt: string;
  metrics: {
    missionId: string;
    missionTitle: string;
    japaneseTitle?: string;
    categoryScores: Record<string, any>;
    wordCount: number;
    directorRank: string;
    totalTakes: number;
    submittedAt: string;
    timestamp?: string;
  };
}

/**
 * Submit Director's Cut to Authoritative Backend
 */
export async function submitDirectorCutToBackend(payload: DirectorCutSubmissionPayload) {
  try {
    const res = await fetch(`${API_BASE}/api/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        teamCode: payload.teamCode,
        round: 'round-3',
        score: payload.score,
        prompt: payload.prompt,
        metrics: payload.metrics,
      }),
    });
    const result = await res.json();

    // Also update team score if teamCode matches a team record
    try {
      await fetch(`${API_BASE}/api/teams/${encodeURIComponent(payload.teamCode)}/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          round: 3,
          score: payload.score,
          prompt: payload.prompt,
          details: payload.metrics,
        }),
      });
    } catch (teamErr) {
      // Non-critical if teamCode is a loose guest alias
    }

    return result;
  } catch (err: any) {
    console.error('Submission failed', err);
    return { success: false, error: err?.message || 'Network submission error' };
  }
}
