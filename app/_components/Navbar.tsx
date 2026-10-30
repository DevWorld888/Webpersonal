"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { gtagEvent } from "@/lib/analytics"
import { NAV_LINKS, QUOTE_HREF } from "@/lib/site-config"
import { Container } from "./ui/Section"
import { Logo } from "./ui/Logo"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the menu when navigating to another page
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setIsOpen(false)
  }

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const close = () => setIsOpen(false)
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || isOpen
          ? "border-b border-border bg-white/90 shadow-[0_1px_12px_rgb(15_23_42/0.04)] backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow-soft"
      >
        Skip to content
      </a>

      <Container>
        <nav aria-label="Main navigation" className="flex h-16 items-center justify-between gap-6 sm:h-[72px]">
          <Logo onClick={close} />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors",
                    isActive(href) ? "text-primary" : "text-body hover:text-navy"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button asChild size="lg" className="hidden sm:inline-flex">
              <Link href={QUOTE_HREF} onClick={() => gtagEvent("quote_request", { location: "navbar" })}>
                Get a Free Quote
              </Link>
            </Button>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-secondary lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-white lg:hidden"
      >
        <Container className="flex flex-col gap-6 py-6">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="border-b border-border last:border-0">
                <Link
                  href={href}
                  onClick={close}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between py-4 text-lg font-medium",
                    isActive(href) ? "text-primary" : "text-navy"
                  )}
                >
                  {label}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="xl" className="w-full">
            <Link
              href={QUOTE_HREF}
              onClick={() => {
                gtagEvent("quote_request", { location: "mobile_menu" })
                close()
              }}
            >
              Get a Free Quote
            </Link>
          </Button>
        </Container>
      </div>
    </header>
  )
}
