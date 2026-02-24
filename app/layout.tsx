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

  authors: [{ name: "Build Beyond Studio" }],
  creator: "Build Beyond Studio",
  publisher: "Build Beyond Studio",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://buildbeyondstudio.com",
  },

  openGraph: {
    type: "website",
    url: "https://buildbeyondstudio.com",
    title: "Build Beyond Studio | Web Development & DevOps Partner",
    description:
      "Production-ready web applications with MERN stack, DevOps, and white-label solutions for agencies.",
    siteName: "Build Beyond Studio",
    images: [
      {
        url: "https://buildbeyondstudio.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Build Beyond Studio – Web Development Partner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Build Beyond Studio",
    description:
      "Web development & DevOps partner delivering production-ready applications.",
    images: ["https://buildbeyondstudio.com/logo.png"],
    creator: "@buildbeyondstudio",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Build Beyond Studio",
    url: "https://buildbeyondstudio.com",
    logo: "https://buildbeyondstudio.com/logo.png",
    description:
      "Web development and DevOps agency specializing in production-ready applications, MERN stack, and white-label solutions for agencies and startups.",
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

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="keywords"
          content="web development agency, MERN stack development, DevOps services, white-label solutions, web application development, Build Beyond Studio"
        />
        <meta name="author" content="Build Beyond Studio" />
        <meta name="robots" content="index, follow" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
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
