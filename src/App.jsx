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
import Typewriter from './components/ui/Typewriter.jsx'; 

// Imagens e vídeo
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
import servicosIAImg from './assets/servicos-ia.jpg';
import produtividadeImg from './assets/produtividade.jpg';
import logoVideo from './assets/logo-video.mp4';

// ===================================================================
// COMPONENTE DA TRANSFORMAÇÃO COM IA
// ===================================================================
function IATransformationSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0B1016] to-[#14222E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-5 py-3 sm:px-7 sm:py-4 bg-[#2DD4BF]/20 border border-[#2DD4BF]/30 rounded-full text-[#5EEAD4] text-sm sm:text-base font-medium mb-6 sm:mb-8">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              REVOLUÇÃO DO APRENDIZADO
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Pare de Apenas <span className="text-gray-400">"Estudar"</span> e Comece a{' '}
              <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">
                Dominar de Verdade
              </span>
            </h2>
            <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Enquanto 95% das pessoas ainda "aprendem" como na era medieval, você terá um arsenal de IA que transforma informação em poder real
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
            <AnimatedFromLeft>
              <div className="space-y-8">
                <div className="bg-[#14222E]/50 p-7 rounded-2xl border border-[#1C2A35]">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                    <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-[#5EEAD4] mr-4" />
                    O Problema: Aprendizado Tradicional Está Obsoleto
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-lg sm:text-xl">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span><strong className="text-white">Você esquece 80%</strong> do que estuda em 30 dias</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span><strong className="text-white">Demora 6x mais tempo</strong> para dominar habilidades complexas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <span><strong className="text-white">Não consegue aplicar</strong> na prática o que aprende na teoria</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0D3A46]/30 p-7 rounded-2xl border border-[#2DD4BF]/20">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center">
                    <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-[#5EEAD4] mr-4" />
                    A Solução: IA Como Seu Mentor 24/7
                  </h3>
                  <ul className="space-y-4 text-gray-300 text-lg sm:text-xl">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Aprendizado personalizado</strong> que se adapta ao seu ritmo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Retenção 3x maior</strong> com técnicas baseadas em neurociência</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Aplicação imediata</strong> do conhecimento em projetos reais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedFromLeft>

            <AnimatedFromRight>
              <div className="bg-[#0B1016] p-7 rounded-2xl border border-[#1C2A35]">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                  Como a IA Transforma Seu Cérebro em Uma Máquina de Aprendizado
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-[#14222E]/50 rounded-xl border border-[#1C2A35] hover:border-[#2DD4BF]/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                      <Brain className="w-7 h-7 text-[#5EEAD4]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-2">Neuro-Aceleração</h4>
                      <p className="text-gray-300 text-lg">IA identifica seus padrões de aprendizado e cria rotas neuronais otimizadas</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-[#14222E]/50 rounded-xl border border-[#1C2A35] hover:border-[#2DD4BF]/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                      <Workflow className="w-7 h-7 text-[#5EEAD4]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-2">Memória Expandida</h4>
                      <p className="text-gray-300 text-lg">Sistema de repetição espaçada inteligente que nunca deixa você esquecer</p>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-[#14222E]/50 rounded-xl border border-[#1C2A35] hover:border-[#2DD4BF]/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-lg flex items-center justify-center mr-5 flex-shrink-0">
                      <BarChart className="w-7 h-7 text-[#5EEAD4]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl sm:text-2xl mb-2">Atualização Automática</h4>
                      <p className="text-gray-300 text-lg">Sempre aprendendo as tendências mais recentes do mercado automaticamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFromRight>
          </div>

          {/* Estatísticas Impactantes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <AnimatedSection delay={0.2}>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#14222E] to-[#0D3A46] rounded-2xl border border-[#2DD4BF]/20">
                <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-2 sm:mb-3">3x</div>
                <div className="text-white font-semibold text-lg sm:text-xl">Mais Rápido</div>
                <div className="text-gray-300 text-base">Aprendizado acelerado</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#0D3A46] to-[#14222E] rounded-2xl border border-[#2DD4BF]/20">
                <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-2 sm:mb-3">90%</div>
                <div className="text-white font-semibold text-lg sm:text-xl">Retenção</div>
                <div className="text-gray-300 text-base">Do conhecimento</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#14222E] to-[#0D3A46] rounded-2xl border border-[#2DD4BF]/20">
                <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-2 sm:mb-3">24/7</div>
                <div className="text-white font-semibold text-lg sm:text-xl">Mentoria</div>
                <div className="text-gray-300 text-base">IA sempre disponível</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#0D3A46] to-[#14222E] rounded-2xl border border-[#2DD4BF]/20">
                <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-2 sm:mb-3">10h+</div>
                <div className="text-white font-semibold text-lg sm:text-xl">Economia</div>
                <div className="text-gray-300 text-base">Por semana</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DA ANÁLISE DE DESEMPENHO DE ESTUDANTES
// ===================================================================
function StudentPerformanceSection() {
  return (
    <AnimatedSection>
      <section id="student-performance" className="py-16 sm:py-20 px-4 bg-[#0B1016]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Decifrando o <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Sucesso nos Exames</span>
            </h2>
            <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Uma análise de dados com 200 estudantes revelou os fatores-chave que impulsionam o desempenho acadêmico.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-2 space-y-8">
              <AnimatedFromLeft>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Principais Insights:</h3>
                  <ul className="space-y-4 text-gray-300 text-lg sm:text-xl">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                      <span><strong className="text-white">+1.56 pontos</strong> a cada hora extra de estudo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                      <span><strong className="text-white">84.1%</strong> da variação nas notas explicada pelos fatores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                      <span><strong className="text-white">+0.95 pontos</strong> por cada hora adicional de sono</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">Os 4 Pilares do Desempenho:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Book className="w-6 h-6 text-[#5EEAD4] mr-4" />
                      <span className="text-gray-300 text-lg sm:text-xl"><strong>Horas de Estudo:</strong> Fator mais decisivo</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="w-6 h-6 text-[#5EEAD4] mr-4" />
                      <span className="text-gray-300 text-lg sm:text-xl"><strong>Notas Anteriores:</strong> Indicador de sucesso</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-6 h-6 text-[#5EEAD4] mr-4" />
                      <span className="text-gray-300 text-lg sm:text-xl"><strong>Qualidade do Sono:</strong> Impacto direto</span>
                    </div>
                    <div className="flex items-center">
                      <UserCheck className="w-6 h-6 text-[#5EEAD4] mr-4" />
                      <span className="text-gray-300 text-lg sm:text-xl"><strong>Presença nas Aulas:</strong> Consistência é crucial</span>
                    </div>
                  </div>
                </div>
              </AnimatedFromLeft>
            </div>
            <div className="lg:col-span-3">
              <AnimatedFromRight>
                <div className="bg-[#14222E]/50 p-6 rounded-2xl border border-[#1C2A35] shadow-2xl hover:border-[#0D3A46] transition-all duration-300">
                  <iframe
                    src="https://app-dash-pj41.onrender.com/?embed=true"
                    height="500"
                    width="100%"
                    style={{ border: 'none', borderRadius: '8px' }}
                    title="Análise de Desempenho de Estudantes"
                    className="min-h-[400px] sm:min-h-[500px]"
                  >
                  </iframe>
                </div>
              </AnimatedFromRight>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE DO SISTEMA NEXUS
// ===================================================================
function NexusSystemSection() {
  return (
    <AnimatedSection>
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0B1016] to-[#14222E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-3 sm:px-7 sm:py-4 bg-[#2DD4BF]/20 border border-[#2DD4BF]/30 rounded-full text-[#5EEAD4] text-sm sm:text-base font-medium mb-6 sm:mb-8">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              SISTEMA COMPLETO
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Mais que um Manual: Um <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Sistema Completo</span> de Performance
            </h2>
            <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PDF + Vídeos Exclusivos + Software com Múltiplas IAs Integradas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* PDF */}
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#0D3A46] p-7 rounded-2xl border border-[#2DD4BF]/20 hover:border-[#2DD4BF] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#5EEAD4]" />
                  </div>
                  <h3 className="text-2xl sm:text-2xl font-bold text-white">Manual Premium</h3>
                </div>
                <ul className="text-gray-200 space-y-4 mb-6 flex-grow text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>47 técnicas comprovadas</strong> de produtividade com IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Scripts prontos</strong> para copiar e usar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Frameworks exclusivos</strong> de organização</span>
                  </li>
                </ul>
                <div className="bg-[#0B1016]/50 p-4 rounded-xl border border-[#1C2A35]">
                  <p className="text-[#5EEAD4] text-lg font-semibold">📚 PDF + Atualizações Vitalícias</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vídeos */}
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-[#0D3A46] to-[#14222E] p-7 rounded-2xl border border-[#2DD4BF]/20 hover:border-[#2DD4BF] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#5EEAD4]" />
                  </div>
                  <h3 className="text-2xl sm:text-2xl font-bold text-white">Vídeos Exclusivos</h3>
                </div>
                <ul className="text-gray-200 space-y-4 mb-6 flex-grow text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Demonstrações práticas</strong> de cada técnica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Tutoriais passo a passo</strong> das ferramentas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Casos reais</strong> de aplicação</span>
                  </li>
                </ul>
                <div className="bg-[#0B1016]/50 p-4 rounded-xl border border-[#1C2A35]">
                  <p className="text-[#5EEAD4] text-lg font-semibold">🎬 Acesso Imediato + Novos Vídeos Mensais</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Software */}
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-[#14222E] to-[#0D3A46] p-7 rounded-2xl border border-[#2DD4BF]/20 hover:border-[#2DD4BF] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 sm:w-10 sm:h-10 text-[#5EEAD4]" />
                  </div>
                  <h3 className="text-2xl sm:text-2xl font-bold text-white">Software Nexus AI</h3>
                </div>
                <ul className="text-gray-200 space-y-4 mb-6 flex-grow text-lg">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Múltiplas IAs integradas</strong> em uma plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Automação de tarefas</strong> repetitivas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#2DD4BF] mr-4 mt-1 flex-shrink-0" />
                    <span><strong>Análise inteligente</strong> de dados e projetos</span>
                  </li>
                </ul>
                <div className="bg-[#0B1016]/50 p-4 rounded-xl border border-[#1C2A35]">
                  <p className="text-[#5EEAD4] text-lg font-semibold">🚀 Acesso Premium ao Software</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* SEÇÃO "VEJA O SOFTWARE NEXUS EM AÇÃO" */}
          <AnimatedSection>
            <div className="bg-[#0B1016] rounded-2xl border border-[#1C2A35] p-7">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Veja o Software Nexus AI em Ação</h3>
                <p className="text-gray-300 text-xl">Interface intuitiva que reúne o poder de múltiplas IAs especializadas</p>
              </div>
              
              {/* Container visual do software */}
              <div className="bg-gradient-to-r from-[#14222E] to-[#0D3A46] p-2 rounded-xl mb-10">
                <div className="bg-[#0B1016] rounded-xl p-7 border border-[#1C2A35] min-h-[300px] flex flex-col justify-center">
                  {/* Interface simulada do software */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-[#14222E] p-4 rounded-lg border border-[#2DD4BF]/20 text-center">
                      <Brain className="w-8 h-8 text-[#5EEAD4] mx-auto mb-3" />
                      <p className="text-white text-lg font-semibold">IA de Análise</p>
                    </div>
                    <div className="bg-[#14222E] p-4 rounded-lg border border-[#2DD4BF]/20 text-center">
                      <TrendingUp className="w-8 h-8 text-[#5EEAD4] mx-auto mb-3" />
                      <p className="text-white text-lg font-semibold">IA de Produtividade</p>
                    </div>
                    <div className="bg-[#14222E] p-4 rounded-lg border border-[#2DD4BF]/20 text-center">
                      <Target className="w-8 h-8 text-[#5EEAD4] mx-auto mb-3" />
                      <p className="text-white text-lg font-semibold">IA Estratégica</p>
                    </div>
                    <div className="bg-[#14222E] p-4 rounded-lg border border-[#2DD4BF]/20 text-center">
                      <Zap className="w-8 h-8 text-[#5EEAD4] mx-auto mb-3" />
                      <p className="text-white text-lg font-semibold">IA de Automação</p>
                    </div>
                  </div>
                  
                  {/* Área de preview do Dashboard */}
                  <div className="bg-[#14222E] rounded-lg p-5 border border-[#1C2A35]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-[#5EEAD4] text-lg">nexus-ai-dashboard</div>
                    </div>
                    <div className="bg-[#0B1016] p-4 rounded border border-[#1C2A35]">
                      <p className="text-gray-400 text-center text-lg">
                        🚀 <strong>Interface do Software Nexus AI</strong><br/>
                        <span className="text-base">Dashboard integrado com múltiplas inteligências artificiais</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEÇÃO DE FERRAMENTAS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* IA de Análise */}
                <AnimatedSection delay={0.2}>
                  <div className="group bg-gradient-to-br from-[#14222E]/30 to-[#0B1016]/30 p-6 rounded-2xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={brainAIImg} alt="IA de Análise" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Análise Inteligente</h3>
                      <p className="text-gray-300 text-lg">IA especializada em análise de dados e insights</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* IA de Produtividade */}
                <AnimatedSection delay={0.3}>
                  <div className="group bg-gradient-to-br from-[#0D3A46]/30 to-[#14222E]/30 p-6 rounded-2xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={dataAnalysisImg} alt="IA de Produtividade" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Otimização de Processos</h3>
                      <p className="text-gray-300 text-lg">Automatiza e otimiza fluxos de trabalho</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* IA Estratégica */}
                <AnimatedSection delay={0.4}>
                  <div className="group bg-gradient-to-br from-[#14222E]/30 to-[#0D3A46]/30 p-6 rounded-2xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={xadrezStrategiaImg} alt="IA Estratégica" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#14222E] to-[#0D3A46] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Tomada de Decisão</h3>
                      <p className="text-gray-300 text-lg">IA para decisões estratégicas e planejamento</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* IA de Automação */}
                <AnimatedSection delay={0.5}>
                  <div className="group bg-gradient-to-br from-[#0D3A46]/30 to-[#14222E]/30 p-6 rounded-2xl border border-[#1C2A35] hover:border-[#0D3A46] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={servicosIAImg} alt="IA de Automação" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0D3A46] to-[#14222E] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">Automação Avançada</h3>
                      <p className="text-gray-300 text-lg">Automatiza tarefas complexas e repetitivas</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  );
}

// ===================================================================
// COMPONENTE HOMEPAGE - COM FONTES MAIORES
// ===================================================================
function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingStep, setTypingStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1016] font-['Poppins',sans-serif] overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1016]/80 backdrop-blur-sm border-b border-[#1C2A35]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={novaImagemLogo} alt="NEXUS Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/detalhes" className="text-gray-300 hover:text-[#5EEAD4] transition-colors text-base">
                Detalhes do Sistema
              </Link>
              <Link to="/faq" className="text-gray-300 hover:text-[#5EEAD4] transition-colors text-base">
                FAQ
              </Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-[#5EEAD4] transition-colors text-base">
                Quem Somos
              </Link>
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] hover:from-[#5EEAD4]/90 hover:to-[#2DD4BF]/90 text-[#0B1016] font-semibold text-base">
                  Acessar o Sistema
                </Button>
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#1C2A35]">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/detalhes" 
                  className="text-gray-300 hover:text-[#5EEAD4] transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Detalhes do Sistema
                </Link>
                <Link 
                  to="/faq" 
                  className="text-gray-300 hover:text-[#5EEAD4] transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/quem-somos" 
                  className="text-gray-300 hover:text-[#5EEAD4] transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quem Somos
                </Link>
                <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] hover:from-[#5EEAD4]/90 hover:to-[#2DD4BF]/90 text-[#0B1016] font-semibold w-full text-base">
                    Acessar o Sistema
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ===============================================================
      HERO SECTION - COM FONTES MAIORES
      =============================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#0D3A46]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#14222E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-10">
          <img src={brainNetworkImg} alt="Neural Network Background" className="w-full h-full object-cover" />
        </div>
        
        <div className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12 mt-20">
            
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-4 sm:px-8 sm:py-4 bg-[#F59E0B]/20 border border-[#F59E0B]/30 rounded-full text-[#F59E0B] text-base sm:text-lg font-medium mb-8 sm:mb-10">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
              NÃO COMPRE OUTRO CURSO DE IA
            </div>
            
            {/* Logo Video */}
            <div className="mb-8 sm:mb-10">
              <video 
                src={logoVideo} 
                autoPlay
                loop
                muted
                playsInline
                className="w-56 h-auto mx-auto mb-4 sm:mb-6 rounded-2xl sm:w-72"
              >
                Seu navegador não suporta o vídeo.
              </video>
            </div>
            
            {/* Títulos */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg">
              <Typewriter 
                text="Sistema Nexus: Domine a IA" 
                speed={60} 
                onTypingComplete={() => setTimeout(() => setTypingStep(2), 300)} 
              />
            </h1>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent drop-shadow-lg mb-6 sm:mb-8">
              {typingStep >= 2 && (
                <Typewriter 
                  text="PDF + Vídeos + Software" 
                  speed={70} 
                />
              )}
            </h2>
            
            {/* ===============================================================
            BLOCO DE TEXTO DA JUSTIFICATIVA - COM FONTES MAIORES
            =============================================================== */}
            <div className="mt-8 sm:mt-10 text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 sm:mb-12 max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-gray-300 text-xl sm:text-2xl">
                O mercado está cheio de 'cursos completos' de R$ 2.000 que só entregam teoria. Você assiste 50 aulas e... nada muda.
              </p>
              
              <p className="text-2xl sm:text-4xl md:text-5xl text-white font-semibold leading-relaxed">
                Você não precisa de mais teoria. Você precisa de um <span className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent">ARSENAL DE IMPLEMENTAÇÃO</span>.
              </p>
              
              <p className="text-gray-300 text-xl sm:text-2xl">
                Para nossos <strong>primeiros 100 Fundadores</strong>, estamos liberando o arsenal completo (avaliado em R$ 497) pelo preço especial de lançamento.
              </p>
              
              {/* Preço */}
              <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-white bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent py-4 sm:py-6">
                12x de R$ 4,90
              </p>
              
              <p className="text-gray-200 text-2xl sm:text-3xl md:text-4xl font-semibold">ou R$ 47,00 à vista</p>
            </div>

            {/* ===============================================================
            BOTÕES - MAIORES
            =============================================================== */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-8 sm:mb-10">
              {/* Botão Principal */}
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] hover:from-[#F59E0B]/90 hover:to-[#D946EF]/90 text-white py-8 sm:py-10 text-xl sm:text-2xl font-bold rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-[#D946EF]/40 transition-all duration-300 transform hover:scale-105 border-2 border-[#F59E0B]/50 animate-pulse w-full"
                >
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 mr-4 sm:mr-5" />
                  <span className="whitespace-nowrap">
                    QUERO O ARSENAL COMPLETO AGORA
                  </span>
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 ml-4 sm:ml-5" />
                </Button>
              </a>
              
              {/* Botão Secundário */}
              <Link to="/detalhes" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#2DD4BF]/50 text-[#5EEAD4] hover:bg-[#2DD4BF]/10 hover:text-[#5EEAD4] py-6 sm:py-8 text-lg sm:text-xl font-semibold rounded-xl sm:rounded-2xl w-full border-2"
                >
                  <LayoutList className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                  <span className="whitespace-nowrap">
                    Ver o Sistema Completo
                  </span>
                </Button>
              </Link>
            </div>

            {/* Grid de Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center text-gray-300 bg-[#14222E]/30 p-4 sm:p-5 rounded-xl border border-[#1C2A35]">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#5EEAD4] mr-3" />
                <span className="text-base sm:text-lg">Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center justify-center text-gray-300 bg-[#14222E]/30 p-4 sm:p-5 rounded-xl border border-[#1C2A35]">
                <Download className="w-6 h-6 sm:w-7 sm:h-7 text-[#5EEAD4] mr-3" />
                <span className="text-base sm:text-lg">Acesso Imediato</span>
              </div>
              <div className="flex items-center justify-center text-gray-300 bg-[#14222E]/30 p-4 sm:p-5 rounded-xl border border-[#1C2A35]">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#5EEAD4] mr-3" />
                <span className="text-base sm:text-lg">Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: TRANSFORMAÇÃO COM IA */}
      <IATransformationSection />

      {/* SEÇÃO DO SISTEMA COMPLETO */}
      <NexusSystemSection />

      {/* SEÇÃO DE RESULTADOS ESPERADOS */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 px-4 bg-[#14222E]/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Resultados <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Concretos</span> em 30 Dias
              </h2>
              <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Veja a transformação que o Sistema Nexus vai trazer para sua produtividade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <AnimatedSection delay={0.2}>
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#14222E] to-[#0D3A46] rounded-2xl border border-[#2DD4BF]/20">
                  <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-3">10h+</div>
                  <div className="text-white font-semibold text-xl sm:text-2xl">Horas Economizadas</div>
                  <div className="text-gray-300 text-lg mt-2">Por semana com automações</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#0D3A46] to-[#14222E] rounded-2xl border border-[#2DD4BF]/20">
                  <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-3">47</div>
                  <div className="text-white font-semibold text-xl sm:text-2xl">Técnicas</div>
                  <div className="text-gray-300 text-lg mt-2">Comprovadas de produtividade</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#14222E] to-[#0D3A46] rounded-2xl border border-[#2DD4BF]/20">
                  <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-3">4</div>
                  <div className="text-white font-semibold text-xl sm:text-2xl">IAs Integradas</div>
                  <div className="text-gray-300 text-lg mt-2">No software exclusivo</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="text-center p-6 sm:p-8 bg-gradient-to-br from-[#0D3A46] to-[#14222E] rounded-2xl border border-[#2DD4BF]/20">
                  <div className="text-4xl sm:text-5xl font-bold text-[#5EEAD4] mb-3">100%</div>
                  <div className="text-white font-semibold text-xl sm:text-2xl">Prático</div>
                  <div className="text-gray-300 text-lg mt-2">Aplicação imediata</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* BANNER SCROLLING */}
      <div className="py-6 sm:py-8 bg-[#0B1016] border-y-2 border-[#1C2A35]">
        <ScrollingBanner speed={10}>
          <div className="flex items-center text-xl sm:text-2xl font-bold text-gray-300">
            <Brain className="w-7 h-7 sm:w-9 sm:h-9 mx-6 sm:mx-8 text-[#5EEAD4]" />
            <span>SISTEMA COMPLETO</span>
            <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 mx-6 sm:mx-8 text-[#2DD4BF]" />
            <span>PDF + VÍDEOS + SOFTWARE</span>
            <Target className="w-7 h-7 sm:w-9 sm:h-9 mx-6 sm:mx-8 text-[#5EEAD4]" />
            <span>4 IAs INTEGRADAS</span>
            <TrendingUp className="w-7 h-7 sm:w-9 sm:h-9 mx-6 sm:mx-8 text-[#2DD4BF]" />
            <span>RESULTADOS IMEDIATOS &nbsp;</span>
          </div>
        </ScrollingBanner>
      </div>

      {/* SEÇÃO DE ANÁLISE DE DADOS */}
      <StudentPerformanceSection />

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Quem Já <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Usa o Sistema</span>
              </h2>
              <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Profissionais reais, resultados reais
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedFromLeft delay={0.2}>
              <div className="bg-[#14222E]/50 p-7 rounded-2xl border border-[#1C2A35] flex flex-col items-center text-center h-full">
                <img src={testimonial1Img} alt="Depoimento de Aluno 1" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#2DD4BF] mb-6" />
                <p className="text-gray-300 italic mb-6 text-lg sm:text-xl leading-relaxed">
                  "O Software Nexus mudou completamente minha forma de trabalhar. As automações me economizam pelo menos 3 horas por dia!"
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-xl sm:text-2xl">José Diego</h4>
                  <p className="text-gray-400 text-lg">Gerente de Projetos</p>
                </div>
              </div>
            </AnimatedFromLeft>
            <AnimatedSection delay={0.4}>
              <div className="bg-[#14222E]/50 p-7 rounded-2xl border border-[#1C2A35] flex flex-col items-center text-center h-full">
                <img src={testimonial2Img} alt="Depoimento de Aluno 2" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#2DD4BF] mb-6" />
                <p className="text-gray-300 italic mb-6 text-lg sm:text-xl leading-relaxed">
                  "Os vídeos são incríveis! Ver as técnicas em ação fez toda a diferença. O PDF sozinho já valeria, mas com os vídeos é sensacional."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-xl sm:text-2xl">Lucas Costa</h4>
                  <p className="text-gray-400 text-lg">Desenvolvedor Sênior</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedFromRight delay={0.2}>
              <div className="bg-[#14222E]/50 p-7 rounded-2xl border border-[#1C2A35] flex flex-col items-center text-center h-full">
                 <img src={testimonial3Img} alt="Depoimento de Aluno 3" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#2DD4BF] mb-6" />
                <p className="text-gray-300 italic mb-6 text-lg sm:text-xl leading-relaxed">
                  "Ter acesso ao software com múltiplas IAs é um diferencial absurdo. É como ter uma equipe de especialistas 24h por dia."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-xl sm:text-2xl">Juliana Pereira</h4>
                  <p className="text-gray-400 text-lg">CEO & Fundadora</p>
                </div>
              </div>
            </AnimatedFromRight>
          </div>
        </div>
      </section>

      {/* ===============================================================
      SEÇÃO FINAL DE VENDA - COM FONTES MAIORES
      =============================================================== */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0D3A46] to-[#14222E]">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              A Diferença Entre <span className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent">Teoria e Resultados</span>
            </h2>
            
            <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Um 'curso completo' comum te dá horas de vídeos. O <strong>Arsenal Nexus</strong> te dá 47 técnicas prontas, vídeos que vão direto ao ponto e um software para <i>aplicar tudo hoje</i>.
              <br/><br/>
              Não é sobre 'aprender IA'. É sobre <strong>usar</strong> IA para economizar 10h por semana.
              <br/><br/>
              Esta é a oferta de lançamento para os <strong>100 primeiros Fundadores</strong>. Depois disso, o valor oficial será R$ 497,00.
            </p>

            <div className="bg-[#0B1016] p-7 rounded-2xl mb-8 sm:mb-10 border border-[#F59E0B]/50">
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6">
                <div className="text-center p-5 sm:p-6">
                  <BookOpen className="w-12 h-12 sm:w-14 sm:h-14 text-[#5EEAD4] mx-auto mb-3" />
                  <h4 className="text-white font-bold text-lg sm:text-xl">O Método (Manual PDF)</h4>
                  <p className="text-gray-300 text-base">Valor: R$ 97,00</p>
                </div>
                <div className="text-center p-5 sm:p-6">
                  <Play className="w-12 h-12 sm:w-14 sm:h-14 text-[#5EEAD4] mx-auto mb-3" />
                  <h4 className="text-white font-bold text-lg sm:text-xl">A Prática (Vídeos)</h4>
                  <p className="text-gray-300 text-base">Valor: R$ 197,00</p>
                </div>
                <div className="text-center p-5 sm:p-6">
                  <Code className="w-12 h-12 sm:w-14 sm:h-14 text-[#5EEAD4] mx-auto mb-3" />
                  <h4 className="text-white font-bold text-lg sm:text-xl">A Ferramenta (Software)</h4>
                  <p className="text-gray-300 text-base">Valor: R$ 203,00</p>
                </div>
              </div>

              <div className="bg-[#14222E] p-6 rounded-xl border border-[#2DD4BF]/30">
                <p className="text-gray-300 text-xl sm:text-2xl mb-3">Valor Total do Arsenal: <span className="line-through text-red-400">R$ 497,00</span></p>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-3">Preço de Lançamento (HOJE):</p>
                <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#5EEAD4] mb-3">12x de R$ 4,90</p>
                <p className="text-gray-300 text-2xl sm:text-3xl font-semibold mb-3">ou R$ 47,00 à vista</p>
                <p className="text-gray-400 text-lg sm:text-xl mt-3">(Você leva o "Curso Completo", o Software e as Atualizações Vitalícias)</p>
              </div>
            </div>

            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] hover:from-[#F59E0B]/90 hover:to-[#D946EF]/90 text-white px-8 sm:px-16 py-8 sm:py-10 text-xl sm:text-2xl font-bold rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-[#D946EF]/40 transition-all duration-300 transform hover:scale-105 border-2 border-[#F59E0B]/50 animate-pulse w-full max-w-lg mx-auto">
                <Rocket className="w-6 h-6 sm:w-8 sm:h-8 mr-4 sm:mr-5" />
                GARANTIR MEU ARSENAL POR R$ 47,00
              </Button>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center text-gray-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4] mr-3" />
                <span className="text-base sm:text-lg">7 dias de garantia total</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4] mr-3" />
                <span className="text-base sm:text-lg">Acesso imediato e vitalício</span>
              </div>
              <div className="flex items-center justify-center text-gray-300">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#5EEAD4] mr-3" />
                <span className="text-base sm:text-lg">Suporte Prioritário (Fundador)</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FOOTER */}
      <AnimatedSection>
        <footer className="border-t border-[#1C2A35] bg-[#0B1016]/50 py-8 sm:py-10 px-4">
           <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                  <img src={novaImagemLogo} alt="NEXUS Logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">
                    NEXUS
                  </span>
                </div>
                <p className="text-gray-400 text-lg">
                  Sistema Completo de Alta Performance com IA
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 sm:mb-6 text-xl">Links Úteis</h4>
                <div className="space-y-3">
                  <Link to="/detalhes" className="block text-gray-400 hover:text-[#5EEAD4] transition-colors text-lg">
                    Detalhes do Sistema
                  </Link>
                  <Link to="/faq" className="block text-gray-400 hover:text-[#5EEAD4] transition-colors text-lg">
                    Perguntas Frequentes
                  </Link>
                  <Link to="/quem-somos" className="block text-gray-400 hover:text-[#5EEAD4] transition-colors text-lg">
                    Quem Somos
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 sm:mb-6 text-xl">Suporte e Social</h4>
                <p className="text-gray-400 text-lg mb-4">
                  Dúvidas? Entre em contato ou siga-nos.
                </p>
                <a href="https://www.instagram.com/nexus0rigin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-[#5EEAD4] transition-colors text-lg">
                  <Instagram className="w-6 h-6 sm:w-7 sm:h-7 mr-3" />
                  @nexus0rigin
                </a>
              </div>
            </div>
            <div className="border-t border-[#1C2A35] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-lg">
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
