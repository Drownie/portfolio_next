import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drownie Portfolio",
  description: "Portfolio website to showcase my projects",
  authors: {name: "drownie", url: "https://www.linkedin.com/in/abraham-mahanaim-735a30218/"},
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
