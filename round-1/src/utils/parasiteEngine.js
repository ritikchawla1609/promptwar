// PROMPT PARASITE // ENGINE & STATE COORDINATOR
// Real team registration, anonymous cluster matchmaking, and central database synchronization

import { DEFAULT_CHALLENGE, ANONYMOUS_HOST_OUTPUTS } from '../data/parasiteChallenge';

const API_BASE = 'http://127.0.0.1:5001';
const STORAGE_KEY_SESSION = 'prompt_parasite_session_v2';
const STORAGE_KEY_TEAMS = 'prompt_parasite_teams_v2';
const STORAGE_KEY_SUBMISSIONS = 'prompt_parasite_submissions_v2';

// Generate consistent anonymous ID (e.g. PLAYER_042)
export function generateAnonymousId() {
  const num = Math.floor(10 + Math.random() * 90);
  return `PLAYER_${num}`;
}

// Generate unique ID
export function generateId(prefix = 'p') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

// Safe Local Storage Session
export function loadLocalSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  const newSession = {
    participantId: generateId('part'),
    anonymousId: generateAnonymousId(),
    teamCode: '', // Assigned upon registration (e.g. PW-7482)
    teamName: '', // Unregistered initially
    leaderName: '',
    leaderContact: '',
    college: 'Chandigarh University',
    memberCount: 1,
    members: [],
    firstPrompt: '',
    firstOutput: '',
    firstSubmittedAt: null,
    mutationNotes: '',
    finalPrompt: '',
    finalOutput: '',
    finalSubmittedAt: null,
    matchedOpponents: [],
    status: 'NOT_REGISTERED', // 'NOT_REGISTERED' | 'REGISTERED' | 'FIRST_LOCKED' | 'MATCHED' | 'EVOLVING' | 'FINAL_LOCKED'
  };
  saveLocalSession(newSession);
  return newSession;
}

export function saveLocalSession(session) {
  try {
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
  } catch (e) {}
}

// -------------------------------------------------------------
// CENTRAL TEAM REGISTRATION & SESSION RESUME
// -------------------------------------------------------------

// Register New Team
export async function registerTeamAPI(teamData) {
  try {
    const res = await fetch(`${API_BASE}/api/teams/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teamData),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.team) {
        return data.team;
      }
    }
  } catch (err) {
    console.warn('API offline, saving team to local storage fallback:', err);
  }

  // Local storage offline fallback
  const teamCode = teamData.teamCode || `PW-${Math.floor(1000 + Math.random() * 9000)}`;
  const localTeam = {
    ...teamData,
    teamCode,
    round1: { status: 'NOT_STARTED', score: 0 },
    round2: { status: 'LOCKED', score: 0 },
    round3: { status: 'LOCKED', score: 0 },
    createdAt: new Date().toISOString(),
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY_TEAMS) || '[]';
    const teams = JSON.parse(raw);
    const idx = teams.findIndex((t) => t.teamName.toLowerCase() === teamData.teamName.toLowerCase());
    if (idx >= 0) {
      teams[idx] = { ...teams[idx], ...localTeam };
    } else {
      teams.push(localTeam);
    }
    localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(teams));
  } catch (e) {}

  return localTeam;
}

// Resume Session with Team Code or Team Name
export async function loginTeamAPI(query) {
  try {
    const res = await fetch(`${API_BASE}/api/teams/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.team) return data.team;
    }
  } catch (err) {}

  // Local fallback
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TEAMS) || '[]';
    const teams = JSON.parse(raw);
    const found = teams.find(
      (t) =>
        t.teamCode.toUpperCase() === query.trim().toUpperCase() ||
        t.teamName.toLowerCase() === query.trim().toLowerCase()
    );
    if (found) return found;
  } catch (e) {}

  throw new Error('Team credentials not found in arena ledger.');
}

// Fetch all registered teams (for Tournament Leaderboard & Host Console)
export async function fetchAllRegisteredTeams() {
  try {
    const res = await fetch(`${API_BASE}/api/teams`);
    if (res.ok) {
      const data = await res.json();
      if (data.teams && data.teams.length > 0) {
        return data.teams;
      }
    }
  } catch (e) {}

  // Fallback
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TEAMS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  return [];
}

