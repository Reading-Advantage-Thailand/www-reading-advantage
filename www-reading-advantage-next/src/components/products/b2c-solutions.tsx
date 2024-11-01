"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Code } from "lucide-react"

export default function B2CSolutions() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Professional Development Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Specialized programs designed for individual learners seeking 
            professional growth and career advancement.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            <div className="text-blue-600 mb-4 relative z-10">
              <Code className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Codecamp Advantage</h3>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>71-day intensive coding bootcamp</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Project-based learning with Next.js 14, React, and TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Industry-aligned curriculum</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Career preparation and portfolio development</span>
              </li>
            </ul>
            <Button asChild className="relative z-10">
              <Link href="/codecamp-advantage">Learn More</Link>
            </Button>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50" />
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
