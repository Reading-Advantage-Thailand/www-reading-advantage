"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { useScopedI18n } from "@/locales/client"

export default function PrimaryAdvantage() {
  const t = useScopedI18n("pages.products.primaryAdvantage")

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
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title={
            <>
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-slow" />
                  <Image
                    src="/primary-advantage logo.png"
                    alt="Primary Advantage Logo"
                    width={200}
                    height={200}
                    className="rounded-full bg-white p-4 shadow-modern-lg relative z-10"
                  />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">{t("hero.title")}</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-100">{t("hero.subtitle")}</h2>
            </>
          }
          description={t("hero.description")}
          className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700"
          backgroundImage
        />

        {/* Key Features */}
        <section className="py-20 modern-section">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("keyFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="modern-card h-full group border-0 shadow-card hover:shadow-card-hover">
                      <CardHeader className="text-center pb-4">
                        <motion.div 
                          className="text-5xl mb-6 flex justify-center group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-cyan-700 transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {feature.items.map((item, itemIndex) => (
                            <motion.li 
                              key={item} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.2, delay: (index * 0.1) + (itemIndex * 0.05) }}
                            >
                              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CEFR Alignment Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-100 via-white to-cyan-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("cefrSection.heading")}</h2>
              <div className="max-w-4xl mx-auto">
                <Card className="shadow-modern-lg hover:shadow-glow border-0">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold text-gray-800 mb-4">{t("cefrSection.title")}</CardTitle>
                    <CardDescription className="text-xl text-gray-600 leading-relaxed">
                      {t("cefrSection.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { level: "Pre-A1", exam: "Starters", description: t("cefrSection.levels.0.description") },
                        { level: "A1", exam: "Movers", description: t("cefrSection.levels.1.description") },
                        { level: "A2", exam: "Flyers/KET", description: t("cefrSection.levels.2.description") },
                        { level: "B1", exam: "PET", description: t("cefrSection.levels.3.description") },
                      ].map((level, index) => (
                        <motion.div 
                          key={level.level} 
                          className="text-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Card className="bg-gradient-to-br from-cyan-50 to-cyan-50 border-cyan-200 h-full">
                            <CardContent className="p-6">
                              <div className="text-2xl font-bold text-cyan-700 mb-2">{level.level}</div>
                              <div className="text-lg font-semibold text-gray-700 mb-3">{level.exam}</div>
                              <p className="text-sm text-gray-600 leading-relaxed">{level.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20 modern-section">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16 gradient-text">{t("platformFeatures.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {platformFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="modern-card h-full group border-0 shadow-card hover:shadow-card-hover overflow-hidden">
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
                        <CardTitle className="text-xl font-bold mb-3 text-gray-800 group-hover:text-cyan-700 transition-colors">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Technology Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16">{t("aiTechnology.heading")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full shadow-modern hover:shadow-glow">
                    <CardHeader className="text-center pb-4">
                      <div className="text-5xl mb-4">🧠</div>
                      <CardTitle className="text-2xl font-bold text-white">{t("aiTechnology.gemini.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-cyan-100 text-center leading-relaxed">{t("aiTechnology.gemini.description")}</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 h-full shadow-modern hover:shadow-glow">
                    <CardHeader className="text-center pb-4">
                      <div className="text-5xl mb-4">✍️</div>
                      <CardTitle className="text-2xl font-bold text-white">{t("aiTechnology.gpt5.title")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-cyan-100 text-center leading-relaxed">{t("aiTechnology.gpt5.description")}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold text-center mb-16">{t("resultsSection.heading")}</h2>
              <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-modern-lg">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-white mb-4">{t("resultsSection.title")}</CardTitle>
                  <CardDescription className="text-xl text-cyan-100 leading-relaxed">
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
                      <motion.div 
                        key={stat.label} 
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-5xl font-bold text-white mb-3 drop-shadow-lg">{stat.value}</div>
                        <p className="text-cyan-100 text-lg">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-4xl font-bold mb-6">{t("cta.heading")}</h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed">{t("cta.description")}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.a
                  href="mailto:support@reading-advantage.com?subject=Primary Advantage Inquiry&body=Hi team,%0A%0AI'm interested in learning more about Primary Advantage for my school/organization.%0A%0APlease provide more information about:%0A- Pricing options (100 baht per student per month)%0A- Free pilot term%0A- Technical requirements%0A%0AThank you!"
                  className="bg-white hover:bg-cyan-50 text-cyan-800 px-10 py-4 rounded-xl font-bold transition-all duration-300 shadow-modern hover:shadow-glow hover:-translate-y-1 inline-flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("cta.buttons.signUp")}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-cyan-800 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-modern hover:-translate-y-1 inline-flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("cta.buttons.freeTrial")}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}