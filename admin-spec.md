# PROMPT WAR Admin Control System - Detailed Specifications

## 1. Visual & Architectural Foundation
- **Theme**: Premium modern UI, Anime Energy (Fire/Water/Electricity/UV) on dark backgrounds (`#0a0f18`, Navy/Deep Blue).
- **Communication Layer**: Real-time Socket.io integration across Server, Admin, Rounds, and Projector.
- **Single Source of Truth**: The Server holds the state. Admin sends commands to the Server; Server broadcasts to clients.

---

## 2. Page 1: OVERVIEW (The Live Command Dashboard)
*Objective*: Provide a high-level, real-time snapshot of the event and immediate emergency controls without overwhelming the user.

### A. Core Layout
- **Top Bar**: Persistent Admin Navigation (Overview, Event, Teams, Control, Rounds, Leaderboard, Analytics, More).
- **Left Column (60%)**: Event Status, Quick Actions, Stats overview.
- **Right Column (40%)**: Live Activity Feed.

### B. Data Points & Components
**1. Event Status Header**
- **Data**: Current Event Name, Status (LIVE/PAUSED), Round, Phase, Global Timer.

**2. Team Statistics (Grid of Mini-Cards)**
- Registered, Active, Paused, Offline, Completed Teams.

**3. Quick Actions Panel (Buttons)**
- `[ PAUSE EVENT ]` / `[ RESUME EVENT ]`: Emits `ARENA_PAUSED`/`ARENA_RESUMED` globally. Orange/Green.
- `[ END ROUND ]`: High-security confirmation modal. Emits `ROUND_ENDED`. Red.
- `[ OPEN LEADERBOARD ]`: Blue link.
- `[ EMERGENCY STOP ]`: Instantly halts everything, blacks out screens. Flashing Red.

**4. Live Activity Feed**
- Scrolling feed of real-time events.
- Icons: `✨` (Phase change), `⚡` (Clue), `🔥` (Submission), `⚠` (Violation).

---

## 3. Page 2: EVENT CONTROL
*Objective*: Granular control over the global competition state, rounds, and timers.

### A. Components
**1. Master Event Controls**
- `[ Start Event ]`, `[ Pause Event ]`, `[ Resume Event ]`, `[ End Event ]`, `[ Emergency Stop ]`.

**2. Round Controls**
- **State**: Shows current active round.
- **Actions**: `[ Start Round ]`, `[ End Round ]`, `[ Move to Next Round ]`, `[ Pause Round ]`, `[ Resume Round ]`.
- **End-of-Game Destination Selector**: A dropdown to choose where participants go when a round ends (e.g., `Leaderboard`, `Final Results`, `Podium`). This setting is sent alongside the `END ROUND` command.

**3. Timer Controls**
- **State**: Current live timer value.
- **Actions**: `[ Start ]`, `[ Pause ]`, `[ Resume ]`.
- **Modifications**: 
  - `[ +1 Min ]`, `[ +5 Min ]`, `[ -1 Min ]`
  - Input field to `[ Set Exact Time ]`.
- **Realtime**: Timer updates are pushed to the server, which then synchronizes all connected clients.

---

## 4. Page 3: PARTICIPANT CONTROL (Screen & Targeting)
*Objective*: The remote-control system to forcefully change what participants see or if they are locked.

### A. Targeting Engine
- **Target Selection UI**:
  - `( ) Single Team`: Searchable dropdown/input (e.g., "PW-1042").
  - `( ) Multiple Teams`: A multi-select list with checkboxes. Includes quick filters (Round, Phase, Status, Fullscreen status, Score range).
  - `( ) All Participants`: Selects everyone.

### B. Action Panel (Applied to Targets)
- **Change Screen**: Dropdown of available screens.
  - *Round 1*: ENTRY, HOLDING LOBBY, HOW IT WORKS, CHALLENGE, CREATE, MATCH, PARASITE, EVOLVE, COMPLETE.
  - *Round 3*: INTRO, BRIEFING, CRIME SCENE, SUSPECTS, AI TRAP, FORENSICS, CASE BOARD, FINAL INDICTMENT.
  - *Common*: LEADERBOARD, RESULTS, WAITING, PAUSED, MAINTENANCE.
