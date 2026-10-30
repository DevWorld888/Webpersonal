import { siteConfig } from "@/lib/site-config"
import { SERVICES } from "@/lib/content/services"

// Only verified details: no street address, price range or credentials are published
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.brand,
        description: siteConfig.description,
        inLanguage: "en-AU",
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.brand,
        alternateName: "iAugustoDev Web Design",
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        image: `${siteConfig.url}/opengraph-image`,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        description: siteConfig.description,
        currenciesAccepted: "AUD",
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.regionCode,
          addressCountry: "AU",
        },
        areaServed: [
          { "@type": "City", name: "Hobart" },
          { "@type": "State", name: "Tasmania" },
          { "@type": "Country", name: "Australia" },
        ],
        knowsAbout: [
          "Web design",
          "Web development",
          "Local SEO",
          "Google Business Profile optimisation",
          "Online booking systems",
          "Business automation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital services for small businesses",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: `${siteConfig.url}/services#${service.slug}`,
            },
          })),
        },
        founder: { "@id": `${siteConfig.url}/#founder` },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#founder`,
        name: siteConfig.name,
        jobTitle: "Founder & Web Developer",
        worksFor: { "@id": `${siteConfig.url}/#business` },
        url: `${siteConfig.url}/about`,
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  )
}
