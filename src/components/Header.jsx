"use client";
import React, { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CABEÇALHO NORMAL (Agora 100% Responsivo) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        {/* Reduzimos a altura do cabeçalho no mobile (h-20) e mantemos h-24 no desktop */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          {/* LOGO CLICÁVEL E RESPONSIVA */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 md:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            title="Voltar ao início"
          >
            {/* Fonte text-4xl no mobile e text-6xl no desktop */}
            <div
              className="text-4xl md:text-6xl font-black text-[#006B75] tracking-tighter leading-none"
              style={{ transform: "scaleY(1.1)" }}
            >
              NT
            </div>
            <div className="flex flex-col mt-1 md:mt-2">
              <span className="text-[9px] md:text-[12px] font-bold text-[#808285] tracking-[0.15em] leading-none">
                SOLUÇÕES EM
              </span>
              <span className="text-[10px] md:text-[14px] font-bold text-[#808285] tracking-widest leading-tight mt-1">
                ENGENHARIA
              </span>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-[#808285] font-bold text-sm uppercase tracking-wider">
            <a
              href="#solucoes"
              className="hover:text-[#006B75] transition-colors"
            >
              Soluções
            </a>
            <a
              href="#portfolio"
              className="hover:text-[#006B75] transition-colors"
            >
              Portfólio
            </a>
            <a
              href="#certificacoes"
              className="hover:text-[#006B75] transition-colors"
            >
              Certificações
            </a>
          </nav>

          {/* BOTÃO CORRIGIDO (whitespace-nowrap impede que o texto quebre linhas) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#006B75] text-white px-4 py-2.5 md:px-6 md:py-3 rounded font-bold hover:bg-[#00525a] transition-all shadow-md text-[10px] md:text-sm uppercase tracking-wider cursor-[url('/images/capacete.png'),_pointer] whitespace-nowrap"
          >
            Fale com um Engenheiro
          </button>
        </div>
      </header>

      {/* CARD FLUTUANTE (MODAL) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          {/* Fundo escuro (Overlay) */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* O Card do Formulário */}
          <div className="relative bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-lg w-full mx-4 z-10 animate-fade-in-up">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-red-500 transition-colors text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl md:text-3xl font-extrabold text-[#374151] mb-2 tracking-tight">
              Inicie seu <span className="text-[#006B75]">Projeto</span>
            </h3>
            <p className="text-[#808285] text-xs md:text-sm mb-6">
              Nossa equipe de engenharia está pronta para analisar sua demanda e
              estruturar uma proposta técnica.
            </p>

            <form className="flex flex-col gap-3 md:gap-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all text-sm"
                required
              />
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all text-sm"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-full sm:w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all text-sm"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="E-mail corporativo"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all text-sm"
                required
              />
              <textarea
                placeholder="Conte-nos brevemente sobre sua necessidade..."
                rows="3"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all resize-none text-sm"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#006B75] text-white font-bold py-3 md:py-4 rounded hover:bg-[#00525a] transition-all uppercase tracking-widest mt-2 shadow-lg text-sm"
              >
                Solicitar Contato Comercial
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
