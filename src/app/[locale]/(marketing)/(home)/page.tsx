"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Mail, Sparkles, Target, Zap, Users } from 'lucide-react';
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
        <main className="overflow-x-hidden">
            {/* Hero - Full, bold, no template feel */}
            <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-sky-50">
                {/* Organic blobs */}
                <div className="absolute top-32 right-20 w-80 h-80 bg-amber-300/40 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-sky-300/30 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[150px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="mb-6 bg-white/80 backdrop-blur-sm border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                {t('hero.cta')}
                            </div>

                            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.1] mb-8">
                                <span className="block">{t('hero.title').split(' ').slice(0, 3).join(' ')}</span>
                                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                    {t('hero.title').split(' ').slice(3).join(' ')}
                                </span>
                            </h1>

                            <p className="text-2xl md:text-3xl text-slate-600 max-w-3xl mb-12 leading-relaxed">
                                {t('hero.description')}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/products"
                                    className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-2xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1 font-bold text-lg inline-flex items-center gap-3"
                                >
                                    {t('hero.cta')}
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-white/60 backdrop-blur-sm border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl hover:bg-white hover:border-sky-300 transition-all duration-300 font-bold text-lg"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating product preview */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                    <div className="relative w-[600px] h-[500px]">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-sky-400/20 rounded-[40px] blur-2xl" />
                        <Image
                            src="/images/reading-advantage-demo.png"
                            alt="Reading Advantage Platform"
                            fill
                            className="relative z-10 object-cover rounded-[32px] shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Mission - Full width, bold typography */}
            <section className="relative py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="inline-block mb-8">
                            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto" />
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                            {t('mission.title')}
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full mx-auto mb-12" />
                        <p className="text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            {t('mission.description')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview - Asymmetric layout with image */}
            <section className="relative py-32 bg-gradient-to-br from-sky-600 via-orange-600 to-amber-700 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-700">
                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                {t('overview.title')}
                            </h2>
                            <p className="text-2xl text-amber-50 leading-relaxed mb-12">
                                {t('overview.description')}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-white text-amber-700 px-8 py-4 rounded-2xl hover:bg-amber-50 transition-all duration-300 font-bold text-lg inline-flex items-center gap-2 shadow-xl hover:-translate-y-1"
                                >
                                    Partner With Us
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl -translate-y-4 translate-x-4" />
                                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-white mb-2">100+</div>
                                            <div className="text-amber-100 text-lg">Schools</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-white mb-2">50K+</div>
                                            <div className="text-amber-100 text-lg">Students</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-white mb-2">40%</div>
                                            <div className="text-amber-100 text-lg">Gains</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-5xl font-bold text-white mb-2">10K+</div>
                                            <div className="text-amber-100 text-lg">Articles</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flagship - Diagonal split layout */}
            <section className="relative py-32 bg-gradient-to-br from-amber-50 via-white to-sky-50" id="products">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 animate-in fade-in duration-700">
                            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                                <span className="block">{t('flagship.title').split(' ').slice(0, 2).join(' ')}</span>
                                <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                                    {t('flagship.title').split(' ').slice(2).join(' ')}
                                </span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-2xl bg-white">
                            {/* Benefits side */}
                            <div className="p-12 md:p-16 bg-gradient-to-br from-white to-amber-50">
                                <h3 className="text-4xl font-bold text-amber-700 mb-12">
                                    {t('flagship.productTitle')}
                                </h3>

                                <div className="space-y-6">
                                    {benefits.map((benefit, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/80 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-500"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                                <Check className="w-7 h-7 text-white" />
                                            </div>
                                            <p className="text-xl text-slate-700 leading-relaxed">{benefit}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href="/reading-advantage"
                                    className="mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-10 py-5 rounded-2xl hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-xl hover:shadow-sky-500/30 hover:-translate-y-1 font-bold text-lg w-full justify-center"
                                >
                                    {t('flagship.cta')}
                                    <ArrowRight className="w-6 h-6" />
                                </Link>
                            </div>

                            {/* Image side with gradient overlay */}
                            <div className="relative min-h-[500px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-amber-500/20" />
                                <Image
                                    src="/images/students-at-computers.png"
                                    alt="Reading Advantage Platform"
                                    fill
                                    className="relative z-10 object-cover"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation - Horizontal scroll / card-less features */}
            <section className="relative py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-amber-900/50 to-orange-900/50" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 animate-in fade-in duration-700">
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            {t('innovation.title')}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Zap className="w-10 h-10" />,
                                title: t('innovation.features.0.title'),
                                description: t('innovation.features.0.description'),
                            },
                            {
                                icon: <Target className="w-10 h-10" />,
                                title: t('innovation.features.1.title'),
                                description: t('innovation.features.1.description'),
                            },
                            {
                                icon: <Users className="w-10 h-10" />,
                                title: t('innovation.features.2.title'),
                                description: t('innovation.features.2.description'),
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 transition-all duration-300 hover:-translate-y-3 hover:border-white/20 hover:bg-white/15 animate-in fade-in slide-in-from-bottom-8 duration-700"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-amber-400 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl text-white">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">{feature.title}</h3>
                                <p className="text-lg text-slate-300 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact - Final bold CTA */}
            <section className="relative py-40 bg-gradient-to-br from-amber-500 via-orange-500 to-sky-600 overflow-hidden">
                <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-amber-400/30 rounded-full blur-[150px]" />
                <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-sky-400/30 rounded-full blur-[120px]" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            {t('impact.title')}
                        </h2>
                        <p className="text-2xl md:text-3xl text-amber-50 leading-relaxed mb-16 max-w-3xl mx-auto">
                            {t('impact.description')}
                        </p>

                        <Link
                            href="mailto:support@reading-advantage.com?subject=Demo Request - Reading Advantage Thailand&body=Hi team,%0A%0AI'm interested in scheduling a demo of your educational platforms. Could you please provide more information about your programs and available demo times?%0A%0AI'm particularly interested in:%0A- [Please specify which program(s) you're interested in]%0A- [Your school/organization name if applicable]%0A- [Preferred demo format: in-person, virtual, or self-guided]%0A%0ALooking forward to hearing from you!%0A%0ABest regards"
                            className="inline-flex items-center gap-4 bg-white text-slate-900 px-14 py-6 rounded-3xl hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:-translate-y-2 font-bold text-xl animate-in fade-in duration-700 delay-300 hover:scale-105"
                        >
                            <Mail className="w-8 h-8" />
                            {t('impact.cta')}
                        </Link>

                        {/* Trust badges */}
                        <div className="mt-20 flex flex-wrap justify-center gap-12 animate-in fade-in duration-700 delay-500">
                            <div className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">100+</div>
                                <div className="text-amber-100 text-lg">Schools</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">50K+</div>
                                <div className="text-amber-100 text-lg">Students</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">40%</div>
                                <div className="text-amber-100 text-lg">Improvement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
