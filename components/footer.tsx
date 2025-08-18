"use client"

import Link from 'next/link'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Examples', href: '/examples' },
      { name: 'API Reference', href: '/api' },
      { name: 'GitHub', href: 'https://github.com/aymanHS-code/StruktX' },
    ],
    resources: [
      { name: 'Getting Started', href: '/docs/introduction' },
      { name: 'Architecture', href: '/docs/architecture' },
      { name: 'Configuration', href: '/docs/configuration' },
      { name: 'Middleware', href: '/docs/middleware' },
    ],
    support: [
      { name: 'Issues', href: 'https://github.com/aymanHS-code/StruktX/issues' },
      { name: 'Discussions', href: 'https://github.com/aymanHS-code/StruktX/discussions' },
      { name: 'Contact', href: 'mailto:support@struktx.ai' },
    ],
  }

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/aymanHS-code/StruktX', icon: Github },
    { name: 'Twitter', href: 'https://twitter.com/struktx', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@struktx.ai', icon: Mail },
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
                      <Link href="/" className="flex items-center space-x-3 mb-4">
            <img src="/nobg-both.png" alt="StruktX" className="h-8 w-auto" />
          </Link>
            <p className="text-dark-300 mb-4 max-w-xs">
              A configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-300 text-sm">
              © {currentYear} StruktX. All rights reserved.
            </p>
            <p className="text-dark-300 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 