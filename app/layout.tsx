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
  metadataBase: new URL('https://buildbeyondstudio.com'),

  title: {
    default: 'Build Beyond Studio | Premium Design & Development Agency',
    template: '%s | Build Beyond Studio',
  },

  description:
    'Strategic branding, conversion-focused web design, and creative direction for modern businesses. Premium digital solutions by Build Beyond Studio.',

  authors: [{ name: 'Build Beyond Studio' }],
  creator: 'Build Beyond Studio',
  publisher: 'Build Beyond Studio',

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://buildbeyondstudio.com',
  },

  openGraph: {
    type: 'website',
    url: 'https://buildbeyondstudio.com',
    title: 'Build Beyond Studio | Premium Design & Development',
    description:
      'Strategic branding, conversion-focused design, and creative direction for modern businesses.',
    siteName: 'Build Beyond Studio',
    images: [
      {
        url: 'https://buildbeyondstudio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Build Beyond Studio – Web Development Partner',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Build Beyond Studio',
    description:
      'Web development & DevOps partner delivering production-ready applications.',
    images: ['https://buildbeyondstudio.com/og-image.png'],
    creator: '@buildbeyondstudio',
  },

  icons: {
    icon: '/favicon.ico',
  },
};

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
    description: 'Premium branding, design, and digital solutions for modern businesses.',
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
