import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0066ff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buildbeyondstudio.com"),

  title: {
    default: "Build Beyond Studio | Web Development & DevOps Agency",
    template: "%s | Build Beyond Studio",
  },

  description:
    "Build Beyond Studio – Production-ready web applications with MERN stack, DevOps deployment, and white-label solutions for agencies.",

  keywords: [
    "web development agency",
    "MERN stack development",
    "DevOps services",
    "white-label solutions",
    "web application development",
    "cloud deployment",
    "production applications",
  ],

  authors: [{ name: "Build Beyond Studio" }],
  creator: "Build Beyond Studio",
  publisher: "Build Beyond Studio",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://buildbeyondstudio.com",
  },

  openGraph: {
    type: "website",
    url: "https://buildbeyondstudio.com",
    title: "Build Beyond Studio | Web Development & DevOps Agency",
    description:
      "Production-ready web applications with MERN stack, DevOps, and white-label solutions for agencies.",
    siteName: "Build Beyond Studio",
    images: [
      {
        url: "https://buildbeyondstudio.com/logo.png",
        width: 512,
        height: 512,
        alt: "Build Beyond Studio Logo",
        type: "image/png",
      },
      {
        url: "https://buildbeyondstudio.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Build Beyond Studio – Web Development Partner",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@buildbeyondstudio",
    creator: "@buildbeyondstudio",
    title: "Build Beyond Studio | Web Development & DevOps Agency",
    description:
      "Web development & DevOps partner delivering production-ready applications, MERN stack, and white-label solutions.",
    images: {
      url: "https://buildbeyondstudio.com/logo.png",
      alt: "Build Beyond Studio Logo",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Production-grade structured data - Google-optimized
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://buildbeyondstudio.com/#organization",
    name: "Build Beyond Studio",
    url: "https://buildbeyondstudio.com",
    logo: {
      "@type": "ImageObject",
      url: "https://buildbeyondstudio.com/logo.png",
      width: 512,
      height: 512,
      caption: "Build Beyond Studio Logo",
    },
    image: {
      "@type": "ImageObject",
      url: "https://buildbeyondstudio.com/logo.png",
      width: 512,
      height: 512,
    },
    description:
      "Web development and DevOps agency specializing in production-ready applications, MERN stack, and white-label solutions for agencies and startups.",
    alternativeHeadline:
      "Web Development & DevOps Agency | Build Beyond Studio",
    foundingDate: "2023",
    sameAs: [
      "https://www.linkedin.com/company/buildbeyondstudio",
      "https://github.com/buildbeyondstudio",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-93015-79493",
      contactType: "Sales/Partnership",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "India",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Web Application Development",
      "MERN Stack",
      "DevOps",
      "Cloud Deployment",
      "White-Label Solutions",
    ],
  };

  // WebSite schema with SearchAction - improves search appearance
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://buildbeyondstudio.com/#website",
    name: "Build Beyond Studio",
    url: "https://buildbeyondstudio.com",
    inLanguage: "en-US",
    isPartOf: {
      "@id": "https://buildbeyondstudio.com/#organization",
    },
    image: {
      "@type": "ImageObject",
      url: "https://buildbeyondstudio.com/logo.png",
      width: 512,
      height: 512,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://buildbeyondstudio.com?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Combine schemas for JSON-LD
  const structuredDataScript = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, webSiteSchema],
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="keywords"
          content="web development agency, MERN stack development, DevOps services, white-label solutions, web application development, Build Beyond Studio"
        />
        <meta name="author" content="Build Beyond Studio" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Production-grade JSON-LD for Google Search - renders server-side */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataScript),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
