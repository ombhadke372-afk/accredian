import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description:
    "Transform your organization with Accredian's enterprise learning solutions. World-class programs in AI, Data Science, Product Management & more.",
  keywords: "enterprise learning, corporate training, upskilling, AI courses, data science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
