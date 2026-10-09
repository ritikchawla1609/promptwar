// API CLIENT SERVICE // UNIFIED PROMPT WAR BACKEND CONNECTOR
import { TeamRecord, ArenaStateServer, EventSettings } from '../types/admin';

export const API_BASE =
  import.meta.env.VITE_API_URL ||
  (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://127.0.0.1:5001'
    : 'https://server-five-flame-54.vercel.app');

const LOCAL_TEAMS_KEY = 'promptwar_admin_teams_v2';
const LOCAL_SETTINGS_KEY = 'promptwar_admin_settings_v2';
const LOCAL_AUDIT_KEY = 'promptwar_admin_audit_v2';

// Realistic Initial Seed Data representing all three rounds
export const INITIAL_MOCK_TEAMS: TeamRecord[] = [
  {
    id: 't-1042',
    teamCode: 'PW-1042',
    teamName: 'Alpha Vanguard',
    leaderName: 'Aarav Sharma',
    leaderContact: '+91 98765 43210',
    college: 'Chandigarh University',
    members: ['Aarav Sharma', 'Rohan Verma', 'Diya Patel'],
    status: 'ACTIVE',
    currentRound: 'ROUND_3',
    currentPhase: 'DIRECTING',
    progressPercentage: 85,
    roundScores: { round1: 92, round2: 88, round3: 95 },
    totalScore: 275,
    qualifiedForR2: true,
    qualifiedForR3: true,
    registeredAt: '2026-10-09T08:30:00.000Z',
    lastActiveAt: '2 minutes ago',
    history: [
      { round: 'ROUND_1', prompt: 'Carve a symmetrical hexagonal seal without edge micro-fractures.', score: 92, timestamp: '10:15 AM' },
      { round: 'ROUND_2', prompt: 'Cross-reference lab telemetry against security logs to expose timestamp discrepancy.', score: 88, timestamp: '11:40 AM' },
      { round: 'ROUND_3', takeNumber: 3, prompt: 'Swordsman shelters paper lantern on rain-slicked temple eaves in torrential storm. Warm amber glow against midnight storm.', score: 95, timestamp: '12:20 PM' }
    ]
  },
  {
    id: 't-2089',
    teamCode: 'PW-2089',
    teamName: 'Cyber Samurai',
    leaderName: 'Ishaan Gupta',
    leaderContact: '+91 98111 22334',
    college: 'Chitkara University',
    members: ['Ishaan Gupta', 'Meera Rao'],
    status: 'ACTIVE',
    currentRound: 'ROUND_3',
    currentPhase: 'STORYBOARD',
    progressPercentage: 72,
    roundScores: { round1: 88, round2: 90, round3: 84 },
    totalScore: 262,
    qualifiedForR2: true,
    qualifiedForR3: true,
    registeredAt: '2026-10-09T08:35:00.000Z',
    lastActiveAt: '5 minutes ago',
    history: [
      { round: 'ROUND_1', prompt: 'Precision thermal incision around inner cookie star silhouette.', score: 88, timestamp: '10:14 AM' },
      { round: 'ROUND_2', prompt: 'Trace network blackout back to relay transformer at 12:15 AM.', score: 90, timestamp: '11:42 AM' },
      { round: 'ROUND_3', takeNumber: 2, prompt: 'Two friends meet at rural train station platform during golden hour sunset.', score: 84, timestamp: '12:18 PM' }
    ]
  },
  {
    id: 't-3310',
    teamCode: 'PW-3310',
    teamName: 'Neural Knights',
    leaderName: 'Ananya Sen',
    leaderContact: '+91 99222 33445',
    college: 'Thapar Institute',
    members: ['Ananya Sen', 'Kabir Malhotra', 'Tarun Jain'],
    status: 'ACTIVE',
    currentRound: 'ROUND_2',
    currentPhase: 'INVESTIGATION',
    progressPercentage: 60,
    roundScores: { round1: 85, round2: 82, round3: 0 },
    totalScore: 167,
    qualifiedForR2: true,
    qualifiedForR3: false,
    registeredAt: '2026-10-09T08:40:00.000Z',
    lastActiveAt: '1 minute ago',
    history: [
      { round: 'ROUND_1', prompt: 'Circular boundary extraction with gentle corner dampening.', score: 85, timestamp: '10:16 AM' },
      { round: 'ROUND_2', prompt: 'Interrogate facility logs for encrypted data export payload.', score: 82, timestamp: '11:45 AM' }
    ]
  },
  {
    id: 't-4912',
    teamCode: 'PW-4912',
    teamName: 'Quantum Coders',
    leaderName: 'Devraj Singh',
    leaderContact: '+91 97333 44556',
    college: 'Chandigarh University',
    members: ['Devraj Singh', 'Pooja Nair'],
    status: 'ACTIVE',
    currentRound: 'ROUND_2',
    currentPhase: 'INVESTIGATION',
    progressPercentage: 55,
    roundScores: { round1: 79, round2: 85, round3: 0 },
    totalScore: 164,
    qualifiedForR2: true,
    qualifiedForR3: false,
    registeredAt: '2026-10-09T08:42:00.000Z',
    lastActiveAt: '3 minutes ago',
    history: [
      { round: 'ROUND_1', prompt: 'Fine needle tracing along umbrella canopy lines.', score: 79, timestamp: '10:15 AM' },
      { round: 'ROUND_2', prompt: 'Isolate compromised maintenance credentials used during outage.', score: 85, timestamp: '11:44 AM' }
    ]
  },
  {
    id: 't-5501',
    teamCode: 'PW-5501',
    teamName: 'Pixel Paradox',
    leaderName: 'Karan Mehra',
    leaderContact: '+91 96444 55667',
    college: 'Punjab Engineering College',
    members: ['Karan Mehra', 'Sanya Kapoor'],
    status: 'PAUSED',
    currentRound: 'ROUND_1',
    currentPhase: 'PARASITE',
    progressPercentage: 40,
    roundScores: { round1: 74, round2: 0, round3: 0 },
    totalScore: 74,
    qualifiedForR2: false,
    qualifiedForR3: false,
    registeredAt: '2026-10-09T08:45:00.000Z',
    lastActiveAt: '12 minutes ago',
    history: [
      { round: 'ROUND_1', prompt: 'Square template contour cutting with constant perimeter velocity.', score: 74, timestamp: '10:17 AM' }
    ]
  },
  {
    id: 't-6704',
    teamCode: 'PW-6704',
    teamName: 'Binary Pulse',
    leaderName: 'Ritika Roy',
    leaderContact: '+91 95555 66778',
    college: 'Chandigarh University',
    members: ['Ritika Roy', 'Vikram Batra'],
    status: 'OFFLINE',
    currentRound: 'ROUND_1',
    currentPhase: 'CREATE',
    progressPercentage: 20,
    roundScores: { round1: 65, round2: 0, round3: 0 },
    totalScore: 65,
    qualifiedForR2: false,
    qualifiedForR3: false,
    registeredAt: '2026-10-09T08:50:00.000Z',
    lastActiveAt: '25 minutes ago',
    history: [
      { round: 'ROUND_1', prompt: 'Dalgona triangle outline trace.', score: 65, timestamp: '10:12 AM' }
    ]
  }
];

