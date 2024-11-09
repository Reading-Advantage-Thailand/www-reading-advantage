import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reading Advantage (Thailand) - Innovative EdTech Solutions',
  description: 'Reading Advantage Thailand - Leading provider of AI-enhanced learning solutions for language learning, coding, and education technology.',
  keywords: 'education technology, AI learning, language learning, coding bootcamp, Thailand education',
  authors: [{ name: 'Reading Advantage Thailand' }],
  openGraph: {
    title: 'Reading Advantage Thailand - Innovative EdTech Solutions',
    description: 'Revolutionizing education with AI-enhanced learning solutions',
    images: ['/images/og-image.jpg'],
    url: 'https://reading-advantage.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
