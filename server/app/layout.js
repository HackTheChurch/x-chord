import { Inter } from "next/font/google";
import "./globals.css";
import { title, description } from "@/components/variables";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: title,
  description: description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
