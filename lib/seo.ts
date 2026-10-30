import type { Metadata } from "next"
import { siteConfig } from "./site-config"

interface PageMetadataInput {
  title: string
  description: string
  path: string
  /** Use the title as-is, without the "| iAugustoDev" template */
  absoluteTitle?: boolean
}

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "iAugustoDev — Websites & digital solutions for Australian small businesses",
}

// Page-level openGraph replaces the layout's object (and the file-based OG image),
// so the shared fields are repeated here
export function pageMetadata({ title, description, path, absoluteTitle }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.brand}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: siteConfig.brand,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
