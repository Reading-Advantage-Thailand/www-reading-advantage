import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "Math Advantage - Reading Advantage Thailand",
  description: "Revolutionary AI-enhanced math tutoring platform with personalized learning paths and advanced adaptive technology.",
  openGraph: {
    title: "Math Advantage - Reading Advantage Thailand",
    description: "Transform your math learning journey with our AI-enhanced tutoring platform launching in 2025.",
  },
}

export default function MathAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">Math Advantage</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-sky-50 px-4 py-2 rounded-full mb-6">
                Coming in 2025
              </div>
              <h2 className="text-2xl font-bold mb-6">Revolutionary AI-Enhanced Math Tutoring</h2>
            </>
          }
          description="Experience personalized math tutoring that combines proven teaching methods with advanced AI technology, adapting to your learning pace and style."
          backgroundImage={true}
        />

        {/* Core Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📊</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Smart Problem Generation</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Customized practice problems matching your skill level</li>
                    <li>Real-world application problems</li>
                    <li>Progressive difficulty scaling</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🎯</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Structured Learning Path</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>&ldquo;I do, We do, You do&rdquo; teaching method</li>
                    <li>Clear concept progression</li>
                    <li>Aligned with educational standards</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">AI-Powered Support</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Personalized explanations</li>
                    <li>Dynamic visualizations</li>
                    <li>Instant feedback and guidance</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Subject Coverage */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Coverage</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {["Arithmetic", "Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics"].map(
                  (subject) => (
                    <div
                      key={subject}
                      className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-lg">{subject}</h3>
                    </div>
                  )
                )}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Math Advantage?</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: "💪",
                    title: "Build Confidence",
                    description: "Progress at your own pace through structured learning paths",
                  },
                  {
                    icon: "⏰",
                    title: "24/7 Availability",
                    description: "Learn whenever you want, wherever you are",
                  },
                  {
                    icon: "🎯",
                    title: "Instant Support",
                    description: "Get immediate help when you're stuck",
                  },
                  {
                    icon: "📊",
                    title: "Track Progress",
                    description: "Monitor your improvement with detailed analytics",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-sky-100">{benefit.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Math Journey?</h2>
              <p className="text-xl mb-8">Join our waitlist to be the first to experience Math Advantage in 2025</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Join Waitlist
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
