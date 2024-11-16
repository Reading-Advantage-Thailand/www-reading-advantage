import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "Tutor Advantage - Reading Advantage Thailand",
  description: "Revolutionary AI-powered English tutoring platform launching in Thailand in 2025. Combining advanced technology with personalized instruction.",
  openGraph: {
    title: "Tutor Advantage - Reading Advantage Thailand",
    description: "Revolutionary AI-powered English tutoring platform launching in Thailand in 2025",
  },
}

export default function TutorAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">Revolutionary English Tutoring in Thailand</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-sky-900 px-4 py-2 rounded-full mb-6">
                Coming in 2025
              </div>
              <h2 className="text-2xl font-bold mb-6">AI-Powered Learning Platform</h2>
            </>
          }
          description="Combining AI technology with personalized instruction for unprecedented learning outcomes"
          backgroundImage={true}
        />

        {/* Value Propositions */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">AI-Powered Learning</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Adaptive content generation across CEFR levels</li>
                    <li>Personalized learning paths</li>
                    <li>Auto-generated practice content</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Structured Learning Path</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Clear progression from A1 to B2</li>
                    <li>CEFR-aligned curriculum</li>
                    <li>Comprehensive skill coverage</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">👩‍🏫</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Professional Tutor Network</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Qualified and certified tutors</li>
                    <li>Ongoing professional development</li>
                    <li>Standardized quality control</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Platform Features */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Interactive Lessons",
                    description: "Engaging content with audio playback and interactive exercises",
                  },
                  {
                    title: "Translation Assistance",
                    description: "Real-time translation support for better comprehension",
                  },
                  {
                    title: "Vocabulary Tools",
                    description: "Games and exercises for effective vocabulary building",
                  },
                  {
                    title: "Progress Tracking",
                    description: "Detailed analytics and progress monitoring",
                  },
                  {
                    title: "Student Dashboard",
                    description: "Comprehensive view of learning journey and achievements",
                  },
                  {
                    title: "Multi-Platform Access",
                    description: "Available on mobile and desktop devices",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Our Commitment</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: "🔬",
                    title: "Research-Backed",
                    description: "Educational methodology supported by latest research",
                  },
                  {
                    icon: "🤝",
                    title: "Ethical Practices",
                    description: "Commitment to responsible and ethical education",
                  },
                  {
                    icon: "💎",
                    title: "Accessible Quality",
                    description: "Affordable access to premium education",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sky-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-800 text-sky-50 py-16 bg-gradient-to-br from-sky-800 to-violet-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Be Part of the Future</h2>
              <p className="text-xl mb-8">Join our early access program or apply to become a tutor</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Register for Early Access
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Apply as Tutor
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
