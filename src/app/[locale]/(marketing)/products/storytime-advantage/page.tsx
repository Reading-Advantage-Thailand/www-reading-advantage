import { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Scale,
  Handshake,
  FileText,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title:
    "Storytime Advantage - Complete Early Literacy Curriculum | Reading Advantage Thailand",
  description:
    "Launching in 2025: A comprehensive K-3 early literacy curriculum combining digital innovation with hands-on learning. Join the waitlist for early access.",
  openGraph: {
    title: "Storytime Advantage - The Future of Early Literacy Education",
    description:
      "Transform early literacy education with our comprehensive K-3 curriculum launching in 2025. Combining digital innovation with proven teaching methods.",
  },
};

export default async function StorytimeAdvantage() {
  const t = await getScopedI18n("pages.products.storytimeAdvantage");
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with pink/rose gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-rose-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              {t("hero.comingSoon")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-4 text-pink-50">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-pink-100">
              {t("hero.description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-pink-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-pink-50"
            >
              {t("cta.buttons.joinWaitlist")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                {t("coreValue.heading")}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: t("coreValue.features.0.title"),
                  description: t("coreValue.features.0.description"),
                },
                {
                  icon: Scale,
                  title: t("coreValue.features.1.title"),
                  description: t("coreValue.features.1.description"),
                },
                {
                  icon: Handshake,
                  title: t("coreValue.features.2.title"),
                  description: t("coreValue.features.2.description"),
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 border border-pink-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <feature.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
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

      {/* Key Features */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                {t("keyFeatures.heading")}
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: t("keyFeatures.features.0.title"),
                  points: [
                    { text: t("keyFeatures.features.0.points.0"), i: 0 },
                    { text: t("keyFeatures.features.0.points.1"), i: 1 },
                    { text: t("keyFeatures.features.0.points.2"), i: 2 },
                    { text: t("keyFeatures.features.0.points.3"), i: 3 },
                  ],
                },
                {
                  icon: FileText,
                  title: t("keyFeatures.features.1.title"),
                  points: [
                    { text: t("keyFeatures.features.1.points.0"), i: 0 },
                    { text: t("keyFeatures.features.1.points.1"), i: 1 },
                    { text: t("keyFeatures.features.1.points.2"), i: 2 },
                    { text: t("keyFeatures.features.1.points.3"), i: 3 },
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-3xl p-10 shadow-lg border border-pink-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <feature.icon
                      className="w-7 h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-slate-900">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point.i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">
                          {point.text}
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

      {/* Teacher Tools */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                {t("teacherTools.heading")}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: t("teacherTools.tools.0.title"),
                  description: t("teacherTools.tools.0.description"),
                },
                {
                  icon: Users,
                  title: t("teacherTools.tools.1.title"),
                  description: t("teacherTools.tools.1.description"),
                },
                {
                  icon: BarChart3,
                  title: t("teacherTools.tools.2.title"),
                  description: t("teacherTools.tools.2.description"),
                },
              ].map((tool, index) => (
                <div
                  key={tool.title}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 border border-pink-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                    <tool.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-slate-900">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-center">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                {t("faq.heading")}
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: t("faq.questions.0.question"),
                  answer: t("faq.questions.0.answer"),
                },
                {
                  question: t("faq.questions.1.question"),
                  answer: t("faq.questions.1.answer"),
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100 hover:border-pink-200 transition-all duration-300"
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
      <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-pink-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t("cta.heading")}
            </h2>
            <p className="text-2xl mb-12 text-pink-100 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                {t("cta.buttons.joinWaitlist")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-pink-700"
              >
                {t("cta.buttons.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
