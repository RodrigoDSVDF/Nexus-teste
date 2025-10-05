import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Zap, Target, Globe, Key, Rocket, BookOpen, Brain, TrendingUp, CheckCircle, Sparkles, LayoutList, Menu, X, Instagram } from 'lucide-react';
import QuemSomos from './pages/QuemSomos.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import FAQ from './pages/FAQ.jsx';
import './App.css';

// Importando TODOS os componentes de animação
import AnimatedSection from './components/ui/AnimatedSection.jsx';
import AnimatedFromLeft from './components/ui/AnimatedFromLeft.jsx';
import AnimatedFromRight from './components/ui/AnimatedFromRight.jsx';
import ScrollingBanner from './components/ui/ScrollingBanner.jsx';

// Importando as imagens existentes
import brainNetworkImg from './assets/1000393266.jpg';
import platosCaveImg from './assets/1000396070.jpg';
import digitalToolsImg from './assets/1000395915.jpg';
import dataAnalysisImg from './assets/1000395918.jpg';
import testimonial1Img from './assets/1000396866.jpg';
import testimonial2Img from './assets/1000396868.jpg';
import testimonial3Img from './assets/1000396870.jpg';
import neuralNetworkImg from './assets/1000393264.jpg';
import brainAIImg from './assets/1000393262.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import novaImagemLogo from './assets/1000393277.png';

