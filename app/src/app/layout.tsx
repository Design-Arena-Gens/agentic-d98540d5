import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Neon Vanguard Portrait",
  description:
    "Editorial portrait concept of a bold young Korean woman standing in a neon metro tunnel.",
  openGraph: {
    title: "Neon Vanguard Portrait",
    description:
      "A confident fashion editorial set in a neon metro tunnel featuring a teal satin bomber and electric palette.",
    url: "https://agentic-d98540d5.vercel.app",
    siteName: "Neon Vanguard Portrait",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neon Vanguard Portrait",
    description:
      "Stylized portrait of a bold Korean fashion icon illuminated by neon metro reflections.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
