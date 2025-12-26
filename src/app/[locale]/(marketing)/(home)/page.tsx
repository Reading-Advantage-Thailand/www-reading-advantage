"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Mail, Lightbulb, Rocket, BookOpen } from 'lucide-react';
import Hero from '@/components/layout/hero';
import { useScopedI18n } from '@/locales/client';

export default function Home() {
    const t = useScopedI18n('pages.home');
    const benefits = [
        t('flagship.benefits.0'),
        t('flagship.benefits.1'),
        t('flagship.benefits.2'),
        t('flagship.benefits.3'),
    ];
    return (
        <main>
            <Hero
                title={t('hero.title')}
                description={
                    <div>
                        <p className="text-xl mb-8">{t('hero.description')}</p>
                        <Link
                            href="/products"
                            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition duration-300 inline-block shadow-lg"
                        >
                            {t('hero.cta')}
                        </Link>
                    </div>
                }
                backgroundImage
            />

            {/* Mission & Vision */}
            <section className="modern-section py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-transparent to-sky-50/40" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h2 className="text-4xl font-bold mb-8 warm-text-gradient">{t('mission.title')}</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {t('mission.description')}
                        </p>
                    </div>
                </div>
                <div className="modern-divider my-16" />
            </section>

            {/* Company Overview */}
            <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-sky-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h2 className="text-4xl font-bold mb-8">{t('overview.title')}</h2>
                        <p className="text-xl leading-relaxed max-w-3xl mx-auto text-amber-50">
                            {t('overview.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Flagship Product */}
            <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-sky-50 relative" id="products">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 animate-in fade-in duration-700">
                        <h2 className="text-4xl font-bold mb-4 warm-text-gradient">{t('flagship.title')}</h2>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-modern-lg overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="p-12">
                                    <h3 className="text-3xl font-bold mb-6 text-amber-700">{t('flagship.productTitle')}</h3>
                                    <ul className="space-y-4">
                                        {benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start group p-3 rounded-xl hover:bg-amber-50 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                                                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                                    <Check className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="text-lg text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-10">
                                        <Link
                                            href="/reading-advantage"
                                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-modern hover:shadow-xl hover:-translate-y-1 font-semibold text-lg"
                                        >
                                            {t('flagship.cta')}
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative aspect-[4/3] w-full animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-sky-200/50" />
                                    <Image
                                        src="/images/reading-advantage-demo.png"
                                        alt="Reading Advantage Platform Demo"
                                        fill
                                        className="relative z-10 object-cover"
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation & Technology */}
            <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-sky-100 relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-in fade-in duration-700">
                        <h2 className="text-4xl font-bold mb-4 brand-text-gradient">{t('innovation.title')}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Lightbulb className="w-8 h-8" />,
                                title: t('innovation.features.0.title'),
                                description: t('innovation.features.0.description'),
                            },
                            {
                                icon: <Rocket className="w-8 h-8" />,
                                title: t('innovation.features.1.title'),
                                description: t('innovation.features.1.description'),
                            },
                            {
                                icon: <BookOpen className="w-8 h-8" />,
                                title: t('innovation.features.2.title'),
                                description: t('innovation.features.2.description'),
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Statement */}
            <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-sky-50 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 warm-text-gradient">
                            {t('impact.title')}
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-12">
                            {t('impact.description')}
                        </p>
                        <Link
                            href="mailto:support@reading-advantage.com?subject=Demo Request - Reading Advantage Thailand&body=Hi team,%0A%0AI'm interested in scheduling a demo of your educational platforms. Could you please provide more information about your programs and available demo times?%0A%0AI'm particularly interested in:%0A- [Please specify which program(s) you're interested in]%0A- [Your school/organization name if applicable]%0A- [Preferred demo format: in-person, virtual, or self-guided]%0A%0ALooking forward to hearing from you!%0A%0ABest regards"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 font-bold text-xl animate-in fade-in duration-700 delay-300 hover:scale-105"
                        >
                            <Mail className="w-6 h-6" />
                            {t('impact.cta')}
                        </Link>

                        {/* Trust indicators */}
                        <div className="mt-16 grid grid-cols-3 gap-8 animate-in fade-in duration-700 delay-500">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-amber-600">100+</div>
                                <div className="text-slate-600">Schools</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-sky-600">50K+</div>
                                <div className="text-slate-600">Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-rose-600">40%</div>
                                <div className="text-slate-600">Improvement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
