import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navigation } from "~/components/shared";

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
      <body className={`${GeistSans.className} bg-background h-full w-full`}>
        <Navigation />
        <main className="flex min-h-screen flex-col items-center justify-center scroll-smooth px-8 py-36 antialiased">
          {children}
        </main>
      </body>
    </html>
  );
}
