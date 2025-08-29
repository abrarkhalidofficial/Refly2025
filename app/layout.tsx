import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Loader from "./loader";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Refly Agency",
  description:
    "Refly Agency is a creative digital agency specializing in web development, branding, and marketing solutions to help businesses grow online.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
