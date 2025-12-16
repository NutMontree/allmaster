import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Prompt } from "next/font/google";

export const prompt = Prompt({
  subsets: ["thai"],
  variable: "--font-sans",
  weight: "400",
  style: "normal",
});

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AllM Master",
  description: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ ด้วย Next.js โดยทีมงานมืออาชีพ",
};

// ✅ จุดที่แก้ 1: ลบ session ออกจาก Props และ Type
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
        {/* ✅ จุดที่แก้ 2: ลบ session={session} ออก (ให้ Provider จัดการเอง) */}
        <SessionProviderComp session={undefined}>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProviderComp>
      </body>
    </html>
  );
}
