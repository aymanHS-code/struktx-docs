import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeLoadingProvider from '@/components/ThemeLoadingProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://struktx.vercel.app'),
  title: {
    default: 'StruktX - A Lean Core with Swappable Pieces',
    template: '%s | StruktX'
  },
  description: 'A lean core with swappable pieces. StruktX is a configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory. Built for engineers, made to ship.',
  keywords: [
    'AI framework',
    'machine learning',
    'LLM',
    'Python',
    'type safety',
    'configurable',
    'swappable components',
    'developer tools',
    'AI development',
    'structured AI',
    'lean architecture'
  ],
  authors: [{ name: 'StruktX Team' }],
  creator: 'StruktX',
  publisher: 'StruktX',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/logo-blue.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
            openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://struktx.vercel.app',
        siteName: 'StruktX',
        title: 'StruktX - A Lean Core with Swappable Pieces',
        description: 'A lean core with swappable pieces. StruktX is a configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory. Built for engineers, made to ship.',
        images: [
          {
            url: '/opengraph-image',
            width: 1200,
            height: 630,
            alt: 'StruktX - A Lean Core with Swappable Pieces',
            type: 'image/png',
          },
          {
            url: '/logo-blue.png',
            width: 800,
            height: 800,
            alt: 'StruktX Logo',
            type: 'image/png',
          }
        ],
      },
            twitter: {
        card: 'summary_large_image',
        site: '@struktx',
        creator: '@struktx',
        title: 'StruktX - A Lean Core with Swappable Pieces',
        description: 'A lean core with swappable pieces. StruktX is a configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory.',
        images: [
          {
            url: '/twitter-image',
            width: 1200,
            height: 630,
            alt: 'StruktX - A Lean Core with Swappable Pieces',
          }
        ],
      },
  alternates: {
    canonical: 'https://struktx.vercel.app',
  },
  category: 'technology',
  classification: 'AI Framework',
  other: {
    'theme-color': '#0066cc',
    'msapplication-TileColor': '#0066cc',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'StruktX',
    'application-name': 'StruktX',
    'msapplication-TileImage': '/logo-blue.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="StruktX" />
        <meta name="application-name" content="StruktX" />
        
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "StruktX",
              "description": "A lean core with swappable pieces. StruktX is a configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory.",
              "url": "https://struktx.vercel.app",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "programmingLanguage": "Python",
              "author": {
                "@type": "Organization",
                "name": "StruktX Team"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "image": "https://struktx.vercel.app/logo-blue.png",
              "logo": "https://struktx.vercel.app/logo-blue.png",
              "screenshot": "https://struktx.vercel.app/nobg-both-white.png",
              "keywords": "AI framework, machine learning, LLM, Python, type safety, configurable, swappable components",
              "datePublished": "2024-01-01",
              "dateModified": "2024-01-01"
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "StruktX",
              "url": "https://struktx.vercel.app",
              "logo": "https://struktx.vercel.app/logo-blue.png",
              "description": "A lean core with swappable pieces. StruktX is a configurable, typed AI framework.",
              "sameAs": [
                "https://github.com/struktx/struktx",
                "https://twitter.com/struktx"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeLoadingProvider>
          {children}
        </ThemeLoadingProvider>
      </body>
    </html>
  )
} 