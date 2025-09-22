import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, ChevronDown, ChevronUp, HelpCircle, BookOpen, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])) // Primeiro item aberto por padrão

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      category: "Sobre o Manual NEXUS",
      questions: [
        {
          question: "O que é exatamente o Manual NEXUS?",
          answer: "O Manual NEXUS é um guia completo de alta performance que combina metodologias comprovadas de produtividade com o poder da Inteligência Artificial. São 6 módulos estruturados, com mais de 30 ferramentas práticas, 53 lições e framework para transformar sua performance pessoal e profissional na era informacional."
        },
        {
          question: "Para quem é indicado o Manual NEXUS?",
          answer: "O Manual é ideal para profissionais, empreendedores, estudantes e qualquer pessoa que deseja maximizar sua produtividade e se destacar no mercado. É especialmente valioso para quem trabalha com informação, tomada de decisões e busca vantagem competitiva através da tecnologia."
        },
        {
          question: "Preciso ter conhecimento prévio em IA para usar o Manual?",
          answer: "Não! O Manual foi desenvolvido para pessoas de todos os níveis. Começamos do básico e evoluímos gradualmente. Mesmo se você nunca usou IA antes, conseguirá acompanhar e aplicar todas as técnicas apresentadas."
        }
      ]
    },
    {
      category: "Conteúdo e Formato",
      questions: [
        {
          question: "Como o conteúdo está organizado?",
          answer: "O Manual está dividido em 6 módulos progressivos: 1) Fundamentos da Era Informacional, 2) IA na Prática, 3) Produtividade Exponencial, 4) Organização de Alta Performance, 5) Estratégia e Tomada de Decisão, 6) Implementação e Resultados. Cada módulo contém lições práticas com exercícios aplicáveis."
        },
        {
          question: "Em que formato recebo o Manual?",
          answer: "O Manual NEXUS é 100% digital, otimizado para leitura em qualquer dispositivo (computador, tablet, smartphone). Você recebe acesso imediato após a compra e pode baixar o conteúdo para leitura offline."
        },
        {
          question: "Quanto tempo leva para completar todo o Manual?",
          answer: "O Manual contém leitura ativa com ferramentas que você poderá acesssar imediatamente. Recomendamos dedicar 1-2 horas por semana para absorver e aplicar o conhecimento adequadamente. Assim, você completa todo o conteúdo em 6-12 semanas, com tempo para implementar as técnicas."
        }
      ]
    },
    {
      category: "Acesso e Suporte",
      questions: [
        {
          question: "Por quanto tempo tenho acesso ao Manual?",
          answer: "Seu acesso é vitalício! Uma vez adquirido, você pode acessar o Manual NEXUS para sempre, incluindo futuras atualizações e melhorias que possamos fazer no conteúdo."
        },
        {
          question: "Posso acessar o Manual em múltiplos dispositivos?",
          answer: "Sim! Você pode acessar o Manual em quantos dispositivos quiser - computador, tablet, smartphone. O conteúdo é sincronizado e você pode continuar a leitura de onde parou em qualquer dispositivo."
        },
        {
          question: "Existe suporte disponível se eu tiver dúvidas?",
          answer: "Sim! Oferecemos suporte por email para esclarecer dúvidas sobre o conteúdo do Manual. Nossa equipe está preparada para ajudar você a extrair o máximo valor do NEXUS."
        }
      ]
    },
    {
      category: "Resultados e Aplicação",
      questions: [
        {
          question: "Quando vou começar a ver resultados?",
          answer: "Muitos usuários relatam melhorias na produtividade já nas primeiras semanas de aplicação. Os resultados dependem da sua dedicação em implementar as técnicas, mas o Manual foi projetado para gerar impacto imediato e progressivo."
        },
        {
          question: "As técnicas funcionam para qualquer área profissional?",
          answer: "Sim! As metodologias do NEXUS são universais e se aplicam a qualquer área que envolva processamento de informação, tomada de decisões e produtividade. Temos casos de sucesso em diversas áreas: tecnologia, consultoria, educação, vendas, marketing, e muito mais."
        },
        {
          question: "Preciso de ferramentas pagas para aplicar o que aprendo?",
          answer: "A maioria das técnicas pode ser aplicada com ferramentas gratuitas. O Manual ensina a usar tanto versões gratuitas quanto pagas de ferramentas de IA, sempre priorizando opções acessíveis e com melhor custo-benefício."
        }
      ]
    },
    {
      category: "Compra e Garantia",
      questions: [
        {
          question: "Como funciona a garantia de 7 dias?",
          answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o Manual NEXUS, basta solicitar o reembolso dentro deste prazo e devolvemos 100% do seu investimento, sem perguntas."
        },
        {
          question: "Quais formas de pagamento são aceitas?",
          answer: "Aceitamos cartão de crédito (Visa, Mastercard, Elo), PIX e boleto bancário. O pagamento é processado de forma segura através da plataforma Cakto, com certificação de segurança."
        },
        {
          question: "Recebo o acesso imediatamente após a compra?",
          answer: "Sim! Para pagamentos via cartão de crédito e PIX, o acesso é liberado automaticamente após a confirmação do pagamento. Para boleto, o acesso é liberado em até 2 dias úteis após a compensação."
        },
        {
          question: "Posso parcelar o pagamento?",
          answer: "Sim! Você pode parcelar o pagamento em até 12x no cartão de crédito, sujeito à aprovação da operadora do seu cartão. O valor total é R$ 97,00."
        }
      ]
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tire suas <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">dúvidas</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Encontre respostas para as principais questões sobre o Manual NEXUS
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{categoryIndex + 1}</span>
                </div>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex // Índice único global
                  const isOpen = openItems.has(globalIndex)
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">
                          {item.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-700/50 pt-4">
                            <p className="text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 p-8 rounded-3xl border border-blue-500/20">
            <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Não encontrou sua resposta?
            </h2>
            <p className="text-gray-300 mb-6">
              Nossa equipe está pronta para esclarecer qualquer dúvida sobre o Manual NEXUS
            </p>
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-6 py-3 font-semibold rounded-xl">
              Entrar em Contato
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">transformação</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Junte-se a milhares de profissionais que já transformaram sua performance
          </p>
          
          <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
            {/* BOTÃO ATUALIZADO AQUI */}
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 border-2 border-orange-400/50 animate-pulse">
              <BookOpen className="w-6 h-6 mr-3" />
              Quero o Manual NEXUS Agora
            </Button>
          </a>
          
          <p className="text-gray-400 text-sm mt-4">
            🛡️ Garantia de 7 dias - Satisfação garantida ou seu dinheiro de volta
          </p>
        </div>
      </section>
    </div>
  )
}

export default FAQ
