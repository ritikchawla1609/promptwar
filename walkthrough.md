# PROMPT WAR: Project Analysis & Walkthrough

## 1. Project Overview
**PROMPT WAR** is an arena-grade competitive prompt engineering tournament platform designed specifically for hackathons and live tech events. It features a scalable client-server architecture with isolated frontends for different tournament rounds, allowing for distinct gameplay mechanics per round while maintaining centralized state and team management.

### Key Components:
- **Round 1 (Dalgona Prompt)**: A 2D interactive prompt engineering challenge focusing on precision context extraction under time constraints.
- **Round 3 (The House That Remembers)**: An immersive 3D first-person horror deduction game and prompt engineering puzzle with a 55-minute escape room format.
- **Unified Server**: A resilient Node.js/Express backend that handles team registration, live arena state, and scoring for all rounds.

---

## 2. Technical Stack
- **Frontend (Round-1)**: React 18, Vite, JavaScript (JSX), Tailwind CSS.
- **Frontend (Round 3)**: React 18, Vite, TypeScript (TSX), Tailwind CSS, Custom Audio/VFX engines for horror atmosphere.
- **Backend (Server)**: Node.js, Express.js, MongoDB (Mongoose) with a robust in-memory fallback mechanism to ensure 100% uptime during live events.

---

## 3. Backend Architecture (`server/`)
The backend is a lightweight Express application designed for maximum reliability during live events. It operates on `PORT 5001`.

### Key Features:
- **In-Memory Fallback**: If the MongoDB connection fails or is pending, the server automatically falls back to storing teams and submissions in memory.
- **Arena State Controller**: A global state object (`arenaState`) dictates the current phase of the tournament (e.g., LOBBY, CREATE, MATCH). This state is polled by the frontends to keep all participants synchronized.
- **Team Management API**:
  - `POST /api/teams/register`: Register new teams and generate unique `PW-XXXX` team codes.
  - `POST /api/teams/login`: Resume session using a team code.
  - `GET /api/teams`: Leaderboard fetching.
- **Submission API**:
  - `POST /api/submissions`: Save prompt mutations, inputs, and outputs.

---

## 4. Round 1: Dalgona Prompt Walkthrough (`round-1/`)
This round simulates a high-stakes, time-pressured prompt engineering task.

### User Flow:
1. **Entry & Registration (`ENTRY`)**: Participants land on the root page. They must register their team or log in using an existing Team Code.
2. **Holding Lobby (`HOLDING_LOBBY`)**: Teams wait here until the event host explicitly starts the round via the Admin Console.
3. **Mission Brief (`HOW_IT_WORKS` & `CHALLENGE`)**: Upon round start, teams view the interactive onboarding and the scenario briefing.
4. **The Cut (`CREATE`)**: A 10-minute timer begins. Participants use a 2D canvas to surgically extract genuine context signals while avoiding traps. They lock in their initial prompt (`FIRST_LOCKED`).
5. **Matchmaking (`MATCH`)**: The system anonymously matches the team's submission against other teams using a peer matchmaking algorithm.
6. **Parasite / Simulation (`PARASITE`)**: A 5-minute phase where participants test their prompt against real-time AI simulations.
7. **Evolve (`EVOLVE`)**: A final 10-minute buffer to synthesize clues and lock in the definitive, authoritative prompt (`FINAL_LOCKED`).
8. **Completion (`COMPLETE`)**: Displays the final transparent mathematical ledger and the official locked verdict for event judges.

---

## 5. Round 3: The House That Remembers Walkthrough (`round 3/`)
This is a highly advanced, atmospheric horror/detective puzzle that tests logical deduction and prompt construction. It runs on a global 55-minute countdown.

### Core Mechanics:
- **View Modes (Toggle with `TAB`)**:
  - `3d`: A tactical 3D mansion (WASD movement) to inspect physical clues.
  - `terminal`: A split-deck/puzzle terminal to analyze evidence files.
  - `board`: A conspiracy corkboard with red threads mapping evidence relations.
- **Host HUD**: Hidden admin panel accessed via `CTRL+SHIFT+H` to manipulate time, auto-solve locks, or trigger jump scares.

### Phase Progression Flow:
- **Intro**: A cinematic horror intro (can be skipped by the host).
- **Phase 0: Briefing**: Mission overview.
- **Phase 1: Crime Scene**: 3D mode. Players explore Study 17-B, use UV Luminol (`[L]`), and discover initial clues (clock, tape, blood).
- **Phase 2: Suspects**: Terminal mode. Players interrogate 5 suspect dossiers and break secondary alibis to unlock the next phase.
- **Phase 3: AI Trap**: Players interact with the House AI, querying its logic to expose an algorithmic bias regarding the timeline.
- **Phase 4: Forensics**: Timeline deduction. Players unlock hidden videos and establish the exact Attack, Death, and Discovery times.
- **Phase 5: Case Board**: Players challenge the AI's false accusation (Dr. Meera) to retrieve printer spool logs.
- **Phase 6: Final Indictment**: Players construct the Master Forensic Indictment prompt to dismantle the House AI and convict the true murderer (Devraj Negi). They receive a detailed score out of 100 based on their forensic accuracy.

---

## Conclusion
The PROMPT WAR platform is a highly polished, gamified environment. The separation of rounds into isolated Vite apps connected to a resilient Express backend ensures that the live event experience is both stable and easily extendable for future rounds (e.g., Round 2).
