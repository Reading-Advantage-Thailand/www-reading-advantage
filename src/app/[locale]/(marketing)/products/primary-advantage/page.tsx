"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/marketing/hero-section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useScopedI18n } from "@/locales/client";
import { Mail } from "lucide-react";

export default function PrimaryAdvantage() {
  const t = useScopedI18n("pages.products.primaryAdvantage");

  const features = [
    {
      icon: "📖",
      title: t("keyFeatures.features.0.title"),
      items: [
        t("keyFeatures.features.0.items.0"),
        t("keyFeatures.features.0.items.1"),
        t("keyFeatures.features.0.items.2"),
      ],
    },
    {
      icon: "🎯",
      title: t("keyFeatures.features.1.title"),
      items: [
        t("keyFeatures.features.1.items.0"),
        t("keyFeatures.features.1.items.1"),
        t("keyFeatures.features.1.items.2"),
      ],
    },
    {
      icon: "🤖",
      title: t("keyFeatures.features.2.title"),
      items: [
        t("keyFeatures.features.2.items.0"),
        t("keyFeatures.features.2.items.1"),
        t("keyFeatures.features.2.items.2"),
      ],
    },
  ];

  const platformFeatures = [
    {
      image: "/images/reading-advantage/choose-your-article.png",
      title: t("platformFeatures.features.0.title"),
      description: t("platformFeatures.features.0.description"),
    },
    {
      image: "/images/reading-advantage/language-selector-en-th-zh-vn.png",
      title: t("platformFeatures.features.1.title"),
      description: t("platformFeatures.features.1.description"),
    },
    {
      image: "/images/reading-advantage/read-article-and-chat-with-ai.png",
      title: t("platformFeatures.features.2.title"),
      description: t("platformFeatures.features.2.description"),
    },
    {
      image: "/images/reading-advantage/order-sentence-activity.png",
      title: t("platformFeatures.features.3.title"),
      description: t("platformFeatures.features.3.description"),
    },
    {
      image: "/images/reading-advantage/order-words-activity.png",
      title: t("platformFeatures.features.4.title"),
      description: t("platformFeatures.features.4.description"),
    },
    {
      image: "/images/reading-advantage/SRS-flashcard-activity.png",
      title: t("platformFeatures.features.5.title"),
      description: t("platformFeatures.features.5.description"),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t("hero.title")}
        description={`${t("hero.subtitle")} ${t("hero.description")}`}
        ctaButton={{
          text: t("cta.buttons.signUp"),
          href: "mailto:support@reading-advantage.com?subject=Primary Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Primary Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options (100 baht per student per month)%0A- Free pilot term%0A- Technical requirements%0A%0AThank you!",
          variant: "primary",
          icon: <Mail className="w-5 h-5" />,
        }}
        height="medium"
        alignment="left"
        floatingImage={{
          src: "/primary-advantage logo.png",
          alt: "Primary Advantage Logo",
        }}
        customGradient="bg-gradient-to-br from-cyan-50 via-sky-50 to-teal-50"
        showDecorations={true}
      />

      {/* Key Features */}
      <section className="py-20 modern-section">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
              {t("keyFeatures.heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-500 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="modern-card h-full group border-0 shadow-card hover:shadow-card-hover">
                    <CardHeader className="text-center pb-4">
                      <div className="text-5xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-cyan-700 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.items.map((item, itemIndex) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 animate-in fade-in slide-in-from-left-4 duration-300"
                            style={{
                              animationDelay: `${index * 100 + itemIndex * 50}ms`,
                            }}
                          >
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEFR Alignment Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-100 via-white to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
              {t("cefrSection.heading")}
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-modern-lg hover:shadow-glow border-0">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                    {t("cefrSection.title")}
                  </CardTitle>
                  <CardDescription className="text-xl text-gray-600 leading-relaxed">
                    {t("cefrSection.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        level: "Pre-A1",
                        exam: "Starters",
                        description: t("cefrSection.levels.0.description"),
                      },
                      {
                        level: "A1",
                        exam: "Movers",
                        description: t("cefrSection.levels.1.description"),
                      },
                      {
                        level: "A2",
                        exam: "Flyers/KET",
                        description: t("cefrSection.levels.2.description"),
                      },
                      {
                        level: "B1",
                        exam: "PET",
                        description: t("cefrSection.levels.3.description"),
                      },
                    ].map((level, index) => (
                      <div
                        key={level.level}
                        className="text-center animate-in fade-in zoom-in-95 duration-500 hover:scale-105 transition-transform"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Card className="bg-gradient-to-br from-cyan-50 to-cyan-50 border-cyan-200 h-full">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-cyan-700 mb-2">
                              {level.level}
                            </div>
                            <div className="text-lg font-semibold text-gray-700 mb-3">
                              {level.exam}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              {level.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 modern-section">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
              {t("platformFeatures.heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {platformFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-500 transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="modern-card h-full group border-0 shadow-card hover:shadow-card-hover overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video rounded-t-xl overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-1">
                      <CardTitle className="text-xl font-bold mb-3 text-gray-800 group-hover:text-cyan-700 transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl font-bold text-center mb-16">
              {t("aiTechnology.heading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="animate-in fade-in slide-in-from-left-8 duration-500 transition-all duration-300 hover:-translate-y-1">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full shadow-modern hover:shadow-glow">
                  <CardHeader className="text-center pb-4">
                    <div className="text-5xl mb-4">🧠</div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {t("aiTechnology.gemini.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-100 text-center leading-relaxed">
                      {t("aiTechnology.gemini.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div
                className="animate-in fade-in slide-in-from-right-8 duration-500 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: "100ms" }}
              >
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full shadow-modern hover:shadow-glow">
                  <CardHeader className="text-center pb-4">
                    <div className="text-5xl mb-4">✍️</div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {t("aiTechnology.gpt5.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-100 text-center leading-relaxed">
                      {t("aiTechnology.gpt5.description")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl font-bold text-center mb-16">
              {t("resultsSection.heading")}
            </h2>
            <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-modern-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  {t("resultsSection.title")}
                </CardTitle>
                <CardDescription className="text-xl text-cyan-100 leading-relaxed">
                  {t("resultsSection.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      value: t("resultsSection.stats.0.value"),
                      label: t("resultsSection.stats.0.label"),
                    },
                    {
                      value: t("resultsSection.stats.1.value"),
                      label: t("resultsSection.stats.1.label"),
                    },
                    {
                      value: t("resultsSection.stats.2.value"),
                      label: t("resultsSection.stats.2.label"),
                    },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center animate-in fade-in zoom-in-95 duration-500 hover:scale-105 transition-transform"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg">
                        {stat.value}
                      </div>
                      <p className="text-cyan-100 text-lg">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h2 className="text-4xl font-bold mb-6">{t("cta.heading")}</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:support@reading-advantage.com?subject=Primary Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Primary Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options (100 baht per student per month)%0A- Free pilot term%0A- Technical requirements%0A%0AThank you!"
                className="bg-white hover:bg-cyan-50 text-cyan-800 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-modern hover:shadow-glow hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
              >
                {t("cta.buttons.signUp")}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <Link
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-cyan-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-modern hover:-translate-y-1 hover:scale-105 inline-flex items-center gap-3"
              >
                {t("cta.buttons.freeTrial")}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
