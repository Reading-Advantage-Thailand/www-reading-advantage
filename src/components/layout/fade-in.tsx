'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up',
  ...props 
}: FadeInProps) {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
