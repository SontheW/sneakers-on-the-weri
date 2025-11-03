import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Sneakers on the Weri",
  description: "Mais que sneakers, atitude."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="logo">SNEAKERS<br />ON THE WERI</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#products">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer>
          © 2025 Sneakers on the Weri — Fundado por Mateus Silva & Guilherme Fonseca
        </footer>
      </body>
    </html>
  );
}
