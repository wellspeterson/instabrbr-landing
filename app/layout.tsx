import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://instabrbr.com"),
  title: "instabrbr",
  description: "Turn DMs into confirmed, paid bookings.",
  icons: {
    icon: "/favicon.svg?v=3",
  },
  openGraph: {
    description: "Turn DMs into confirmed, paid bookings.",
    url: "https://instabrbr.com",
    siteName: "instabrbr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: "Turn DMs into confirmed, paid bookings.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
