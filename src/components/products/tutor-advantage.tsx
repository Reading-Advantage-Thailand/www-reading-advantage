"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Network, Brain, GraduationCap, Clock } from "lucide-react"
import { useScopedI18n } from "@/locales/client"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function TutorAdvantage() {
  const t = useScopedI18n("components.products.tutorAdvantage")

  const features = [
    {
      title: t("features.0.title"),
      description: t("features.0.description"),
      icon: Network
    },
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
      icon: Brain
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
      icon: GraduationCap
    },
    {
      title: t("features.3.title"),
      description: t("features.3.description"),
      icon: Clock
    }
  ]

  return (
    <section className="bg-sky-800 text-sky-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t("heading")}</h2>
            <p className="text-xl mb-8">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={item}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <feature.icon className="w-8 h-8 mx-auto mb-3" strokeWidth={1.5} />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sky-100/90">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <Button
            variant="secondary"
            size="lg"
            asChild
            className="font-semibold"
          >
            <Link href="/products/tutor-advantage">{t("buttons.primary")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
