import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "COSLAT | Soberanía Latinoamericana",
  description: "Colectivo por la Soberanía Latinoamericana del Futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-mono bg-white text-coslat-blue antialiased flex flex-col md:flex-row min-h-screen"
      >
        {/* Navegación izquierda */}
        <Sidebar />
        
        {/* Área de contenido principal */}
        <main className="flex-1 md:ml-64 w-full min-h-screen relative overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
