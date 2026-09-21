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
  title: "Beshoy Meshel Saad - Front-End Developer",
  description: "Front-End Developer with 2+ years building responsive, scalable web apps in React.js, Next.js, and TypeScript. Shipped production dashboards and project-management platforms, translating Figma designs into pixel-accurate, accessible (WCAG) UIs. Fast at picking up new stacks and tools, with strong ability to use AI effectively to accelerate development while reviewing, understanding, and owning the resulting code.",
  metadataBase: new URL("https://portfolio-beshoy-36.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beshoy Meshel Saad - Front-End Developer",
    description: "Front-End Developer with 2+ years building responsive, scalable web apps in React.js, Next.js, and TypeScript. Shipped production dashboards and project-management platforms, translating Figma designs into pixel-accurate, accessible (WCAG) UIs. Fast at picking up new stacks and tools, with strong ability to use AI effectively to accelerate development while reviewing, understanding, and owning the resulting code.",
    url: "https://portfolio-beshoy-36.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
