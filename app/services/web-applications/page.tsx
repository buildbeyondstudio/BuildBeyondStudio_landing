import type { Metadata } from 'next'
import WebApplicationsService from '@/components/services/web-applications'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Web Application Development | Build Beyond Studio',
  description: 'Production-ready MERN stack web applications built to scale. 6-8 week delivery with DevOps from day one. For startups and agencies.',
  keywords: 'web application development, MERN stack development, custom web applications, production-ready applications, web app development agency',
  openGraph: {
    title: 'Web Application Development | Build Beyond Studio',
    description: 'Production-ready MERN stack web applications built to scale',
    type: 'website',
    url: 'https://buildbeyondstudio.com/services/web-applications'
  }
}

export default function WebApplicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WebApplicationsService />
      <Footer />
    </main>
  )
}