- **State Control**: `[ Pause ]`, `[ Resume ]`, `[ Lock Screen ]`, `[ Unlock Screen ]`.
- **Time Control**: `[ Add Time ]`, `[ Remove Time ]`.
- **Messaging**: Input field to type a custom message + `[ Send Message ]` button. Appears as a high-priority toast/overlay on targeted screens.

---

## 5. Page 4: TEAMS (Management & Live Monitoring)
*Objective*: Central location for managing individual teams and viewing their live status.

### A. Team Master Table
- **Columns**: Team Code, Round, Phase, Progress (%), Score, Status, Connection (Online/Offline), Fullscreen (🟢 / ⚠).
- **Interactivity**: Clicking any row opens the Individual Team Console.

### B. Individual Team Console (Drawer/Modal)
- **Live Status Header**: 
  - Status (🟢 ONLINE), Round (Round 3), Phase (Forensics), Time left, Progress (76%), Score (87), Fullscreen (🟢 ACTIVE).
- **Live Monitoring Tab**:
  - Shows EXACT current action (e.g., "Analyzing Evidence #17").
- **Activity Timeline Tab**:
  - Chronological list of every action this team has taken (e.g., "14:31:17 - Opened Evidence #03", "14:34:12 - Queried House AI").
- **Control Tab (Team-Specific)**:
  - Enable/disable access, force logout, pause/resume, reset session, move to phase, add/remove time, force-lock submission, disqualify.

---

## 6. Page 5: ROUNDS
*Objective*: Specific controls tailored to the unique logic of individual rounds.

### A. Round Discovery Architecture
- Tabs for `Round 1`, `Round 2` (Future), `Round 3`.

### B. Round 1 (Prompt Parasite) Controls
- Monitor matchmaking pools.
- Force match teams.
- Reopen locked submissions.

### C. Round 3 (The House) Controls
- **Evidence Overrides**: `[ Unlock All Locks ]`, `[ Unlock Printer Log ]`, `[ Unlock Hidden Video ]`.
- **Atmosphere**: `[ Trigger Blackout ]`, `[ Trigger Climax ]`.
- **Puzzle Management**: `[ Auto Solve All ]`.

---

## 7. Page 6: LEADERBOARD
*Objective*: Official leaderboard view and manual score editor.

### A. Master Leaderboard
- **Table**: Rank, Team, R1 Score, R2 Score, R3 Score, Total.

### B. Leaderboard Editor
- **Actions**: Edit score, Add points, Remove points, Apply penalty, Give bonus.
- **Requirement**: Any modification requires a "Reason" text field to be filled (e.g., "Judge correction").
- **Audit**: Modification is permanently written to the `AuditLog` and the team's personal history.
- **Visibility**: `[ Lock Leaderboard ]` (freezes public view), `[ Unlock Leaderboard ]`.

---

## 8. Page 7: ANALYTICS
*Objective*: Event-wide performance insights.
- **Charts/Data**: Completion rates per phase, average scores, time taken per puzzle, common failure points.
- **Detailed Team Report**: Complete breakdown of how a team earned their score (e.g., "Correct murderer +5, Missing timestamp -2").

---

## 9. MORE: Config & Data
### A. HUD / GUI Configuration
- **Hierarchy Engine**: Set UI visibility at Global, Round, or Team override levels.
- **Toggles**: Show Timer, Show Score, Show Leaderboard, Show Notifications.

### B. Data Center (Import/Export)
- **Export**: Professional Excel Workbooks with formatted sheets (Executive Summary, Leaderboard, R1 Analysis, R3 Analysis, Activity Logs, Score Changes, Reviews).
- **Safe Import**: Upload -> Validate -> Preview Changes -> Admin Confirm -> Import.

### C. Audit Log
- Read-only table recording every administrative action (Admin, Action, Target, Previous State, New State, Reason, Timestamp).

### D. Reviews
- Participant feedback viewer (Stars, Difficulty, Text responses).

### E. Fullscreen Policy Settings
- Checkboxes: [x] Require fullscreen, [x] Pause when fullscreen exits, [x] Log exits, [x] Notify admin. (Auto-disqualify disabled by default).

---
*All configurations strictly adhere to the unified server pattern. The Admin Panel never mutates participant frontends directly; it mutates the Server state, which broadcasts updates to the participant clients.*
