import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

import { SiteHeader } from "../components/nav/site-header";
import { SiteFooter } from "../components/nav/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cn-software.co.uk"),

  title: {
    default: "CN Software — SaaS UI & Next.js Development",
    template: "%s | CN Software",
  },

  description:
    "CN Software builds clean, production-ready SaaS UI using Next.js and React. Figma to code, dashboards, and scalable component systems for growing teams.",

  keywords: [
    "Next.js developer",
    "React developer",
    "SaaS UI development",
    "Frontend developer UK",
    "Figma to Next.js",
    "UI implementation",
    "Web application UI",
    "Dashboard UI",
  ],

  authors: [{ name: "Carl Nelson", url: "https://www.cn-software.co.uk" }],
  creator: "CN Software",

  openGraph: {
    title: "CN Software — SaaS UI & Next.js Development",
    description:
      "Clean, scalable SaaS UI built with Next.js and React. From Figma designs to production-ready web applications.",
    url: "https://www.cn-software.co.uk",
    siteName: "CN Software",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "CN Software — SaaS UI & Next.js Development",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CN Software — SaaS UI & Next.js Development",
    description:
      "Production-ready SaaS UI using Next.js and React. Clean components, fast delivery.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1 mx-auto w-full max-w-5xl px-4">
              {children}
            </main>

            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
