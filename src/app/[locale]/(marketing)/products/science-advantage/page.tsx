import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Target,
  RefreshCw,
  GraduationCap,
  ArrowRight,
  Check,
  Microscope,
  Atom,
  Sparkles,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "Science Advantage - Reading Advantage Thailand",
  description:
    "Comprehensive K-12 science education platform aligned with NGSS standards. Interactive learning, adaptive curriculum, and teacher support tools.",
  openGraph: {
    title: "Science Advantage - Reading Advantage Thailand",
    description:
      "Transform K-12 science education with our comprehensive, NGSS-aligned platform launching in 2025.",
  },
};

export default async function ScienceAdvantage() {
  const t = await getScopedI18n("pages.products.scienceAdvantage");
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with rose gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-rose-300 to-rose-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-rose-300/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-rose-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                {t("hero.comingSoon")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-rose-50">
                {t("hero.subtitle")}
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-rose-100">
                {t("hero.description")}
              </p>
              <Link
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-white text-rose-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-rose-50"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
                <Image
                  src="/science-advantage.png"
                  alt="Science Advantage Logo"
                  width={350}
                  height={350}
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12">
              <span className="bg-gradient-to-r from-rose-600 to-rose-600 bg-clip-text text-transparent">
                {t("coreValue.heading")}
              </span>
            </h2>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl mb-12 max-w-3xl mx-auto">
              <Image
                src="/images/science-advantage-hero.jpg"
                alt="Science Advantage"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-3xl shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-10 rounded-3xl bg-gradient-to-br from-rose-50 to-rose-50 border border-rose-100 hover:border-rose-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <BookOpen className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {t("coreValue.features.0.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("coreValue.features.0.description")}
                </p>
              </div>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-rose-50 to-rose-50 border border-rose-100 hover:border-rose-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <Target className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {t("coreValue.features.1.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("coreValue.features.1.description")}
                </p>
              </div>
              <div className="p-10 rounded-3xl bg-gradient-to-br from-rose-50 to-rose-50 border border-rose-100 hover:border-rose-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto">
                  <RefreshCw className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {t("coreValue.features.2.title")}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("coreValue.features.2.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gradient-to-br from-rose-50 via-rose-50 to-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-rose-600 to-rose-600 bg-clip-text text-transparent">
              {t("keyFeatures.heading")}
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                icon: RefreshCw,
                title: t("keyFeatures.features.1.title"),
                points: [
                  { text: t("keyFeatures.features.1.points.0"), i: 0 },
                  { text: t("keyFeatures.features.1.points.1"), i: 1 },
                  { text: t("keyFeatures.features.1.points.2"), i: 2 },
                  { text: t("keyFeatures.features.1.points.3"), i: 3 },
                ],
              },
              {
                icon: Microscope,
                title: t("keyFeatures.features.2.title"),
                points: [
                  { text: t("keyFeatures.features.2.points.0"), i: 0 },
                  { text: t("keyFeatures.features.2.points.1"), i: 1 },
                  { text: t("keyFeatures.features.2.points.2"), i: 2 },
                  { text: t("keyFeatures.features.2.points.3"), i: 3 },
                ],
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-10 shadow-lg border border-rose-100 hover:border-rose-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
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
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 leading-relaxed">
                        {point.text.replace(/^[✓•]\s*/, "")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-to-br from-rose-800 via-rose-900 to-rose-900 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
            {t("targetAudience.heading")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: t("targetAudience.audiences.0.title"),
                points: [
                  { text: t("targetAudience.audiences.0.points.0"), i: 0 },
                  { text: t("targetAudience.audiences.0.points.1"), i: 1 },
                  { text: t("targetAudience.audiences.0.points.2"), i: 2 },
                  { text: t("targetAudience.audiences.0.points.3"), i: 3 },
                ],
              },
              {
                icon: Atom,
                title: t("targetAudience.audiences.1.title"),
                points: [
                  { text: t("targetAudience.audiences.1.points.0"), i: 0 },
                  { text: t("targetAudience.audiences.1.points.1"), i: 1 },
                  { text: t("targetAudience.audiences.1.points.2"), i: 2 },
                  { text: t("targetAudience.audiences.1.points.3"), i: 3 },
                ],
              },
              {
                icon: Sparkles,
                title: t("targetAudience.audiences.2.title"),
                points: [
                  { text: t("targetAudience.audiences.2.points.0"), i: 0 },
                  { text: t("targetAudience.audiences.2.points.1"), i: 1 },
                  { text: t("targetAudience.audiences.2.points.2"), i: 2 },
                  { text: t("targetAudience.audiences.2.points.3"), i: 3 },
                ],
              },
            ].map((audience, index) => (
              <div
                key={audience.title}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <audience.icon
                    className="w-7 h-7 text-white"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl font-bold mb-6 text-white">
                  {audience.title}
                </h3>
                <ul className="space-y-3">
                  {audience.points.map((point) => (
                    <li key={point.i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-rose-300 mt-1 flex-shrink-0" />
                      <span className="text-rose-100 leading-relaxed">
                        {point.text.replace(/^[•]\s*/, "")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        id="waitlist"
        className="bg-gradient-to-br from-white via-rose-50 to-white py-24"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              {t("hero.comingSoon")}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              {t("waitlist.heading")}
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto">
              {t("waitlist.description")}
            </p>
            <div className="bg-white rounded-3xl shadow-xl border border-rose-100 p-8">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={t("waitlist.form.placeholder")}
                  className="flex-1 px-6 py-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:from-rose-600 hover:to-rose-700 hover:shadow-lg hover:-translate-y-1"
                >
                  {t("waitlist.form.button")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
