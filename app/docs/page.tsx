"use client"

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Code, Zap, Shield, Layers, Brain, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Footer } from '@/components/footer'
import { CodeBlock } from '@/components/ui/code-block'

export default function DocsPage() {
  const docSections = [
    {
      title: "Introduction",
      description: "Get started with StruktX and understand its core concepts",
      icon: BookOpen,
      href: "/docs/introduction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Architecture",
      description: "Understanding the modular architecture and core components",
      icon: Layers,
      href: "/docs/architecture",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Configuration",
      description: "Learn how to configure and customize StruktX for your needs",
      icon: Zap,
      href: "/docs/configuration",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Examples",
      description: "Practical examples and usage patterns for common scenarios",
      icon: Code,
      href: "/docs/examples",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Middleware",
      description: "Understanding the middleware system and hooks",
      icon: ArrowRight,
      href: "/docs/middleware",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "API Reference",
      description: "Complete API documentation and reference",
      icon: Shield,
      href: "/docs/api-reference",
      color: "from-teal-500 to-cyan-500"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span className="text-dark-600 dark:text-dark-300">/</span>
            <span className="text-dark-900 dark:text-white font-medium">Documentation</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Documentation
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl">
              Everything you need to know about StruktX. From getting started to advanced concepts and API reference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={section.href} className="block">
                  <div className="card p-6 h-full hover:shadow-lg transition-all duration-200 group-hover:scale-[1.02]">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} mb-4`}>
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                      Read more
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 bg-gradient-to-br from-dark-50 to-primary-50 dark:from-dark-800 dark:to-primary-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Quick Start Guide
            </h2>
            <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Get up and running with StruktX in just a few minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
                Installation & Setup
              </h3>
              <div className="space-y-4">
                <CodeBlock
                  language="bash"
                  code={`# Install with core dependencies only
uv pip install struktx

# Install with LLM support (LangChain)
uv pip install struktx[llm]

# Install with all optional dependencies
uv pip install struktx[all]`}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-6">
                Your First App
              </h3>
              <CodeBlock
                language="python"
                code={`from strukt import create, StruktConfig, HandlersConfig
from strukt.examples.simple_classifier import SimpleKeywordClassifier
from strukt.examples.time_handler import TimeHandler

app = create(StruktConfig(
  classifier=dict(factory=lambda **_: SimpleKeywordClassifier()),
  handlers=HandlersConfig(
    registry={"time_service": lambda llm, **_: TimeHandler(llm)},
    default_route="general",
  ),
))

result = app.invoke("what is the time in Beirut")`}
              />
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/docs/introduction">
              <Button size="lg" className="text-base px-8 py-4">
                Read Full Introduction
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 