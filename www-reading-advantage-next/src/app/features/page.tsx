import type { Metadata } from 'next';
import Link from 'next/link';
import { ComparisonTable } from '@/components/features/comparison-table';
import Hero from '@/components/layout/hero';

export const metadata: Metadata = {
  title: 'Features - Reading Advantage Thailand',
  description: 'Compare Reading Advantage features with other leading reading programs. See how our AI-powered platform stands out.',
  keywords: 'reading program comparison, reading advantage features, educational technology comparison',
  openGraph: {
    title: 'Features - Reading Advantage Thailand',
    description: 'Compare Reading Advantage features with other leading reading programs',
    images: ['/images/og-image.jpg'],
    url: 'https://reading-advantage.com/features',
  },
};

const features = [
  {
    emoji: '🤖',
    title: 'AI-Powered Content',
    description: 'Our advanced AI technologies generate personalized content tailored to each learner&apos;s needs and preferences.',
  },
  {
    emoji: '👤',
    title: 'Personalized Learning',
    description: 'Our platforms adapt to individual learner needs, providing a customized educational experience for optimal results.',
  },
  {
    emoji: '✏️',
    title: 'Interactive Exercises',
    description: 'Engage with our interactive simulations, quizzes, and exercises designed to reinforce learning and boost retention.',
  },
  {
    emoji: '📊',
    title: 'Progress Tracking',
    description: 'Comprehensive analytics and reporting features allow learners and educators to monitor progress and identify areas for improvement.',
  },
  {
    emoji: '📱',
    title: 'Cross-Platform Access',
    description: 'Access our educational content anytime, anywhere with our web, mobile, and tablet applications.',
  },
  {
    emoji: '🌐',
    title: 'Global Community',
    description: 'Connect with learners worldwide, share experiences, and participate in collaborative learning opportunities.',
  },
];

export default function FeaturesPage() {
  return (
    <main>
      <Hero 
        title="Platform Features"
        description="Compare Reading Advantage with other leading reading programs"
        backgroundImage
      />

      {/* Features Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <ComparisonTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-800 text-sky-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the difference?</h2>
          <p className="text-xl mb-8">Start your journey with Reading Advantage today</p>
          <Link 
            href="/signup"
            className="bg-sky-500 text-sky-50 hover:bg-sky-600 px-6 py-3 rounded-lg font-bold transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
