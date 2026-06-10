"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { gtagEvent } from "@/lib/analytics"

const TRUST_POINTS = [
  "Based in Australia",
  "Fast turnaround",
  "No tech jargon",
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center" id="home">
      <motion.div
        className="flex max-w-2xl flex-col items-center gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Websites for Australian Tradies &amp; Small Businesses
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        >
          Web Developer for Australian Tradies &amp; Small Businesses
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          More Calls.{" "}
          <span className="text-muted-foreground">More Jobs.</span>{" "}
          More Revenue.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-2 max-w-lg text-lg leading-relaxed text-muted-foreground"
        >
          I build websites for tradies and small businesses that turn visitors into paying customers — no tech jargon, no wasted money.
        </motion.p>

        {/* Location */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="-mt-1 text-sm text-muted-foreground"
        >
          📍 Based in Hobart, Tasmania — serving tradies across Australia
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Button size="lg" asChild>
            <a href="#contact" onClick={() => gtagEvent("quote_request", { location: "hero_cta" })}>
              Get a Free Website Review <ArrowRight className="ml-1" />
            </a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="#projects">
              See How It Works
            </a>
          </Button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-x-5 gap-y-2"
        >
          {TRUST_POINTS.map((point) => (
            <span
              key={point}
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <CheckCircle className="h-4 w-4 shrink-0 text-foreground" />
              {point}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
