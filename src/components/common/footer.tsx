import { getScopedI18n } from '@/locales/server'
import Link from 'next/link'
import React from 'react'

export default async function Footer() {
    const t = await getScopedI18n("components.common.footer")
    return (
        <footer className="bg-slate-900 text-slate-200 py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">{t("heading")}</h3>
                        <p className="text-slate-400">
                            {t("description")}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">{t("quickLinks.title")}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                                    {t("quickLinks.links.about")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                                    {t("quickLinks.links.products")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                                    {t("quickLinks.links.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">{t("contactUs.title")}</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li>{t("contactUs.email")}: support@reading-advantage.com</li>
                            <li>{t("contactUs.phone")}: +66 634 460 628</li>
                            <li>{t("contactUs.location")}</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Reading Advantage Thailand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}