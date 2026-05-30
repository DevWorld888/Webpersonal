import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import WhatsAppButton from "./_components/ui/WhatsAppButton";
import { ScrollDepthTracker } from "./_components/ScrollDepthTracker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Augusto Shamadi | Software Developer",
    template: "%s | Augusto Shamadi",
  },
  description:
    "Software Developer focused on building clean, performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6KJWZ7CVQ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6KJWZ7CVQ2');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phone="0412053218" message="Hi! I saw your portfolio and I'd like to get in touch." />
        <ScrollDepthTracker />
      </body>
    </html>
  );
}
