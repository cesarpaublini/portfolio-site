import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Cesar Paublini | Creative Technologist & Strategist",
    template: "%s | Cesar Paublini"
  },
  description: "Creative Technologist & Strategist specializing in web development, design, and digital strategy. View my portfolio of projects including web apps, creative campaigns, and digital solutions.",
  keywords: ["creative technologist", "web developer", "designer", "digital strategist", "portfolio", "creative director", "UI/UX", "Next.js", "React"],
  authors: [{ name: "Cesar Paublini" }],
  creator: "Cesar Paublini",
  publisher: "Cesar Paublini",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cesarpaublini.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cesarpaublini.com',
    title: 'Cesar Paublini | Creative Technologist & Strategist',
    description: 'Creative Technologist & Strategist specializing in web development, design, and digital strategy.',
    siteName: 'Cesar Paublini Portfolio',
    images: [
      {
        url: '/images/cesar-avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Cesar Paublini - Creative Technologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cesar Paublini | Creative Technologist & Strategist',
    description: 'Creative Technologist & Strategist specializing in web development, design, and digital strategy.',
    images: ['/images/cesar-avatar.jpg'],
    creator: '@cesarpaublini',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Cesar Paublini",
    "jobTitle": "Creative Technologist & Strategist",
    "description": "Creative Technologist & Strategist specializing in web development, design, and digital strategy.",
    "url": "https://cesarpaublini.com",
    "sameAs": [
      "https://linkedin.com/in/cesarpaublini",
      "https://github.com/cesarpaublini",
      "https://twitter.com/cesarpaublini"
    ],
    "image": "https://cesarpaublini.com/images/cesar-avatar.jpg",
    "knowsAbout": [
      "Web Development",
      "UI/UX Design", 
      "Digital Strategy",
      "Creative Direction",
      "Next.js",
      "React",
      "TypeScript"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="pt-[64px] bg-black dark:bg-zinc-900">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
