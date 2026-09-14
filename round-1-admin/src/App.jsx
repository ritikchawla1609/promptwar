import React, { useState, useEffect } from 'react';
import TechTatvaAdminPortal from './components/admin/TechTatvaAdminPortal';
import AudienceProjectorView from './components/projector/AudienceProjectorView';
import NetworkCanvas from './components/NetworkCanvas';
import { DEFAULT_CHALLENGE } from './data/parasiteChallenge';
import { fetchPhaseClockAPI, fetchArenaStateAPI } from './utils/parasiteEngine';
import { Shield, Tv, Sliders, LogOut, Radio, Maximize2 } from 'lucide-react';

const HOST_PASSCODE = 'TATVA@2026';

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('tatva_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeView, setActiveView] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    return hash.includes('projector') ? 'PROJECTOR' : 'ADMIN';
  });
  const [challenge, setChallenge] = useState(DEFAULT_CHALLENGE);
  const [arenaPhase, setArenaPhase] = useState('LOBBY');
  const [phaseClock, setPhaseClock] = useState({ remainingSeconds: 0, totalSeconds: 0, activePhase: 'LOBBY' });

  // Route hash sync
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('projector')) {
        setActiveView('PROJECTOR');
      } else {
        setActiveView('ADMIN');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Poll arena state and clock
  useEffect(() => {
    if (!isAuthenticated) return;
    let isMounted = true;
    const poll = async () => {
      try {
        const [clock, state] = await Promise.all([
          fetchPhaseClockAPI(),
          fetchArenaStateAPI()
        ]);
        if (!isMounted) return;
        if (clock?.success) {
          setPhaseClock(clock);
          setArenaPhase(clock.activePhase);
        } else if (state?.activePhase) {
          setArenaPhase(state.activePhase);
        }
      } catch (e) {
        console.warn('Admin clock poll error:', e);
      }
    };
    poll();
    const interval = setInterval(poll, 1500);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim() === HOST_PASSCODE) {
      sessionStorage.setItem('tatva_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('INVALID HOST PASSCODE. ACCESS DENIED.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('tatva_admin_auth');
    setIsAuthenticated(false);
  };

  // If not authenticated, render Host Authentication Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#05070c] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-mono">
        <NetworkCanvas density={30} />
        
        <div className="relative z-10 max-w-md w-full bg-[#0a0f18]/90 border border-cyan-500/40 rounded-2xl p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/50">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Shield className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-1">
              Tech Tatva Club // Chandigarh University
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              PROMPT WAR ADMIN PORTAL
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Round 1: Prompt Parasite // Host Command Console & Auditorium Projector
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Host Authorization Key
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => { setPasscode(e.target.value); setAuthError(''); }}
                placeholder="Enter TATVA@2026"
                className="w-full bg-[#0d1524] border border-cyan-500/30 rounded-xl px-4 py-3 text-cyan-300 font-mono text-center tracking-widest focus:outline-none focus:border-cyan-400 transition"
                autoFocus
              />
            </div>

            {authError && (
              <div className="text-xs text-rose-400 bg-rose-950/40 border border-rose-800/50 rounded-lg p-2.5 text-center font-bold">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-black py-3 rounded-xl tracking-wider transition-all duration-200 shadow-lg shadow-cyan-500/30 active:scale-[0.98]"
            >
              AUTHENTICATE COMMAND ACCESS
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-center text-[10px] text-slate-500">
            SECURE HOST SESSION // RESTRICTED TO ORGANIZING COMMITTEE ONLY
          </div>
        </div>
      </div>
    );
  }

  // Once authenticated, provide navigation between Admin Console and Projector View
  return (
    <div className="min-h-screen bg-[#080b11] text-white flex flex-col font-sans">
      {/* Top Persistent Switcher Bar */}
      <header className="bg-[#05080e] border-b border-cyan-500/20 px-6 py-2.5 flex items-center justify-between z-30 sticky top-0 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center">
            <Shield className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
              TECH TATVA // HOST PORTAL
            </div>
            <div className="text-sm font-black text-white tracking-wider flex items-center space-x-2">
              <span>PROMPT WAR ROUND 1</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono">
                {arenaPhase}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => { setActiveView('ADMIN'); window.location.hash = '#/admin'; }}
            className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider transition ${
              activeView === 'ADMIN'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>ADMIN CONSOLE</span>
          </button>

          <button
            onClick={() => { setActiveView('PROJECTOR'); window.location.hash = '#/projector'; }}
            className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-xs font-bold tracking-wider transition ${
              activeView === 'PROJECTOR'
                ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>AUDIENCE PROJECTOR</span>
          </button>
        </div>

        {/* Right Host Actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span>LIVE SYNC</span>
          </div>

          <button
            onClick={handleLogout}
            title="Log out from host console"
            className="p-1.5 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-400 hover:bg-rose-900/60 transition text-xs flex items-center space-x-1"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px] font-bold">LOGOUT</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 relative">
        {activeView === 'ADMIN' ? (
          <TechTatvaAdminPortal
            isOpen={true}
            challenge={challenge}
            onUpdateChallenge={setChallenge}
            onClose={() => {}}
          />
        ) : (
          <AudienceProjectorView
            onClose={() => {
              setActiveView('ADMIN');
              window.location.hash = '#/admin';
            }}
            onGoToAdmin={() => {
              setActiveView('ADMIN');
              window.location.hash = '#/admin';
            }}
          />
        )}
      </div>
    </div>
  );
}
