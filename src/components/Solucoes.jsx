export default function Solucoes() {
  return (
    <section id="solucoes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#006B75] font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Expertise Técnica
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#374151] tracking-tight mb-6">
            Soluções em <span className="text-[#006B75]">Engenharia</span>
          </h2>
          <p className="text-[#808285] text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Da viabilidade do projeto à entrega da chave. Atuamos em ambientes
            de alta complexidade com rigor absoluto às normas técnicas e foco em
            produtividade.
          </p>
        </div>

        {/* Grid de Soluções (4 Colunas no Desktop, 2 no Tablet, 1 no Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Fundações e Concreto */}
          <div className="bg-[#E5E7EB]/30 border border-[#E5E7EB] p-8 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#006B75]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#006B75] transition-colors duration-300">
              {/* Ícone SVG customizado */}
              <svg
                className="w-8 h-8 text-[#006B75] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-3">
              Fundações e Concreto
            </h3>
            <p className="text-[#808285] text-sm leading-relaxed mb-6">
              Execução de fundações profundas, estruturas em concreto armado in
              loco e pré-moldados com alto controle tecnológico e aderência à
              NBR 6118.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#006B75] font-bold text-sm uppercase tracking-wider group-hover:underline"
            >
              Saiba Mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Card 2: Estruturas Metálicas */}
          <div className="bg-[#E5E7EB]/30 border border-[#E5E7EB] p-8 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#006B75]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#006B75] transition-colors duration-300">
              <svg
                className="w-8 h-8 text-[#006B75] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-3">
              Estruturas Metálicas
            </h3>
            <p className="text-[#808285] text-sm leading-relaxed mb-6">
              Sistemas construtivos ágeis para galpões e indústrias, garantindo
              vãos livres otimizados e velocidade na montagem estrutural.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#006B75] font-bold text-sm uppercase tracking-wider group-hover:underline"
            >
              Saiba Mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Card 3: Modelagem BIM & Projetos */}
          <div className="bg-[#E5E7EB]/30 border border-[#E5E7EB] p-8 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#006B75]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#006B75] transition-colors duration-300">
              <svg
                className="w-8 h-8 text-[#006B75] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-3">
              Projetos & BIM LOD 300
            </h3>
            <p className="text-[#808285] text-sm leading-relaxed mb-6">
              Compatibilização de disciplinas e antecipação de interferências em
              modelos 3D de alta fidelidade, reduzindo custos e retrabalhos na
              obra.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#006B75] font-bold text-sm uppercase tracking-wider group-hover:underline"
            >
              Saiba Mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Card 4: Planejamento FEL 2 ao 4 */}
          <div className="bg-[#E5E7EB]/30 border border-[#E5E7EB] p-8 rounded-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 bg-[#006B75]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#006B75] transition-colors duration-300">
              <svg
                className="w-8 h-8 text-[#006B75] group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#374151] mb-3">
              Gestão e Metodologia FEL
            </h3>
            <p className="text-[#808285] text-sm leading-relaxed mb-6">
              Governança corporativa de engenharia. Planejamento estratégico de
              portfólio (Front-End Loading) para segurança no CAPEX.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#006B75] font-bold text-sm uppercase tracking-wider group-hover:underline"
            >
              Saiba Mais
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Chamada para Ação (CTA) inferior da seção */}
        <div className="mt-16 text-center border-t border-[#E5E7EB] pt-12">
          <p className="text-[#374151] font-bold text-lg mb-6">
            Seu projeto exige certificações e capacidade atestada?
          </p>
          <button className="bg-transparent border-2 border-[#006B75] text-[#006B75] px-8 py-4 rounded font-bold text-sm hover:bg-[#006B75] hover:text-white transition-all uppercase tracking-widest">
            Solicitar Caderno de Obras
          </button>
        </div>
      </div>

      {/* Detalhe visual de background (Opcional - traz um ar arquitetônico) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-[#E5E7EB]/40 to-transparent pointer-events-none"></div>
    </section>
  );
}
