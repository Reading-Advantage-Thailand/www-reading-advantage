import { Metadata } from "next"
import Image from "next/image"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { getScopedI18n } from "@/locales/server"

export const metadata: Metadata = {
  title: "STEM Advantage - Reading Advantage Thailand",
  description: "Transform your STEM curriculum with our innovative 75% coding + 25% STEM integration platform, designed for the modern classroom.",
  openGraph: {
    title: "STEM Advantage - Reading Advantage Thailand",
    description: "Comprehensive K-12 coding education platform launching in 2025.",
  },
}

export default async function StemAdvantage() {
  const t = await getScopedI18n("pages.products.stemAdvantage")
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/stem-advantage-logo.png"
                  alt="STEM Advantage Logo"
                  width={200}
                  height={200}
                  className="rounded-full bg-white p-2"
                />
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full">
                {t("hero.comingSoon")}
              </div>
              <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
              <h2 className="text-2xl font-bold mb-6">{t("hero.subtitle")}</h2>
            </>
          }
          description={t("hero.description")}
          className="bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-400"
        />

        {/* Core Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">{t("coreFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-indigo-100 rounded-lg p-6 shadow-sm hover:bg-indigo-200 transition-colors">
                  <div className="text-4xl mb-4 text-center">🎓</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("coreFeatures.features.0.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("coreFeatures.features.0.points.0")}</li>
                    <li>{t("coreFeatures.features.0.points.1")}</li>
                    <li>{t("coreFeatures.features.0.points.2")}</li>
                  </ul>
                </div>

                <div className="bg-indigo-100 rounded-lg p-6 shadow-sm hover:bg-indigo-200 transition-colors">
                  <div className="text-4xl mb-4 text-center">💻</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("coreFeatures.features.1.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("coreFeatures.features.1.points.0")}</li>
                    <li>{t("coreFeatures.features.1.points.1")}</li>
                    <li>{t("coreFeatures.features.1.points.2")}</li>
                  </ul>
                </div>

                <div className="bg-indigo-100 rounded-lg p-6 shadow-sm hover:bg-indigo-200 transition-colors">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("coreFeatures.features.2.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("coreFeatures.features.2.points.0")}</li>
                    <li>{t("coreFeatures.features.2.points.1")}</li>
                    <li>{t("coreFeatures.features.2.points.2")}</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Grade Level Breakdown */}
        <section className="bg-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("gradeBreakdown.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    grade: t("gradeBreakdown.grades.0.grade"),
                    description: t("gradeBreakdown.grades.0.description"),
                  },
                  {
                    grade: t("gradeBreakdown.grades.1.grade"),
                    description: t("gradeBreakdown.grades.1.description"),
                  },
                  {
                    grade: t("gradeBreakdown.grades.2.grade"),
                    description: t("gradeBreakdown.grades.2.description"),
                  },
                ].map((level) => (
                  <div
                    key={level.grade}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-4">{level.grade}</h3>
                    <p>{level.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-indigo-800 text-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("benefits.heading")}</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: t("benefits.groups.0.title"),
                    benefits: [
                      t("benefits.groups.0.points.0"),
                      t("benefits.groups.0.points.1"),
                      t("benefits.groups.0.points.2"),
                    ],
                  },
                  {
                    title: t("benefits.groups.1.title"),
                    benefits: [
                      t("benefits.groups.1.points.0"),
                      t("benefits.groups.1.points.1"),
                      t("benefits.groups.1.points.2"),
                    ],
                  },
                  {
                    title: t("benefits.groups.2.title"),
                    benefits: [
                      t("benefits.groups.2.points.0"),
                      t("benefits.groups.2.points.1"),
                      t("benefits.groups.2.points.2"),
                    ],
                  },
                ].map((group) => (
                  <div key={group.title} className="bg-indigo-700 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">{group.title}</h3>
                    <ul className="list-disc pl-6 space-y-2 text-indigo-100">
                      {group.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">{t("technicalRequirements.heading")}</h2>
              <div className="max-w-2xl mx-auto bg-indigo-100 p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {[
                    t("technicalRequirements.points.0"),
                    t("technicalRequirements.points.1"),
                    t("technicalRequirements.points.2"),
                  ].map((requirement) => (
                    <li key={requirement} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-800 text-indigo-50 py-16 bg-gradient-to-br from-indigo-800 to-indigo-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">{t("cta.heading")}</h2>
              <p className="text-xl mb-8">{t("cta.description")}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.earlyAccess")}
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-indigo-50 text-indigo-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.partnerships")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
