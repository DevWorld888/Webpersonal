"use client"

import { motion } from "motion/react"

const STATS = [
  { value: "3+", label: "Years of experience" },
  { value: "3+", label: "Projects shipped" },
  { value: "Open", label: "Remote · Freelance · Startups" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-32">
      <motion.div
        className="flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          About
        </motion.p>

        {/* Text block */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex max-w-2xl flex-col gap-5"
        >
          <p className="text-xl leading-relaxed text-foreground">
            I&apos;m a Full-Stack Developer with 3 years of experience building
            web applications from scratch — handling everything from the
            database to the final UI.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;ve shipped real-world projects for real clients, including a
            production website for an Australian business. I write code
            that&apos;s clean, maintainable, and built to last.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m looking for remote opportunities, freelance projects, and
            eventually building my own products.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 border border-border sm:grid-cols-3"
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col gap-2 bg-background p-8 not-last:border-b not-last:border-border sm:not-last:border-b-0 sm:not-last:border-r"
            >
              <span className="text-4xl font-bold tracking-tight text-foreground">
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
