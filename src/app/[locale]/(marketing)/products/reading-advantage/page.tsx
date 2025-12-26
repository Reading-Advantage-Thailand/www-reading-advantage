"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BookOpen, Zap, Target, Mail, ArrowRight, Check, Monitor, Tablet, Smartphone, Users, GraduationCap, FileText } from "lucide-react"
import { useScopedI18n } from "@/locales/client"

export default function ReadingAdvantage() {
  const t = useScopedI18n("pages.products.readingAdvantage")
  const [isVideoExpanded, setIsVideoExpanded] = useState(false)

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
  ]

  return (
    <main className="overflow-x-hidden">
      {/* Hero - Full, bold, sky blue theme */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 overflow-hidden">
        {/* Organic blobs */}
        <div className="absolute top-32 right-20 w-80 h-80 bg-white/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-sky-300/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8">
                {t("hero.title")}
              </h1>

              <h2 className="text-2xl md:text-3xl text-sky-50 mb-8 font-semibold">
                {t("hero.subtitle")}
              </h2>

              <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mb-12 leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#platform"
                  className="group bg-white text-sky-700 px-10 py-5 rounded-2xl hover:bg-sky-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-1 font-bold text-lg inline-flex items-center gap-3"
                >
                  {t("platformFeatures.heading")}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#blended-learning"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-sky-700 transition-all duration-300 font-bold text-lg"
                >
                  Blended Learning
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating product preview */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
          <div className="relative w-[600px] h-[500px]">
            <div className="absolute inset-0 bg-white/20 rounded-[40px] blur-2xl z-0" />
            <Image
              src="/images/students-at-board.png"
              alt="Reading Advantage Platform"
              fill
              className="relative z-10 object-cover rounded-[32px] shadow-2xl"
              priority
            />
            {/* Gradient fade on top */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/90 via-sky-500/40 to-transparent rounded-[40px] z-20" />
          </div>
        </div>
      </section>

      {/* Blended Learning - Asymmetric layout */}
      <section className="relative py-32 bg-white" id="blended-learning">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <GraduationCap className="w-4 h-4" />
                NEW IN MAY 2026
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Blended Learning
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t("teacherTools.tools.0.title")}</h3>
                    <p className="text-slate-600">{t("teacherTools.tools.0.items.0")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Student Workbooks</h3>
                    <p className="text-slate-600">Hands-on practice materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t("technicalHighlights.features.0.title")}</h3>
                    <p className="text-slate-600">{t("technicalHighlights.features.0.description")}</p>
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
                        alt="Blended Learning"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src="/images/workbook-cover.png"
                        alt="Student Workbook"
                        fill
                        className="object-cover"
                        priority
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
      <section className="relative py-32 bg-gradient-to-br from-sky-50 via-white to-blue-50">
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
                    <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{feature.title}</h3>
                  <ul className="space-y-4">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                {t("videoSection.heading")}
              </h2>
            </div>

            <div
              className={`mx-auto transition-all duration-500 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${isVideoExpanded ? 'w-[95%]' : 'max-w-4xl'
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
                    {isVideoExpanded ? t('videoSection.expanded') : t('videoSection.collapsed')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Demo - Large showcase with 3 views */}
      <section className="relative py-32 bg-gradient-to-br from-sky-600 via-blue-700 to-sky-800 text-white overflow-hidden" id="platform">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]" />

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
                      alt="Desktop App"
                      fill
                      className="object-cover"
                      priority
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
                        alt="Tablet App"
                        fill
                        className="object-contain"
                        priority
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
                        alt="Mobile App"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { title: t("platformFeatures.features.0.title"), desc: t("platformFeatures.features.0.description") },
                      { title: t("platformFeatures.features.1.title"), desc: t("platformFeatures.features.1.description") },
                      { title: t("platformFeatures.features.2.title"), desc: t("platformFeatures.features.2.description") },
                    ].map((feat, index) => (
                      <div key={index} className="bg-white/10 rounded-xl p-4 border border-white/10">
                        <h4 className="font-bold text-sky-100 mb-2">{feat.title}</h4>
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
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl blur-3xl -translate-y-4 -translate-x-4" />
                <div className="relative space-y-6">
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/teacher-at-board.png"
                      alt="Teacher at Board"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/teacher-and-dashboard.png"
                      alt="Teacher Dashboard"
                      fill
                      className="object-cover"
                      priority
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
                      t("teacherTools.tools.0.items.2")
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
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
                      t("teacherTools.tools.1.items.2")
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-600 leading-relaxed">{item}</span>
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
      <section className="relative py-32 bg-gradient-to-br from-sky-50 via-white to-blue-50">
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
                  { title: t("platformFeatures.features.3.title"), desc: t("platformFeatures.features.3.description") },
                  { title: t("platformFeatures.features.4.title"), desc: t("platformFeatures.features.4.description") },
                  { title: t("platformFeatures.features.5.title"), desc: t("platformFeatures.features.5.description") },
                ].map((feat, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-sky-100 shadow-lg">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
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
                      alt="Student Dashboard"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/small-group.png"
                      alt="Students Learning Together"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-sky-900 to-blue-900 text-white overflow-hidden">
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
                { value: t("resultsSection.stats.0.value"), label: t("resultsSection.stats.0.label") },
                { value: t("resultsSection.stats.1.value"), label: t("resultsSection.stats.1.label") },
                { value: t("resultsSection.stats.2.value"), label: t("resultsSection.stats.2.label") },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-6xl font-bold text-white mb-4 drop-shadow-lg">{stat.value}</div>
                  <p className="text-xl text-sky-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="relative py-32 bg-white">
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
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-40 bg-gradient-to-br from-sky-500 via-blue-600 to-sky-700 text-white overflow-hidden">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-blue-400/30 rounded-full blur-[120px]" />

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
                <div className="text-5xl font-bold text-white mb-2">{t("resultsSection.stats.0.value")}</div>
                <div className="text-sky-100 text-lg">{t("resultsSection.stats.0.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{t("resultsSection.stats.1.value")}</div>
                <div className="text-sky-100 text-lg">{t("resultsSection.stats.1.label")}</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{t("resultsSection.stats.2.value")}</div>
                <div className="text-sky-100 text-lg">{t("resultsSection.stats.2.label")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
