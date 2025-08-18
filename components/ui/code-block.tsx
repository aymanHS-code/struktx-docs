"use client"

import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus as codeTheme } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"

type CodeBlockProps = {
  code: string
  language?: string
  filename?: string
  className?: string
  wrap?: boolean
}

export function CodeBlock({ code, language = "bash", filename, className, wrap = true }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignore
    }
  }

  return (
    <div className={cn("relative rounded-xl overflow-hidden border border-dark-200 dark:border-dark-700 shadow-sm", className)}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 text-xs bg-dark-800 text-dark-200">
          <span className="font-mono">{filename}</span>
          <Button size="sm" variant="ghost" onClick={onCopy} className="h-8 px-2 text-dark-200 hover:text-white">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
      {!filename && (
        <div className="absolute right-2 top-2 z-10">
          <Button size="sm" variant="ghost" onClick={onCopy} className="h-8 px-2 text-dark-200 hover:text-white bg-dark-800/60">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={codeTheme as any}
        customStyle={{ margin: 0, background: "#0b1220", fontSize: "0.9rem" }}
        wrapLongLines={wrap}
        wrapLines={wrap}
        showLineNumbers={false}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

