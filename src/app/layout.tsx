import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationNar from "../components/Utilities/NavBar/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "Organisir daftar anime Anda dengan mudah dan praktis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavigationNar/>
        {children}
        </body>
    </html>
  );
}
