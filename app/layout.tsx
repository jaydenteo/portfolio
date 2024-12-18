import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import SmoothScroll from "@/components/ui/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jayden Teo",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased bg-white`}>
        <script>0</script>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
