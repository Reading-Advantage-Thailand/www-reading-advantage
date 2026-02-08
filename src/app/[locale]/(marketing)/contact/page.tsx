import { getScopedI18n } from "@/locales/server"
import Image from "next/image"
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
} from "lucide-react"

export default async function ContactPage() {
    const t = await getScopedI18n('pages.contact')

    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-sky-50 via-sky-100 to-white py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h1 className="text-5xl font-bold text-sky-900 mb-6">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-sky-700 mb-4">
                            {t('description')}
                        </p>
                        <p className="text-lg text-slate-600">
                            {t('subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Cards Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-sky-900 mb-12 animate-in fade-in duration-700 delay-100">
                        {t('connectWithUs')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Email Card */}
                        <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in duration-700 delay-200">
                            <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                                <Mail className="w-8 h-8 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-900 mb-3">
                                {t('email.title')}
                            </h3>
                            <p className="text-slate-600 mb-4">
                                {t('email.description')}
                            </p>
                            <a
                                href="mailto:support@reading-advantage.com"
                                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                            >
                                {t('email.address')}
                            </a>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in duration-700 delay-300">
                            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                                <Phone className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-amber-900 mb-3">
                                {t('phone.title')}
                            </h3>
                            <p className="text-slate-600 mb-4">
                                {t('phone.description')}
                            </p>
                            <a
                                href="tel:+660990058038"
                                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                            >
                                {t('phone.number')}
                            </a>
                        </div>

                        {/* Location Card */}
                        <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in duration-700 delay-400">
                            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                                <MapPin className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-amber-900 mb-3">
                                {t('location.title')}
                            </h3>
                            <p className="text-slate-600 mb-4">
                                {t('location.description')}
                            </p>
                            <p className="text-amber-700 font-semibold">
                                {t('location.city')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social & QR Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Business Hours */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
                            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                <Clock className="w-8 h-8 text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                {t('hours.title')}
                            </h3>
                            <p className="text-slate-600 mb-3">
                                {t('hours.description')}
                            </p>
                            <p className="text-3xl font-bold text-sky-600">
                                {t('hours.time')}
                            </p>
                        </div>

                        {/* Social Media & Line QR */}
                        <div className="bg-gradient-to-br from-sky-900 to-sky-800 rounded-2xl p-8 shadow-xl text-white animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                {t('social.title')}
                            </h3>
                            <p className="text-sky-100 mb-6">
                                {t('social.description')}
                            </p>

                            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                                <h4 className="font-semibold mb-3">
                                    {t('lineQr.title')}
                                </h4>
                                <p className="text-sm text-sky-100 mb-4">
                                    {t('lineQr.description')}
                                </p>
                                <div className="flex items-center justify-center bg-white rounded-lg p-4 mb-3">
                                    <Image
                                        src="/line-qr.jpg"
                                        alt="Line QR Code"
                                        width={200}
                                        height={200}
                                        className="rounded-lg"
                                    />
                                </div>
                                <p className="text-center text-sm font-semibold text-sky-100">
                                    {t('lineQr.caption')}
                                </p>
                            </div>

                            <a
                                href="https://www.tiktok.com/@reading.advantage"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 bg-white hover:bg-sky-50 text-sky-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                <span className="text-2xl">📱</span>
                                {t('social.tiktok')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 px-4 bg-sky-900">
                <div className="container mx-auto text-center animate-in fade-in duration-700">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                    <a
                        href="mailto:support@reading-advantage.com"
                        className="inline-block bg-white hover:bg-sky-50 text-sky-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                        {t('email.title')}
                    </a>
                </div>
            </section>
        </main>
    )
}
