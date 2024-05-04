import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import NavigationNar from "../components/NavBar/NavigationBar";

const gabarito = Gabarito({ subsets: ["latin"] });

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
      <body className={`${gabarito.className} bg-color-dark`}>
      <NavigationNar/>
        {children}
        </body>
    </html>
  );
}
