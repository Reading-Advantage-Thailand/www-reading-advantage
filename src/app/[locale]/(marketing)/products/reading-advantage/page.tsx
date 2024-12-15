"use client"

import Image from "next/image"
import { useState } from "react"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { useScopedI18n } from "@/locales/client"

export default function ReadingAdvantage() {
  const t = useScopedI18n("pages.products.readingAdvantage")
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const features = [
    {
      icon: "📚",
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
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title={
            <>
              <div className="flex justify-center mb-8">
                <Image
                  src="/reading-advantage.jpg"
                  alt="Reading Advantage Logo"
                  width={200}
                  height={200}
                  className="rounded-full bg-white p-2"
                />
              </div>
              <h1 className="text-5xl font-bold mb-6">{t("hero.title")}</h1>
              <h2 className="text-2xl font-bold mb-6">{t("hero.subtitle")}</h2>
            </>
          }
          description={t("hero.description")}
          className="bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400"
        />

        {/* Key Features */}
        <section className="bg-gradient-to-br from-sky-200 to-sky-300 py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">{t("keyFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature) => (
                  <Card key={feature.title} className="bg-gradient-to-br from-sky-200 to-sky-300 shadow-lg">
                    <CardHeader>
                      <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 space-y-2">
                        {feature.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gradient-to-br from-sky-300 to-sky-400 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("videoSection.heading")}</h2>
              <Card
                className={`mx-auto transition-all duration-300 cursor-pointer ${isVideoExpanded ? 'w-[80%]' : 'max-w-2xl'
                  }`}
                onClick={() => setIsVideoExpanded(!isVideoExpanded)}
              >
                <CardContent className="p-0 aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/LH5qgpSYoqs"
                    title="Reading Advantage Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </CardContent>
                <CardFooter className="justify-center py-2">
                  <p className="text-sm text-muted-foreground">
                    {isVideoExpanded ? t('videoSection.expanded') : t('videoSection.collapsed')}
                  </p>
                </CardFooter>
              </Card>
            </ScrollFade>
          </div>
        </section>

        {/* Platform Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("platformFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {platformFeatures.map((feature) => (
                  <Card key={feature.title} className="flex flex-col h-full">
                    <CardHeader className="p-4">
                      <div className="aspect-video relative rounded-lg overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardTitle className="mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("resultsSection.heading")}</h2>
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{t("resultsSection.title")}</CardTitle>
                  <CardDescription className="text-lg text-center">
                    {t("resultsSection.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { value: t("resultsSection.stats.0.value"), label: t("resultsSection.stats.0.label") },
                      { value: t("resultsSection.stats.1.value"), label: t("resultsSection.stats.1.label") },
                      { value: t("resultsSection.stats.2.value"), label: t("resultsSection.stats.2.label") },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-4xl font-bold text-sky-500 mb-2">{stat.value}</div>
                        <p>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollFade>
          </div>
        </section>

        {/* Teacher Tools */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("teacherTools.heading")}</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>{t("teacherTools.tools.0.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>{t("teacherTools.tools.0.items.0")}</li>
                      <li>{t("teacherTools.tools.0.items.1")}</li>
                      <li>{t("teacherTools.tools.0.items.2")}</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("teacherTools.tools.1.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>{t("teacherTools.tools.1.items.0")}</li>
                      <li>{t("teacherTools.tools.1.items.1")}</li>
                      <li>{t("teacherTools.tools.1.items.2")}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">{t("technicalHighlights.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: "🤖",
                    title: t("technicalHighlights.features.0.title"),
                    description: t("technicalHighlights.features.0.description"),
                  },
                  {
                    icon: "🌐",
                    title: t("technicalHighlights.features.1.title"),
                    description: t("technicalHighlights.features.1.description"),
                  },
                  {
                    icon: "☁️",
                    title: t("technicalHighlights.features.2.title"),
                    description: t("technicalHighlights.features.2.description"),
                  },
                  {
                    icon: "📱",
                    title: t("technicalHighlights.features.3.title"),
                    description: t("technicalHighlights.features.3.description"),
                  },
                ].map((feature) => (
                  <Card key={feature.title} className="bg-sky-900">
                    <CardHeader>
                      <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                      <CardTitle className="text-sky-50 text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sky-100 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-sky-800 to-violet-900 py-16">
          <div className="container mx-auto px-4 text-center text-sky-50">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">{t("cta.heading")}</h2>
              <p className="text-xl mb-8">{t("cta.description")}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.signUp")}
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  {t("cta.buttons.freeTrial")}
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
