"use client"

import Image from "next/image"
import { useState } from "react"
import Hero from "@/components/layout/hero"
import { PageTransition } from "@/components/layout/page-transition"
import { FadeIn } from "@/components/layout/fade-in"
import { ScrollFade } from "@/components/layout/scroll-fade"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export default function ReadingAdvantage() {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const features = [
    {
      icon: "📚",
      title: "Extensive Article Library",
      items: [
        "Over 3,000 articles available",
        "60 new pieces added daily",
        "Content for every learning level",
      ],
    },
    {
      icon: "🎯",
      title: "Comprehensible Input",
      items: [
        "Audio with sentence highlighting",
        "Instant translations",
        "Engaging multimedia content",
      ],
    },
    {
      icon: "🤖",
      title: "Interactive Learning",
      items: [
        "SRS flashcards",
        "Matching exercises",
        "Ordering activities",
      ],
    },
  ];

  const platformFeatures = [
    {
      image: "/images/reading-advantage/choose-your-article.png",
      title: "Extensive Article Selection",
      description: "Browse through thousands of articles across various topics and difficulty levels.",
    },
    {
      image: "/images/reading-advantage/language-selector-en-th-zh-vn.png",
      title: "Multi-Language Support",
      description: "Switch between English, Thai, Chinese, Vietnamese, and more languages seamlessly.",
    },
    {
      image: "/images/reading-advantage/read-article-and-chat-with-ai.png",
      title: "AI-Powered Reading Assistant",
      description: "Get instant help with vocabulary, grammar, and comprehension through our AI chat system.",
    },
    {
      image: "/images/reading-advantage/order-sentence-activity.png",
      title: "Interactive Sentence Activities",
      description: "Practice sentence structure and grammar through engaging ordering activities.",
    },
    {
      image: "/images/reading-advantage/order-words-activity.png",
      title: "Word Order Exercises",
      description: "Build confidence in sentence construction with interactive word ordering activities.",
    },
    {
      image: "/images/reading-advantage/SRS-flashcard-activity.png",
      title: "SRS Flashcard System",
      description: "Master vocabulary efficiently with our spaced repetition system.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title={
            <>
              <h1 className="text-5xl font-bold mb-6">AI-Powered Language Learning</h1>
              <h2 className="text-2xl font-bold mb-6">Experience personalized extensive reading with advanced AI technology</h2>
            </>
          }
          description="Our AI-powered platform adapts to your learning journey, providing personalized content and interactive activities for optimal language acquisition."
          backgroundImage={true}
        />

        {/* Key Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature) => (
                  <Card key={feature.title} className="bg-sky-50">
                    <CardHeader>
                      <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                      <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-6 space-y-2">
                        {feature.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">See Reading Advantage in Action</h2>
              <Card 
                className={`mx-auto transition-all duration-300 cursor-pointer ${
                  isVideoExpanded ? 'w-[80%]' : 'max-w-2xl'
                }`}
                onClick={() => setIsVideoExpanded(!isVideoExpanded)}
              >
                <CardContent className="p-0 aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/LH5qgpSYoqs"
                    title="Reading Advantage Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </CardContent>
                <CardFooter className="justify-center py-2">
                  <p className="text-sm text-muted-foreground">
                    {isVideoExpanded ? 'Click to minimize' : 'Click to expand'}
                  </p>
                </CardFooter>
              </Card>
            </ScrollFade>
          </div>
        </section>

        {/* Platform Features */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {platformFeatures.map((feature) => (
                  <Card key={feature.title} className="flex flex-col h-full">
                    <CardHeader className="p-4">
                      <div className="aspect-video relative rounded-lg overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <CardTitle className="mb-2">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Research-Backed Success</CardTitle>
                  <CardDescription className="text-lg text-center">
                    Students using extensive reading programs like Reading Advantage show an average of 1.48 years equivalent progress in middle-proficiency groups.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { value: "1.48x", label: "Progress Rate" },
                      { value: "3000+", label: "Articles Available" },
                      { value: "60+", label: "New Articles Daily" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-4xl font-bold text-sky-500 mb-2">{stat.value}</div>
                        <p>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollFade>
          </div>
        </section>

        {/* Teacher Tools */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Teacher & Admin Tools</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Class Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Easy student enrollment and grouping</li>
                      <li>• Assignment creation and tracking</li>
                      <li>• Printable classroom activities</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Analytics Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Real-time progress monitoring</li>
                      <li>• Detailed performance reports</li>
                      <li>• Student engagement metrics</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="bg-sky-800 text-sky-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollFade>
              <h2 className="text-3xl font-bold text-center mb-12">Technical Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: "🤖",
                    title: "AI-Powered",
                    description: "Advanced content generation and adaptation",
                  },
                  {
                    icon: "🌐",
                    title: "Multi-Language",
                    description: "Support for multiple languages and translations",
                  },
                  {
                    icon: "☁️",
                    title: "Cloud-Based",
                    description: "Powered by Google Cloud Platform",
                  },
                  {
                    icon: "📱",
                    title: "Cross-Platform",
                    description: "Access on any device, anywhere",
                  },
                ].map((feature) => (
                  <Card key={feature.title} className="bg-sky-900">
                    <CardHeader>
                      <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                      <CardTitle className="text-sky-50 text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sky-100 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollFade>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-sky-800 to-violet-900 py-16">
          <div className="container mx-auto px-4 text-center text-sky-50">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-6">Transform Your Language Learning Journey</h2>
              <p className="text-xl mb-8">Start using Reading Advantage today and experience the power of AI-enhanced learning</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Sign Up Your School
                </a>
                <a
                  href="#"
                  className="bg-white hover:bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-bold transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
