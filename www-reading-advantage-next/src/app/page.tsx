'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/layout/hero';

export default function Home() {
  return (
    <main>
        <Hero 
          title="Empowering Education Through AI Innovation"
          description={
            <div>
              <p className="text-xl mb-8">Transform your educational outcomes with our proven AI-powered solutions. Join thousands of successful institutions and learners across Southeast Asia.</p>
              <Link 
                href="#products" 
                className="bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-semibold hover:bg-white transition duration-300 inline-block"
              >
                Discover Your Solution
              </Link>
            </div>
          }
          backgroundImage
        />

        {/* Mission & Vision */}
        <section className="bg-sky-50 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-violet-500">Your Success Is Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We partner with educational institutions across Thailand and Southeast Asia to deliver measurable improvements in student outcomes. Our comprehensive solutions combine cutting-edge AI technology with proven pedagogical methods, enabling educators to provide truly personalized learning experiences while reducing administrative workload.
                    </p>
                </div>
            </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-sky-800 text-sky-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center">Your Complete Education Partner</h2>
                    <p className="text-lg text-sky-50 leading-relaxed mb-8">
                        Reading Advantage (Thailand) delivers turnkey educational solutions that drive real results. Our comprehensive platform integrates seamlessly with your existing curriculum, providing everything from AI-powered content generation to detailed analytics that help you track and improve student performance. Whether you&apos;re a school looking to enhance your curriculum or an individual seeking professional development, we have proven solutions to help you succeed.
                    </p>
                </div>
            </div>
        </section>

        {/* Flagship Product */}
        <section className="py-16 bg-sky-50" id="products">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-violet-900">Experience the Advantage</h2>
                <Card className="max-w-5xl mx-auto">
                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-blue-800">Reading Advantage</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                                        <span>Improve student comprehension by up to 40% with AI-personalized content</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                                        <span>Save 5+ hours per week with automated lesson planning and grading</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                                        <span>Track progress with detailed analytics and actionable insights</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                                        <span>Boost engagement with gamified learning and real-time feedback</span>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link 
                                      href="https://reading.reading-advantage.com" 
                                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                                    >
                                      Start Your Success Story
                                    </Link>
                                </div>
                            </div>
                            <div className="relative aspect-[4/3] w-full">
                                <Image
                                    src="/images/reading-advantage-demo.png"
                                    alt="Reading Advantage Platform Demo"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="rounded-lg shadow-md object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

        {/* Innovation & Technology */}
        <section className="bg-sky-500 text-sky-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Powered by Innovation</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="text-blue-600 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">Intelligent Learning</h3>
                            <p className="text-gray-600">Our AI adapts to each student&apos;s pace and learning style, ensuring optimal progress and engagement</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="text-blue-600 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">Seamless Integration</h3>
                            <p className="text-gray-600">Deploy within days, not months, with full support and minimal disruption to your existing systems</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white">
                        <CardContent className="p-6">
                            <div className="text-blue-600 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-blue-800">Proven Results</h3>
                            <p className="text-gray-600">Join institutions achieving 40%+ improvement in student outcomes within the first semester</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        {/* Impact Statement */}
        <section className="bg-sky-50 text-blue-800 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Institution?</h2>
                    <p className="text-lg leading-relaxed">
                        Join hundreds of successful institutions across Southeast Asia who have already enhanced their educational outcomes with our comprehensive solutions. Whether you&apos;re looking to improve student engagement, reduce teacher workload, or boost academic performance, we have a proven path to success.
                    </p>
                    <div className="mt-8">
                        <Link 
                          href="/contact" 
                          className="inline-block bg-sky-800 text-sky-50 px-6 py-3 rounded-lg hover:bg-white transition duration-300"
                        >
                          Schedule a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
