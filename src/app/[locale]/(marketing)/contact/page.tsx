import { ContactForm } from "@/components/contact/contact-form"
import { PageTransition } from "@/components/layout/page-transition"
import { getScopedI18n } from "@/locales/server"

export default async function ContactPage() {
  const t = await getScopedI18n('pages.contact')
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">{t('title')}</h1>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>

        <section className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
