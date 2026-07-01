import "@/styles/globals.css";
import { Header } from "@/components/layout/Header/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import Footer from "@/components/layout/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
