import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageTransition } from '@/components/layout/page-transition';
import { AuthProvider } from '@/contexts/auth-context';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AuthProvider>
        <Header />
        <PageTransition>
          <div className="flex flex-col min-h-screen pt-20">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </PageTransition>
      </AuthProvider>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'th' }, { locale: 'zh' }];
}
