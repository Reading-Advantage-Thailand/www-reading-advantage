import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/auth-context';
import { ReactElement } from "react";
import { LocaleProvider } from '@/providers/locale-provider';

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

export default async function RootLayout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-sky-50 text-sky-900 min-h-screen`}>
        <AuthProvider>
          <LocaleProvider locale={locale}>{children}</LocaleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
