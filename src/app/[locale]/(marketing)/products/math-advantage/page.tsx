import { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Target,
  Bot,
  Dumbbell,
  Clock,
  ArrowRight,
  Check,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "Math Advantage - Reading Advantage Thailand",
  description:
    "Revolutionary AI-enhanced math tutoring platform with personalized learning paths and advanced adaptive technology.",
  openGraph: {
    title: "Math Advantage - Reading Advantage Thailand",
    description:
      "Transform your math learning journey with our AI-enhanced tutoring platform launching in 2025.",
  },
};

export default async function MathAdvantage() {
  const t = await getScopedI18n("pages.products.mathAdvantage");
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with emerald/teal gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-emerald-400/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-teal-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              {t("hero.comingSoon")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-emerald-50">
              {t("hero.subtitle")} {t("hero.description")}
            </p>
            <Link
              href="mailto:support@reading-advantage.com?subject=Math Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Math Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options%0A- Implementation timeline%0A- Technical requirements%0A%0AThank you!"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-emerald-50"
            >
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {t("keyFeatures.heading")}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
                  {t("keyFeatures.smartProblemGeneration.title")}
                </h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.smartProblemGeneration.points.0")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.smartProblemGeneration.points.1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.smartProblemGeneration.points.2")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
                  {t("keyFeatures.structuredLearningPath.title")}
                </h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.structuredLearningPath.points.0")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.structuredLearningPath.points.1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.structuredLearningPath.points.2")}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 border border-emerald-100 hover:border-emerald-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Bot className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-slate-900">
                  {t("keyFeatures.aiPoweredSupport.title")}
                </h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.aiPoweredSupport.points.0")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.aiPoweredSupport.points.1")}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      {t("keyFeatures.aiPoweredSupport.points.2")}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Coverage */}
      <section className="bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 py-24">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
              {t("subjectCoverage.heading")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                t("subjectCoverage.subjects.0"),
                t("subjectCoverage.subjects.1"),
                t("subjectCoverage.subjects.2"),
                t("subjectCoverage.subjects.3"),
                t("subjectCoverage.subjects.4"),
                t("subjectCoverage.subjects.5"),
              ].map((subject) => (
                <div
                  key={subject}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-bold text-lg text-slate-900">
                    {subject}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
              {t("benefits.heading")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Dumbbell,
                  title: t("benefits.reasons.0.title"),
                  description: t("benefits.reasons.0.description"),
                },
                {
                  icon: Clock,
                  title: t("benefits.reasons.1.title"),
                  description: t("benefits.reasons.1.description"),
                },
                {
                  icon: Target,
                  title: t("benefits.reasons.2.title"),
                  description: t("benefits.reasons.2.description"),
                },
                {
                  icon: BarChart3,
                  title: t("benefits.reasons.3.title"),
                  description: t("benefits.reasons.3.description"),
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon
                      className="w-6 h-6 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-emerald-100">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t("cta.heading")}
            </h2>
            <p className="text-2xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:support@reading-advantage.com?subject=Math Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Math Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options%0A- Implementation timeline%0A- Technical requirements%0A%0AThank you!"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                {t("cta.button")}
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-emerald-700"
              >
                <Check className="w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
