import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navigation from "@/components/Navigation";

const manrope = Manrope({ subsets: ["latin"] });

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
        className={`bg-[#E6E6E6] bg-grid grid grid-cols-12 h-fit ${manrope.className}`}
      >
        <div className="col-start-2 col-end-12">
            {children}
        </div>
      </body>
    </html>
  );
}
