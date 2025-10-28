import { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'; // Adicionei BrowserRouter
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
// COMPONENTE DO VÍDEO DE APRESENTAÇÃO
// ===================================================================
function VideoApresentacao() {
  
  // Função de placeholder para evitar erros.
  // Você precisa implementar a lógica para rolar até a seção de depoimentos.
  const scrollToDepoimentos = () => {
    const depoimentosSection = document.getElementById('depoimentos'); // Supondo que sua seção de depoimentos tenha o id="depoimentos"
    if (depoimentosSection) {
      depoimentosSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Seção 'depoimentos' não encontrada.");
    }
  };

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
                  {/* Este estava vazio, mantive assim */}
                </div>
              </div>
              
              {/* Lista de problemas - Corrigi um grid aninhado que parecia errado */}
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
                    onClick={scrollToDepoimentos} // Corrigido para chamar a função
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
// COMPONENTE DA TRANSFORMAÇÃO COM IA
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
              {/* ATENÇÃO: Esta coluna está vazia. 
                Você precisa adicionar o conteúdo aqui (provavelmente uma imagem ou mais texto).
              */}
              <div className="text-white p-4">Coluna 1 (Adicione seu conteúdo)</div>
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
                  {/* AQUI ESTAVA O ERRO! O FOOTER ESTAVA AQUI DENTRO.
                    Eu o movi para fora, para seu próprio componente (veja abaixo).
                  */}
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
// NOVO COMPONENTE FOOTER (Rodapé) - SEPARADO
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
  );
}

// ===================================================================
// NOVO COMPONENTE HOMEPAGE - PARA ORGANIZAR AS SEÇÕES
// ===================================================================
function HomePage() {
  return (
    // Usei um <main> para envolver todas as seções
    <main>
      <VideoApresentacao />
      <IATransformationSection />
      <ProductSection />
      {/* Aqui você pode adicionar outras seções que estão faltando, 
        como a de Depoimentos (id="depoimentos") 
      */}
      <Footer />
    </main>
  );
}


// ===================================================================
// COMPONENTE APP - CORRIGIDO PARA USAR O ROUTER CORRETAMENTE
// ===================================================================
function App() {
  return (
    // Você precisa de um <BrowserRouter> envolvendo suas rotas.
    // Se ele já estiver no seu `main.jsx`, não precisa adicionar aqui.
    // Se não, descomente a linha abaixo e a importação no topo.
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detalhes" element={<ProductDetails />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
