# KMR Shift — Site Copy Inventory

**Purpose:** This document lists every piece of user-facing text on the KMR Shift marketing site (single landing page) so the content team can review it. That includes visible copy, button labels, form text, status messages, screen-reader-only text, alt text, aria-labels and page metadata.

**Brand voice, inferred from the current copy:**

- **Engineering-first and precise.** The copy names concrete technologies (Access, FoxPro, Visual Basic, React, PostgreSQL), phases and measurable outcomes. It avoids vague marketing adjectives.
- **Swiss/technical tone.** Short declarative sentences, with mono-font "system" labels styled like code identifiers (`Phase_01`, `Sys.status — operational`, "Service inventory"). It sounds controlled, rigorous and low on hype.
- **Reassuring about risk.** The copy keeps coming back to preserving business logic, zero integrity loss, running in parallel and honest assessment.
- **Typography conventions:** curly apostrophes (’), spaced em dashes ( — ) and the ellipsis character (…).

**How to review:** Mark edits inline, or put your proposed wording in the **Suggested** column of each table. Leave a cell empty to keep the current text. Text is copied verbatim from the source. Where CSS shows text in uppercase, the table gives the source casing and notes *(displayed uppercase)*. Generated text is shown as it renders.

---

## Page metadata

Source: `src/app/layout.tsx`

| Element | Current text | Suggested |
|---|---|---|
| Page title (browser tab / search result) | KMR Shift — Legacy Systems. Modern Solutions. | |
| Meta description | KMR Shift modernizes legacy desktop software into fast, secure web applications while preserving the business logic you depend on. | |

---

## 1. Site header

Source: `src/components/site-header.tsx` (nav labels from `src/lib/site.ts`)

