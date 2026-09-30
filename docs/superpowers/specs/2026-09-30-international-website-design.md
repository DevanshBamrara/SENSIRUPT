# SENSIRUPT — International Website Design Specification

## 1. Executive Summary & Brand Positioning
Sensirupt is a boutique techno-legal advisory bridging Silicon Valley practice with Indian deep-tech ingenuity. It serves international clients across the US, EU, UK, Singapore, and the Middle East: founders, VCs, corporate IP/legal teams, technology licensors, and family offices. The tone is confident, precise, understated, and boardroom-ready.

## 2. Design Rules & Visual Language
* **Design Philosophy:** Match the current Sensirupt aesthetic without introducing dark gradients, neon, emojis, or heavy glassmorphism.
* **Palette:**
  - Sky Blue (Painted): `#2E8BE8` → `#8DBDF0` for hero atmosphere
  - Pale Sky: `#EBF3FB` for light sections (`About`, `Ventures`, cards backdrop)
  - Ink: `#141414` for all primary headlines and dark buttons
  - Slate Blue: `#3F5F86` for secondary body, uppercase small-caps labels
  - Cloud Cream: `#F4EAD5` for warm surface accents
  - Robe Pink: `#E3A19C` for subtle tags and hover accents only
  - Gold: `#C6A15B` reserved strictly for stat numerals, thin rules, scale/sword motifs, and icon strokes
  - White: `#FFFFFF` for cards and pills
* **Typography:**
  - Logo: Bold uppercase geometric sans (`Plus Jakarta Sans`), tight tracking
  - Nav / CTA pills / labels: Uppercase sans, medium weight, wide tracking (`0.06em`), 13–14px
  - Headlines: Two-voice system pairing high-contrast editorial serif (`Fraunces` / italic) with bold geometric sans
  - Body: Regular geometric sans, 17–19px, generous line-height (~1.6)
  - Stat numerals: Bold serif in gold (`#C6A15B`) with slate-blue uppercase captions

## 3. Page Structure & Component Details
1. **Header / Navbar (`#`)**:
   - Transparent sticky nav over hero, turns white with hairline shadow on scroll.
   - Logo: `SENSIRUPT` (tight tracking).
   - Centered links: `About` (`#about`), `Expertise` (`#expertise`), `Ventures` (`#ventures`), `Contact` (`#contact`).
   - CTA right: White pill button `Book Briefing →`.
   - Mobile: Responsive slide drawer with clean links and CTA.
2. **Hero Section**:
   - Left 65%: Editorial headline `Sensible Disruption` (italic serif) over `for Technology Leaders.` (bold geometric sans).
   - Sub-copy: *"We replace fragmented advice with a single, implementation-ready roadmap. Integrating finance, law and technology to turn innovation into high-ROI assets."*
   - Frosted translucent input pill with placeholder *"Ask about protecting your IP…"* and white `BOOK BRIEFING →` pill button.
   - Micro-line under pill: `Cross-border IP · Technology transactions · Venture diligence`.
   - Right 35%: Lady Justice artwork cutout with golden scales and sword.
3. **About Section (`#about`)**:
   - Pale sky background (`#EBF3FB`), centered headline: `Bridging Silicon Valley Grit with Indian Ingenuity.`
   - Centered paragraph: *"Sensirupt is a boutique techno-legal advisory, founded by former directors of US multinationals. We give global founders, funds and corporates a single point of accountability across intellectual property, technology transactions and deal structuring. One integrated strategy that supports exits, not just filings."*
   - Hairline divider.
   - 3 stats with gold serif numerals and slate-blue uppercase captions:
     * `90%+` Tech Degrees
     * `$2.5B+` Deal Advisory
     * `20+ Yrs` Global XP
