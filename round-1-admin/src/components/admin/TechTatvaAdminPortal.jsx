import React, { useState, useEffect } from 'react';
import {
  Shield,
  Users,
  Sliders,
  CheckCircle2,
  Clock,
  Play,
  Pause,
  RotateCcw,
  X,
  Edit3,
  ArrowRight,
  Eye,
  Trophy,
  Sparkles,
  RefreshCw,
  Award,
  ExternalLink,
  Phone,
  School,
  UserCheck,
  UserX,
  Trash2,
  Search,
  Download,
  Plus,
  AlertTriangle,
  Key,
  Radio,
  FileText,
  Check,
  ChevronRight,
  Database,
  Lock,
} from 'lucide-react';
import {
  fetchArenaStateAPI,
  updateArenaStateAPI,
  fetchAllTeamsAPI,
  deleteTeamAPI,
  updateTeamAPI,
  submitJudgeScoreAPI,
  setRound2QualificationAPI,
  registerTeamAPI,
  fetchAllArenaSubmissions,
  fetchPhaseClockAPI,
  purgeArenaDataAPI,
} from '../../utils/parasiteEngine';
import { DEFAULT_CHALLENGE } from '../../data/parasiteChallenge';
import { parasiteAudio } from '../../utils/parasiteAudio';

const HOST_PASSCODE = 'TATVA@2026';

