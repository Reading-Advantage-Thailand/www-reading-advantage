import React from 'react'
import { Header } from '@/components/layout/header';
import { PageTransition } from '@/components/layout/page-transition';
import Footer from '@/components/common/footer';

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
                <div className="flex flex-col min-h-screen">
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </PageTransition>
        </>
    )
}