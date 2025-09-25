import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, BookOpen, CheckCircle, Clock, Users, Star, Target, Brain, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  const [activeModule, setActiveModule] = useState(0)

  const modules = [
    {
      title: "Módulo 1: Fundamentos da Era Informacional",
      duration: "leitura prática",
      lessons: 8,
      description: "Compreenda os pilares do modelo econômico informacional e como se posicionar estrategicamente nesta nova era.",
      topics: [
        "O que é a Era Informacional",
        "Diferenças entre Era Industrial e Informacional",
        "Como a informação se tornou o novo capital",
        "Identificando oportunidades no mercado digital",
        "Mindset para a transformação digital",
        "Casos de sucesso na economia informacional",
        "Preparando-se para o futuro do trabalho",
        "Exercícios práticos de aplicação"
      ]
    },
    {
      title: "Módulo 2: Inteligência Artificial na Prática",
      duration: "ferramentas e aplicação",
      lessons: 12,
      description: "Domine as principais ferramentas de IA e aprenda a aplicá-las para maximizar sua produtividade e resultados.",
      topics: [
        "Introdução às principais IAs do mercado",
        "ChatGPT: técnicas avançadas de prompt",
        "Claude: análise e síntese de documentos",
        "Midjourney: criação de imagens profissionais",
        "Notion AI: organização inteligente",
        "Automações com IA para tarefas repetitivas",
        "Integração de múltiplas IAs em workflows",
        "Ética e limitações da IA",
        "Criando seu assistente pessoal com IA",
        "Análise de dados com IA",
        "IA para tomada de decisões",
        "Projeto prático: implementando IA no seu trabalho"
      ]
    },
    {
      title: "Módulo 3: Produtividade Exponencial",
      duration: "leitura prática e aplicação com ferramentas",
      lessons: 10,
      description: "Desenvolva sistemas e metodologias para alcançar níveis extraordinários de produtividade e eficiência.",
      topics: [
        "Princípios da produtividade exponencial",
        "Método GTD adaptado para a era digital",
        "Time blocking e gestão de energia",
        "Eliminando distrações digitais",
        "Técnicas de foco profundo",
        "Automação de processos pessoais",
        "Criando rotinas de alta performance",
        "Medindo e otimizando resultados",
        "Batching: agrupamento de tarefas similares",
        "Sistema de revisão e melhoria contínua"
      ]
    },
    {
      title: "Módulo 4: Organização de Alta Performance",
      duration: "2 horas",
      lessons: 8,
      description: "Estruture seus materiais, projetos e conhecimento de forma sistemática para máxima eficiência.",
      topics: [
        "Arquitetura de informação pessoal",
        "Sistema de arquivos e pastas otimizado",
        "Gestão de conhecimento com Second Brain",
        "Ferramentas de captura e organização",
        "Criando templates reutilizáveis",
        "Backup e sincronização de dados",
        "Organização de projetos complexos",
        "Mantendo a organização a longo prazo"
      ]
    },
    {
      title: "Módulo 5: Estratégia e Tomada de Decisão",
      duration: "leitura prática com mais exercícios",
      lessons: 9,
      description: "Desenvolva frameworks mentais para tomar decisões estratégicas precisas e construir vantagem competitiva.",
      topics: [
        "Frameworks de tomada de decisão",
        "Análise de cenários e probabilidades",
        "Pensamento sistêmico aplicado",
        "Identificando padrões e tendências",
        "Construindo vantagem competitiva sustentável",
        "Estratégias de diferenciação no mercado",
        "Networking estratégico na era digital",
        "Posicionamento pessoal e profissional",
        "Plano de ação para implementação"
      ]
    },
    {
      title: "Módulo 6: Implementação e Resultados",
      duration: "ferramentas e estudo",
      lessons: 6,
      description: "Coloque tudo em prática com um plano de implementação estruturado e métricas de acompanhamento.",
      topics: [
        "Criando seu plano de implementação",
        "Definindo métricas de sucesso",
        "Cronograma de 90 dias",
        "Superando obstáculos comuns",
        "Mantendo a consistência",
        "Evoluindo continuamente"
      ]
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Produtividade 10x",
      description: "Aumente exponencialmente sua capacidade de entrega"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Clareza Mental",
      description: "Tome decisões mais rápidas e precisas"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco Estratégico",
      description: "Concentre energia no que realmente importa"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Vantagem Competitiva",
      description: "Destaque-se no mercado com diferenciais únicos"
    }
  ]

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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
            <BookOpen className="w-4 h-4 mr-2" />
            Conteúdo Completo do Manual
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Descubra o que você vai <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">dominar</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Um guia completo e estruturado para transformar sua performance pessoal e profissional através da Inteligência Artificial
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-2xl border border-blue-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">6 Módulos Completos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ferramentas práticas e conteúdo estruturado, com 53 lições aplicáveis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Module List */}
            <div className="lg:col-span-1 space-y-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  onClick={() => setActiveModule(index)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeModule === index
                      ? 'bg-gradient-to-r from-blue-900/50 to-emerald-900/50 border-blue-400/50'
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/30'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{module.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {module.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {module.lessons} lições
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Module Details */}
            <div className="lg:col-span-2">
              <div className="bg-slate-800/50 p-8 rounded-3xl border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {modules[activeModule].title}
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  {modules[activeModule].description}
                </p>
                
                <div className="flex items-center space-x-6 mb-8 text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{modules[activeModule].duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    <span>{modules[activeModule].lessons} lições</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>Acesso vitalício</span>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-white mb-4">O que você vai aprender:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {modules[activeModule].topics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">performance</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Mais de 30 conteúdos práticos, 53 lições estruturadas e acesso vitalício
          </p>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 p-8 rounded-3xl border border-blue-500/20 mb-8">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-white">R$ 47</span>
              <span className="text-gray-400 ml-2">pagamento único</span>
            </div>
            <div className="flex items-center justify-center space-x-6 text-gray-300 mb-6">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>6 módulos completos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>53 lições práticas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>

          <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
            {/* BOTÃO ATUALIZADO AQUI */}
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 border-2 border-orange-400/50 animate-pulse">
              <BookOpen className="w-6 h-6 mr-3" />
              Quero o Manual NEXUS Agora
            </Button>
          </a>
          
          <p className="text-gray-400 text-sm mt-4">
            🛡️ Garantia de 7 dias - Experimente o Nexus sem risco. Se em 7 dias você não perceber uma mudança fundamental na forma como você interage com a tecnologia e amplifica seus resultados, 
            devolvemos seu investimentos - sem perguntas.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
