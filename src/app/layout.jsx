import "@/styles/globals.css";
import { Header } from "@/components/layout/Header/Header";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
