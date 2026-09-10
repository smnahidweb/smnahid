import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#05070a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smnahid.dev"),
  icons: {
    icon: "/logo_nahid.png",
    apple: "/logo_nahid.png",
  },
  title: {
    default: "S.M. Nahid Hasan — Software Engineer & Product Builder",
    template: "%s | S.M. Nahid Hasan",
  },
  description:
    "Frontend-focused Software Engineer with 4+ years of experience crafting high-performance web applications using React, Next.js, TypeScript, and full-stack systems. Creator of MULYAYON AI platform.",
  keywords: [
    "S.M. Nahid Hasan",
    "Nahid Hasan",
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Engineer",
    "TypeScript",
    "MULYAYON",
    "Bangladesh Software Engineer",
    "Web Application Architecture",
  ],
  authors: [{ name: "S.M. Nahid Hasan", url: "https://smnahid.dev" }],
  creator: "S.M. Nahid Hasan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smnahid.dev",
    title: "S.M. Nahid Hasan — Software Engineer & Product Builder",
    description:
      "Engineering thoughtful, high-performance software for the modern web with React, Next.js, TypeScript, and modern full-stack architectures.",
    siteName: "S.M. Nahid Hasan Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "S.M. Nahid Hasan — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.M. Nahid Hasan — Software Engineer & Product Builder",
    description:
      "Frontend-focused Software Engineer crafting resilient production web applications with React, Next.js, and TypeScript.",
    creator: "@smnahid",
    images: ["/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://smnahid.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "S.M. Nahid Hasan",
    alternateName: "Nahid Hasan",
    jobTitle: "Software Engineer",
    description:
      "Frontend-focused Software Engineer with expertise in React, Next.js, TypeScript, and Full-Stack Web Development.",
    url: "https://smnahid.dev",
    sameAs: [
      "https://github.com/smnahid",
      "https://linkedin.com/in/smnahid",
      "https://smnahid.web.app",
    ],
    knowsAbout: [
      "Software Engineering",
      "Frontend Architecture",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Design Systems",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "International University of Business Agriculture and Technology (IUBAT)",
    },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-[#19B9EE] selection:text-[#05070A] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
