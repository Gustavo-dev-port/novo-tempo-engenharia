import React from "react";
// Importando as peças do quebra-cabeça de forma segura
import Header from "../components/Header";
import Hero from "../components/Hero";
import Solucoes from "../components/Solucoes";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#E5E7EB] flex flex-col font-sans overflow-hidden">
      <Header />
      <Hero />
      <Solucoes />
      <Portfolio />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
