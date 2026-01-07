import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
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
  openGraph: {
    title: "AllM Master",
    description: "รับทำเว็บไซต์ ออกแบบเว็บไซต์ ด้วย Next.js โดยทีมงานมืออาชีพ",
    url: "https://www.allmaster.store",
    siteName: "AllM Master",
    images: [
      {
        url: "https://www.allmaster.store/logo.svg", // ใส่ URL รูปภาพจริงของคุณ
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <NextTopLoader color="#07be8a" />
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
