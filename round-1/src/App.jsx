import React, { useState, useEffect, useRef } from 'react';
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
import TeamRegistrationModal from './components/TeamRegistrationModal';
import { DEFAULT_CHALLENGE } from './data/parasiteChallenge';
import {
  loadLocalSession,
  saveLocalSession,
  generateAnonymousMatches,
  syncSubmissionToBackend,
  fetchAllArenaSubmissions,
  fetchArenaStateAPI,
  fetchAllRegisteredTeams,
  fetchPhaseClockAPI,
  fetchMatchAssignmentsAPI,
} from './utils/parasiteEngine';
import { parasiteAudio } from './utils/parasiteAudio';

export default function App() {
  // Session & Contender State
  const [session, setSession] = useState(loadLocalSession);
  const [challenge, setChallenge] = useState(DEFAULT_CHALLENGE);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerModalTab, setRegisterModalTab] = useState('REGISTER');
  const [isMuted, setIsMuted] = useState(false);

  // Global Arena Tournament State (Controlled by Admin Panel & Server Clock)
  const [arenaState, setArenaState] = useState({
    isRoundStarted: false,
    activePhase: 'LOBBY',
    startedAt: null,
    timers: { create: 600, parasite: 600, evolve: 600 },
  });

  // Server-Authoritative Phase Clock
  const [phaseClock, setPhaseClock] = useState({
    remainingSeconds: 0,
    totalSeconds: 0,
    activePhase: 'LOBBY',
    isRoundStarted: false,
    submittedCount: 0,
  });

  // Active Stage Navigation:
  // 'ENTRY' | 'HOLDING_LOBBY' | 'HOW_IT_WORKS' | 'CHALLENGE' | 'CREATE' | 'MATCH' | 'PARASITE' | 'EVOLVE' | 'COMPLETE'
  const [currentStage, setCurrentStage] = useState('ENTRY');

  // Submissions & Registered Teams State (Real from server)
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [allTeams, setAllTeams] = useState([]);

  // Ref tracking previous server phase for transition handling (autosave, audio, matching)
  const prevServerPhaseRef = useRef('LOBBY');
  const sessionRef = useRef(session);
  sessionRef.current = session;


  // Update session helper
  const handleUpdateSession = (updates) => {
    setSession((prev) => {
      const next = { ...prev, ...updates };
      saveLocalSession(next);
      return next;
    });
  };

  // Continuous real-time polling of phase clock, arena state, teams, and submissions (every 1.5s)
  useEffect(() => {
    let isMounted = true;

    const pollArena = async () => {
      try {
        const [clock, state, subs, tms] = await Promise.all([
          fetchPhaseClockAPI(),
          fetchArenaStateAPI(),
          fetchAllArenaSubmissions(),
          fetchAllRegisteredTeams(),
        ]);

        if (!isMounted) return;

        if (clock && clock.success) {
          setPhaseClock(clock);
        }
        if (state) setArenaState(state);
        if (subs) setAllSubmissions(subs);
        if (tms) setAllTeams(tms);

        const activePhase = (clock && clock.success ? clock.activePhase : state?.activePhase) || 'LOBBY';
        const isRoundStarted = (clock && clock.success && typeof clock.isRoundStarted === 'boolean')
          ? clock.isRoundStarted
          : Boolean(state?.isRoundStarted);
        const currentSession = sessionRef.current;

        // If team is logged in, synchronize screen based on server activePhase
        if (currentSession.teamCode) {
          // Detect phase transition from server
          if (activePhase !== prevServerPhaseRef.current) {
            const prevPhase = prevServerPhaseRef.current;
            console.log(`[Phase Sync] Transition detected: ${prevPhase} -> ${activePhase}`);
            prevServerPhaseRef.current = activePhase;

            // 1. If transitioning AWAY from CREATE, auto-lock first form if not already locked
            if (prevPhase === 'CREATE') {
              if (currentSession.status !== 'FIRST_LOCKED' && !currentSession.firstSubmittedAt) {
                console.log('[Auto-Save] CREATE timer expired — auto-locking first form');
                const autoSubmitData = {
                  firstPrompt: currentSession.firstPrompt || '',
                  firstOutput: currentSession.firstOutput || '',
                };
                handleLockFirstForm(autoSubmitData);
              }
            }

            // 2. If entering MATCH or PARASITE, fetch server-assigned opponents
            if (activePhase === 'MATCH' || activePhase === 'PARASITE') {
              try {
                const matchData = await fetchMatchAssignmentsAPI(currentSession.teamCode);
                if (matchData && matchData.opponents && matchData.opponents.length > 0) {
                  handleUpdateSession({ matchedOpponents: matchData.opponents });
                  parasiteAudio.playSubDrop();
                } else {
                  // Fallback to local pool if server has not assigned yet
                  const fallbackMatches = generateAnonymousMatches(subs || [], currentSession.participantId, currentSession.teamCode);
                  if (fallbackMatches.length > 0) {
                    handleUpdateSession({ matchedOpponents: fallbackMatches });
                    parasiteAudio.playSubDrop();
                  }
                }
              } catch (err) {
                console.warn('[Matchmaking Sync Error]:', err);
              }
            }

            // 3. If transitioning AWAY from EVOLVE, auto-lock final form if not locked
            if (prevPhase === 'EVOLVE') {
              if (currentSession.status !== 'FINAL_LOCKED' && !currentSession.finalSubmittedAt) {
                console.log('[Auto-Save] EVOLVE timer expired — auto-locking final form');
                const autoFinalData = {
                  finalPrompt: currentSession.finalPrompt || '',
                  finalOutput: currentSession.finalOutput || '',
                };
                handleLockFinalForm(autoFinalData);
              }
            }
          }

          // Stage mapping based on server activePhase
          if (!isRoundStarted || activePhase === 'LOBBY') {
            setCurrentStage('HOLDING_LOBBY');
          } else if (activePhase === 'BRIEFING') {
            // Only force to HOW_IT_WORKS if currently in lobby
            setCurrentStage((prev) => (prev === 'HOLDING_LOBBY' || prev === 'ENTRY' ? 'HOW_IT_WORKS' : prev));
          } else if (activePhase === 'CREATE') {
            setCurrentStage('CREATE');
          } else if (activePhase === 'MATCH') {
            setCurrentStage('MATCH');
          } else if (activePhase === 'PARASITE') {
            setCurrentStage('PARASITE');
          } else if (activePhase === 'EVOLVE') {
            setCurrentStage('EVOLVE');
          } else if (activePhase === 'COMPLETE') {
            setCurrentStage('COMPLETE');
          }
        }
      } catch (e) {
        console.warn('Polling error:', e);
      }
    };

    pollArena();
    const interval = setInterval(pollArena, 1500);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Smooth local countdown tick between server clock polls
  useEffect(() => {
    const timerTick = setInterval(() => {
      setPhaseClock((prev) => {
        if (prev.remainingSeconds > 0) {
          return { ...prev, remainingSeconds: prev.remainingSeconds - 1 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timerTick);
  }, []);

  // Gating effect: If host resets/pauses arena, kick active participants back to holding lobby
  useEffect(() => {
    if (session.teamCode && !arenaState.isRoundStarted) {
      if (['HOW_IT_WORKS', 'CHALLENGE', 'CREATE', 'MATCH', 'PARASITE', 'EVOLVE'].includes(currentStage)) {
        setCurrentStage('HOLDING_LOBBY');
      }
    }
  }, [arenaState.isRoundStarted, session.teamCode, currentStage]);

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

    // If host hasn't started round 1, advance to Holding Lobby; if already started, go to active phase stage
    if (!arenaState.isRoundStarted || arenaState.activePhase === 'LOBBY') {
      setCurrentStage('HOLDING_LOBBY');
    } else if (arenaState.activePhase === 'CREATE') {
      setCurrentStage('CREATE');
    } else if (arenaState.activePhase === 'MATCH') {
      setCurrentStage('MATCH');
    } else if (arenaState.activePhase === 'PARASITE') {
      setCurrentStage('PARASITE');
    } else if (arenaState.activePhase === 'EVOLVE') {
      setCurrentStage('EVOLVE');
    } else if (arenaState.activePhase === 'COMPLETE') {
      setCurrentStage('COMPLETE');
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
    if (!arenaState.isRoundStarted || arenaState.activePhase === 'LOBBY') {
      setCurrentStage('HOLDING_LOBBY');
    } else {
      setCurrentStage('HOW_IT_WORKS');
    }
  };

  // STAGE TRANSITION HANDLERS (Synchronized Phase Progression)
  const handleLockFirstForm = async (formData) => {
    const updated = {
      ...sessionRef.current,
      firstPrompt: formData.firstPrompt,
      firstOutput: formData.firstOutput,
      firstSubmittedAt: new Date().toISOString(),
      status: 'FIRST_LOCKED',
    };
    handleUpdateSession(updated);
    await syncSubmissionToBackend(updated);

    // Refresh arena submissions
    const freshSubs = await fetchAllArenaSubmissions();
    if (freshSubs) setAllSubmissions(freshSubs);

    // Check if server already has match assignments ready
    const matchesRes = await fetchMatchAssignmentsAPI(sessionRef.current.teamCode);
    if (matchesRes && matchesRes.opponents && matchesRes.opponents.length > 0) {
      handleUpdateSession({ matchedOpponents: matchesRes.opponents });
    }

    // NOTE: In synchronized phase mode, we do NOT jump to MATCH immediately.
    // The participant stays on Screen3Create's encrypted waiting room until the server timer ends
    // or the admin advances all teams together!
  };

  const handleLockFinalForm = async (formData) => {
    const updated = {
      ...sessionRef.current,
      finalPrompt: formData.finalPrompt,
      finalOutput: formData.finalOutput,
      finalSubmittedAt: new Date().toISOString(),
      status: 'FINAL_LOCKED',
    };
    handleUpdateSession(updated);
    await syncSubmissionToBackend(updated);

    // Participant remains in Screen6Evolve's "PERMANENTLY SEALED" view
    // until server advances to COMPLETE for everyone
  };

  // Global Audio Mute Toggle
  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    parasiteAudio.setMuted(next);
  };


  // Active Timer from Server Clock for Header and Screens
  const currentRemaining = phaseClock.remainingSeconds;
  const isTimedPhase = ['CREATE', 'MATCH', 'PARASITE', 'EVOLVE'].includes(arenaState.activePhase);
  const activeHeaderTimer = isTimedPhase ? currentRemaining : null;

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
            timer={currentRemaining}
            session={session}
            onUpdateSession={handleUpdateSession}
            onLockFirstForm={handleLockFirstForm}
            registeredTeamsCount={Math.max(1, allTeams.length)}
            lockedSubmissionsCount={allSubmissions.filter((s) => Boolean(s.firstOutput && s.firstOutput.trim())).length}
          />
        )}

        {currentStage === 'MATCH' && (
          <Screen4Match
            session={session}
            matchedOpponents={session.matchedOpponents || []}
            registeredTeamsCount={Math.max(1, allTeams.length)}
            lockedSubmissionsCount={allSubmissions.filter((s) => Boolean(s.firstOutput && s.firstOutput.trim())).length}
            timer={currentRemaining}
            onProceedToParasite={() => setCurrentStage('PARASITE')}
            onOpponentsMatched={async (freshSubs) => {
              setAllSubmissions(freshSubs);
              // Check server assignments first
              const matchRes = await fetchMatchAssignmentsAPI(session.teamCode);
              if (matchRes && matchRes.opponents && matchRes.opponents.length > 0) {
                handleUpdateSession({ matchedOpponents: matchRes.opponents });
                parasiteAudio.playSubDrop();
              } else {
                const matches = generateAnonymousMatches(freshSubs, session.participantId, session.teamCode);
                if (matches.length > 0) {
                  handleUpdateSession({ matchedOpponents: matches });
                  parasiteAudio.playSubDrop();
                }
              }
            }}
          />
        )}

        {currentStage === 'PARASITE' && (
          <Screen5Parasite
            session={session}
            matchedOpponents={session.matchedOpponents || []}
            timer={currentRemaining}
            onUpdateSession={handleUpdateSession}
            onProceedToEvolve={() => setCurrentStage('EVOLVE')}
          />
        )}

        {currentStage === 'EVOLVE' && (
          <Screen6Evolve
            challenge={challenge}
            session={session}
            timer={currentRemaining}
            onUpdateSession={handleUpdateSession}
            onLockFinalForm={handleLockFinalForm}
          />
        )}

        {currentStage === 'COMPLETE' && (
          <Screen7Complete
            session={session}
            leaderboard={allTeams.filter((t) => t.round1?.score != null).map((t, i) => ({
              rank: `0${i + 1}`,
              team: t.teamName,
              teamCode: t.teamCode,
              score: t.round1.score,
              isYou: t.teamCode === session.teamCode,
            }))}
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