// Helper: Local storage accessor
function getLocalTeams(): TeamRecord[] {
  try {
    const raw = localStorage.getItem(LOCAL_TEAMS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed reading local teams:', e);
  }
  localStorage.setItem(LOCAL_TEAMS_KEY, JSON.stringify(INITIAL_MOCK_TEAMS));
  return INITIAL_MOCK_TEAMS;
}

function saveLocalTeams(teams: TeamRecord[]): void {
  try {
    localStorage.setItem(LOCAL_TEAMS_KEY, JSON.stringify(teams));
  } catch (e) {}
}

// -------------------------------------------------------------
// ARENA STATE APIs
// -------------------------------------------------------------
export async function fetchArenaState(): Promise<{ success: boolean; state: ArenaStateServer; source: 'SERVER' | 'LOCAL' }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${API_BASE}/api/arena/state`, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return { success: true, state: data.arenaState || data, source: 'SERVER' };
    }
  } catch (err) {
    // API offline or network slow
  }

  // Local fallback
  return {
    success: true,
    state: {
      isRoundStarted: true,
      activePhase: 'CREATE',
      activeRound: 'ROUND_1',
      startedAt: new Date(Date.now() - 300000).toISOString(),
      phaseStartedAt: new Date(Date.now() - 300000).toISOString(),
      phaseEndsAt: new Date(Date.now() + 300000).toISOString(),
      phaseDuration: 600,
      minTeamsToStart: 3,
      autoAdvance: true,
      timers: { create: 600, parasite: 600, evolve: 600 }
    },
    source: 'LOCAL'
  };
}

export async function updateArenaState(updates: Partial<ArenaStateServer>): Promise<{ success: boolean; state?: ArenaStateServer }> {
  try {
    const res = await fetch(`${API_BASE}/api/arena/state`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (res.ok) {
      const data = await res.json();
      return { success: true, state: data.arenaState || data };
    }
  } catch (err) {
    console.warn('updateArenaState API failed, operating locally:', err);
  }
  return { success: true, state: updates as ArenaStateServer };
}

// -------------------------------------------------------------
// TEAMS MANAGEMENT APIs
// -------------------------------------------------------------
export async function fetchAllTeams(): Promise<{ success: boolean; teams: TeamRecord[]; source: 'SERVER' | 'LOCAL' }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${API_BASE}/api/teams`, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.teams) && data.teams.length > 0) {
        // Map backend mongo schema to UI unified schema
        const mapped: TeamRecord[] = data.teams.map((t: any) => ({
          id: t._id || t.id || t.teamCode,
          teamCode: t.teamCode || `PW-${Math.floor(1000 + Math.random() * 9000)}`,
          teamName: t.teamName || 'Unnamed Team',
          leaderName: t.leaderName || 'Unknown',
          leaderContact: t.leaderContact || '-',
          college: t.college || 'Chandigarh University',
          members: Array.isArray(t.members) ? t.members : [t.leaderName || 'Leader'],
          status: (t.status || 'ACTIVE').toUpperCase() as any,
          currentRound: t.currentRound || 'ROUND_1',
          currentPhase: t.currentPhase || 'LOBBY',
          progressPercentage: t.progressPercentage ?? (t.round1?.firstOutput ? 50 : 20),
          roundScores: {
            round1: t.roundScores?.round1 ?? t.round1?.score ?? 0,
            round2: t.roundScores?.round2 ?? t.round2?.score ?? 0,
            round3: t.roundScores?.round3 ?? t.round3?.score ?? 0,
          },
          totalScore:
            (t.roundScores?.round1 ?? t.round1?.score ?? 0) +
            (t.roundScores?.round2 ?? t.round2?.score ?? 0) +
            (t.roundScores?.round3 ?? t.round3?.score ?? 0),
          qualifiedForR2: Boolean(t.qualifiedForR2 ?? t.round1?.isQualifiedR2),
          qualifiedForR3: Boolean(t.qualifiedForR3 ?? t.round2?.isQualifiedR3),
          registeredAt: t.createdAt || new Date().toISOString(),
          lastActiveAt: 'Active recently',
          notes: t.notes || ''
        }));

        saveLocalTeams(mapped);
        return { success: true, teams: mapped, source: 'SERVER' };
      }
    }
  } catch (err) {}

  return { success: true, teams: getLocalTeams(), source: 'LOCAL' };
}

