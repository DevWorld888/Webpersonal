"use client"

import { useEffect, useRef } from "react"
import { gtagEvent } from "@/lib/analytics"

const THRESHOLDS = [25, 50, 75, 100]

export function ScrollDepthTracker() {
  const fired = useRef(new Set<number>())

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const pct = Math.round((scrolled / total) * 100)

      for (const threshold of THRESHOLDS) {
        if (pct >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold)
          gtagEvent("scroll_depth", { depth_percent: threshold })
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return null
}
