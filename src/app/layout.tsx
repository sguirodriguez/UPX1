import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NeuroSinal | Sistema Inteligente de Controle de Tráfego",
  description: "Transformando o trânsito urbano através de semáforos inteligentes que se adaptam em tempo real ao fluxo de veículos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
