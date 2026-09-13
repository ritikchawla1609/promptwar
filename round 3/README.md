# 🩸 PROMPT WAR: THE HOUSE THAT REMEMBERS (2.0)

> *"Everyone has a motive. Everyone has a secret. Someone is lying. And the house knows which one."*

[![Build Status](https://img.shields.io/badge/Build-Passing-emerald.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-cyan.svg)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL%203D-black.svg)](https://threejs.org/)
[![Web Audio API](https://img.shields.io/badge/Web%20Audio-Procedural%20Synthesizer-red.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![Call of Duty HUD](https://img.shields.io/badge/HUD-Call%20of%20Duty%20Style-amber.svg)](#-call-of-duty-style-tactical-hud--presentation)

**Prompt War 2.0** is an adversarial prompt engineering, 3D psychological horror escape room, and forensic murder mystery investigation. It transforms the classic locked-room mystery of Professor Vikram Sen into a multi-layered psychological thriller where artificial intelligence is weaponized against the player, timestamps are deliberately forged, and physical reality contradicts digital surveillance.

---

## 🎮 Key Highlights & Features

### 1. 🏰 First-Person 3D Horror Mansion (Three.js WebGL)
- **Full 3D Real-Time Exploration**: Freely explore the Victorian Blackwood estate corridor using **WASD** movement and 360° mouse-look.
- **Atmospheric Visual Polish**: Procedural damask wallpaper, dark herringbone oak flooring, Persian rug with arterial blood drag trails leading to Study 17-B.
- **Living Haunted Environment**: Gilded oil portraits of suspects with glowing red eyes, swinging grandfather clock pendulum, dynamic candle chandelier flicker, and stalking shadow jumpscares.

### 2. 🎖️ Call of Duty Style Tactical HUD & Presentation
- **In-World 3D Floating Waypoints**: Holographic waypoint markers hover directly in 3D world space over key clues (`Grandfather Clock 16m`, `Study 17-B 26m`, `Audio Tape 8m`, `Cabinet 5m`, `Floor Grate 11m`).
- **Live Meter Distance Tracking**: Continuously displays real-time metric distance (`[ 14.2m ]`) updated dynamically with player coordinates.
- **Rotating Tactical Compass Ribbon**: Top-mounted military compass tape displaying continuous 360° heading and cardinal bearings (`N`, `NE`, `E`, `SE`, `S`, `SW`, `W`, `NW`).
- **Dynamic 4-Axis Reticle & Hitmarkers**: Crosshair expands when in motion, snaps to red lock-on brackets `[ ⬡ ]` when near evidence, and triggers signature acoustic hitmarker feedback (`playHitmarker()`).
- **In-Game 3D Holographic Intel Inspection**: Press <kbd>E</kbd> near any clue to open a classified briefing card with 3 concise bullet points and 1-click terminal redirection (`+100 XP INTEL SECURED`).

### 3. 🔦 UV Blacklight & Luminol Recon Mode (<kbd>L</kbd>)
- Press <kbd>L</kbd> (or click the HUD UV toggle) to switch from standard halogen light into a **400nm Ultraviolet Blacklight Beam** with military phosphor night-vision overlay.
- Dims ambient lighting and reveals hidden glowing cyan/violet **luminol graffiti**:
  - *Left Wall*: `"DON'T TRUST KITCHEN CLOCK (+16 MIN FORWARD OFFSET)"`
  - *Floor*: `"MEERA STRUCK HIM AT 11:47 PM... SEN WAS BREATHING AT 12:03 AM"`
  - *Right Wall*: `"DEV IS IN THE WALLS — SERVICE TUNNEL BYPASSES 17-B LOCK"`
  - *Study Door*: `"SPOOL 12: PRINTED AT 11:41 PM — PRE-CRIME FABRICATION"`

### 4. ⚡ Zero Text-Fatigue: 1-Click Tactical Deductions
No long reading or manual typing required:
- **Round 0**: Tactical mission briefing `OPERATION: BLACKWOOD PROTOCOL` with 1-click squad deployment.
- **Round 2**: 1-click **Tactical Intel Chips** for each suspect to disarm locks instantly.
- **Round 3**: 1-click **AI Prompt Overrides** (`[ ⚡ RECONCILE 12:03 CCTV VS 12:05 AUDIO ]`) and high-voltage override switch `[ ⚠ EXPOSE 94.2% AI BIAS ]` with side-by-side visual diff card (`+150 XP TRAP EVADED`).
- **Round 4**: Interactive **3D Tactical Timeline Radar** with 1-click `[ ⚡ AUTO-SYNC FORENSIC TRIAD ]` (`+200 XP`).
- **Round 5**: Classified Target Dossier with 1-click `[ ⚡ AUDIT 11:41 PM PRE-CRIME SPOOL ]` (`+250 XP`).
- **Round 6**: 1-click deduction chips and master button `[ ⚡ INJECT MASTER EXPLOIT ]` (`+500 XP CASE SOLVED`) to trigger the climax reveal.

### 5. 📌 Detective Conspiracy Corkboard (Red Threads)
- Press <kbd>Tab</kbd> anytime to cycle smoothly between `[ 🏰 3D MANSION ]`, `[ 💻 CASE TERMINAL ]`, and `[ 📌 CONSPIRACY WALL ]`.
- Connects all clues, victim timeline, and suspect non-murder crimes with glowing red evidentiary threads.

### 6. 🔊 Hollywood AAA Procedural Audio Engine
- **100% Procedural Synthesis**: Zero external MP3/WAV dependencies! Built entirely via Web Audio API.
- Synthesizes vocal tract screams, Penderecki microtonal violin shrieks, 3D binaural stereo whispers (*"He's behind you..."*), hitmarker clicks, military radio squelch, EKG heartbeats, and viscous blood splatter impacts.

---

## 🕹️ Keyboard Controls Reference

| Key | Action | Description |
|---|---|---|
| <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> | Move | Walk forward, strafe left, move backward, strafe right |
| <kbd>Mouse Drag</kbd> | Look Around | 360° free pitch and yaw camera control |
| <kbd>E</kbd> | Inspect Clue | Open 3D Holographic Intel Card when near any waypoint |
| <kbd>F</kbd> | Flashlight | Toggle halogen lighting on / off |
| <kbd>L</kbd> | UV Blacklight | Toggle Night-Vision UV Luminol mode to reveal hidden secrets |
| <kbd>Tab</kbd> | Cycle View | Instantly toggle between 3D Mansion, Case Terminal, and Conspiracy Wall |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Host HUD | Open Facilitator / Game Master HUD |

---

## ⚡ Judge / Evaluator Speedrun Mode

For evaluators, judges, or demonstrators reviewing the experience:
1. Click the glowing **`[ ⚡ JUDGE / DEMO ]`** button in the top navigation bar (or press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>).
2. Click **`[ ⚡ AUTO-SOLVE ENTIRE CASE ]`**:
   - Automatically disarms all 5 suspect locks.
   - Unlocks the 0.5x audio reel secret, 11:47 assault pinhole video, and 11:41 PM printer spool log.
   - Synchronizes the Chronology Triad and populates the 100/100 Final Boss prompt matrix.
   - Awards `+500 XP CASE SOLVED` and prepares the Climax Reveal.
3. Or click **`[ 🔥 LAUNCH 60-SEC CLIMAX ]`** to immediately experience the dramatic blackout, character revelations, and Professor Blackwood cliffhanger.

---

## 🧠 The Six Forensic Layers of Deception

```
[Layer 1: The First Lie] ──────────► Grandfather clock frozen at 11:47 PM. Dictaphone 0.5x reveals: "Someone started BEFORE the house stopped."
                                            │
[Layer 2: Five Suspects] ──────────► Suspects' lies hide non-murder crimes (theft, wiretapping, blackout sabotage).
                                            │
[Layer 3: The AI Trap]   ──────────► CCTV (12:03) vs Audio (12:05) contradiction. AI falsely assumes clocks were synchronized.
                                            │
[Layer 4: Dead Man's Message] ─────► Sen is alive at 12:03 AM on video! Attack (11:47 PM) ≠ Smothering (12:15 AM) ≠ Discovery (12:18 AM).
                                            │
[Layer 5: False Murderer] ────────► AI's 97.8% indictment of Meera exposed: Incriminating PDF printed at 11:41 PM (6 mins BEFORE the crime!).
                                            │
[Layer 6: Final Boss Matrix] ──────► Attacker: Meera | Murderer: Devraj Negi | Blackout: Kabir Varma | Root Cause: Premeditated Scapegoat.
```

---

## 🚀 Installation & Local Execution

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (Vite)
npm run dev

# 3. Run automated test suite (99 assertions)
node scratch/smoke_test.mjs

# 4. Build for production
npm run build
```

Open **[http://localhost:3000](http://localhost:3000)** in any modern web browser (Chrome, Edge, Safari, Firefox).

---

## 📂 Documentation & Printables

- [Host Facilitator Master Guide](docs/HOST_MASTER_GUIDE.md) — 55-minute minute-by-minute facilitator runbook, dialogue scripts, and hint ladders.
- [Evidence Dossier & Printable Clue Cards](docs/EVIDENCE_DOSSIER_PRINTABLES.md) — Printable clue sheets and envelope cards for physical / hybrid rooms.
- [Solution Architecture & Scoring Rubric](docs/SOLUTION_AND_RUBRIC.md) — Multi-layer truth breakdown, truth vs. deception matrix, and 100-point prompt scoring rubric.

---

## 🏆 Credits & Attribution
Built for the **Prompt War: Live Murder Mystery Challenge**. Designed to push the boundary of AI prompt engineering, WebGL 3D immersion, and psychological escape room narratives.