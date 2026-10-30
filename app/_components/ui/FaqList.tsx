import { Plus } from "lucide-react"
import type { Faq } from "@/lib/content/faqs"

// Native <details> keeps the accordion accessible and JavaScript-free
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
      {faqs.map(({ question, answer }) => (
        <details key={question} className="group px-6 sm:px-8 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-navy transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-lg">
            {question}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 group-open:rotate-45">
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className="-mt-1 pb-6 pr-10 text-[15px] leading-relaxed text-body">{answer}</p>
        </details>
      ))}
    </div>
  )
}

export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  )
}
