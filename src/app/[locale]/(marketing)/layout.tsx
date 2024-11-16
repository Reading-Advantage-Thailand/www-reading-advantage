import React from 'react'
import { Header } from '@/components/layout/header';
import { PageTransition } from '@/components/layout/page-transition';
import Link from 'next/link';

type MarketingProps = {
    children: React.ReactNode;
}

export default function MarketingLayout({
    children
}: MarketingProps) {
    return (
        <>
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
                                        <li>Email: support@reading-advantage.com</li>
                                        <li>Phone: +66 634 460 628</li>
                                        <li>Khonkaen, Thailand</li>
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
        </>
    )
}