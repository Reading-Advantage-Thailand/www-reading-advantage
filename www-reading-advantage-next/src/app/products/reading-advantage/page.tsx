import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "Reading Advantage - AI-Powered Language Learning Platform",
  description: "Transform language learning with Reading Advantage's AI-powered extensive reading platform. Personalized content, interactive activities, and proven results.",
  openGraph: {
    title: "Reading Advantage - AI-Powered Language Learning Platform",
    description: "Transform language learning with Reading Advantage's AI-powered extensive reading platform",
    images: ["/images/reading-advantage-demo.png"],
  },
}

export default function ReadingAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">AI-Powered Language Learning</h1>
              <h2 className="text-2xl font-bold mb-6">Experience personalized extensive reading with advanced AI technology</h2>
            </>
          }
          description="Our AI-powered platform adapts to your learning journey, providing personalized content and interactive activities for optimal language acquisition."
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
                  <h3 className="text-xl font-bold mb-4 text-center">Extensive Article Library</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Over 3,000 articles available</li>
                    <li>60 new pieces added daily</li>
                    <li>Content for every learning level</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🎯</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Comprehensible Input</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>Audio with sentence highlighting</li>
                    <li>Instant translations</li>
                    <li>Engaging multimedia content</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">Interactive Learning</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>SRS flashcards</li>
                    <li>Matching exercises</li>
                    <li>Ordering activities</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
              <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center">Research-Backed Success</h3>
                <p className="text-lg mb-8 text-center">
                  Students using extensive reading programs like Reading Advantage show an average of 1.48 years equivalent progress in middle-proficiency groups.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { value: "1.48x", label: "Progress Rate" },
                    { value: "3000+", label: "Articles Available" },
                    { value: "60+", label: "New Articles Daily" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-4xl font-bold text-sky-500 mb-2">{stat.value}</div>
                      <p>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Teacher Tools */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Teacher & Admin Tools</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Class Management</h3>
                  <ul className="space-y-2">
                    <li>• Easy student enrollment and grouping</li>
                    <li>• Assignment creation and tracking</li>
                    <li>• Printable classroom activities</li>
                  </ul>
                </div>
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Analytics Dashboard</h3>
                  <ul className="space-y-2">
                    <li>• Real-time progress monitoring</li>
                    <li>• Detailed performance reports</li>
                    <li>• Student engagement metrics</li>
                  </ul>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Technical Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: "🤖",
                    title: "AI-Powered",
                    description: "Advanced content generation and adaptation",
                  },
                  {
                    icon: "🌐",
                    title: "Multi-Language",
                    description: "Support for multiple languages and translations",
                  },
                  {
                    icon: "☁️",
                    title: "Cloud-Based",
                    description: "Powered by Google Cloud Platform",
                  },
                  {
                    icon: "📱",
                    title: "Cross-Platform",
                    description: "Access on any device, anywhere",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sky-100">{feature.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Transform Your Language Learning Journey</h2>
              <p className="text-xl mb-8">Start using Reading Advantage today and experience the power of AI-enhanced learning</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Sign Up Your School
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
