import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imxcode.in"),

  title: {
    default:
      "IMX Digital Studio | Web Development, UI/UX Design & Digital Experiences",
    template: "%s | IMX Digital Studio",
  },

  description:
    "IMX Digital Studio is a digital agency building premium websites, digital products, UI/UX experiences and creative solutions for businesses, startups, education and e-commerce brands.",

  applicationName: "IMX Digital Studio",

  keywords: [
    "IMX Digital Studio",
    "digital agency India",
    "web development agency India",
    "web design agency India",
    "UI UX design agency",
    "Next.js development agency",
    "React development agency",
    "website development company",
    "premium website design",
    "digital product development",
    "ecommerce website development",
    "business website development",
    "creative digital agency",
    "Delhi NCR digital agency",
    "India digital studio",
  ],

  authors: [
    {
      name: "IMX Digital Studio",
      url: "https://imxcode.in",
    },
  ],

  creator: "IMX Digital Studio",
  publisher: "IMX Digital Studio",

  category: "technology",

  alternates: {
    canonical: "https://imxcode.in",
  },

  verification: {
    google: "WlESotBSkGBuV9SvGMkZGrewiFjYA26y_HTQxnov5yM",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://imxcode.in",
    siteName: "IMX Digital Studio",
    title:
      "IMX Digital Studio | Web Development, UI/UX Design & Digital Experiences",
    description:
      "Premium websites, digital products, UI/UX experiences and creative digital solutions built for businesses, startups, education and e-commerce brands.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMX Digital Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    
    title:
      "IMX Digital Studio | Web Development, UI/UX Design & Digital Experiences",
    description:
      "Premium websites, digital products, UI/UX experiences and creative digital solutions by IMX Digital Studio.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.png", 
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <SiteHeader />

        {children}

        <FloatingContactButtons />

        <SiteFooter />
      </body>
    </html>
  );
}