// Host 1-Click Qualify for Round 2
export async function qualifyTeamForRound2(teamCode, isQualified = true) {
  try {
    const res = await fetch(`${API_BASE}/api/teams/${teamCode}/qualify-r2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isQualified }),
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, team: data.team };
    }
  } catch (e) {}

  // Fallback in local storage
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TEAMS) || '[]';
    const teams = JSON.parse(raw);
    const updated = teams.map((t) => {
      if (t.teamCode.toUpperCase() === teamCode.toUpperCase()) {
        return {
          ...t,
          round1: { ...(t.round1 || {}), isQualifiedR2: isQualified },
          round2: { ...(t.round2 || {}), status: isQualified ? 'QUALIFIED' : 'LOCKED' },
        };
      }
      return t;
    });
    localStorage.setItem(STORAGE_KEY_TEAMS, JSON.stringify(updated));
    const target = updated.find((t) => t.teamCode.toUpperCase() === teamCode.toUpperCase());
    return { success: true, team: target };
  } catch (e) {}

  return { success: false };
}

// -------------------------------------------------------------
// REAL-TEAM ANONYMOUS MATCHMAKING ALGORITHM
// -------------------------------------------------------------

export function generateAnonymousMatches(allSubmissions, currentParticipantId) {
  // Filter for real team submissions from other contenders that have submitted a First Output
  const otherRealSubmissions = (allSubmissions || []).filter((s) => {
    const id = s.participantId || s.submissionId || s.id;
    return id !== currentParticipantId && Boolean(s.firstOutput || s.output);
  });

  let opponents = [];

  if (otherRealSubmissions.length >= 2) {
    // True Real Team Matching: Shuffle live peer submissions
    const shuffled = [...otherRealSubmissions].sort(() => Math.random() - 0.5);
    opponents = [
      {
        id: shuffled[0].participantId || shuffled[0].submissionId || shuffled[0].id,
        anonymousId: 'UNKNOWN 01',
        output: shuffled[0].firstOutput || shuffled[0].output,
        isRealPeer: true,
      },
      {
        id: shuffled[1].participantId || shuffled[1].submissionId || shuffled[1].id,
        anonymousId: 'UNKNOWN 02',
        output: shuffled[1].firstOutput || shuffled[1].output,
        isRealPeer: true,
      },
    ];
  } else if (otherRealSubmissions.length === 1) {
    // 1 Real Contender + 1 Host Fallback
    opponents = [
      {
        id: otherRealSubmissions[0].participantId || otherRealSubmissions[0].submissionId || otherRealSubmissions[0].id,
        anonymousId: 'UNKNOWN 01',
        output: otherRealSubmissions[0].firstOutput || otherRealSubmissions[0].output,
        isRealPeer: true,
      },
      {
        id: ANONYMOUS_HOST_OUTPUTS[0].id,
        anonymousId: 'UNKNOWN 02',
        output: ANONYMOUS_HOST_OUTPUTS[0].output,
        isRealPeer: false,
      },
    ];
  } else {
    // Host Fallback (used only if fewer than 3 teams have entered)
    opponents = [
      {
        id: ANONYMOUS_HOST_OUTPUTS[0].id,
        anonymousId: 'UNKNOWN 01',
        output: ANONYMOUS_HOST_OUTPUTS[0].output,
        isRealPeer: false,
      },
      {
        id: ANONYMOUS_HOST_OUTPUTS[1].id,
        anonymousId: 'UNKNOWN 02',
        output: ANONYMOUS_HOST_OUTPUTS[1].output,
        isRealPeer: false,
      },
    ];
  }

  return opponents;
}

// -------------------------------------------------------------
// SUBMISSION SYNC
// -------------------------------------------------------------

export async function syncSubmissionToBackend(sessionData) {
  try {
    const payload = {
      submissionId: sessionData.participantId,
      participantId: sessionData.participantId,
      anonymousId: sessionData.anonymousId,
      teamCode: sessionData.teamCode,
      teamName: sessionData.teamName || 'SYNAPSE_ANON',
      leaderName: sessionData.leaderName,
      college: sessionData.college,
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
  } catch (err) {}

  // Backup in local submissions
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

// Fetch all submissions
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

  try {
    const raw = localStorage.getItem(STORAGE_KEY_SUBMISSIONS);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  return [];
}
