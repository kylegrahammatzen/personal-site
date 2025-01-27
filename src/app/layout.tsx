import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Graham Matzen",
  description:
    "A software engineer with over a decade of programming experience and a year of experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>{children}</body>
      </html>
    </>
  );
}
