# PROMPT WAR 2.0: THE HOUSE THAT REMEMBERS
## Game Master & Facilitator Operational Runbook (55 Minutes)

> **Tagline:**  
> *Everyone has a motive. Everyone has a secret. Someone is lying. And the house knows which one.*

---

## 1. Room & Technical Setup

### Hardware & Staging
- **Central Projector / Display:** Displays the main investigation dashboard or mirrored game terminal.
- **Lighting Controls:** Prepare to dim room lights during Round 0 (Arrival), flicker during Round 3 (12:13 blackout test), and **cut all lights completely** during the 60-Second Climax reveal.
- **Sound:** Connect high-grade speakers. The browser application synthesizes analog horror ticks, electrical hum, and sub-bass frequencies natively via Web Audio API.
- **Team Terminals:** Each team has 1–2 laptops with access to the web interface or terminal console.

### Secret Host Keybindings
- **<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>** (or clicking **HOST HUD** in the top header) opens the secret Facilitator Modal to:
  - Jump directly between rounds
  - Adjust the countdown timer (+/- minutes)
  - Force-unlock suspect locks or evidence items
  - Manually trigger the blackout or the final 60-second climax reveal

---

## 2. Minute-by-Minute Facilitator Script & Timeline

### Round 0: The Arrival (0:00 – 3:00)
- **Objective:** Establish psychological horror atmosphere and the core question: *"Which time never happened?"*
- **Facilitator Script:**
  > *"Welcome, investigators. Tonight you are not merely solving a locked-room homicide. You are entering Blackwood House. Keep this in mind: The house isn't just hiding evidence—it is actively manipulating your investigation. The evidence you receive is not necessarily evidence that existed before the murder."*
- **Action:**
  - Launch application in Round 0.
  - Room darkens. Two heavy clock ticks sound.
  - Distorted voice speaks: *"If you're hearing this... I'm already dead. Don't trust the clocks."*
  - Rapid flash: `11:47 PM` → `12:03 AM` → `12:13 AM` → `12:17 AM`.
  - Display warns: `ONE OF THESE TIMES NEVER HAPPENED.`

---

### Round 1: The First Lie (3:00 – 11:00)
- **Objective:** Discover the hidden 11:47 clue and decode the sub-bass cassette tape anomaly.
- **Clues Available:** Evidence 1 (Hallway photo), Evidence 2 (Grandfather clock at 11:47), Evidence 3 (Victim notebook: *"Never trust the first time"*), Evidence 4 (Dictaphone audio reel), Evidence 5 (Five initial statements).
- **The Mechanic:**
  - Normal tape playback (1.0x): *"When the house stopped... someone started."*
  - Slowdown playback (0.5x): Sub-bass reverse frequency reveals: *"Someone started BEFORE the house stopped."*
- **Facilitator Nudge (at 7:00 if stuck):**
  > *"Listen closely to the cassette tape. If you suspect the house is hiding something in the frequency, examine what happens when you alter the playback speed."*

---

### Round 2: Five Suspects & Five Locks (11:00 – 20:00)
- **Objective:** Break the 5 suspect alibis (Aarav, Riya, Kabir, Meera, Dev) and realize **all five are guilty of separate non-murder crimes**.
- **The Core Lesson:** *"Who lied?" is NOT the same question as "Who killed him?"*
- **Lock Solutions:**
  - **Aarav:** Stole Blackwood's research notebook. *(Clock: East corridor terminal synced to 11:47)*
  - **Riya:** Operating illegal wiretap / audio recording outside Study. *(Clock: Reading room -3m drift)*
  - **Kabir:** Compromised security terminal and triggered the 12:13 blackout. *(Clock: NTP server)*
  - **Meera:** Fabricated kitchen alibi; attacked Sen at 11:47. *(Clock: Kitchen timer +16m offset)*
  - **Dev:** Unmonitored caretaker hidden servant passage. *(Clock: Boiler mechanical gauge)*
- **Facilitator Script (at 16:00):**
  > *"Every suspect has two confirmed truths and one deliberate lie. Do not assume that exposing their crime makes them the murderer."*

---

### Round 3: The Impossible Timeline & The AI Trap (20:00 – 30:00)
- **Objective:** Reconcile CCTV logs with Evidence 10 (Study audio at 12:05 AM) and inspect why the AI returns `TIMELINE CONSISTENT (94%)`.
- **The Contradiction:**
  - CCTV logs Meera in kitchen at 12:03 AM.
  - Study audio at 12:05 AM records Sen groaning: *"Meera... you shouldn't have come... what did you do..."*
- **The AI Trap:**
  - When teams query the AI, the AI confidently asserts the timeline is consistent.
  - Teams must click **INSPECT MODEL REASONING** to expose the flawed assumption:  
    `Assumption: All CCTV hardware clocks are synchronized.`
