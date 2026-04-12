"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowDownToLine, ArrowRight } from "lucide-react"

const TECH = ["React", "Next.js", "Node.js", "TypeScript", "MySQL"]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.div
        className="flex max-w-2xl flex-col items-center gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Hi, I&apos;m Augusto —
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        >
          Full-Stack Developer.{" "}
          <span className="text-muted-foreground">
            From idea to deployment.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-2 max-w-lg text-lg leading-relaxed text-muted-foreground"
        >
          I build clean UIs, solid APIs, and reliable databases.
          Open to full-time roles &amp; freelance projects.
        </motion.p>

        {/* Tech badges */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-2"
        >
          {TECH.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button size="lg" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-1" />
            </a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="docs/hvSoftwareDevIsraelAugustoCaceresS.pdf" download>
              Download CV <ArrowDownToLine className="ml-1" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
