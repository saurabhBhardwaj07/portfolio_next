import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import AppTheme from "@/theme/AppTheme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppTheme>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </AppTheme>
    </html>
  );
}
