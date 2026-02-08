import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/pricing/pricing-table';
import Hero from '@/components/layout/hero';
import { getScopedI18n } from '@/locales/server';

export const metadata: Metadata = {
  title: 'Reading Advantage Feature Matrix',
  description: 'Compare Reading Advantage pricing tiers and features across different packages',
  keywords: 'reading advantage pricing, reading program features, AI learning, language learning pricing',
  openGraph: {
    title: 'Reading Advantage Price Tier Comparison',
    description: 'Compare features and pricing across Reading Advantage subscription tiers',
    images: ['/images/og-image.jpg'],
    url: 'https://reading-advantage.com/pricing',
  },
};

export default async function PricingPage() {
  const t = await getScopedI18n('pages.pricing');
  return (
    <main>
      <Hero
        title={
          <h1 className="text-5xl font-bold mb-6">
            {t('hero.title')}
          </h1>
        }
        description={
          <p className="text-xl">
            {t('hero.description')}
          </p>
        }
        backgroundImage
      />

      {/* Pricing Table Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <PricingTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-800 text-sky-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8">{t('cta.description')}</p>
          <Link
            href="/contact"
            className="bg-sky-500 text-sky-50 hover:bg-sky-600 px-6 py-3 rounded-lg font-bold transition-colors inline-block"
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </main>
  );
}
