import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0066ff',
}

export const metadata: Metadata = {
  title: 'Build Beyond Studio — Tech Partner for Agencies | Web Applications & DevOps',
  description: 'Build Beyond Studio partners with agencies to deliver stunning, production-ready web applications. Scale without building from scratch. MERN stack, DevOps, cloud infrastructure, and white-label solutions for modern agencies.',
  keywords: ['web development agency', 'MERN stack', 'DevOps', 'white-label solutions', 'production-ready applications', 'tech partner'],
  authors: [{ name: 'Build Beyond Studio' }],
  creator: 'Build Beyond Studio',
  publisher: 'Build Beyond Studio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildbeyondstudio.com',
    title: 'Build Beyond Studio — Tech Partner for Agencies',
    description: 'Scale your agency with production-ready web applications. MERN stack, DevOps expertise, and white-label solutions.',
    images: [{
      url: '/logo.ico',
      width: 1200,
      height: 630,
      alt: 'Build Beyond Studio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Beyond Studio',
    description: 'Tech partner for agencies delivering production-ready web applications',
    images: ['/logo.ico'],
    creator: '@buildbeyondstudio',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  metadataBase: new URL('https://buildbeyondstudio.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Build Beyond Studio',
    url: 'https://buildbeyondstudio.com',
    logo: 'https://buildbeyondstudio.com/logo.ico',
    description: 'Scale your agency with production-ready web applications. MERN stack, DevOps expertise, and white-label solutions.',
    sameAs: [
      'https://www.linkedin.com/company/buildbeyondstudio',
      'https://github.com/buildbeyondstudio'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-93015-79493',
      contactType: 'Sales/Partnership'
    }
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
