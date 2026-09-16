import React, { useState, useEffect } from 'react';
import { parasiteAudio } from '../../utils/parasiteAudio';
import { ArrowRight, Shield, Zap } from 'lucide-react';

export default function Screen4Match({
  session,
  matchedOpponents = [],
  onProceedToParasite,
}) {
  const [stage, setStage] = useState('SEARCHING'); // 'SEARCHING', 'CONNECTING', 'LOCKED'
  const [shuffledId, setShuffledId] = useState('PLAYER_017');

  useEffect(() => {
    // Audio alert
    parasiteAudio.playInfect();

    // ID shuffle animation
    const interval = setInterval(() => {
      const randomNum = Math.floor(10 + Math.random() * 90);
      setShuffledId(`PLAYER_${randomNum}`);
      try {
        parasiteAudio.playTick();
      } catch (e) {}
    }, 120);

    const t1 = setTimeout(() => {
      setStage('CONNECTING');
    }, 1800);

    const t2 = setTimeout(() => {
      clearInterval(interval);
      setStage('LOCKED');
      parasiteAudio.playSubDrop();
    }, 3400);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const op1 = matchedOpponents[0] || { anonymousId: 'UNKNOWN 01' };
  const op2 = matchedOpponents[1] || { anonymousId: 'UNKNOWN 02' };

  return (
    <div className="relative min-h-[calc(100vh-56px)] flex flex-col justify-between px-6 sm:px-12 py-12 max-w-6xl mx-auto select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
        <span className="text-bone-400 uppercase tracking-widest">
          STAGE 02 // ANONYMOUS CLUSTER DISCOVERY
        </span>
        <span className="text-acid-lime font-bold uppercase tracking-widest">
          {stage === 'LOCKED' ? 'CLUSTER FORMED' : 'REVERSE ROUTING'}
        </span>
      </div>

      {/* Main Center Transition */}
      <div className="my-auto py-12 flex flex-col items-center text-center">
        {stage !== 'LOCKED' ? (
          <div className="flex flex-col items-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-acid-lime font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-acid-lime animate-ping" />
              SEARCHING FOR HOSTS
            </span>

            <h2 className="font-display font-black text-4xl sm:text-7xl text-bone-100 uppercase tracking-tightest mb-6">
              SCANNING ARENA
            </h2>

            {/* Shuffling ID Box */}
            <div className="px-6 py-3 border border-white/[0.15] bg-charcoal-900/80 font-mono text-xl sm:text-2xl font-bold tracking-[0.2em] text-acid-lime">
              {shuffledId}
            </div>

            <p className="font-mono text-xs text-bone-500 uppercase tracking-widest mt-6 max-w-md">
              Establishing 3-way asymmetric isolation ring. Extracting raw baseline outputs.
            </p>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center animate-fadeIn">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-acid-lime font-bold mb-3">
              MATCH FOUND // TRIAD ACTIVE
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-bone-100 uppercase tracking-tight mb-12">
              OPPONENT OUTPUTS UNLOCKED
            </h2>

            {/* Premium Typographic Triad Grid (YOU vs UNKNOWN 01 vs UNKNOWN 02) */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 text-left font-mono">
              {/* Pillar 1: YOU (Electric Cyan - Left Brain Polarity) */}
              <div className="p-6 border border-cyan/60 bg-charcoal-900/90 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.15)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan shadow-[0_0_10px_#00f0ff]" />
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                    <span className="text-[10px] text-cyan font-bold uppercase tracking-widest">
                      YOUR FIRST FORM
                    </span>
                    <span className="px-2 py-0.5 bg-cyan text-charcoal-950 text-[10px] font-black uppercase">
                      YOU
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-bone-100 mb-2">
                    {session.anonymousId}
                  </h3>
                  <p className="text-xs text-bone-400 font-sans leading-relaxed">
                    Your baseline solution submitted in Phase 01.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] text-cyan uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse" />
                  <span>STATUS: SYNCHRONIZED</span>
                </div>
              </div>

              {/* Pillar 2: UNKNOWN 01 (Cyber Crimson - Right Brain Polarity) */}
              <div className="p-6 border border-crimson/40 bg-charcoal-900/80 flex flex-col justify-between shadow-[0_0_25px_rgba(255,42,95,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-crimson shadow-[0_0_10px_#ff2a5f]" />
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                    <span className="text-[10px] text-crimson font-bold uppercase tracking-widest">
                      HOST TARGET 01
                    </span>
                    <span className="px-1.5 py-0.2 bg-crimson/20 border border-crimson/40 text-crimson text-[9px] font-bold uppercase">
                      OPPONENT
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-crimson mb-2 drop-shadow-[0_0_10px_rgba(255,42,95,0.3)]">
                    {op1.anonymousId}
                  </h3>
                  <p className="text-xs text-bone-400 font-sans leading-relaxed">
                    External AI solution captured from competitor in your cluster.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] text-crimson uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-crimson rounded-full animate-ping" />
                  <span>PAYLOAD: EXTRACTED</span>
                </div>
              </div>

              {/* Pillar 3: UNKNOWN 02 (Cyber Crimson - Right Brain Polarity) */}
              <div className="p-6 border border-crimson/40 bg-charcoal-900/80 flex flex-col justify-between shadow-[0_0_25px_rgba(255,42,95,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-crimson shadow-[0_0_10px_#ff2a5f]" />
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/[0.08]">
                    <span className="text-[10px] text-crimson font-bold uppercase tracking-widest">
                      HOST TARGET 02
                    </span>
                    <span className="px-1.5 py-0.2 bg-crimson/20 border border-crimson/40 text-crimson text-[9px] font-bold uppercase">
                      OPPONENT
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-crimson mb-2 drop-shadow-[0_0_10px_rgba(255,42,95,0.3)]">
                    {op2.anonymousId}
                  </h3>
                  <p className="text-xs text-bone-400 font-sans leading-relaxed">
                    External AI solution captured from second competitor.
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] text-[10px] text-crimson uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-crimson rounded-full animate-ping" />
                  <span>PAYLOAD: EXTRACTED</span>
                </div>
              </div>
            </div>

            {/* Call to Enter Parasite Mode */}
            <div className="mt-12 flex flex-col items-center gap-3">
              <button
                onClick={onProceedToParasite}
                className="editorial-btn group text-xs sm:text-sm px-8 py-4"
              >
                <span>ENTER PARASITE MODE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="font-mono text-[10px] text-bone-500 uppercase tracking-widest">
                STAGE 03 DURATION: 05:00 MINUTES
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-white/[0.06] font-mono text-[10px] text-bone-500 uppercase tracking-widest flex items-center justify-between">
        <span>ENCRYPTION: SHUFFLED DERANGEMENT</span>
        <span>NO PROMPTS OR IDENTITIES ACCESSIBLE</span>
      </div>
    </div>
  );
}
