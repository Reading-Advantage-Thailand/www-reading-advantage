import {getRequestConfig} from 'next-intl/server';
import {locales, Locale} from './settings';

export type RequestConfig = Awaited<ReturnType<typeof getRequestConfig>>;

export function isValidLocale(locale: unknown): locale is Locale {
  return typeof locale === 'string' && locales.includes(locale as Locale);
}

export function assertValidLocale(locale: unknown): asserts locale is Locale {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
}

export default getRequestConfig(async ({locale}) => {
  assertValidLocale(locale);
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Asia/Bangkok',
    now: new Date()
  };
});
