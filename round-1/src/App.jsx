import React, { useState, useEffect } from 'react';
import NetworkCanvas from './components/NetworkCanvas';
import ParasiteHeader from './components/ParasiteHeader';
import Screen0Entry from './components/screens/Screen0Entry';
import HoldingLobby from './components/screens/HoldingLobby';
import Screen1HowItWorks from './components/screens/Screen1HowItWorks';
import Screen2Challenge from './components/screens/Screen2Challenge';
import Screen3Create from './components/screens/Screen3Create';
import Screen4Match from './components/screens/Screen4Match';
import Screen5Parasite from './components/screens/Screen5Parasite';
import Screen6Evolve from './components/screens/Screen6Evolve';
import Screen7Complete from './components/screens/Screen7Complete';
import TechTatvaAdminPortal from './components/admin/TechTatvaAdminPortal';
import TeamRegistrationModal from './components/TeamRegistrationModal';
import { DEFAULT_CHALLENGE } from './data/parasiteChallenge';
import {
  loadLocalSession,
  saveLocalSession,
  generateAnonymousMatches,
  syncSubmissionToBackend,
  fetchAllArenaSubmissions,
  fetchArenaStateAPI,
} from './utils/parasiteEngine';
import { parasiteAudio } from './utils/parasiteAudio';

