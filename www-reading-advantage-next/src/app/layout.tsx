import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { Header } from '@/components/layout/header';
import { PageTransition } from '@/components/layout/page-transition';

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
      <body className={`${inter.className} bg-sky-50 text-sky-900 min-h-screen`}>
        <Header />
        <PageTransition>
          <div className="flex flex-col min-h-screen pt-20">
            <main className="flex-1">
              {children}
            </main>
            <footer className="bg-slate-900 text-slate-200 py-12">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Reading Advantage Thailand</h3>
                    <p className="text-slate-400">
                      Empowering students with comprehensive reading and learning solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-slate-400">
                      <li>Email: info@readingadvantage.th</li>
                      <li>Phone: +66 123 456 789</li>
                      <li>Bangkok, Thailand</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                  <p>&copy; {new Date().getFullYear()} Reading Advantage Thailand. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}