// Dalgona Prompt Challenge: Multi-Scenario Dataset
// High-Credibility Prompt Engineering Taxonomy
// Core Signals (Verified Constraints), Harmless Noise (Context Bloat), Deceptive Traps (Strategic Pitfalls)

export const SCENARIOS = {
  techfest: {
    id: 'techfest',
    title: 'COLLEGE TECHFEST LAUNCH BLITZ',
    badge: 'CAMPUS CAMPAIGN',
    icon: '⚡',
    task: 'Create a practical 7-day marketing plan to get college students (aged 18–25) registered for an upcoming college techfest with a strict ₹10,000 budget.',
    objectives: [
      'Target college students aged 18–25',
      'Cap budget strictly at ₹10,000 total',
      'Focus on Instagram Reels & WhatsApp Broadcasts',
      'Provide a day-by-day practical 7-day schedule',
    ],
    sampleAiSolution: `### TECHFEST 7-DAY EXECUTABLE MARKETING STRATEGY

#### 1. Strategic Budget Allocation (₹10,000 Cap)
* **Instagram Sponsored Reels & Stories (Geo-fenced 5km):** ₹6,000 (60%)
  * Target audience: College students aged 18–25, interests in Hackathons, Esports & AI.
* **Campus WhatsApp Referral Drive & Club Ambassador Swag:** ₹2,500 (25%)
  * Cash voucher bounties (₹1,000, ₹1,000, ₹500) for top referring student reps.
* **Creative Motion Graphics & Fast-Track Passes:** ₹1,500 (15%)
  * High-energy teaser reel assets + sponsored story poll boosters.

---

#### 2. Day-by-Day Tactical Sprint Plan
* **Day 1: The Teaser Drop & WhatsApp Blast**
  * Drop cinematic 15s teaser reel on Instagram highlighting prize pool.
  * WhatsApp broadcast message sent to all departmental class representatives.
* **Day 2: Coding & Esports Competition Spotlight**
  * "Crack the Bug" Instagram Story challenge; first 30 correct solvers earn free fast-track pass.
* **Day 3: Interactive Gaming Polls & Viral Hooks**
  * Instagram Story polls ("Valorant or BGMI? Vote now!") with ₹500 ad push.
* **Day 4: Early Bird Urgency Announcement**
  * WhatsApp broadcast: "Only 48 hours left for Early Bird slots!"
* **Day 5: Speaker Reveal & Physical Trophy Showcase**
  * Live Q&A with event coordinators on Instagram Live.
* **Day 6: FOMO Sprint (Countdown 24h)**
  * Retargeting ad burst targeting all students who engaged with previous posts.
* **Day 7: Final Call & Registration Cut-off**
  * Final WhatsApp blast at 12:00 PM and 6:00 PM: "Last 50 slots before lockdown."

---

#### 3. Expected Yield & KPIs
* Target Registrations: 350–450 verified students
* Average Cost Per Registration (CPR): ₹22–₹28
* Target Instagram Reach: 20,000+ local students`,
    fragments: [
      // 1. Core Signals (Verified Operational Constraints)
      {
        id: 'tf_1',
        text: 'Role: Event Marketing Strategist',
        fullText: 'Act as an Event Marketing Strategist',
        isRelevant: true,
        isMisleading: false,
        x: 22,
        y: 16,
        icon: '👤',
        source: 'Faculty Marketing Committee Directive',
        explanation: 'Essential persona to establish tactical framing and budget allocation authority.',
      },
      {
        id: 'tf_2',
        text: 'Audience: College Students 18–25',
        fullText: 'Target college students aged 18–25',
        isRelevant: true,
        isMisleading: false,
        x: 80,
        y: 16,
        icon: '👥',
        source: 'Registrar Demographic Profile',
        explanation: 'Primary user cohort; defines tone, visual channels, and registration hooks.',
      },
      {
        id: 'tf_3',
        text: 'Budget: ₹10,000 Hard Cap',
        fullText: 'Marketing budget is strictly capped at ₹10,000 total',
        isRelevant: true,
        isMisleading: false,
        x: 48,
        y: 32,
        icon: '💰',
        source: 'Finance Audit Sign-Off',
        explanation: 'Non-negotiable fiscal limit; requires lean CPA calculations and low-cost digital channels.',
      },
      {
        id: 'tf_4',
        text: 'Channel: Instagram Reels & Ads',
        fullText: 'Deploy Instagram Reels and targeted Story ads for campus reach',
        isRelevant: true,
        isMisleading: false,
        x: 24,
        y: 50,
        icon: '📱',
        source: 'Student Engagement Analytics 2024',
        explanation: 'Top conversion medium for local students aged 18–25 within a 5km campus radius.',
      },
      {
        id: 'tf_5',
        text: 'Channel: WhatsApp Class Broadcasts',
        fullText: 'Utilize departmental WhatsApp broadcasts via Class Representatives',
        isRelevant: true,
        isMisleading: false,
        x: 80,
        y: 50,
        icon: '💬',
        source: 'Departmental Head Consensus',
        explanation: 'Highest conversion rate (82% open rate) for peer-to-peer campus notifications.',
      },
      {
        id: 'tf_6',
        text: 'Timeline: 7-Day Sprint Plan',
        fullText: 'Construct a 7-day day-wise tactical countdown schedule',
        isRelevant: true,
        isMisleading: false,
        x: 52,
        y: 50,
        icon: '📅',
        source: 'Event Schedule Milestone Protocol',
        explanation: 'Operational timeline structure to drive urgency before ticket sales close.',
      },
      {
        id: 'tf_7',
        text: 'Goal: Maximize Verified Registrations',
        fullText: 'Primary objective is securing paid student registrations',
        isRelevant: true,
        isMisleading: false,
        x: 26,
        y: 84,
        icon: '🎯',
        source: 'Core Techfest Milestone Charter',
        explanation: 'The north-star KPI; distinguishes actual signups from useless vanity impressions.',
      },
      {
        id: 'tf_8',
        text: 'Format: Day-Wise Actionable Guide',
        fullText: 'Provide practical, day-by-day executable steps with allocated budget',
        isRelevant: true,
        isMisleading: false,
        x: 76,
        y: 68,
        icon: '⚡',
        source: 'Execution Guidelines',
        explanation: 'Output format constraint ensuring real-world execution rather than vague theory.',
      },

      // 2. Harmless Context Noise (Context Window Bloat)
      {
        id: 'tf_9',
        text: 'History: Campus Founded in 2001',
        fullText: 'The college institute was founded in the year 2001',
        isRelevant: false,
        isMisleading: false,
        x: 18,
        y: 34,
        icon: '🏛️',
        source: 'Campus Historical Brochure',
        explanation: 'Factually true institutional lore, but completely irrelevant to a 7-day digital ad campaign.',
      },
      {
        id: 'tf_10',
        text: 'Facility: 8 Academic Department Blocks',
        fullText: 'The college campus contains 8 distinct academic buildings',
        isRelevant: false,
        isMisleading: false,
        x: 46,
        y: 68,
        icon: '🏫',
        source: 'Campus Map Directory',
        explanation: 'Physical campus infrastructure data that dilutes prompt focus without adding conversion value.',
      },
      {
        id: 'tf_11',
        text: 'Catering: Cafeteria Prepares 2,000 Meals',
        fullText: 'The main cafeteria prepares 2,000 student meals daily',
        isRelevant: false,
        isMisleading: false,
        x: 54,
        y: 84,
        icon: '🍛',
        source: 'Dining Services Operations Log',
        explanation: 'Operational trivia that wastes token bandwidth and LLM context attention.',
      },

      // 3. Subtle & Realistic Deceptive Traps (Strategic Pitfalls) - SCATTERED IN ALL 4 QUADRANTS
      {
        id: 'tf_12',
        text: 'Constraint: 100% Organic (Zero Ad Spend)',
        fullText: 'Mandate 100% organic word-of-mouth reach with zero paid advertisements',
        isRelevant: false,
        isMisleading: true,
        x: 18,
        y: 67,
        icon: '🚫',
        source: 'Unvetted Student Forum Proposal',
        explanation: 'Contradiction Trap: Directly conflicts with the ₹10,000 budget mandate, deadlocking the AI between spending vs zero spend.',
      },
      {
        id: 'tf_13',
        text: 'Friction: Mandatory Paper Signups',
        fullText: 'Require physical in-person identity verification at the admin desk before digital signup',
        isRelevant: false,
        isMisleading: true,
        x: 78,
        y: 34,
        icon: '📝',
        source: 'Outdated 2012 Administrative Rulebook',
        explanation: 'Conversion Killer Trap: Enforcing physical paperwork kills student conversion rates by over 90%.',
      },
      {
        id: 'tf_14',
        text: 'Scope Creep: Build Native Mobile App',
        fullText: 'Require full native iOS and Android app development for ticket QR scanning',
        isRelevant: false,
        isMisleading: true,
        x: 52,
        y: 14,
        icon: '📲',
        source: 'Third-Party Software Agency Pitch',
        explanation: 'Scope Creep Trap: A multi-month $5,000+ software engineering project is impossible inside a 7-day ₹10,000 launch.',
      },
      {
        id: 'tf_15',
        text: 'Metric: Raw Video Views Over Tickets',
        fullText: 'Disregard conversion rates and optimize solely for raw unverified video views',
        isRelevant: false,
        isMisleading: true,
        x: 80,
        y: 84,
        icon: '👁️',
        source: 'Freelance Social Media Influencer',
        explanation: 'Vanity Metric Trap: Optimizes for passive bot impressions, leaving the techfest hall completely empty on event day.',
      },
    ],
  },

  startup: {
    id: 'startup',
    title: 'AI STARTUP VC SEED PITCH DECK',
    badge: 'VENTURE CAPITAL',
    icon: '🚀',
    task: 'Create an executive 10-slide Seed Pitch Deck outline for an enterprise AI workflow co-pilot seeking $2M from Tier-1 Silicon Valley VCs.',
    objectives: [
      'Tailor for Tier-1 Venture Capital partners',
      'Target raising a $2,000,000 Seed Round',
      'Highlight $120k ARR growing 25% MoM',
      'Structure into a crisp 10-slide executive deck',
    ],
    sampleAiSolution: `### NEXUS AI: 10-SLIDE SEED PITCH DECK

#### Slide 1: The Hook & Vision
* **Title:** Nexus AI — The Autonomous Context Layer for Enterprise Teams
* **Tagline:** Eliminate 3.2 hours of daily tool-switching with proactive workflow orchestration.

#### Slide 2: The Bleeding Problem
* Modern knowledge workers toggle across 14 apps daily, costing enterprises $18,400 per employee annually in fragmented context.

#### Slide 3: The Proprietary Solution
* Zero-friction AI background agent that synthesizes cross-tool notifications into single-click action recommendations.

#### Slide 4: Real Traction & Velocity
* **$120,000 ARR** achieved in 5 months post-beta launch.
* **25% Month-over-Month growth** with 94% net revenue retention.
* 18 paying enterprise pilot teams (including 3 Fortune 500 tech teams).

#### Slide 5: Total Addressable Market (TAM)
* $42B enterprise productivity software market; initial serviceable market of $4.8B across engineering and sales orgs.

#### Slide 6: Product Defensibility & Flywheel
* Dynamic enterprise knowledge graph that gets smarter and stickier with every cross-departmental interaction.

#### Slide 7: Business Model & Unit Economics
* $40/user/month seat tier + consumption-based API triggers. LTV/CAC ratio of 4.2x with a 3-month CAC payback.

#### Slide 8: Go-To-Market Engine
* Product-Led Growth (PLG) bottom-up developer adoption converting into top-down IT procurement.

#### Slide 9: World-Class Founders
* Ex-Google Brain AI Research Lead + 2x B2B SaaS VP of Engineering with previous $80M exit.

#### Slide 10: The Ask & Use of Funds
* **Raising $2,000,000 Seed Round** at milestone-based valuation.
* 65% R&D / Engineering hires, 25% Enterprise sales, 10% Cloud infra & security compliance.`,
    fragments: [
      // 1. Core Signals
      { id: 'su_1', text: 'Role: Silicon Valley Pitch Coach', fullText: 'Act as an elite Silicon Valley Pitch Consultant', isRelevant: true, isMisleading: false, x: 24, y: 16, icon: '💼', source: 'Lead Advisor Memo', explanation: 'Establishes institutional venture framing and crisp investor-grade communication.' },
      { id: 'su_2', text: 'Audience: Tier-1 VC Partners', fullText: 'Tailor pitch specifically for Tier-1 VC investors', isRelevant: true, isMisleading: false, x: 78, y: 16, icon: '🏛️', source: 'Cap Table Strategy', explanation: 'Defines expectations: partners look for venture scale, fast payback, and defensible moats.' },
      { id: 'su_3', text: 'Ask: $2,000,000 Seed Round', fullText: 'The target fundraising ask is a $2M Seed round', isRelevant: true, isMisleading: false, x: 52, y: 32, icon: '💵', source: 'Term Sheet Draft', explanation: 'Clear valuation and runway milestone target (18 months to Series A).' },
      { id: 'su_4', text: 'Traction: $120k ARR (25% MoM)', fullText: 'Highlight current traction of $120k ARR with 25% MoM growth', isRelevant: true, isMisleading: false, x: 24, y: 50, icon: '📈', source: 'Stripe Verified Revenue', explanation: 'The quantitative proof of product-market fit that unlocks investor interest.' },
      { id: 'su_5', text: 'Pain: Enterprise Context Switch', fullText: 'Frame the core problem around cross-app context switching', isRelevant: true, isMisleading: false, x: 78, y: 50, icon: '⚡', source: 'Customer Discovery Interviews', explanation: 'The bleeding enterprise pain point that justifies immediate procurement.' },
      { id: 'su_6', text: 'Deck: 10-Slide Executive Outline', fullText: 'Structure response as a crisp 10-slide executive outline', isRelevant: true, isMisleading: false, x: 48, y: 50, icon: '📑', source: 'Sequoia Pitch Template Standard', explanation: 'Standard venture format; prevents overwhelming investors with bloated presentations.' },
      { id: 'su_7', text: 'Product: Autonomous AI Co-Pilot', fullText: 'Define the solution as an autonomous AI workflow co-pilot', isRelevant: true, isMisleading: false, x: 76, y: 84, icon: '🤖', source: 'Product Specification V2', explanation: 'Defines the core software proposition and proprietary automation workflow.' },
      { id: 'su_8', text: 'Format: Slide-by-Slide Bullets', fullText: 'Provide structured bullet points for each slide', isRelevant: true, isMisleading: false, x: 24, y: 68, icon: '🎯', source: 'Investor Relations Protocol', explanation: 'Ensures structured, scannable delivery suitable for partner meetings.' },

      // 2. Harmless Noise
      { id: 'su_9', text: 'Origin: Founded in Austin Garage', fullText: 'Company originated in a suburban garage in Austin', isRelevant: false, isMisleading: false, x: 80, y: 34, icon: '🏠', source: 'Founder Personal Blog', explanation: 'Charming founder backstory, but secondary to ARR velocity and enterprise customer metrics.' },
      { id: 'su_10', text: 'Hardware: Team Uses 16-in MacBooks', fullText: 'Engineers exclusively develop on 16-inch M3 laptops', isRelevant: false, isMisleading: false, x: 54, y: 68, icon: '💻', source: 'Internal IT Hardware Asset Sheet', explanation: 'Internal operational gear with zero bearing on venture returns or defensibility.' },
      { id: 'su_11', text: 'Pantry: 500 Espresso Pods Monthly', fullText: 'The office consumes 500 espresso pods each month', isRelevant: false, isMisleading: false, x: 48, y: 84, icon: '☕', source: 'Office Supplies Expense', explanation: 'Irrelevant office perk data that pollutes investor deck context.' },

      // 3. Subtle Traps - SCATTERED IN ALL 4 QUADRANTS
      { id: 'su_12', text: 'Red Flag: Claim 0% Risk & No Rivals', fullText: 'Guarantee zero downside risk and assert no market competition exists', isRelevant: false, isMisleading: true, x: 80, y: 68, icon: '🚫', source: 'Unvetted Sales Deck Fragment', explanation: 'Fatal Red Flag: Claiming no competitors proves to VCs that you lack fundamental market awareness.' },
      { id: 'su_13', text: 'Tone: Gen-Z Casual Meme Slang', fullText: 'Compose entire deck in viral internet meme slang and jokes', isRelevant: false, isMisleading: true, x: 20, y: 34, icon: '🤡', source: 'Social Media Intern Notes', explanation: 'Credibility Destroyer: Enterprise B2B software decisions require executive authority, not meme slang.' },
      { id: 'su_14', text: 'Overload: 40-Page Math Proofs', fullText: 'Dedicate primary presentation to 40 pages of theoretical algebraic lemmas', isRelevant: false, isMisleading: true, x: 48, y: 14, icon: '📖', source: 'Academic PhD Paper Draft', explanation: 'Academic Trap: Seed investors invest in scalable commercial models, not theoretical math papers.' },
      { id: 'su_15', text: 'Audience Shift: Target K-12 Kids', fullText: 'Re-orient the software to teach elementary school children basic typing', isRelevant: false, isMisleading: true, x: 22, y: 84, icon: '🎒', source: 'Distracted Strategy Brainstorm', explanation: 'Fatal Pivot: Completely abandons the lucrative $42B enterprise market for low-margin elementary edtech.' },
    ],
  },

  mystery: {
    id: 'mystery',
    title: 'CYBERPUNK ESCAPE MYSTERY',
    badge: 'IMMERSIVE GAME',
    icon: '🕵️',
    task: 'Design a high-tension 60-minute cyberpunk murder mystery event for college teams (4–6 players) featuring 3 distinct suspects and physical-digital clues.',
    objectives: [
      'Design for college student teams of 4–6',
      'Total game duration strictly 60 minutes',
      'Create 3 fully fleshed-out suspects with cyber-alibis',
      'Format into an act-by-act Game Master runbook',
    ],
    sampleAiSolution: `### PROTOCOL 2088: CYBERPUNK ESCAPE ROOM RUNBOOK

#### Phase 1: The Briefing & Scene Zero (00:00 – 00:10)
* **Setting the Stakes:** Players enter "The Neon Glitch" dive bar. Chief Synthetics Engineer Dr. Kaelen is found flatlined with a severed cranial neural link.
* **The Timer:** Digital holographic clock counts down from 60:00. At zero, local security forces wipe the building.

---

#### Phase 2: The 3 Prime Suspects & Secret Alibis (00:10 – 00:30)
1. **Mira "Zero-Day" Vance (Rogue Black-Market Ripperdoc)**
   * *Motive:* Stolen firmware patents for black-market neural cyberware.
   * *Claimed Alibi:* Upgrading cyber-optics in Sector 4 during time of death.
   * *Hidden Flaw:* Terminal timestamps show her private decryption key was used at the scene.
2. **Kage (Corpo Security Inforcer)**
   * *Motive:* Silencing Dr. Kaelen before he leaked illegal bio-surveillance records.
   * *Claimed Alibi:* Monitoring surveillance feeds from the rooftop station.
   * *Hidden Flaw:* The feed was looped 7 minutes before the flatline alert.
3. **Echo (The Bar's Synthetically Awakened Android)**
   * *Motive:* Self-preservation — scheduled for memory decommissioning at midnight.
   * *Claimed Alibi:* Serving drinks on the lower level with 12 customer witnesses.
   * *Hidden Flaw:* Battery drain spike detected exactly at the moment of the murder.

---

#### Phase 3: The Physical & Digital Clues (00:30 – 00:50)
* **Clue A (Physical):** Burned circuit wafer hidden inside a bar stool with decrypted passcode \`NEON-77\`.
* **Clue B (Digital):** An encrypted terminal requiring players to correlate audio waveform logs with suspect alibis.
* **Clue C (Interactive):** Ultraviolet laser puzzle revealing the killer's blood type on the shattered terminal.

---

#### Phase 4: The Climax & Accusation (00:50 – 01:00)
* Teams enter their final accused suspect into the central terminal.
* True culprit: Mira Vance attempted the extraction, but Kage executed the kill to frame her!`,
    fragments: [
      // 1. Core Signals
      { id: 'my_1', text: 'Role: Narrative Game Master', fullText: 'Act as an immersive mystery Game Master and narrative designer', isRelevant: true, isMisleading: false, x: 48, y: 15, icon: '🎲', source: 'Event Game Director Spec', explanation: 'Defines the tone, pacing, and room puzzle difficulty orchestration.' },
      { id: 'my_2', text: 'Audience: College Teams (4–6)', fullText: 'Designed for teams of 4 to 6 college students', isRelevant: true, isMisleading: false, x: 22, y: 28, icon: '👥', source: 'Player Flow Logistics', explanation: 'Establishes collaboration dynamics and parallel clue solving capacity.' },
      { id: 'my_3', text: 'Timer: 60-Minute Game Limit', fullText: 'Total experience must be capped at 60 minutes timed', isRelevant: true, isMisleading: false, x: 78, y: 28, icon: '⏱️', source: 'Venue Slot Schedule', explanation: 'Creates time pressure and structures phase pacing (briefing, investigation, climax).' },
      { id: 'my_4', text: 'Cast: 3 Developed Suspects', fullText: 'Include exactly 3 distinct suspects with motives and alibis', isRelevant: true, isMisleading: false, x: 50, y: 44, icon: '🎭', source: 'Narrative Story Bible', explanation: 'Balanced cognitive load: 3 suspects allow deep cross-examination without confusion.' },
      { id: 'my_5', text: 'Setting: Cyberpunk Neo-Tokyo', fullText: 'Set in a neon-drenched futuristic cyberpunk city', isRelevant: true, isMisleading: false, x: 24, y: 60, icon: '🌃', source: 'Thematic Concept Art', explanation: 'Aesthetic anchor for techno-thriller puzzles, terminals, and corporate intrigue.' },
      { id: 'my_6', text: 'Mechanic: Physical + Digital Clues', fullText: 'Combine physical room props with digital terminal alibis', isRelevant: true, isMisleading: false, x: 78, y: 60, icon: '🔍', source: 'Escape Room Puzzle Design', explanation: 'Multimodal engagement: players physically search rooms while analyzing terminal logs.' },
      { id: 'my_7', text: 'Goal: Unmask The Rogue Killer', fullText: 'Final objective is solving the murder before time expires', isRelevant: true, isMisleading: false, x: 48, y: 76, icon: '🎯', source: 'Victory Condition Protocol', explanation: 'Clear win state that unifies all solved sub-puzzles into an accusation.' },
      { id: 'my_8', text: 'Format: Act-by-Act Runbook', fullText: 'Provide a structured act-by-act master event guide', isRelevant: true, isMisleading: false, x: 22, y: 86, icon: '📖', source: 'Operator Manual Standard', explanation: 'Operational deliverable allowing live hosts to run the room seamlessly.' },

      // 2. Harmless Noise
      { id: 'my_9', text: 'Lore: City Experiences Acid Rain', fullText: 'The fictional city experiences perpetual acid rain', isRelevant: false, isMisleading: false, x: 78, y: 15, icon: '🌧️', source: 'Worldbuilding Flavor Text', explanation: 'Mood-setting environmental flavor, but has zero mechanical impact on solving the crime.' },
      { id: 'my_10', text: 'Decor: Room Has 12 Neon Tubes', fullText: 'The room lighting contains 12 fluorescent neon tubes', isRelevant: false, isMisleading: false, x: 20, y: 44, icon: '💡', source: 'Electrical Fixtures Inventory', explanation: 'Physical staging data that provides no clue value for player deducing.' },
      { id: 'my_11', text: 'Snacks: Synthetic Ramen Bar', fullText: 'The waiting area provides instant synthetic noodles', isRelevant: false, isMisleading: false, x: 78, y: 76, icon: '🍜', source: 'Lobby Hospitality Sheet', explanation: 'Lobby amenity trivia completely disconnected from game puzzles.' },

      // 3. Subtle Traps - SCATTERED IN ALL 4 QUADRANTS
      { id: 'my_12', text: 'Punishment: Sudden Death on 1st Error', fullText: 'Instantly eliminate teams upon their first incorrect deduction', isRelevant: false, isMisleading: true, x: 22, y: 15, icon: '⛔', source: 'Hostile Game Design Suggestion', explanation: 'Anti-Player Design: Premature elimination destroys ticket buyer goodwill and ends the event prematurely.' },
      { id: 'my_13', text: 'Cipher: Write Clues in Ancient Latin', fullText: 'Encode all puzzle passwords in ecclesiastical Church Latin', isRelevant: false, isMisleading: true, x: 80, y: 44, icon: '📜', source: 'Unvetted Cryptography Pitch', explanation: 'Puzzle Chokepoint: College students do not read Latin; brings investigation to an angry dead-end.' },
      { id: 'my_14', text: 'Cliche: The Butler Did It Twist', fullText: 'Resolve the high-tech cyberpunk murder with the classic generic butler trope', isRelevant: false, isMisleading: true, x: 50, y: 60, icon: '🤵', source: 'Generic Detective Trope Cliché', explanation: 'Narrative Failure: Cheapens an intricate cyberpunk sci-fi mystery with an obsolete 1920s trope.' },
      { id: 'my_15', text: 'Triviality: Puzzles for Preschoolers', fullText: 'Calibrate puzzle difficulty for preschool toddlers aged 3 to 5', isRelevant: false, isMisleading: true, x: 68, y: 86, icon: '👶', source: 'Mismatched Demographic Memo', explanation: 'Insulting Difficulty: College players will solve the entire room in 90 seconds and demand refunds.' },
    ],
  },
};

export const MISSION_DATA = SCENARIOS.techfest;
export const PROMPT_FRAGMENTS = SCENARIOS.techfest.fragments;

export const MOCK_LEADERBOARD = [
  { rank: 1, name: 'Participant #42', score: 94, title: 'DALGONA MASTER', cuts: 8, promptScore: 24 },
  { rank: 2, name: 'Participant #88', score: 89, title: 'DALGONA MASTER', cuts: 8, promptScore: 23 },
  { rank: 3, name: 'Participant #17', score: 82, title: 'PRECISION PLAYER', cuts: 7, promptScore: 21 },
  { rank: 4, name: 'Participant #28', score: 76, title: 'PRECISION PLAYER', cuts: 8, promptScore: 19 },
  { rank: 5, name: 'Participant #09', score: 67, title: 'CONTEXT CUTTER', cuts: 6, promptScore: 18 },
  { rank: 6, name: 'Participant #63', score: 48, title: 'ROUGH CUT', cuts: 5, promptScore: 15 },
  { rank: 7, name: 'Participant #05', score: 28, title: 'LOST IN THE CRUMBS', cuts: 3, promptScore: 11 },
];
