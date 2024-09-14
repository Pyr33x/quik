import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "~/components/shared";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://quik.pyr33x.ir"),
  title: "Quik",
  description: "A simple note app",
  authors: [
    {
      name: "Mehdi Parandak",
      url: "https://quik.pyr33x.ir",
    },
  ],
  creator: "Mehdi Parandak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quik.pyr33x.ir",
    title: "Quik",
    description: "A simple note app",
    siteName: "Quik",
    images: [
      {
        url: "https://quik.pyr33x.ir/og.png",
        width: 1200,
        height: 630,
        alt: "Quik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quik",
    description: "A simple note app",
    images: ["https://quik.pyr33x.ir/og.png"],
    creator: "@pyr33x",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
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
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} h-full w-full bg-background`}>
        <Navigation />
        <main className="flex min-h-screen flex-col items-center justify-center scroll-smooth px-8 py-36 antialiased">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
