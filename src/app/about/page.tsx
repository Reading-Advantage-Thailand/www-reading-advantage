import type { Metadata } from 'next';
import Hero from '@/components/layout/hero';

export const metadata: Metadata = {
  title: 'About Us - Reading Advantage (Thailand)',
  description: 'Learn about Reading Advantage Thailand\'s mission to transform education through AI innovation and our commitment to accessible, high-quality learning solutions.',
  keywords: 'education technology, AI learning, Thailand education, EdTech, Reading Advantage Thailand',
  openGraph: {
    title: 'About Us - Reading Advantage Thailand',
    description: 'Discover how Reading Advantage Thailand is revolutionizing education through AI-powered learning solutions in Southeast Asia.',
    images: ['/images/og-image.jpg'],
    url: 'https://reading-advantage.com/about',
  },
};

export default function AboutPage() {
  return (
    <main>
      <Hero 
        title="Transforming Education in Southeast Asia"
        description="Pioneering AI-powered educational solutions for a brighter future"
        backgroundImage
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Reading Advantage (Thailand) stands at the forefront of educational innovation in Southeast Asia. As a pioneering educational technology company, we combine cutting-edge AI technology with deep pedagogical expertise to create transformative learning experiences that empower students, educators, and communities throughout the region.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-violet-500">Our Story</h2>
            <div className="prose lg:prose-lg text-gray-700">
              <p className="mb-4">
                Our journey began with a deep foundation in extensive reading research and real classroom teaching experience. We recognized a critical need for more accessible and engaging educational solutions that could reach learners across Southeast Asia.
              </p>
              <p className="mb-4">
                Through persistent innovation and dedication, we&apos;ve evolved from a focused reading platform to a comprehensive educational solutions provider. Our growth has been driven by our commitment to bridging educational gaps and creating opportunities for all learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  To revolutionize education in Thailand and Southeast Asia by providing innovative, AI-enhanced learning solutions that empower students, educators, and communities to achieve their full potential. We believe in making high-quality education accessible to all, fostering language proficiency, STEM skills, and personal growth while creating pathways for underprivileged students to transform their communities through education.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Become the leading educational technology provider in Southeast Asia</li>
                  <li>Create a comprehensive educational ecosystem serving all learners</li>
                  <li>Bridge educational gaps through innovative technology</li>
                  <li>Set new standards for AI-enhanced learning</li>
                  <li>Drive Thailand&apos;s educational development and digital transformation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Impact Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Advanced AI content generation systems</li>
                  <li>Cloud-based infrastructure on Google Cloud Platform</li>
                  <li>Cutting-edge learning analytics</li>
                  <li>Enterprise-grade security and privacy</li>
                  <li>Continuous platform innovation</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Social Impact</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Programs for underprivileged students</li>
                  <li>Partnerships with rural schools</li>
                  <li>Educational access initiatives</li>
                  <li>Community development programs</li>
                  <li>Impact measurement and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-sky-50 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Innovation</h3>
                <p className="text-gray-700">Continuously pushing boundaries in educational technology</p>
              </div>
              <div className="p-6 bg-sky-50 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Accessibility</h3>
                <p className="text-gray-700">Making quality education available to all learners</p>
              </div>
              <div className="p-6 bg-sky-50 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Excellence</h3>
                <p className="text-gray-700">Maintaining the highest standards in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Academic Research Foundation</h2>
            <p className="text-gray-700 mb-6">
              Our methods are grounded in extensive research on language acquisition, AI in education, and learning science. We continuously evaluate and improve our approaches based on the latest academic findings and real-world results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-800 text-sky-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform education?</h2>
          <p className="text-xl mb-8">Join us in revolutionizing learning in Southeast Asia</p>
          <a href="#" className="bg-sky-500 text-sky-50 hover:bg-sky-600 px-6 py-3 rounded-lg font-bold transition-colors inline-block">
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}
