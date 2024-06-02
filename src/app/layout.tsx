import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BkgdGradient from "./components/BkgdGradient";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Just Call Me Sam",
  description: "Personal landing page for Samuel Marks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <BkgdGradient />
          {children}
        </Providers>
      </body>
    </html>
  );
}
