import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"

export const metadata: Metadata = {
  title: "CodeCamp Advantage - Reading Advantage Thailand",
  description: "AI-powered full-stack development learning platform with personalized instruction and project-based curriculum.",
  openGraph: {
    title: "CodeCamp Advantage - Reading Advantage Thailand",
    description: "Transform your development journey with our AI-powered learning platform launching in 2025.",
  },
}

export default function CodeCampAdvantage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">CodeCamp Advantage</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-sky-900 px-4 py-2 rounded-full mb-6">
                Coming in 2025
              </div>
              <h2 className="text-2xl font-bold mb-6">The Future of AI-Powered Full-Stack Development Learning</h2>
            </>
          }
          description="Experience personalized learning with advanced AI that adapts to your unique journey in becoming a full-stack developer"
          backgroundImage={true}
        />

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Personalized AI Instruction</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      One-on-one learning with advanced AI instructors
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      Adaptive curriculum that adjusts to your pace
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      Real-time feedback and code review
                    </li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Project-Based Learning</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      Five major projects per course
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      GitHub integration for portfolio building
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      AI-powered project feedback
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Technology Tracks */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Technology Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-sky-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Next.js Full-Stack</h3>
                  <p className="text-sky-100">Master modern web development with Next.js 14 and related technologies</p>
                </div>
                <div className="bg-sky-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">MERN Stack</h3>
                  <p className="text-sky-100">Build powerful applications with MongoDB, Express, React, and Node.js</p>
                </div>
                <div className="bg-sky-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Django + React</h3>
                  <p className="text-sky-100">Combine Python&apos;s powerful Django framework with React&apos;s frontend capabilities</p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Professional Tools */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Professional Development Tools</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  {
                    name: "GitHub Integration",
                    icon: "🔗"
                  },
                  {
                    name: "VS Code Compatible",
                    icon: "💻"
                  },
                  {
                    name: "Docker Support",
                    icon: "🐳"
                  },
                  {
                    name: "Deployment Tools",
                    icon: "🚀"
                  }
                ].map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <p className="font-bold">{tool.name}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Details */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Built on Next.js 14",
                    description: "Utilizing the latest features for optimal performance"
                  },
                  {
                    title: "Advanced AI Models",
                    description: "Powered by state-of-the-art language models"
                  },
                  {
                    title: "Cloud Infrastructure",
                    description: "Scalable and reliable cloud-based platform"
                  },
                  {
                    title: "Enterprise Security",
                    description: "Industry-standard security protocols"
                  }
                ].map((spec) => (
                  <div key={spec.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-4">{spec.title}</h3>
                    <p className="text-gray-600">{spec.description}</p>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Development Journey?</h2>
              <p className="text-xl mb-8">Join our waitlist to be the first to experience CodeCamp Advantage in 2025</p>
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
