import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "Zhongwen Advantage - The Future of Chinese Learning | Reading Advantage Thailand",
  description: "Transform your Chinese language learning journey with Zhongwen Advantage - launching 2025. Combining HSK standards with innovative adaptive learning technology.",
  openGraph: {
    title: "Zhongwen Advantage - The Future of Chinese Learning",
    description: "Transform your Chinese language learning journey with Zhongwen Advantage - launching 2025. Combining HSK standards with innovative adaptive learning technology.",
  },
}

export default function ZhongwenAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">The Future of Chinese Learning</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-sky-900 px-4 py-2 rounded-full mb-6">
                Coming in 2025
              </div>
              <h2 className="text-2xl font-bold mb-6">Revolutionary Chinese Learning Platform</h2>
            </>
          }
          description="Experience a revolutionary approach to mastering Chinese, combining HSK standards with adaptive learning technology"
          backgroundImage={true}
        />

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Dual-Level Learning System</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>18 Reading Advantage levels mapped to 6 HSK levels</li>
                    <li>Granular progress tracking</li>
                    <li>Clear learning progression</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Adaptive Technology</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>AI-powered personalized learning paths</li>
                    <li>Intelligent feedback system</li>
                    <li>Spaced repetition optimization</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Comprehensive Content</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Extensive reading materials</li>
                    <li>Both simplified and traditional characters</li>
                    <li>Varied content types</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Interactive Learning */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Interactive Learning Elements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4 text-center">✍️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Character Mastery</h3>
                  <p className="text-center">Advanced stroke recognition technology with real-time feedback</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4 text-center">🗣️</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Pronunciation Perfect</h3>
                  <p className="text-center">Tone recognition exercises with AI-powered feedback</p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Teacher Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">For Educators</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4 text-center">👥</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Class Management</h3>
                  <p className="text-center">Comprehensive tools for tracking and managing student progress</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4 text-center">📊</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Progress Tracking</h3>
                  <p className="text-center">Detailed analytics and performance insights</p>
                </div>
                <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
                  <div className="text-4xl mb-4 text-center">📝</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Custom Content</h3>
                  <p className="text-center">Create and assign customized learning materials</p>
                </div>
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
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">When will Zhongwen Advantage launch?</h3>
                  <p>Our platform is scheduled to launch in early 2025. Join our waitlist for early access opportunities.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold mb-2">What are the technical requirements?</h3>
                  <p>Zhongwen Advantage will be accessible on any modern web browser, with mobile apps available for iOS and Android.</p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-800 text-sky-50 py-16 bg-gradient-to-br from-sky-800 to-violet-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Be the First to Experience Zhongwen Advantage</h2>
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
