"use client";
import React, { useState } from "react";

export default function Header() {
  // Estado para controlar se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* CABEÇALHO NORMAL */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              title="Voltar ao início"
            >
              <div
                className="text-6xl font-black text-[#006B75] tracking-tighter leading-none"
                style={{ transform: "scaleY(1.1)" }}
              >
                NT
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-[12px] font-bold text-[#808285] tracking-[0.15em] leading-none">
                  SOLUÇÕES EM
                </span>
                <span className="text-[14px] font-bold text-[#808285] tracking-widest leading-tight mt-1">
                  ENGENHARIA
                </span>
              </div>
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

          {/* BOTÃO QUE ABRE O MODAL (Com o cursor personalizado!) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#006B75] text-white px-6 py-3 rounded font-bold hover:bg-[#00525a] transition-all shadow-md text-sm uppercase tracking-wider cursor-[url('/images/colher.png'),_pointer]"
          >
            Fale com um Engenheiro
          </button>
        </div>
      </header>

      {/* CARD FLUTUANTE (MODAL) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
          {/* Fundo escuro (Overlay) que fecha o modal ao clicar fora */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* O Card do Formulário */}
          <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full mx-4 z-10 animate-fade-in-up">
            {/* Botão de Fechar (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-red-500 transition-colors text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-3xl font-extrabold text-[#374151] mb-2 tracking-tight">
              Inicie seu <span className="text-[#006B75]">Projeto</span>
            </h3>
            <p className="text-[#808285] text-sm mb-6">
              Nossa equipe de engenharia está pronta para analisar sua demanda e
              estruturar uma proposta técnica.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all"
                required
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="E-mail corporativo"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all"
                required
              />
              <textarea
                placeholder="Conte-nos brevemente sobre sua necessidade..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#006B75] focus:ring-1 focus:ring-[#006B75] transition-all resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#006B75] text-white font-bold py-4 rounded hover:bg-[#00525a] transition-all uppercase tracking-widest mt-2 shadow-lg"
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
