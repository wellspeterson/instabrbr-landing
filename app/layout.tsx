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
  description: "Stop losing clients to no-shows. Turn DMs into confirmed, paid bookings.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "instabrbr",
    description: "Stop losing clients to no-shows. Turn DMs into confirmed, paid bookings.",
    url: "https://instabrbr.com",
    siteName: "instabrbr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "instabrbr",
    description: "Stop losing clients to no-shows. Turn DMs into confirmed, paid bookings.",
    images: ["/og-image.png"],
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
