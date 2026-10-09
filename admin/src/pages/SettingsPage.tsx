import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import {
  Settings,
  Save,
  Download,
  Trash2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Database
} from 'lucide-react';
import { ConfirmDialog } from '../components/modals/ConfirmDialog';

export default function SettingsPage() {
  const {
    settings,
    updateSettings,
    purgeAllData,
    teams,
    auditLogs
  } = useAdmin();

  const [eventName, setEventName] = useState(settings.eventName);
  const [r1Duration, setR1Duration] = useState(settings.roundDurations.round1);
  const [r2Duration, setR2Duration] = useState(settings.roundDurations.round2);
  const [r3Duration, setR3Duration] = useState(settings.roundDurations.round3);
  const [allowWalkIns, setAllowWalkIns] = useState(settings.allowWalkIns);
  const [tieBreaker, setTieBreaker] = useState(settings.tieBreakerRule);
  const [isSavedMessage, setIsSavedMessage] = useState(false);

  // Purge modal
  const [isPurgeModalOpen, setIsPurgeModalOpen] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      eventName,
      roundDurations: {
        round1: Number(r1Duration),
        round2: Number(r2Duration),
        round3: Number(r3Duration),
      },
      allowWalkIns,
      tieBreakerRule: tieBreaker
    });
    setIsSavedMessage(true);
    setTimeout(() => setIsSavedMessage(false), 2500);
  };

  const handleExportFullJSON = () => {
    const fullReport = {
      event: settings.eventName,
      timestamp: new Date().toISOString(),
      teams,
      auditLogs,
      settings
    };

    const blob = new Blob([JSON.stringify(fullReport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `promptwar_complete_dossier_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-1">
            <Settings className="w-3.5 h-3.5" />
            <span>GLOBAL EVENT CONFIGURATION</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Event Settings & Data Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light mt-0.5">
            Configure round parameters, manage participation rules, and export master dossiers.
          </p>
        </div>

        {isSavedMessage && (
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-4 h-4" />
            <span>Changes Saved Successfully</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Event Title & Participation */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
            Tournament Identity & Registration Policy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <label className="block text-slate-400 mb-1">EVENT TITLE</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-white font-sans text-sm outline-none"
              />
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <div>
                <span className="font-sans font-medium text-slate-200">Onsite Walk-In Registrations</span>
                <p className="text-[11px] text-slate-400 font-sans">Permit desk to register walk-in teams</p>
              </div>
              <button
                type="button"
                onClick={() => setAllowWalkIns(!allowWalkIns)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  allowWalkIns ? 'bg-blue-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-all ${
                    allowWalkIns ? 'left-6' : 'left-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Round Duration Presets */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Configured Round Time Limits (Minutes)</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-amber-400 font-bold">ROUND 1 · PROMPT PARASITE</span>
              <input
                type="number"
                min="1"
                max="60"
                value={r1Duration}
                onChange={(e) => setR1Duration(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-base font-bold outline-none"
              />
              <span className="text-[10px] text-slate-400">Default: 10 mins (7 phases)</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-indigo-400 font-bold">ROUND 2 · OPERATION BLACKBOX</span>
              <input
                type="number"
                min="1"
                max="60"
                value={r2Duration}
                onChange={(e) => setR2Duration(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-base font-bold outline-none"
              />
              <span className="text-[10px] text-slate-400">Default: 15 mins</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-rose-400 font-bold">ROUND 3 · FRAME ZERO</span>
              <input
                type="number"
                min="1"
                max="60"
                value={r3Duration}
                onChange={(e) => setR3Duration(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-base font-bold outline-none"
              />
              <span className="text-[10px] text-slate-400">Default: 12 mins (5 takes)</span>
            </div>
          </div>
        </div>

        {/* Tie-Breaker Rule */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
            Tournament Tie-Breaking Policy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            {[
              { id: 'TOTAL_HIGH', label: 'Highest Total Score', desc: 'Sum of all 3 rounds' },
              { id: 'R3_WEIGHT', label: 'Round 3 Priority', desc: 'Frame Zero score breaks tie' },
              { id: 'TIMESTAMP_FAST', label: 'Fastest Submission', desc: 'Earliest final take locked' },
            ].map((rule) => (
              <button
                key={rule.id}
                type="button"
                onClick={() => setTieBreaker(rule.id as any)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  tieBreaker === rule.id
                    ? 'bg-blue-600/15 border-blue-500 text-blue-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="font-bold text-white text-xs">{rule.label}</div>
                <div className="text-[10px] opacity-75 mt-0.5">{rule.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center space-x-2 active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>Save Configuration</span>
          </button>
        </div>
      </form>

      {/* Data Center & Master Export */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center space-x-2">
          <Database className="w-4 h-4 text-emerald-400" />
          <span>Data Operations & Master Export</span>
        </h2>

        <p className="text-xs text-slate-400">
          Download complete event archive dossiers containing all registered teams, three-round prompts, timestamps, and audit history.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleExportFullJSON}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition-colors flex items-center space-x-2"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>Download Master Dossier (JSON)</span>
          </button>
        </div>
      </div>

      {/* Danger Zone: Purge */}
      <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-rose-400 font-bold">
          <AlertTriangle className="w-4 h-4" />
          <span>Danger Zone · Reset Tournament Arena</span>
        </div>

        <p className="text-xs text-rose-300/80">
          Purging arena data deletes all local participant session progress, clears team ledgers, and resets rounds back to initial factory state.
        </p>

        <div className="pt-2">
          <button
            onClick={() => setIsPurgeModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-mono font-bold transition-all shadow-md shadow-rose-600/20 active:scale-95 flex items-center space-x-2"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Purge All Tournament Data</span>
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <ConfirmDialog
        isOpen={isPurgeModalOpen}
        title="Permanently Purge All Event Data?"
        description="This action cannot be undone. All teams, submissions, and audit logs will be permanently wiped from the arena database."
        confirmLabel="Confirm Complete Purge"
        confirmVariant="danger"
        onConfirm={async () => {
          await purgeAllData();
          setIsPurgeModalOpen(false);
        }}
        onCancel={() => setIsPurgeModalOpen(false)}
      />
    </div>
  );
}
