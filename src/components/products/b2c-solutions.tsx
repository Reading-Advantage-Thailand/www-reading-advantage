"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Code, GraduationCap, BrainCircuit, Users } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Industry-Ready Skills",
    description: "Master in-demand technologies like Next.js 14, React, and TypeScript through hands-on projects"
  },
  {
    icon: GraduationCap,
    title: "Career Support",
    description: "Get personalized mentorship, interview preparation, and direct connections to hiring partners"
  },
  {
    icon: BrainCircuit,
    title: "Project-Based Learning",
    description: "Build a professional portfolio with real-world projects that showcase your capabilities"
  },
  {
    icon: Users,
    title: "Network Growth",
    description: "Join a community of tech professionals and expand your professional network"
  }
]

export default function B2CSolutions() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Accelerate Your Tech Career
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Launch your career in tech with our intensive bootcamp program. 
            Join over 500+ successful graduates now working at leading technology companies.
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
          <h3 className="text-2xl font-bold mb-4">Codecamp Advantage</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-800">Program Highlights</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>71-day intensive, full-stack development program</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Learn from industry experts with 10+ years experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Build 5+ production-ready projects for your portfolio</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>1-on-1 mentorship throughout the program</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-800">Career Outcomes</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>93% job placement rate within 3 months</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Average 55% salary increase post-program</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Direct hiring partnerships with 50+ companies</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lifetime access to alumni network and resources</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild size="lg" className="relative z-10">
              <Link href="/products/codecamp-advantage">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="relative z-10">
              <Link href="/products/codecamp-advantage#curriculum">View Curriculum</Link>
            </Button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50" />
        </Card>
      </div>
    </section>
  )
}
