export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' }
] as const;

export const productLinks = [
  { href: '/math-advantage', label: 'Math Advantage' },
  { href: '/reading-advantage', label: 'Reading Advantage' },
  { href: '/science-advantage', label: 'Science Advantage' },
  { href: '/stem-advantage', label: 'STEM Advantage' },
  { href: '/storytime-advantage', label: 'Storytime Advantage' },
  { href: '/zhongwen-advantage', label: 'Zhongwen Advantage' },
  { href: '/codecamp-advantage', label: 'CodeCamp Advantage' },
  { href: '/tutor-advantage', label: 'Tutor Advantage' }
] as const;

export type NavigationLink = (typeof navigationLinks)[number];
export type ProductLink = (typeof productLinks)[number];
