import { Montserrat } from "next/font/google";
import "./globals.scss";
import { Header } from "@/layout/MainLayout/Header";
import Footer from "@/layout/MainLayout/Footer";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "WPG",
  description: "Жидкая битумно-латексная гидроизоляция кровли по голландской технологии от производителей в Беларуси",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
