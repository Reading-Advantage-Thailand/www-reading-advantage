import Hero from "@/components/layout/hero"
import B2BSolutions from "@/components/products/b2b-solutions"
import B2CSolutions from "@/components/products/b2c-solutions"
import TutorAdvantage from "@/components/products/tutor-advantage"
import { getScopedI18n } from "@/locales/server"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
    },
    {
      key: "primary",
      href: "/products/primary-advantage",
    },
    {
      key: "reading",
      href: "/products/reading-advantage",
    },
  ].map((band) => ({
    ...band,
    title: t(`gradeBands.${band.key}.title`),
    gradeRange: t(`gradeBands.${band.key}.gradeRange`),
    description: t(`gradeBands.${band.key}.description`),
    ctaLabel: t(`gradeBands.${band.key}.ctaLabel`),
  }))
  return (
    <main className="flex-1">
      <Hero
        title={t("hero.title")}
        description={t("hero.description")}
        backgroundImage
      />
      <section className="bg-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {gradeBands.map((band) => (
              <div key={band.key} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm font-semibold uppercase tracking-wide text-sky-700 mb-2">
                  {band.gradeRange}
                </div>
                <h3 className="text-2xl font-bold mb-3">{band.title}</h3>
                <p className="text-gray-600 mb-6">{band.description}</p>
                <Link
                  href={band.href}
                  className="inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-900"
                >
                  <span>{band.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
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
