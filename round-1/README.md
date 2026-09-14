# 🧬 PROMPT WAR: ROUND 01 — PROMPT PARASITE

> **Presented by Tech Tatva Club, Chandigarh University**  
> An arena-grade adversarial prompt engineering tournament platform featuring synchronized cohort progression, real peer matchmaking, and automated phase advancement.

---

## 🎮 Game Architecture & Synchronized Phases

Round 01 features a strictly synchronized tournament flow where all participating teams advance together across standardized phases:

1. **Holding Lobby**: Teams register their squad details (team name, leader, contact, college, members) and receive an official passcode (`PW-XXXX`). Contenders wait until the host commences the round.
2. **Phase 01: Briefing (1 min)**: Global briefing displaying rules and scoring criteria.
3. **Phase 02: First Form (10 min)**: Teams craft their baseline prompt using external AI tools (ChatGPT, Claude, Gemini) and paste prompt + output. Early submitters enter a secured waiting room with a synchronized countdown badge.
4. **Phase 03: Peer Matching (30 sec)**: Central server executes balanced random matchmaking, assigning 1–2 real opponent outputs to each squad while minimizing reuse.
5. **Phase 04: Parasite Study (10 min)**: Teams analyze competitor outputs and record private tactical mutation notes.
6. **Phase 05: Evolve Final Form (10 min)**: Teams reconstruct their solution synthesizing peer strengths. When the timer expires, drafts auto-lock and seal into the judging matrix.
7. **Phase 06: Concluded & Judging**: Complete arena standings with judge evaluation scores.

---

## 🛡️ Core Rules & Mechanics

* **Quorum Gate**: A minimum of **3 teams** is strictly required to start Round 01.
* **Synchronized Timers**: Server-authoritative phase clock at `/api/arena/phase-clock` prevents client drift.
* **Auto-Save on Timeout**: Any drafted text is automatically locked and saved if the 10-minute timer expires.
* **Balanced Peer Matching**: Opponents are assigned randomly and distributed evenly across the cohort.
* **External AI Workflow**: Contenders use their own external LLMs and submit prompts and outputs to the platform.

---

## 💻 Tech Stack

* **Framework**: React 18 + Vite
* **Styling**: Tailwind CSS + Lucide Icons
* **Audio**: Custom Web Audio API synthesizer for arena sound FX
* **Palette**: Tech Tatva Electric Cyan (`#00f0ff`) & Cyber Crimson (`#ff2a5f`)

---

## 🛠️ Development & Execution

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

Access the application at `http://localhost:5173`.  
Access the Host Admin Console at `http://localhost:5173/#/admin` with passcode `TATVA@2026`.
