"use client"

import { motion } from "motion/react"
import { CaseStudyCard } from "@/app/_components/ui/CaseStudyCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CASE_STUDIES = [
  {
    title: "Prisma Coatings",
    location: "Sydney, NSW",
    goal: "The business relied on word of mouth and had no way to get new customers online. Their old website didn't show up in local searches and wasn't built to turn visitors into calls.",
    whatIDid: "Rebuilt the website from scratch — clean layout, fast loading, clear service descriptions, and a strong call-to-action on every page. Designed specifically for mobile, where most customers search.",
    focus: "More quote requests. More calls. Showing up when Sydney homeowners search for painters.",
    result: "Ongoing optimisation — building a consistent lead system that works 24/7.",
    image: "/projects/prismacoatingsProject.jpeg",
    liveUrl: "https://www.prismacoatings.com.au/",
  },
  {
    title: "Kword Agency",
    location: "Digital Agency",
    goal: "Needed a professional online presence that could attract clients and communicate their services clearly — without looking like every other agency.",
    whatIDid: "Designed and built a clean, fast website focused on making it easy for potential clients to understand the offer and get in touch.",
    focus: "Converting website visitors into enquiries and booked consultations.",
    result: "Ongoing optimisation — refining the pages to increase contact form submissions.",
    image: "/projects/kwordagency.webp",
    liveUrl: "https://kwordagency-seven.vercel.app/",
  },
]

const MINI_CASE_STUDY = {
  before: [
    "No consistent way to get new customers online",
    "Website didn't appear in local Sydney searches",
    "Visitors landed and left — no calls, no quote requests",
    "Fully dependent on word of mouth and referrals",
  ],
  changes: [
    "Rebuilt the site to load fast and work perfectly on mobile",
    "Clear, plain-language service pages with a direct call-to-action",
    "Homepage designed to answer the key question: 'Why should I call these guys?'",
    "Set up contact flow to make getting a quote as easy as possible",
  ],
  focus: [
    "More quote requests directly from the website",
    "Ranking for local searches like 'painters Sydney'",
    "Turning website visitors into paying customers",
  ],
  currentStatus:
    "Still early — we're actively optimising pages and tracking performance. The system is being built for long-term, consistent results.",
  goal: "5+ qualified quote requests per month from organic search alone.",
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-20">

        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Results
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground"
          >
            Real Websites. Real Results.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-xl text-base text-muted-foreground"
          >
            I build websites for tradies and small businesses that do one thing: bring in more customers. Here&apos;s what I&apos;ve been working on.
          </motion.p>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          {CASE_STUDIES.map((cs) => (
            <motion.div
              key={cs.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CaseStudyCard {...cs} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mini Case Study: Prisma Coatings */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-border bg-card p-8 shadow-sm"
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Case Study
          </p>
          <h3 className="mb-8 text-2xl font-bold text-foreground">
            Prisma Coatings — Sydney
          </h3>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Before */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Before
              </p>
              <ul className="space-y-2">
                {MINI_CASE_STUDY.before.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What I Changed */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                What I Changed
              </p>
              <ul className="space-y-2">
                {MINI_CASE_STUDY.changes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                What We&apos;re Focusing On
              </p>
              <ul className="space-y-2">
                {MINI_CASE_STUDY.focus.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Status + Goal */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Current Status
                </p>
                <p className="text-sm text-muted-foreground">
                  {MINI_CASE_STUDY.currentStatus}
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  The Goal
                </p>
                <p className="text-sm font-medium text-foreground">
                  {MINI_CASE_STUDY.goal}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-2 text-xl font-semibold text-foreground">
            Want results like this for your business?
          </p>
          <p className="mb-6 text-sm text-muted-foreground">
            I&apos;ll take a look at your current website and tell you exactly what&apos;s costing you customers — for free.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              Get Your Free Website Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
