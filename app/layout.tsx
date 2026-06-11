import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alphard Strategy Hub",
  description:
    "An account-based outreach map for breaking into DataSnipper, Xelix, and Paddle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
