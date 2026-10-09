import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import {
  EventStatus,
  ActiveRoundId,
  TeamRecord,
  AuditLogEntry,
  EventSettings,
  ArenaStateServer,
  RoundSummary,
  AuthoritativeClockState
} from '../types/admin';
import {
  fetchArenaState,
  updateArenaState,
  fetchAuthoritativeClock,
  scheduleRoundAPI,
  pauseScheduleAPI,
  resumeScheduleAPI,
  extendScheduleAPI,
  endScheduleAPI,
  fetchAllTeams,
  registerTeam,
  updateTeamAPI,
  deleteTeamAPI,
  adjustTeamScoreAPI,
  qualifyTeamR2API,
  purgeArenaDataAPI
} from '../services/api';

export const HOST_PASSCODE = 'TATVA@2026';

interface AdminContextType {
  // Authentication
  isAuthenticated: boolean;
  login: (passcode: string) => boolean;
  logout: () => void;

  // Event State & Authoritative Clock
  eventStatus: EventStatus;
  activeRound: ActiveRoundId;
  authoritativeClock: AuthoritativeClockState;
  roundSummaries: Record<ActiveRoundId, RoundSummary>;
  remainingSeconds: number;
  totalDurationSeconds: number;
  timerRunning: boolean;
  connectionMode: 'LIVE_MONGODB' | 'LOCAL_OFFLINE';
  lastSyncTime: string;
  isSyncing: boolean;

  // Teams
  teams: TeamRecord[];
  isLoadingTeams: boolean;
  refreshData: () => Promise<void>;
  addTeam: (teamData: Partial<TeamRecord>) => Promise<TeamRecord>;
  updateTeam: (codeOrId: string, updates: Partial<TeamRecord>) => Promise<boolean>;
  deleteTeam: (codeOrId: string) => Promise<boolean>;
  adjustScore: (codeOrId: string, round: 'round1' | 'round2' | 'round3', score: number, reason: string) => Promise<boolean>;
  toggleQualification: (codeOrId: string, targetRound: 'R2' | 'R3', isQualified: boolean) => Promise<boolean>;

  // Controls
  startEvent: () => Promise<void>;
  pauseEvent: () => Promise<void>;
  resumeEvent: () => Promise<void>;
  endEvent: () => Promise<void>;
  startRound: (roundId: ActiveRoundId, customDurationMin?: number, briefingSec?: number) => Promise<void>;
  scheduleRound: (roundId: ActiveRoundId, durationMin?: number, briefingSec?: number) => Promise<void>;
  pauseRound: (roundId: ActiveRoundId) => Promise<void>;
  resumeRound: (roundId: ActiveRoundId) => Promise<void>;
  endRound: (roundId: ActiveRoundId) => Promise<void>;
  advanceRound: () => Promise<void>;
  adjustTimer: (secondsDelta: number) => void;
  extendTimer: (extraSeconds?: number) => Promise<void>;
  emergencyStop: () => Promise<void>;

  // Audit Log
  auditLogs: AuditLogEntry[];
  addAuditLog: (action: string, target: string, details: string, type?: AuditLogEntry['type']) => void;
  exportAuditLogCSV: () => void;

  // Settings
  settings: EventSettings;
  updateSettings: (newSettings: Partial<EventSettings>) => void;
  purgeAllData: () => Promise<void>;
}

const DEFAULT_SETTINGS: EventSettings = {
  eventName: 'Prompt War 2026',
  eventStatus: 'LIVE',
  activeRound: 'ROUND_1',
  weights: { round1: 30, round2: 35, round3: 35 },
  roundDurations: { round1: 10, round2: 15, round3: 12 },
  allowWalkIns: true,
  leaderboardFrozen: false,
  tieBreakerRule: 'TOTAL_HIGH'
};