export default function TechTatvaAdminPortal({
  isOpen = true,
  onClose,
  challenge = DEFAULT_CHALLENGE,
  onUpdateChallenge,
}) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('tatva_admin_auth') === 'true';
  });
  const [passcodeAttempt, setPasscodeAttempt] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Console Tab:
  // 'ARENA' | 'TEAMS' | 'RESPONSES' | 'JUDGING' | 'LEADERBOARD' | 'CHALLENGE'
  const [activeTab, setActiveTab] = useState('ARENA');

  // Arena Controller State
  const [arenaState, setArenaState] = useState({
    isRoundStarted: false,
    activePhase: 'LOBBY',
    startedAt: null,
    timers: { create: 600, parasite: 600, evolve: 600 },
  });
  const [phaseClock, setPhaseClock] = useState({
    remainingSeconds: 0,
    totalSeconds: 0,
    activePhase: 'LOBBY',
    isRoundStarted: false,
    submittedCount: 0,
    minTeamsRequired: 3,
  });
  const [isUpdatingArena, setIsUpdatingArena] = useState(false);

  // Teams State
  const [teams, setTeams] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Modals & Active Selections
  const [editingTeam, setEditingTeam] = useState(null);
  const [deletingTeam, setDeletingTeam] = useState(null);
  const [isWalkInOpen, setIsWalkInOpen] = useState(false);
  const [selectedTeamForView, setSelectedTeamForView] = useState(null);
  const [selectedTeamForJudging, setSelectedTeamForJudging] = useState(null);

  // Judging Rubric State
  const [scores, setScores] = useState({
    promptQuality: 20, // max 25
    problemUnderstanding: 22, // max 25
    outputQuality: 26, // max 30
    improvement: 18, // max 20
    judgeNotes: '',
  });
  const [isSavingScore, setIsSavingScore] = useState(false);

  // Walk-in Registration Form State
  const [walkInForm, setWalkInForm] = useState({
    teamName: '',
    leaderName: '',
    leaderContact: '',
    college: 'Chandigarh University',
    members: ['', ''],
  });

  // Edit Team Form State
  const [editForm, setEditForm] = useState({
    teamName: '',
    leaderName: '',
    leaderContact: '',
    college: '',
    members: [],
  });

  // Load Arena State & Teams
  const loadConsoleData = async () => {
    setLoadingData(true);
    try {
      const [curArena, curTeams, curSubs, curClock] = await Promise.all([
        fetchArenaStateAPI(),
        fetchAllTeamsAPI(),
        fetchAllArenaSubmissions(),
        fetchPhaseClockAPI(),
      ]);

      if (curArena) setArenaState(curArena);
      if (curTeams) setTeams(curTeams);
      if (curSubs) setSubmissions(curSubs);
      if (curClock && curClock.success) setPhaseClock(curClock);
    } catch (e) {
      console.error('Failed to load console data:', e);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadConsoleData();
      const interval = setInterval(loadConsoleData, 3000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  // Smooth local tick for countdown
  useEffect(() => {
    if (isAuthenticated) {
      const tick = setInterval(() => {
        setPhaseClock((prev) => ({
          ...prev,
          remainingSeconds: Math.max(0, prev.remainingSeconds - 1),
        }));
      }, 1000);
      return () => clearInterval(tick);
    }
  }, [isAuthenticated]);

  // Auth Handler
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (passcodeAttempt.trim() === HOST_PASSCODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem('tatva_admin_auth', 'true');
      setAuthError('');
      parasiteAudio.playSubDrop();
    } else {
      setAuthError('INVALID MASTER PASSCODE. ACCESS DENIED.');
      parasiteAudio.playInfect();
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('tatva_admin_auth');
  };

  // -------------------------------------------------------------
  // ARENA CONTROLLER ACTIONS
  // -------------------------------------------------------------
  const handleToggleRoundStart = async (shouldStart) => {
    if (shouldStart && teams.length < 3) {
      alert(`⚠️ CANNOT START ROUND 01 ARENA\n\nQuorum Requirement: At least 3 squads must be registered before the round can start!\n\nCurrently registered: ${teams.length} / 3 squads.\nPlease use the "+ WALK-IN TEAM" button to register contenders.`);
      return;
    }

    setIsUpdatingArena(true);
    try {
      const updates = {
        isRoundStarted: shouldStart,
      };
      const data = await updateArenaStateAPI(updates);
      if (!data) {
        alert(`❌ Arena Start Blocked: Server error`);
        return;
      }
      setArenaState(data);
      const clock = await fetchPhaseClockAPI();
      if (clock && clock.success) setPhaseClock(clock);
      parasiteAudio.playSubDrop();
    } catch (e) {
      alert('Failed to update arena state on server.');
    } finally {
      setIsUpdatingArena(false);
    }
  };

  const handleBroadcastPhase = async (phaseName) => {
    setIsUpdatingArena(true);
    try {
      const data = await updateArenaStateAPI({ activePhase: phaseName });
      if (data) setArenaState(data);
      const clock = await fetchPhaseClockAPI();
      if (clock && clock.success) setPhaseClock(clock);
      parasiteAudio.playLock();
    } finally {
      setIsUpdatingArena(false);
    }
  };

  const handleForceAdvancePhase = async () => {
    const sequence = ['LOBBY', 'BRIEFING', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE', 'COMPLETE'];
    const current = arenaState.activePhase || 'LOBBY';
    const idx = sequence.indexOf(current);
    if (idx < 0 || idx >= sequence.length - 1) {
      alert('Round is already at final stage (COMPLETE).');
      return;
    }
    const nextPhase = sequence[idx + 1];
    if (window.confirm(`FORCE ADVANCE COHORT TO: ${nextPhase}?\n\nThis will skip the remaining timer and immediately advance all participant screens across the arena.`)) {
      handleBroadcastPhase(nextPhase);
    }
  };

  const handleResetArena = async () => {
    if (!window.confirm('RESET ARENA STATE? This will stop Round 01 and return all participants to the Holding Lobby.')) {
      return;
    }
    setIsUpdatingArena(true);
    try {
      const updated = await updateArenaStateAPI({
        isRoundStarted: false,
        activePhase: 'LOBBY',
        startedAt: null,
      });
      setArenaState(updated);
    } finally {
      setIsUpdatingArena(false);
    }
  };

  const handlePurgeAllData = async () => {
    if (!window.confirm('⚠️ PURGE ALL TEST DATA?\n\nThis will permanently delete all test teams, wipe all submissions, and reset the arena to initial LOBBY state with 0 squads.\n\nAre you sure you want to clean up all test data?')) {
      return;
    }
    setIsUpdatingArena(true);
    try {
      const data = await purgeArenaDataAPI();
      if (data.success) {
        alert('✅ Tournament Reset Complete: All test teams and submissions have been wiped clean.');
        loadConsoleData();
      }
    } catch (e) {
      alert('Failed to purge data.');
    } finally {
      setIsUpdatingArena(false);
    }
  };

  // -------------------------------------------------------------
  // TEAM MANAGEMENT ACTIONS
  // -------------------------------------------------------------
  const handleDeleteTeamConfirm = async () => {
    if (!deletingTeam) return;
    try {
      const res = await deleteTeamAPI(deletingTeam.teamCode);
      if (res.success) {
        setTeams((prev) => prev.filter((t) => t.teamCode !== deletingTeam.teamCode));
        setSubmissions((prev) => prev.filter((s) => s.teamCode !== deletingTeam.teamCode));
        if (selectedTeamForJudging?.teamCode === deletingTeam.teamCode) {
          setSelectedTeamForJudging(null);
        }
        if (selectedTeamForView?.teamCode === deletingTeam.teamCode) {
          setSelectedTeamForView(null);
        }
        setDeletingTeam(null);
        parasiteAudio.playInfect();
      } else {
        alert('Failed to delete team.');
      }
    } catch (e) {
      alert('Error deleting team: ' + e.message);
    }
  };

  const handleOpenEditModal = (team) => {
    setEditingTeam(team);
    setEditForm({
      teamName: team.teamName || '',
      leaderName: team.leaderName || '',
      leaderContact: team.leaderContact || '',
      college: team.college || 'Chandigarh University',
      members: team.members ? [...team.members] : [],
    });
  };

  const handleSaveEditTeam = async (e) => {
    e.preventDefault();
    if (!editingTeam) return;
    try {
      const res = await updateTeamAPI(editingTeam.teamCode, {
        teamName: editForm.teamName,
        leaderName: editForm.leaderName,
        leaderContact: editForm.leaderContact,
        college: editForm.college,
        members: editForm.members.filter((m) => m.trim().length > 0),
      });

      if (res.success && res.team) {
        setTeams((prev) => prev.map((t) => (t.teamCode === editingTeam.teamCode ? res.team : t)));
        setEditingTeam(null);
      } else {
        alert('Failed to update team.');
      }
    } catch (e) {
      alert('Error updating team: ' + e.message);
    }
  };

  const handleToggleR2Qualification = async (teamCode, currentStatus) => {
    try {
      const nextStatus = !currentStatus;
      const res = await setRound2QualificationAPI(teamCode, nextStatus);
      if (res.success && res.team) {
        setTeams((prev) => prev.map((t) => (t.teamCode === teamCode ? res.team : t)));
      }
    } catch (e) {
      alert('Error updating qualification: ' + e.message);
    }
  };

  const handleCreateWalkInTeam = async (e) => {
    e.preventDefault();
    try {
      const filteredMembers = walkInForm.members.filter((m) => m.trim().length > 0);
      const res = await registerTeamAPI({
        teamName: walkInForm.teamName,
        leaderName: walkInForm.leaderName,
        leaderContact: walkInForm.leaderContact,
        college: walkInForm.college,
        members: filteredMembers,
      });

      if (res.success && res.team) {
        setTeams((prev) => [res.team, ...prev]);
        setIsWalkInOpen(false);
        setWalkInForm({
          teamName: '',
          leaderName: '',
          leaderContact: '',
          college: 'Chandigarh University',
          members: ['', ''],
        });
        alert(`Team Registered! Code: ${res.team.teamCode}`);
      }
    } catch (e) {
      alert('Failed to register team: ' + e.message);
    }
  };

  // -------------------------------------------------------------
  // JUDGING & SCORING ACTIONS
  // -------------------------------------------------------------
  const handleSelectTeamForJudging = (team) => {
    setSelectedTeamForJudging(team);
    setActiveTab('JUDGING');
    const existing = team.round1?.evaluation || {};
    setScores({
      promptQuality: existing.promptQuality ?? 20,
      problemUnderstanding: existing.problemUnderstanding ?? 22,
      outputQuality: existing.outputQuality ?? 26,
      improvement: existing.improvement ?? 18,
      judgeNotes: existing.judgeNotes || '',
    });
  };

  const totalJudgeScore =
    Number(scores.promptQuality) +
    Number(scores.problemUnderstanding) +
    Number(scores.outputQuality) +
    Number(scores.improvement);

  const handleSaveScore = async () => {
    if (!selectedTeamForJudging) return;
    setIsSavingScore(true);
    try {
      const scorePayload = {
        promptQuality: Number(scores.promptQuality),
        problemUnderstanding: Number(scores.problemUnderstanding),
        outputQuality: Number(scores.outputQuality),
        improvement: Number(scores.improvement),
        total: totalJudgeScore,
        judgeNotes: scores.judgeNotes,
      };

      const res = await submitJudgeScoreAPI(selectedTeamForJudging.teamCode, scorePayload);
      if (res.success && res.team) {
        setTeams((prev) => prev.map((t) => (t.teamCode === selectedTeamForJudging.teamCode ? res.team : t)));
        setSelectedTeamForJudging(res.team);
        alert(`Saved Score: ${totalJudgeScore}/100 for Team ${res.team.teamName} (${res.team.teamCode})`);
      } else {
        alert('Score saved locally.');
      }
    } catch (e) {
      alert('Error saving score: ' + e.message);
    } finally {
      setIsSavingScore(false);
    }
  };

  // -------------------------------------------------------------
  // CSV EXPORT FOR ROUND 2 ORGANIZERS
  // -------------------------------------------------------------
  const handleExportCSV = () => {
    if (teams.length === 0) {
      alert('No teams to export.');
      return;
    }

    const headers = [
      'Team Code',
      'Team Name',
      'Leader Name',
      'Leader Phone',
      'College',
      'Squad Size',
      'Squad Members',
      'Prompt Quality (25)',
      'Problem Understanding (25)',
      'Output Quality (30)',
      'Parasite Improvement (20)',
      'Total Score (100)',
      'Round 2 Qualified',
      'Judge Notes',
    ];

    const rows = teams.map((t) => {
      const evalData = t.round1?.evaluation || {};
      return [
        `"${t.teamCode}"`,
        `"${(t.teamName || '').replace(/"/g, '""')}"`,
        `"${(t.leaderName || '').replace(/"/g, '""')}"`,
        `"${(t.leaderContact || '').replace(/"/g, '""')}"`,
        `"${(t.college || '').replace(/"/g, '""')}"`,
        t.memberCount || (t.members ? t.members.length : 1),
        `"${(t.members || []).join('; ').replace(/"/g, '""')}"`,
        evalData.promptQuality ?? '',
        evalData.problemUnderstanding ?? '',
        evalData.outputQuality ?? '',
        evalData.improvement ?? '',
        t.round1?.score ?? evalData.total ?? '',
        t.round1?.isQualifiedR2 ? 'YES' : 'NO',
        `"${(evalData.judgeNotes || '').replace(/"/g, '""')}"`,
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `prompt_war_round1_results_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered teams list
  const filteredTeams = teams.filter((t) => {
    const matchSearch =
      !searchQuery ||
      t.teamName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.teamCode?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.leaderName?.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchSearch) return false;

    if (statusFilter === 'QUALIFIED') return t.round1?.isQualifiedR2;
    if (statusFilter === 'UNQUALIFIED') return !t.round1?.isQualifiedR2;
    if (statusFilter === 'SCORED') return t.round1?.score != null;
    return true;
  });

  // Get submission matching for team responses
  const getTeamSubmission = (team) => {
    if (!team) return null;
    const sub = submissions.find(
      (s) =>
        (s.teamCode && s.teamCode.toUpperCase() === team.teamCode?.toUpperCase()) ||
        s.teamName?.toLowerCase() === team.teamName?.toLowerCase()
    );
    return sub || {
      firstPrompt: team.round1?.firstPrompt,
      firstOutput: team.round1?.firstOutput,
      finalPrompt: team.round1?.finalPrompt,
      finalOutput: team.round1?.finalOutput,
      mutationNotes: team.round1?.mutationNotes,
    };
  };

  // -------------------------------------------------------------
  // VIEW: AUTHENTICATION LOCK SCREEN
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#070709] text-bone-100 flex items-center justify-center p-4">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan/10 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-crimson/10 blur-3xl pointer-events-none rounded-full" />

        <div className="relative w-full max-w-md p-8 rounded-2xl border border-white/[0.12] bg-[#0c0d12]/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)]">
          {/* Header Branding */}
          <div className="flex flex-col items-center text-center space-y-3 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <img
                src="/tech-tatva-logo.png"
                alt="Tech Tatva Club"
                className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
              />
              <div className="h-8 w-[1px] bg-white/10" />
              <img
                src="/prompt-war-logo.png"
                alt="Prompt War"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-cyan">
                TECH TATVA HOST CONTROL DECK
              </div>
              <div className="font-mono text-[10px] text-bone-400 mt-0.5">
                PROMPT WAR 2026 // ROUND 01 ARENA
              </div>
            </div>
          </div>

          {/* Passcode Form */}
          <form onSubmit={handleAuthSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block font-mono text-[11px] text-bone-400 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan" />
                <span>ENTER HOST MASTER PASSCODE</span>
              </label>
              <input
                type="password"
                value={passcodeAttempt}
                onChange={(e) => setPasscodeAttempt(e.target.value)}
                placeholder="TATVA@2026"
                autoFocus
                className="w-full px-4 py-3 rounded bg-charcoal-900/80 border border-white/[0.15] focus:border-cyan text-white font-mono text-sm tracking-widest outline-none transition-colors"
              />
            </div>

            {authError && (
              <div className="p-3 rounded bg-crimson/10 border border-crimson/30 text-crimson text-xs font-mono flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded bg-cyan hover:bg-white text-charcoal-950 font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Key className="w-4 h-4" />
              <span>AUTHENTICATE & ACCESS CONSOLE</span>
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/[0.06] text-center font-mono text-[10px] text-bone-500">
            RESTRICTED ACCESS // AUTHORIZED TECH TATVA ORGANIZERS ONLY
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: AUTHENTICATED STANDALONE ADMIN CONSOLE
  // -------------------------------------------------------------
  return (
    <div className="fixed inset-0 z-50 bg-[#08080b] text-bone-100 flex flex-col font-sans overflow-hidden">
      {/* Top Universal Host Bar */}
      <header className="h-16 border-b border-white/[0.1] bg-[#0c0d12]/95 backdrop-blur-xl px-6 flex items-center justify-between shrink-0">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/tech-tatva-logo.png"
              alt="Tech Tatva Club"
              className="h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
            />
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />
            <img
              src="/prompt-war-logo.png"
              alt="Prompt War"
              className="h-8 w-auto object-contain hidden sm:block"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black tracking-wider text-bone-100 uppercase">
                TECH TATVA ADMIN CONSOLE
              </span>
              <span className="text-bone-600">//</span>
              <span className="font-mono text-[11px] text-cyan font-bold">ROUND 01 CONTROL DECK</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] text-bone-400">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${arenaState.isRoundStarted ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{arenaState.isRoundStarted ? 'ARENA: ROUND 01 LIVE' : 'ARENA: HOLDING LOBBY'}</span>
              </span>
              <span>•</span>
              <span>ROSTER: {teams.length} TEAMS</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">
                QUALIFIED R2: {teams.filter((t) => t.round1?.isQualifiedR2).length}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <div className="hidden lg:flex items-center gap-1 bg-charcoal-900/60 p-1 rounded-lg border border-white/[0.08]">
          {[
            { id: 'ARENA', label: 'ARENA CONTROLLER', icon: Radio },
            { id: 'TEAMS', label: `TEAMS ROSTER (${teams.length})`, icon: Users },
            { id: 'RESPONSES', label: 'LIVE RESPONSES', icon: FileText },
            { id: 'JUDGING', label: 'JUDGING RUBRIC', icon: Award },
            { id: 'LEADERBOARD', label: 'LEADERBOARD & EXPORT', icon: Trophy },
            { id: 'CHALLENGE', label: 'CHALLENGE CONFIG', icon: Sliders },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded font-mono text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-cyan text-charcoal-950 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                    : 'text-bone-400 hover:text-bone-100 hover:bg-white/[0.04]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Refresh & Session Tools */}
        <div className="flex items-center gap-3">
          <button
            onClick={loadConsoleData}
            disabled={loadingData}
            className="p-2 rounded border border-white/[0.1] bg-charcoal-900/60 hover:border-cyan text-bone-300 hover:text-cyan font-mono text-xs transition-colors"
            title="Refresh database records"
          >
            <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin text-cyan' : ''}`} />
          </button>

          <button
            onClick={() => {
              window.location.hash = '#/projector';
            }}
            className="px-3.5 py-1.5 rounded border border-cyan/40 bg-cyan/15 hover:bg-cyan hover:text-charcoal-950 text-cyan font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            title="Launch Fullscreen Audience Projector Broadcast"
          >
            <span>📽️ AUDIENCE PROJECTOR</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 rounded border border-white/[0.1] bg-charcoal-900/60 hover:border-crimson hover:text-crimson text-bone-400 font-mono text-xs transition-colors"
            title="Lock console"
          >
            LOCK
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded border border-white/[0.1] hover:bg-white/[0.05] text-bone-400 hover:text-white"
              title="Return to Arena View"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Tab Bar */}
      <div className="lg:hidden flex overflow-x-auto border-b border-white/[0.08] bg-[#0b0c10] p-2 gap-1 shrink-0">
        {[
          { id: 'ARENA', label: 'ARENA', icon: Radio },
          { id: 'TEAMS', label: 'TEAMS', icon: Users },
          { id: 'RESPONSES', label: 'RESPONSES', icon: FileText },
          { id: 'JUDGING', label: 'JUDGE', icon: Award },
          { id: 'LEADERBOARD', label: 'RANKS', icon: Trophy },
          { id: 'CHALLENGE', label: 'CONFIG', icon: Sliders },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded whitespace-nowrap font-mono text-xs font-bold ${
                isActive ? 'bg-cyan text-charcoal-950' : 'text-bone-400'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Console Content */}
      <div className="flex-1 overflow-y-auto p-6 max-w-7xl w-full mx-auto space-y-6">
        {/* ========================================================= */}
        {/* TAB 1: ARENA CONTROLLER                                   */}
        {/* ========================================================= */}
        {activeTab === 'ARENA' && (
          <div className="space-y-6">
            {/* Master Start / Stop Round 1 Gate */}
            <div className="p-8 rounded-2xl border-2 border-cyan/40 bg-gradient-to-b from-[#10131d] to-[#0b0c10] shadow-[0_0_60px_rgba(0,240,255,0.1)] relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyan animate-pulse" />
                    <span className="font-mono text-xs font-black text-cyan uppercase tracking-widest">
                      GLOBAL TOURNAMENT GATEWAY
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-mono text-white">
                    ROUND 01 : PROMPT PARASITE
                  </h2>
                  <p className="text-sm text-bone-300 leading-relaxed font-sans">
                    Controls whether contenders can enter the challenge arena from the Holding Lobby.
                    When stopped, registered teams wait securely in the lobby. Clicking <strong>START ROUND 01</strong> broadcasts
                    the start event to all active participant sessions immediately.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                  {arenaState.isRoundStarted ? (
                    <button
                      onClick={() => handleToggleRoundStart(false)}
                      disabled={isUpdatingArena}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-crimson hover:bg-white text-white hover:text-charcoal-950 font-mono text-sm font-black uppercase tracking-widest shadow-[0_0_30px_rgba(255,42,95,0.4)] transition-all flex items-center justify-center gap-3"
                    >
                      <Pause className="w-5 h-5" />
                      <span>PAUSE / STOP ROUND 01</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleRoundStart(true)}
                      disabled={isUpdatingArena}
                      className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan hover:bg-white text-charcoal-950 font-mono text-sm font-black uppercase tracking-widest shadow-[0_0_40px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center gap-3 animate-pulse"
                    >
                      <Play className="w-5 h-5 fill-current" />
                      <span>START ROUND 01 ARENA</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      window.location.hash = '#/projector';
                    }}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl border-2 border-cyan/50 bg-cyan/15 hover:bg-cyan hover:text-charcoal-950 text-cyan font-mono text-xs font-black uppercase tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.25)] transition-all flex items-center justify-center gap-2"
                    title="Launch Fullscreen Audience Projector Broadcast"
                  >
                    <span>📽️ AUDIENCE PROJECTOR</span>
                  </button>

                  <button
                    onClick={handleResetArena}
                    disabled={isUpdatingArena}
                    className="w-full sm:w-auto px-4 py-4 rounded-xl border border-white/20 bg-charcoal-900/60 hover:border-white text-bone-300 font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    title="Reset arena to Holding Lobby"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>RESET</span>
                  </button>

                  <button
                    onClick={handlePurgeAllData}
                    disabled={isUpdatingArena}
                    className="w-full sm:w-auto px-4 py-4 rounded-xl border border-crimson/40 bg-crimson/10 hover:bg-crimson hover:text-white text-crimson font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    title="Permanently wipe all test teams and submissions"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>PURGE TEST DATA</span>
                  </button>
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
                <div>
                  <div className="text-bone-500 uppercase text-[10px]">CURRENT ARENA STATUS</div>
                  <div className={`font-bold mt-1 ${arenaState.isRoundStarted ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {arenaState.isRoundStarted ? 'ACTIVE & UNLOCKED' : 'LOCKED (HOLDING LOBBY)'}
                  </div>
                </div>
                <div>
                  <div className="text-bone-500 uppercase text-[10px]">ACTIVE PHASE BROADCAST</div>
                  <div className="font-bold text-bone-100 mt-1">{arenaState.activePhase || 'LOBBY'}</div>
                </div>
                <div>
                  <div className="text-bone-500 uppercase text-[10px]">STARTED TIMESTAMP</div>
                  <div className="font-bold text-bone-200 mt-1">
                    {arenaState.startedAt ? new Date(arenaState.startedAt).toLocaleTimeString() : 'NOT STARTED'}
                  </div>
                </div>
                <div>
                  <div className="text-bone-500 uppercase text-[10px]">STANDBY CONTENDERS</div>
                  <div className="font-bold text-cyan mt-1">{teams.length} REGISTERED SQUADS</div>
                </div>
              </div>
            </div>

            {/* Quorum Alert if fewer than 3 teams registered */}
            {teams.length < 3 && (
              <div className="p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 flex items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-amber-300 uppercase">
                      QUORUM LOCK: MINIMUM 3 REGISTERED SQUADS REQUIRED
                    </span>
                    <p className="text-bone-400 text-[11px] mt-0.5">
                      Round 01 requires at least 3 teams for balanced peer mutation matchmaking. Currently registered: <strong>{teams.length} / 3</strong>.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsWalkInOpen(true)}
                  className="px-3 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-charcoal-950 font-bold uppercase text-[11px] shrink-0"
                >
                  + Add Walk-In Team
                </button>
              </div>
            )}

            {/* Live Server-Synchronized Phase Clock Widget */}
            {arenaState.isRoundStarted && (
              <div className="p-6 rounded-xl border border-cyan/40 bg-[#0c0d12]/90 space-y-4 shadow-[0_0_35px_rgba(0,240,255,0.08)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan/15 border border-cyan/40 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-cyan animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-cyan uppercase tracking-wider">
                          LIVE ARENA PHASE CLOCK
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold rounded uppercase">
                          SYNCHRONIZED (ALL CLIENTS)
                        </span>
                      </div>
                      <div className="text-xs text-bone-400 font-mono mt-0.5">
                        Active Stage: <span className="text-white font-bold">{phaseClock.activePhase || arenaState.activePhase}</span>
                      </div>
                    </div>
                  </div>

                  {/* Countdown Display & Force Advance */}
                  <div className="flex items-center gap-4">
                    <div className="text-right font-mono">
                      <div className="text-2xl sm:text-3xl font-black text-cyan tracking-wider drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                        {String(Math.floor(phaseClock.remainingSeconds / 60)).padStart(2, '0')}:
                        {String(phaseClock.remainingSeconds % 60).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-bone-400 uppercase">TIME REMAINING IN PHASE</div>
                    </div>

                    <button
                      onClick={handleForceAdvancePhase}
                      disabled={isUpdatingArena}
                      className="px-4 py-2.5 rounded-lg bg-cyan hover:bg-white text-charcoal-950 font-mono text-xs font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
                      title="Skip timer and immediately advance all participants to the next phase"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>FORCE ADVANCE PHASE</span>
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                {phaseClock.totalSeconds > 0 && (
                  <div>
                    <div className="w-full bg-charcoal-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan h-full transition-all duration-1000"
                        style={{
                          width: `${Math.max(0, Math.min(100, Math.round(((phaseClock.totalSeconds - phaseClock.remainingSeconds) / phaseClock.totalSeconds) * 100)))}%`,
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-bone-500 font-mono mt-1">
                      <span>Phase Duration: {Math.floor(phaseClock.totalSeconds / 60)}m</span>
                      <span>
                        Submissions Captured: {phaseClock.submittedCount || 0} / {teams.length} Squads
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Broadcast Phase Overrides */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0c0d12]/80 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    PHASE BROADCASTER & MANUAL OVERRIDE
                  </h3>
                  <p className="text-xs text-bone-400">
                    Host can broadcast stage progression alerts or force-switch stages on all connected client machines.
                  </p>
                </div>
                <span className="font-mono text-xs text-cyan">PORT: 5001 SYNCED</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
                {[
                  { id: 'LOBBY', label: '00 // LOBBY' },
                  { id: 'BRIEFING', label: '01 // BRIEFING (1M)' },
                  { id: 'CREATE', label: '02 // FIRST FORM (10M)' },
                  { id: 'MATCH', label: '03 // MATCHING (30S)' },
                  { id: 'PARASITE', label: '04 // PARASITE (10M)' },
                  { id: 'EVOLVE', label: '05 // EVOLVE (10M)' },
                  { id: 'COMPLETE', label: '06 // COMPLETE' },
                ].map((phase) => (
                  <button
                    key={phase.id}
                    onClick={() => handleBroadcastPhase(phase.id)}
                    className={`p-3 rounded border font-mono text-xs text-left transition-all ${
                      (arenaState.activePhase === phase.id || phaseClock.activePhase === phase.id)
                        ? 'border-cyan bg-cyan/15 text-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'border-white/[0.08] bg-charcoal-900/40 text-bone-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {phase.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: TEAMS ROSTER & MANAGEMENT                          */}
        {/* ========================================================= */}
        {activeTab === 'TEAMS' && (
          <div className="space-y-4">
            {/* Action Bar: Search, Filters & Walk-in Register */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1 max-w-md">
                <div className="relative w-full">
                  <Search className="w-4 h-4 text-bone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by Team Name, Code (PW-XXXX) or Leader..."
                    className="w-full pl-9 pr-4 py-2 rounded bg-charcoal-900/80 border border-white/[0.1] focus:border-cyan text-xs font-mono text-white placeholder-bone-600 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded bg-charcoal-900/80 border border-white/[0.1] text-xs font-mono text-bone-200 outline-none"
                >
                  <option value="ALL">ALL TEAMS ({teams.length})</option>
                  <option value="QUALIFIED">R2 QUALIFIED ({teams.filter((t) => t.round1?.isQualifiedR2).length})</option>
                  <option value="UNQUALIFIED">NOT QUALIFIED</option>
                  <option value="SCORED">SCORED</option>
                </select>

                <button
                  onClick={() => setIsWalkInOpen(true)}
                  className="px-4 py-2 rounded bg-cyan hover:bg-white text-charcoal-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ WALK-IN TEAM</span>
                </button>

                <button
                  onClick={handleExportCSV}
                  className="px-3 py-2 rounded border border-white/20 bg-charcoal-900/60 hover:border-cyan hover:text-cyan text-bone-300 font-mono text-xs flex items-center gap-1.5"
                  title="Export to CSV for Round 2 organizers"
                >
                  <Download className="w-4 h-4" />
                  <span>CSV</span>
                </button>
              </div>
            </div>

            {/* Teams Roster Table */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-charcoal-900/80 border-b border-white/[0.08] text-bone-400 text-[10px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3">PASS CODE</th>
                      <th className="p-3">TEAM NAME</th>
                      <th className="p-3">LEADER & CONTACT</th>
                      <th className="p-3">COLLEGE</th>
                      <th className="p-3">SQUAD</th>
                      <th className="p-3 text-center">SCORE</th>
                      <th className="p-3 text-center">R2 QUALIFIED</th>
                      <th className="p-3 text-right">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {filteredTeams.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="p-8 text-center text-bone-500">
                          No teams found matching search criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredTeams.map((team) => {
                        const isQual = team.round1?.isQualifiedR2;
                        const score = team.round1?.score;
                        return (
                          <tr key={team.teamCode} className="hover:bg-white/[0.02] transition-colors">
                            {/* Pass Code */}
                            <td className="p-3 font-bold text-cyan">
                              {team.teamCode}
                            </td>

                            {/* Team Name */}
                            <td className="p-3 font-bold text-white max-w-[180px] truncate">
                              {team.teamName}
                            </td>

                            {/* Leader */}
                            <td className="p-3 text-bone-300">
                              <div>{team.leaderName}</div>
                              <div className="text-[10px] text-bone-500">{team.leaderContact || '—'}</div>
                            </td>

                            {/* College */}
                            <td className="p-3 text-bone-400 max-w-[140px] truncate text-[11px]">
                              {team.college || 'Chandigarh University'}
                            </td>

                            {/* Squad */}
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-bone-300 text-[10px]">
                                {team.memberCount || (team.members ? team.members.length : 1)} Members
                              </span>
                            </td>

                            {/* Score */}
                            <td className="p-3 text-center">
                              {score != null ? (
                                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                                  {score}/100
                                </span>
                              ) : (
                                <span className="text-bone-600">—</span>
                              )}
                            </td>

                            {/* R2 Qualified Toggle */}
                            <td className="p-3 text-center">
                              <button
                                onClick={() => handleToggleR2Qualification(team.teamCode, isQual)}
                                className={`px-2.5 py-1 rounded font-mono text-[10px] font-bold uppercase transition-all ${
                                  isQual
                                    ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-crimson/20 hover:border-crimson hover:text-crimson'
                                    : 'bg-charcoal-900 border border-white/10 text-bone-500 hover:border-emerald-500 hover:text-emerald-400'
                                }`}
                                title="Click to toggle Round 2 qualification"
                              >
                                {isQual ? 'QUALIFIED' : 'NOT QUALIFIED'}
                              </button>
                            </td>

                            {/* Actions */}
                            <td className="p-3 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <button
                                  onClick={() => handleSelectTeamForJudging(team)}
                                  className="p-1.5 rounded border border-white/10 hover:border-cyan text-bone-400 hover:text-cyan"
                                  title="Judge & Score Team"
                                >
                                  <Award className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  onClick={() => {
                                    setSelectedTeamForView(team);
                                    setActiveTab('RESPONSES');
                                  }}
                                  className="p-1.5 rounded border border-white/10 hover:border-cyan text-bone-400 hover:text-cyan"
                                  title="View Prompts & Outputs"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  onClick={() => handleOpenEditModal(team)}
                                  className="p-1.5 rounded border border-white/10 hover:border-bone-200 text-bone-400 hover:text-bone-200"
                                  title="Edit Team Details"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  onClick={() => setDeletingTeam(team)}
                                  className="p-1.5 rounded border border-white/10 hover:border-crimson text-bone-400 hover:text-crimson"
                                  title="Permanently Delete Team"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: LIVE RESPONSES & PROMPTS                           */}
        {/* ========================================================= */}
        {activeTab === 'RESPONSES' && (
          <div className="space-y-4">
            {/* Contender Selector */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/[0.08] bg-[#0c0d12]">
              <div>
                <h3 className="font-mono text-xs font-bold uppercase text-bone-400">
                  INSPECT CONTENDER RESPONSES
                </h3>
                <div className="text-sm font-bold text-white font-mono mt-0.5">
                  {selectedTeamForView ? `${selectedTeamForView.teamName} (${selectedTeamForView.teamCode})` : 'Select a team to inspect'}
                </div>
              </div>

              <select
                value={selectedTeamForView ? selectedTeamForView.teamCode : ''}
                onChange={(e) => {
                  const target = teams.find((t) => t.teamCode === e.target.value);
                  setSelectedTeamForView(target || null);
                }}
                className="px-4 py-2 rounded bg-charcoal-900 border border-white/20 text-xs font-mono text-cyan outline-none"
              >
                <option value="">-- SELECT TEAM ROSTER --</option>
                {teams.map((t) => (
                  <option key={t.teamCode} value={t.teamCode}>
                    {t.teamCode} // {t.teamName}
                  </option>
                ))}
              </select>
            </div>

            {selectedTeamForView ? (
              (() => {
                const subData = getTeamSubmission(selectedTeamForView);
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* First Form */}
                    <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0c0d12] space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan">
                          <span>STAGE 1: FIRST FORM (BASELINE)</span>
                        </div>
                        <span className="font-mono text-[10px] text-bone-400">
                          {subData.firstOutput ? `${subData.firstOutput.split(/\s+/).length} Words` : 'No Submission'}
                        </span>
                      </div>

                      <div>
                        <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest mb-1.5">
                          RAW PROMPT FED TO AI MODEL:
                        </div>
                        <pre className="p-3 rounded bg-charcoal-950 border border-white/[0.06] text-bone-200 font-mono text-[11px] whitespace-pre-wrap max-h-56 overflow-y-auto">
                          {subData.firstPrompt || 'No prompt recorded yet.'}
                        </pre>
                      </div>

                      <div>
                        <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest mb-1.5">
                          AI MODEL RAW OUTPUT:
                        </div>
                        <div className="p-3 rounded bg-charcoal-950 border border-white/[0.06] text-bone-200 text-xs whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed">
                          {subData.firstOutput || 'Contender has not submitted First Form yet.'}
                        </div>
                      </div>
                    </div>

                    {/* Final Evolved Form */}
                    <div className="p-5 rounded-xl border border-white/[0.08] bg-[#0c0d12] space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-acid-lime">
                          <span>STAGE 3: FINAL EVOLVED FORM (MUTATION)</span>
                        </div>
                        <span className="font-mono text-[10px] text-bone-400">
                          {subData.finalOutput ? `${subData.finalOutput.split(/\s+/).length} Words` : 'In Progress'}
                        </span>
                      </div>

                      <div>
                        <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest mb-1.5">
                          MUTATED PROMPT (PARASITE HYBRID):
                        </div>
                        <pre className="p-3 rounded bg-charcoal-950 border border-white/[0.06] text-bone-200 font-mono text-[11px] whitespace-pre-wrap max-h-56 overflow-y-auto">
                          {subData.finalPrompt || 'No final prompt recorded yet.'}
                        </pre>
                      </div>

                      <div>
                        <div className="font-mono text-[10px] text-bone-400 uppercase tracking-widest mb-1.5">
                          EVOLVED AI OUTPUT:
                        </div>
                        <div className="p-3 rounded bg-charcoal-950 border border-white/[0.06] text-bone-200 text-xs whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed">
                          {subData.finalOutput || 'Contender has not locked Final Form yet.'}
                        </div>
                      </div>

                      {/* Quick Jump to Judge Button */}
                      <button
                        onClick={() => handleSelectTeamForJudging(selectedTeamForView)}
                        className="w-full py-2.5 rounded bg-cyan hover:bg-white text-charcoal-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <Award className="w-4 h-4" />
                        <span>SCORE THIS TEAM IN JUDGING RUBRIC</span>
                      </button>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="p-12 text-center rounded-xl border border-white/[0.06] bg-[#0c0d12] text-bone-500 font-mono text-xs">
                Select a team from the dropdown above or click "Inspect" in the Teams Roster tab.
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: JUDGING RUBRIC CONSOLE                             */}
        {/* ========================================================= */}
        {activeTab === 'JUDGING' && (
          <div className="space-y-6">
            {/* Team Picker for Judging */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0c0d12] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-bone-400 uppercase tracking-widest">
                  OFFICIAL JUDGING PORTAL
                </span>
                <h3 className="font-mono text-base font-bold text-white mt-0.5">
                  {selectedTeamForJudging
                    ? `${selectedTeamForJudging.teamName} [PASS: ${selectedTeamForJudging.teamCode}]`
                    : 'Select a team to evaluate'}
                </h3>
              </div>

              <select
                value={selectedTeamForJudging ? selectedTeamForJudging.teamCode : ''}
                onChange={(e) => {
                  const target = teams.find((t) => t.teamCode === e.target.value);
                  if (target) handleSelectTeamForJudging(target);
                }}
                className="px-4 py-2 rounded bg-charcoal-900 border border-white/20 text-xs font-mono text-cyan outline-none"
              >
                <option value="">-- SELECT TEAM TO SCORE --</option>
                {teams.map((t) => (
                  <option key={t.teamCode} value={t.teamCode}>
                    {t.teamCode} // {t.teamName} {t.round1?.score != null ? `(${t.round1.score}/100)` : ''}
                  </option>
                ))}
              </select>
            </div>

            {selectedTeamForJudging ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left 6 cols: Side-by-side Response Viewer for Judge */}
                <div className="lg:col-span-6 space-y-4">
                  {(() => {
                    const sub = getTeamSubmission(selectedTeamForJudging);
                    return (
                      <>
                        <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0c0d12]">
                          <div className="font-mono text-xs font-bold text-cyan mb-2">
                            BASELINE OUTPUT (FIRST FORM)
                          </div>
                          <div className="p-3 rounded bg-charcoal-950 border border-white/[0.06] text-xs text-bone-300 max-h-52 overflow-y-auto leading-relaxed">
                            {sub.firstOutput || 'Contender has not submitted First Form yet.'}
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-white/[0.08] bg-[#0c0d12]">
                          <div className="font-mono text-xs font-bold text-acid-lime mb-2">
                            FINAL MUTATED OUTPUT (AFTER PARASITE)
                          </div>
                          <div className="p-3 rounded bg-charcoal-950 border border-white/[0.06] text-xs text-bone-300 max-h-52 overflow-y-auto leading-relaxed">
                            {sub.finalOutput || 'Contender has not locked Final Form yet.'}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>

                {/* Right 6 cols: 4-Metric Rubric Scoring Sliders */}
                <div className="lg:col-span-6 p-6 rounded-xl border border-white/[0.08] bg-[#0c0d12] space-y-5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-bone-200">
                      EVALUATION METRICS
                    </div>
                    <div className="font-mono text-lg font-black text-cyan">
                      TOTAL: {totalJudgeScore} / 100
                    </div>
                  </div>

                  {/* Slider 1: Prompt Quality */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-bone-300">Prompt Engineering & Framing</span>
                      <span className="text-cyan font-bold">{scores.promptQuality} / 25</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="25"
                      value={scores.promptQuality}
                      onChange={(e) => setScores({ ...scores, promptQuality: e.target.value })}
                      className="w-full accent-cyan cursor-pointer"
                    />
                    <div className="text-[10px] text-bone-500 font-mono">
                      Clarity, systemic role, constraints, contextual depth.
                    </div>
                  </div>

                  {/* Slider 2: Problem Understanding */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-bone-300">Problem & Constraint Understanding</span>
                      <span className="text-cyan font-bold">{scores.problemUnderstanding} / 25</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="25"
                      value={scores.problemUnderstanding}
                      onChange={(e) => setScores({ ...scores, problemUnderstanding: e.target.value })}
                      className="w-full accent-cyan cursor-pointer"
                    />
                    <div className="text-[10px] text-bone-500 font-mono">
                      Addressed core constraints, anti-hallucination, edge cases.
                    </div>
                  </div>

                  {/* Slider 3: Output Quality */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-bone-300">Output Rigor & Depth</span>
                      <span className="text-cyan font-bold">{scores.outputQuality} / 30</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={scores.outputQuality}
                      onChange={(e) => setScores({ ...scores, outputQuality: e.target.value })}
                      className="w-full accent-cyan cursor-pointer"
                    />
                    <div className="text-[10px] text-bone-500 font-mono">
                      Completeness, structure, intellectual density, zero fluff.
                    </div>
                  </div>

                  {/* Slider 4: Parasite Evolution */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1">
                      <span className="text-bone-300">Parasite Assimilation & Improvement Delta</span>
                      <span className="text-cyan font-bold">{scores.improvement} / 20</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      value={scores.improvement}
                      onChange={(e) => setScores({ ...scores, improvement: e.target.value })}
                      className="w-full accent-cyan cursor-pointer"
                    />
                    <div className="text-[10px] text-bone-500 font-mono">
                      Clear leap between First Form and Final Form via stolen peer mechanics.
                    </div>
                  </div>

                  {/* Judge Qualitative Notes */}
                  <div>
                    <label className="block font-mono text-[10px] text-bone-400 uppercase tracking-widest mb-1.5">
                      JUDGE QUALITATIVE FEEDBACK NOTES:
                    </label>
                    <textarea
                      rows={3}
                      value={scores.judgeNotes}
                      onChange={(e) => setScores({ ...scores, judgeNotes: e.target.value })}
                      placeholder="e.g. Excellent architectural framework, cleanly absorbed opponent's threat vector..."
                      className="w-full p-3 rounded bg-charcoal-900 border border-white/10 text-xs font-mono text-bone-200 outline-none focus:border-cyan"
                    />
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleSaveScore}
                    disabled={isSavingScore}
                    className="w-full py-3 rounded bg-cyan hover:bg-white text-charcoal-950 font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>SAVE VERDICT & UPDATE TOURNAMENT SCORES</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center rounded-xl border border-white/[0.06] bg-[#0c0d12] text-bone-500 font-mono text-xs">
                Select a team from the dropdown to start scoring against the 4 official rubric metrics.
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: LEADERBOARD & EXPORT                               */}
        {/* ========================================================= */}
        {activeTab === 'LEADERBOARD' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/[0.08] bg-[#0c0d12]">
              <div>
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  ROUND 01 STANDINGS & ADVANCEMENT
                </h3>
                <p className="text-xs text-bone-400">
                  Export ranked standings to CSV to pass directly to Round 2 & Round 3 organizers.
                </p>
              </div>

              <button
                onClick={handleExportCSV}
                className="px-5 py-2.5 rounded bg-cyan hover:bg-white text-charcoal-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <Download className="w-4 h-4" />
                <span>EXPORT OFFICIAL CSV FOR ROUND 2</span>
              </button>
            </div>

            {/* Ranked Table */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0c0d12] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-charcoal-900/80 border-b border-white/[0.08] text-bone-400 text-[10px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3 text-center">RANK</th>
                      <th className="p-3">PASS CODE</th>
                      <th className="p-3">TEAM NAME</th>
                      <th className="p-3">LEADER</th>
                      <th className="p-3 text-center">TOTAL SCORE</th>
                      <th className="p-3 text-center">ROUND 2 ADVANCEMENT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {[...teams]
                      .sort((a, b) => (b.round1?.score ?? -1) - (a.round1?.score ?? -1))
                      .map((team, idx) => {
                        const isQual = team.round1?.isQualifiedR2;
                        const score = team.round1?.score;
                        return (
                          <tr key={team.teamCode} className="hover:bg-white/[0.02]">
                            <td className="p-3 text-center font-bold">
                              {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
                            </td>
                            <td className="p-3 font-bold text-cyan">{team.teamCode}</td>
                            <td className="p-3 font-bold text-white">{team.teamName}</td>
                            <td className="p-3 text-bone-300">{team.leaderName}</td>
                            <td className="p-3 text-center">
                              {score != null ? (
                                <span className="font-bold text-emerald-400">{score} / 100</span>
                              ) : (
                                <span className="text-bone-600">Pending</span>
                              )}
                            </td>
                            <td className="p-3 text-center">
                              <button
                                onClick={() => handleToggleR2Qualification(team.teamCode, isQual)}
                                className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                                  isQual
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                    : 'bg-charcoal-900 text-bone-500 border border-white/10'
                                }`}
                              >
                                {isQual ? 'ADVANCED TO R2' : 'HOLD'}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 6: CHALLENGE & SYSTEM SETTINGS                        */}
        {/* ========================================================= */}
        {activeTab === 'CHALLENGE' && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0c0d12] space-y-4">
              <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                CHALLENGE CONFIGURATION
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block font-mono text-[10px] text-bone-400 uppercase mb-1">
                    CHALLENGE TITLE:
                  </label>
                  <input
                    type="text"
                    value={challenge.title || ''}
                    onChange={(e) => onUpdateChallenge && onUpdateChallenge({ ...challenge, title: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-xs font-mono text-white outline-none focus:border-cyan"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-bone-400 uppercase mb-1">
                    CHALLENGE BRIEF:
                  </label>
                  <textarea
                    rows={4}
                    value={challenge.brief || ''}
                    onChange={(e) => onUpdateChallenge && onUpdateChallenge({ ...challenge, brief: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-xs font-mono text-bone-200 outline-none focus:border-cyan leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* MODAL: WALK-IN TEAM REGISTRATION                          */}
      {/* ========================================================= */}
      {isWalkInOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 rounded-2xl border border-white/[0.12] bg-[#0e1017] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="font-mono text-xs font-bold text-cyan uppercase tracking-wider flex items-center gap-2">
                <Plus className="w-4 h-4" />
                <span>MANUAL WALK-IN REGISTRATION</span>
              </div>
              <button
                onClick={() => setIsWalkInOpen(false)}
                className="p-1 rounded text-bone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateWalkInTeam} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-bone-400 text-[10px] uppercase mb-1">TEAM NAME *</label>
                <input
                  type="text"
                  required
                  value={walkInForm.teamName}
                  onChange={(e) => setWalkInForm({ ...walkInForm, teamName: e.target.value })}
                  placeholder="e.g. CyberSynapse"
                  className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-bone-400 text-[10px] uppercase mb-1">LEADER NAME *</label>
                  <input
                    type="text"
                    required
                    value={walkInForm.leaderName}
                    onChange={(e) => setWalkInForm({ ...walkInForm, leaderName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                  />
                </div>
                <div>
                  <label className="block text-bone-400 text-[10px] uppercase mb-1">CONTACT PHONE *</label>
                  <input
                    type="tel"
                    required
                    value={walkInForm.leaderContact}
                    onChange={(e) => setWalkInForm({ ...walkInForm, leaderContact: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-bone-400 text-[10px] uppercase mb-1">COLLEGE / INSTITUTION</label>
                <input
                  type="text"
                  value={walkInForm.college}
                  onChange={(e) => setWalkInForm({ ...walkInForm, college: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                />
              </div>

              <div>
                <label className="block text-bone-400 text-[10px] uppercase mb-1">
                  SQUAD MEMBERS (COMMA SEPARATED)
                </label>
                <input
                  type="text"
                  placeholder="Member 1, Member 2, Member 3"
                  value={walkInForm.members.join(', ')}
                  onChange={(e) =>
                    setWalkInForm({
                      ...walkInForm,
                      members: e.target.value.split(',').map((m) => m.trim()),
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                />
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsWalkInOpen(false)}
                  className="px-4 py-2 rounded text-bone-400 hover:text-white"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-cyan hover:bg-white text-charcoal-950 font-bold"
                >
                  REGISTER & GENERATE PASS
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: EDIT TEAM DETAILS                                  */}
      {/* ========================================================= */}
      {editingTeam && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 rounded-2xl border border-white/[0.12] bg-[#0e1017] shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="font-mono text-xs font-bold text-bone-200 uppercase tracking-wider flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-cyan" />
                <span>EDIT TEAM: {editingTeam.teamCode}</span>
              </div>
              <button
                onClick={() => setEditingTeam(null)}
                className="p-1 rounded text-bone-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEditTeam} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-bone-400 text-[10px] uppercase mb-1">TEAM NAME</label>
                <input
                  type="text"
                  required
                  value={editForm.teamName}
                  onChange={(e) => setEditForm({ ...editForm, teamName: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-bone-400 text-[10px] uppercase mb-1">LEADER NAME</label>
                  <input
                    type="text"
                    required
                    value={editForm.leaderName}
                    onChange={(e) => setEditForm({ ...editForm, leaderName: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                  />
                </div>
                <div>
                  <label className="block text-bone-400 text-[10px] uppercase mb-1">CONTACT PHONE</label>
                  <input
                    type="tel"
                    required
                    value={editForm.leaderContact}
                    onChange={(e) => setEditForm({ ...editForm, leaderContact: e.target.value })}
                    className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-bone-400 text-[10px] uppercase mb-1">COLLEGE / INSTITUTION</label>
                <input
                  type="text"
                  value={editForm.college}
                  onChange={(e) => setEditForm({ ...editForm, college: e.target.value })}
                  className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                />
              </div>

              <div>
                <label className="block text-bone-400 text-[10px] uppercase mb-1">
                  SQUAD MEMBERS (COMMA SEPARATED)
                </label>
                <input
                  type="text"
                  value={editForm.members.join(', ')}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      members: e.target.value.split(',').map((m) => m.trim()),
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-charcoal-900 border border-white/10 text-white outline-none focus:border-cyan"
                />
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingTeam(null)}
                  className="px-4 py-2 rounded text-bone-400 hover:text-white"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-cyan hover:bg-white text-charcoal-950 font-bold"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: DELETE TEAM CONFIRMATION                           */}
      {/* ========================================================= */}
      {deletingTeam && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md p-6 rounded-2xl border border-crimson/50 bg-[#120a0d] shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-crimson">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <div className="font-mono text-sm font-bold uppercase">PERMANENT TEAM PURGE</div>
            </div>

            <p className="text-xs text-bone-300 leading-relaxed">
              Are you certain you want to permanently delete team <strong>{deletingTeam.teamName}</strong> ({deletingTeam.teamCode})?
              This will purge all team records, submissions, and scores from MongoDB and local storage. This action cannot be undone.
            </p>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end gap-2 font-mono text-xs">
              <button
                onClick={() => setDeletingTeam(null)}
                className="px-4 py-2 rounded border border-white/10 text-bone-400 hover:text-white"
              >
                CANCEL
              </button>
              <button
                onClick={handleDeleteTeamConfirm}
                className="px-5 py-2 rounded bg-crimson hover:bg-white text-white hover:text-charcoal-950 font-bold uppercase"
              >
                PURGE TEAM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
