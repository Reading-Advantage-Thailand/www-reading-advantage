"use client"

import { motion } from "framer-motion"

export default function ProductHero() {
  return (
    <section className="bg-sky-500 text-sky-50 py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Complete AI-Enhanced Educational Solutions
          </h1>
          <p className="text-xl">
            Comprehensive curriculum solutions for schools and specialized programs 
            for individual learners, powered by advanced AI technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
