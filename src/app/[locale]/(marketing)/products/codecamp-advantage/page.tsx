import { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Terminal,
  Cpu,
  Braces,
  ArrowRight,
  Check,
  Sparkles,
  SparklesIcon,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "CodeCamp Advantage - Reading Advantage Thailand",
  description:
    "AI-powered full-stack development learning platform with personalized instruction and project-based curriculum.",
  openGraph: {
    title: "CodeCamp Advantage - Reading Advantage Thailand",
    description:
      "Transform your development journey with our AI-powered learning platform launching in 2025.",
  },
};

export default async function CodeCampAdvantage() {
  const t = await getScopedI18n("pages.products.codecampAdvantage");
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with dark slate gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-slate-500/20 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              {t("hero.comingSoon")}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed mb-4 text-slate-300">
              {t("hero.subtitle")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-slate-400 max-w-2xl mx-auto">
              {t("hero.description")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:shadow-amber-500/30"
            >
              {t("cta.buttons.joinWaitlist")}
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
              <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                {t("keyFeatures.heading")}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: SparklesIcon,
                  title: t("keyFeatures.personalizedAI.title"),
                  points: [
                    { text: t("keyFeatures.personalizedAI.points.0"), i: 0 },
                    { text: t("keyFeatures.personalizedAI.points.1"), i: 1 },
                    { text: t("keyFeatures.personalizedAI.points.2"), i: 2 },
                  ],
                },
                {
                  icon: Braces,
                  title: t("keyFeatures.projectBasedLearning.title"),
                  points: [
                    {
                      text: t("keyFeatures.projectBasedLearning.points.0"),
                      i: 0,
                    },
                    {
                      text: t("keyFeatures.projectBasedLearning.points.1"),
                      i: 1,
                    },
                    {
                      text: t("keyFeatures.projectBasedLearning.points.2"),
                      i: 2,
                    },
                  ],
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-10 border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <feature.icon
                      className="w-7 h-7 text-amber-400"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-slate-900">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point.i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check
                            className="w-3 h-3 text-white"
                            strokeWidth={3}
                          />
                        </div>
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

      {/* Technology Tracks */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            {t("technologyTracks.heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Code2,
                title: t("technologyTracks.tracks.0.title"),
                description: t("technologyTracks.tracks.0.description"),
              },
              {
                icon: Terminal,
                title: t("technologyTracks.tracks.1.title"),
                description: t("technologyTracks.tracks.1.description"),
              },
              {
                icon: Cpu,
                title: t("technologyTracks.tracks.2.title"),
                description: t("technologyTracks.tracks.2.description"),
              },
            ].map((track, index) => (
              <div
                key={track.title}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <track.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {track.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t("cta.heading")}
            </h2>
            <p className="text-2xl mb-12 text-slate-400 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:shadow-amber-500/30"
              >
                {t("cta.buttons.joinWaitlist")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-slate-700 hover:border-slate-400"
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
