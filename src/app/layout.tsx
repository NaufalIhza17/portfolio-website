import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components";
import { Helper } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Portfolio Website",
  description: "Portfolio website by Naufal Ihza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-[#E6E6E6] dark:bg-gray-800 bg-grid dark:bg-grid-dk bg-fixed flex-col w-full items-center justify-center ${inter.className} relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[440px] w-full pt-[10%] sm:pt-[5%] pb-[20%] sm:pb-[10%] mx-auto">
            <Navigation />
            {children}
          </div>
          <Helper />
        </ThemeProvider>
        <p className="text-center text-xs font-light text-black dark:text-white/70 py-10">Copyright 2024 Mochammad Naufal Ihza Syahzada</p>
      </body>
    </html>
  );
}
