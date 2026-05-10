import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "SUBLIM | Control e Integración de Procesos Industriales",
  description: "Soluciones integrales de automatización, control e integración de procesos industriales para la industria latinoamericana.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
