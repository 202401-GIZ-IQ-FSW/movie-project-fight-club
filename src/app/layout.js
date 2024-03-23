import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie Project",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Header />
        <SearchBox />
      </body>
    </html>
  );
}
