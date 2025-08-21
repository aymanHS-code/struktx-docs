"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

type TransitionContextType = {
  fadeToDocs: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export const TransitionContext = React.createContext<TransitionContextType>({
  fadeToDocs: () => {},
})

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default function ThemeLoadingProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  React.useEffect(() => {
    // No longer needed since we handle background via CSS
  }, [pathname])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const fadeToDocs = React.useCallback(() => {
    try {
      if (typeof document !== 'undefined') {
        // Force dark background immediately
        document.documentElement.style.backgroundColor = '#0b1220'
        document.body.style.backgroundColor = '#0b1220'
        
        // Also set on any existing elements
        const allElements = document.querySelectorAll('*')
        allElements.forEach(el => {
          if (el instanceof HTMLElement) {
            el.style.backgroundColor = '#0b1220'
          }
        })
        
        // Reset after navigation completes
        setTimeout(() => {
          document.documentElement.style.backgroundColor = ''
          document.body.style.backgroundColor = ''
          allElements.forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.backgroundColor = ''
            }
          })
        }, 2000)
      }
    } catch {}
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <TransitionContext.Provider value={{ fadeToDocs }}>
        <div className="relative">{children}</div>
      </TransitionContext.Provider>
    </ThemeContext.Provider>
  )
}

// Global keyframes via tailwind already allowed, but provide a fallback
// Add this to globals if not present
// @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
