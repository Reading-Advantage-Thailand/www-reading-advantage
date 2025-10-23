"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/layout/hero';
import { useScopedI18n } from '@/locales/client';
import { motion } from 'framer-motion';

export default function Home() {
    const t = useScopedI18n('pages.home');
    return (
        <main>
            <Hero
                title={t('hero.title')}
                description={
                    <div>
                        <p className="text-xl mb-8">{t('hero.description')}</p>
                        <Link
                            href="/products"
                            className="bg-sky-50 text-sky-800 px-8 py-3 rounded-lg font-semibold hover:bg-white transition duration-300 inline-block"
                        >
                            {t('hero.cta')}
                        </Link>
                    </div>
                }
                backgroundImage
            />

            {/* Mission & Vision */}
            <section className="modern-section py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-blue-50/50" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 gradient-text">{t('mission.title')}</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {t('mission.description')}
                        </p>
                    </motion.div>
                </div>
                <div className="modern-divider my-16" />
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-gradient-to-br from-sky-700 via-sky-800 to-blue-900 text-sky-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-8">{t('overview.title')}</h2>
                        <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                            {t('overview.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Flagship Product */}
            <section className="py-20 modern-section" id="products">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-4 gradient-text">{t('flagship.title')}</h2>
                    </motion.div>
                    <motion.div 
                        className="max-w-5xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Card className="modern-card border-0 shadow-modern-lg hover:shadow-glow transition-all duration-500">
                            <CardContent className="p-10">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-6 text-blue-800">{t('flagship.productTitle')}</h3>
                                        <ul className="space-y-6">
                                            <li className="flex items-start group">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Check className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-lg text-gray-700">{t('flagship.benefits.0')}</span>
                                            </li>
                                            <li className="flex items-start group">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Check className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-lg text-gray-700">{t('flagship.benefits.1')}</span>
                                            </li>
                                            <li className="flex items-start group">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Check className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-lg text-gray-700">{t('flagship.benefits.2')}</span>
                                            </li>
                                            <li className="flex items-start group">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <Check className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-lg text-gray-700">{t('flagship.benefits.3')}</span>
                                            </li>
                                        </ul>
                                        <div className="mt-10">
                                            <Link
                                                href="/reading-advantage"
                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-modern hover:shadow-glow hover:-translate-y-1 font-semibold text-lg"
                                            >
                                                {t('flagship.cta')}
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    <motion.div 
                                        className="relative aspect-[4/3] w-full"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-sky-600/20 rounded-2xl blur-xl" />
                                        <Image
                                            src="/images/reading-advantage-demo.png"
                                            alt="Reading Advantage Platform Demo"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="rounded-2xl shadow-modern-lg object-cover relative z-10"
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Innovation & Technology */}
            <section className="py-20 bg-gradient-to-br from-sky-600 via-blue-700 to-sky-800 text-sky-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-4">{t('innovation.title')}</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                ),
                                title: t('innovation.features.0.title'),
                                description: t('innovation.features.0.description'),
                                delay: 0
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                ),
                                title: t('innovation.features.1.title'),
                                description: t('innovation.features.1.description'),
                                delay: 0.1
                            },
                            {
                                icon: (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                ),
                                title: t('innovation.features.2.title'),
                                description: t('innovation.features.2.description'),
                                delay: 0.2
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: feature.delay }}
                            >
                                <Card className="bg-gradient-to-br from-sky-700/90 to-blue-800/90 backdrop-blur-sm border border-sky-600/30 h-full group hover:scale-105 transition-all duration-300 shadow-modern hover:shadow-modern-lg">
                                    <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                                        <div>
                                            <div className="text-sky-300 mb-6 flex justify-center group-hover:scale-110 transition-transform">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                                            <p className="text-sky-100 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Statement */}
            <section className="py-20 modern-section relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50" />
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold mb-8 gradient-text">{t('impact.title')}</h2>
                        <p className="text-xl text-gray-700 leading-relaxed mb-12">
                            {t('impact.description')}
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="mailto:support@reading-advantage.com?subject=Demo Request - Reading Advantage Thailand&body=Hi team,%0A%0AI'm interested in scheduling a demo of your educational platforms. Could you please provide more information about your programs and available demo times?%0A%0AI'm particularly interested in:%0A- [Please specify which program(s) you're interested in]%0A- [Your school/organization name if applicable]%0A- [Preferred demo format: in-person, virtual, or self-guided]%0A%0ALooking forward to hearing from you!%0A%0ABest regards"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-10 py-4 rounded-xl hover:from-sky-700 hover:to-blue-800 transition-all duration-300 shadow-modern hover:shadow-glow hover:-translate-y-1 font-semibold text-lg"
                            >
                                {t('impact.cta')}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
