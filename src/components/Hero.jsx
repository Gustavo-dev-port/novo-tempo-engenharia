"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { colunasHero } from "../data/content"; // Importando os dados do "banco"

export default function Hero() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Controle para pausar a animação

  // Rotação automática (pausa se o usuário estiver com o mouse em cima)
  useEffect(() => {
    if (isHovered) return;

    const intervalo = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % 3); // 3 é o número de fotos por coluna
    }, 5000);
    return () => clearInterval(intervalo);
  }, [isHovered]);

  return (
    <section
      className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden bg-[#1f2937]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container das fatias */}
      <div className="absolute inset-0 z-0 flex w-[120%] ml-[-10%] h-full gap-1 md:gap-2 -skew-x-12 transform bg-black group">
        {colunasHero.map((coluna, indexCol) => (
          <div
            key={`col-${indexCol}`}
            className={`relative h-full overflow-hidden bg-gray-800 transition-all duration-500 ease-out 
              ${indexCol > 2 ? "hidden md:block" : ""} 
              w-1/3 md:w-1/5 hover:opacity-100 opacity-80 group-hover:opacity-40`}
          >
            <div className="absolute inset-[-20%] w-[140%] h-[140%] skew-x-12">
              {coluna.fotos.map((src, indexFoto) => (
                <div
                  key={`foto-${indexCol}-${indexFoto}`}
                  className="absolute inset-0 w-full h-full transition-all duration-3000 ease-in-out"
                  style={{
                    opacity: indexFoto === indiceAtual ? 1 : 0,
                    transform:
                      indexFoto === indiceAtual ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <div className="w-full h-full bg-slate-700 absolute inset-0"></div>
                  <Image
                    src={src}
                    alt={`Imagem ilustrativa de ${coluna.titulo}`}
                    fill
                    priority={indexFoto === 0}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}

              {/* Rótulo Dinâmico */}
              <div className="absolute bottom-10 left-0 w-full text-center z-30 transition-opacity duration-300 opacity-0 hover:opacity-100">
                <span className="bg-[#006B75]/90 text-white text-xs md:text-sm font-bold uppercase tracking-widest py-2 px-4 rounded shadow-xl">
                  {coluna.titulo}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Escurecimento melhorado para dar foco ao texto */}
      <div className="absolute inset-0 bg-gray-900/70 z-10 pointer-events-none"></div>

      {/* COPYWRITING CENTRAL */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-24 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
          Infraestrutura de Alto Padrão para <br className="hidden md:block" />
          <span className="text-[#006B75] bg-white px-4 py-1 rounded shadow-lg inline-block mt-2 md:mt-4">
            Grandes Indústrias
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-medium max-w-3xl mx-auto drop-shadow-md">
          Projetos de Engenharia Civil com ênfase em estruturas de grande porte.
          Do planejamento FEL 2 à execução em BIM LOD 300.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
          <button className="bg-[#006B75] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#00525a] transition-all shadow-xl uppercase tracking-wide">
            Apresentação Institucional
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-[#006B75] transition-all uppercase tracking-wide">
            Ver Cases de Sucesso
          </button>
        </div>
      </div>
    </section>
  );
}