4. **Expertise Section (`#expertise`)**:
   - Heading: `Finance-Aware Techno-Legal Strategy.`
   - Intro sub-line: *"Legal architecture designed around the balance sheet, the term sheet and the exit."*
   - 4-card grid:
     1. `IP Strategy & Valuation`: Monetising patents and intangible assets, with claim architecture that stands up in financing and M&A. (Tags: Patent prosecution (India · US · PCT) · Prior-art intelligence · Relief-from-royalty & DCF valuation)
     2. `Tech Law & Transactions`: Structuring high-stakes, IP-centric alliances and technology conveyance across borders. (Tags: Licensing & cross-licensing · Technology transfer · Joint development & co-ownership)
     3. `Venture Advisory`: Techno-legal due diligence for funds and VCs, from clean IP title to defensibility of the moat. (Tags: IP title diligence · Cap-table & portfolio risk review · Term sheet & SHA technical protections)
     4. `Privacy & Media Law`: Navigating complex data-protection and entertainment regulation. (Tags: GDPR & DPDP compliance · DPIA · Rights acquisition & content licensing)
   - "Learn More →" on cards opens a practice drawer with the detailed 10-module scope.
5. **Ventures Section (`#ventures`)**:
   - Heading: `Breakthroughs Scaled to 9 Figures.`
   - Sub-line: *"Innovations we have strategised, funded and protected."*
   - 6 cards in 3×2 grid:
     1. Clean Air Technology (CleanTech · Academic spin-out) — Origin: IIT Kanpur, IIT Bombay & IISc Bangalore — Won: National television funding. Patented breakthrough filtration.
     2. Water Conservation (Sustainability · Infrastructure) — Origin: Institutional Infrastructure — Secured: National TV funding and a green-tech patent portfolio.
     3. Folding EV Mobility (Hardware · Electric mobility) — Origin: World-first diamond-frame design — Secured: National TV funding, international trademark and design patent.
     4. Self-Balancing Gyro Tech (Automotive · Electric mobility) — Origin: Mentored by ARAI & the Ministry of Heavy Industries — Featured: Auto Expo 2023, Delhi. Invited by SINE, IIT Bombay to mentor other ventures.
     5. Immersive 3D Platform (Spatial computing · AI/XR) — Origin: IIT Delhi startup — Results: ₹100 Cr turnover. $6.5M Series A from Siana Capital & Chiratae Ventures.
     6. FDA-Cleared Medical Device (MedTech · Early diagnostics) — Origin: Global health innovation — Results: $3M Series A. Backed by Biocon. Featured in a BBC documentary.
   - Footnote: *"Client identities are described to the extent permitted by professional confidentiality."*
6. **Contact Section (`#contact`) & Footer**:
   - Heading: `Disrupt Sensibly. Let's talk.`
   - Copy: *"Connect directly with our boutique techno-legal advisory team for a confidential, conflict-checked consultation."*
   - Button: `Book Briefing →` (opens confidential consultation desk modal).
   - Details block:
     * Address: `[PLACEHOLDER: Office Address / Corporate Chambers]`
     * Email: `[PLACEHOLDER: Email Address]`
     * Contact: `+91 [PLACEHOLDER: Contact Number]`
   - Direct confidential inquiry form with honeypot field.
   - Footer: `SENSIRUPT — © 2026 All rights reserved.` with links `Confidentiality Policy` and `Terms of Advisory`.
7. **Interactive Components & Modals**:
   - `ConsultationModal`: Quick, confidential briefing modal for conflict-checked inquiries (prefilled with card context if clicked from cards).
   - `ExpertiseScopeDrawer`: Clean slide-over drawer detailing the 10-module practice scope.
8. **Technical Performance & SEO**:
   - Updated meta tags, title: `Sensirupt | Techno-Legal & IP Advisory for Technology Leaders`
   - Description matching brief Section 5.1
   - JSON-LD structured data for LegalService/Organization and OfferCatalog
   - Fast, zero layout shift (CLS < 0.1), accessible (WCAG 2.1 AA), `prefers-reduced-motion` support.