export default function App() {
  // Session & Contender State
  const [session, setSession] = useState(loadLocalSession);
  const [challenge, setChallenge] = useState(DEFAULT_CHALLENGE);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerModalTab, setRegisterModalTab] = useState('REGISTER');
  const [isMuted, setIsMuted] = useState(false);

  // Global Arena Tournament State (Controlled by Admin Panel)
  const [arenaState, setArenaState] = useState({
    isRoundStarted: false,
    activePhase: 'LOBBY',
    startedAt: null,
    timers: { create: 600, parasite: 300, evolve: 600 },
  });

  // Active Stage Navigation:
  // 'ENTRY' | 'HOLDING_LOBBY' | 'HOW_IT_WORKS' | 'CHALLENGE' | 'CREATE' | 'MATCH' | 'PARASITE' | 'EVOLVE' | 'COMPLETE'
  const [currentStage, setCurrentStage] = useState('ENTRY');

  // Timers (in seconds)
  const [createTimer, setCreateTimer] = useState(600); // 10:00
  const [parasiteTimer, setParasiteTimer] = useState(300); // 05:00
  const [evolveTimer, setEvolveTimer] = useState(600); // 10:00

  // All Submissions list (for matchmaking)
  const [allSubmissions, setAllSubmissions] = useState([]);

  // Check URL route for hidden Admin Console: #/admin or ?admin=true
  const checkIsAdminRoute = () => {
    const hash = window.location.hash.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    const search = window.location.search.toLowerCase();
    return (
      hash === '#/admin' ||
      hash === '#admin' ||
      path.startsWith('/admin') ||
      search.includes('admin=true')
    );
  };

  const [isAdminRoute, setIsAdminRoute] = useState(checkIsAdminRoute);

  useEffect(() => {
    const onRouteCheck = () => {
      setIsAdminRoute(checkIsAdminRoute());
    };
    window.addEventListener('hashchange', onRouteCheck);
    window.addEventListener('popstate', onRouteCheck);
    return () => {
      window.removeEventListener('hashchange', onRouteCheck);
      window.removeEventListener('popstate', onRouteCheck);
    };
  }, []);

  // Poll arena state from backend every 3 seconds
  useEffect(() => {
    let isMounted = true;
    const pollArena = async () => {
      try {
        const state = await fetchArenaStateAPI();
        if (isMounted && state) {
          setArenaState(state);
        }
      } catch (e) {}
    };
    pollArena();
    const interval = setInterval(pollArena, 3000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Gating effect: If host resets/pauses arena, kick active participants back to holding lobby
  useEffect(() => {
    if (session.teamCode && !arenaState.isRoundStarted) {
      if (['HOW_IT_WORKS', 'CHALLENGE', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE'].includes(currentStage)) {
        setCurrentStage('HOLDING_LOBBY');
      }
    }
  }, [arenaState.isRoundStarted, session.teamCode, currentStage]);

  // Sync initial submissions for peer matchmaking
  useEffect(() => {
    fetchAllArenaSubmissions().then((subs) => {
      if (subs && subs.length > 0) {
        setAllSubmissions(subs);
      } else {
        setAllSubmissions([session]);
      }
    });
  }, []);

  // Update session helper
  const handleUpdateSession = (updates) => {
    setSession((prev) => {
      const next = { ...prev, ...updates };
      saveLocalSession(next);
      return next;
    });
  };

  const handleOpenRegister = (tab = 'REGISTER') => {
    setRegisterModalTab(tab);
    setIsRegisterOpen(true);
  };

  const handleTeamAuthenticated = (teamData) => {
    if (!teamData) return;
    const updated = {
      ...session,
      teamCode: teamData.teamCode,
      teamName: teamData.teamName,
      leaderName: teamData.leaderName,
      leaderContact: teamData.leaderContact,
      college: teamData.college,
      members: teamData.members,
      memberCount: teamData.memberCount || (teamData.members ? teamData.members.length : 1),
      anonymousId: teamData.teamName ? teamData.teamName.toUpperCase() : session.anonymousId,
      status: 'REGISTERED',
      ...(teamData.round1?.firstOutput ? { firstOutput: teamData.round1.firstOutput } : {}),
      ...(teamData.round1?.firstPrompt ? { firstPrompt: teamData.round1.firstPrompt } : {}),
      ...(teamData.round1?.finalOutput ? { finalOutput: teamData.round1.finalOutput } : {}),
      ...(teamData.round1?.finalPrompt ? { finalPrompt: teamData.round1.finalPrompt } : {}),
    };
    handleUpdateSession(updated);

    // If host hasn't started round 1, advance to Holding Lobby; if already started, go to HOW_IT_WORKS
    if (!arenaState.isRoundStarted) {
      setCurrentStage('HOLDING_LOBBY');
    } else {
      setCurrentStage('HOW_IT_WORKS');
    }
  };

  const handleLogoutTeam = () => {
    handleUpdateSession({
      teamCode: '',
      teamName: '',
      leaderName: '',
      leaderContact: '',
      college: 'Chandigarh University',
      members: [],
      status: 'NOT_REGISTERED',
    });
    setCurrentStage('ENTRY');
  };

  const handleProceedFromEntry = () => {
    if (!session.teamCode) {
      handleOpenRegister('REGISTER');
      return;
    }
    // Gating check: Round started or waiting lobby?
    if (!arenaState.isRoundStarted) {
      setCurrentStage('HOLDING_LOBBY');
    } else {
      setCurrentStage('HOW_IT_WORKS');
    }
  };

  // Timer Tick Effects
  useEffect(() => {
    let interval = null;
    if (currentStage === 'CREATE') {
      interval = setInterval(() => {
        setCreateTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    } else if (currentStage === 'PARASITE') {
      interval = setInterval(() => {
        setParasiteTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    } else if (currentStage === 'EVOLVE') {
      interval = setInterval(() => {
        setEvolveTimer((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentStage]);

  // STAGE TRANSITION HANDLERS
  const handleLockFirstForm = (formData) => {
    const updated = {
      ...session,
      firstPrompt: formData.firstPrompt,
      firstOutput: formData.firstOutput,
      firstSubmittedAt: new Date().toISOString(),
      status: 'FIRST_LOCKED',
    };
    handleUpdateSession(updated);
    syncSubmissionToBackend(updated);

    setTimeout(() => {
      const matches = generateAnonymousMatches(allSubmissions, session.participantId);
      handleUpdateSession({ matchedOpponents: matches, status: 'MATCHED' });
      setCurrentStage('MATCH');
    }, 2800);
  };

  const handleLockFinalForm = (formData) => {
    const updated = {
      ...session,
      finalPrompt: formData.finalPrompt,
      finalOutput: formData.finalOutput,
      finalSubmittedAt: new Date().toISOString(),
      status: 'FINAL_LOCKED',
    };
    handleUpdateSession(updated);
    syncSubmissionToBackend(updated);

    setTimeout(() => {
      setCurrentStage('COMPLETE');
    }, 2400);
  };

  // Global Audio Mute Toggle
  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    parasiteAudio.setMuted(next);
  };

  // If visiting admin route, render standalone TechTatvaAdminPortal
  if (isAdminRoute) {
    return (
      <TechTatvaAdminPortal
        onClose={() => {
          window.location.hash = '';
          const url = new URL(window.location.href);
          url.searchParams.delete('admin');
          window.history.pushState({}, '', url.pathname + url.hash);
          setIsAdminRoute(false);
        }}
        challenge={challenge}
        onUpdateChallenge={setChallenge}
      />
    );
  }

  // Active Timer for Header
  let activeHeaderTimer = null;
  if (currentStage === 'CREATE') activeHeaderTimer = createTimer;
  else if (currentStage === 'PARASITE') activeHeaderTimer = parasiteTimer;
  else if (currentStage === 'EVOLVE') activeHeaderTimer = evolveTimer;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-bone-100 font-sans relative overflow-x-hidden">
      {/* Background Generative Network Canvas */}
      <NetworkCanvas density={currentStage === 'PARASITE' ? 60 : 40} />

      {/* Top Header with Tech Tatva Club Emblem - ZERO HOST BUTTONS */}
      <ParasiteHeader
        currentPhase={currentStage}
        timer={activeHeaderTimer}
        session={session}
        onUpdateSession={handleUpdateSession}
        onOpenRegister={handleOpenRegister}
        onLogoutTeam={handleLogoutTeam}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Main Viewport Routing */}
      <main className="relative z-10">
        {currentStage === 'ENTRY' && (
          <Screen0Entry
            session={session}
            onProceed={handleProceedFromEntry}
            onOpenRegister={handleOpenRegister}
            onLogoutTeam={handleLogoutTeam}
          />
        )}

        {currentStage === 'HOLDING_LOBBY' && (
          <HoldingLobby
            session={session}
            onProceed={() => setCurrentStage('HOW_IT_WORKS')}
            onOpenRegister={handleOpenRegister}
            onLogoutTeam={handleLogoutTeam}
          />
        )}

        {currentStage === 'HOW_IT_WORKS' && (
          <Screen1HowItWorks onProceed={() => setCurrentStage('CHALLENGE')} />
        )}

        {currentStage === 'CHALLENGE' && (
          <Screen2Challenge
            challenge={challenge}
            onStartCreating={() => setCurrentStage('CREATE')}
          />
        )}

        {currentStage === 'CREATE' && (
          <Screen3Create
            challenge={challenge}
            timer={createTimer}
            session={session}
            onUpdateSession={handleUpdateSession}
            onLockFirstForm={handleLockFirstForm}
            allSubmissionsCount={Math.max(47, allSubmissions.length)}
          />
        )}

        {currentStage === 'MATCH' && (
          <Screen4Match
            session={session}
            matchedOpponents={session.matchedOpponents}
            onProceedToParasite={() => setCurrentStage('PARASITE')}
          />
        )}

        {currentStage === 'PARASITE' && (
          <Screen5Parasite
            session={session}
            matchedOpponents={session.matchedOpponents}
            timer={parasiteTimer}
            onUpdateSession={handleUpdateSession}
            onProceedToEvolve={() => setCurrentStage('EVOLVE')}
          />
        )}

        {currentStage === 'EVOLVE' && (
          <Screen6Evolve
            challenge={challenge}
            session={session}
            timer={evolveTimer}
            onUpdateSession={handleUpdateSession}
            onLockFinalForm={handleLockFinalForm}
          />
        )}

        {currentStage === 'COMPLETE' && (
          <Screen7Complete
            session={session}
            leaderboard={allSubmissions.filter((s) => s.score != null)}
          />
        )}
      </main>

      {/* Real Team Registration & Session Pass Modal */}
      <TeamRegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        currentSession={session}
        initialTab={registerModalTab}
        onTeamRegistered={handleTeamAuthenticated}
        onTeamAuthenticated={handleTeamAuthenticated}
      />
    </div>
  );
}
