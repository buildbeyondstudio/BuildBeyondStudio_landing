import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'DevOps & Deployment | Build Beyond Studio',
  description: 'Docker containerization, CI/CD pipelines, cloud deployment, and infrastructure scaling for production applications.',
}

export default function DevOpsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-4xl mx-auto py-24 px-4 sm:px-6">
        <h1 className="text-5xl font-bold text-black mb-6">DevOps & Deployment</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Production-grade infrastructure that scales. Docker containerization, automated CI/CD pipelines, cloud deployment, and 24/7 monitoring.
        </p>
        <p className="text-gray-700 mb-8">
          We handle the infrastructure so you can focus on your business. Expect sub-second deployments, zero-downtime updates, and infrastructure that grows with you.
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold">
          Learn More
        </a>
      </section>
      <Footer />
    </main>
  )
}
