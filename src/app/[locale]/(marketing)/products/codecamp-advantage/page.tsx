import { Metadata } from "next"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { getScopedI18n } from "@/locales/server"

export const metadata: Metadata = {
  title: "CodeCamp Advantage - Reading Advantage Thailand",
  description: "AI-powered full-stack development learning platform with personalized instruction and project-based curriculum.",
  openGraph: {
    title: "CodeCamp Advantage - Reading Advantage Thailand",
    description: "Transform your development journey with our AI-powered learning platform launching in 2025.",
  },
}

export default async function CodeCampAdvantage() {
  const t = await getScopedI18n("pages.products.codecampAdvantage")
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
              <div className="absolute top-4 right-4 bg-yellow-400 text-sky-900 px-4 py-2 rounded-full mb-6">
                {t("hero.comingSoon")}
              </div>
              <h2 className="text-2xl font-bold mb-6">{t("hero.subtitle")}</h2>
            </>
          }
          description={t("hero.description")}
          backgroundImage={true}
        />

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">{t("keyFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">{t("keyFeatures.personalizedAI.title")}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      {t("keyFeatures.personalizedAI.points.0")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      {t("keyFeatures.personalizedAI.points.1")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      {t("keyFeatures.personalizedAI.points.2")}
                    </li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">{t("keyFeatures.projectBasedLearning.title")}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      {t("keyFeatures.projectBasedLearning.points.0")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      {t("keyFeatures.projectBasedLearning.points.1")}
                    </li>
                    <li className="flex items-center">
                      <span className="text-sky-500 mr-2">✓</span>
                      {t("keyFeatures.projectBasedLearning.points.2")}
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Technology Tracks */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("technologyTracks.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-sky-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t("technologyTracks.tracks.0.title")}</h3>
                  <p className="text-sky-100">{t("technologyTracks.tracks.0.description")}</p>
                </div>
                <div className="bg-sky-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t("technologyTracks.tracks.1.title")}</h3>
                  <p className="text-sky-100">{t("technologyTracks.tracks.1.description")}</p>
                </div>
                <div className="bg-sky-900 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{t("technologyTracks.tracks.2.title")}</h3>
                  <p className="text-sky-100">{t("technologyTracks.tracks.2.description")}</p>
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Professional Tools */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("professionalTools.heading")}</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  {
                    name: t("professionalTools.tools.0.name"),
                    icon: "🔗"
                  },
                  {
                    name: t("professionalTools.tools.1.name"),
                    icon: "💻"
                  },
                  {
                    name: t("professionalTools.tools.2.name"),
                    icon: "🐳"
                  },
                  {
                    name: t("professionalTools.tools.3.name"),
                    icon: "🚀"
                  }
                ].map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <p className="font-bold">{tool.name}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Details */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("technicalDetails.heading")}</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: t("technicalDetails.details.0.title"),
                    description: t("technicalDetails.details.0.description")
                  },
                  {
                    title: t("technicalDetails.details.1.title"),
                    description: t("technicalDetails.details.1.description")
                  },
                  {
                    title: t("technicalDetails.details.2.title"),
                    description: t("technicalDetails.details.2.description")
                  },
                  {
                    title: t("technicalDetails.details.3.title"),
                    description: t("technicalDetails.details.3.description")
                  }
                ].map((spec) => (
                  <div key={spec.title} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-4">{spec.title}</h3>
                    <p className="text-gray-600">{spec.description}</p>
                  </div>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-sky-800 text-sky-50 py-16 bg-gradient-to-br from-sky-800 to-violet-900">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">{t("cta.heading")}</h2>
              <p className="text-xl mb-8">{t("cta.description")}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.joinWaitlist")}
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
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