export async function registerTeam(teamData: Partial<TeamRecord>): Promise<{ success: boolean; team: TeamRecord }> {
  try {
    const res = await fetch(`${API_BASE}/api/teams/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(teamData),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.team) {
        const newTeam: TeamRecord = {
          id: data.team._id || data.team.teamCode,
          teamCode: data.team.teamCode,
          teamName: data.team.teamName,
          leaderName: data.team.leaderName || '',
          leaderContact: data.team.leaderContact || '',
          college: data.team.college || 'Chandigarh University',
          members: data.team.members || [],
          status: 'ACTIVE',
          currentRound: 'ROUND_1',
          currentPhase: 'LOBBY',
          progressPercentage: 10,
          roundScores: { round1: 0, round2: 0, round3: 0 },
          totalScore: 0,
          qualifiedForR2: false,
          qualifiedForR3: false,
          registeredAt: new Date().toISOString(),
          lastActiveAt: 'Just now'
        };
        const current = getLocalTeams();
        saveLocalTeams([newTeam, ...current]);
        return { success: true, team: newTeam };
      }
    }
  } catch (e) {}

  // Local fallback
  const teamCode = teamData.teamCode || `PW-${Math.floor(1000 + Math.random() * 9000)}`;
  const localNewTeam: TeamRecord = {
    id: `local-${Date.now()}`,
    teamCode,
    teamName: teamData.teamName || 'New Team',
    leaderName: teamData.leaderName || 'Leader',
    leaderContact: teamData.leaderContact || '',
    college: teamData.college || 'Chandigarh University',
    members: teamData.members || [teamData.leaderName || 'Member 1'],
    status: 'ACTIVE',
    currentRound: 'ROUND_1',
    currentPhase: 'LOBBY',
    progressPercentage: 10,
    roundScores: { round1: 0, round2: 0, round3: 0 },
    totalScore: 0,
    qualifiedForR2: false,
    qualifiedForR3: false,
    registeredAt: new Date().toISOString(),
    lastActiveAt: 'Just now'
  };

  const list = getLocalTeams();
  saveLocalTeams([localNewTeam, ...list]);
  return { success: true, team: localNewTeam };
}

export async function updateTeamAPI(codeOrId: string, updates: Partial<TeamRecord>): Promise<boolean> {
  try {
    await fetch(`${API_BASE}/api/teams/${codeOrId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
  } catch (e) {}

  // Local update
  const list = getLocalTeams();
  const updated = list.map(t => (t.teamCode === codeOrId || t.id === codeOrId ? { ...t, ...updates } : t));
  saveLocalTeams(updated);
  return true;
}

export async function deleteTeamAPI(codeOrId: string): Promise<boolean> {
  try {
    await fetch(`${API_BASE}/api/teams/${codeOrId}`, { method: 'DELETE' });
  } catch (e) {}

  const list = getLocalTeams();
  const filtered = list.filter(t => t.teamCode !== codeOrId && t.id !== codeOrId);
  saveLocalTeams(filtered);
  return true;
}

export async function adjustTeamScoreAPI(
  codeOrId: string,
  round: 'round1' | 'round2' | 'round3',
  newScore: number,
  reason: string
): Promise<boolean> {
  try {
    await fetch(`${API_BASE}/api/teams/${codeOrId}/score`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ round, score: newScore, reason }),
    });
  } catch (e) {}

  const list = getLocalTeams();
  const updated = list.map(t => {
    if (t.teamCode === codeOrId || t.id === codeOrId) {
      const updatedScores = { ...t.roundScores, [round]: newScore };
      const total = updatedScores.round1 + updatedScores.round2 + updatedScores.round3;
      return {
        ...t,
        roundScores: updatedScores,
        totalScore: total,
        notes: `${t.notes ? t.notes + '\n' : ''}[Score adjustment] ${round.toUpperCase()}: ${newScore} (${reason})`
      };
    }
    return t;
  });
  saveLocalTeams(updated);
  return true;
}

export async function qualifyTeamR2API(codeOrId: string, isQualified: boolean): Promise<boolean> {
  try {
    await fetch(`${API_BASE}/api/teams/${codeOrId}/qualify-r2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isQualified }),
    });
  } catch (e) {}

  const list = getLocalTeams();
  const updated = list.map(t => (t.teamCode === codeOrId || t.id === codeOrId ? { ...t, qualifiedForR2: isQualified } : t));
  saveLocalTeams(updated);
  return true;
}

export async function purgeArenaDataAPI(): Promise<boolean> {
  try {
    await fetch(`${API_BASE}/api/arena/purge-data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {}

  localStorage.removeItem(LOCAL_TEAMS_KEY);
  localStorage.removeItem(LOCAL_SETTINGS_KEY);
  return true;
}
