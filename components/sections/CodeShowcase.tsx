"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

const installCode = `# Install with core dependencies only
uv pip install struktx

# Install with LLM support (LangChain)
uv pip install struktx[llm]

# Install with all optional dependencies
uv pip install struktx[all]`;

const quickStart = `from strukt import create, StruktConfig, HandlersConfig
from strukt.examples.simple_classifier import SimpleKeywordClassifier
from strukt.examples.time_handler import TimeHandler

app = create(StruktConfig(
  classifier=dict(factory=lambda **_: SimpleKeywordClassifier()),
  handlers=HandlersConfig(
    registry={"time_service": lambda llm, **_: TimeHandler(llm)},
    default_route="general",
  ),
))

result = app.invoke("what is the time in Beirut")`;

export function CodeShowcase({ className }: { className?: string }) {
  return (
    <section className={cn("relative", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel gradient-border p-8 shine">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">Build in minutes</h3>
            <p className="text-dark-600 dark:text-white/70 mt-2">Install and ship with a few lines of code</p>
          </div>
          <div className="space-y-6">
            <CodeBlock language="bash" code={installCode} />
            <CodeBlock language="python" code={quickStart} />
          </div>
        </div>
      </div>
    </section>
  );
}