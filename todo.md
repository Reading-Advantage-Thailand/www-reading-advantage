# Reading Advantage Website Migration Todo List

## Completed Tasks

- [x] Set up Next.js 15 project with app router
- [x] Configure shadcn/ui components
- [x] Migrate core layout structure
- [x] Set up navigation configuration (src/config/navigation.ts)
- [x] Create reusable UI components (button, card, select, sheet)
- [x] Migrate header component to modern version
- [x] Set up products section components (hero, b2b, b2c, tutor solutions)
- [x] Implement features page with comparison table
- [x] Create pricing page with modern pricing table
- [x] Set up basic global styling (globals.css)
- [x] Configure custom fonts (Geist)
- [x] Migrate key images to public directory
- [x] Add framer-motion animations
  - [x] Page transitions (PageTransition component)
  - [x] Component animations (FadeIn component)
  - [x] Scroll animations (ScrollFade component)

## Pending Tasks

- [ ] Update products page content to emphasize customer benefits (comprehensive turnkey curriculum solutions, teacher training, improved student outcomes, improved differentiation, etc.)
- [ ] Create common hero component
  - [ ] Extract shared hero layout and animations
  - [ ] Make content configurable per page
  - [ ] Add the students_at_computers.jpg (public/images) in parallax scrolling effect
  - [ ] Implement in all pages
- [ ] Migrate remaining pages
  - [ ] Math Advantage
  - [ ] Science Advantage
  - [ ] STEM Advantage
  - [ ] Storytime Advantage
  - [ ] Zhongwen Advantage
  - [ ] CodeCamp Advantage
- [ ] Enhance responsive design
  - [ ] Mobile navigation
  - [ ] Responsive tables
  - [ ] Touch interactions
- [ ] Migrate remaining static assets
  - [ ] Check for missing images
  - [ ] Optimize all images
- [ ] Implement dark mode
  - [ ] Configure theme switcher
  - [ ] Test all components in dark mode
- [ ] SEO Optimizations
  - [ ] Meta tags
  - [ ] Open Graph
  - [ ] Structured data
- [ ] Performance optimizations
  - [ ] Image loading strategies
  - [ ] Component code splitting
  - [ ] Font loading optimization
- [ ] Testing
  - [ ] Component tests
  - [ ] E2E tests
  - [ ] Accessibility tests
- [ ] Documentation
  - [ ] Component usage
  - [ ] Styling guidelines
  - [ ] Development workflow

## Styling Discussions & Decisions

- Using Tailwind CSS for utility-first styling
- Incorporated shadcn/ui for consistent component design
- Custom Geist font family for modern typography
- Need to maintain corporate brand colors while modernizing the design
- Component-level styles will use CSS Modules where needed
- Plan to use CSS variables for theming support

## Notes

- Migration focuses on modernizing the UI while maintaining core functionality
- shadcn/ui provides accessible components out of the box
- Framer Motion will be used strategically for meaningful animations
- Mobile-first approach for all new components
- Maintaining SEO during migration is crucial

This todo list will be updated as the migration progresses. Each completed task should be marked with [x] and new tasks can be added as needed.
