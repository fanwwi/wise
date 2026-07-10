import "@/styles/globals.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["cyrillic", "latin"], display: "swap" });

const Header = dynamic(() =>
  import("@/components/layout/Header/Header").then(
    (mod) => mod.Header || mod.default,
  ),
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer/Footer").then(
    (mod) => mod.Footer || mod.default,
  ),
);

export const metadata = {
  title: "WISE Programs - Поступление в топовые университеты",
  description: "Поступление в топовые университеты мира",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
