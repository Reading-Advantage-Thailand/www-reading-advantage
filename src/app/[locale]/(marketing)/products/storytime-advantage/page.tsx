import { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/marketing/hero-section";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title:
    "Storytime Advantage - Complete Early Literacy Curriculum | Reading Advantage Thailand",
  description:
    "Launching in 2025: A comprehensive K-3 early literacy curriculum combining digital innovation with hands-on learning. Join the waitlist for early access.",
  openGraph: {
    title: "Storytime Advantage - The Future of Early Literacy Education",
    description:
      "Transform early literacy education with our comprehensive K-3 curriculum launching in 2025. Combining digital innovation with proven teaching methods.",
  },
};

export default async function StorytimeAdvantage() {
  const t = await getScopedI18n("pages.products.storytimeAdvantage");
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={t("hero.title")}
        description={`${t("hero.subtitle")} ${t("hero.description")}`}
        badge={{
          text: t("hero.comingSoon"),
          variant: "sky",
        }}
        ctaButton={{
          text: t("cta.buttons.joinWaitlist"),
          href: "/contact",
          variant: "white",
        }}
        floatingImage={{
          src: "/storytime-advantage.png",
          alt: "Storytime Advantage Learning Experience",
        }}
        height="medium"
        alignment="left"
        customGradient="bg-gradient-to-br from-sky-50 via-white to-amber-50"
      />

      {/* Core Value Proposition */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("coreValue.heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-sky-50 rounded-lg p-6 shadow-sm hover:bg-sky-100 transition-colors">
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  {t("coreValue.features.0.title")}
                </h3>
                <p className="text-center">
                  {t("coreValue.features.0.description")}
                </p>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 shadow-sm hover:bg-sky-100 transition-colors">
                <div className="text-4xl mb-4 text-center">⚖️</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  {t("coreValue.features.1.title")}
                </h3>
                <p className="text-center">
                  {t("coreValue.features.1.description")}
                </p>
              </div>

              <div className="bg-sky-50 rounded-lg p-6 shadow-sm hover:bg-sky-100 transition-colors">
                <div className="text-4xl mb-4 text-center">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  {t("coreValue.features.2.title")}
                </h3>
                <p className="text-center">
                  {t("coreValue.features.2.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("keyFeatures.heading")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">
                  {t("keyFeatures.features.0.title")}
                </h3>
                <ul className="space-y-3">
                  <li>{t("keyFeatures.features.0.points.0")}</li>
                  <li>{t("keyFeatures.features.0.points.1")}</li>
                  <li>{t("keyFeatures.features.0.points.2")}</li>
                  <li>{t("keyFeatures.features.0.points.3")}</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4">
                  {t("keyFeatures.features.1.title")}
                </h3>
                <ul className="space-y-3">
                  <li>{t("keyFeatures.features.1.points.0")}</li>
                  <li>{t("keyFeatures.features.1.points.1")}</li>
                  <li>{t("keyFeatures.features.1.points.2")}</li>
                  <li>{t("keyFeatures.features.1.points.3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Tools */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("teacherTools.heading")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: t("teacherTools.tools.0.title"),
                  description: t("teacherTools.tools.0.description"),
                  icon: "📝",
                },
                {
                  title: t("teacherTools.tools.1.title"),
                  description: t("teacherTools.tools.1.description"),
                  icon: "👥",
                },
                {
                  title: t("teacherTools.tools.2.title"),
                  description: t("teacherTools.tools.2.description"),
                  icon: "📊",
                },
              ].map((tool) => (
                <div
                  key={tool.title}
                  className="bg-sky-50 rounded-lg p-6 shadow-sm hover:bg-sky-100 transition-colors"
                >
                  <div className="text-4xl mb-4 text-center">{tool.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {tool.title}
                  </h3>
                  <p className="text-center">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-sky-50 py-16">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("faq.heading")}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2">
                  {t("faq.questions.0.question")}
                </h3>
                <p>{t("faq.questions.0.answer")}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold mb-2">
                  {t("faq.questions.1.question")}
                </h3>
                <p>{t("faq.questions.1.answer")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-800 text-sky-50 py-16 bg-gradient-to-br from-sky-800 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold mb-6">{t("cta.heading")}</h2>
            <p className="text-xl mb-8">{t("cta.description")}</p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                {t("cta.buttons.joinWaitlist")}
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
              >
                {t("cta.buttons.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
