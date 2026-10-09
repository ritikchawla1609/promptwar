# ⚡ PROMPT WAR // TOURNAMENT ARENA PLATFORM

> **Presented by Tech Tatva Club, Chandigarh University**  
> An arena-grade competitive prompt engineering tournament platform engineered for high-stakes hackathons and live tech showdowns.

---

## 🏆 Tournament Overview

| Round | Arena / Challenge | Status | Description |
| :--- | :--- | :--- | :--- |
| **Round 01** | **[PROMPT PARASITE](./round-1)** | ✅ **Production Ready** | Synchronized multi-phase adversarial prompt evolution tournament. Teams craft baseline prompts, peer-mutate outputs, and build evolved final forms under server-synced 10-minute timers. |
| **Round 02** | **[OPERATION BLACKBOX](./round-2)** | ✅ **Production Ready** | Spacious forensic intelligence archive game. Reconstruct an unauthorized facility data breach across 14 records with deterministic local prompt evaluation and deceptive lead resolution. Live at: [round-promptwar.vercel.app](https://round-promptwar.vercel.app) |
| **Round 03** | **[🩸 The House That Remembers (2.0)](./round%203)** | ✅ **Production Ready** | 3D First-Person Horror Mansion, Call of Duty Tactical HUD, 1-Click Forensic Deductions & 6-Layer Deception Matrix. |

---

## 🧬 Round 01: PROMPT PARASITE

Round 1 puts contenders through an adversarial prompt engineering lifecycle inspired by viral mutation mechanics. Contenders utilize external frontier AI models (ChatGPT, Claude, Gemini, etc.) and battle inside a synchronized cohort arena.

### 🎮 Synchronized Phase Progression (All Teams Move Together)

1. **00 // HOLDING LOBBY**: Teams register with squad details and receive unique passcodes (`PW-XXXX`). Contenders wait securely in the lobby until the host unlocks the arena.
2. **01 // BRIEFING (1 min)**: Global briefing revealing tournament rules, external AI workflow, and challenge context.
3. **02 // FIRST FORM (10 min)**: Teams engineer their baseline prompt and capture their AI model output. Early submitters enter an encrypted waiting room with a synchronized countdown badge.
4. **03 // PEER MATCHING (30 sec)**: Central server executes **balanced random matchmaking**, pairing each squad with 1–2 opponent outputs while minimizing duplicate distribution.
5. **04 // PARASITE STUDY (10 min)**: Teams inspect peer outputs, reverse-engineer opponent tactical strengths, and record private mutation notes.
6. **05 // EVOLVE FINAL FORM (10 min)**: Teams engineer an evolved prompt synthesizing peer advantages. When the timer expires, drafts auto-lock and seal into the judging matrix.
7. **06 // COMPLETE & JUDGING**: Official scoring console where judges evaluate prompt quality, problem understanding, output quality, and evolutionary improvement.

---

## 🛡️ Key System Architecture

* **Quorum Gate (Min 3 Teams)**: Round 01 strictly requires a minimum of 3 registered teams before the host can start the arena, guaranteeing balanced peer matchmaking.
* **Server-Authoritative Clock**: Zero client drift. All connected screens sync with `/api/arena/phase-clock` to advance phases at the exact same millisecond.
* **Auto-Save on Expiry**: If a team runs out of time, work is auto-submitted and securely locked.
* **Standalone Host Admin Portal**: Hidden at `#/admin` or `?admin=true` (protected by master passcode `TATVA@2026`). Features live phase countdown, team roster management, 1-click Round 2 qualification, CSV export, and judging scoring matrices.
* **Unified Backend**: Express + Mongoose on port `5001` with dual-mode high-reliability in-memory fallback for local deployment.

---

## 🚀 Quick Start Guide

### 1. Launch the Backend Server

```bash
# From repository root
cd server
npm install
node server.js
```
*Backend runs on `http://127.0.0.1:5001`.*

### 2. Launch Round 1 (Participant & Admin Arena)

```bash
# In a separate terminal
cd round-1
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173`.*

### 3. Launch Round 3 (The House That Remembers)

```bash
cd "round 3"
npm install
npm run dev
```
*Round 3 runs on `http://localhost:3000`.*

---

## 🔑 Administrative Access

* **Admin Portal URL**: `http://localhost:5173/#/admin`
* **Default Passcode**: `TATVA@2026`
* **Features**:
  * Global Start / Pause / Reset Arena Gate
  * Live Synchronized Arena Phase Clock with "FORCE ADVANCE" button
  * Walk-In Team Registration & Team Purging
  * Real-Time Submission Monitor & Evaluation Matrix
  * 1-Click Round 2 Qualification & CSV Export

---

## 🎨 Tech Stack

* **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Web Audio API Synthesizer
* **Backend**: Node.js, Express, MongoDB / Mongoose with In-Memory Dual Driver
* **Branding**: Tech Tatva Cyber Theme (`#00f0ff` Electric Cyan & `#ff2a5f` Cyber Crimson)
