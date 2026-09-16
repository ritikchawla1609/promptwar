import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../utils/parasiteAudio';
import { registerTeamAPI, loginTeamAPI } from '../utils/parasiteEngine';
import PromptWar3DLogo from './PromptWar3DLogo';
import { Shield, CheckCircle2, AlertTriangle, Users, Key, Terminal, ArrowRight, X, Sparkles } from 'lucide-react';

export default function TeamRegistrationModal({
  isOpen,
  onClose,
  currentSession = {},
  onTeamRegistered,
  onTeamAuthenticated,
  initialTab = 'REGISTER',
}) {
  const [tab, setTab] = useState(initialTab || 'REGISTER'); // 'REGISTER' | 'LOGIN' | 'PASS_ISSUED'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sync tab when opened
  useEffect(() => {
    if (isOpen) {
      setTab(initialTab || 'REGISTER');
      setError(null);
    }
  }, [isOpen, initialTab]);

  // Form Fields
  const [teamName, setTeamName] = useState(currentSession.teamName || '');
  const [leaderName, setLeaderName] = useState(currentSession.leaderName || '');
  const [leaderContact, setLeaderContact] = useState(currentSession.leaderContact || '');
  const [college, setCollege] = useState(currentSession.college || 'Chandigarh University');
  const [memberCount, setMemberCount] = useState(currentSession.memberCount || 2);
  const [members, setMembers] = useState(currentSession.members || ['', '', '']);

  // Login Field
  const [loginQuery, setLoginQuery] = useState('');

  // Generated Pass
  const [issuedTeam, setIssuedTeam] = useState(null);

  if (!isOpen) return null;

  // Safe notification to parent
  const notifyAuth = (team) => {
    if (!team) return;
    try {
      if (typeof onTeamRegistered === 'function') onTeamRegistered(team);
      if (typeof onTeamAuthenticated === 'function') onTeamAuthenticated(team);
    } catch (err) {
      console.error('Error invoking auth callback:', err);
    }
  };

  const handleMemberChange = (idx, val) => {
    const next = [...members];
    next[idx] = val;
    setMembers(next);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    if (!teamName.trim() || !leaderName.trim()) {
      setError('Please provide Team Name and Team Leader Name.');
      return;
    }

    setLoading(true);
    parasiteAudio.playInfect();

    try {
      const payload = {
        teamName: teamName.trim(),
        leaderName: leaderName.trim(),
        leaderContact: leaderContact.trim(),
        college: college.trim(),
        memberCount: Number(memberCount),
        members: members.filter(Boolean).length > 0 ? members.filter(Boolean) : [leaderName.trim()],
      };

      const team = await registerTeamAPI(payload);
      setIssuedTeam(team);
      setTab('PASS_ISSUED');
      parasiteAudio.playLock();
      notifyAuth(team);
    } catch (err) {
      setError(err.message || 'Registration failed. Please check network.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    if (!loginQuery.trim()) {
      setError('Enter your Team Code (e.g. PW-7482) or Team Name.');
      return;
    }

    setLoading(true);
    try {
      const team = await loginTeamAPI(loginQuery.trim());
      parasiteAudio.playSubDrop();
      notifyAuth(team);
      onClose();
    } catch (err) {
      setError(err.message || 'Team credentials not found in arena ledger.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <div className="w-full max-w-2xl border border-white/[0.12] bg-charcoal-950 font-mono text-xs shadow-2xl overflow-hidden relative animate-fadeIn">
        {/* Top Header with Tech Tatva Club Branding */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-charcoal-900/90">
          <div className="flex items-center gap-3">
            <img
              src="/tech-tatva-logo.png"
              alt="Tech Tatva Club"
              className="h-6 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
            />
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-cyan animate-pulse rounded-full" />
              <span className="text-bone-200 uppercase tracking-widest text-[11px] font-bold">
                TECH TATVA CLUB // CHANDIGARH UNIVERSITY
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 border border-white/[0.08] hover:border-white/[0.2] text-bone-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {tab !== 'PASS_ISSUED' && (
            <div className="flex flex-col items-center text-center mb-6">
              <PromptWar3DLogo variant="compact" enableSound={false} className="mb-2" />
              <h2 className="font-display font-black text-2xl sm:text-3xl text-bone-100 uppercase tracking-tight">
                OFFICIAL SQUAD ONBOARDING
              </h2>
              <p className="font-sans text-xs text-bone-400 max-w-md mt-1">
                Register your real competition team to lock your credentials into the central tournament ledger across Rounds 1, 2, and 3.
              </p>
            </div>
          )}

          {/* Navigation Tabs */}
          {tab !== 'PASS_ISSUED' && (
            <div className="grid grid-cols-2 gap-2 p-1 bg-charcoal-900 border border-white/[0.08] mb-6">
              <button
                type="button"
                onClick={() => {
                  setTab('REGISTER');
                  setError(null);
                }}
                className={`py-2 text-center text-xs font-bold uppercase tracking-wider transition-all ${
                  tab === 'REGISTER'
                    ? 'bg-acid-lime text-charcoal-950 shadow'
                    : 'text-bone-400 hover:text-bone-100'
                }`}
              >
                1. REGISTER NEW TEAM
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('LOGIN');
                  setError(null);
                }}
                className={`py-2 text-center text-xs font-bold uppercase tracking-wider transition-all ${
                  tab === 'LOGIN'
                    ? 'bg-acid-lime text-charcoal-950 shadow'
                    : 'text-bone-400 hover:text-bone-100'
                }`}
              >
                2. RESUME SESSION (PASS CODE)
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 border border-crimson bg-crimson-dark/40 text-bone-100 text-xs flex items-center gap-2 animate-fadeIn">
              <AlertTriangle className="w-4 h-4 text-crimson-bright shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* TAB 1: REGISTER */}
          {tab === 'REGISTER' && (
            <form onSubmit={handleRegister} className="space-y-4 text-left">
              <div>
                <label className="text-[10px] text-bone-400 uppercase tracking-widest block mb-1">
                  OFFICIAL TEAM NAME *
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g. Neural Assassins, Prompt Matrix, Algorunners"
                  className="w-full p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 text-xs outline-none focus:border-acid-lime"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-bone-400 uppercase tracking-widest block mb-1">
                    TEAM LEADER NAME *
                  </label>
                  <input
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="Full name"
                    className="w-full p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 text-xs outline-none focus:border-acid-lime"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] text-bone-400 uppercase tracking-widest block mb-1">
                    LEADER EMAIL / PHONE
                  </label>
                  <input
                    type="text"
                    value={leaderContact}
                    onChange={(e) => setLeaderContact(e.target.value)}
                    placeholder="For official qualification alerts"
                    className="w-full p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 text-xs outline-none focus:border-acid-lime"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-bone-400 uppercase tracking-widest block mb-1">
                    COLLEGE / DEPARTMENT
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="Chandigarh University"
                    className="w-full p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 text-xs outline-none focus:border-acid-lime"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-bone-400 uppercase tracking-widest block mb-1">
                    MEMBER COUNT (1–4)
                  </label>
                  <select
                    value={memberCount}
                    onChange={(e) => setMemberCount(Number(e.target.value))}
                    className="w-full p-2.5 bg-charcoal-900 border border-white/[0.1] text-bone-100 text-xs outline-none focus:border-acid-lime"
                  >
                    <option value={1}>Solo Player (1 Member)</option>
                    <option value={2}>Duo Squad (2 Members)</option>
                    <option value={3}>Trio Squad (3 Members)</option>
                    <option value={4}>Full Squad (4 Members)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Member Name Inputs */}
              {memberCount > 1 && (
                <div className="p-3 bg-charcoal-900/60 border border-white/[0.06] space-y-2">
                  <span className="text-[10px] text-bone-500 uppercase tracking-widest block">
                    ADDITIONAL MEMBER NAMES
                  </span>
                  {Array.from({ length: memberCount - 1 }).map((_, i) => (
                    <input
                      key={i}
                      type="text"
                      value={members[i] || ''}
                      onChange={(e) => handleMemberChange(i, e.target.value)}
                      placeholder={`Member 0${i + 2} Full Name`}
                      className="w-full p-2 bg-charcoal-950 border border-white/[0.08] text-bone-200 text-xs outline-none"
                    />
                  ))}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-acid-lime text-charcoal-950 font-bold uppercase tracking-widest text-xs hover:brightness-110 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.2)] mt-6 cursor-pointer"
              >
                <Shield className="w-4 h-4" />
                <span>{loading ? 'REGISTERING IN MATRIX...' : 'ISSUE OFFICIAL TEAM PASS'}</span>
              </button>
            </form>
          )}

          {/* TAB 2: RESUME SESSION */}
          {tab === 'LOGIN' && (
            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="text-[10px] text-bone-400 uppercase tracking-widest block mb-1">
                  ENTER YOUR TEAM PASS CODE OR TEAM NAME
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Key className="w-4 h-4 text-acid-lime absolute left-3 top-3" />
                    <input
                      type="text"
                      value={loginQuery}
                      onChange={(e) => setLoginQuery(e.target.value)}
                      placeholder="e.g. PW-6186 or Neural Syndicate"
                      className="w-full pl-9 p-2.5 bg-charcoal-900 border border-white/[0.12] text-bone-100 text-sm font-bold tracking-wider outline-none focus:border-acid-lime uppercase"
                      autoFocus
                    />
                  </div>
                </div>
                <p className="text-[11px] text-bone-500 mt-2">
                  If your team registered earlier, enter the 4-digit code provided on your pass to resume your exact workstation and progress.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-acid-lime text-charcoal-950 font-bold uppercase tracking-widest text-xs hover:brightness-110 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.2)] mt-6 cursor-pointer"
              >
                <span>{loading ? 'AUTHENTICATING...' : 'VERIFY & ENTER WORKSPACE'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* TAB 3: PASS ISSUED SUCCESS */}
          {tab === 'PASS_ISSUED' && issuedTeam && (
            <div className="flex flex-col items-center text-center space-y-6 animate-scaleUp">
              <div className="w-14 h-14 bg-acid-lime/10 border border-acid-lime flex items-center justify-center text-acid-lime shadow-[0_0_30px_rgba(212,255,0,0.25)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] text-acid-lime uppercase tracking-[0.3em] font-bold block mb-1">
                  REGISTRATION VERIFIED
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-bone-100 uppercase">
                  TEAM CREDENTIALS ISSUED
                </h3>
              </div>

              {/* Digital Team Pass Card */}
              <div className="w-full p-6 border-2 border-acid-lime bg-charcoal-900 text-left relative shadow-[0_0_40px_rgba(212,255,0,0.15)]">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.1]">
                  <span className="text-[10px] text-bone-400 uppercase tracking-widest font-bold">
                    PROMPT WAR 2026 // OFFICIAL PASS
                  </span>
                  <span className="px-2 py-0.5 bg-acid-lime text-charcoal-950 font-black text-[10px] uppercase">
                    ROUND 01 ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-[9px] text-bone-500 uppercase block">TEAM NAME</span>
                    <span className="font-display font-black text-lg text-bone-100">
                      {issuedTeam.teamName}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] text-acid-lime uppercase block font-bold">
                      SECRET TEAM PASS CODE
                    </span>
                    <span className="font-display font-black text-2xl text-acid-lime tracking-widest">
                      {issuedTeam.teamCode}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.08] text-[11px] text-bone-400 space-y-1">
                  <div>Leader: <strong className="text-bone-200">{issuedTeam.leaderName}</strong></div>
                  <div>Institution: <strong className="text-bone-200">{issuedTeam.college}</strong></div>
                  <div>Squad Size: <strong className="text-bone-200">{issuedTeam.memberCount} Members</strong></div>
                </div>
              </div>

              <p className="text-[11px] text-bone-400 max-w-md leading-relaxed">
                Save your <strong>Team Pass Code ({issuedTeam.teamCode})</strong>. You can use it to resume your session on any device and carry your score into Round 2 & Round 3.
              </p>

              <button
                onClick={() => {
                  notifyAuth(issuedTeam);
                  onClose();
                }}
                className="editorial-btn px-8 py-3.5 text-xs sm:text-sm bg-cyan border-cyan text-charcoal-950 font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-white"
              >
                <span>ENTER ROUND 01 ARENA →</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
