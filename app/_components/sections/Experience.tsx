"use client"

import { motion } from "motion/react"
import { ExperienceItem } from "@/app/_components/ui/ExperienceItem"
import type { ExperienceItemProps } from "@/app/_components/ui/ExperienceItem"

const EXPERIENCE: ExperienceItemProps[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 — Present",
    summary:
      "Designed and built full-stack web applications for clients across different industries, owning the entire process from architecture to deployment.",
    highlights: [
      "Delivered a production website for an Australian business, handling frontend, backend, and deployment end-to-end.",
      "Built RESTful APIs with Node.js and integrated MySQL databases with optimized queries.",
      "Implemented responsive UIs with React and Tailwind CSS, achieving strong performance scores.",
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "MySQL", "Tailwind"],
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2021 — 2022",
    summary:
      "Focused on building UI skills and shipping real projects — moving from static sites to dynamic, data-driven applications.",
    highlights: [
      "Built and deployed multiple React applications with modern state management patterns.",
      "Learned TypeScript and migrated existing JavaScript projects to typed codebases.",
      "Explored Next.js for server-side rendering and static site generation.",
    ],
    tech: ["React", "TypeScript", "Next.js", "CSS"],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          className="mb-2"
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
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight text-foreground"
          >
            Where I&apos;ve Worked
          </motion.h2>
        </motion.div>

        {/* Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.14 }}
        >
          {EXPERIENCE.map((item) => (
            <motion.div
              key={item.role + item.company}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ExperienceItem {...item} />
            </motion.div>
          ))}

          {/* closing border line */}
          <div className="border-t border-border" />
        </motion.div>
      </div>
    </section>
  )
}
