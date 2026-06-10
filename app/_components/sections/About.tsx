"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const STATS = [
  { value: "3+", label: "Years of real-world experience" },
  { value: "Web · SEO · Automation", label: "Full growth package" },
  { value: "Fair Pricing", label: "No hidden agency fees" },
];

const BENEFITS = [
  "Websites built to generate real leads",
  "SEO so customers actually find you on Google",
  "Automation to capture and follow up leads 24/7",
  "Direct communication — no agencies, no middlemen",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

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
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Web Developer Specialising in Australian Tradies &amp; Small Businesses
        </motion.h2>

        {/* Hook — pain point */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex max-w-2xl flex-col gap-6"
        >
          <h3 className="border-l-4 border-primary pl-4 text-xl leading-relaxed text-foreground">
            Most business websites don&apos;t bring clients — they just sit there.
            Every day, you&apos;re losing potential jobs because your website isn&apos;t
            built to convert.
          </h3>

          <p className="text-lg font-semibold text-foreground">I fix that.</p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            I help tradies and small businesses turn their website into a
            consistent source of calls, leads and paying customers — using
            conversion-focused design, SEO and smart automation.
          </p>

          <p className="text-base text-muted-foreground">
            This isn&apos;t about having a &ldquo;nice website&rdquo;.{" "}
            <span className="font-medium text-foreground">
              It&apos;s about getting more jobs.
            </span>
          </p>

          {/* Benefits */}
          <ul className="flex flex-col gap-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-base text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Social proof */}
          <p className="text-base leading-relaxed text-muted-foreground">
            Currently working with real businesses like{" "}
            <span className="font-medium text-foreground">Prisma Coatings</span>{" "}
            — improving their online presence and turning their website into a
            client acquisition system.
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg" asChild>
            <a href="#contact">
              Get a Free Website Review <ArrowRight className="ml-1" />
            </a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="#projects">See My Work</a>
          </Button>
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
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
