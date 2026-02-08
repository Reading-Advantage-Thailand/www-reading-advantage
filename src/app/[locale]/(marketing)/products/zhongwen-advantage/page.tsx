import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/marketing/hero-section";
import { getScopedI18n } from "@/locales/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n("pages.products.zhongwenAdvantage.hero");

  return {
    title:
      "Zhongwen Advantage - The Future of Chinese Learning | Reading Advantage Thailand",
    description: t("description"),
    openGraph: {
      title: "Zhongwen Advantage - The Future of Chinese Learning",
      description: t("description"),
    },
  };
}

export default async function ZhongwenAdvantage() {
  const t = await getScopedI18n("pages.products.zhongwenAdvantage.hero");

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        height="medium"
        alignment="left"
        title={t("title")}
        description={`${t("subtitle")} ${t("description")}`}
        badge={{
          text: t("badge"),
          variant: "amber",
        }}
        ctaButton={{
          text: t("ctaButton"),
          href: "/contact",
          variant: "primary",
        }}
        floatingImage={{
          src: "/zhongwen-advantage.png",
          alt: "Zhongwen Advantage Logo",
        }}
      />

      {/* Key Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-fuchsia-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Dual-Level Learning System
                </h3>
                <ul className="text-left list-disc pl-6 space-y-2">
                  <li>18 Reading Advantage levels mapped to 6 HSK levels</li>
                  <li>Granular progress tracking</li>
                  <li>Clear learning progression</li>
                </ul>
              </div>

              <div className="bg-fuchsia-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Adaptive Technology
                </h3>
                <ul className="text-left list-disc pl-6 space-y-2">
                  <li>AI-powered personalized learning paths</li>
                  <li>Intelligent feedback system</li>
                  <li>Spaced repetition optimization</li>
                </ul>
              </div>

              <div className="bg-fuchsia-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">📖</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Comprehensive Content
                </h3>
                <ul className="text-left list-disc pl-6 space-y-2">
                  <li>Extensive reading materials</li>
                  <li>Both simplified and traditional characters</li>
                  <li>Varied content types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="bg-fuchsia-200 py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              Interactive Learning Elements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-fuchsia-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">✍️</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Character Mastery
                </h3>
                <p className="text-center">
                  Advanced stroke recognition technology with real-time feedback
                </p>
              </div>
              <div className="bg-fuchsia-300 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">🗣️</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Pronunciation Perfect
                </h3>
                <p className="text-center">
                  Tone recognition exercises with AI-powered feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              For Educators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-fuchsia-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">👥</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Class Management
                </h3>
                <p className="text-center">
                  Comprehensive tools for tracking and managing student progress
                </p>
              </div>
              <div className="bg-fuchsia-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">📊</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Progress Tracking
                </h3>
                <p className="text-center">
                  Detailed analytics and performance insights
                </p>
              </div>
              <div className="bg-fuchsia-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-center">📝</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  Custom Content
                </h3>
                <p className="text-center">
                  Create and assign customized learning materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-fuchsia-200 py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-fuchsia-300 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">
                  When will Zhongwen Advantage launch?
                </h3>
                <p>
                  Our platform is scheduled to launch in early 2025. Join our
                  waitlist for early access opportunities.
                </p>
              </div>
              <div className="bg-fuchsia-300 p-6 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2">
                  What are the technical requirements?
                </h3>
                <p>
                  Zhongwen Advantage will be accessible on any modern web
                  browser, with mobile apps available for iOS and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-fuchsia-600 text-fuchsia-50 py-16 bg-gradient-to-br from-fuchsia-700 to-fuchsia-900">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold mb-6">
              Be First to Experience Zhongwen Advantage
            </h2>
            <p className="text-xl mb-8">
              Join our waitlist for early access and exclusive updates
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-fuchsia-400 hover:bg-fuchsia-500 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Join Waitlist
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-fuchsia-50 text-fuchsia-800 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
