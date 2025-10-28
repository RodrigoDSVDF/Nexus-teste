import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, LayoutList, Menu, X, Instagram, Book, BarChart3, Bed, UserCheck, Play, Code, Download, Shield, Clock, Users, Lightbulb, Cpu, BarChart, Workflow, ShoppingCart, Star, Quote, AlertTriangle } from 'lucide-react';
import QuemSomos from './pages/QuemSomos.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import FAQ from './pages/FAQ.jsx';
import './App.css';

// Componentes de animação
import AnimatedSection from './components/ui/AnimatedSection.jsx';
import AnimatedFromLeft from './components/ui/AnimatedFromLeft.jsx';
import AnimatedFromRight from './components/ui/AnimatedFromRight.jsx';
import ScrollingBanner from './components/ui/ScrollingBanner.jsx';

// Imagens e vídeo
import brainNetworkImg from './assets/1000393266.jpg';
import testimonial1Img from './assets/1000396866.jpg';
import testimonial2Img from './assets/1000396868.jpg';
import testimonial3Img from './assets/1000396870.jpg';
import brainAIImg from './assets/xadrez-estrategia.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import novaImagemLogo from './assets/1000393277.png';
import dataAnalysisImg from './assets/1000395918.jpg';
import servicosIAImg from './assets/servicos-ia.jpg';
import produtoImg from './assets/produto.jpg';
import logoVideo from './assets/logo-video.mp4';
import platosCaveImg from './assets/1000396070.jpg';
import digitalToolsImg from './assets/1000395915.jpg';
import neuralNetworkImg from './assets/1000393264.jpg';
import produtividadeImg from './assets/produtividade.jpg';

// ===================================================================
// COMPONENTE DO VÍDEO DE APRESENTAÇÃO - COM NOVO LINK
// ===================================================================
function VideoApresentacao() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              VÍDEO DE APRESENTAÇÃO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Assista e Entenda Por Que Este é o <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Sistema Mais Completo</span> de IA
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Em apenas 2 minutos, descubra como o Sistema Nexus vai transformar sua produtividade
            </p>
          </div>

          <div className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-2 sm:p-4 shadow-2xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/F5fJ_56-wr8?si=STkrythq6S8tTISM&autoplay=1&controls=1&modestbranding=1&rel=0"
                title="Sistema Nexus - Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="mt-4 sm:mt-6 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                <div className="flex items-center justify-center text-gray-200 bg-[#2A3A4E]/50 p-3 rounded-lg border border-[#3A4A5E]">
                  <Clock className="w-4 h-4 text-[#6EEBD4] mr-2" />
                  <span className="text-sm">Apenas 2 minutos</span>
                </div>
                <div className="flex items-center justify-center text-gray-200 bg-[#2A3A4E]/50 p-3 rounded-lg border border-[#3A4A5E]">
                  <Brain className="w-4 h-4 text-[#6EEBD4] mr-2" />
                  <span className="text-sm">Explicação Completa</span>
                </div>
                <div className="flex items-center justify-center text-gray-200 bg-[#2A3A4E]/50 p-3 rounded-lg border border-[#3A4A5E]">
                  <Zap className="w-4 h-4 text-[#6EEBD4] mr-2" />
                  <span className="text-sm">Resultados Reais</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                <strong>Dica:</strong> Assista até o final para entender por que este sistema é diferente de tudo que você já viu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// NOVA SEÇÃO DE ATENÇÃO - ABAIXO DO VÍDEO
