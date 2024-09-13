import { Analytics } from "@vercel/analytics/react";
import { Navigation } from "~/components/shared";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Quik",
  description: "A simple note app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
