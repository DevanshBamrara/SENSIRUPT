# Sensirupt International Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Sensirupt international marketing website using the verbatim brief, exact color system, two-voice typography, 10-module expertise scope, ventures portfolio, and conflict-checked briefing flow.

**Architecture:** Single-page scroll layout (`#about`, `#expertise`, `#ventures`, `#contact`) with a painted sky hero featuring Lady Justice, high-contrast typography, an expertise slide-over drawer for deep practice scope, and a confidential inquiry briefing modal.

**Tech Stack:** React 18, TypeScript, Tailwind CSS, Lucide React, Framer Motion, Vite.

## Global Constraints
- Copy used verbatim from Section 3 of the brief; no invented statistics, awards, or sections.
- Where a value is marked `[PLACEHOLDER]`, leave it as a visible placeholder.
- Color system: Sky blue (`#2E8BE8` → `#8DBDF0`), Pale sky (`#EBF3FB`), Cloud cream (`#F4EAD5`), Robe pink (`#E3A19C` accents only), Gold (`#C6A15B` for numerals, rules, icon strokes), Ink (`#141414`), Slate blue (`#3F5F86`), White (`#FFFFFF`).
- Never use: neon, purple/teal gradients, dark mode gradients, glowing shadows, glassmorphism overload, gradient text, or emojis.
- Glass is permitted in exactly one place: the hero input pill.
- No Calendly embed at this time (per user direction); use the confidential advisory briefing modal.
- Respect `prefers-reduced-motion`.
- Fully responsive from 375px mobile to 1280px+ desktop.

---

### Task 1: Design Tokens & Core Theme Setup
**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

- [ ] **Step 1:** Update `tailwind.config.js` with exact palette hexes: `sky.hero`, `sky.pale` (`#EBF3FB`), `gold.stat` (`#C6A15B`), `slate.body` (`#3F5F86`), `robe.pink` (`#E3A19C`), `cloud.cream` (`#F4EAD5`), `ink.headline` (`#141414`).
- [ ] **Step 2:** Refine `src/index.css` custom styles: ensure smooth typography styles for Fraunces (serif) and Plus Jakarta Sans, card hairline rules, and zero layout shift.
- [ ] **Step 3:** Test build with `npm run build` to verify configuration syntax.

---

### Task 2: Navbar Component Refinement
**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1:** Match brand logo: `SENSIRUPT` in bold geometric uppercase with tight tracking.
- [ ] **Step 2:** Implement navigation links: `About`, `Expertise`, `Ventures`, `Contact` (`#about`, `#expertise`, `#ventures`, `#contact`) in uppercase sans, 13–14px, wide tracking (`0.06em`).
- [ ] **Step 3:** Style the right CTA: White pill button with uppercase `Book Briefing →`, smooth transition on scroll (transparent over hero, crisp white with hairline border on scroll).
- [ ] **Step 4:** Ensure clean mobile drawer layout with matching typography.

---

### Task 3: Hero Section Implementation
**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1:** Implement two-voice H1: `Sensible Disruption` in high-contrast editorial italic serif, and `for Technology Leaders.` in bold geometric sans.
- [ ] **Step 2:** Add exact sub-copy: *"We replace fragmented advice with a single, implementation-ready roadmap. Integrating finance, law and technology to turn innovation into high-ROI assets."*
- [ ] **Step 3:** Implement the frosted glass input pill with placeholder *"Ask about protecting your IP…"* and white `BOOK BRIEFING →` pill button on the right.
- [ ] **Step 4:** Add the micro-line under the pill: `Cross-border IP · Technology transactions · Venture diligence` in slate blue (`#3F5F86`).
- [ ] **Step 5:** Position Lady Justice on the right (~35% desktop) ensuring scales and sword are uncropped, and graceful responsive positioning on mobile.

---

### Task 4: About Section Implementation
**Files:**
- Modify: `src/components/AboutUs.tsx`

