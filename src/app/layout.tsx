import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "GrowBot - Automatize seu Atendimento",
  description: "Automatize o atendimento da sua PME com o GrowBot. Chatbot inteligente para WhatsApp e sites, fácil de configurar e acessível.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&family=Outfit:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}