import { Inter } from "next/font/google";
import "./globals.css";


import SearchBox from "@/components/SearchBox";


const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "../components/Providers";
export const metadata = {
  title: "Movie Project",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
       <Providers>
       <Header />
        <Navbar></Navbar>
        <SearchBox />
        {children}
       </Providers>
       

      </body>
    </html>
  );
}
