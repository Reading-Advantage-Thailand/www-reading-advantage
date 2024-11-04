import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "STEM Advantage - Reading Advantage Thailand",
  description: "Transform your STEM curriculum with our innovative 75% coding + 25% STEM integration platform, designed for the modern classroom.",
  openGraph: {
    title: "STEM Advantage - Reading Advantage Thailand",
    description: "Comprehensive K-12 coding education platform launching in 2025.",
  },
}

export default function StemAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">Comprehensive K-12 Coding Education</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full mb-6">
                Coming in 2025
              </div>
              <h2 className="text-2xl font-bold mb-6">75% Coding + 25% STEM Integration</h2>
            </>
          }
          description="Transform your STEM curriculum with our innovative platform, designed for the modern classroom."
          backgroundImage={true}
        />

        {/* Core Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🎓</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Progressive Curriculum</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Block-based to text programming</li>
                    <li>Natural skill progression</li>
                    <li>180-day learning path</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">💻</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Interactive Learning</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Real-time coding environment</li>
                    <li>Immediate feedback</li>
                    <li>Automated assessment</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Teacher Support</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Comprehensive resources</li>
                    <li>Classroom management tools</li>
                    <li>Progress tracking system</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Grade Level Breakdown */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Grade-Level Breakdown</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    grade: "Grades 3-5",
                    description: "Introduction to coding through visual blocks and fundamental concepts",
                  },
                  {
                    grade: "Grades 6-8",
                    description: "Transition to text-based coding with practical applications",
                  },
                  {
                    grade: "Grades 9-12",
                    description: "Advanced programming concepts and web development skills",
                  },
                ].map((level) => (
                  <div
                    key={level.grade}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-4">{level.grade}</h3>
                    <p>{level.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Benefits for Everyone</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "For Students",
                    benefits: [
                      "Structured learning path",
                      "Hands-on coding experience",
                      "Real-world applications",
                    ],
                  },
                  {
                    title: "For Teachers",
                    benefits: [
                      "Ready-to-use curriculum",
                      "Comprehensive resources",
                      "Progress tracking tools",
                    ],
                  },
                  {
                    title: "For Schools",
                    benefits: [
                      "Complete STEM solution",
                      "Web-based accessibility",
                      "Educational standards alignment",
                    ],
                  },
                ].map((group) => (
                  <div key={group.title} className="bg-sky-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sky-100">
                      {group.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Technical Requirements</h2>
              <div className="max-w-2xl mx-auto bg-sky-50 p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Works on any internet-connected device",
                    "Web browser-based - no special software needed",
                    "Cloud-based progress tracking",
                    "Compatible with major school IT systems",
                  ].map((requirement) => (
                    <li key={requirement} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-800 text-sky-50 py-16 bg-gradient-to-br from-sky-800 to-violet-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Get Started with STEM Advantage</h2>
              <p className="text-xl mb-8">Join our waitlist to be the first to experience STEM Advantage in 2025</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Request Early Access
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  School Partnerships
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
