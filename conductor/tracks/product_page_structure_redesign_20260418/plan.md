# Plan: Product Page Structure Redesign

---

## Phase 1: Shared Components & Infrastructure [checkpoint: TBD]

### Task 1.1: Create OverlappingSection Component

- [ ] Create `src/components/ui/overlapping-section.tsx`
- [ ] Props: `children`, `background`, `overlapAmount` (default `-mt-20`), `topRadius` (default `rounded-t-[40px]`)
- [ ] Wraps content in section with negative margin-top and rounded top corners
- [ ] Support for both light and dark backgrounds
- [ ] Run `npm run build`

### Task 1.2: Create FloatingPill Component

- [ ] Create `src/components/ui/floating-pill.tsx`
- [ ] Props: `value`, `label`, `variant` (color), `size` (lg/md/sm)
- [ ] Pill-shaped container with generous horizontal padding
- [ ] Large stat value + smaller label below
- [ ] Support for brand color variants
- [ ] Run `npm run build`

### Task 1.3: Create HorizontalStrip Component

- [ ] Create `src/components/ui/horizontal-strip.tsx`
- [ ] Props: `children`, `background`, `padding`
- [ ] Full-bleed container with `overflow-x-auto` and `flex gap-6`
- [ ] Hide scrollbar but maintain scroll functionality
- [ ] Snap scrolling on mobile (`scroll-snap-type: x mandatory`)
- [ ] Run `npm run build`

### Task 1.4: Create LargeImageBreak Component

- [ ] Create `src/components/ui/large-image-break.tsx`
- [ ] Props: `src`, `alt`, `overlayText`, `overlayPosition` (center/bottom-left/bottom-right)
- [ ] Full-bleed image with `min-h-[60vh]`
- [ ] Glassmorphism text overlay
- [ ] Gradient overlay for text readability
- [ ] Run `npm run build`

### Task 1.5: Create StepFlow Component

- [ ] Create `src/components/ui/step-flow.tsx`
- [ ] Props: `steps` array with `title`, `description`, `icon`
- [ ] Horizontal layout with connecting lines between steps
- [ ] Responsive: horizontal on desktop, vertical on mobile
- [ ] Support for brand color accents
- [ ] Run `npm run build`

### Task 1.6: Create FAQAccordion Component

- [ ] Create `src/components/ui/faq-accordion.tsx`
- [ ] Props: `items` array with `question`, `answer`
- [ ] Expandable/collapsible with animated chevron rotation
- [ ] Support for brand-colored borders/accents
- [ ] Accessible: keyboard navigation, aria-expanded
- [ ] Run `npm run build`

### Task 1.7: Update Card Component for Mixed Styles

- [ ] Add `borderStyle` prop: `"solid" | "dashed" | "mixed"`
- [ ] Add `padding` prop for varied internal spacing
- [ ] Add `offset` prop for negative margin positioning
- [ ] Ensure backward compatibility
- [ ] Run `npm run build`

**Manual Verification — Phase 1:**

1. Check all new components render without errors
2. Verify responsive behavior of StepFlow and HorizontalStrip
3. Test FAQAccordion keyboard navigation
4. Run `npm run build` — confirm exit 0

---

## Phase 2: Reading Advantage (Flagship) [checkpoint: TBD]

### Task 2.1: Write Test for New Structure (Red Phase)

- [ ] Update `src/app/[locale]/(marketing)/products/reading-advantage/page.test.tsx`
- [ ] Assert horizontal game strip exists
- [ ] Assert floating stat pills exist (not grid)
- [ ] Assert overlapping sections exist
- [ ] Run `npm test` — confirm fails (Red phase)

### Task 2.2: Restructure Platform Features Section

- [ ] Convert to full-width dark sky color room
- [ ] Asymmetric 8/4 layout: screenshots left, features right
- [ ] Add uppercase label: "PLATFORM"
- [ ] Use glassmorphism cards for device mockups
- [ ] Run `npm run build`

### Task 2.3: Add Overlapping Blended Learning Section

- [ ] Wrap in OverlappingSection with `rounded-t-[40px]`
- [ ] Asymmetric 7/5 split with stacked images
- [ ] Add dashed border container for Teacher Tools
- [ ] Run `npm run build`

### Task 2.4: Add Horizontal Games Strip

- [ ] Replace grid with HorizontalStrip component
- [ ] Game cards: 300px wide with screenshots
- [ ] Add uppercase label: "EDUCATIONAL GAMES"
- [ ] Run `npm run build`

### Task 2.5: Convert Stats to Floating Pills

- [ ] Replace 3-column grid with FloatingPill components
- [ ] Asymmetric placement (left, center-right, right)
- [ ] Add uppercase label: "RESULTS"
- [ ] Run `npm run build`

