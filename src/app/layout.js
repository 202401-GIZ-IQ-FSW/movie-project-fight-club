import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
export const metadata = {
  title: "Movie Project",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<Header/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
