import React from "react";
import Image from "next/image";
import { obrasPortfolio } from "../data/content"; // Importando os dados do "banco"

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#f9fafb] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho do Portfólio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-[#006B75] font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Acervo Técnico
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#374151] tracking-tight">
              Obras <span className="text-[#006B75]">Entregues</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-[#808285] font-medium max-w-sm text-sm md:text-base md:text-right">
              Explore nosso histórico de excelência na execução de obras
              industriais de grande porte.
            </p>
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {obrasPortfolio.map((obra) => (
            <div
              key={obra.id}
              className={`relative group overflow-hidden rounded-xl bg-gray-200 cursor-pointer ${obra.span}`}
            >
              {/* Imagem Otimizada com Zoom Suave no Hover */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={obra.src}
                  alt={obra.titulo}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              {/* Overlay Escuro Gradiente */}
              <div className="absolute inset-0 bg-linear-to-t from-[#1f2937]/90 via-[#1f2937]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Textos que aparecem ao passar o mouse */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[#006B75] bg-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded inline-block mb-3 shadow-md">
                  {obra.categoria}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                  {obra.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver mais obras */}
        <div className="mt-16 text-center">
          <button className="bg-transparent border-2 border-[#374151] text-[#374151] px-10 py-4 rounded font-bold text-sm hover:bg-[#374151] hover:text-white transition-all uppercase tracking-widest">
            Acessar Portfólio Completo
          </button>
        </div>
      </div>
    </section>
  );
}
