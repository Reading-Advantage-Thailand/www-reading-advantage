import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { div } from "framer-motion/client"

export const metadata: Metadata = {
  title: "Science Advantage - Reading Advantage Thailand",
  description: "Comprehensive K-12 science education platform aligned with NGSS standards. Interactive learning, adaptive curriculum, and teacher support tools.",
  openGraph: {
    title: "Science Advantage - Reading Advantage Thailand",
    description: "Transform K-12 science education with our comprehensive, NGSS-aligned platform launching in 2025.",
  },
}

export default function ScienceAdvantage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero
        title={
          <>
            <h1 className="text-5xl font-bold mb-6">Science Advantage</h1>
            <div className="absolute top-4 right-4 bg-yellow-400 text-sky-900 px-4 py-2 rounded-full mb-6">
              Coming in 2025
            </div>
            <h2 className="text-2xl font-bold mb-6">The Future of K-12 Science Education</h2>
          </>
        }
        description="A comprehensive, NGSS-aligned science curriculum with adaptive learning technology"
        backgroundImage
      />

      {/* Core Value Proposition */}
      <ScrollFade>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Transforming Science Education</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-sky-50">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-bold mb-2">180-Day Curriculum</h3>
                  <p>Comprehensive, standards-aligned content for the full academic year</p>
                </div>
                <div className="p-6 rounded-lg bg-sky-50">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold mb-2">NGSS Aligned</h3>
                  <p>Full coverage of Next Generation Science Standards</p>
                </div>
                <div className="p-6 rounded-lg bg-sky-50">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="font-bold mb-2">Adaptive Learning</h3>
                  <p>Personalized paths that adjust to student performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Key Features */}
      <ScrollFade>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn>
                <div className="p-6 rounded-lg bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Curriculum Coverage</h3>
                  <ul className="space-y-2">
                    <li>✓ Complete K-12 science curriculum</li>
                    <li>✓ NGSS core ideas coverage</li>
                    <li>✓ Structured daily lessons</li>
                    <li>✓ Grade-appropriate progression</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-lg bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Adaptive System</h3>
                  <ul className="space-y-2">
                    <li>✓ Three-track difficulty system</li>
                    <li>✓ Automatic adjustments</li>
                    <li>✓ Personalized learning paths</li>
                    <li>✓ Built-in student support</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-6 rounded-lg bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Assessment Tools</h3>
                  <ul className="space-y-2">
                    <li>✓ Multiple assessment types</li>
                    <li>✓ Real-time progress tracking</li>
                    <li>✓ Standards alignment</li>
                    <li>✓ Automated feedback</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Target Audience */}
      <ScrollFade>
        <section className="py-16 bg-sky-800 text-sky-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Designed for Everyone</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-sky-700 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">For Teachers</h3>
                  <ul className="space-y-2">
                    <li>• Complete lesson plans</li>
                    <li>• Class management tools</li>
                    <li>• Assessment tools</li>
                    <li>• Progress tracking</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-sky-700 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">For Administrators</h3>
                  <ul className="space-y-2">
                    <li>• NGSS compliance tools</li>
                    <li>• School-wide analytics</li>
                    <li>• Implementation support</li>
                    <li>• Professional development</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-sky-700 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">For Districts</h3>
                  <ul className="space-y-2">
                    <li>• District-wide analytics</li>
                    <li>• Standardization tools</li>
                    <li>• Training programs</li>
                    <li>• Implementation support</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Waitlist Section */}
      <ScrollFade>
        <section id="waitlist" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Get Early Access</h2>
              <p className="mb-8">Join our waitlist to be among the first to experience Science Advantage when it launches in 2025.</p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 border rounded-lg"
                  />
                  <button 
                    type="submit" 
                    className="bg-sky-500 text-sky-50 px-6 py-2 rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </ScrollFade>
    </main>
  )
}
