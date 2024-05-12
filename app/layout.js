import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Poppins } from "next/font/google";

import { Barlow_Semi_Condensed } from "next/font/google";
import GoTop from "@/components/GoTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const barlow = Barlow_Semi_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata = {
  title: "ICAFM 2024",
  description: "3rd International Conference On Advanced Functional Materials",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${poppins.className} ${barlow.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <GoTop/>
      </body>
    </html>
  );
}
