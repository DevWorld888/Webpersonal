import { CalendarCheck, Check, Mail, MapPin, Search } from "lucide-react"

// Purely illustrative composition: a client website, how customers find it, and what it automates.
// It deliberately shows no numbers, ratings or results.
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[560px] select-none lg:mr-0">
      {/* Browser window */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_80px_-30px_rgb(15_23_42/0.35)]">
        <div className="flex items-center gap-3 border-b border-border bg-muted px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2e8f0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2e8f0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2e8f0]" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-md border border-border bg-white px-3 py-1 text-[11px] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            yourbusiness.com.au
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-sky" />
              <span className="h-2.5 w-20 rounded-full bg-navy/80" />
            </div>
            <div className="hidden gap-3 sm:flex">
              <span className="h-2 w-10 rounded-full bg-border" />
              <span className="h-2 w-10 rounded-full bg-border" />
              <span className="h-2 w-10 rounded-full bg-border" />
            </div>
          </div>

          <div className="space-y-2.5">
            <span className="block h-4 w-4/5 rounded-full bg-navy" />
            <span className="block h-4 w-3/5 rounded-full bg-navy" />
          </div>
          <div className="mt-5 space-y-2">
            <span className="block h-2 w-full rounded-full bg-border" />
            <span className="block h-2 w-5/6 rounded-full bg-border" />
          </div>
          <div className="mt-6 flex gap-2.5">
            <span className="rounded-lg bg-primary px-4 py-2 text-[11px] font-semibold text-white">
              Get a quote
            </span>
            <span className="rounded-lg border border-border px-4 py-2 text-[11px] font-semibold text-navy">
              Book online
            </span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-xl border border-border bg-surface/60 p-3">
                <span className="mb-3 block h-6 w-6 rounded-md bg-primary/15" />
                <span className="block h-2 w-4/5 rounded-full bg-navy/70" />
                <span className="mt-1.5 block h-1.5 w-full rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating: found on Google */}
      <FloatingCard className="-left-4 top-24 sm:-left-12">
        <IconBadge><Search className="h-4 w-4" /></IconBadge>
        <div>
          <p className="text-xs font-semibold text-navy">Found on Google</p>
          <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <MapPin className="h-3 w-3" /> Local search &amp; Maps
          </p>
        </div>
      </FloatingCard>

      {/* Floating: online booking */}
      <FloatingCard className="-right-3 top-1/2 sm:-right-10">
        <IconBadge><CalendarCheck className="h-4 w-4" /></IconBadge>
        <div>
          <p className="text-xs font-semibold text-navy">Online booking</p>
          <p className="text-[11px] text-muted-foreground">Customers book 24/7</p>
        </div>
      </FloatingCard>

      {/* Floating: automation */}
      <FloatingCard className="-bottom-6 left-6 sm:left-10">
        <IconBadge><Mail className="h-4 w-4" /></IconBadge>
        <div>
          <p className="text-xs font-semibold text-navy">New enquiry</p>
          <p className="text-[11px] text-muted-foreground">Auto-reply sent</p>
        </div>
        <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check className="h-3 w-3" />
        </span>
      </FloatingCard>
    </div>
  )
}

function FloatingCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      className={`absolute hidden items-center gap-3 rounded-xl border border-border bg-white/95 px-4 py-3 shadow-[0_16px_40px_-16px_rgb(15_23_42/0.3)] backdrop-blur sm:flex ${className}`}
    >
      {children}
    </div>
  )
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary">
      {children}
    </span>
  )
}
