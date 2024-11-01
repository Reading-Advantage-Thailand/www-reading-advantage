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

const products = [
  {
    title: "Reading Advantage for Schools",
    icon: BookOpen,
    features: [
      "Extensive AI-generated reading materials",
      "Multi-level content for different proficiencies",
      "Comprehensive analytics for teachers",
      "Integration with school curriculum"
    ],
    href: "/reading-advantage",
    isFlagship: true
  },
  {
    title: "STEM Advantage",
    icon: Bot,
    features: [
      "Comprehensive STEM education platform",
      "Interactive lessons and experiments",
      "Real-world problem-solving projects",
      "Aligned with national curriculum standards"
    ],
    href: "/stem-advantage"
  },
  {
    title: "Science Advantage",
    icon: Beaker,
    features: [
      "Interactive science learning platform",
      "Virtual lab experiences",
      "Hands-on experiments and demonstrations",
      "Comprehensive assessment tools"
    ],
    href: "/science-advantage"
  },
  {
    title: "Math Advantage",
    icon: Calculator,
    features: [
      "AI-powered mathematics learning system",
      "Adaptive problem-solving exercises",
      "Step-by-step solution guides",
      "Progress tracking and analytics"
    ],
    href: "/math-advantage"
  },
  {
    title: "Zhongwen Advantage",
    icon: Languages,
    features: [
      "Complete Chinese language learning solution",
      "Character recognition and writing practice",
      "Speaking and listening exercises",
      "Cultural context integration"
    ],
    href: "/zhongwen-advantage"
  },
  {
    title: "Storytime Advantage",
    icon: BookMarked,
    features: [
      "Early reading platform for K-3 students",
      "Interactive storytelling",
      "Phonics development",
      "Reading comprehension activities"
    ],
    href: "/storytime-advantage"
  }
]

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
  return (
    <section className="bg-white py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Transforming Schools Through AI-Powered Education
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive curriculum solutions designed to enhance learning outcomes 
            and empower educators with advanced AI technology.
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
                      Flagship Product
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
                  <Link href={product.href}>Learn More</Link>
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
