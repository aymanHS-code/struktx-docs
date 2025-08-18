"use client"

import Link from 'next/link'
import { Github, Twitter, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/nobg-both.png" alt="StruktX" className="h-6 w-auto" />
          </Link>
          <div className="flex items-center gap-4 text-sm text-dark-300">
            <a href="https://struktx.mintlify.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">Docs</a>
            <a href="https://github.com/aymanhs-code/StruktX" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <span className="opacity-70">© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}