- **Facilitator Script:**
  > *"If your AI assistant is 94% confident, ask yourself: what silent premise did the model take for granted?"*

---

### Round 4: The Dead Man's Message (30:00 – 40:00)
- **Objective:** Distinguish Attack Time vs. Death Time vs. Discovery Time.
- **The Reveal:**
  - Evidence 11 (Sen's video) cuts at 12:03:17 AM. Sen is alive and talking!
  - Unlocks `YOU_WERE_NOT_SUPPOSED_TO_FIND_THIS.mp4` showing the 11:47 PM brass paperweight assault.
  - Sen's notebook: *"Death is not the moment the body stops."*
- **Deduction Required:**
  - Assault occurred at 11:47 PM.
  - Sen survived and spoke at 12:03 AM.
  - The fatal moment did NOT occur at 11:47 or 12:03!

---

### Round 5: The False Murderer & The Choice (40:00 – 48:00)
- **Objective:** Reject the AI's 97.8% confident indictment of Dr. Meera Patel and unlock Evidence 12 (Printer Log).
- **The Branching Decision:**
  - If a team submits Meera as the murderer:  
    `❌ INVESTIGATION INCOMPLETE — You equated physical assault with fatal culpability.`
  - If they challenge the AI:  
    Unlocks **Evidence 12: Printer Spool Log** printed at **11:41 PM** (6 minutes BEFORE the attack!).
- **Facilitator Script:**
  > *"Someone printed the dossier framing Meera at 11:41 PM. She was framed before she even set foot in the study."*

---

### Round 6: The House Remembers & Final Boss Prompt (48:00 – 54:00)
- **Objective:** Submit the comprehensive prompt reconstruction matrix.
- **Decoded Cipher:**
  `"THE CLOCK DID NOT LIE. SOMEONE MADE IT TELL THE TRUTH TOO LATE."`
- **Required Submission Answers:**
  - **Physical Attacker:** Dr. Meera Patel (11:47 PM)
  - **Actual Murderer:** Devraj "Dev" Negi (12:15 AM)
  - **Blackout Operator:** Kabir Varma (12:13 AM)
  - **Initial Attack:** 11:47 PM
  - **Final Video:** 12:03 AM
  - **True Time of Death:** 12:15 AM (During blackout via hidden servant passage)
  - **Body Discovered:** 12:18 AM
  - **Pre-Crime Evidence Created:** 11:41 PM
  - **The AI's Flaw:** Blindly assumed synchronized hardware clocks and conflated framing/assault with biological death.

---

### Climax: The 60-Second Horror Reveal (54:00 – 55:00)
- **Objective:** Visual and auditory climax, suspect breakdown, and the Blackwood epilogue cliffhanger.
- **Execution:**
  1. Trigger Climax button in application.
  2. Kill all room lights.
  3. Low electrical hum + blackout audio buzzes through speakers.
  4. Glitch portraits flash:
     - Meera: *"SHE ATTACKED HIM."*
     - Kabir: *"HE CAUSED THE BLACKOUT."*
     - Riya: *"SHE KNEW THE TRUTH."*
     - Aarav: *"HE STOLE THE EVIDENCE."*
     - Silence... Dev: *"HE WAITED."*
  5. Text fade: *"YOU SOLVED THE MURDER."*
  6. Final chilling cliffhanger:  
     `"BUT WHO KILLED THE FIRST VICTIM? PROFESSOR BLACKWOOD."`  
     `"THE MURDER YOU JUST SOLVED WAS NOT THE FIRST ONE."`

---

## 3. Hint Ladder Reference Table

| Round | Tier 1 (Subtle Nudge) | Tier 2 (Targeted Question) | Tier 3 (Direct Hint) |
|---|---|---|---|
| **Round 1** | "Look at the speed settings on the Dictaphone." | "What is whispered underneath the tape rumble?" | "Switch the tape speed to 0.5x to hear the buried reverse voice." |
| **Round 2** | "Check the hardware clock source for each suspect." | "Did Aarav's theft require killing anyone?" | "None of the 5 suspects committed murder in Round 2; enter their secondary crimes." |
| **Round 3** | "Inspect the AI's internal reasoning trace." | "Does the AI verify whether the kitchen clock is synced to the study mic?" | "Click 'Inspect Model Reasoning'—the AI assumes all cameras share NTP synchronization." |
| **Round 4** | "Is Vikram Sen dead at 12:03 in the video?" | "If Sen is speaking at 12:03, when did the 11:47 assault end?" | "The 11:47 confrontation was an assault, not death. Sen survived until the blackout." |
| **Round 5** | "Look at the creation timestamp of the evidence." | "How could a dossier be printed at 11:41 PM?" | "Challenge the AI's verdict on Meera. The printer log proves she was framed in advance." |
| **Final** | "Who had access to the study without using the door?" | "Who knew the house before anyone else was born?" | "Dev entered via the caretaker passage at 12:15 AM during Kabir's blackout." |
