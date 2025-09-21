import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function QuemSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 font-['Poppins',sans-serif]">
      {/* Header */}
      <header className="border-b border-blue-500/20 bg-slate-900/50 backdrop-blur-sm">
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conheça a nossa <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">História</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Aqui você pode escrever sobre a missão, visão e os valores da NEXUS.
          </p>
          
          <div className="text-left bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              O conteúdo sobre a missão da sua empresa vai aqui. Explique o propósito e o que motiva vocês.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">A Equipe</h2>
            <p className="text-gray-300 leading-relaxed">
              Aqui você pode apresentar os membros da equipe, suas experiências e o que cada um contribui para o projeto NEXUS.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuemSomos
