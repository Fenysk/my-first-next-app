import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Training App",
  description: "A Next.js learning project for training purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-row">

          <Sidebar />

          <div className="pt-4 w-full">

            <div className="border-[1px] border-white/10 bg-[#222] mx-auto py-2 rounded-xl w-[640px]">
              {children}
            </div>

          </div>

        </div>
      </body>
    </html>
  );
}
