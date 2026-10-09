# PROMPT WAR: Project Analysis & Walkthrough

## 1. Project Overview
**PROMPT WAR** is an arena-grade competitive prompt engineering tournament platform designed specifically for hackathons and live tech events. It features a scalable client-server architecture with isolated frontends for different tournament rounds, allowing for distinct gameplay mechanics per round while maintaining centralized state and team management.

### Key Components:
- **Round 1 (Prompt Parasite)**: A multi-phase competitive prompt architecture and concept infiltration challenge ("SEE. STEAL. EVOLVE.") centered on Growth Architecture and campaign optimization under time constraints.
- **Round 2 (Operation Blackbox)**: A spacious intelligence investigation game exploring telemetry discrepancies, power grids, and facility breach anomalies.
- **Round 3 (Frame Zero)**: An anime directorial prompt craftsmanship trial where participants translate cinematic scene briefs into precise directorial prompts.
- **Unified Server**: A resilient Node.js/Express backend that handles team registration, live authoritative arena state, synchronized clock, and scoring for all rounds.

---

## 2. Technical Stack
- **Frontend (Round 1)**: React 18, Vite, JavaScript (JSX), Tailwind CSS.
- **Frontend (Round 2)**: React 18, Vite, JavaScript (JSX), Tailwind CSS.
- **Frontend (Round 3)**: React 18, Vite, TypeScript (TSX), Tailwind CSS.
- **Admin Portal**: React 18, Vite, TypeScript (TSX), Tailwind CSS, Lucide icons.
- **Backend (Server)**: Node.js, Express.js, MongoDB (Mongoose) with synchronized server-authoritative clock and robust in-memory fallback.

---

## 3. Backend Architecture (`server/`)
The backend is a lightweight Express application designed for maximum reliability during live events. It operates on `PORT 5001`.

### Key Features:
- **In-Memory Fallback**: If the MongoDB connection fails or is pending, the server automatically falls back to storing teams and submissions in memory.
- **Arena State Controller & Authoritative Clock**: A global state object (`arenaState`) dictates the current phase of the tournament (e.g., LOBBY, BRIEFING, CREATE, MATCH, PARASITE, EVOLVE, COMPLETE) and provides drift-compensated global timing (`/api/arena/clock`).
- **Team Management API**:
  - `POST /api/teams/register`: Register new teams and generate unique `PW-XXXX` team codes.
  - `POST /api/teams/login`: Resume session using a team code.
  - `GET /api/teams`: Leaderboard fetching.
- **Submission API**:
  - `POST /api/submissions`: Save prompt mutations, inputs, and outputs with server-enforced deadline cutoff.

---

## 4. Round 1: Prompt Parasite Walkthrough (`round-1/`)
This round challenges teams to engineer high-leverage growth campaigns, infiltrate peer ideas, and evolve superior hybrid strategies.

### User Flow:
1. **Entry & Registration (`ENTRY`)**: Participants land on the root page. They must register their team (2-4 members) or log in using an existing Team Code.
2. **Holding Lobby (`HOLDING_LOBBY`)**: Teams wait here until the event host explicitly starts the round via the Admin Console.
3. **Mission Brief (`HOW_IT_WORKS` & `CHALLENGE`)**: Upon round start, teams view the interactive onboarding and the scenario briefing for "THE REGISTRATION PROBLEM" (500 signups in 7 days, ₹10k budget cap).
4. **Original Strategy Creation (`CREATE`)**: A 10-minute timer begins. Participants engineer their original campaign strategy and lock in their First Form prompt and output (`FIRST_LOCKED`).
5. **Matchmaking (`MATCH`)**: The system dynamically and anonymously pairs the team's submission against opponent outputs using a balanced peer matchmaking algorithm.
6. **Parasite Phase (`PARASITE`)**: A 5-minute phase where participants inspect opponent strategies, extract tactical leverage, and identify high-value concepts to steal.
7. **Evolve (`EVOLVE`)**: A 10-minute buffer to synthesize original ideas with stolen mechanisms and lock in the definitive evolved campaign prompt and output (`FINAL_LOCKED`).
8. **Completion (`COMPLETE`)**: Displays transparent performance metrics, parasite leverage index, and official qualification status for Round 2.

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
