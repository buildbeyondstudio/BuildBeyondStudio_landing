import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Technical Consulting | Build Beyond Studio',
  description: 'Strategic guidance on architecture, technology selection, scalability, and technical strategy for your projects.',
}

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <h1 className="text-5xl font-bold text-black mb-6">Technical Consulting</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Strategic guidance on architecture, technology selection, and scalability. Get expert advice without the overhead.
        </p>
        <p className="text-gray-700 mb-8">
          Whether you're choosing a tech stack, planning a migration, or scaling your infrastructure, we provide honest, strategic advice. Hourly consulting, retainers, or project-based engagements available.
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold">
          Book a Consultation
        </a>
      </section>
      <Footer />
    </main>
  )
}
