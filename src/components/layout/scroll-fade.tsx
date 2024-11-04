'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollFadeProps {
  children: ReactNode
  delay?: number
  threshold?: number
}

export function ScrollFade({ 
  children, 
  delay = 0,
  threshold = 0.1 
}: ScrollFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
    >
      {children}
    </motion.div>
  )
}
