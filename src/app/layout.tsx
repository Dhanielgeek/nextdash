import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";

// Lora for serif styling
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Supports different font weights
  display: "swap",
});

// Inter as a modern sans-serif fallback
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizon Dashboard",
  description: "A modern banking dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${inter.variable} bg-white text-gray-900 antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
