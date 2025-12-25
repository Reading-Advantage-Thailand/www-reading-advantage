"use client"

import Image from "next/image"
import { useState } from "react"
import Hero from "@/components/layout/hero"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { useScopedI18n } from "@/locales/client"

export default function ReadingAdvantage() {
  const t = useScopedI18n("pages.products.readingAdvantage")
  const [isVideoExpanded, setIsVideoExpanded] = useState(false)

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
  ]

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
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-slow" />
                <Image
                  src="/reading-advantage.jpg"
                  alt="Reading Advantage Logo"
                  width={200}
                  height={200}
                  className="rounded-full bg-white p-4 shadow-modern-lg relative z-10"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">{t("hero.title")}</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sky-100">{t("hero.subtitle")}</h2>
          </>
        }
        description={t("hero.description")}
        className="bg-gradient-to-br from-sky-500 via-blue-600 to-sky-700"
        backgroundImage
      />

      {/* Blended Learning Announcement */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white rounded-2xl shadow-modern-lg border-l-4 border-blue-500 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold mb-4">
                    <span>🎓</span>
                    <span>NEW IN MAY 2026</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Introducing Blended Learning
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Starting May 2026, Reading Advantage will offer a comprehensive <strong className="text-blue-700">Blended Learning model</strong> that combines the power of our AI-driven platform with teacher-led instruction and physical workbooks.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700"><strong className="text-blue-700">Teacher-led classes</strong> with expert educators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700"><strong className="text-blue-700">Student workbooks</strong> for hands-on practice</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700"><strong className="text-blue-700">AI-powered platform</strong> for personalized learning</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center shadow-modern">
                    <div className="text-8xl">📖</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 modern-section">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("keyFeatures.heading")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="modern-card h-full border-0 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div className="text-5xl mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {feature.items.map((item, itemIndex) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
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

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-sky-100 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("videoSection.heading")}</h2>
            <div
              className={`mx-auto transition-all duration-500 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${isVideoExpanded ? 'w-[90%] max-w-5xl' : 'max-w-4xl'
                }`}
              onClick={() => setIsVideoExpanded(!isVideoExpanded)}
            >
              <Card className="shadow-modern-lg hover:shadow-glow border-0 overflow-hidden transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-video rounded-t-xl overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/LH5qgpSYoqs"
                      title="Reading Advantage Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </CardContent>
                <CardFooter className="justify-center py-4 bg-gradient-to-r from-sky-50 to-blue-50">
                  <p className="text-sm text-gray-600 flex items-center gap-2 animate-pulse">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {isVideoExpanded ? t('videoSection.expanded') : t('videoSection.collapsed')}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 modern-section">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("platformFeatures.heading")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {platformFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="modern-card h-full border-0 shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                    <CardHeader className="p-0">
                      <div className="relative aspect-video rounded-t-xl overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-1">
                      <CardTitle className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
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

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-blue-700 to-sky-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-center mb-16">{t("resultsSection.heading")}</h2>
            <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-modern-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-white mb-4">{t("resultsSection.title")}</CardTitle>
                <CardDescription className="text-xl text-sky-100 leading-relaxed">
                  {t("resultsSection.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { value: t("resultsSection.stats.0.value"), label: t("resultsSection.stats.0.label") },
                    { value: t("resultsSection.stats.1.value"), label: t("resultsSection.stats.1.label") },
                    { value: t("resultsSection.stats.2.value"), label: t("resultsSection.stats.2.label") },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-default">{stat.value}</div>
                      <p className="text-sky-100 text-lg">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teacher Tools */}
      <section className="py-20 modern-section">
        <div className="container mx-auto px-4">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("teacherTools.heading")}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 hover:-translate-y-1 transition-transform duration-300">
                <Card className="modern-card h-full border-0 shadow-card hover:shadow-card-hover">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      {t("teacherTools.tools.0.title")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        t("teacherTools.tools.0.items.0"),
                        t("teacherTools.tools.0.items.1"),
                        t("teacherTools.tools.0.items.2")
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '100ms' }}>
                <div className="h-full hover:-translate-y-1 transition-transform duration-300">
                  <Card className="modern-card h-full border-0 shadow-card hover:shadow-card-hover">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </div>
                        {t("teacherTools.tools.1.title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {[
                          t("teacherTools.tools.1.items.0"),
                          t("teacherTools.tools.1.items.1"),
                          t("teacherTools.tools.1.items.2")
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold text-center mb-16">{t("technicalHighlights.heading")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full shadow-modern hover:shadow-glow transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="text-5xl mb-6 flex justify-center hover:rotate-12 transition-transform duration-500">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sky-100 text-center leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 via-blue-700 to-sky-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-4xl font-bold mb-6">{t("cta.heading")}</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">{t("cta.description")}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="mailto:support@reading-advantage.com?subject=Reading Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Reading Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options%0A- Implementation timeline%0A- Technical requirements%0A%0AThank you!"
                className="bg-white hover:bg-sky-50 text-sky-800 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-modern hover:shadow-glow hover:-translate-y-1 inline-flex items-center gap-3"
              >
                {t("cta.buttons.signUp")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-sky-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-modern hover:-translate-y-1 inline-flex items-center gap-3"
              >
                {t("cta.buttons.freeTrial")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
