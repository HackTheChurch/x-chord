import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { title, description } from "@/components/variables";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: title,
  description: description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body
        className={`${inter.className} bg-stone-900 text-white min-h-[100vh] flex flex-col justify-between`}
      >
        {children}
      </body>
    </html>
  );
}
