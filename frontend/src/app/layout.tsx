import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Helmet } from "react-helmet";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejo | Portfolio",
  description: "Hi, my name is Alejo Di Diego and I'm a Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body className={poppins.className}>
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
