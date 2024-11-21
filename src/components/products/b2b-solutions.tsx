"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  BookOpen,
  Bot,
  Calculator,
  Languages,
  BookMarked,
  Beaker
} from "lucide-react"
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

export default function B2BSolutions() {
  const t = useScopedI18n("components.products.b2bSolutions")

  const products = [
    {
      title: t("products.readingAdvantage.title"),
      icon: BookOpen,
      features: [
        t("products.readingAdvantage.features.0"),
        t("products.readingAdvantage.features.1"),
        t("products.readingAdvantage.features.2"),
        t("products.readingAdvantage.features.3")
      ],
      href: "/products/reading-advantage",
      isFlagship: true,
      buttonText: t("products.readingAdvantage.buttonText")
    },
    {
      title: t("products.stemAdvantage.title"),
      icon: Bot,
      features: [
        t("products.stemAdvantage.features.0"),
        t("products.stemAdvantage.features.1"),
        t("products.stemAdvantage.features.2"),
        t("products.stemAdvantage.features.3")
      ],
      href: "/products/stem-advantage"
    },
    {
      title: t("products.scienceAdvantage.title"),
      icon: Beaker,
      features: [
        t("products.scienceAdvantage.features.0"),
        t("products.scienceAdvantage.features.1"),
        t("products.scienceAdvantage.features.2"),
        t("products.scienceAdvantage.features.3")
      ],
      href: "/products/science-advantage"
    },
    {
      title: t("products.mathAdvantage.title"),
      icon: Calculator,
      features: [
        t("products.mathAdvantage.features.0"),
        t("products.mathAdvantage.features.1"),
        t("products.mathAdvantage.features.2"),
        t("products.mathAdvantage.features.3")
      ],
      href: "/products/math-advantage"
    },
    {
      title: t("products.zhongwenAdvantage.title"),
      icon: Languages,
      features: [
        t("products.zhongwenAdvantage.features.0"),
        t("products.zhongwenAdvantage.features.1"),
        t("products.zhongwenAdvantage.features.2"),
        t("products.zhongwenAdvantage.features.3")
      ],
      href: "/products/zhongwen-advantage"
    },
    {
      title: t("products.storytimeAdvantage.title"),
      icon: BookMarked,
      features: [
        t("products.storytimeAdvantage.features.0"),
        t("products.storytimeAdvantage.features.1"),
        t("products.storytimeAdvantage.features.2"),
        t("products.storytimeAdvantage.features.3")
      ],
      href: "/products/storytime-advantage"
    }
  ]

  return (
    <section className="bg-white py-16">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={item}
              className={product.isFlagship ? "col-span-full lg:col-span-2" : ""}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative z-10">
                    <product.icon className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                  </div>
                  {product.isFlagship && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {t("mostPopular")}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="relative z-10">
                  <Link href={product.href}>{product.buttonText}</Link>
                </Button>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
