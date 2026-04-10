import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Bot,
  BookMarked,
  PenTool,
  MessageCircle,
  Users,
  BarChart3,
  FileText,
  ArrowRight,
  Globe,
  Sparkles,
} from "lucide-react";
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
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with red/rose gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-red-500 via-rose-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-red-400/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-rose-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              {t("badge")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-4 text-red-50">
              {t("subtitle")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-red-100">
              {t("description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-red-50"
            >
              {t("ctaButton")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Dual-Level Learning System",
                  points: [
                    "18 Reading Advantage levels mapped to 6 HSK levels",
                    "Granular progress tracking",
                    "Clear learning progression",
                  ],
                },
                {
                  icon: Bot,
                  title: "Adaptive Technology",
                  points: [
                    "AI-powered personalized learning paths",
                    "Intelligent feedback system",
                    "Spaced repetition optimization",
                  ],
                },
                {
                  icon: BookMarked,
                  title: "Comprehensive Content",
                  points: [
                    "Extensive reading materials",
                    "Both simplified and traditional characters",
                    "Varied content types",
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-10 border border-red-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <feature.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Learning */}
      <section className="bg-gradient-to-br from-red-50 via-rose-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Interactive Learning Elements
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: PenTool,
                  title: "Character Mastery",
                  description:
                    "Advanced stroke recognition technology with real-time feedback",
                },
                {
                  icon: MessageCircle,
                  title: "Pronunciation Perfect",
                  description:
                    "Tone recognition exercises with AI-powered feedback",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-3xl p-10 shadow-lg border border-red-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <feature.icon
                      className="w-7 h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Features */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                For Educators
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Class Management",
                  description:
                    "Comprehensive tools for tracking and managing student progress",
                },
                {
                  icon: BarChart3,
                  title: "Progress Tracking",
                  description: "Detailed analytics and performance insights",
                },
                {
                  icon: FileText,
                  title: "Custom Content",
                  description:
                    "Create and assign customized learning materials",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-10 border border-red-100 hover:border-red-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                    <feature.icon
                      className="w-7 h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-red-50 via-rose-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "When will Zhongwen Advantage launch?",
                  answer:
                    "Our platform is scheduled to launch in early 2025. Join our waitlist for early access opportunities.",
                },
                {
                  question: "What are the technical requirements?",
                  answer:
                    "Zhongwen Advantage will be accessible on any modern web browser, with mobile apps available for iOS and Android.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-red-100 hover:border-red-200 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Globe className="w-4 h-4" />
              Coming in 2025
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Be First to Experience Zhongwen Advantage
            </h2>
            <p className="text-2xl mb-12 text-red-100 max-w-2xl mx-auto">
              Join our waitlist for early access and exclusive updates
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-red-700"
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
