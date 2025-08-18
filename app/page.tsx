"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Github, BookOpen, Wand2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles } from '@/components/animated/Sparkles'
import { CodeShowcase } from '@/components/sections/CodeShowcase'
import Iridescence from '@/components/Irid'
import GlassSurface from '@/components/GlassSurface'
 

export default function Home() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const q = (sel: string) => document.querySelector(sel)

      if (q('.hero-badge')) gsap.from('.hero-badge', { y: -10, opacity: 0, duration: 0.6, ease: 'power2.out' })
      if (q('.hero-title')) gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 })
      if (q('.hero-sub')) gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })

      if (q('#showcase') && q('.feature-card')) {
        gsap.from('.feature-card', {
          scrollTrigger: { trigger: '#showcase', start: 'top 80%' },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
        })
      }

      if (q('.code-showcase')) {
        gsap.from('.code-showcase', {
          scrollTrigger: { trigger: '.code-showcase', start: 'top 85%' },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      }

      if (q('.cta-card')) {
        gsap.from('.cta-card', {
          scrollTrigger: { trigger: '.cta-card', start: 'top 85%' },
          scale: 0.98,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out',
        })
      }
    }, rootRef)

    return () => ctx.revert()
  }, [])
  return (
    <div ref={rootRef} className="min-h-screen relative">
      {/* Iridescence Background */}
      <div className="absolute inset-0 -z-10">
        <Iridescence
          color={[0.2, 0.4, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      
      <Sparkles />
      
      {/* Glass Navigation */}
      <div className="pt-6">
        <div className="mx-auto max-w-7xl px-4">
          <GlassSurface
            className="mx-auto"
            width="18%"
            height={60}
            borderRadius={50}
            backgroundOpacity={0.1}
            saturation={1}
            blur={11}
            brightness={50}
            opacity={0.93}
          >
                        <div className="flex items-center justify-center px-8 w-full">
              <h1 className="text-xl font-bold tracking-tight text-white">
                StruktX
              </h1>
            </div>
          </GlassSurface>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
          <div className="text-center">
            <div className="mb-10">
              <div className="flex justify-center mb-6">
                {/* <div className="hero-badge inline-flex items-center rounded-full bg-white/10 dark:bg-white/5 px-4 py-2 text-xs font-medium text-dark-600 dark:text-dark-300 ring-1 ring-white/10">
                  Introducing
                </div> */}
              </div>
              <div className="mt-6 flex justify-center">
                <img src="/logo-white.png" alt="StruktX" className="h-24 sm:h-32 lg:h-40 w-auto" />
              </div>
              <p className="hero-sub mt-6 text-lg leading-8 text-dark-300 max-w-2xl mx-auto">
                Built for engineers, made to ship.
              <br />
                A lean core with swappable pieces.


              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <GlassSurface width={180} height={50} borderRadius={25} backgroundOpacity={0.15} saturation={1.1} blur={8} brightness={70} opacity={0.9}>
                <a href="https://struktx.mintlify.app" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center text-white font-medium">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </GlassSurface>
              <GlassSurface width={180} height={50} borderRadius={25} backgroundOpacity={0.08} saturation={1} blur={8} brightness={60} opacity={0.8}>
                <a href="https://github.com/aymanhs-code/StruktX" target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center text-white/90 font-medium">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </GlassSurface>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Showcase */}
      <section id="showcase" className="pt-12 pb-28 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-20 mb-16">
            {/* <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Minimal. Typed. Extensible.
            </h2> */}
            {/* <p className="mt-4 text-lg text-dark-300">
              A lean core with swappable pieces to fit your app.
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <div className="p-0 feature-card">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                  <Wand2 className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Swappable Components</h3>
                <p className="text-dark-300">Swap LLMs, classifiers, handlers, memory—without changing your app code.</p>
              </div>
            </div>

            <div className="p-0 feature-card">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                  <Wand2 className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Type Safety</h3>
                <p className="text-dark-300">Strong typing and Pydantic-first models for maintainable code.</p>
              </div>
            </div>

            <div className="p-0 feature-card">
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                  <Wand2 className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Configurable</h3>
                <p className="text-dark-300">Factory config adapts to your domain. Compose only what you need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase */}
      <CodeShowcase className="py-24 code-showcase" />

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">Ready to Build?</h2>
                <p className="text-dark-300 mb-8">Start with the docs or explore the codebase.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://struktx.mintlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="text-base px-8 py-4 bg-white/10 hover:bg-white/20 border-white/10"
                    >
                      <>
                        <BookOpen className="mr-2 h-5 w-5" />
                        Read Documentation
                      </>
                    </Button>
                  </a>
                  <a
                    href="https://github.com/aymanHS-code/StruktX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="text-base px-8 py-4 bg-white/5 hover:bg-white/10 border-white/10"
                    >
                      <>
                        <Github className="mr-2 h-5 w-5" />
                        Star on GitHub
                      </>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 