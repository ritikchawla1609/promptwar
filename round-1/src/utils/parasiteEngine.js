// PROMPT PARASITE // ENGINE & STATE COORDINATOR
// Handles anonymous matchmaking, submission persistence, and backend sync

import { DEFAULT_CHALLENGE, ANONYMOUS_HOST_OUTPUTS } from '../data/parasiteChallenge';

const API_BASE = 'http://127.0.0.1:5001';
const STORAGE_KEY_SESSION = 'prompt_parasite_session_v1';
const STORAGE_KEY_SUBMISSIONS = 'prompt_parasite_submissions_v1';
const STORAGE_KEY_CONFIG = 'prompt_parasite_config_v1';

// Generate consistent anonymous ID (e.g. PLAYER_042)
export function generateAnonymousId() {
  const num = Math.floor(10 + Math.random() * 90);
  return `PLAYER_${num}`;
}

// Generate unique ID
export function generateId(prefix = 'p') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

// Safe Local Storage
export function loadLocalSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  const newSession = {
    participantId: generateId('part'),
    anonymousId: generateAnonymousId(),
    teamName: 'SYNAPSE_' + Math.floor(100 + Math.random() * 900),
    firstPrompt: '',
    firstOutput: '',
    firstSubmittedAt: null,
    mutationNotes: '',
    finalPrompt: '',
    finalOutput: '',
    finalSubmittedAt: null,
    matchedOpponents: [], // [{ id, anonymousId, output }]
    status: 'NOT_STARTED', // 'NOT_STARTED', 'FIRST_LOCKED', 'MATCHED', 'EVOLVING', 'FINAL_LOCKED'
  };
  saveLocalSession(newSession);
  return newSession;
}

export function saveLocalSession(session) {
  try {
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
  } catch (e) {}
}

// Matchmaking Algorithm: Assigns 2 unique opponents per participant
export function generateAnonymousMatches(allSubmissions, currentParticipantId) {
  // If we have at least 2 other human submissions, use them
  const otherSubmissions = (allSubmissions || []).filter(
    (s) => (s.participantId || s.id) !== currentParticipantId && (s.firstOutput || s.output)
  );

  let opponents = [];

  if (otherSubmissions.length >= 2) {
    // Shuffle other human submissions
    const shuffled = [...otherSubmissions].sort(() => Math.random() - 0.5);
    opponents = [
      {
        id: shuffled[0].participantId || shuffled[0].id,
        anonymousId: 'UNKNOWN 01',
        output: shuffled[0].firstOutput || shuffled[0].output,
      },
      {
        id: shuffled[1].participantId || shuffled[1].id,
        anonymousId: 'UNKNOWN 02',
        output: shuffled[1].firstOutput || shuffled[1].output,
      },
    ];
  } else if (otherSubmissions.length === 1) {
    // 1 human + 1 host
    opponents = [
      {
        id: otherSubmissions[0].participantId || otherSubmissions[0].id,
        anonymousId: 'UNKNOWN 01',
        output: otherSubmissions[0].firstOutput || otherSubmissions[0].output,
      },
      {
        id: ANONYMOUS_HOST_OUTPUTS[0].id,
        anonymousId: 'UNKNOWN 02',
        output: ANONYMOUS_HOST_OUTPUTS[0].output,
      },
    ];
  } else {
    // Use host outputs for solo play / demonstration
    opponents = [
      {
        id: ANONYMOUS_HOST_OUTPUTS[0].id,
        anonymousId: 'UNKNOWN 01',
        output: ANONYMOUS_HOST_OUTPUTS[0].output,
      },
      {
        id: ANONYMOUS_HOST_OUTPUTS[1].id,
        anonymousId: 'UNKNOWN 02',
        output: ANONYMOUS_HOST_OUTPUTS[1].output,
      },
    ];
  }

  return opponents;
}

// Backend API Client
export async function syncSubmissionToBackend(sessionData) {
  try {
    const payload = {
      submissionId: sessionData.participantId,
      participantId: sessionData.participantId,
      anonymousId: sessionData.anonymousId,
      teamName: sessionData.teamName,
      round: 'round-1',
      firstPrompt: sessionData.firstPrompt,
      firstOutput: sessionData.firstOutput,
      mutationNotes: sessionData.mutationNotes,
      finalPrompt: sessionData.finalPrompt,
      finalOutput: sessionData.finalOutput,
      matchedOpponentIds: (sessionData.matchedOpponents || []).map((o) => o.id),
      status: sessionData.status,
      updatedAt: new Date().toISOString(),
    };

    const res = await fetch(`${API_BASE}/api/submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const json = await res.json();
      return json.submission;
    }
  } catch (err) {
    // Network or server offline - fallback to local storage
  }

  // Backup in local submissions list
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || '[]';
    const list = JSON.parse(raw);
    const idx = list.findIndex((s) => s.participantId === sessionData.participantId);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...sessionData };
    } else {
      list.push(sessionData);
    }
    localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(list));
  } catch (e) {}

  return sessionData;
}

// Fetch all arena submissions for matchmaking & admin
export async function fetchAllArenaSubmissions() {
  try {
    const res = await fetch(`${API_BASE}/api/submissions?round=round-1`);
    if (res.ok) {
      const data = await res.json();
      if (data.submissions && data.submissions.length > 0) {
        return data.submissions;
      }
    }
  } catch (e) {}

  // Fallback to local storage
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  return [];
}
