"use client";
import { ArrowDownToLine, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const STATS = [
  { value: "3+", label: "Years of real-world experience" },
  { value: "Web · SEO · Automation", label: "Full growth package" },
  { value: "Fair Pricing", label: "No hidden agency fees" },
];

const BENEFITS = [
  "High-converting websites built around your business goals",
  "SEO included — so customers find you on Google",
  "Automation to capture and follow up leads 24/7",
  "Direct communication, no middlemen or account managers",
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
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          About
        </motion.p>

        {/* Hook — pain point */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex max-w-2xl flex-col gap-6"
        >
          <p className="border-l-4 border-primary pl-4 text-xl leading-relaxed text-foreground">
            Most local businesses have a website — but not one that actually
            brings them clients.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;m a full-stack developer focused on one thing: helping local
            businesses and e-commerce stores get more customers online. I don&apos;t
            just build websites — I build complete systems that generate leads,
            rank on Google, and convert visitors into paying clients.
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

          <p className="text-lg leading-relaxed text-muted-foreground">
            I&apos;ve worked with businesses like{" "}
            <span className="font-medium text-foreground">Prisma Coatings</span>,
            where the goal was never just &ldquo;a nice website&rdquo; — it was more
            customers. Unlike big agencies, I offer{" "}
            <span className="font-medium text-foreground">
              fair, transparent pricing
            </span>{" "}
            with no hidden fees and personal attention from start to finish.
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
              Book a Free Consultation <ArrowRight className="ml-1" />
            </a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a href="docs/hvSoftwareDevIsraelAugustoCaceresS.pdf" download>
              Download CV <ArrowDownToLine className="ml-1" />
            </a>
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
