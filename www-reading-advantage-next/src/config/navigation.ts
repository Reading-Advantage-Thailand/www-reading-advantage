export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
] as const;

export const productLinks = [
  { href: '/products/reading-advantage', label: 'Reading Advantage' },
  { href: '/products/zhongwen-advantage', label: 'Zhongwen Advantage' },
  { href: '/products/math-advantage', label: 'Math Advantage' },
  { href: '/products/science-advantage', label: 'Science Advantage' },
  { href: '/products/stem-advantage', label: 'STEM Advantage' },
  { href: '/products/storytime-advantage', label: 'Storytime Advantage' },
  { href: '/products/codecamp-advantage', label: 'CodeCamp Advantage' },
  { href: '/products/tutor-advantage', label: 'Tutor Advantage' }
] as const;

export type NavigationLink = (typeof navigationLinks)[number];
export type ProductLink = (typeof productLinks)[number];
