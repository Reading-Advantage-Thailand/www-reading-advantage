'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { PricingTable } from '@/components/pricing/pricing-table';
import Hero from '@/components/layout/hero';

export default function PricingPage() {
  const locale = useLocale();

  return (
    <main>
      <Hero 
        title={
          <h1 className="text-5xl font-bold mb-6">
            Reading Advantage Price Tier Comparison<br />
            <span className="text-4xl">การเปรียบเทียบราคา Reading Advantage</span>
          </h1>
        }
        description={
          <p className="text-xl">
            Choose the perfect plan for your learning journey<br />
            เลือกแผนที่เหมาะสมกับการเรียนรู้ของคุณ
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
          <h2 className="text-3xl font-bold mb-4">Ready to get started? / พร้อมที่จะเริ่มต้นหรือยัง?</h2>
          <p className="text-xl mb-8">Contact us for a free trial or demo / ติดต่อเราเพื่อทดลองใช้ฟรีหรือดูการสาธิต</p>
          <Link 
            href={`/${locale}/contact`}
            className="bg-sky-500 text-sky-50 hover:bg-sky-600 px-6 py-3 rounded-lg font-bold transition-colors inline-block"
          >
            Request Demo / ขอการสาธิต
          </Link>
        </div>
      </section>
    </main>
  );
}
