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
  title: "IMX — Digital Studio",
  description:
    "IMX is a premium digital studio combining technology, design and creative expertise.",
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
