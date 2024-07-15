import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Container from "@/components/global/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bán BĐS",
  description: "Bán bất động sản",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          {children}
          <Toaster />
        </Container>
      </body>
    </html>
  );
}
