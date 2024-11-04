"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { ReactNode } from "react"

interface HeroProps {
  title: string | ReactNode
  description: string | ReactNode
  backgroundImage?: boolean
  className?: string
}

export default function Hero({ 
  title, 
  description, 
  backgroundImage = false,
  className = ""
}: HeroProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className={`relative overflow-hidden bg-sky-500 text-sky-50 py-20 ${className}`}>
      {backgroundImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <Image
            src="/images/students_at_computers.jpg"
            alt="Students working at computers"
            fill
            className="object-cover opacity-20"
            priority
          />
        </motion.div>
      )}
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {typeof title === 'string' ? (
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
          ) : (
            title
          )}
          
          {typeof description === 'string' ? (
            <p className="text-xl">{description}</p>
          ) : (
            description
          )}
        </motion.div>
      </div>
    </section>
  )
}
