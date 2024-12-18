import { Metadata } from "next"
import Image from "next/image"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { getScopedI18n } from "@/locales/server"

export const metadata: Metadata = {
  title: "Tutor Advantage - Reading Advantage Thailand",
  description: "Revolutionary AI-powered English tutoring platform launching in Thailand in 2025. Combining advanced technology with personalized instruction.",
  openGraph: {
    title: "Tutor Advantage - Reading Advantage Thailand",
    description: "Revolutionary AI-powered English tutoring platform launching in Thailand in 2025",
  },
}

export default async function TutorAdvantage() {
  const t = await getScopedI18n("pages.products.tutorAdvantage")
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <div className="text-center">
              <Image
                src="/tutor-advantage.png"
                alt="Tutor Advantage Logo"
                width={200}
                height={200}
                className="mx-auto mb-8"
              />
              <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
              <div className="inline-block bg-yellow-400 text-emerald-900 px-4 py-2 rounded-full mb-6">
                {t("hero.comingSoon")}
              </div>
              <h2 className="text-2xl font-bold mb-6">{t("hero.subtitle")}</h2>
            </div>
          }
          description={t("hero.description")}
          className="bg-gradient-to-br from-emerald-100 to-emerald-400"
        />

        {/* Value Propositions */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-emerald-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4 text-center">🤖</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("valuePropositions.features.0.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("valuePropositions.features.0.points.0")}</li>
                    <li>{t("valuePropositions.features.0.points.1")}</li>
                    <li>{t("valuePropositions.features.0.points.2")}</li>
                  </ul>
                </div>

                <div className="bg-emerald-100 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">📚</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("valuePropositions.features.1.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("valuePropositions.features.1.points.0")}</li>
                    <li>{t("valuePropositions.features.1.points.1")}</li>
                    <li>{t("valuePropositions.features.1.points.2")}</li>
                  </ul>
                </div>

                <div className="bg-emerald-100 rounded-lg p-6 shadow-sm">
                  <div className="text-4xl mb-4 text-center">👩‍🏫</div>
                  <h3 className="text-xl font-bold mb-4 text-center">{t("valuePropositions.features.2.title")}</h3>
                  <ul className="text-left list-disc pl-6 space-y-2">
                    <li>{t("valuePropositions.features.2.points.0")}</li>
                    <li>{t("valuePropositions.features.2.points.1")}</li>
                    <li>{t("valuePropositions.features.2.points.2")}</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Platform Features */}
        <section className="bg-emerald-100 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("platformFeatures.heading")}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: t("platformFeatures.features.0.title"),
                    description: t("platformFeatures.features.0.description"),
                  },
                  {
                    title: t("platformFeatures.features.1.title"),
                    description: t("platformFeatures.features.1.description"),
                  },
                  {
                    title: t("platformFeatures.features.2.title"),
                    description: t("platformFeatures.features.2.description"),
                  },
                  {
                    title: t("platformFeatures.features.3.title"),
                    description: t("platformFeatures.features.3.description"),
                  },
                  {
                    title: t("platformFeatures.features.4.title"),
                    description: t("platformFeatures.features.4.description"),
                  },
                  {
                    title: t("platformFeatures.features.5.title"),
                    description: t("platformFeatures.features.5.description"),
                  },
                ].map((feature) => (
                  <div key={feature.title} className="bg-emerald-200 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-emerald-800 text-emerald-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("trustSignals.heading")}</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: "🔬",
                    title: t("trustSignals.items.0.title"),
                    description: t("trustSignals.items.0.description"),
                  },
                  {
                    icon: "🤝",
                    title: t("trustSignals.items.1.title"),
                    description: t("trustSignals.items.1.description"),
                  },
                  {
                    icon: "💎",
                    title: t("trustSignals.items.2.title"),
                    description: t("trustSignals.items.2.description"),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sky-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-800 text-emerald-50 py-16 bg-gradient-to-br from-emerald-700 to-emerald-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">{t("cta.heading")}</h2>
              <p className="text-xl mb-8">{t("cta.description")}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.register")}
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-emerald-50 text-emerald-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.apply")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
