import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StruktX - Configurable, Typed AI Framework',
  description: 'A configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory. Built for developers who need flexibility and type safety.',
  keywords: ['AI', 'framework', 'Python', 'LLM', 'machine learning', 'type safety', 'configurable'],
  authors: [{ name: 'StruktX Team' }],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'StruktX - Configurable, Typed AI Framework',
    description: 'A configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory.',
    type: 'website',
    url: 'https://struktx.ai',
    images: [{ url: '/nobg-both.png', width: 1200, height: 630, alt: 'StruktX' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StruktX - Configurable, Typed AI Framework',
    description: 'A configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory.',
    images: ['/nobg-both.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 