// Importando o vídeo do logo
import logoVideo from './assets/logo-video.mp4';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // FUNDO PRINCIPAL APLICADO
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      {/* Navigation */}
      {/* NAVBAR COM NOVAS CORES DE FUNDO E BORDA */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1016]/80 backdrop-blur-sm border-b border-[#1C2A35]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={novaImagemLogo} alt="NEXUS Logo" className="w-10 h-10 rounded-full" />
              {/* GRADIENTE DE TEXTO COM NOVA COR DE ACENTO */}
              <span className="text-xl font-bold bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {/* LINKS COM NOVA COR DE ACENTO */}
              <Link to="/detalhes" className="text-gray-300 hover:text-[#5EEAD4] transition-colors">
                Detalhes do Manual
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-[#5EEAD4] transition-colors">
                FAQ
              </Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-[#5EEAD4] transition-colors">
                Quem Somos
              </Link>
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                {/* BOTÃO COM NOVO GRADIENTE DE ACENTO E TEXTO ESCURO */}
                <Button size="sm" className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] hover:from-[#5EEAD4]/90 hover:to-[#2DD4BF]/90 text-[#0B1016] font-semibold">
                  Comprar Agora
                </Button>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#1C2A35]">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/detalhes" 
                  className="text-gray-300 hover:text-[#5EEAD4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Detalhes do Manual
                </Link>
                <Link 
                  to="/faq" 
                  className="text-gray-300 hover:text-[#5EEAD4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/quem-somos" 
                  className="text-gray-300 hover:text-[#5EEAD4] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quem Somos
                </Link>
                <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] hover:from-[#5EEAD4]/90 hover:to-[#2DD4BF]/90 text-[#0B1016] font-semibold w-full">
                    Comprar Agora
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* BLURS DECORATIVOS COM A NOVA PALETA ESCURA */}
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#14222E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="absolute inset-0 opacity-10">
          <img src={brainNetworkImg} alt="Neural Network Background" className="w-full h-full object-cover" />
        </div>

        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12 mt-20">
            {/* BADGE COM NOVA COR DE ACENTO */}
            <div className="inline-flex items-center px-6 py-3 bg-[#2DD4BF]/20 border border-[#2DD4BF]/30 rounded-full text-[#5EEAD4] text-sm font-medium mb-8">
              <Zap className="w-4 h-4 mr-2" />
              Nova Era Informacional
            </div>
            
            <div className="mb-8">
              <video 
                src={logoVideo} 
                autoPlay
                loop
                muted
                playsInline
                className="w-56 h-auto mx-auto mb-6 rounded-2xl"
              >
                Seu navegador não suporta o vídeo.
              </video>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg break-words">
              Produtividade em Alto Nível
            </h1>

            {/* TÍTULO COM NOVO GRADIENTE DE ACENTO */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent drop-shadow-lg mb-4">
              Guia de Performance 
            </h2>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold drop-shadow-lg">
              <span className="text-white">com </span>
              {/* DESTAQUE COM NOVA COR DE ACENTO E BRILHO */}
              <span className="text-[#5EEAD4] drop-shadow-[0_0_8px_#2DD4BF]">
                Inteligência Artificial 
              </span>
            </h3>

            <div className="mt-8 text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light flex flex-col items-center text-center space-y-2">
              <span>Domine a era da informação.</span>
              <span>Transforme dados em inteligência.</span>
              <span>Faça da inovação seu diferencial.</span>
              <span className="font-semibold text-[#5EEAD4] mt-2">Seja o protagonista do futuro.</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                {/* BOTÃO PRINCIPAL COM NOVO GRADIENTE E SOMBRA */}
                <Button size="md" className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] hover:from-[#5EEAD4]/90 hover:to-[#2DD4BF]/90 text-[#0B1016] px-4 py-2 text-sm font-bold rounded-xl shadow-2xl hover:shadow-[#2DD4BF]/30 transition-all duration-300 transform hover:scale-105 border-2 border-[#5EEAD4]/50">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Quero meu Manual de Alta Performance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              
              <Link to="/detalhes">
                {/* BOTÃO SECUNDÁRIO COM NOVAS CORES */}
                <Button variant="outline" size="lg" className="border-[#2DD4BF]/50 text-[#5EEAD4] hover:bg-[#2DD4BF]/10 hover:text-[#5EEAD4] px-6 py-4 text-lg font-semibold rounded-xl">
                  <LayoutList className="w-5 h-5 mr-2" />
                  Ver Conteúdo Completo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Autoridade Conceitual - NOVA DINÂMICA HORIZONTAL */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0">
          <img src={platosCaveImg} alt="Caverna de Platão - Era Digital" className="w-full h-full object-cover" />
          {/* OVERLAY COM NOVO GRADIENTE DE FUNDO */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1016]/85 to-[#14222E]/85"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                {/* TEXTO EM DESTAQUE COM NOVO GRADIENTE */}
                Por que o <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Nexus</span> é diferente?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Acesso À IA tornou-se um recurso comum. A habilidade de comandá-la é o novo e raro monopólio do talento.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedFromLeft>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  {/* ÍCONES COM NOVO GRADIENTE SUTIL */}
                  <div className="w-14 h-14 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Era Informacional</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      No atual modelo econômico informacional, a fonte real da produtividade está na tecnologia capaz de transformar dados em conhecimento, informação em estratégia e comunicação em resultados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Saia da Caverna Digital</h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      Como na alegoria de Platão, muitos vivem presos às sombras da desinformação digital. O NEXUS é sua saída para a luz do conhecimento de valor real.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedFromLeft>
            <AnimatedFromRight delay={0.4}>
              <div className="relative">
                {/* CARD COM NOVAS CORES DE FUNDO E BORDA */}
                <div className="bg-[#14222E]/90 p-8 rounded-3xl border border-[#1C2A35] backdrop-blur-sm shadow-2xl">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {/* TEXTOS EM DESTAQUE COM NOVA COR */}
                    O Nexus foi criado exatamente para isso: ser um <strong className="text-[#2DD4BF]">guia prático</strong> que alia alta performance pessoal e profissional com o poder da Inteligência Artificial, ajudando você a se posicionar no <strong className="text-[#5EEAD4]">centro dessa revolução</strong>.
                  </p>
                </div>
              </div>
            </AnimatedFromRight>
          </div>
        </div>
      </section>

      {/* Seção de Ferramentas Práticas */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Ferramentas Práticas</span> que Transformam
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Descubra as tecnologias e metodologias que estão revolucionando a forma como trabalhamos e pensamos
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <AnimatedSection delay={0.2}>
              {/* CARD COM NOVAS CORES E BORDAS */}
              <div className="group bg-gradient-to-br from-[#14222E]/30 to-[#0B1016]/30 p-8 rounded-3xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                  <div className="absolute inset-0 opacity-20">
                    <img src={digitalToolsImg} alt="Ferramentas Digitais" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Mapa</h3>
                    <p className="text-gray-300">Guia que conecta você ao modelo econômico informacional</p>
                  </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-[#0D3A46]/30 to-[#14222E]/30 p-8 rounded-3xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-20">
                  <img src={dataAnalysisImg} alt="Análise de Dados" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Toolbox 4.0</h3>
                  <p className="text-gray-300">Ferramentas inteligentes para orientação de sua jornada no futuro digital</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-[#14222E]/30 to-[#0D3A46]/30 p-8 rounded-3xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-20">
                  <img src={brainAIImg} alt="IA Cognitiva" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Hub de Ação</h3>
                  <p className="text-gray-300">Um laboratório onde ideias viram decisões práticas</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      {/* SEÇÃO COM FUNDO INTERMEDIÁRIO */}
      <section className="py-32 px-4 bg-[#14222E]/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                O que você vai conquistar com o <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Manual Nexus</span>
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-[#14222E]/30 to-[#0B1016]/30 p-10 rounded-3xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-10">
                  <img src={neuralNetworkImg} alt="Neural Network" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Produtividade Exponencial</h3>
                  <p className="text-gray-300 text-lg">Elimine a sobrecarga digital e a sensação de estar sempre atrasado. Descubra como a IA pode ser sua assistente pessoal 24 horas por dia, trazendo foco, organização e resultados tangíveis todos os dias</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-[#0D3A46]/30 to-[#14222E]/30 p-10 rounded-3xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-10">
                  <img src={xadrezStrategiaImg} alt="Estratégia e Clareza" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Clareza Estratégica</h3>
                  <p className="text-gray-300 text-lg">Acabe com a paralisia por análise e a dúvida. Tenha um framework mental e tecnológico para cortar o ruído, priorizar o essencial e enxergar o caminho mais claro e rápido para seus objetivos</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-[#14222E]/30 to-[#0D3A46]/30 p-10 rounded-3xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-10">
                  <img src={brainAIImg} alt="Brain AI" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Mentalidade Informacional</h3>
                  <p className="text-gray-300 text-lg">Desenvolva a skill mais valiosa do século XXI: a capacidade de aprender, desaprender e reaprender rapidamente. Esteja sempre à frente, adaptando-se às novas tecnologias e tornando-se insubstituível</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAIXA DE ROLAGEM */}
      <div className="py-8 bg-[#0B1016] border-y-2 border-[#1C2A35]">
        <ScrollingBanner speed={20}>
          <div className="flex items-center text-xl font-bold text-gray-300">
            {/* ÍCONES COM NOVA COR DE ACENTO */}
            <Brain className="w-7 h-7 mx-6 text-[#5EEAD4]" />
            <span>ENGENHARIA DE CONTEXTO</span>
            <Sparkles className="w-7 h-7 mx-6 text-[#2DD4BF]" />
            <span>ALTA PERFORMANCE</span>
            <Target className="w-7 h-7 mx-6 text-[#5EEAD4]" />
            <span>FOCO ESTRATÉGICO</span>
            <TrendingUp className="w-7 h-7 mx-6 text-[#2DD4BF]" />
            <span>CRESCIMENTO ACELERADO &nbsp;</span>
          </div>
        </ScrollingBanner>
      </div>

      {/* SEÇÃO DO PORTFÓLIO */}
      <AnimatedSection>
        <section id="portfolio" className="py-32 px-4 bg-[#0B1016]/50">
           <div className="max-w-6xl mx-auto text-center">
            {/* BADGE COM NOVA COR */}
            <div className="inline-flex items-center px-6 py-3 bg-[#0D3A46]/20 border border-[#0D3A46]/30 rounded-full text-[#5EEAD4] text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Resultados Comprovados
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Conheça Nosso <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Trabalho na Prática</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Explore nosso portfólio e veja como aplicamos os conceitos do Manual NEXUS para gerar resultados reais em projetos inovadores.
            </p>
            
            <a 
              href="/portfolio-nexus.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-to-r from-[#2DD4BF] to-[#0D3A46] hover:from-[#2DD4BF]/90 hover:to-[#0D3A46]/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-[#2DD4BF]/40 transition-all duration-300 transform hover:scale-105 border-2 border-[#2DD4BF]/50">
                <BookOpen className="w-6 h-6 mr-3" />
                Visualizar Portfólio
              </Button>
            </a>
          </div>
        </section>
      </AnimatedSection>
      
      {/* SEÇÃO DE PROVA SOCIAL - NOVA DINÂMICA HORIZONTAL */}
      <section id="depoimentos" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Transformações <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Reais</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Veja o que profissionais como você estão dizendo sobre o Manual NEXUS.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedFromLeft delay={0.2}>
              {/* CARD DE DEPOIMENTO COM NOVAS CORES */}
              <div className="bg-[#14222E]/50 p-8 rounded-2xl border border-[#1C2A35] flex flex-col items-center text-center h-full">
                <img src={testimonial1Img} alt="Depoimento de Aluno 1" className="w-20 h-20 rounded-full border-2 border-[#2DD4BF] mb-6" />
                <p className="text-gray-300 italic mb-6">
                  "O NEXUS mudou completamente minha forma de pensar sobre a tecnologia. Ganhei clareza e voltei me dedicar ao estudos. É um divisor de águas."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-lg">José Diego</h4>
                  <p className="text-gray-400">Gerente de Projetos</p>
                </div>
              </div>
            </AnimatedFromLeft>
            <AnimatedSection delay={0.4}>
              <div className="bg-[#14222E]/50 p-8 rounded-2xl border border-[#1C2A35] flex flex-col items-center text-center h-full">
                <img src={testimonial2Img} alt="Depoimento de Aluno 2" className="w-20 h-20 rounded-full border-2 border-[#2DD4BF] mb-6" />
                <p className="text-gray-300 italic mb-6">
                  "Eu achava que entendia de organização, mas o módulo sobre 'Second Brain' e a forma de estruturar projetos me levaram a outro nível. Indispensável para quem busca alta performance."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-lg">Lucas Costa</h4>
                  <p className="text-gray-400">Desenvolvedor Sênior</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedFromRight delay={0.2}>
              <div className="bg-[#14222E]/50 p-8 rounded-2xl border border-[#1C2A35] flex flex-col items-center text-center h-full">
                 <img src={testimonial3Img} alt="Depoimento de Aluno 3" className="w-20 h-20 rounded-full border-2 border-[#2DD4BF] mb-6" />
                <p className="text-gray-300 italic mb-6">
                  "Como empreendedor, tomar decisões rápidas e estratégicas é crucial. Os frameworks do Módulo 5 são ouro puro. O retorno sobre o investimento foi imediato."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-lg">Juliana Pereira</h4>
                  <p className="text-gray-400">CEO & Fundadora</p>
                </div>
              </div>
            </AnimatedFromRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-32 px-4">
           <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para elevar sua performance ao <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">próximo nível</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Junte-se a milhares de profissionais que já transformaram sua performance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                {/* BOTÃO FINAL CTA COM NOVO GRADIENTE DE URGÊNCIA */}
                <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] hover:from-[#F59E0B]/90 hover:to-[#D946EF]/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-[#D946EF]/40 transition-all duration-300 transform hover:scale-105 border-2 border-[#F59E0B]/50 animate-pulse">
                  <BookOpen className="w-6 h-6 mr-3" />
                  Quero o Manual NEXUS Agora
                </Button>
              </a>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              🛡️ Garantia de 7 dias - Satisfação garantida ou seu dinheiro de volta
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection>
        {/* FOOTER COM NOVAS CORES DE BORDA E FUNDO */}
        <footer className="border-t border-[#1C2A35] bg-[#0B1016]/50 py-12 px-4">
           <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img src={novaImagemLogo} alt="NEXUS Logo" className="w-10 h-10 rounded-full" />
                  <span className="text-xl font-bold bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">
                    NEXUS
                  </span>
                </div>
                <p className="text-gray-400">
                  Manual de Alta Performance com Inteligência Artificial
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
                <div className="space-y-2">
                  <Link to="/detalhes" className="block text-gray-400 hover:text-[#5EEAD4] transition-colors">
                    Detalhes do Manual
                  </Link>
                  <Link to="/faq" className="block text-gray-400 hover:text-[#5EEAD4] transition-colors">
                    Perguntas Frequentes
                  </Link>
                  <Link to="/quem-somos" className="block text-gray-400 hover:text-[#5EEAD4] transition-colors">
                    Quem Somos
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Suporte e Social</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Dúvidas? Entre em contato ou siga-nos.
                </p>
                <a href="https://www.instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-[#5EEAD4] transition-colors">
                  <Instagram className="w-5 h-5 mr-2" />
                  @nexus0rigin
                </a>
              </div>
            </div>
            
            <div className="border-t border-[#1C2A35] mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
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
