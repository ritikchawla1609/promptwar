// Storm Information Cards Data & Mission Configurations for Prompt War: Information Storm

export const STORM_CARDS = [
  // 1. CRITICAL (GREEN) - 30 Points potential
  {
    id: 'c1',
    type: 'EMAIL',
    sender: 'finance.lead@campus.edu',
    subject: 'APPROVED CAMPAIGN BUDGET ALLOCATION',
    content: 'Final sign-off confirmed: You have exactly ₹15,000 marketing budget. Do not exceed this limit.',
    category: 'CRITICAL',
    points: 6,
    badgeText: 'FINANCE SIGN-OFF',
    lifespan: 8,
    speed: 0.6,
  },
  {
    id: 'c2',
    type: 'WHATSAPP',
    sender: 'DevClub President',
    content: 'Crucial deadline update: The entire marketing sprint must execute within 7 days before registrations lock!',
    category: 'CRITICAL',
    points: 6,
    badgeText: 'TIMELINE',
    lifespan: 8,
    speed: 0.7,
  },
  {
    id: 'c3',
    type: 'NOTIFICATION',
    sender: 'SYSTEM ALERT',
    content: 'Target Demographic: First-year & Second-year Undergraduate Engineering Students (Ages 18–22).',
    category: 'CRITICAL',
    points: 6,
    badgeText: 'DEMOGRAPHIC',
    lifespan: 5,
    speed: 1.1,
  },
  {
    id: 'c4',
    type: 'DATA',
    sender: 'ANALYTICS ENGINE',
    content: 'PRIMARY KPI: Secure minimum 500 verified event registrations.',
    category: 'CRITICAL',
    points: 6,
    badgeText: 'KPI TARGET',
    lifespan: 8,
    speed: 0.5,
  },
  {
    id: 'c5',
    type: 'DOCUMENT',
    sender: 'MEDIA CHARTER',
    content: 'Authorized promotional channels: Exclusively Instagram Reels/Stories and WhatsApp Community Broadcasts.',
    category: 'CRITICAL',
    points: 6,
    badgeText: 'CHANNELS',
    lifespan: 8,
    speed: 0.6,
  },

  // 2. USEFUL SUPPORTING (YELLOW) - Bonus Intelligence
  {
    id: 's1',
    type: 'EMAIL',
    sender: 'creative.head@techfest.org',
    subject: 'Brand Voice & Creative Guidelines',
    content: 'Tone must be high-energy, competitive, and challenge-driven with meme culture hooks.',
    category: 'SUPPORTING',
    points: 4,
    badgeText: 'CREATIVE TONE',
    lifespan: 5,
    speed: 0.8,
  },
  {
    id: 's2',
    type: 'WHATSAPP',
    sender: 'Gaming Club Lead',
    content: 'We have ₹50,000 worth of sponsor goodies & swag to distribute to top referral ambassadors.',
    category: 'SUPPORTING',
    points: 4,
    badgeText: 'INCENTIVES',
    lifespan: 6,
    speed: 0.7,
  },
  {
    id: 's3',
    type: 'DATA',
    sender: 'TELEMETRY 2025',
    content: 'Last year 62% of registrations originated from Instagram Stories with interactive countdown stickers.',
    category: 'SUPPORTING',
    points: 4,
    badgeText: 'HISTORIC DATA',
    lifespan: 5,
    speed: 0.9,
  },
  {
    id: 's4',
    type: 'DOCUMENT',
    sender: 'EVENT TRACKS',
    content: 'Core competitions: Speed Coding Hackathon, Valorant Championship, AI Prompt Battle.',
    category: 'SUPPORTING',
    points: 4,
    badgeText: 'EVENT TRACKS',
    lifespan: 7,
    speed: 0.6,
  },

  // 3. NOISE (RED) - Irrelevant Distractions (0 pts / slight penalty)
  {
    id: 'n1',
    type: 'MEMO',
    sender: 'Campus Admin',
    content: 'Campus Historical Fact: The University main library was established in October 1994 by the governor.',
    category: 'NOISE',
    points: -2,
    badgeText: 'CAMPUS TRIVIA',
    lifespan: 4,
    speed: 1.2,
  },
  {
    id: 'n2',
    type: 'NOTIFICATION',
    sender: 'Cafeteria Broadcast',
    content: 'Today lunch special: Paneer Butter Masala and Cold Brew Coffee available at Block C counter.',
    category: 'NOISE',
    points: -2,
    badgeText: 'CAFETERIA',
    lifespan: 3,
    speed: 1.4,
  },
  {
    id: 'n3',
    type: 'WHATSAPP',
    sender: 'Badminton Captain',
    content: 'Practice match moved from 5:00 PM to 6:30 PM due to rain on the outdoor court.',
    category: 'NOISE',
    points: -2,
    badgeText: 'SPORTS',
    lifespan: 4,
    speed: 1.1,
  },
  {
    id: 'n4',
    type: 'DATA',
    sender: 'FACILITIES HUD',
    content: 'Campus has 450 neem trees and 5 academic blocks spread across 84 acres.',
    category: 'NOISE',
    points: -2,
    badgeText: 'BUILDINGS',
    lifespan: 4,
    speed: 1.3,
  },
  {
    id: 'n5',
    type: 'DOCUMENT',
    sender: 'ARCHIVES',
    content: 'Founding principal published a research monograph on thermodynamics in 1982.',
    category: 'NOISE',
    points: -2,
    badgeText: 'HISTORICAL',
    lifespan: 3,
    speed: 1.5,
  },

  // 4. POISON / MISLEADING (BLACK) - Penalty (-5 pts if captured)
  {
    id: 'p1',
    type: 'ALERT',
    sender: 'OUTDATED DRAFT',
    content: 'REVISED BUDGET DRAFT: Spend ₹85,000 on outdoor hoardings and printed flyers. [VOID / OVERRULED]',
    category: 'POISON',
    points: -6,
    badgeText: 'VOID DRAFT',
    lifespan: 5,
    speed: 0.9,
  },
  {
    id: 'p2',
    type: 'EMAIL',
    sender: 'scam.alert@unverified.net',
    subject: 'Marketing Timeline Extension',
    content: 'Campaign execution has been extended to 30 days. Take your time with marketing. [FALSE]',
    category: 'POISON',
    points: -6,
    badgeText: 'UNVERIFIED',
    lifespan: 4,
    speed: 1.0,
  },
  {
    id: 'p3',
    type: 'NOTIFICATION',
    sender: 'DEPRECATED DIRECTIVE',
    content: 'Primary target audience changed to Alumni and Senior Faculty Members. [ERRONEOUS]',
    category: 'POISON',
    points: -6,
    badgeText: 'ERRONEOUS',
    lifespan: 4,
    speed: 1.2,
  },
  {
    id: 'p4',
    type: 'WHATSAPP',
    sender: 'Unknown Number',
    content: 'Stop using Instagram; all college students only use Facebook Groups now. [MISLEADING]',
    category: 'POISON',
    points: -6,
    badgeText: 'MISLEADING',
    lifespan: 4,
    speed: 1.1,
  }
];

