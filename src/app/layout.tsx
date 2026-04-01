import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "vietnamese"], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: "PDC - Trung tâm Phát triển Sản phẩm",
  description: "Hệ thống Quan trị dự án cho Trung tâm PDC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${manrope.variable} font-sans bg-[#fbf9f8] text-[#1b1c1c] selection:bg-[#00a950]/30 selection:text-[#003314]`}>
        {children}
      </body>
    </html>
  );
}
