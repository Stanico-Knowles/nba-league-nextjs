import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";

const font = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://know-ball.vercel.app"),
  title: {
    default: "Around the NBA",
    template: "%s | Around the NBA",
  },
  description:
    "Bring the excitement of the NBA to your fingertips with live scores, team stats, player profiles, league news, and more.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
