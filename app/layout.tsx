import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Rajpurohit | Software Engineer & AI/ML Developer",
  description: "Portfolio of Yash Rajpurohit, a software engineer and MCA graduate specializing in modern web development, AI/ML, data, and Generative AI.",
  openGraph: {
    title: "Yash Rajpurohit | Software Engineer & AI/ML Developer",
    description: "Portfolio of Yash Rajpurohit, a software engineer and MCA graduate specializing in modern web development, AI/ML, data, and Generative AI.",
    url: "https://yashrajpurohit.vercel.app",
    siteName: "Yash Rajpurohit Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
