"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
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

const FEATURE_COUNT = 4

type ProductKey =
  | "primaryAdvantage"
  | "readingAdvantage"
  | "stemAdvantage"
  | "scienceAdvantage"
  | "mathAdvantage"
  | "zhongwenAdvantage"
  | "storytimeAdvantage"

interface ProductConfig {
  key: ProductKey
  href: string
  bgColor: string
  logo?: string
  icon?: typeof BookOpen
  layout?: "feature" | "standard"
  badgeType?: "new" | "flagship"
  badgeKey?: string
}

const productConfigs: ProductConfig[] = [
  {
    key: "readingAdvantage",
    href: "/products/reading-advantage",
    bgColor: "bg-sky-400",
    logo: "/reading-advantage.jpg",
    icon: BookOpen,
    layout: "feature",
    badgeKey: "products.readingAdvantage.badge",
  },
  {
    key: "primaryAdvantage",
    href: "/products/primary-advantage",
    bgColor: "bg-sky-200",
    logo: "/primary-advantage logo.png",
    layout: "standard",
    badgeType: "new",
  },
  {
    key: "scienceAdvantage",
    href: "/products/science-advantage",
    bgColor: "bg-rose-200",
    logo: "/science-advantage.png",
    icon: Beaker,
    badgeKey: "products.scienceAdvantage.badge",
  },
  {
    key: "mathAdvantage",
    href: "/products/math-advantage",
    bgColor: "bg-orange-100",
    logo: "/math-advantage.png",
    icon: Calculator,
    badgeKey: "products.mathAdvantage.badge",
  },
  {
    key: "zhongwenAdvantage",
    href: "/products/zhongwen-advantage",
    bgColor: "bg-fuchsia-200",
    logo: "/zhongwen-advantage.png",
    icon: Languages,
    badgeKey: "products.zhongwenAdvantage.badge",
  },
  {
    key: "storytimeAdvantage",
    href: "/products/storytime-advantage",
    bgColor: "bg-amber-200",
    logo: "/storytime-advantage.png",
    icon: BookMarked,
    badgeKey: "products.storytimeAdvantage.badge",
  },
  {
    key: "stemAdvantage",
    href: "/products/stem-advantage",
    bgColor: "bg-indigo-200",
    logo: "/stem-advantage.png",
    icon: Bot,
    badgeKey: "products.stemAdvantage.badge",
  },
]

export default function B2BSolutions() {
  const t = useScopedI18n("components.products.b2bSolutions")

  const products = productConfigs.map((config) => {
    const title = t(`products.${config.key}.title`)
    const features = Array.from({ length: FEATURE_COUNT }, (_, index) =>
      t(`products.${config.key}.features.${index}`)
    )

    return {
      ...config,
      title,
      features,
      gradeRange: t(`products.${config.key}.gradeRange`),
      badgeLabel:
        config.badgeKey
          ? t(config.badgeKey)
          : config.badgeType === "flagship"
            ? t("mostPopular")
            : config.badgeType === "new"
              ? t(`products.${config.key}.badge`)
              : undefined,
    }
  })

  return (
    <section className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-900 max-w-4xl mx-auto">
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
              className={product.layout === "feature" ? "col-span-full lg:col-span-2" : ""}
            >
              <Card className={`relative flex h-full flex-col overflow-hidden p-8 transition-shadow duration-300 hover:shadow-xl ${product.bgColor}`}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  {product.logo ? (
                    <div className="relative z-10 w-24 h-24">
                      <Image
                        src={product.logo}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="relative z-10">
                      <product.icon className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                    </div>
                  )}
                  {product.badgeLabel && (
                    <span className="bg-white/80 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {product.badgeLabel}
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-700">
                    {product.gradeRange}
                  </p>
                </div>
                <ul className="mb-6 flex-1 space-y-2 text-gray-600">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-end">
                  <Button asChild className="relative z-10">
                    <Link href={product.href}>{t("cta.learnMore")}</Link>
                  </Button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