### Task 2.6: Make Test Pass (Green Phase)

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build` — confirm no errors

**Manual Verification — Phase 2:**

1. Open `/en/products/reading-advantage`
2. Verify horizontal game strip scrolls
3. Verify floating stat pills are asymmetric
4. Verify overlapping section creates depth
5. Check mobile at 375px

---

## Phase 3: Primary Advantage [checkpoint: TBD]

### Task 3.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert timeline/step CEFR display exists
- [ ] Assert reversed 5/7 split exists
- [ ] Run `npm test` — confirm fails

### Task 3.2: Add CEFR Timeline Section

- [ ] Full-width cyan color room
- [ ] Use StepFlow component for CEFR levels (Pre-A1 → B1)
- [ ] Connected steps with descriptions
- [ ] Uppercase label: "CURRICULUM ALIGNMENT"
- [ ] Run `npm run build`

### Task 3.3: Add Reversed 5/7 Key Features

- [ ] Image on LEFT (5 cols), text on RIGHT (7 cols)
- [ ] Large rounded image with floating feature badges
- [ ] Uppercase label: "KEY FEATURES"
- [ ] Run `npm run build`

### Task 3.4: Add Rotated Image Grid

- [ ] Overlapping section with `rounded-t-[40px]`
- [ ] 2×3 screenshot grid (not cards)
- [ ] Alternating rotation: -2deg, +2deg
- [ ] Uppercase label: "PLATFORM IN ACTION"
- [ ] Run `npm run build`

### Task 3.5: Convert Stats to Staggered Cards

- [ ] 1 large stat card + 2 smaller supporting cards
- [ ] Staggered vertical positioning
- [ ] Uppercase label: "IMPACT"
- [ ] Run `npm run build`

### Task 3.6: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 4: Math Advantage [checkpoint: TBD]

### Task 4.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert organic bubble cluster exists
- [ ] Assert single deep-dive feature section exists
- [ ] Run `npm test` — confirm fails

### Task 4.2: Add Organic Bubble Cluster

- [ ] Full-width orange color room
- [ ] 6 subject bubbles of varying sizes
- [ ] Floating at different heights with `translate-y` offsets
- [ ] Uppercase label: "SUBJECTS COVERED"
- [ ] Run `npm run build`

### Task 4.3: Add Deep-Dive Feature Section

- [ ] Asymmetric 7/5: text left, large mockup right
- [ ] Focus on ONE feature with detailed explanation
- [ ] Uppercase label: "SMART PROBLEM GENERATION"
- [ ] Run `npm run build`

### Task 4.4: Add Benefits with Mixed Borders

- [ ] Overlapping section
- [ ] 2 large cards with alternating border styles (solid/dashed)
- [ ] Uppercase label: "BENEFITS"
- [ ] Run `npm run build`

### Task 4.5: Convert Stats to Central + Floating

- [ ] Large central stat with 2 floating pill stats beside it
- [ ] Uppercase label: "RESULTS"
- [ ] Run `npm run build`

### Task 4.6: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 5: Science Advantage [checkpoint: TBD]

### Task 5.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert full-bleed image break exists
- [ ] Assert editorial 2-column layout exists
- [ ] Run `npm test` — confirm fails

### Task 5.2: Add Generous Value Cards

- [ ] Full-width rose color room
- [ ] 3 large cards with `rounded-[40px]` and generous padding
- [ ] Uppercase label: "WHY SCIENCE ADVANTAGE"
- [ ] Run `npm run build`

### Task 5.3: Add Full-Bleed Image Break

- [ ] Use LargeImageBreak component with `science-advantage-hero.jpg`
- [ ] Glassmorphism overlay with key message
- [ ] Cinematic, editorial feel
- [ ] Run `npm run build`

### Task 5.4: Add Asymmetric NGSS Features

- [ ] Text left, vertical feature stack right
- [ ] Large checkmark icons, not small dots
- [ ] Uppercase label: "NGSS ALIGNED"
- [ ] Run `npm run build`

### Task 5.5: Add Editorial Target Audience

- [ ] 2-column cards (not 3) with spacious layout
- [ ] Uppercase label: "BUILT FOR"
- [ ] Run `npm run build`

### Task 5.6: Add Overlapping Waitlist Card

- [ ] FAQ + email capture in overlapping card
- [ ] `-mt-12` overlap from previous section
- [ ] Run `npm run build`

### Task 5.7: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 6: STEM Advantage [checkpoint: TBD]

### Task 6.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert horizontal timeline exists
- [ ] Assert oversized stat callout exists
- [ ] Run `npm test` — confirm fails

### Task 6.2: Add Grade Level Timeline

- [ ] Full-width indigo color room
- [ ] Horizontal timeline with 3 grade levels
- [ ] Animated connecting dot
- [ ] Uppercase label: "GRADE LEVELS"
- [ ] Run `npm run build`

### Task 6.3: Add Reversed Split with Oversized Stat

- [ ] 5/7 reversed: illustration left, text right
- [ ] "75%" as oversized display text (80px+)
- [ ] Uppercase label: "75% CODING, 25% STEM"
- [ ] Run `npm run build`

### Task 6.4: Add Benefits with Alternating Borders

- [ ] Overlapping section on indigo background
- [ ] 3 cards: solid border, dashed border, solid border
- [ ] Uppercase label: "BENEFITS"
- [ ] Run `npm run build`

### Task 6.5: Add Vertical Checklist

- [ ] Single-column technical requirements
- [ ] Large check icons, generous spacing between items
- [ ] Uppercase label: "TECHNICAL REQUIREMENTS"
- [ ] Run `npm run build`

### Task 6.6: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 7: Storytime Advantage [checkpoint: TBD]

### Task 7.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert staggered cards exist
- [ ] Assert FAQ accordion exists
- [ ] Run `npm test` — confirm fails

### Task 7.2: Add Overlapping Feature Cards

- [ ] Full-width amber color room
- [ ] 2 large cards with slight overlap (negative margin)
- [ ] Uppercase label: "KEY FEATURES"
- [ ] Run `npm run build`

### Task 7.3: Add Asymmetric K-3 Split

- [ ] 7/5 split with decorative dashed-border frame around image
- [ ] Frame offset by 8px from image
- [ ] Uppercase label: "K-3 CURRICULUM"
- [ ] Run `npm run build`

### Task 7.4: Add Staggered Teacher Resources

- [ ] Overlapping section
- [ ] 3 cards with middle card offset by 20px downward
- [ ] Uppercase label: "TEACHER RESOURCES"
- [ ] Run `npm run build`

### Task 7.5: Add FAQ Accordion

- [ ] FAQAccordion component with amber accents
- [ ] 4-5 questions about the platform
- [ ] Uppercase label: "FREQUENTLY ASKED QUESTIONS"
- [ ] Run `npm run build`

### Task 7.6: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 8: Zhongwen Advantage [checkpoint: TBD]

### Task 8.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert level mapping visualization exists
- [ ] Assert combined FAQ/waitlist section exists
- [ ] Run `npm test` — confirm fails

### Task 8.2: Add Dual-Level Mapping

- [ ] Full-width fuchsia color room
- [ ] Connected mapping: Reading Advantage levels → HSK levels
- [ ] Visual connection lines between levels
- [ ] Uppercase label: "LEVEL MAPPING"
- [ ] Run `npm run build`

### Task 8.3: Add Calligraphy Image Break

- [ ] LargeImageBreak with `zhongwen-advantage-hero.jpg`
- [ ] Feature highlights in glassmorphism overlay
- [ ] Run `npm run build`

### Task 8.4: Add Editorial Interactive Learning

- [ ] 7/5 split with 2 large stacked cards on right
- [ ] Cards have `rounded-[40px]` and generous padding
- [ ] Uppercase label: "INTERACTIVE LEARNING"
- [ ] Run `npm run build`

### Task 8.5: Add Combined FAQ + Waitlist

- [ ] FAQ accordion above waitlist form
- [ ] Both in same container with fuchsia accents
- [ ] Uppercase label: "QUESTIONS?"
- [ ] Run `npm run build`

### Task 8.6: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 9: Tutor Advantage [checkpoint: TBD]

### Task 9.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert horizontal process flow exists
- [ ] Assert floating testimonials exist
- [ ] Run `npm test` — confirm fails

### Task 9.2: Add Process Flow

- [ ] Full-width emerald color room
- [ ] StepFlow: "Assess → Personalize → Progress"
- [ ] Uppercase label: "THE PROCESS"
- [ ] Run `npm run build`

### Task 9.3: Add Reversed Mockup Split

- [ ] 5/7 reversed: screenshot left (with subtle rotation), text right
- [ ] Uppercase label: "AI-POWERED PERSONALIZATION"
- [ ] Run `npm run build`

### Task 9.4: Add Hexagonal Feature Grid

- [ ] Overlapping section
- [ ] 6 features in 2 rows with varied padding
- [ ] Creates "hexagonal" feel through spacing
- [ ] Uppercase label: "PLATFORM FEATURES"
- [ ] Run `npm run build`

### Task 9.5: Add Floating Testimonials

- [ ] 3 testimonial cards at different heights
- [ ] Glassmorphism on emerald background
- [ ] Uppercase label: "TRUSTED BY EDUCATORS"
- [ ] Run `npm run build`

### Task 9.6: Add Combined Stats + CTA

- [ ] Stats and CTA button in unified section
- [ ] Not separate sections
- [ ] Uppercase label: "READY TO START?"
- [ ] Run `npm run build`

### Task 9.7: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 10: CodeCamp Advantage [checkpoint: TBD]

### Task 10.1: Write Test for New Structure

- [ ] Create/update page test
- [ ] Assert dark tech track cards exist
- [ ] Assert horizontal tech strip exists
- [ ] Run `npm test` — confirm fails

### Task 10.2: Add Dark Tech Tracks

- [ ] Full-width dark slate room
-   - 3 track cards with amber accents
- [ ] Monospace labels, bracket decorations `[ ]`
- [ ] Uppercase label: "TRACKS" (in monospace font)
- [ ] Run `npm run build`

### Task 10.3: Add Project Showcase Split

- [ ] 7/5 split: text left, project cards right
- [ ] Cards show "Code → Result" concept
- [ ] Uppercase label: "PROJECT-BASED LEARNING"
- [ ] Run `npm run build`

### Task 10.4: Add Horizontal Tech Strip

- [ ] Full-bleed horizontal scrolling strip
- [ ] Technology icons/logos on dark background
- [ ] Uppercase label: "TECH STACK"
- [ ] Run `npm run build`

### Task 10.5: Add Border-Left Feature Cards

- [ ] Overlapping section on white background
- [ ] 2 large cards with `border-l-4 border-amber-500`
- [ ] Code snippet styling
- [ ] Uppercase label: "KEY FEATURES"
- [ ] Run `npm run build`

### Task 10.6: Make Test Pass

- [ ] Run `npm test` — confirm passes
- [ ] Run `npm run build`

---

## Phase 11: Cross-Page Consistency & QA [checkpoint: TBD]

### Task 11.1: Verify Layout Uniqueness

- [ ] Open all 9 product pages side-by-side
- [ ] Confirm no two pages share the same section sequence
- [ ] Confirm each has at least one unique pattern
- [ ] Document any similarities that need breaking

### Task 11.2: Verify Section Requirements

- [ ] Count full-width color rooms per page (should be ≥2 each)
- [ ] Count asymmetric 5/7 splits (should be ≥3 across all pages)
- [ ] Count overlapping sections (should be ≥2)
- [ ] Count horizontal strips (should be ≥2)
- [ ] Verify full-bleed image breaks exist (Science, Zhongwen)
- [ ] Verify FAQ accordion exists (Storytime)
- [ ] Verify timeline/step flow exists (STEM, Tutor)
- [ ] Verify dashed borders on secondary containers (≥3 pages)

### Task 11.3: Mobile Responsiveness Check

- [ ] Test each page at 375px viewport
- [ ] Confirm horizontal strips scroll correctly
- [ ] Confirm overlapping sections don't break layout
- [ ] Confirm asymmetric splits stack properly
- [ ] Test at 768px (tablet) and 1024px (desktop)

### Task 11.4: Visual Polish

- [ ] Ensure all uppercase labels use `tracking-widest text-xs font-semibold uppercase`
- [ ] Ensure all cards have `rounded-3xl` minimum
- [ ] Ensure all section containers have `rounded-[40px]` where applicable
- [ ] Ensure consistent padding rhythm across pages
- [ ] Fix any visual inconsistencies

### Task 11.5: Build & Test Verification

- [ ] Run `npm test` — confirm all tests pass
- [ ] Run `npm run build` — confirm exits 0
- [ ] Run `npm run i18n:verify` — confirm exits 0
- [ ] Review test coverage

### Task 11.6: Accessibility Check

- [ ] Verify FAQ accordion keyboard navigation works
- [ ] Verify horizontal strips are keyboard-scrollable
- [ ] Confirm focus indicators on all interactive elements
- [ ] Check color contrast on all sections

**Manual Verification — Phase 11:**

1. Systematic review of all 9 product pages
2. Confirm each page has unique personality
3. Test all breakpoints
4. Verify all i18n locales work
5. Confirm all tests pass
6. Final visual walkthrough

---

## Final Acceptance

Before marking this track complete:

- [ ] All acceptance criteria from spec.md are met
- [ ] All phases completed and verified
- [ ] No two pages share identical structure
- [ ] Every page has ≥2 full-width color rooms
- [ ] Every page has at least one unique layout pattern
- [ ] `npm run i18n:verify` exits 0
- [ ] `npm run build` exits 0
- [ ] `npm test` passes
- [ ] Mobile layouts verified at 375px
- [ ] Documentation updated (tracks.md)
- [ ] Ready for review
