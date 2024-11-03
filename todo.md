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
- [x] Create common hero component
  - [x] Extract shared hero layout and animations
  - [x] Make content configurable per page
  - [x] Add the students_at_computers.jpg (public/images) in parallax scrolling effect
  - [x] Implement in all pages
- [x] Update home page and products page content to emphasize customer benefits (comprehensive turnkey curriculum solutions, teacher training, improved student outcomes, improved differentiation, etc.)
- [x] Migrate remaining pages and put under products/
  - [x] Math Advantage
    - [x] fix hero
  - [x] Science Advantage
  - [x] STEM Advantage
  - [x] Reading Advantage
  - [x] Storytime Advantage
  - [x] Zhongwen Advantage
  - [x] CodeCamp Advantage
  - [x] Tutor Advantage
- [x] Create "Contact Us" page and functionality

## Pending Tasks

- [ ] Create MDX blogging system
  - [x] Set up MDX configuration
  - [x] Create blog infrastructure
  - [x] Design and implement blog components
    - [x] Create BlogLayout component
    - [x] Build BlogList component for post listings
    - [x] Design BlogCard component for post previews
    - [ ] Implement BlogHeader component
    - [ ] Create BlogTags component for categorization
  - [ ] Add blog features
    - [ ] Implement pagination for blog listings
    - [ ] Add category/tag filtering system
    - [ ] Create RSS feed generation
    - [ ] Add reading time estimation
    - [ ] Implement social sharing buttons
  - [ ] Style blog components
    - [ ] Design responsive blog post layout
    - [ ] Style code blocks with syntax highlighting
    - [ ] Create custom styles for MDX elements
    - [ ] Implement dark mode support for blog
  - [ ] Create sample blog posts
    - [ ] Write documentation for blog post creation
    - [ ] Create template for new blog posts
    - [ ] Add initial educational content posts
  - [ ] Add blog-specific features
    - [ ] Implement table of contents generation
    - [ ] Add related posts functionality
  - [ ] SEO optimization for blog
    - [ ] Implement blog-specific meta tags
    - [ ] Add structured data for blog posts
    - [ ] Create dynamic sitemap for blog content
    - [ ] Optimize for social sharing
- [ ] Integrate login with Firebase (add this app to the Reading Advantage project)
- [ ] Internationalize into English / Thai / Simplified Chinese
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
- [ ] CI / CD Deploy main to GCP Cloud Run using Github Actions
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
- use --legacy-peer-deps flag when installing npms
- use npx shadcn@latest add [component] when installing shadcn components

This todo list will be updated as the migration progresses. Each completed task should be marked with [x] and new tasks can be added as needed.
