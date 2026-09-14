import React, { useState, useEffect } from 'react';
import NetworkCanvas from './components/NetworkCanvas';
import ParasiteHeader from './components/ParasiteHeader';
import Screen0Entry from './components/screens/Screen0Entry';
import Screen1HowItWorks from './components/screens/Screen1HowItWorks';
import Screen2Challenge from './components/screens/Screen2Challenge';
import Screen3Create from './components/screens/Screen3Create';
import Screen4Match from './components/screens/Screen4Match';
import Screen5Parasite from './components/screens/Screen5Parasite';
import Screen6Evolve from './components/screens/Screen6Evolve';
import Screen7Complete from './components/screens/Screen7Complete';
import ParasiteAdminPortal from './components/ParasiteAdminPortal';
import TeamRegistrationModal from './components/TeamRegistrationModal';
import { DEFAULT_CHALLENGE } from './data/parasiteChallenge';
import {
  loadLocalSession,
  saveLocalSession,
  generateAnonymousMatches,
  syncSubmissionToBackend,
  fetchAllArenaSubmissions,
} from './utils/parasiteEngine';
import { parasiteAudio } from './utils/parasiteAudio';

export default function App() {
  // Session & Contender State
  const [session, setSession] = useState(loadLocalSession);
  const [challenge, setChallenge] = useState(DEFAULT_CHALLENGE);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [registerModalTab, setRegisterModalTab] = useState('REGISTER');
  const [isMuted, setIsMuted] = useState(false);

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
  };

  // Active Stage Navigation:
  // 'ENTRY' | 'HOW_IT_WORKS' | 'CHALLENGE' | 'CREATE' | 'MATCH' | 'PARASITE' | 'EVOLVE' | 'COMPLETE'
  const [currentStage, setCurrentStage] = useState('ENTRY');

  // Timers (in seconds)
  const [createTimer, setCreateTimer] = useState(600);   // 10:00
  const [parasiteTimer, setParasiteTimer] = useState(300); // 05:00
  const [evolveTimer, setEvolveTimer] = useState(600);   // 10:00

  // All Submissions list (for matchmaking & admin)
  const [allSubmissions, setAllSubmissions] = useState([]);

  // Check URL query parameters for ?admin=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdminOpen(true);
    }
  }, []);

  // Sync initial submissions
  useEffect(() => {
    fetchAllArenaSubmissions().then((subs) => {
      if (subs && subs.length > 0) {
        setAllSubmissions(subs);
      } else {
        // Seed default session as first contender
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

    // After a brief pause in waiting room, proceed to anonymous matchmaking
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

  // Active Timer for Header
  let activeHeaderTimer = null;
  if (currentStage === 'CREATE') activeHeaderTimer = createTimer;
  else if (currentStage === 'PARASITE') activeHeaderTimer = parasiteTimer;
  else if (currentStage === 'EVOLVE') activeHeaderTimer = evolveTimer;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-bone-100 font-sans relative overflow-x-hidden">
      {/* Background Generative Network Canvas */}
      <NetworkCanvas density={currentStage === 'PARASITE' ? 60 : 40} />

      {/* Top Header */}
      <ParasiteHeader
        currentPhase={currentStage}
        timer={activeHeaderTimer}
        session={session}
        onUpdateSession={handleUpdateSession}
        onOpenAdmin={() => setIsAdminOpen(true)}
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
            onProceed={() => setCurrentStage('HOW_IT_WORKS')}
            onOpenRegister={handleOpenRegister}
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

      {/* Host Admin Portal Modal */}
      <ParasiteAdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        challenge={challenge}
        onUpdateChallenge={setChallenge}
        currentPhase={currentStage}
        onChangePhase={(newPhase) => setCurrentStage(newPhase)}
        submissions={allSubmissions.length > 0 ? allSubmissions : [session]}
        onUpdateSubmissions={(updated) => {
          setAllSubmissions(updated);
          // If our current session is updated (e.g. scored), sync it
          const mine = updated.find((s) => s.participantId === session.participantId);
          if (mine) handleUpdateSession(mine);
        }}
      />

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
