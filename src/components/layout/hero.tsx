"use client"

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
  return (
    <section className={`relative overflow-hidden ${backgroundImage ? 'bg-hero-warm' : 'bg-sky-500'} text-sky-50 py-20 ${className}`}>
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/students_at_computers.jpg"
              alt="Students working at computers"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/30 to-sky-700/40 z-10" />
        </>
      )}

      {/* Floating decorative elements - warm and sky blue */}
      {backgroundImage && (
        <>
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/20 rounded-full blur-xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-sky-300/20 rounded-full blur-2xl animate-pulse-slow delay-1000" />
        </>
      )}

      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className={`max-w-4xl mx-auto text-center ${backgroundImage ? 'hero-glass' : ''} animate-in fade-in slide-in-from-bottom-8 duration-700`}>
          {typeof title === 'string' ? (
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${backgroundImage ? 'text-white drop-shadow-lg' : ''} leading-tight`}>
              {title}
            </h1>
          ) : (
            <div className="mb-6">{title}</div>
          )}

          {typeof description === 'string' ? (
            <p className="text-xl md:text-2xl leading-relaxed">{description}</p>
          ) : (
            <div className="text-xl md:text-2xl leading-relaxed">{description}</div>
          )}
        </div>
      </div>
    </section>
  )
}
