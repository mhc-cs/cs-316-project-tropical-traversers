import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Island Tours",
  description: "name of the travel company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fraunces.className}>{children}</body>
    </html>
  );
}
