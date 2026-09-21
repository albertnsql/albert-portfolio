import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import { TransitionProvider } from "@/components/providers/TransitionProvider";

export const metadata: Metadata = {
  title: "Albert Nadar — Senior Analytics Engineer & AI Innovator",
  description:
    "Senior Analytics Engineer building semantic layers, analytics platforms, and AI-powered data experiences with Snowflake, dbt, Looker, SQL, and Python.",
  keywords: [
    "Analytics Engineer",
    "Semantic Layer",
    "dbt",
    "Snowflake",
    "Looker",
    "LookML",
    "Data Engineering",
    "AI Analytics",
    "Albert Nadar",
  ],
  authors: [{ name: "Albert Nadar" }],
  openGraph: {
    title: "Albert Nadar — Senior Analytics Engineer & AI Innovator",
    description:
      "Senior Analytics Engineer building semantic layers, analytics platforms, and AI-powered data experiences with Snowflake, dbt, Looker, SQL, and Python.",
    url: "https://albertnadar.dev",
    siteName: "Albert Nadar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Albert Nadar — Senior Analytics Engineer & AI Innovator",
    description:
      "Senior Analytics Engineer building semantic layers, analytics platforms, and AI-powered data experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Skip to main content
        </a>
        <TransitionProvider>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
