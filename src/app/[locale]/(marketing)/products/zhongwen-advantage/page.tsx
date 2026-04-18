import { Metadata } from "next";
import Image from "next/image";
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
  Mail,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";
import { LargeImageBreak } from "@/components/ui/large-image-break";
import { FAQAccordion } from "@/components/ui/faq-accordion";

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
  const heroT = await getScopedI18n("pages.products.zhongwenAdvantage.hero");
  const t = await getScopedI18n("pages.products.zhongwenAdvantage");

  const interactiveFeatures = [
    {
      icon: PenTool,
      title: t("interactiveLearning.features.0.title"),
      description: t("interactiveLearning.features.0.description"),
    },
    {
      icon: MessageCircle,
      title: t("interactiveLearning.features.1.title"),
      description: t("interactiveLearning.features.1.description"),
    },
  ];

  const educatorFeatures = [
    {
      icon: Users,
      title: t("educatorFeatures.features.0.title"),
      description: t("educatorFeatures.features.0.description"),
    },
    {
      icon: BarChart3,
      title: t("educatorFeatures.features.1.title"),
      description: t("educatorFeatures.features.1.description"),
    },
    {
      icon: FileText,
      title: t("educatorFeatures.features.2.title"),
      description: t("educatorFeatures.features.2.description"),
    },
  ];

  const faqItems = [
    {
      question: t("faq.questions.0.question"),
      answer: t("faq.questions.0.answer"),
    },
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer"),
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer"),
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Inline with fuchsia gradient */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-fuchsia-300 to-fuchsia-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-fuchsia-300/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-fuchsia-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-fuchsia-100 text-fuchsia-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                {heroT("badge")}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {heroT("title")}
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-4 text-fuchsia-50">
                {heroT("subtitle")}
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-fuchsia-100">
                {heroT("description")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-fuchsia-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg hover:bg-fuchsia-50"
              >
                {heroT("ctaButton")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <Image
                src="/zhongwen-advantage.png"
                alt="Zhongwen Advantage"
                width={400}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Color Room (Fuchsia) - Level Mapping */}
      <section className="bg-gradient-to-br from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="uppercase tracking-widest text-xs font-semibold text-fuchsia-100 mb-6 text-center">
              LEVEL MAPPING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              {t("levelMapping.heading")}
            </h2>
            <div
              data-testid="level-mapping"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Column 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("levelMapping.columns.0.title")}
                  </h3>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((level) => (
                    <div
                      key={level}
                      className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3"
                    >
                      <span className="text-white font-medium">
                        {t("levelMapping.columns.0.levelPrefix")} {level}
                      </span>
                      <ArrowRight className="w-4 h-4 text-fuchsia-200" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-fuchsia-200 text-sm">
                  {t("levelMapping.columns.0.mapsTo")}
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("levelMapping.columns.1.title")}
                  </h3>
                </div>
                <div className="space-y-3">
                  {[7, 8, 9, 10, 11, 12].map((level) => (
                    <div
                      key={level}
                      className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3"
                    >
                      <span className="text-white font-medium">
                        {t("levelMapping.columns.1.levelPrefix")} {level}
                      </span>
                      <ArrowRight className="w-4 h-4 text-fuchsia-200" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-fuchsia-200 text-sm">
                  {t("levelMapping.columns.1.mapsTo")}
                </div>
              </div>

              {/* Column 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookMarked className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t("levelMapping.columns.2.title")}
                  </h3>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6].map((level) => (
                    <div
                      key={level}
                      className="bg-white/10 rounded-xl px-4 py-3 text-center"
                    >
                      <span className="text-white font-medium">
                        {t("levelMapping.columns.2.levelPrefix")} {level}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-fuchsia-200 text-sm">
                  {t("levelMapping.columns.2.mapsTo")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <LargeImageBreak
        data-testid="image-break"
        src="/images/zhongwen-advantage-hero.jpg"
        alt="Chinese calligraphy and learning materials"
        overlayText={
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("imageBreak.title")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <BookOpen className="w-6 h-6 text-fuchsia-300 mb-2" />
                <p className="text-white font-medium text-sm">
                  {t("imageBreak.highlights.0")}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Bot className="w-6 h-6 text-fuchsia-300 mb-2" />
                <p className="text-white font-medium text-sm">
                  {t("imageBreak.highlights.1")}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Globe className="w-6 h-6 text-fuchsia-300 mb-2" />
                <p className="text-white font-medium text-sm">
                  {t("imageBreak.highlights.2")}
                </p>
              </div>
            </div>
          </div>
        }
        overlayPosition="bottom-left"
      />

      {/* Asymmetric 7/5 - Interactive Learning */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="uppercase tracking-widest text-xs font-semibold text-fuchsia-600 mb-6">
              INTERACTIVE LEARNING
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
                  {t("interactiveLearning.heading")}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {t("interactiveLearning.description")}
                </p>
                <div className="space-y-4">
                  {[
                    t("interactiveLearning.points.0"),
                    t("interactiveLearning.points.1"),
                    t("interactiveLearning.points.2"),
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-fuchsia-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                {interactiveFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    data-testid="editorial-card"
                    className="bg-gradient-to-br from-fuchsia-50 to-white rounded-[40px] p-10 border border-fuchsia-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <feature.icon
                        className="w-7 h-7 text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
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
        </div>
      </section>

      {/* Teacher Features - 3-column grid */}
      <section className="bg-gradient-to-br from-fuchsia-50 via-fuchsia-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="uppercase tracking-widest text-xs font-semibold text-fuchsia-600 mb-6 text-center">
              FOR EDUCATORS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
              {t("educatorFeatures.heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educatorFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-3xl p-10 border border-fuchsia-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[320px] flex flex-col"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-6 shadow-md mx-auto">
                    <feature.icon
                      className="w-7 h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-center flex-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Waitlist - Combined section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div data-testid="combined-faq-waitlist" className="space-y-16">
            <div>
              <p className="uppercase tracking-widest text-xs font-semibold text-fuchsia-600 mb-6 text-center">
                QUESTIONS?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
                {t("faq.heading")}
              </h2>
              <FAQAccordion variant="fuchsia" items={faqItems} />
            </div>

            <div className="bg-gradient-to-br from-fuchsia-50 to-white rounded-3xl p-10 border border-fuchsia-100">
              <h3 className="text-2xl font-bold text-center mb-4 text-slate-900">
                {t("waitlist.heading")}
              </h3>
              <p className="text-slate-600 text-center mb-8">
                {t("waitlist.description")}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder={t("waitlist.emailPlaceholder")}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-fuchsia-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-fuchsia-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:bg-fuchsia-700 hover:-translate-y-1 shadow-lg"
                >
                  {t("waitlist.submitButton")}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-fuchsia-600 via-fuchsia-600 to-fuchsia-700 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Globe className="w-4 h-4" />
              {t("cta.badge")}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t("cta.heading")}
            </h2>
            <p className="text-2xl mb-12 text-fuchsia-100 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-fuchsia-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                {t("cta.button")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-fuchsia-700"
              >
                {t("cta.secondaryButton")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
