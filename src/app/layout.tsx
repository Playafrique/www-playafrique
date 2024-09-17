import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organism/Navbar";
import Footer from "@/components/organism/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Essential Oils",
  description: "Essential Oils",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={quicksand.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
