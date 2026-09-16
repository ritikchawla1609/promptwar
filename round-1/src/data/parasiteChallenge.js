// PROMPT PARASITE // CHALLENGE DATA SPECIFICATION
// Official Round 1 Dataset & Anonymous Opponent Hosts

export const DEFAULT_CHALLENGE = {
  id: 'the-registration-problem',
  code: 'CHALLENGE_01',
  title: 'THE REGISTRATION PROBLEM',
  category: 'GROWTH ARCHITECTURE & CAMPAIGN DESIGN',
  brief:
    'Using AI, create a complete, practical, and creative marketing campaign to achieve 500 registrations for a college technology event within 7 days.',
  constraints: [
    {
      label: 'OBJECTIVE',
      value: '500 Registrations',
      detail: 'Verified attendee signups with confirmation emails/tickets.',
    },
    {
      label: 'TIMEFRAME',
      value: '7 Days',
      detail: 'Day 01 Launch to Day 07 11:59 PM Registration Deadline.',
    },
    {
      label: 'AUDIENCE',
      value: 'College Students',
      detail: 'Undergrads (18–24), tech-enthusiasts, designers, problem-solvers.',
    },
    {
      label: 'BUDGET',
      value: '₹10,000 Cap',
      detail: 'Strict fiscal limit. Must account for ads, prizes, or materials.',
    },
    {
      label: 'PLATFORMS',
      value: 'Instagram • WhatsApp • Campus',
      detail: 'Digital virality + ground guerilla activations.',
    },
  ],
  requirements: [
    'Clear Day-by-Day sprint schedule (Day 1 to Day 7)',
    'Exact ₹10,000 budget line-item allocation',
    'Specific WhatsApp & Instagram engagement hooks / scripts',
    'Campus guerrilla tactics that drive offline-to-online conversion',
    'Contingency trigger if registrations lag behind by Day 4',
  ],
  defaultTimers: {
    create: 600, // 10:00
    parasite: 300, // 05:00
    evolve: 600, // 10:00
  },
};