const INITIAL_ROUNDS_DATA: Record<ActiveRoundId, RoundSummary> = {
  ROUND_1: {
    id: 'ROUND_1',
    name: 'Round 1: Prompt Parasite',
    subtitle: 'Growth architecture, concept infiltration & prompt evolution protocol',
    status: 'ACTIVE',
    configuredDurationMinutes: 10,
    currentPhase: 'CREATE',
    phases: ['LOBBY', 'BRIEFING', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE', 'COMPLETE'],
    teamsStarted: 48,
    teamsCompleted: 42,
    averageScore: 84.2,
    highestScore: 96
  },
  ROUND_2: {
    id: 'ROUND_2',
    name: 'Round 2: Operation Blackbox',
    subtitle: 'Research facility intelligence investigation',
    status: 'READY',
    configuredDurationMinutes: 15,
    currentPhase: 'BRIEFING',
    phases: ['BRIEFING', 'INVESTIGATION', 'INTERROGATION', 'SUBMISSION'],
    teamsStarted: 32,
    teamsCompleted: 24,
    averageScore: 81.5,
    highestScore: 94
  },
  ROUND_3: {
    id: 'ROUND_3',
    name: 'Round 3: Frame Zero',
    subtitle: 'The Director’s Trial · Anime film cinematic directing',
    status: 'PENDING',
    configuredDurationMinutes: 12,
    currentPhase: 'SLATE',
    phases: ['SLATE', 'STORYBOARD', 'DIRECTING', 'DOSSIER'],
    teamsStarted: 16,
    teamsCompleted: 12,
    averageScore: 88.0,
    highestScore: 98
  },
  NONE: {
    id: 'NONE',
    name: 'Standby',
    subtitle: 'Arena idle',
    status: 'PENDING',
    configuredDurationMinutes: 0,
    currentPhase: 'IDLE',
    phases: ['IDLE'],
    teamsStarted: 0,
    teamsCompleted: 0,
    averageScore: 0,
    highestScore: 0
  }
};

const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'log-1',
    timestamp: new Date(Date.now() - 3600000).toLocaleTimeString(),
    action: 'EVENT_INITIALIZED',
    target: 'Prompt War Arena',
    actor: 'Lead Organizer',
    details: 'Master event rules loaded; MongoDB Atlas connection established.',
    type: 'SYSTEM'
  },
  {
    id: 'log-2',
    timestamp: new Date(Date.now() - 1800000).toLocaleTimeString(),
    action: 'ROUND_STARTED',
    target: 'Round 1 (Prompt Parasite)',
    actor: 'Lead Organizer',
    details: 'Phase set to CREATE with 600s timer.',
    type: 'ROUND'
  },
  {
    id: 'log-3',
    timestamp: new Date(Date.now() - 600000).toLocaleTimeString(),
    action: 'WALKIN_REGISTERED',
    target: 'Team PW-6704 (Binary Pulse)',
    actor: 'Registration Desk',
    details: 'Walk-in registration approved.',
    type: 'TEAM'
  }
];

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('promptwar_admin_auth') === 'true';
  });

  // Event State
  const [eventStatus, setEventStatus] = useState<EventStatus>('LIVE');
  const [activeRound, setActiveRound] = useState<ActiveRoundId>('ROUND_1');
  const [roundSummaries, setRoundSummaries] = useState<Record<ActiveRoundId, RoundSummary>>(INITIAL_ROUNDS_DATA);

  // Authoritative Synchronized Clock State
  const [authoritativeClock, setAuthoritativeClock] = useState<AuthoritativeClockState>({
    serverTime: new Date().toISOString(),
    roundId: 'ROUND_1',
    sessionId: 'pw_sess_default',
    status: 'LOBBY',
    scheduledStartAt: null,
    actualStartedAt: null,
    scheduledEndAt: null,
    actualEndedAt: null,
    remainingSeconds: 600,
    secondsUntilStart: 0,
    totalSeconds: 600,
    durationSeconds: 600,
    pausedAt: null,
    accumulatedPausedSeconds: 0,
    activePhase: 'LOBBY',
    isRoundStarted: false,
  });
  const serverOffsetRef = useRef<number>(0);

  // Timer State (deadline-based)
  const [remainingSeconds, setRemainingSeconds] = useState<number>(600);
  const [totalDurationSeconds, setTotalDurationSeconds] = useState<number>(600);
  const [timerRunning, setTimerRunning] = useState<boolean>(true);

  // Teams & Sync
  const [teams, setTeams] = useState<TeamRecord[]>([]);
  const [isLoadingTeams, setIsLoadingTeams] = useState<boolean>(false);
  const [connectionMode, setConnectionMode] = useState<'LIVE_MONGODB' | 'LOCAL_OFFLINE'>('LIVE_MONGODB');
  const [lastSyncTime, setLastSyncTime] = useState<string>('Just now');
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Audit Logs
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem('promptwar_audit_logs');
      return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
    } catch {
      return INITIAL_AUDIT_LOGS;
    }
  });

  // Settings
  const [settings, setSettings] = useState<EventSettings>(() => {
    try {
      const saved = localStorage.getItem('promptwar_admin_settings');
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Persistence for audit log & settings
  useEffect(() => {
    localStorage.setItem('promptwar_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  useEffect(() => {
    localStorage.setItem('promptwar_admin_settings', JSON.stringify(settings));
  }, [settings]);

  const addAuditLog = useCallback((
    action: string,
    target: string,
    details: string,
    type: AuditLogEntry['type'] = 'SYSTEM'
  ) => {
    const entry: AuditLogEntry = {
      id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      timestamp: new Date().toLocaleTimeString(),
      action,
      target,
      actor: 'Admin Console',
      details,
      type
    };
    setAuditLogs(prev => [entry, ...prev.slice(0, 199)]);
  }, []);

  // Sync Data from Backend
  const refreshData = useCallback(async () => {
    setIsSyncing(true);
    try {
      const [teamsRes, arenaRes, clockRes] = await Promise.all([
        fetchAllTeams(),
        fetchArenaState(),
        fetchAuthoritativeClock(),
      ]);

      if (teamsRes.success) {
        setTeams(teamsRes.teams);
        setConnectionMode(teamsRes.source === 'SERVER' ? 'LIVE_MONGODB' : 'LOCAL_OFFLINE');
      }

      if (clockRes.success && clockRes.clock) {
        const c = clockRes.clock;
        if (c.serverTime) {
          serverOffsetRef.current = Date.parse(c.serverTime) - Date.now();
        }
        setAuthoritativeClock(c);
        if (c.roundId && c.roundId !== 'NONE') {
          setActiveRound(c.roundId as ActiveRoundId);
        }
        if (c.durationSeconds) {
          setTotalDurationSeconds(c.durationSeconds);
        }

        const synNow = Date.now() + serverOffsetRef.current;
        if (c.status === 'LIVE' && c.scheduledEndAt) {
          setEventStatus('LIVE');
          setTimerRunning(true);
          const rem = Math.max(0, Math.ceil((Date.parse(c.scheduledEndAt) - synNow) / 1000));
          setRemainingSeconds(rem);
        } else if (c.status === 'PAUSED' && c.pausedAt && c.scheduledEndAt) {
          setEventStatus('PAUSED');
          setTimerRunning(false);
          const rem = Math.max(0, Math.ceil((Date.parse(c.scheduledEndAt) - Date.parse(c.pausedAt)) / 1000));
          setRemainingSeconds(rem);
        } else if (c.status === 'COMPLETED') {
          setEventStatus('COMPLETED');
          setTimerRunning(false);
          setRemainingSeconds(0);
        } else if (c.status === 'BRIEFING' || c.status === 'SCHEDULED') {
          setEventStatus('LIVE');
          setTimerRunning(true);
          setRemainingSeconds(c.durationSeconds || 600);
        }
      } else if (arenaRes.success && arenaRes.state) {
        const s = arenaRes.state;
        if (s.phaseEndsAt) {
          const diff = Math.max(0, Math.ceil((new Date(s.phaseEndsAt).getTime() - Date.now()) / 1000));
          setRemainingSeconds(diff);
        }
        if (s.phaseDuration) {
          setTotalDurationSeconds(s.phaseDuration);
        }
        setTimerRunning(Boolean(s.isRoundStarted));
      }

      setLastSyncTime(new Date().toLocaleTimeString());
    } catch (e) {
      console.warn('Sync error:', e);
      setConnectionMode('LOCAL_OFFLINE');
    } finally {
      setIsSyncing(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    refreshData();
  }, [refreshData]);

  // Periodic polling every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData();
    }, 3500);
    return () => clearInterval(interval);
  }, [refreshData]);

  // Local Authoritative Timer countdown ticker with drift compensation
  useEffect(() => {
    const ticker = setInterval(() => {
      const synNow = Date.now() + serverOffsetRef.current;

      setAuthoritativeClock(prev => {
        if (!prev) return prev;
        if (prev.status === 'LIVE' && prev.scheduledEndAt) {
          const rem = Math.max(0, Math.ceil((Date.parse(prev.scheduledEndAt) - synNow) / 1000));
          setRemainingSeconds(rem);
          return { ...prev, remainingSeconds: rem };
        } else if ((prev.status === 'BRIEFING' || prev.status === 'SCHEDULED') && prev.scheduledStartAt) {
          const untilStart = Math.max(0, Math.ceil((Date.parse(prev.scheduledStartAt) - synNow) / 1000));
          return { ...prev, secondsUntilStart: untilStart };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(ticker);
  }, []);

  // Auth Functions
  const login = (passcode: string): boolean => {
    if (passcode.trim() === HOST_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('promptwar_admin_auth', 'true');
      addAuditLog('HOST_AUTHENTICATED', 'Admin Session', 'Organizer signed in with passcode.', 'SYSTEM');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('promptwar_admin_auth');
    addAuditLog('HOST_LOGOUT', 'Admin Session', 'Organizer signed out.', 'SYSTEM');
  };

  // Team Actions
  const addTeam = async (teamData: Partial<TeamRecord>): Promise<TeamRecord> => {
    const res = await registerTeam(teamData);
    setTeams(prev => [res.team, ...prev]);
    addAuditLog('TEAM_REGISTERED', res.team.teamName, `Registered ${res.team.teamCode} with ${res.team.members.length} members.`, 'TEAM');
    return res.team;
  };

  const updateTeam = async (codeOrId: string, updates: Partial<TeamRecord>): Promise<boolean> => {
    await updateTeamAPI(codeOrId, updates);
    setTeams(prev => prev.map(t => (t.teamCode === codeOrId || t.id === codeOrId ? { ...t, ...updates } : t)));
    addAuditLog('TEAM_UPDATED', codeOrId, `Updated fields: ${Object.keys(updates).join(', ')}.`, 'TEAM');
    return true;
  };

  const deleteTeam = async (codeOrId: string): Promise<boolean> => {
    await deleteTeamAPI(codeOrId);
    setTeams(prev => prev.filter(t => t.teamCode !== codeOrId && t.id !== codeOrId));
    addAuditLog('TEAM_REMOVED', codeOrId, 'Team permanently removed from competition.', 'TEAM');
    return true;
  };

  const adjustScore = async (
    codeOrId: string,
    round: 'round1' | 'round2' | 'round3',
    score: number,
    reason: string
  ): Promise<boolean> => {
    await adjustTeamScoreAPI(codeOrId, round, score, reason);
    setTeams(prev =>
      prev.map(t => {
        if (t.teamCode === codeOrId || t.id === codeOrId) {
          const updatedScores = { ...t.roundScores, [round]: score };
          const total = updatedScores.round1 + updatedScores.round2 + updatedScores.round3;
          return { ...t, roundScores: updatedScores, totalScore: total };
        }
        return t;
      })
    );
    addAuditLog('SCORE_ADJUSTED', `${codeOrId} (${round.toUpperCase()})`, `Set to ${score}. Reason: ${reason}`, 'SCORE');
    return true;
  };

  const toggleQualification = async (
    codeOrId: string,
    targetRound: 'R2' | 'R3',
    isQualified: boolean
  ): Promise<boolean> => {
    if (targetRound === 'R2') {
      await qualifyTeamR2API(codeOrId, isQualified);
    }
    setTeams(prev =>
      prev.map(t => {
        if (t.teamCode === codeOrId || t.id === codeOrId) {
          return targetRound === 'R2'
            ? { ...t, qualifiedForR2: isQualified }
            : { ...t, qualifiedForR3: isQualified };
        }
        return t;
      })
    );
    addAuditLog('QUALIFICATION_TOGGLED', codeOrId, `Qualified for ${targetRound}: ${isQualified}`, 'TEAM');
    return true;
  };

  // Event & Round Control Actions
  const startEvent = async () => {
    setEventStatus('LIVE');
    setTimerRunning(true);
    await updateArenaState({ isRoundStarted: true });
    addAuditLog('EVENT_STARTED', 'Prompt War', 'Global event set to LIVE state.', 'ROUND');
  };

  const pauseEvent = async () => {
    setEventStatus('PAUSED');
    setTimerRunning(false);
    await updateArenaState({ isRoundStarted: false });
    addAuditLog('EVENT_PAUSED', 'Prompt War', 'Global arena temporarily paused.', 'ROUND');
  };

  const resumeEvent = async () => {
    setEventStatus('LIVE');
    setTimerRunning(true);
    await updateArenaState({ isRoundStarted: true });
    addAuditLog('EVENT_RESUMED', 'Prompt War', 'Global arena resumed.', 'ROUND');
  };

  const endEvent = async () => {
    setEventStatus('COMPLETED');
    setTimerRunning(false);
    await updateArenaState({ isRoundStarted: false, activePhase: 'COMPLETE' });
    addAuditLog('EVENT_CONCLUDED', 'Prompt War', 'Grand tournament officially completed.', 'ROUND');
  };

  const startRound = async (roundId: ActiveRoundId, customDurationMin?: number, briefingSec: number = 60) => {
    setActiveRound(roundId);
    setEventStatus('LIVE');
    setTimerRunning(true);
    const durationMin = customDurationMin || (settings.roundDurations[roundId === 'ROUND_1' ? 'round1' : roundId === 'ROUND_2' ? 'round2' : 'round3'] || 10);
    const durationSeconds = durationMin * 60;
    setRemainingSeconds(durationSeconds);
    setTotalDurationSeconds(durationSeconds);

    setRoundSummaries(prev => ({
      ...prev,
      [roundId]: { ...prev[roundId], status: 'ACTIVE' }
    }));

    // Authoritative Server Synchronized Schedule
    await scheduleRoundAPI({
      roundId,
      durationSeconds,
      briefingSeconds: briefingSec,
    });

    addAuditLog('ROUND_STARTED', roundSummaries[roundId]?.name || roundId, `Round scheduled: ${durationMin}m duration, ${briefingSec}s briefing.`, 'ROUND');
    await refreshData();
  };

  const scheduleRound = async (roundId: ActiveRoundId, durationMin?: number, briefingSec: number = 60) => {
    await startRound(roundId, durationMin, briefingSec);
  };

  const pauseRound = async (roundId: ActiveRoundId) => {
    setTimerRunning(false);
    setEventStatus('PAUSED');
    setRoundSummaries(prev => ({
      ...prev,
      [roundId]: { ...prev[roundId], status: 'PAUSED' }
    }));
    await pauseScheduleAPI();
    addAuditLog('ROUND_PAUSED', roundSummaries[roundId]?.name || roundId, 'Authoritative round timer paused on server.', 'ROUND');
    await refreshData();
  };

  const resumeRound = async (roundId: ActiveRoundId) => {
    setTimerRunning(true);
    setEventStatus('LIVE');
    setRoundSummaries(prev => ({
      ...prev,
      [roundId]: { ...prev[roundId], status: 'ACTIVE' }
    }));
    await resumeScheduleAPI();
    addAuditLog('ROUND_RESUMED', roundSummaries[roundId]?.name || roundId, 'Authoritative round timer resumed on server.', 'ROUND');
    await refreshData();
  };

  const endRound = async (roundId: ActiveRoundId) => {
    setRoundSummaries(prev => ({
      ...prev,
      [roundId]: { ...prev[roundId], status: 'COMPLETED' }
    }));
    setTimerRunning(false);
    setRemainingSeconds(0);
    await endScheduleAPI();
    addAuditLog('ROUND_COMPLETED', roundSummaries[roundId]?.name || roundId, 'Authoritative round concluded on server.', 'ROUND');
    await refreshData();
  };

  const advanceRound = async () => {
    let next: ActiveRoundId = 'NONE';
    if (activeRound === 'ROUND_1') next = 'ROUND_2';
    else if (activeRound === 'ROUND_2') next = 'ROUND_3';
    else if (activeRound === 'ROUND_3') next = 'NONE';

    if (next !== 'NONE') {
      await startRound(next);
      addAuditLog('ROUND_ADVANCED', `From ${activeRound} to ${next}`, 'Advanced to subsequent round.', 'ROUND');
    } else {
      await endEvent();
    }
  };

  const adjustTimer = async (secondsDelta: number) => {
    await extendScheduleAPI(secondsDelta);
    addAuditLog('TIMER_ADJUSTED', activeRound, `Deadline adjusted by ${secondsDelta > 0 ? '+' : ''}${secondsDelta}s globally.`, 'ROUND');
    await refreshData();
  };

  const extendTimer = async (extraSeconds: number = 120) => {
    await adjustTimer(extraSeconds);
  };

  const emergencyStop = async () => {
    setEventStatus('PAUSED');
    setTimerRunning(false);
    await pauseScheduleAPI();
    addAuditLog('EMERGENCY_HALT', 'All Systems', 'Emergency stop initiated. All participant screens held.', 'SYSTEM');
    await refreshData();
  };

  const updateSettings = (newSettings: Partial<EventSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    addAuditLog('SETTINGS_MODIFIED', 'Configuration', 'Updated settings parameters.', 'SETTINGS');
  };

  const purgeAllData = async () => {
    await purgeArenaDataAPI();
    setTeams([]);
    setAuditLogs([]);
    addAuditLog('DATA_PURGED', 'System Ledger', 'All tournament and arena data purged.', 'SYSTEM');
  };

  const exportAuditLogCSV = () => {
    const headers = ['Timestamp', 'Action', 'Target', 'Actor', 'Type', 'Details'];
    const rows = auditLogs.map(l => [
      `"${l.timestamp}"`,
      `"${l.action}"`,
      `"${l.target}"`,
      `"${l.actor}"`,
      `"${l.type}"`,
      `"${l.details.replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `promptwar_audit_log_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        eventStatus,
        activeRound,
        authoritativeClock,
        roundSummaries,
        remainingSeconds,
        totalDurationSeconds,
        timerRunning,
        connectionMode,
        lastSyncTime,
        isSyncing,
        teams,
        isLoadingTeams,
        refreshData,
        addTeam,
        updateTeam,
        deleteTeam,
        adjustScore,
        toggleQualification,
        startEvent,
        pauseEvent,
        resumeEvent,
        endEvent,
        startRound,
        scheduleRound,
        pauseRound,
        resumeRound,
        endRound,
        advanceRound,
        adjustTimer,
        extendTimer,
        emergencyStop,
        auditLogs,
        addAuditLog,
        exportAuditLogCSV,
        settings,
        updateSettings,
        purgeAllData
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
