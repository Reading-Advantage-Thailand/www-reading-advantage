import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "Storytime Advantage - Complete Early Literacy Curriculum | Reading Advantage Thailand",
  description: "Launching in 2025: A comprehensive K-3 early literacy curriculum combining digital innovation with hands-on learning. Join the waitlist for early access.",
  openGraph: {
    title: "Storytime Advantage - The Future of Early Literacy Education",
    description: "Transform early literacy education with our comprehensive K-3 curriculum launching in 2025. Combining digital innovation with proven teaching methods.",
  },
}

export default function StorytimeAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">The Future of Early Literacy Education</h1>
              <div className="absolute top-4 right-4 bg-sky-400 text-white px-4 py-2 rounded-full mb-6">
                Coming in 2025
              </div>
              <h2 className="text-2xl font-bold mb-6">Complete K-3 Literacy Curriculum</h2>
            </>
          }
          description="A complete K-3 literacy curriculum that perfectly balances digital innovation with hands-on learning"
          backgroundImage={true}
        />

        {/* Core Value Proposition */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Complete Literacy Curriculum Solution</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="text-xl font-bold mb-4 text-center">180-Day Structure</h3>
                  <p className="text-center">Comprehensive curriculum aligned with educational standards and designed for classroom success</p>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">⚖️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Balanced Approach</h3>
                  <p className="text-center">Perfect blend of digital tools and traditional hands-on learning methods</p>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🤝</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Complete Support</h3>
                  <p className="text-center">Comprehensive resources for teachers, students, and administrators</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Feature Set</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Digital Components</h3>
                  <ul className="space-y-3">
                    <li>• Interactive phonics lessons</li>
                    <li>• Digital decodable texts</li>
                    <li>• Progress tracking tools</li>
                    <li>• Built-in assessments</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Physical Materials</h3>
                  <ul className="space-y-3">
                    <li>• Printable worksheets</li>
                    <li>• Hands-on activities</li>
                    <li>• Take-home resources</li>
                    <li>• Classroom materials</li>
                  </ul>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Teacher Tools */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Powerful Teacher Tools</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    title: "Lesson Planning",
                    description: "Comprehensive planning tools and resources",
                    icon: "📝"
                  },
                  {
                    title: "Class Management",
                    description: "Efficient tools for managing student progress",
                    icon: "👥"
                  },
                  {
                    title: "Assessment Tools",
                    description: "Built-in assessment and reporting features",
                    icon: "📊"
                  }
                ].map((tool) => (
                  <div key={tool.title} className="bg-sky-50 rounded-lg p-6 shadow-sm">
                    <div className="text-4xl mb-4 text-center">{tool.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-center">{tool.title}</h3>
                    <p className="text-center">{tool.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold mb-2">When will Storytime Advantage launch?</h3>
                  <p>Our platform is scheduled to launch in early 2025. Join our waitlist for early access opportunities.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold mb-2">What are the technical requirements?</h3>
                  <p>Storytime Advantage will be accessible on any modern web browser, with mobile apps available for iOS and Android tablets.</p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-800 text-sky-50 py-16 bg-gradient-to-br from-sky-800 to-violet-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Be the First to Experience Storytime Advantage</h2>
              <p className="text-xl mb-8">Join our waitlist for early access and exclusive updates</p>
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
