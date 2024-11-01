import type { Metadata } from 'next';
import Link from 'next/link';
import { PricingTable } from '@/components/pricing/pricing-table';

export const metadata: Metadata = {
  title: 'Reading Advantage Feature Matrix / เตียบเทียบเปรียบเอียบของ Reading Advantage',
  description: 'Compare Reading Advantage pricing tiers and features across different packages',
  keywords: 'reading advantage pricing, reading program features, AI learning, language learning pricing',
  openGraph: {
    title: 'Reading Advantage Price Tier Comparison',
    description: 'Compare features and pricing across Reading Advantage subscription tiers',
    images: ['/images/og-image.jpg'],
    url: 'https://reading-advantage.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-sky-500 text-sky-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Reading Advantage Price Tier Comparison / การเปรียบเทียบราคา Reading Advantage
            </h1>
            <p className="text-xl">
              Choose the perfect plan for your learning journey / เลือกแผนที่เหมาะสมกับการเรียนรู้ของคุณ
            </p>
          </div>
        </div>
      </section>

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
            href="/contact"
            className="bg-sky-500 text-sky-50 hover:bg-sky-600 px-6 py-3 rounded-lg font-bold transition-colors inline-block"
          >
            Request Demo / ขอการสาธิต
          </Link>
        </div>
      </section>
    </main>
  );
}
