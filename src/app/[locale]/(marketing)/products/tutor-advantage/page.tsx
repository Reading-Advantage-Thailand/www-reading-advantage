import { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  BookOpen,
  GraduationCap,
  Microscope,
  Handshake,
  Gem,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "Tutor Advantage - Reading Advantage Thailand",
  description:
    "Revolutionary AI-powered English tutoring platform launching in Thailand in 2025. Combining advanced technology with personalized instruction.",
  openGraph: {
    title: "Tutor Advantage - Reading Advantage Thailand",
    description:
      "Revolutionary AI-powered English tutoring platform launching in Thailand in 2025",
  },
};

export default async function TutorAdvantage() {
  const t = await getScopedI18n("pages.products.tutorAdvantage");
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with sky/blue gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-sky-500 via-blue-500 to-sky-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              {t("hero.comingSoon")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-4 text-sky-50">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-sky-100">
              {t("hero.description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-sky-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-sky-50"
            >
              {t("cta.buttons.register")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: t("valuePropositions.features.0.title"),
                  points: [
                    { text: t("valuePropositions.features.0.points.0"), i: 0 },
                    { text: t("valuePropositions.features.0.points.1"), i: 1 },
                    { text: t("valuePropositions.features.0.points.2"), i: 2 },
                  ],
                },
                {
                  icon: BookOpen,
                  title: t("valuePropositions.features.1.title"),
                  points: [
                    { text: t("valuePropositions.features.1.points.0"), i: 0 },
                    { text: t("valuePropositions.features.1.points.1"), i: 1 },
                    { text: t("valuePropositions.features.1.points.2"), i: 2 },
                  ],
                },
                {
                  icon: GraduationCap,
                  title: t("valuePropositions.features.2.title"),
                  points: [
                    { text: t("valuePropositions.features.2.points.0"), i: 0 },
                    { text: t("valuePropositions.features.2.points.1"), i: 1 },
                    { text: t("valuePropositions.features.2.points.2"), i: 2 },
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 border border-sky-100 hover:border-sky-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                    <feature.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point.i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
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

      {/* Platform Features */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              {t("platformFeatures.heading")}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: t("platformFeatures.features.0.title"),
                description: t("platformFeatures.features.0.description"),
              },
              {
                title: t("platformFeatures.features.1.title"),
                description: t("platformFeatures.features.1.description"),
              },
              {
                title: t("platformFeatures.features.2.title"),
                description: t("platformFeatures.features.2.description"),
              },
              {
                title: t("platformFeatures.features.3.title"),
                description: t("platformFeatures.features.3.description"),
              },
              {
                title: t("platformFeatures.features.4.title"),
                description: t("platformFeatures.features.4.description"),
              },
              {
                title: t("platformFeatures.features.5.title"),
                description: t("platformFeatures.features.5.description"),
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 shadow-lg border border-sky-100 hover:border-sky-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gradient-to-br from-sky-700 via-blue-700 to-sky-800 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            {t("trustSignals.heading")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Microscope,
                title: t("trustSignals.items.0.title"),
                description: t("trustSignals.items.0.description"),
              },
              {
                icon: Handshake,
                title: t("trustSignals.items.1.title"),
                description: t("trustSignals.items.1.description"),
              },
              {
                icon: Gem,
                title: t("trustSignals.items.2.title"),
                description: t("trustSignals.items.2.description"),
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sky-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-600 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t("cta.heading")}
            </h2>
            <p className="text-2xl mb-12 text-sky-100 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-sky-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                {t("cta.buttons.register")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-sky-700"
              >
                {t("cta.buttons.apply")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