- [ ] **Step 1:** Set section background to pale sky (`#EBF3FB`) with subtle borders.
- [ ] **Step 2:** Add H2: `Bridging Silicon Valley Grit with Indian Ingenuity.` (with `Silicon Valley Grit` in italic serif).
- [ ] **Step 3:** Insert verbatim paragraph copy.
- [ ] **Step 4:** Add hairline rule and the 3 stats separated by vertical hairlines:
  - `90%+` Tech Degrees
  - `$2.5B+` Deal Advisory
  - `20+ Yrs` Global XP
  (Gold serif numerals `#C6A15B`, uppercase slate-blue captions `#3F5F86`).

---

### Task 5: Expertise Section & Scope Slide-Over Drawer
**Files:**
- Modify: `src/components/Expertise.tsx`
- Create: `src/components/ExpertiseDrawer.tsx`

- [ ] **Step 1:** Implement H2: `Finance-Aware Techno-Legal Strategy.` (with `Techno-Legal` in italic serif) and intro line: *"Legal architecture designed around the balance sheet, the term sheet and the exit."*
- [ ] **Step 2:** Build 4-column desktop / 2×2 tablet cards:
  1. `IP Strategy & Valuation`
  2. `Tech Law & Transactions`
  3. `Venture Advisory`
  4. `Privacy & Media Law`
  With exact one-line descriptions and 3 tags each.
- [ ] **Step 3:** Implement `ExpertiseDrawer.tsx` to display the detailed 10-module practice map when "Learn More →" is clicked, or allow one-click briefing scheduling.

---

### Task 6: Ventures Section Implementation
**Files:**
- Modify: `src/components/Ventures.tsx`

- [ ] **Step 1:** Set H2: `Breakthroughs Scaled to 9 Figures.` (with `9 Figures` in italic serif) and sub-copy: *"Innovations we have strategised, funded and protected."*
- [ ] **Step 2:** Build 3×2 grid of 6 case cards with gold small-caps sector tags:
  1. Clean Air Technology (`CleanTech · Academic spin-out`)
  2. Water Conservation (`Sustainability · Infrastructure`)
  3. Folding EV Mobility (`Hardware · Electric mobility`)
  4. Self-Balancing Gyro Tech (`Automotive · Electric mobility`)
  5. Immersive 3D Platform (`Spatial computing · AI/XR`)
  6. FDA-Cleared Medical Device (`MedTech · Early diagnostics`)
  Each with exact origin, description, outcome lines (`Won:`, `Secured:`, `Featured:`, `Results:`), and `Curious? →`.
- [ ] **Step 3:** Add confidentiality footnote under the grid: *"Client identities are described to the extent permitted by professional confidentiality."*

---

### Task 7: Contact Section & Confidential Advisory Desk Modal
**Files:**
- Modify: `src/components/ContactFooter.tsx`
- Modify: `src/components/ConsultationModal.tsx`

- [ ] **Step 1:** Implement H2: `Disrupt Sensibly. Let's talk.` (with `Disrupt Sensibly.` in italic serif).
- [ ] **Step 2:** Verbatim copy and `Book Briefing →` button.
- [ ] **Step 3:** Details block with visible placeholders:
  - Address: `[PLACEHOLDER: Office Address / Corporate Chambers]`
  - Email: `[PLACEHOLDER: Email Address]`
  - Contact: `+91 [PLACEHOLDER: Contact Number]`
- [ ] **Step 4:** Clean, lightweight inquiry form with honeypot field, practice area selection, and conflict check confirmation.
- [ ] **Step 5:** Footer line: `SENSIRUPT — © 2026 All rights reserved.` with links `Confidentiality Policy` and `Terms of Advisory`.

---

### Task 8: App Integration, SEO Meta, and Verification
**Files:**
- Modify: `src/App.tsx`
- Modify: `index.html`

- [ ] **Step 1:** Wire up `ExpertiseDrawer` and `ConsultationModal` in `App.tsx`.
- [ ] **Step 2:** Update `index.html` with title, meta tags, and JSON-LD structured data matching Section 5.1 of the brief.
- [ ] **Step 3:** Run `npm run build` to verify type safety and zero build warnings.
