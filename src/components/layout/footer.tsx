'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('navigation');
  const locale = useLocale();

  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('company.title')}</h3>
            <p className="text-slate-400">
              {t('company.description')}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-slate-400 hover:text-white transition-colors">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="text-slate-400 hover:text-white transition-colors">
                  {nav('products')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-slate-400 hover:text-white transition-colors">
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact.title')}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>{t('contact.email')}</li>
              <li>{t('contact.phone')}</li>
              <li>{t('contact.address')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