// Anonymous Host Solutions for Dynamic Matchmaking & Demonstration
export const ANONYMOUS_HOST_OUTPUTS = [
  {
    id: 'host_alpha',
    anonymousId: 'UNKNOWN 01',
    archetype: 'GUERRILLA AMBASSADOR NETWORK',
    output: `### CAMPAIGN: "PROJECT BLACKOUT" — 500 REGISTRATIONS IN 168 HOURS

#### 1. Strategic Core & Positioning
College students ignore traditional posters. We frame registration not as "signing up for a talk" but as securing "Early Clearance" for a restricted-access hack matrix. 

#### 2. Fiscal Allocation (Total: ₹10,000)
* **₹4,500 — Campus Ambassador Bounty Pool:** 15 selected class reps given unique referral tracking links. The top 3 ambassadors driving >40 registrations win ₹2,000, ₹1,500, and ₹1,000 cash prizes.
* **₹3,000 — Meta Ads (Instagram Reels & Stories):** Hyper-targeted within 5km radius of campus, ages 18–23. ₹600/day across Days 2–6.
* **₹1,500 — Guerrilla QR Drop:** 200 high-contrast yellow caution-tape stickers placed across library desks, canteen trays, and elevator doors with zero branding—just a cryptographic QR code leading to the registration portal.
* **₹1,000 — Contingency Booster:** Reserved for emergency Day 6 SMS/WhatsApp broadcast burst.

#### 3. Day-by-Day Execution Matrix
* **Day 1 (The Leak):** 15 ambassadors post a mysterious 6-second glitched reel on their personal WhatsApp stories. Link goes live at 9:00 PM. Target: 60 early registrations.
* **Day 2 (Campus Ambush):** Caution tape QR stickers deployed across high-footfall spots. Meta ad campaign begins with video testimonials of last year's winners. Target: 90 registrations (Cumulative: 150).
* **Day 3 (Department Blitz):** WhatsApp class groups receive a one-click prefilled message: "CS, IT & Electronics have filled 70% of seats. Mechanical & Civil lagging." Leveraging inter-department rivalry. Target: 80 registrations (Cumulative: 230).
* **Day 4 (The Midway Pivot):** Host an Instagram Live trivia with instant tech goodies. Every viewer who registers during the stream gets priority project judging. Target: 75 registrations (Cumulative: 305).
* **Day 5 (FOMO Surge):** Announcement of key keynote speakers & corporate recruiting scout attendance. Target: 85 registrations (Cumulative: 390).
* **Day 6 (The Golden Hour):** Deploy the ₹1,000 emergency fund for Meta Retargeting to cart-abandoners who clicked the link but didn't submit. Target: 70 registrations (Cumulative: 460).
* **Day 7 (Hard Lockdown):** Live counter on Instagram stories: "Final 40 Slots Before Portal Purge." Target: 40 registrations (Final: 500+).

#### 4. Conversion Mechanism
One-click WhatsApp OTP registration via pre-configured form. No 15-field Google Forms. Time to complete: 18 seconds.`,
  },
  {
    id: 'host_beta',
    anonymousId: 'UNKNOWN 02',
    archetype: 'MATHEMATICAL FUNNEL & PAID VIRALITY',
    output: `### EXECUTION BLUEPRINT: "ALGO-DRIVE 500"

#### 1. Funnel Architecture
To capture 500 verified tickets with an estimated 8% landing page conversion rate, we need 6,250 unique landing page visitors over 7 days (~892 daily visitors).

#### 2. Budget Math & Optimization (₹10,000)
* **Meta Ads (Carousel & Story Ads): ₹5,000**
  * Target CPC: ₹2.00 → yields 2,500 high-intent link clicks.
  * Creatives: "Show your GitHub vs Show your Resume" comparison meme format.
* **WhatsApp Community Blast & API Gateway: ₹2,000**
  * Automated WhatsApp broadcast to 35 verified college societies across 6 sister universities.
* **Viral Referral Incentive (Swag & Certificates): ₹2,500**
  * "Bring 3 Squad Members" unlock rule: If you register and get 3 friends to sign up with your code, all 4 get VIP fast-track networking passes + event stickers.
* **Buffer Reserve: ₹500**

#### 3. 7-Day Sprint Milestones
* **Phase 1: The Foundation (Days 1–2):** Deploy fast mobile landing page (<1.2s load speed). Launch Squad Referral engine. Seed announcements in 12 major engineering subreddits & regional Discord servers. Target: 120 signups.
* **Phase 2: Scale Through Proof (Days 3–4):** Release speaker profiles and project problem statements. Run A/B tested Instagram Reels. Department ambassadors run cafeteria table kiosks with direct tablet registrations. Target: 180 signups (Cumulative: 300).
* **Phase 3: The Crunch (Days 5–6):** Activate Squad Referrals leaderboard. The top squad gets free entry to an exclusive closed-door AI agent workshop. Drive peer-to-peer peer pressure. Target: 140 signups (Cumulative: 440).
* **Phase 4: Midnight Closure (Day 7):** Countdown timer banner with live seat subtraction ticker. Final WhatsApp blast to society presidents. Target: 60 signups (Total: 500).

#### 4. Key De-Risking Factors
* Eliminating login friction: Sign in with Google / GitHub enabled.
* Mobile-first responsive UX: 94% of traffic expected on mobile devices.`,
  },
  {
    id: 'host_gamma',
    anonymousId: 'UNKNOWN 03',
    archetype: 'CULTURAL MOMENTUM & PEER PRESSURE',
    output: `### CAMPAIGN BLUEPRINT: "THE 7-DAY ZERO PROTOCOL"

#### 1. Thesis
Events don't fail because students lack time; they fail because marketing looks like institutional spam. We turn registration into a cultural status symbol on campus.

#### 2. Budget Breakdown (₹10,000)
* **₹3,500 — Micro-Prizes & Daily Drop Incentives:** 1 tech accessory (wireless earbuds, mechanical keyboard keycaps) raffled daily among everyone registered by 6 PM.
* **₹3,000 — Influential Senior Endorsements:** Commission 6 widely-followed campus seniors (tech club leads, debate captains) to shoot candid 15-second "Why I'm attending" reels.
* **₹2,000 — WhatsApp Chain-Reaction Template:** Craft engaging markdown messages formatted with spoiler tags and clean formatting for 80+ informal student groups.
* **₹1,500 — Physical Ambient Props:** Cardboard life-size standees with cutout photo-ops placed outside campus libraries and cafes with QR handles.

#### 3. Operational Timeline
* **Day 1:** The Unveiling. 6 campus leads post synchronized Instagram reels. First daily prize winner announced at 8 PM. (70 signups).
* **Day 2:** The WhatsApp Infiltration. Clean, non-spammy broadcasts detailing prize tracks and project mentors. (80 signups).
* **Day 3:** Flash Registration Hour (2 PM - 4 PM). Extra bonus raffle tickets during this 2-hour window. (90 signups).
* **Day 4:** Live Coding Challenge teaser drop. Announce hackathon themes. (85 signups).
* **Day 5:** Mid-campaign audit. Direct follow-up with past event attendees through email & WhatsApp. (75 signups).
* **Day 6:** "Only 60 seats remain in Section B". (60 signups).
* **Day 7:** Final 24-hour sprint. Last raffle draw + ceremonial roster lock. (50 signups). Total: 510 registrations.`,
  },
];
