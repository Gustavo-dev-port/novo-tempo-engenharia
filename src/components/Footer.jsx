export default function Footer() {
  return (
    <footer className="bg-[#1f2937] pt-16 pb-8 border-t-4 border-[#006B75] relative z-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Superior do Rodapé (4 Colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Marca e Sobre */}
          <div className="flex flex-col">
            {/* Logo Adaptada para Fundo Escuro */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="text-5xl font-black text-[#006B75] tracking-tighter leading-none"
                style={{ transform: "scaleY(1.1)" }}
              >
                NT
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-[10px] font-bold text-gray-300 tracking-[0.15em] leading-none">
                  SOLUÇÕES EM
                </span>
                <span className="text-[12px] font-bold text-gray-300 tracking-widest leading-tight mt-1">
                  ENGENHARIA
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
              Transformando complexidade em solidez. Engenharia civil de alta
              performance, do planejamento estratégico (FEL) à entrega em BIM
              para grandes indústrias.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#006B75] hover:text-white transition-colors"
              >
                {/* Ícone Instagram */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#006B75] hover:text-white transition-colors"
              >
                {/* Ícone LinkedIn */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  Nossas Soluções
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  Acervo e Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  Certificações e Prêmios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades (SEO e Autoridade) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Especialidades
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-default">
                  Metodologia FEL 2 ao 4
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-default">
                  Engenharia em BIM LOD 300
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-default">
                  Estruturas em Concreto Armado
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-default">
                  Fundações Profundas
                </span>
              </li>
              <li>
                <span className="text-gray-400 text-sm font-medium cursor-default">
                  Galpões e Estruturas Metálicas
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">
              Fale Conosco
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#006B75] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400 text-sm font-medium leading-relaxed">
                  Av. Engenheiro Luís Carlos Berrini, 1500
                  <br />
                  Itaim Bibi, São Paulo - SP
                  <br />
                  CEP 04571-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#006B75] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:comercial@novotempoeng.com.br"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  comercial@novotempoeng.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#006B75] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+5511999999999"
                  className="text-gray-400 hover:text-[#006B75] transition-colors text-sm font-medium"
                >
                  +55 (11) 4000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Faixa de Premiações (Prova Social de Encerramento) */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 py-6 mb-4">
          <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4 md:mb-0">
            Empresa Certificada e Premiada
          </span>
          <div className="flex gap-6 items-center">
            {/* Textos simulando os selos - depois você substitui pelas imagens reais */}
            <span className="text-[#006B75] font-extrabold text-sm border border-[#006B75] px-3 py-1 rounded">
              Prêmio Quality Brasil 2021
            </span>
            <span className="text-[#006B75] font-extrabold text-sm border border-[#006B75] px-3 py-1 rounded">
              Selo ANCEC Ouro
            </span>
          </div>
        </div>

        {/* Copyright e Políticas */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 mt-4">
          <p className="text-gray-500 text-xs font-medium text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} NT Soluções em Engenharia. Todos os
            direitos reservados.
            <br />
            CNPJ: 00.000.000/0001-00
          </p>
          <div className="flex gap-6 text-xs font-medium text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
