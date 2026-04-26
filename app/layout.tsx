import type { Metadata } from "next";
import "./globals.css";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description:
    "Transform your organization with Accredian's enterprise learning solutions. World-class programs in AI, Data Science, Product Management & more.",
  keywords:
    "enterprise learning, corporate training, upskilling, AI courses, data science",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}