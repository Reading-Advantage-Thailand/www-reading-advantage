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
      "Boost reading comprehension scores by up to 40% with personalized AI content",
      "Save 5+ hours/week with automated lesson planning and grading",
      "Track individual and class progress with detailed analytics dashboard",
      "Seamlessly integrate with your existing curriculum and systems"
    ],
    href: "/reading-advantage",
    isFlagship: true
  },
  {
    title: "STEM Advantage",
    icon: Bot,
    features: [
      "Increase student engagement with interactive, hands-on STEM projects",
      "Prepare students for future careers with real-world problem solving",
      "Meet national curriculum standards with comprehensive lesson plans",
      "Track skill development across multiple STEM disciplines"
    ],
    href: "/stem-advantage"
  },
  {
    title: "Science Advantage",
    icon: Beaker,
    features: [
      "Reduce lab setup time by 60% with virtual experiments",
      "Ensure safety while maintaining hands-on learning experiences",
      "Improve concept retention with interactive demonstrations",
      "Monitor student progress with automated assessments"
    ],
    href: "/science-advantage"
  },
  {
    title: "Math Advantage",
    icon: Calculator,
    features: [
      "Improve math scores by 35% with adaptive learning paths",
      "Identify and address knowledge gaps with AI diagnostics",
      "Build confidence with instant feedback and step-by-step solutions",
      "Save time with automated homework grading and progress reports"
    ],
    href: "/math-advantage"
  },
  {
    title: "Zhongwen Advantage",
    icon: Languages,
    features: [
      "Accelerate Chinese language acquisition by 50%",
      "Perfect pronunciation with AI speech recognition",
      "Master character writing with stroke-order guidance",
      "Enhance cultural understanding with authentic content"
    ],
    href: "/zhongwen-advantage"
  },
  {
    title: "Storytime Advantage",
    icon: BookMarked,
    features: [
      "Build strong literacy foundations in early learners",
      "Increase reading engagement with interactive stories",
      "Develop phonics skills through guided practice",
      "Track reading progress with detailed parent/teacher reports"
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
            Transform Your Institution with Proven Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our comprehensive curriculum solutions deliver measurable improvements in student outcomes 
            while reducing administrative workload. Join hundreds of successful institutions already 
            benefiting from our turnkey educational technology.
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
                      Most Popular
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
                  <Link href={product.href}>See Success Stories</Link>
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
