"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Wrench, LayoutTemplate, PhoneCall } from "lucide-react"

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "We Audit Your Site",
    description:
      "I find what's costing you calls right now — slow pages, weak layout, missing trust signals.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "We Fix What's Broken",
    description: "Every issue that pushes visitors away gets cleaned up fast.",
  },
  {
    number: "03",
    icon: LayoutTemplate,
    title: "We Build for Leads",
    description: "Your site is rebuilt so visitors do one thing: contact you.",
  },
  {
    number: "04",
    icon: PhoneCall,
    title: "You Get More Work",
    description:
      "More calls, more quotes, more jobs — your site working for you 24/7.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Howitworks() {
  return (
    <section className="px-6 py-24 sm:py-32" id="how-it-works">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            The Process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            A simple 4-step process to turn your website into a lead machine — no tech jargon, no hassle.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {step.number}
                  </p>
                  <h3 className="mb-1 text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 text-lg font-medium text-foreground"
          >
            Want this for your business?
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Button size="lg" asChild>
              <a href="#contact">
                Get Your Free Website Audit <ArrowRight className="ml-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
