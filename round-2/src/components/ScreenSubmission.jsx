import React, { useState } from 'react';
import { INTELLIGENCE_RECORDS, MISSION_METADATA } from '../data/records.js';
import { ArrowLeft, CheckCircle2, ShieldAlert, AlertCircle, FileText, Send } from 'lucide-react';

export default function ScreenSubmission({
  teamName,
  discoveredSources = [],
  onSubmitFinal,
  onBackToWorkspace
}) {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [selectedVector, setSelectedVector] = useState('');
  const [selectedSequence, setSelectedSequence] = useState('');
  const [selectedTrapRecord, setSelectedTrapRecord] = useState('');
  const [selectedSources, setSelectedSources] = useState([...discoveredSources]);
  const [discrepancyExplanation, setDiscrepancyExplanation] = useState('');

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formError, setFormError] = useState('');

  const systemOptions = [
    { id: 'vault_server', label: 'Sub-level 4 Cryogenic Vault Server (SV-4-CRYO-09)' },
    { id: 'optical_relay', label: 'Perimeter Optical Relay Gateway (OptiLink-Trunk-04)' },
    { id: 'terminal_b12', label: 'Administration Console Terminal B-12' },
    { id: 'scada_chiller', label: 'Central Cryogenic Chiller Substation' }
  ];

  const vectorOptions = [
    { id: 'cron_script', label: 'Rogue Root Crontab Execution of Maintenance Script (diag_vault_sync.sh)' },
    { id: 'physical_badge', label: 'Direct Physical Workstation Override via Stolen Badge' },
    { id: 'firmware_rootkit', label: 'Compromised Hardware UEFI Firmware / Bootkit' },
    { id: 'power_interruption', label: 'SCADA Substation Power Interruption Exploitation' }
  ];

  const sequenceOptions = [
    { 
      id: 'correct_chronology', 
      label: '02:40 Maintenance sign-off → 03:04 Cron script start → 03:05 SAN read → 03:17 Optical egress → 03:45 Session close' 
    },
    { 
      id: 'trap_chronology', 
      label: '02:15 Badge swipe → 03:17 SCADA trip → 05:17 Terminal B-12 manual download → 05:30 Security patrol' 
    },
    { 
      id: 'partial_chronology', 
      label: '03:17 Optical relay burst → 03:22 Thermal spike → 03:45 Firewall close (Execution vector unverified)' 
    }
  ];

  const toggleSource = (sourceId) => {
    if (selectedSources.includes(sourceId)) {
      setSelectedSources(selectedSources.filter(id => id !== sourceId));
    } else {
      setSelectedSources([...selectedSources, sourceId]);
    }
  };

  const handleValidation = () => {
    if (!selectedSystem) {
      setFormError('Please select the identified compromised system.');
      return false;
    }
    if (!selectedVector) {
      setFormError('Please select the likely breach mechanism.');
      return false;
    }
    if (!selectedSequence) {
      setFormError('Please select the corroborated event sequence.');
      return false;
    }
    if (!selectedTrapRecord) {
      setFormError('Please designate which record was identified as unreliable or deceptive.');
      return false;
    }
    if (!discrepancyExplanation.trim() || discrepancyExplanation.trim().length < 15) {
      setFormError('Please provide a brief explanation of the timestamp or attribution contradiction.');
      return false;
    }
    setFormError('');
    return true;
  };

  const handlePreSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setShowConfirmModal(true);
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    onSubmitFinal({
      selectedSystem,
      selectedVector,
      selectedSequence,
      selectedTrapRecord,
      selectedSources,
      discrepancyExplanation: discrepancyExplanation.trim()
    });
  };

  return (
    <div className="min-h-screen bg-archive-950 text-ivory-100 px-6 sm:px-12 lg:px-24 py-8 lg:py-12 selection:bg-amber-500/20">
      {/* Top Navigation */}
      <header className="flex items-center justify-between border-b border-archive-700/60 pb-6 mb-8 max-w-5xl mx-auto">
        <button
          onClick={onBackToWorkspace}
          className="flex items-center space-x-2 text-xs uppercase tracking-wider text-ivory-400 hover:text-ivory-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Workspace</span>
        </button>

        <div className="flex items-center space-x-3">
          <span className="text-xs uppercase tracking-wider text-ivory-400 font-medium">
            Team: <span className="text-ivory-100 font-mono">{teamName}</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="text-xs font-mono text-amber-500">
            FINAL BRIEFING
          </span>
        </div>
      </header>

      {/* Main Form Layout */}
      <main className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold text-ivory-100 tracking-tight">
            Submit Forensic Findings
          </h1>
          <p className="text-sm sm:text-base text-ivory-300 leading-relaxed font-normal">
            Synthesize the verified evidence discovered in the archive. 
            Confirm the compromised host, the execution vector, and reconcile conflicting reports.
          </p>
        </div>

        {formError && (
          <div className="bg-red-950/40 border border-red-700/50 p-4 rounded-lg flex items-center space-x-3 text-xs text-red-300">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
            <span>{formError}</span>
          </div>
        )}

        <form onSubmit={handlePreSubmit} className="space-y-8">
          {/* Question 1: Compromised System */}
          <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-medium block mb-1">
                Field 01 // Host Attribution
              </span>
              <h2 className="text-lg font-medium text-ivory-100">
                Which facility system was compromised?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {systemOptions.map(opt => (
                <label
                  key={opt.id}
                  className={`flex items-center space-x-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                    selectedSystem === opt.id
                      ? 'bg-archive-800 border-amber-500 text-ivory-100'
                      : 'bg-archive-850/60 border-archive-700/80 hover:border-archive-600 text-ivory-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="system"
                    value={opt.id}
                    checked={selectedSystem === opt.id}
                    onChange={(e) => setSelectedSystem(e.target.value)}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <span className="text-sm font-sans">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2: Breach Mechanism */}
          <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-medium block mb-1">
                Field 02 // Execution Vector
              </span>
              <h2 className="text-lg font-medium text-ivory-100">
                What mechanism initiated the data exfiltration?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {vectorOptions.map(opt => (
                <label
                  key={opt.id}
                  className={`flex items-center space-x-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                    selectedVector === opt.id
                      ? 'bg-archive-800 border-amber-500 text-ivory-100'
                      : 'bg-archive-850/60 border-archive-700/80 hover:border-archive-600 text-ivory-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="vector"
                    value={opt.id}
                    checked={selectedVector === opt.id}
                    onChange={(e) => setSelectedVector(e.target.value)}
                    className="accent-amber-500 w-4 h-4"
                  />
                  <span className="text-sm font-sans">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3: Event Sequence */}
          <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-medium block mb-1">
                Field 03 // Corroborated Chronology
              </span>
              <h2 className="text-lg font-medium text-ivory-100">
                What is the verified sequence of events?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2.5 pt-2">
              {sequenceOptions.map(opt => (
                <label
                  key={opt.id}
                  className={`flex items-start space-x-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                    selectedSequence === opt.id
                      ? 'bg-archive-800 border-amber-500 text-ivory-100'
                      : 'bg-archive-850/60 border-archive-700/80 hover:border-archive-600 text-ivory-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="sequence"
                    value={opt.id}
                    checked={selectedSequence === opt.id}
                    onChange={(e) => setSelectedSequence(e.target.value)}
                    className="accent-amber-500 w-4 h-4 mt-0.5"
                  />
                  <span className="text-sm font-sans leading-relaxed">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 4: Supporting Evidence Sources */}
          <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-medium block mb-1">
                Field 04 // Corroborating Citations
              </span>
              <h2 className="text-lg font-medium text-ivory-100">
                Select supporting records cited in your findings:
              </h2>
              <p className="text-xs text-ivory-400 pt-1">
                Choose the primary documents that substantiate the breach vector and timeline.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2">
              {INTELLIGENCE_RECORDS.map(rec => {
                const isSelected = selectedSources.includes(rec.id);
                const wasDiscovered = (discoveredSources || []).includes(rec.id);
                return (
                  <button
                    key={rec.id}
                    type="button"
                    onClick={() => toggleSource(rec.id)}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'bg-archive-800 border-amber-500 text-ivory-100'
                        : 'bg-archive-850/50 border-archive-700/80 text-ivory-400 hover:border-archive-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-amber-500">
                        {rec.id}
                      </span>
                      {wasDiscovered && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" title="Discovered during workspace investigation" />
                      )}
                    </div>
                    <span className="text-xs block text-ivory-300 truncate mt-1">
                      {rec.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 5: Unreliable / Trap Record Identification */}
          <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-medium block mb-1">
                Field 05 // False Lead Discrepancy
              </span>
              <h2 className="text-lg font-medium text-ivory-100">
                Which record contained misleading, conflicting, or uncorroborated intelligence?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {INTELLIGENCE_RECORDS.filter(r => ['REC-01', 'REC-03', 'REC-07', 'REC-09', 'REC-11', 'REC-14'].includes(r.id)).map(r => (
                <label
                  key={r.id}
                  className={`flex items-start space-x-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                    selectedTrapRecord === r.id
                      ? 'bg-archive-800 border-amber-500 text-ivory-100'
                      : 'bg-archive-850/60 border-archive-700/80 hover:border-archive-600 text-ivory-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="trapRecord"
                    value={r.id}
                    checked={selectedTrapRecord === r.id}
                    onChange={(e) => setSelectedTrapRecord(e.target.value)}
                    className="accent-amber-500 w-4 h-4 mt-0.5"
                  />
                  <div>
                    <span className="text-xs font-mono font-semibold text-amber-500 block">
                      {r.id}
                    </span>
                    <span className="text-xs text-ivory-200">
                      {r.title}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Question 6: Explanation of Contradiction */}
          <div className="bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-medium block mb-1">
                Field 06 // Discrepancy Reconciliation
              </span>
              <h2 className="text-lg font-medium text-ivory-100">
                Explain the contradiction: why was that record misleading?
              </h2>
              <p className="text-xs text-ivory-400 pt-1">
                Summarize how the timezone or physical access records refute the false narrative.
              </p>
            </div>

            <textarea
              rows={4}
              value={discrepancyExplanation}
              onChange={(e) => setDiscrepancyExplanation(e.target.value)}
              placeholder="Explain how the time difference, vehicle departure alibi, or system clocks disprove the report..."
              className="w-full bg-archive-950 border border-archive-700 text-ivory-100 p-4 rounded-lg text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-ivory-500 font-sans leading-relaxed"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold px-6 py-4 rounded-lg flex items-center justify-center space-x-3 transition-all duration-200 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:translate-y-0.5"
            >
              <Send className="w-5 h-5" />
              <span className="text-base tracking-wide">Submit findings</span>
            </button>
          </div>
        </form>
      </main>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-archive-950/85 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-archive-900 border border-archive-700 rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-500 uppercase tracking-wider block">
                Final Confirmation
              </span>
              <h3 className="text-xl font-medium text-ivory-100">
                Seal and Submit Findings?
              </h3>
              <p className="text-xs text-ivory-300 leading-relaxed pt-1">
                Once submitted, your findings will be locked into the judging matrix. You will receive an immediate editorial forensic debrief and final scorecard.
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-archive-950 font-semibold py-3 rounded-lg text-sm transition-colors"
              >
                Confirm & Seal
              </button>
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="flex-1 bg-archive-800 hover:bg-archive-700 text-ivory-300 py-3 rounded-lg text-sm transition-colors"
              >
                Review Form
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
