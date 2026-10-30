import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  onClick?: () => void
}

// Wordmark: "iAugusto" in navy, "Dev" in brand blue, with a compact "iA" monogram
export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="iAugustoDev home"
      className={cn("group inline-flex items-center gap-2.5 rounded-md", className)}
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-sky text-[13px] font-bold tracking-tight text-white shadow-sm shadow-primary/30 transition-transform duration-300 group-hover:-rotate-6"
      >
        iA
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-navy">
        iAugusto<span className="text-primary">Dev</span>
      </span>
    </Link>
  )
}
