import React from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { ArrowRight, Sparkles, Eye, ShieldAlert, Cpu, Trophy } from 'lucide-react';

export default function Screen1HowItWorks({ onProceed }) {
  const steps = [
    {
      num: '01',
      title: 'CREATE',
      tag: 'INDEPENDENT',
      icon: Sparkles,
      desc: 'Receive the challenge. Use any external AI model (ChatGPT, Claude, Gemini, etc.). Engineer your best prompt and submit both prompt and AI output as your First Form.',
    },
    {
      num: '02',
      title: 'MATCH',
      tag: 'ANONYMOUS',
      icon: Eye,
      desc: 'The system links you with two anonymous contenders in a 3-way cluster. Identity, team names, and models remain completely concealed.',
    },
    {
      num: '03',
      title: 'PARASITE',
      tag: 'MUTATION',
      icon: ShieldAlert,
      desc: 'Access your opponents’ raw outputs side-by-side. Inspect their structural strengths, fiscal allocations, missing angles, and superior tactics. Record private notes.',
    },
    {
      num: '04',
      title: 'EVOLVE',
      tag: 'RECONSTRUCT',
      icon: Cpu,
      desc: 'Synthesize opponent advantages with your original foundation. Return to your external AI to forge a completely upgraded Final Form.',
    },
    {
      num: '05',
      title: 'SURVIVE',
      tag: 'VERDICT',
      icon: Trophy,
      desc: 'Lock your final prompt & output before the timer expires. Judges evaluate genuine evolution from First Form to Final Form.',
    },
  ];

  const handleStart = () => {
    parasiteAudio.playTick();
    onProceed();
  };

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-10 max-w-7xl mx-auto select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
        <span className="text-bone-400 uppercase tracking-widest">
          PROTOCOL ARCHITECTURE // 5-PHASE RUNBOOK
        </span>
        <span className="text-acid-lime font-bold uppercase tracking-widest">
          SYSTEM MANUAL
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-8">
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid-lime block mb-2">
            GAMEPLAY PROGRESSION
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-bone-100 tracking-tight">
            HOW PROMPT PARASITE OPERATES
          </h2>
        </div>

        {/* 5-Column Horizontal Visual Journey */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="relative p-5 rounded-none border border-white/[0.08] bg-charcoal-900/50 flex flex-col justify-between hover:border-acid-lime/40 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-bone-400 group-hover:text-acid-lime transition-colors">
                      {s.num}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-bone-500 border border-white/[0.06] px-1.5 py-0.5">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg text-bone-100 tracking-tight mb-2">
                    {s.title}
                  </h3>

                  <p className="font-sans text-xs text-bone-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-bone-500">
                  <Icon className="w-4 h-4 group-hover:text-acid-lime transition-colors" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    {idx < steps.length - 1 ? '→ NEXT' : 'END'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Callout Banner */}
        <div className="mt-10 p-6 border border-white/[0.08] bg-charcoal-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-black text-xl sm:text-2xl text-bone-100 tracking-tight">
              YOU ARE NOT COPYING. <span className="text-acid-lime">YOU ARE EVOLVING.</span>
            </h4>
            <p className="font-sans text-xs sm:text-sm text-bone-400 mt-1">
              Take inspiration. Identify blind spots. Reverse-engineer their tactical superiority. Build something fundamentally stronger.
            </p>
          </div>

          <button
            onClick={handleStart}
            className="editorial-btn shrink-0 group"
          >
            <span>I UNDERSTAND</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest">
        STRICT ISOLATION PROTOCOL // HOST IDENTITIES PERMANENTLY REDACTED
      </div>
    </div>
  );
}
