"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle, Users, Zap, BookOpen, Target, Shield, Clock, TrendingUp } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

export default function ManagedService() {
  const t = useScopedI18n("pages.managedService");
  const featureIndexes = [0, 1, 2, 3, 4] as const;
  const managedFeatures = featureIndexes.map((featureIndex) =>
    t(`features.items.${featureIndex}`)
  );
  const overviewIndexes = [0, 1, 2, 3] as const;
  const overviewItems = overviewIndexes.map((itemIndex) =>
    t(`overview.items.${itemIndex}`)
  );
  const benefitIndexes = [0, 1, 2, 3] as const;
  const benefitItems = benefitIndexes.map((itemIndex) =>
    t(`benefits.items.${itemIndex}`)
  );

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-sky-900 overflow-hidden">
        {/* Organic blobs */}
        <div className="absolute top-32 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Calendar className="w-4 h-4" />
                {t("hero.badge")}
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8">
                {t("hero.title")}
              </h1>

              <h2 className="text-2xl md:text-3xl text-sky-100 mb-8 font-semibold leading-relaxed">
                {t("hero.subtitle")}
              </h2>

              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#overview"
                  className="group bg-white text-slate-900 px-10 py-5 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-1 font-bold text-lg inline-flex items-center gap-3"
                >
                  <Target className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  {t("hero.primaryCta")}
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-lg"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
          <div className="relative w-[600px] h-[500px]">
            <div className="absolute inset-0 bg-white/10 rounded-[40px] blur-2xl z-0" />
            <Image
              src="/images/teacher-and-dashboard.png"
              alt={t("images.dashboardAlt")}
              fill
              className="relative z-10 object-cover rounded-[32px] shadow-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/40 to-transparent rounded-[40px] z-20" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 bg-white" id="overview">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Shield className="w-4 h-4" />
                  {t("overview.badge")}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  {t("overview.title")}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {t("overview.description")}
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  <strong>{t("overview.strong")}</strong> {t("overview.strongText")}
                </p>
                <ul className="space-y-4 mb-8">
                  {overviewItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-purple-100 rounded-3xl blur-3xl -translate-y-4 -translate-x-4" />
                <div className="relative bg-gradient-to-br from-sky-50 to-purple-50 rounded-3xl p-8">
                  <Image
                    src="/images/teacher-assisting-students.png"
                    alt={t("images.teacherAssistAlt")}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-in fade-in duration-700">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" />
                {t("features.badge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t("features.title")}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("features.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 border border-sky-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <TrendingUp className="w-4 h-4" />
                {t("benefits.badge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                {t("benefits.title")}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t("benefits.description")}
              </p>
              <ul className="space-y-4">
                {benefitItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/small-group.png"
                  alt={t("images.smallGroupAlt")}
                  width={500}
                  height={400}
                  className="rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-sky-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Clock className="w-4 h-4" />
              {t("roadmap.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              {t("roadmap.title")}
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              {t("roadmap.description")}
            </p>

            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-3xl px-8 py-6 mb-12">
              <Calendar className="w-8 h-8 text-amber-400" />
              <div className="text-left">
                <div className="text-sm text-sky-100">{t("roadmap.targetLabel")}</div>
                <div className="text-2xl font-bold text-white">{t("roadmap.targetDate")}</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-4 bg-white text-slate-900 px-14 py-6 rounded-3xl hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-2 font-bold text-xl animate-in fade-in duration-700 delay-300 hover:scale-105"
              >
                <BookOpen className="w-8 h-8" />
                {t("cta.button1")}
                <ArrowRight className="w-8 h-8" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 border-2 border-white text-white px-14 py-6 rounded-3xl hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold text-xl hover:scale-105"
              >
                <Zap className="w-8 h-8" />
                {t("cta.button2")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
