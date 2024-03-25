import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Project",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/movieIcon.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
