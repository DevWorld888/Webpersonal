"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled || isOpen
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={close}
          className="flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
        >
          <Image
            src="/favicon.ico"
            alt="Augusto Cáceres logo"
            width={24}
            height={24}
            className="h-6 w-6 shrink-0"
            priority
          />
          <span>Augusto Cáceres</span>
          <p className="ml-2 rounded bg-muted px-1.5 py-0.5 text-xs font-medium text-foreground">
            Websites that bring you clients
          </p>
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <ul className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — visible on mobile only */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              isOpen ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel — slides open below the nav bar */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-8 pt-2">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li
              key={label}
              style={{ transitionDelay: isOpen ? `${i * 50}ms` : "0ms" }}
              className={`border-b border-border/50 transition-all duration-300 last:border-0 ${
                isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              <a
                href={href}
                onClick={close}
                className="block py-4 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
