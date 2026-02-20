import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'White-Label Solutions | Build Beyond Studio',
  description: 'Build custom applications under your brand. Full IP rights, your branding, complete ownership. Perfect for agencies.',
}

export default function WhiteLabelPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <h1 className="text-5xl font-bold text-black mb-6">White-Label Solutions</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Build custom web applications under your brand. Your reputation, our expertise. Full IP rights included.
        </p>
        <p className="text-gray-700 mb-8">
          We build in the background while you own the relationship. Your clients never know we were involved. You get complete ownership of the code, unlimited control, and a scalable revenue stream.
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold">
          Start a White-Label Project
        </a>
      </section>
      <Footer />
    </main>
  )
}
