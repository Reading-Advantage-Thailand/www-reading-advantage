import B2BSolutions from "@/components/products/b2b-solutions"
import B2CSolutions from "@/components/products/b2c-solutions"
import TutorAdvantage from "@/components/products/tutor-advantage"
import { getScopedI18n } from "@/locales/server"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookMarked, GraduationCap, BookOpen } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Our Products - Reading Advantage Thailand",
  description: "Comprehensive curriculum solutions for schools and specialized programs for individual learners, powered by advanced AI technology.",
}

export default async function ProductsPage() {
  const t = await getScopedI18n("pages.products.overview")

  const gradeBands = [
    {
      key: "storytime",
      href: "/products/storytime-advantage",
      icon: BookMarked,
      bgColor: "from-amber-50 to-amber-100",
      badgeColor: "bg-amber-500",
      title: t("gradeBands.storytime.title"),
      gradeRange: t("gradeBands.storytime.gradeRange"),
      description: t("gradeBands.storytime.description"),
      ctaLabel: t("gradeBands.storytime.ctaLabel"),
    },
    {
      key: "primary",
      href: "/products/primary-advantage",
      icon: GraduationCap,
      bgColor: "from-orange-50 to-orange-100",
      badgeColor: "bg-orange-500",
      title: t("gradeBands.primary.title"),
      gradeRange: t("gradeBands.primary.gradeRange"),
      description: t("gradeBands.primary.description"),
      ctaLabel: t("gradeBands.primary.ctaLabel"),
    },
    {
      key: "reading",
      href: "/products/reading-advantage",
      icon: BookOpen,
      bgColor: "from-sky-50 to-sky-100",
      badgeColor: "bg-sky-500",
      title: t("gradeBands.reading.title"),
      gradeRange: t("gradeBands.reading.gradeRange"),
      description: t("gradeBands.reading.description"),
      ctaLabel: t("gradeBands.reading.ctaLabel"),
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero - Warm gradient with floating elements */}
      <section className="relative min-h-[60vh] flex items-center bg-hero-warm overflow-hidden">
        {/* Organic blobs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-300/40 rounded-full blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-300/30 rounded-full blur-[100px] animate-float" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="hero-glass">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Floating product preview */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
          <div className="relative w-[500px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-sky-400/20 rounded-[32px] blur-2xl z-0" />
            <Image
              src="/images/small-group.png"
              alt="Students using Reading Advantage"
              fill
              className="relative z-10 object-cover rounded-[24px] shadow-2xl"
              priority
            />
            {/* Gradient fade on top of image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/30 to-transparent rounded-[32px] z-20" />
          </div>
        </div>
      </section>

      {/* Grade Bands - Enhanced cards with warm themes */}
      <section className="relative py-20 md:py-32 warm-section overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {gradeBands.map((band, index) => (
              <div
                key={band.key}
                className="group h-full animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${band.bgColor} warm-card border-0 transition-all duration-300 hover:-translate-y-2`}>
                  {/* Icon with glow */}
                  <div className={`w-16 h-16 ${band.badgeColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <band.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  {/* Grade range badge */}
                  <div className="text-sm font-semibold uppercase tracking-wide text-slate-600 mb-3">
                    {band.gradeRange}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-4 text-slate-900 group-hover:text-sky-700 transition-colors">
                    {band.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-700 mb-8 leading-relaxed flex-grow">
                    {band.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={band.href}
                    className="inline-flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-800 group-hover:gap-3 transition-all duration-300"
                  >
                    <span>{band.ctaLabel}</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <B2BSolutions />
      <B2CSolutions />
      <TutorAdvantage />
    </main>
  )
}
