import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linear Algebra Grade Calculator",
  description: "Calculates grade for MATH01210",
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
