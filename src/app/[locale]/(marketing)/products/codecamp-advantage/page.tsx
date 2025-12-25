import { Metadata } from "next"
import Hero from "@/components/layout/hero"
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
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">{t("keyFeatures.heading")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-sky-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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

              <div className="bg-sky-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
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
          </div>
        </div>
      </section>

      {/* Technology Tracks */}
      <section className="bg-sky-800 text-sky-50 py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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
          </div>
        </div>
      </section>
    </main>
  )
}
