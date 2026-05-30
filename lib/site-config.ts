const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}

export const siteConfig = {
  url: getBaseUrl(),
  name: "Augusto Cáceres",
  title: "Augusto Cáceres | Web Developer for Australian Tradies & Small Businesses",
  description:
    "Web developer helping Australian tradies and small businesses get more clients. I build fast, conversion-focused websites that turn visitors into paying customers — no tech jargon, no agency fees.",
  phone: "+61412053218",
  email: "augustocsuarez1985@gmail.com",
  social: {
    github: "https://github.com/DevWorld888",
    linkedin: "https://www.linkedin.com/in/augustocs/",
  },
  keywords: [
    "web developer Australia",
    "tradie website design",
    "small business website Australia",
    "website for tradies",
    "local SEO Australia",
    "lead generation website",
    "conversion focused web design",
    "web developer for tradies",
    "affordable web developer Australia",
    "website that gets clients",
  ],
}
