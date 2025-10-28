import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, LayoutList, Menu, X, Instagram, Book, BarChart3, Bed, UserCheck, Play, Code, Download, Shield, Clock, Users, Lightbulb, Cpu, BarChart, Workflow } from 'lucide-react';
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
import brainAIImg from './assets/1000393262.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import novaImagemLogo from './assets/1000393277.png';
import dataAnalysisImg from './assets/1000395918.jpg';
import servicosIAImg from './assets/servicos-ia.jpg';
import produtoImg from './assets/produto.jpg';
import logoVideo from './assets/logo-video.mp4';

// ===================================================================
// COMPONENTE HEADER
// ===================================================================
function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A222E]/80 backdrop-blur-md border-b border-[#2A3A4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src={novaImagemLogo} alt="NEXUS Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
            <span className="text-xl font-bold bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium">Início</Link>
            <Link to="/detalhes" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium">Detalhes</Link>
            <Link to="/faq" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium">FAQ</Link>
            <Link to="/quem-somos" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium">Quem Somos</Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2A3A4E]">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium py-2">Início</Link>
              <Link to="/detalhes" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium py-2">Detalhes</Link>
              <Link to="/faq" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium py-2">FAQ</Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-[#6EEBD4] transition-colors font-medium py-2">Quem Somos</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ===================================================================
// COMPONENTE VÍDEO DE LOGO ANIMADO (NO INÍCIO)
// ===================================================================
function VideoLogoSection() {
  return (
    <AnimatedSection>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 bg-gradient-to-br from-[#0F172A] to-[#1A222E]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-gradient-to-br from-[#6EEBD4] to-[#3DE4CF] rounded-2xl shadow-2xl">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-12 h-12 sm:w-16 sm:h-16"
              >
                <source src={logoVideo} type="video/mp4" />
                Seu navegador não suporta o vídeo.
              </video>
            </div>
            
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#6EEBD4]/30 border border-[#6EEBD4]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              SISTEMA DE ALTA PERFORMANCE COM IA
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Domine a Arte de 
              <span className="block bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                Aprender com IA
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              O sistema completo que une inteligência artificial avançada com técnicas comprovadas 
              para maximizar seu aprendizado e produtividade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] hover:from-[#5ED9C6] hover:to-[#2DD4BF] text-[#1A222E] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline" className="border-[#6EEBD4] text-[#6EEBD4] hover:bg-[#6EEBD4] hover:text-[#1A222E] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE SCROLLING BANNER
// ===================================================================
function BannerSection() {
  return (
    <ScrollingBanner />
  );
}

// ===================================================================
// COMPONENTE PROBLEMA X SOLUÇÃO
// ===================================================================
function ProblemSolutionSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              PROBLEMA X SOLUÇÃO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              A <span className="text-red-400">Maior Dor</span> vs Nossa{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                Solução Definitiva
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <AnimatedFromLeft>
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <X className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-400">O PROBLEMA ATUAL</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  95% dos estudantes e profissionais ainda usam métodos ultrapassados que:
                </p>
                <ul className="space-y-3">
                  {[
                    "Perdem horas revisando conteúdo desnecessário",
                    "Esquecem 80% do que estudaram em 30 dias",
                    "Não conseguem aplicar o conhecimento na prática",
                    "Sofrem com falta de foco e procrastinação"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedFromLeft>

            <AnimatedFromRight>
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-400">SOLUÇÃO NEXUS</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Com nosso sistema de IA, você vai:
                </p>
                <ul className="space-y-3">
                  {[
                    "Aprender 3x mais rápido com métodos científicos",
                    "Reter 92% mais informação com repetição espaçada",
                    "Aplicar conhecimento imediatamente com projetos práticos",
                    "Manter foco máximo com técnicas de produtividade avançada"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedFromRight>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE METODOLOGIA AVANÇADA
// ===================================================================
function MethodologySection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0F172A] to-[#1A222E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Workflow className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              METODOLOGIA CIENTÍFICA
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Baseado em{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                Evidências Científicas
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                title: "Neuroplasticidade",
                description: "Seu cérebro se adapta e se reorganiza com os estímulos certos"
              },
              {
                icon: Zap,
                title: "Repetição Espaçada",
                description: "Algoritmos que otimizam o momento exato de revisão"
              },
              {
                icon: Target,
                title: "Aprendizado Ativo",
                description: "Métodos que forçam sua mente a recuperar informações"
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#1A222E] border border-[#2A3A4E] rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-[#3DE4CF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#6EEBD4]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={brainNetworkImg} 
                  alt="Rede Neural - Metodologia Científica" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Como Funciona na Prática</h3>
                <p className="text-gray-300 mb-6">
                  Nossa metodologia combina os princípios mais avançados da neurociência com 
                  algoritmos de IA para criar um sistema de aprendizado personalizado.
                </p>
                <div className="space-y-4">
                  {[
                    "Análise do seu perfil de aprendizagem",
                    "Plano de estudos personalizado em tempo real",
                    "Revisões no momento exato para máxima retenção",
                    "Métricas detalhadas do seu progresso"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#6EEBD4] mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE RECURSOS PRINCIPAIS
// ===================================================================
function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "IA de Aprendizado Adaptativo",
      description: "Sistema que se adapta ao seu estilo de aprendizado e evolui com você",
      image: brainAIImg
    },
    {
      icon: Zap,
      title: "Processamento Acelerado",
      description: "Técnicas comprovadas para absorver informações 3x mais rápido",
      image: dataAnalysisImg
    },
    {
      icon: Target,
      title: "Foco Laser",
      description: "Elimine distrações e mantenha concentração máxima por horas",
      image: xadrezStrategiaImg
    },
    {
      icon: BookOpen,
      title: "Memória Expandida",
      description: "Amplie sua capacidade de retenção com algoritmos de repetição espaçada",
      image: servicosIAImg
    },
    {
      icon: BarChart3,
      title: "Métricas em Tempo Real",
      description: "Acompanhe seu progresso com analytics detalhados",
      image: brainNetworkImg
    },
    {
      icon: Rocket,
      title: "Implementação Imediata",
      description: "Comece a ver resultados desde o primeiro dia de uso",
      image: testimonial1Img
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0F172A] to-[#1A222E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              RECURSOS AVANÇADOS
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Tecnologia de{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                Ponta a Ponta
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Cada recurso foi meticulosamente desenvolvido para maximizar seu potencial cognitivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#1A222E] border border-[#2A3A4E] rounded-2xl p-6 hover:border-[#3DE4CF]/30 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A222E] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#3DE4CF]/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#6EEBD4]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE VÍDEO DE APRESENTAÇÃO
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
// COMPONENTE TRANSFORMAÇÃO COM IA
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
              <div className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-6 shadow-2xl">
                <img 
                  src={brainAIImg} 
                  alt="Revolução do Aprendizado com IA" 
                  className="w-full h-auto rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-4">Aprendizado Inteligente</h3>
                <p className="text-gray-300">
                  Nossa plataforma utiliza algoritmos avançados de IA para personalizar seu aprendizado e maximizar seus resultados.
                </p>
              </div>
            </AnimatedFromLeft>
            <AnimatedFromRight>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3DE4CF]/20 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-[#6EEBD4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Memória Expandida</h3>
                    <p className="text-gray-300">Amplie sua capacidade de retenção com técnicas comprovadas pela neurociência.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3DE4CF]/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#6EEBD4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Velocidade de Processamento</h3>
                    <p className="text-gray-300">Processe informações complexas em tempo recorde com nossos métodos exclusivos.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3DE4CF]/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#6EEBD4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Foco Laser</h3>
                    <p className="text-gray-300">Elimine distrações e mantenha o foco nos seus objetivos de aprendizado.</p>
                  </div>
                </div>
              </div>
            </AnimatedFromRight>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DEPOIMENTOS
// ===================================================================
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Estudante de Medicina",
      image: testimonial1Img,
      content: "O Sistema Nexus revolucionou minha forma de estudar. Em 3 meses, minha retenção de conteúdo aumentou 300%!"
    },
    {
      name: "Mariana Santos",
      role: "Profissional de Marketing",
      image: testimonial2Img,
      content: "Finalmente consegui organizar meus estudos e trabalho. A IA adaptativa é incrível - ela realmente aprende com você."
    },
    {
      name: "João Pereira",
      role: "Concurseiro",
      image: testimonial3Img,
      content: "Passei em 2º lugar no concurso dos meus sonhos usando o sistema. As técnicas de repetição espaçada são mágicas!"
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0F172A] to-[#1A222E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              QUEM JÁ USOU RECOMENDA
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Resultados que{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                Falam por Si
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#1A222E] border border-[#2A3A4E] rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE PERGUNTAS FREQUENTES
// ===================================================================
function FAQPreviewSection() {
  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "A maioria dos usuários reporta melhorias significativas já na primeira semana de uso."
    },
    {
      question: "Preciso ter conhecimento em tecnologia?",
      answer: "Não! O sistema foi desenvolvido para ser intuitivo e qualquer pessoa pode usar."
    },
    {
      question: "O acesso é vitalício?",
      answer: "Sim, após a aquisição você tem acesso permanente a todas as atualizações futuras."
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Book className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              DÚVIDAS FREQUENTES
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Tudo o que você precisa{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                saber
              </span>
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1A222E] border border-[#2A3A4E] rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/faq">
              <Button variant="outline" className="border-[#6EEBD4] text-[#6EEBD4] hover:bg-[#6EEBD4] hover:text-[#1A222E]">
                Ver Todas as Perguntas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DO PRODUTO COM BOTÃO DE COMPRA (NOVO)
// ===================================================================
function ProductSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            PRODUTO EXCLUSIVO
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Adquira o <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Sistema Nexus</span> Agora
          </h2>
          
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Transforme sua produtividade com nosso sistema completo de IA
          </p>

          {/* Imagem do produto */}
          <div className="mb-8 max-w-2xl mx-auto">
            <img 
              src={produtoImg} 
              alt="Sistema Nexus - Produto Completo" 
              className="mx-auto rounded-2xl shadow-2xl border border-[#2A3A4E] w-full h-auto"
            />
          </div>

          {/* Botão de compra */}
          <div className="mb-8">
            <Button className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] hover:from-[#5ED9C6] hover:to-[#2DD4BF] text-[#1A222E] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Zap className="w-5 h-5 mr-2" />
              Comprar Agora - Apenas R$ 97,00
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-[#6EEBD4] mr-2" />
              <span className="text-sm">Acesso Imediato</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-[#6EEBD4] mr-2" />
              <span className="text-sm">Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-[#6EEBD4] mr-2" />
              <span className="text-sm">Suporte Prioritário</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE FOOTER
// ===================================================================
function Footer() {
  return (
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
              <a href="https://www.instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-300 hover:text-[#6EEBD4] transition-colors text-sm">
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
  );
}

// ===================================================================
// COMPONENTE HOMEPAGE PRINCIPAL
// ===================================================================
function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1A222E]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* VÍDEO NO INÍCIO - AGORA CORRETAMENTE POSICIONADO */}
      <VideoLogoSection />
      <BannerSection />
      <ProblemSolutionSection />
      <MethodologySection />
      <FeaturesSection />
      <VideoApresentacao />
      <IATransformationSection />
      <TestimonialsSection />
      <FAQPreviewSection />
      
      {/* NOVA SEÇÃO DO PRODUTO COM IMAGEM E BOTÃO DE COMPRA */}
      <ProductSection />
      
      <Footer />
    </div>
  );
}

// ===================================================================
// COMPONENTE PRINCIPAL APP
// ===================================================================
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
