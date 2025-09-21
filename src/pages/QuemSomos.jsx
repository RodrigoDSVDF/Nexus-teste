import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function QuemSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-lg font-medium">Voltar para Home</span>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                NEXUS
              </h1>
              <p className="text-gray-400 text-sm">Manual de Alta Performance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Principal */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-left bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Mais que Ferramentas. <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Uma Jornada.</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Na internet de hoje, a inteligência artificial virou commodity. Todo mundo anuncia a ferramenta revolucionária, o prompt que vai mudar tudo ou o curso definitivo. São ofertas, downloads e listas intermináveis de recursos… mas cadê a conexão? Cadê a verdadeira transformação?
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Percebi que nesse mar de informações, o que mais falta é <span className="text-cyan-400 font-semibold">sentido</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              As pessoas são bombardeadas com opções, mas não são guiadas a pensar. São ensinadas a usar ferramentas, mas não a desenvolver uma mentalidade. São incentivadas a produzir, mas não a refletir.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Foi dessa lacuna que nasceu o <span className="text-cyan-400 font-semibold">Nexus</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Não somos mais um lugar que só te vende algo. Somos um espaço de <span className="text-cyan-400 font-semibold">construção</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Aqui, a inteligência artificial não é um fim — é uma ponte. Uma extensão da sua mente. Uma ferramenta para ampliar sua criatividade, organizar suas ideias e resolver problemas complexos, <span className="font-semibold text-white">sem abrir mão do que te torna humano</span>: seu pensamento crítico, sua intuição e sua capacidade de se comunicar com profundidade.
            </p>

            <h3 className="text-2xl font-bold text-white mt-10 mb-4">Nosso propósito é claro:</h3>
            <p className="text-xl text-emerald-300 leading-relaxed mb-6 font-semibold">
              Fazer o binômio entre I.A. e Transformação Pessoal.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Queremos conduzir você a um patamar elevado de uso consciente da tecnologia — onde você não apenas executa, mas <span className="text-cyan-400 font-semibold">compreende</span>; não apenas repete, mas <span className="text-cyan-400 font-semibold">cria</span>; não apenas consome, mas <span className="text-cyan-400 font-semibold">se desenvolve</span>.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              E no centro disso tudo está o que acreditamos ser o grande catalisador da mudança real: <span className="text-emerald-300 font-semibold">A comunicação.</span>
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Não a comunicação superficial das redes sociais. Mas a comunicação intencional. A que formula perguntas melhores. A que estrutura pensamentos. A que conecta pessoas e ideias.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              É por isso que no Nexus você não encontra apenas listas de ferramentas ou tutoriais rasos. Você encontra um <span className="text-cyan-400 font-semibold">guia para alto desempenho cognitivo e emocional</span>, com base em pilares como:
            </p>

            <ul className="space-y-4 my-8">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Atenção e foco na era digital</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Criatividade e autenticidade</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Engenharia de prompts com propósito</span>
              </li>
               <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Educação transformadora</span>
              </li>
               <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-200">Estratégias para o novo mercado de trabalho</span>
              </li>
            </ul>

            <p className="text-gray-300 leading-relaxed mb-6">
              Nosso compromisso é com seu crescimento real. Queremos que você use a I.A. não para ser substituído, mas para se tornar <span className="text-cyan-400 font-semibold">mais humano</span>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Se você está cansado de conteúdos vazios e prontos para uma jornada de evolução com significado… Você encontrou seu lugar.
            </p>
            
            <p className="mt-10 text-xl italic text-center text-emerald-400 font-medium">
              Nexus: Porque tecnologia, sem humanidade, é apenas ruído.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuemSomos
