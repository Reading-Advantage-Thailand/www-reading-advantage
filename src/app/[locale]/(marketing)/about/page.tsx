import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/marketing/hero-section";
import { getScopedI18n } from "@/locales/server";

export const metadata: Metadata = {
  title: "About Us - Reading Advantage (Thailand)",
  description:
    "Learn about Reading Advantage Thailand's mission to transform education through AI innovation and our commitment to accessible, high-quality learning solutions.",
  keywords:
    "education technology, AI learning, Thailand education, EdTech, Reading Advantage Thailand",
  openGraph: {
    title: "About Us - Reading Advantage Thailand",
    description:
      "Discover how Reading Advantage Thailand is revolutionizing education through AI-powered learning solutions in Southeast Asia.",
    images: ["/images/og-image.jpg"],
    url: "https://reading-advantage.com/about",
  },
};

export default async function AboutPage() {
  const t = await getScopedI18n("pages.about");
  return (
    <main>
      <HeroSection
        title={t("hero.title")}
        description={t("hero.description")}
        ctaButton={{
          text: t("sections.cta.button"),
          href: "/contact",
          variant: "primary",
        }}
        height="medium"
        alignment="center"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t("sections.introduction.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-600">
              {t("sections.story.title")}
            </h2>
            <div className="prose lg:prose-lg text-gray-700">
              <p className="mb-4">{t("sections.story.paragraphs.0")}</p>
              <p className="mb-4">{t("sections.story.paragraphs.1")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t("sections.mission.title")}
                </h2>
                <p className="text-gray-700 mb-6">
                  {t("sections.mission.description")}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t("sections.vision.title")}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>{t("sections.vision.list.0")}</li>
                  <li>{t("sections.vision.list.1")}</li>
                  <li>{t("sections.vision.list.2")}</li>
                  <li>{t("sections.vision.list.3")}</li>
                  <li>{t("sections.vision.list.4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Impact Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t("sections.technology.title")}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>{t("sections.technology.list.0")}</li>
                  <li>{t("sections.technology.list.1")}</li>
                  <li>{t("sections.technology.list.2")}</li>
                  <li>{t("sections.technology.list.3")}</li>
                  <li>{t("sections.technology.list.4")}</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t("sections.impact.title")}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>{t("sections.impact.list.0")}</li>
                  <li>{t("sections.impact.list.1")}</li>
                  <li>{t("sections.impact.list.2")}</li>
                  <li>{t("sections.impact.list.3")}</li>
                  <li>{t("sections.impact.list.4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {t("sections.values.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-sky-50 rounded-lg">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.values.list.0.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.values.list.0.description")}
                </p>
              </div>
              <div className="p-6 bg-sky-50 rounded-lg">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.values.list.1.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.values.list.1.description")}
                </p>
              </div>
              <div className="p-6 bg-sky-50 rounded-lg">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.values.list.2.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.values.list.2.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Foundation Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {t("sections.research.title")}
            </h2>
            <p className="text-gray-700 mb-6">
              {t("sections.research.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Big 4 Quality Protocol Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-sky-700">
              {t("sections.bigFour.title")}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t("sections.bigFour.description")}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-100">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.bigFour.list.0.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.bigFour.list.0.description")}
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-100">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.bigFour.list.1.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.bigFour.list.1.description")}
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-100">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.bigFour.list.2.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.bigFour.list.2.description")}
                </p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg border border-sky-100">
                <h3 className="font-bold text-xl mb-3">
                  {t("sections.bigFour.list.3.title")}
                </h3>
                <p className="text-gray-700">
                  {t("sections.bigFour.list.3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {t("sections.positioning.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("sections.positioning.description")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sky-800 text-sky-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("sections.cta.title")}</h2>
          <p className="text-xl mb-8">{t("sections.cta.description")}</p>
          <Link
            href="/contact"
            className="bg-sky-500 text-sky-50 hover:bg-sky-600 px-6 py-3 rounded-lg font-bold transition-colors inline-block"
          >
            {t("sections.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
