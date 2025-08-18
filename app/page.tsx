"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Zap, Shield, Layers, Brain, Github, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Background } from '@/components/animated/Background'
import { CodeBlock } from '@/components/ui/code-block'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center rounded-full bg-primary-100 dark:bg-primary-900/30 px-4 py-2 text-sm font-medium text-primary-700 dark:text-primary-300 mb-6">
                <Code className="mr-2 h-4 w-4" />
                Configurable, Typed AI Framework
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-6xl lg:text-7xl">
                Build AI Apps with
                <span className="gradient-text"> Confidence</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
                StruktX is a configurable, typed AI framework with swappable LLM, classifier, handlers, and optional memory. 
                Built for developers who need flexibility and type safety.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
            >
              <Button size="lg" className="text-base px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-4">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl">
              Why Choose StruktX?
            </h2>
            <p className="mt-4 text-lg text-dark-600 dark:text-dark-300">
              Everything you need to build production-ready AI applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                <Layers className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Swappable Components
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                LLM clients, classifiers, handlers, and memory engines that you can easily swap and customize.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                <Shield className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Type Safety
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Fully typed system alongside Pydantic-first models for robust, maintainable code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                <Zap className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Configurable
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Factory-based configuration system that adapts to your specific needs and use cases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                <Code className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Extensible
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Easy to add custom components and extend functionality with well-defined interfaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                <Brain className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Memory Support
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Optional conversation memory and context management for sophisticated AI interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 mb-4">
                <ArrowRight className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                Middleware
              </h3>
              <p className="text-dark-600 dark:text-dark-300">
                Pre/post processing hooks for logging, validation, and custom business logic.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24 bg-gradient-to-br from-dark-50 to-primary-50 dark:from-dark-800 dark:to-primary-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-dark-900 dark:text-white sm:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="mt-4 text-lg text-dark-600 dark:text-dark-300">
              Install and start building with StruktX today
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
                Quick Install
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
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
                Quick Start
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join developers who are already building powerful AI applications with StruktX
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-base px-8 py-4">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Documentation
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 