// ===================================================================
function AIAttentionSection() {
  const scrollToDepoimentos = () => {
    const element = document.getElementById('social-proof');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] via-[#1E293B] to-[#2A3A4E] relative overflow-hidden">
        {/* Elementos de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-xs sm:text-sm font-bold mb-6 animate-pulse">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              ATENÇÃO URGENTE
            </div>
          </div>

          <div className="bg-[#1A222E]/80 backdrop-blur-sm rounded-2xl border border-red-500/30 p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 text-center leading-tight">
              <span className="text-red-400">🚨 ATENÇÃO:</span> A IA está evoluindo mais rápido do que a sua capacidade de acompanhar
            </h2>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-gray-200 text-center leading-relaxed">
                Você já sentiu que, por mais que estude, nunca consegue acompanhar o ritmo da Inteligência Artificial?
              </p>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <p className="text-white font-semibold text-center mb-4">
                  A cada semana surge uma nova ferramenta.
                  <br />
                  A cada mês, uma atualização "revolucionária".
                  <br />
                  E você? Continua correndo atrás, tentando entender o que acabou de mudar — de novo.
                </p>
              </div>

              {/* Lista de problemas */}
              <div className="grid gap-4 mb-6">
                <div className="flex items-start p-4 bg-[#2A3A4E]/50 rounded-lg border border-[#3A4A5E] hover:border-red-500/30 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-400 text-sm">👉</span>
                  </div>
                  <p className="text-gray-200 text-lg">
                    Você passa horas aprendendo uma ferramenta... e logo ela fica obsoleta.
                  </p>
                </div>

                <div className="flex items-start p-4 bg-[#2A3A4E]/50 rounded-lg border border-[#3A4A5E] hover:border-red-500/30 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-400 text-sm">👉</span>
                  </div>
                  <p className="text-gray-200 text-lg">
                    O excesso de informação te deixa paralisado.
                  </p>
                </div>

                <div className="flex items-start p-4 bg-[#2A3A4E]/50 rounded-lg border border-[#3A4A5E] hover:border-red-500/30 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-red-400 text-sm">👉</span>
                  </div>
                  <p className="text-gray-200 text-lg">
                    Enquanto isso, seus concorrentes já estão usando a IA para ganhar tempo, dinheiro e destaque.
                  </p>
                </div>
              </div>

              {/* Transição para a solução */}
              <div className="text-center mb-6">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Mas existe um <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">outro caminho</span>.
                </p>
              </div>

              {/* Proposta de valor */}
              <div className="bg-gradient-to-r from-[#6EEBD4]/10 to-[#3DE4CF]/10 border border-[#6EEBD4]/30 rounded-2xl p-6 sm:p-8">
                <p className="text-xl sm:text-2xl text-white font-bold text-center mb-6 leading-relaxed">
                  E se, em vez de tentar dominar cada ferramenta nova, você aprendesse os <span className="text-[#6EEBD4]">princípios fundamentais da IA</span> — aqueles que <span className="text-[#6EEBD4]">nunca mudam</span>, não importa o quanto a tecnologia evolua?
                </p>

                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-[#6EEBD4]/20 border border-[#6EEBD4]/40 rounded-full text-[#6EEBD4] text-sm font-medium mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    SOLUÇÃO DEFINITIVA
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    É exatamente isso que o <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">NEXUS</span> ensina:
                  </h3>
                  <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
                    Os <span className="text-white font-semibold">pilares da alta performance com IA</span>, que vão manter você relevante, produtivo e indispensável pelos próximos <span className="text-[#F59E0B] font-bold">10 anos</span> — independentemente de qualquer atualização ou moda passageira.
                  </p>
                </div>
              </div>

              {/* Chamada para ação */}
              <div className="text-center mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="https://pay.cakto.com.br/5dUKrWD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] hover:from-[#5ED9C6] hover:to-[#2DD4BF] text-[#1A222E] font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3"
                  >
                    <Zap className="w-5 h-5" />
                    <span>QUERO DOMINAR A IA AGORA</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={scrollToDepoimentos}
                    className="border border-[#6EEBD4] text-[#6EEBD4] hover:bg-[#6EEBD4] hover:text-[#1A222E] font-bold py-4 px-8 rounded-xl transition-all duration-300"
                  >
                    VER DEPOIMENTOS
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  ⚡ Comece agora e garanta sua vantagem competitiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DA TRANSFORMAÇÃO COM IA - TÍTULO ATUALIZADO
// ===================================================================
function IATransformationSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              REVOLUÇÃO DO APRENDIZADO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Pare de Apenas estudar do jeito antigo e comece a{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                dominar a arte de aprender
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Enquanto 95% das pessoas ainda "aprendem" como na era medieval, você terá um arsenal de IA que transforma informação em poder real
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <AnimatedFromLeft>
              {/* Conteúdo do lado esquerdo */}
            </AnimatedFromLeft>
            
            <div className="flex items-center justify-center text-gray-200">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#6EEBD4] mr-1 sm:mr-2" />
              <span className="text-xs">Suporte Prioritário (Fundador)</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DO PRODUTO EXCLUSIVO
// ===================================================================
function ProductSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              OFERTA EXCLUSIVA
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Conheça Nosso <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Produto Revolucionário</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Descubra a ferramenta que vai transformar sua produtividade e resultados
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatedFromLeft>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-2 overflow-hidden">
                  <img 
                    src={produtoImg} 
                    alt="Produto Exclusivo Nexus" 
                    className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-bold">
                    MAIS VENDIDO
                  </div>
                </div>
              </div>
            </AnimatedFromLeft>

            <AnimatedFromRight>
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Sistema de Alta Performance Nexus Pro
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg mb-6">
                    A ferramenta definitiva para quem busca excelência e resultados extraordinários. 
                    Desenvolvido com tecnologia de ponta e estratégias comprovadas.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#6EEBD4] mr-3 flex-shrink-0" />
                    <span>Acesso Imediato e Vitalício</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#6EEBD4] mr-3 flex-shrink-0" />
                    <span>Suporte Prioritário 24/7</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#6EEBD4] mr-3 flex-shrink-0" />
                    <span>Atualizações Gratuitas para Sempre</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#6EEBD4] mr-3 flex-shrink-0" />
                    <span>Comunidade Exclusiva de Membros</span>
                  </div>
                  <div className="flex items-center text-gray-200">
                    <CheckCircle className="w-5 h-5 text-[#6EEBD4] mr-3 flex-shrink-0" />
                    <span>Bônus Exclusivos (Limitados)</span>
                  </div>
                </div>

                <div className="bg-[#2A3A4E]/50 border border-[#3A4A5E] rounded-2xl p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <div className="text-gray-300 text-sm">Investimento</div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl sm:text-4xl font-bold text-white">R$ 47</span>
                        <span className="text-gray-400 line-through text-lg">R$ 197</span>
                      </div>
                    </div>
                    <div className="bg-[#F59E0B] text-white px-3 py-1 rounded-full text-sm font-bold">
                      -76% OFF
                    </div>
                  </div>
                  
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-white ml-2 text-sm">4.9/5 (2.347 avaliações)</span>
                  </div>

                  <a 
                    href="https://pay.cakto.com.br/5dUKrWD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] hover:from-[#5ED9C6] hover:to-[#2DD4BF] text-[#1A222E] font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 group"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>COMPRAR AGORA - R$ 47</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>

                  <div className="text-center mt-4">
                    <div className="flex items-center justify-center text-gray-300 text-sm">
                      <Shield className="w-4 h-4 mr-2 text-[#6EEBD4]" />
                      Garantia de 7 dias ou seu dinheiro de volta
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      Últimas 23 unidades disponíveis • Oferta termina em: <span className="text-[#F59E0B]">02:15:33</span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedFromRight>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#2A3A4E]/30 border border-[#3A4A5E] rounded-2xl p-6 text-center">
              <Zap className="w-8 h-8 text-[#6EEBD4] mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">Resultados Rápidos</h4>
              <p className="text-gray-300 text-sm">Veja transformações significativas em menos de 7 dias</p>
            </div>
            <div className="bg-[#2A3A4E]/30 border border-[#3A4A5E] rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-[#6EEBD4] mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">+2.347 Alunos</h4>
              <p className="text-gray-300 text-sm">Comunidade ativa e resultados comprovados</p>
            </div>
            <div className="bg-[#2A3A4E]/30 border border-[#3A4A5E] rounded-2xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-[#6EEBD4] mx-auto mb-4" />
              <h4 className="text-white font-bold mb-2">95% de Aprovação</h4>
              <p className="text-gray-300 text-sm">Avaliação máxima entre nossos usuários</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DOS CARTÕES COM IMAGENS E INFORMAÇÕES
// ===================================================================
function FeaturesCardsSection() {
  const features = [
    {
      image: brainAIImg,
      title: "Ferramenta Estratégica",
      description: "Tecnologia de ponta que se adapta ao seu estilo de aprendizado",
      icon: <Brain className="w-6 h-6 text-[#6EEBD4]" />
    },
    {
      image: dataAnalysisImg,
      title: "Análise de Dados",
      description: "Insights profundos baseados em dados",
      icon: <BarChart className="w-6 h-6 text-[#6EEBD4]" />
    },
    {
      image: neuralNetworkImg,
      title: "Ecossistema de IA",
      description: "Sistema que evolui constantemente com suas necessidades",
      icon: <Cpu className="w-6 h-6 text-[#6EEBD4]" />
    },
    {
      image: digitalToolsImg,
      title: "Ferramentas Digitais",
      description: "Conjunto completo de recursos para maximizar sua produtividade",
      icon: <Code className="w-6 h-6 text-[#6EEBD4]" />
    },
    {
      image: platosCaveImg,
      title: "Metodologia Comprovada",
      description: "Baseado nas mais eficientes estratégias de aprendizado acelerado",
      icon: <BookOpen className="w-6 h-6 text-[#6EEBD4]" />
    },
    {
      image: produtividadeImg,
      title: "Otimização de Tempo",
      description: "Reduza em 70% o tempo necessário para dominar novas habilidades",
      icon: <TrendingUp className="w-6 h-6 text-[#6EEBD4]" />
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              TECNOLOGIA AVANÇADA
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Recursos que <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Transformam Resultados</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Descubra as ferramentas e tecnologias que tornam nosso sistema único no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-[#1A222E] rounded-2xl border border-[#2A3A4E] overflow-hidden hover:border-[#3DE4CF] transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A222E] to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DE PROVA SOCIAL
// ===================================================================
function SocialProofSection() {
  const testimonials = [
    {
      image: testimonial1Img,
      name: "Carlos Silva",
      role: "Estudante de Medicina",
      text: "O Nexus revolucionou minha forma de estudar. Em 3 semanas, minhas notas aumentaram 47%!",
      rating: 5
    },
    {
      image: testimonial2Img,
      name: "Mariana Costa",
      role: "Profissional de Marketing",
      text: "Finalmente consegui organizar meus estudos e trabalho. A IA realmente entende minhas necessidades!",
      rating: 5
    },
    {
      image: testimonial3Img,
      name: "Ricardo Almeida",
      role: "Concurseiro",
      text: "Depois de 5 anos tentando, passei no concurso dos meus sonhos usando o sistema Nexus!",
      rating: 5
    }
  ];

  return (
    <AnimatedSection>
      <section id="social-proof" className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              RESULTADOS REAIS
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              O Que Nossos <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Alunos Dizem</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Mais de 2.347 pessoas já transformaram seus resultados com nossa metodologia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-6 hover:border-[#3DE4CF] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#6EEBD4] mb-3 opacity-50" />
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">2.347+</div>
                <div className="text-gray-400 text-sm">Alunos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">4.9/5</div>
                <div className="text-gray-400 text-sm">Avaliação Média</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">Taxa de Aprovação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">47%</div>
                <div className="text-gray-400 text-sm">Aumento em Notas</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DO MINI VÍDEO
// ===================================================================
function MiniVideoSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              DEMONSTRAÇÃO RÁPIDA
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Veja o Sistema <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Em Ação</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Em apenas 60 segundos, entenda como a plataforma funciona na prática
            </p>
          </div>

          <div className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-4 sm:p-6 shadow-2xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <video
                controls
                className="w-full h-full object-cover"
                poster={servicosIAImg}
              >
                <source src={logoVideo} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center p-4 bg-[#2A3A4E]/30 rounded-lg border border-[#3A4A5E]">
                <Zap className="w-6 h-6 text-[#6EEBD4] mb-2" />
                <span className="text-white text-sm font-medium">Configuração em 5min</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#2A3A4E]/30 rounded-lg border border-[#3A4A5E]">
                <Brain className="w-6 h-6 text-[#6EEBD4] mb-2" />
                <span className="text-white text-sm font-medium">IA Personalizada</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#2A3A4E]/30 rounded-lg border border-[#3A4A5E]">
                <TrendingUp className="w-6 h-6 text-[#6EEBD4] mb-2" />
                <span className="text-white text-sm font-medium">Resultados em 7 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1A222E] overflow-hidden">
      {/* Header */}
      <header className="fixed w-full bg-[#1A222E]/90 backdrop-blur-md border-b border-[#2A3A4E] z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={novaImagemLogo} alt="NEXUS Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">Início</Link>
              <Link to="/detalhes" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">Detalhes</Link>
              <Link to="/faq" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">FAQ</Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">Quem Somos</Link>
            </div>

            {/* Botão Mobile */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#2A3A4E] pt-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">Início</Link>
                <Link to="/detalhes" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">Detalhes</Link>
                <Link to="/faq" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">FAQ</Link>
                <Link to="/quem-somos" className="text-gray-300 hover:text-[#6EEBD4] transition-colors">Quem Somos</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-20">
        <VideoApresentacao />
        <AIAttentionSection />
        <IATransformationSection />
        <FeaturesCardsSection />
        <SocialProofSection />
        <MiniVideoSection />
        <ProductSection />
      </main>

      {/* Footer */}
      <AnimatedSection>
        <footer className="border-t border-[#2A3A4E] bg-[#1A222E]/60 py-6 sm:py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                  <img src={novaImagemLogo} alt="NEXUS Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                  <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                    NEXUS
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Sistema Completo de Alta Performance com IA
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Links Úteis</h4>
                <div className="space-y-1 sm:space-y-2">
                  <Link to="/detalhes" className="block text-gray-300 hover:text-[#6EEBD4] transition-colors text-sm">
                    Detalhes do Sistema
                  </Link>
                  <Link to="/faq" className="block text-gray-300 hover:text-[#6EEBD4] transition-colors text-sm">
                    Perguntas Frequentes
                  </Link>
                  <Link to="/quem-somos" className="block text-gray-300 hover:text-[#6EEBD4] transition-colors text-sm">
                    Quem Somos
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Suporte e Social</h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">
                  Dúvidas? Entre em contato ou siga-nos.
                </p>
                <a 
                  href="https://www.instagram.com/nexus0rigin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-gray-300 hover:text-[#6EEBD4] transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  @nexus0rigin
                </a>
              </div>
            </div>

            <div className="border-t border-[#2A3A4E] mt-4 sm:mt-6 pt-4 sm:pt-6 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">
                © 2025 NEXUS. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detalhes" element={<ProductDetails />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
    </Routes>
  );
}

export default App;
