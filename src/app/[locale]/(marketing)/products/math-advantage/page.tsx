import { Metadata } from "next"
import Image from "next/image"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { getScopedI18n } from "@/locales/server"

export const metadata: Metadata = {
  title: "Math Advantage - Reading Advantage Thailand",
  description: "Revolutionary AI-enhanced math tutoring platform with personalized learning paths and advanced adaptive technology.",
  openGraph: {
    title: "Math Advantage - Reading Advantage Thailand",
    description: "Transform your math learning journey with our AI-enhanced tutoring platform launching in 2025.",
  },
}

export default async function MathAdvantage() {
  const t = await getScopedI18n("pages.products.mathAdvantage")
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <div className="flex justify-center mb-8">
                <Image
                  src="/math-advantage.png"
                  alt="Math Advantage Logo"
                  width={200}
                  height={200}
                  className="rounded-full bg-white p-2"
                />
              </div>
              <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-sky-50 px-4 py-2 rounded-full mb-6">
                {t("hero.comingSoon")}
              </div>
              <h2 className="text-2xl font-bold mb-6">{t("hero.subtitle")}</h2>
            </>
          }
          description={t("hero.description")}
          className="bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300"
        />

        {/* Core Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">{t("keyFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📊</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("keyFeatures.smartProblemGeneration.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("keyFeatures.smartProblemGeneration.points.0")}</li>
                    <li>{t("keyFeatures.smartProblemGeneration.points.1")}</li>
                    <li>{t("keyFeatures.smartProblemGeneration.points.2")}</li>
                  </ul>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                  <div className="text-4xl mb-4 text-center">🎯</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("keyFeatures.structuredLearningPath.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("keyFeatures.structuredLearningPath.points.0")}</li>
                    <li>{t("keyFeatures.structuredLearningPath.points.1")}</li>
                    <li>{t("keyFeatures.structuredLearningPath.points.2")}</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("keyFeatures.aiPoweredSupport.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("keyFeatures.aiPoweredSupport.points.0")}</li>
                    <li>{t("keyFeatures.aiPoweredSupport.points.1")}</li>
                    <li>{t("keyFeatures.aiPoweredSupport.points.2")}</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Subject Coverage */}
        <section className="bg-gradient-to-br from-orange-200 to-orange-300 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("subjectCoverage.heading")}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {[
                  t("subjectCoverage.subjects.0"),
                  t("subjectCoverage.subjects.1"),
                  t("subjectCoverage.subjects.2"),
                  t("subjectCoverage.subjects.3"),
                  t("subjectCoverage.subjects.4"),
                  t("subjectCoverage.subjects.5"),
                ].map(
                  (subject) => (
                    <div
                      key={subject}
                      className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="font-bold text-lg">{subject}</h3>
                    </div>
                  )
                )}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-orange-800 text-orange-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("benefits.heading")}</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: "💪",
                    title: t("benefits.reasons.0.title"),
                    description: t("benefits.reasons.0.description"),
                  },
                  {
                    icon: "⏰",
                    title: t("benefits.reasons.1.title"),
                    description: t("benefits.reasons.1.description"),
                  },
                  {
                    icon: "🎯",
                    title: t("benefits.reasons.2.title"),
                    description: t("benefits.reasons.2.description"),
                  },
                  {
                    icon: "📊",
                    title: t("benefits.reasons.3.title"),
                    description: t("benefits.reasons.3.description"),
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-orange-100">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-800 text-orange-50 py-16 bg-gradient-to-br from-orange-800 to-orange-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">{t("cta.heading")}</h2>
              <p className="text-xl mb-8">{t("cta.description")}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.joinWaitlist")}
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-orange-50 text-orange-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.learnMore")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