| Element | Current text | Suggested |
|---|---|---|
| Skip link (SR-only, visible on keyboard focus) | Skip to content | |
| Logo — Alt text | KMR Shift | |
| Nav — aria-label | Main | |
| Nav link 1 (→ #services) | Services | |
| Nav link 2 (→ #approach) | Our Approach | |
| Nav link 3 (→ #work) | Work | |
| Nav link 4 (→ #about) | About | |
| Button (primary, desktop) | Discuss Your System → | |

### 1a. Mobile navigation

Source: `src/components/mobile-nav.tsx`

| Element | Current text | Suggested |
|---|---|---|
| Menu toggle button — aria-label | Main menu | |
| Mobile nav — aria-label | Mobile | |
| Nav link 1 | Services | |
| Nav link 2 | Our Approach | |
| Nav link 3 | Work | |
| Nav link 4 | About | |
| Button (primary, full width) | Discuss Your System → | |

*Note: the → arrow on every ButtonLink (`src/components/button-link.tsx`) is decorative and hidden from screen readers.*

---

## 2. Hero

Source: `src/components/hero.tsx`

| Element | Current text | Suggested |
|---|---|---|
| Eyebrow — part 1 *(displayed uppercase)* | Legacy systems | |
| Eyebrow — arrow (decorative, aria-hidden) | → | |
| Eyebrow — SR-only connector | to | |
| Eyebrow — part 2 *(displayed uppercase)* | Modern web solutions | |
| H1 line 1 | Your legacy system. | |
| H1 line 2 (brand colour) | Ready for what’s next. | |
| Body | We modernize outdated desktop software into fast, secure web applications — preserving the business logic you depend on while giving your team the tools to move forward. | |
| Button (primary, → #services) | Explore Modernization → | |
| Button (secondary, → #contact) | Discuss Your System → | |
| Visual frame 1 — caption number | 01 | |
| Visual frame 1 — caption label *(displayed uppercase)* | Legacy desktop | |
| Visual frame 1 — Alt text | Legacy desktop software interface before modernization | |
| Visual frame 2 — caption number | 02 | |
| Visual frame 2 — caption label *(displayed uppercase)* | Modern web app | |
| Visual frame 2 — Alt text | Modern web application interface after modernization | |

---

## 3. Capabilities

Source: `src/components/capabilities.tsx` (section id `#services`)

| Element | Current text | Suggested |
|---|---|---|
| H2 | Core Capabilities | |
| Side label *(displayed uppercase; hidden on mobile)* | Service inventory | |
| Item 1 — number | 01 | |
| Item 1 — H3 | Web Reconstruction | |
| Item 1 — Body | We rebuild monolithic desktop applications (Access, FoxPro, Visual Basic) as scalable, secure cloud-native web applications on a modern React architecture. | |
| Item 2 — number | 02 | |
| Item 2 — H3 | Database Sanitization | |
| Item 2 — Body | Extraction, cleaning and normalization of legacy on-prem data into high-performance PostgreSQL environments with zero integrity loss. | |
| Item 3 — number | 03 | |
| Item 3 — H3 | Live Integrations | |
| Item 3 — Body | Bridging the gap between your new cloud platform and the accounting, logistics or ERP tools you already run, through purpose-built APIs. | |

---

## 4. Approach

Source: `src/components/approach.tsx` (section id `#approach`)

| Element | Current text | Suggested |
|---|---|---|
| H2 ("Shift" in brand colour) | The Shift Protocol | |
| Body | An engineering-first approach that minimizes risk while maximizing system performance, through a rigid four-phase execution model. | |
| Phase 1 — Phase label *(source "Phase_01", displayed uppercase)* | PHASE_01 | |
| Phase 1 — H3 | Deep Audit | |
| Phase 1 — Body | Mapping every table, stored procedure and user workflow in your current stack to identify the critical business logic. | |
| Phase 2 — Phase label | PHASE_02 | |
| Phase 2 — H3 | Structural Blueprint | |
| Phase 2 — Body | Defining the target cloud architecture and data schemas before a single line of code is written. | |
| Phase 3 — Phase label | PHASE_03 | |
| Phase 3 — H3 | Parallel Build | |
| Phase 3 — Body | Engineers build the new system in isolation while your legacy system continues to run daily operations. | |
| Phase 4 — Phase label | PHASE_04 | |
| Phase 4 — H3 | Hard Cutover | |
| Phase 4 — Body | Synchronized data migration and final switchover, typically executed inside a single weekend window. | |

---

## 5. Metrics

Source: `src/components/metrics.tsx`

| Element | Current text | Suggested |
|---|---|---|
| Section — aria-label | Results | |
| Metric 1 — Value | 140ms | |
| Metric 1 — Label *(displayed uppercase)* | Avg latency reduction | |
| Metric 2 — Value | $2.4M | |
| Metric 2 — Label *(displayed uppercase)* | Saved in licensing fees | |
| Metric 3 — Value | 99.99% | |
| Metric 3 — Label *(displayed uppercase)* | Uptime commitment | |
| Metric 4 — Value | 12-Week | |
| Metric 4 — Label *(displayed uppercase)* | Average deployment cycle | |

---

## 6. Contact

Source: `src/components/contact.tsx` (section id `#contact`) and `src/components/contact-form.tsx` (email from `src/lib/site.ts`)

### 6a. Intro column (`contact.tsx`)

| Element | Current text | Suggested |
|---|---|---|
| Eyebrow *(displayed uppercase)* | Start the shift | |
| H2 ("legacy system" in brand colour) | Tell us about your legacy system. | |
| Body | Share what you run today and where it’s holding you back. We’ll come back with an honest assessment — no obligation. | |
| Contact label *(displayed uppercase)* | Email | |
| Email link | hello@kmrshift.com | |
| Phone label *(displayed uppercase)* | Phone | |
| Phone link | +92 319 6165027 | |
| WhatsApp label *(displayed uppercase)* | WhatsApp | |
| WhatsApp link | +92 319 6165027 (SR-only suffix: "(opens WhatsApp)") | |

### 6b. Form (`contact-form.tsx`)

| Element | Current text | Suggested |
|---|---|---|
| Form label (required) *(displayed uppercase)* | Name | |
| Form label (required) *(displayed uppercase)* | Work email | |
| Form label (optional) *(displayed uppercase)* | Company | |
| Form label (optional) *(displayed uppercase)* | Current system | |
| Placeholder — Current system | e.g. Access, FoxPro, VB6 | |
| Form label (required) *(displayed uppercase)* | What should we know? | |
| Placeholder — Message | Users, pain points, timeline… | |
| Helper / status line (idle) | We reply within one business day. | |
| Button (primary, submit) | Send Message → | |
| Button — sending state | Sending… → | |
| Error message (replaces helper line) | Something went wrong. Please email us at hello@kmrshift.com. | |

### 6c. Success state (replaces the form after sending)

| Element | Current text | Suggested |
|---|---|---|
| Status label *(displayed uppercase)* | Sys.status — received | |
| Success message — heading | Thanks — your message is in. | |
| Success message — body | We’ll review your system details and reply within one business day. | |

---

## 7. Site footer

Source: `src/components/site-footer.tsx` (nav labels and email from `src/lib/site.ts`)

| Element | Current text | Suggested |
|---|---|---|
| Wordmark ("Shift" in brand colour; links to top of page) | KMR Shift | |
| Tagline / body | Legacy systems. Modern solutions. We turn aging desktop software into fast, secure web applications. | |
| Nav — aria-label | Footer | |
| Nav heading *(displayed uppercase)* | Navigate | |
| Nav link 1 | Services | |
| Nav link 2 | Our Approach | |
| Nav link 3 | Work | |
| Nav link 4 | About | |
| Nav link 5 | Contact | |
| Contact heading *(displayed uppercase)* | Contact | |
| Email link | hello@kmrshift.com | |
| Phone link | +92 319 6165027 | |
| WhatsApp link | WhatsApp (SR-only suffix: "(opens WhatsApp)") | |
| Copyright *(displayed uppercase; year is generated)* | © 2026 KMR Shift. All rights reserved. | |
| Status line *(displayed uppercase)* | Sys.status — operational | |

---

## Flags for the content team

**Placeholder or unverified claims**

- **Metrics need substantiation.** "140ms" avg latency reduction, "$2.4M" saved in licensing fees, "99.99%" uptime commitment and "12-Week" average deployment cycle all look like placeholders. None has a source, a time frame or any context ("140ms" reduced from what? $2.4M saved in total, or per client?). The 99.99% figure reads like an SLA promise, so check that it is legally backed.
- **Placeholder email.** `hello@kmrshift.com` is marked in the code as "Replace with the real inbox before launch." It appears in four places: the contact intro, the error message and the footer (plus the mailto links).
- **Other claims to verify:** "zero integrity loss" (Capabilities), "typically executed inside a single weekend window" (Approach), "reply within one business day" (said twice) and "no obligation."
- **"Sys.status — operational"** in the footer is hard-coded and not tied to any real status. Decide whether it should stay as a design flourish.

**Nav links to sections that don't exist yet**

- **Work (#work)** and **About (#about)** appear in the header, the mobile nav and the footer, but the page has no section with those IDs, so the links do nothing. Either add the sections or remove the links before launch.

**Repeated phrases**

- "fast, secure web applications" appears in the meta description, the hero body ("fast, secure web applications") and the footer tagline.
- "preserving the business logic you depend on" appears in both the meta description and the hero body.
- "Legacy systems. Modern solutions." is used in the page title and the footer, and "Legacy systems → Modern web solutions" in the hero eyebrow. The wording is close but not identical.
- "Discuss Your System" is the CTA in three places (desktop header, mobile nav and hero). That repetition may be intentional.
- "within one business day" appears in the form helper line and again in the success message.
- "legacy system" is used heavily (hero H1, contact H2, Approach Phase 3).

**Tone and capitalization inconsistencies**

- **Buttons are in Title Case** ("Explore Modernization", "Discuss Your System", "Send Message"), while **eyebrows and labels are in sentence case** ("Start the shift", "Service inventory", "Work email", "What should we know?").
- **Headings are mixed.** H2s and H3s use Title Case ("Core Capabilities", "The Shift Protocol", "Deep Audit"), but the hero H1 and contact H2 are sentences ("Your legacy system.", "Tell us about your legacy system.").
- **Title vs. footer casing.** The page title has "Legacy Systems. Modern Solutions." in Title Case, while the footer has "Legacy systems. Modern solutions." in sentence case.
- **Nav label vs. heading.** The nav says "Services", but the section heading it links to is "Core Capabilities". Likewise "Our Approach" links to "The Shift Protocol".
- **Metric value formats are mixed.** "12-Week" is capitalized and hyphenated as if it were a modifier, and it sits beside unit values ("140ms", "99.99%"). "Avg" is abbreviated in one label while "Average" is spelled out in another.
- **Terminology varies:** "desktop software" vs. "desktop applications", and "outdated" (hero) vs. "aging" (footer) vs. "legacy".
- **Capitalization of "shift" varies:** "Start the shift" (lowercase) vs. "The Shift Protocol" vs. the brand name "KMR Shift".
- **Technical/system styling** (`Phase_01`, `Sys.status — …`) is a deliberate voice device. Confirm it is applied consistently and stays readable for non-technical buyers.
- **Spelling:** the copy uses US spelling (modernize, normalization, Synchronized). Confirm this is the intended locale.
