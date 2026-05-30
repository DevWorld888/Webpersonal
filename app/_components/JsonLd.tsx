import { siteConfig } from "@/lib/site-config"

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Augusto Cáceres — Web Developer",
        description: siteConfig.description,
        inLanguage: "en-AU",
        potentialAction: {
          "@type": "SearchAction",
          target: { "@type": "EntryPoint", urlTemplate: `${siteConfig.url}/?q={search_term_string}` },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#business`,
        name: "Augusto Cáceres Web Development",
        alternateName: "Augusto Cáceres",
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        description:
          "Web developer helping Australian tradies and small businesses get more clients through conversion-focused websites, local SEO, and smart automation.",
        image: `${siteConfig.url}/opengraph-image`,
        priceRange: "$$",
        currenciesAccepted: "AUD",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        areaServed: [
          { "@type": "Country", name: "Australia" },
          { "@type": "State", name: "New South Wales" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Design & Development",
                description: "Custom websites built to convert visitors into paying customers.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Local SEO",
                description: "SEO strategy to rank on Google and get found by local customers.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Free Website Audit",
                description: "Free review of your current website to identify what is costing you clients.",
              },
            },
          ],
        },
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        founder: {
          "@type": "Person",
          name: "Augusto Cáceres",
          jobTitle: "Web Developer",
          url: siteConfig.url,
          sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