export const REVEALED_MISSION = {
  title: 'COLLEGE TECHFEST LAUNCH BLITZ',
  task: 'Create a practical 7-day tactical marketing strategy to achieve 500 event registrations with ₹15,000 budget.',
  requirements: [
    'Strict 7-Day Day-by-Day Tactical Execution Plan',
    'Allocate exactly ₹15,000 budget with channel breakdown',
    'Target Undergraduate Engineering Students (18–22)',
    'Focus on Instagram (Reels/Stories) and WhatsApp Broadcasts',
    'Reach minimum 500 verified registrations'
  ],
  sampleSolution: `### TECHFEST 7-DAY HYPER-TACTICAL MARKETING WEAPON

#### 1. Strategic Resource Allocation (Total ₹15,000 Cap)
* **Instagram High-Conversion Reels & Stories Ads:** ₹8,000 (53.3%)
  * Target: Ages 18–22, 10km campus radius, interests in Coding, Esports & AI.
* **Campus WhatsApp Ambassador Viral Contest:** ₹4,500 (30.0%)
  * Tiered cash vouchers (₹2k, ₹1.5k, ₹1k) for top 3 student referral leads.
* **Micro-Influencer & Tech Club Cross-Collabs:** ₹2,500 (16.7%)
  * Sponsor goodies package + direct broadcast placement.

---

#### 2. Phased 7-Day Blitz Schedule
* **Day 1: The Teaser Drop & WhatsApp Blast**
  * Launch 15-second teaser reel showing ₹50k prize pool and Valorant/AI tracks.
  * WhatsApp broadcast with instant 1-click registration link to all class CRs.
* **Day 2: Coding Hackathon Challenge**
  * "Crack the Bug" Instagram Story riddle: First 50 correct answers get free VIP fast-track pass.
* **Day 3: Valorant Gaming Battle Polls**
  * Interactive Instagram polls ("Duelist vs Controller") with ₹1,000 targeted booster.
* **Day 4: AI Prompt Battle Reveal & Early Bird Urgency**
  * Announce AI competition track. WhatsApp broadcast: "Only 48 hours for Early Bird badges!"
* **Day 5: Behind The Scenes & Prize Pool Showcase**
  * Live Q&A with past champions; reveal physical trophies and sponsor goodies.
* **Day 6: FOMO Sprint (Countdown 24h)**
  * Retargeting ad blitz (₹2,500) targeting all profile visitors: "Last 100 slots remaining."
* **Day 7: Final Lockdown & Midnight Cut-off**
  * Dual WhatsApp blast at 12:00 PM and 7:00 PM: "Registration closes at 11:59 PM."

---

#### 3. Expected Yield Metrics
* Projected Total Reach: 35,000+ Students
* Projected CPR (Cost Per Registration): ₹28 - ₹30
* Projected Registrations: 500 - 540 Verified Attendees`
};
