"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  Zap,
  Target,
  Mail,
  ArrowRight,
  Check,
  Monitor,
  Tablet,
  Smartphone,
  Users,
  GraduationCap,
  FileText,
  Gamepad2,
} from "lucide-react";
import { useScopedI18n } from "@/locales/client";
import HeroSection from "@/components/marketing/hero-section";

export default function ReadingAdvantage() {
  const t = useScopedI18n("pages.products.readingAdvantage");
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const keyFeatures = [
    {
      icon: BookOpen,
      title: t("keyFeatures.features.0.title"),
      items: [
        t("keyFeatures.features.0.items.0"),
        t("keyFeatures.features.0.items.1"),
        t("keyFeatures.features.0.items.2"),
      ],
    },
    {
      icon: Target,
      title: t("keyFeatures.features.1.title"),
      items: [
        t("keyFeatures.features.1.items.0"),
        t("keyFeatures.features.1.items.1"),
        t("keyFeatures.features.1.items.2"),
      ],
    },
    {
      icon: Zap,
      title: t("keyFeatures.features.2.title"),
      items: [
        t("keyFeatures.features.2.items.0"),
        t("keyFeatures.features.2.items.1"),
        t("keyFeatures.features.2.items.2"),
      ],
    },
  ];

  const games = [
    {
      title: t("games.games.0.title"),
      description: t("games.games.0.description"),
      image: t("games.games.0.image"),
    },
    {
      title: t("games.games.1.title"),
      description: t("games.games.1.description"),
      image: t("games.games.1.image"),
    },
    {
      title: t("games.games.2.title"),
      description: t("games.games.2.description"),
      image: t("games.games.2.image"),
    },
    {
      title: t("games.games.3.title"),
      description: t("games.games.3.description"),
      image: t("games.games.3.image"),
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        height="medium"
        alignment="left"
        title={t("hero.title")}
        description={`${t("hero.subtitle")} ${t("hero.description")}`}
        ctaButton={{
          text: t("platformFeatures.heading"),
          href: "#platform",
          variant: "white",
          icon: <ArrowRight className="w-6 h-6" />,
        }}
        floatingImage={{
          src: "/images/students-at-board.png",
          alt: "Students at interactive display board using Reading Advantage platform",
          sizes: "(max-width: 1280px) 0px, 600px",
        }}
        customGradient="bg-gradient-to-br from-amber-50 via-orange-50 to-sky-100"
      />

      {/* Blended Learning - Asymmetric layout */}
      <section className="relative py-24 bg-white" id="blended-learning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <GraduationCap className="w-4 h-4" />
                {t("blendedLearning.newBadge")}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                {t("blendedLearning.heading")}
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {t("teacherTools.tools.0.title")}
                    </h3>
                    <p className="text-slate-600">
                      {t("teacherTools.tools.0.items.0")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {t("blendedLearning.studentWorkbooks.title")}
                    </h3>
                    <p className="text-slate-600">
                      {t("blendedLearning.studentWorkbooks.description")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {t("technicalHighlights.features.0.title")}
                    </h3>
                    <p className="text-slate-600">
                      {t("technicalHighlights.features.0.description")}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-10 py-5 rounded-2xl hover:from-sky-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-sky-500/30 hover:-translate-y-1 font-bold text-lg"
              >
                {t("cta.buttons.signUp")}
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl blur-3xl -translate-y-4 translate-x-4" />
                <div className="relative bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-3xl p-6">
                  <div className="space-y-6">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/blended-learning.png"
                        alt="Teacher demonstrating blended learning approach with Reading Advantage materials"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/workbook-cover.png"
                        alt="Reading Advantage student workbook with guided reading exercises and activities"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Modern card-less design */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-in fade-in duration-700">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  {t("keyFeatures.heading")}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-white rounded-3xl p-10 border border-sky-100 transition-all duration-300 hover:-translate-y-3 hover:border-sky-200 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <feature.icon
                      className="w-10 h-10 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {feature.title}
                  </h3>
                  <ul className="space-y-4">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">
                          {item}
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

      {/* Games Section */}
      <section className="relative py-24 bg-gradient-to-br from-amber-50 via-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-in fade-in duration-700">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Gamepad2 className="w-4 h-4" />
                {t("games.newBadge")}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {t("games.heading")}
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                {t("games.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {games.map((game, index) => (
                <div
                  key={game.title}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {game.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {game.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {t("videoSection.heading")}
              </h2>
            </div>

            <div
              className={`mx-auto transition-all duration-500 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                isVideoExpanded ? "w-[95%]" : "max-w-4xl"
              }`}
              onClick={() => setIsVideoExpanded(!isVideoExpanded)}
            >
              <div className="relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl overflow-hidden shadow-2xl border border-sky-100">
                <div className="relative aspect-video rounded-t-3xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/H-2YCFvMNns"
                    title="Reading Advantage Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-sky-600 font-semibold flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    {isVideoExpanded
                      ? t("videoSection.expanded")
                      : t("videoSection.collapsed")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo - Large showcase with 3 views */}
      <section
        className="relative py-24 bg-gradient-to-br from-sky-600 via-blue-700 to-sky-800 text-white overflow-hidden"
        id="platform"
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t("platformFeatures.heading")}
              </h2>
            </div>

            <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl -translate-y-4" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                {/* Desktop - Full width */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Monitor className="w-8 h-8 text-sky-300" />
                    <h3 className="text-2xl font-bold text-white">Desktop</h3>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src="/images/app-on-desktop.png"
                      alt="Reading Advantage app displayed on desktop computer screen showing student dashboard"
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Tablet + Mobile - 55/45 split */}
                <div className="grid grid-cols-[11fr_9fr] gap-6">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Tablet className="w-8 h-8 text-sky-300" />
                      <h3 className="text-2xl font-bold text-white">Tablet</h3>
                    </div>
                    <div className="relative aspect-[2/3] rounded-xl overflow-hidden">
                      <Image
                        src="/images/reading-advantage-demo.png"
                        alt="Reading Advantage app displayed on tablet device with reading exercises interface"
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <Smartphone className="w-8 h-8 text-sky-300" />
                      <h3 className="text-2xl font-bold text-white">Mobile</h3>
                    </div>
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                      <Image
                        src="/images/app-on-phone.png"
                        alt="Reading Advantage app displayed on mobile phone with personalized learning interface"
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      {
                        title: t("platformFeatures.features.0.title"),
                        desc: t("platformFeatures.features.0.description"),
                      },
                      {
                        title: t("platformFeatures.features.1.title"),
                        desc: t("platformFeatures.features.1.description"),
                      },
                      {
                        title: t("platformFeatures.features.2.title"),
                        desc: t("platformFeatures.features.2.description"),
                      },
                    ].map((feat, index) => (
                      <div
                        key={index}
                        className="bg-white/10 rounded-xl p-4 border border-white/10"
                      >
                        <h4 className="font-bold text-sky-100 mb-2">
                          {feat.title}
                        </h4>
                        <p className="text-sm text-sky-200">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Dashboard */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl blur-3xl -translate-y-4 -translate-x-4" />
                <div className="relative space-y-6">
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/teacher-at-board.png"
                      alt="Teacher guiding students at interactive classroom display board"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/teacher-and-dashboard.png"
                      alt="Teacher analytics dashboard showing student reading progress and performance metrics"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <GraduationCap className="w-4 h-4" />
                {t("teacherTools.heading")}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                {t("teacherTools.heading")}
              </h2>

              <div className="space-y-6 mb-12">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-sky-600" />
                    {t("teacherTools.tools.0.title")}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t("teacherTools.tools.0.items.0"),
                      t("teacherTools.tools.0.items.1"),
                      t("teacherTools.tools.0.items.2"),
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <Check className="w-6 h-6 text-sky-600" />
                    {t("teacherTools.tools.1.title")}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t("teacherTools.tools.1.items.0"),
                      t("teacherTools.tools.1.items.1"),
                      t("teacherTools.tools.1.items.2"),
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Experience */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Users className="w-4 h-4" />
                {t("keyFeatures.features.0.title")}
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                {t("keyFeatures.features.2.title")}
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  {
                    title: t("platformFeatures.features.3.title"),
                    desc: t("platformFeatures.features.3.description"),
                  },
                  {
                    title: t("platformFeatures.features.4.title"),
                    desc: t("platformFeatures.features.4.description"),
                  },
                  {
                    title: t("platformFeatures.features.5.title"),
                    desc: t("platformFeatures.features.5.description"),
                  },
                ].map((feat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-sky-100 shadow-lg"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl blur-3xl -translate-y-4 translate-x-4" />
                <div className="relative space-y-6">
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/student-and-dashboard.png"
                      alt="Student dashboard showing personalized reading progress and learning achievements"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/small-group.png"
                      alt="Students collaborating in small group learning session with Reading Advantage materials"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t("resultsSection.heading")}
              </h2>
              <p className="text-2xl text-sky-100 max-w-3xl mx-auto mb-8">
                {t("resultsSection.description")}
              </p>
              <h3 className="text-3xl font-bold text-white">
                {t("resultsSection.title")}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  value: t("resultsSection.stats.0.value"),
                  label: t("resultsSection.stats.0.label"),
                },
                {
                  value: t("resultsSection.stats.1.value"),
                  label: t("resultsSection.stats.1.label"),
                },
                {
                  value: t("resultsSection.stats.2.value"),
                  label: t("resultsSection.stats.2.label"),
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    {stat.value}
                  </div>
                  <p className="text-xl text-sky-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-in fade-in duration-700">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  {t("technicalHighlights.heading")}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: t("technicalHighlights.features.0.title"),
                  description: t("technicalHighlights.features.0.description"),
                },
                {
                  icon: Target,
                  title: t("technicalHighlights.features.1.title"),
                  description: t("technicalHighlights.features.1.description"),
                },
                {
                  icon: Monitor,
                  title: t("technicalHighlights.features.2.title"),
                  description: t("technicalHighlights.features.2.description"),
                },
                {
                  icon: Smartphone,
                  title: t("technicalHighlights.features.3.title"),
                  description: t("technicalHighlights.features.3.description"),
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-sky-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
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

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-sky-500 via-blue-600 to-sky-700 text-white overflow-hidden">
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {t("cta.heading")}
            </h2>
            <p className="text-2xl md:text-3xl text-sky-100 leading-relaxed mb-16 max-w-3xl mx-auto">
              {t("cta.description")}
            </p>

            <a
              href="mailto:support@reading-advantage.com?subject=Reading Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Reading Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options%0A- Implementation timeline%0A- Technical requirements%0A%0AThank you!"
              className="inline-flex items-center gap-4 bg-white text-sky-700 px-14 py-6 rounded-3xl hover:bg-sky-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-2 font-bold text-xl animate-in fade-in duration-700 delay-300 hover:scale-105"
            >
              <Mail className="w-8 h-8" />
              {t("cta.buttons.signUp")}
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-14 py-6 rounded-3xl hover:bg-white hover:text-sky-700 transition-all duration-300 font-bold text-xl ml-4 hover:scale-105"
            >
              <ArrowRight className="w-8 h-8" />
              {t("cta.buttons.freeTrial")}
            </Link>

            {/* Trust badges */}
            <div className="mt-20 flex flex-wrap justify-center gap-12 animate-in fade-in duration-700 delay-500">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {t("resultsSection.stats.0.value")}
                </div>
                <div className="text-sky-100 text-lg">
                  {t("resultsSection.stats.0.label")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {t("resultsSection.stats.1.value")}
                </div>
                <div className="text-sky-100 text-lg">
                  {t("resultsSection.stats.1.label")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">
                  {t("resultsSection.stats.2.value")}
                </div>
                <div className="text-sky-100 text-lg">
                  {t("resultsSection.stats.2.label")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
