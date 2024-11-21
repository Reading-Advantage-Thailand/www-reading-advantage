"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Code, GraduationCap, BrainCircuit, Users } from "lucide-react"
import { useScopedI18n } from "@/locales/client"

export default function B2CSolutions() {
  const t = useScopedI18n("components.products.b2cSolutions")
  const features = [
    {
      icon: Code,
      title: t("features.0.title"),
      description: t("features.0.description")
    },
    {
      icon: GraduationCap,
      title: t("features.1.title"),
      description: t("features.1.description")
    },
    {
      icon: BrainCircuit,
      title: t("features.2.title"),
      description: t("features.2.description")
    },
    {
      icon: Users,
      title: t("features.3.title"),
      description: t("features.3.description")
    }
  ]

  return (
    <section className="bg-sky-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t("description")}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </motion.div>

        <Card className="p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden max-w-4xl mx-auto">
          <div className="text-blue-600 mb-4 relative z-10">
            <Code className="w-12 h-12" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold mb-4">{t("codecamp.title")}</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-800">{t("codecamp.highlightsTitle")}</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.highlights.0")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.highlights.1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.highlights.2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.highlights.3")}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-800">{t("codecamp.outcomesTitle")}</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.outcomes.0")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.outcomes.1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.outcomes.2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{t("codecamp.outcomes.3")}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild size="lg" className="relative z-10">
              <Link href="/products/codecamp-advantage">{t("codecamp.buttons.primary")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="relative z-10">
              <Link href="/products/codecamp-advantage#curriculum">{t("codecamp.buttons.secondary")}</Link>
            </Button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50" />
        </Card>
      </div>
    </section>
  )
}
