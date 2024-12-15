import { Metadata } from "next"
import Image from "next/image"
import Hero from "@/components/layout/hero"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { PageTransition } from "@/components/layout/page-transition"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { div } from "framer-motion/client"
import { getScopedI18n } from "@/locales/server"

export const metadata: Metadata = {
  title: "Science Advantage - Reading Advantage Thailand",
  description: "Comprehensive K-12 science education platform aligned with NGSS standards. Interactive learning, adaptive curriculum, and teacher support tools.",
  openGraph: {
    title: "Science Advantage - Reading Advantage Thailand",
    description: "Transform K-12 science education with our comprehensive, NGSS-aligned platform launching in 2025.",
  },
}

export default async function ScienceAdvantage() {
  const t = await getScopedI18n("pages.products.scienceAdvantage")
  return (
    <PageTransition>
      <main className="min-h-screen">
      <Hero
        title={
          <>
            <div className="flex justify-center mb-8">
              <Image
                src="/science-advantage.png"
                alt="Science Advantage Logo"
                width={200}
                height={200}
                className="rounded-full bg-white p-2"
              />
            </div>
            <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
            <div className="absolute top-4 right-4 bg-red-100 text-red-900 px-4 py-2 rounded-full">
              {t("hero.comingSoon")}
            </div>
            <h2 className="text-2xl font-bold mb-6">{t("hero.subtitle")}</h2>
          </>
        }
        description={t("hero.description")}
        className="bg-gradient-to-b from-red-200 via-red-300 to-red-400"
      />

      {/* Core Value Proposition */}
      <ScrollFade>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">{t("coreValue.heading")}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 rounded-lg bg-red-50 hover:bg-gradient-to-br hover:from-red-100 hover:to-red-200 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-bold mb-2">{t("coreValue.features.0.title")}</h3>
                  <p>{t("coreValue.features.0.description")}</p>
                </div>
                <div className="p-6 rounded-lg bg-red-50 hover:bg-gradient-to-br hover:from-red-100 hover:to-red-200 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold mb-2">{t("coreValue.features.1.title")}</h3>
                  <p>{t("coreValue.features.1.description")}</p>
                </div>
                <div className="p-6 rounded-lg bg-red-50 hover:bg-gradient-to-br hover:from-red-100 hover:to-red-200 transition-all duration-300 hover:shadow-lg">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="font-bold mb-2">{t("coreValue.features.2.title")}</h3>
                  <p>{t("coreValue.features.2.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Key Features */}
      <ScrollFade>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t("keyFeatures.heading")}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn>
                <div className="p-6 rounded-lg bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{t("keyFeatures.features.0.title")}</h3>
                  <ul className="space-y-2">
                    <li>{t("keyFeatures.features.0.points.0")}</li>
                    <li>{t("keyFeatures.features.0.points.1")}</li>
                    <li>{t("keyFeatures.features.0.points.2")}</li>
                    <li>{t("keyFeatures.features.0.points.3")}</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-lg bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{t("keyFeatures.features.1.title")}</h3>
                  <ul className="space-y-2">
                    <li>{t("keyFeatures.features.1.points.0")}</li>
                    <li>{t("keyFeatures.features.1.points.1")}</li>
                    <li>{t("keyFeatures.features.1.points.2")}</li>
                    <li>{t("keyFeatures.features.1.points.3")}</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-6 rounded-lg bg-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{t("keyFeatures.features.2.title")}</h3>
                  <ul className="space-y-2">
                    <li>{t("keyFeatures.features.2.points.0")}</li>
                    <li>{t("keyFeatures.features.2.points.1")}</li>
                    <li>{t("keyFeatures.features.2.points.2")}</li>
                    <li>{t("keyFeatures.features.2.points.3")}</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Target Audience */}
      <ScrollFade>
        <section className="py-16 bg-red-800 text-red-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{t("targetAudience.heading")}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FadeIn>
                <div className="bg-red-700 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t("targetAudience.audiences.0.title")}</h3>
                  <ul className="space-y-2">
                    <li>{t("targetAudience.audiences.0.points.0")}</li>
                    <li>{t("targetAudience.audiences.0.points.1")}</li>
                    <li>{t("targetAudience.audiences.0.points.2")}</li>
                    <li>{t("targetAudience.audiences.0.points.3")}</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-red-700 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t("targetAudience.audiences.1.title")}</h3>
                  <ul className="space-y-2">
                    <li>{t("targetAudience.audiences.1.points.0")}</li>
                    <li>{t("targetAudience.audiences.1.points.1")}</li>
                    <li>{t("targetAudience.audiences.1.points.2")}</li>
                    <li>{t("targetAudience.audiences.1.points.3")}</li>
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="bg-red-700 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t("targetAudience.audiences.2.title")}</h3>
                  <ul className="space-y-2">
                    <li>{t("targetAudience.audiences.2.points.0")}</li>
                    <li>{t("targetAudience.audiences.2.points.1")}</li>
                    <li>{t("targetAudience.audiences.2.points.2")}</li>
                    <li>{t("targetAudience.audiences.2.points.3")}</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollFade>

      {/* Waitlist Section */}
      <ScrollFade>
        <section id="waitlist" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">{t("waitlist.heading")}</h2>
              <p className="mb-8">{t("waitlist.description")}</p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder={t("waitlist.form.placeholder")}
                    className="flex-1 px-4 py-2 border rounded-lg"
                  />
                  <button
                    type="submit"
                    className="bg-red-500 text-red-50 px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    {t("waitlist.form.button")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </ScrollFade>
    </main>
    </PageTransition>
  )
}
