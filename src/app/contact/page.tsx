import { ContactForm } from "@/components/contact/contact-form"
import { PageTransition } from "@/components/layout/page-transition"

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col">
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
            <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team. We&apos;re here to help with any questions about our educational solutions.
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
