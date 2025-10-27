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
import testimonial1Img from './assets/1000396866.jpg';
import testimonial2Img from './assets/1000396868.jpg';
import testimonial3Img from './assets/1000396870.jpg';
import brainAIImg from './assets/1000393262.jpg';
import xadrezStrategiaImg from './assets/xadrez-estrategia.jpg';
import novaImagemLogo from './assets/1000393277.png';
import dataAnalysisImg from './assets/1000395918.jpg';
import servicosIAImg from './assets/servicos-ia.jpg';
import logoVideo from './assets/logo-video.mp4';

// ===================================================================
// COMPONENTE DO VÍDEO DE APRESENTAÇÃO - ATUALIZADO SEM MUTE
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
              Em apenas 3 minutos, descubra como o Sistema Nexus vai transformar sua produtividade
            </p>
          </div>

          {/* Container do Vídeo do YouTube - ATUALIZADO SEM MUTE */}
          <div className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-2 sm:p-4 shadow-2xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/5yTAiL616Ak?si=qmqgWHJTdKY_-MmX&autoplay=1&controls=1&modestbranding=1&rel=0"
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
                  <span className="text-sm">Apenas 3 minutos</span>
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
              Pare de Apenas <span className="text-gray-300">"Estudar"</span> e Comece a{' '}
              <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                Dominar de Verdade
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Enquanto 95% das pessoas ainda "aprendem" como na era medieval, você terá um arsenal de IA que transforma informação em poder real
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <AnimatedFromLeft>
              <div className="space-y-6">
                <div className="bg-[#2A3A4E]/60 p-6 rounded-2xl border border-[#3A4A5E]">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                    <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-[#6EEBD4] mr-3" />
                    O Problema: Aprendizado Tradicional Está Obsoleto
                  </h3>
                  <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Você esquece 80%</strong> do que estuda em 30 dias</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Demora 6x mais tempo</strong> para dominar habilidades complexas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong className="text-white">Não consegue aplicar</strong> na prática o que aprende na teoria</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1A4A5A]/40 p-6 rounded-2xl border border-[#3DE4CF]/30">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#6EEBD4] mr-3" />
                    A Solução: IA Como Seu Mentor 24/7
                  </h3>
                  <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#3DE4CF] mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Aprendizado personalizado</strong> que se adapta ao seu ritmo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#3DE4CF] mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Retenção 3x maior</strong> com técnicas baseadas em neurociência</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#3DE4CF] mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Aplicação imediata</strong> do conhecimento em projetos reais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedFromLeft>

            <AnimatedFromRight>
              <div className="bg-[#1A222E] p-6 rounded-2xl border border-[#2A3A4E]">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                  Como a IA Transforma Seu Cérebro em Uma Máquina de Aprendizado
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-[#2A3A4E]/60 rounded-xl border border-[#3A4A5E] hover:border-[#3DE4CF]/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Brain className="w-5 h-5 text-[#6EEBD4]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">Neuro-Aceleração</h4>
                      <p className="text-gray-200 text-xs sm:text-sm">IA identifica seus padrões de aprendizado e cria rotas neuronais otimizadas</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-[#2A3A4E]/60 rounded-xl border border-[#3A4A5E] hover:border-[#3DE4CF]/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#1A4A5A] to-[#2A3A4E] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Workflow className="w-5 h-5 text-[#6EEBD4]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">Memória Expandida</h4>
                      <p className="text-gray-200 text-xs sm:text-sm">Sistema de repetição espaçada inteligente que nunca deixa você esquecer</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-[#2A3A4E]/60 rounded-xl border border-[#3A4A5E] hover:border-[#3DE4CF]/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <BarChart className="w-5 h-5 text-[#6EEBD4]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">Atualização Automática</h4>
                      <p className="text-gray-200 text-xs sm:text-sm">Sempre aprendendo as tendências mais recentes do mercado automaticamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedFromRight>
          </div>

          {/* Estatísticas Impactantes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <AnimatedSection delay={0.2}>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#2A3A4E] to-[#1A4A5A] rounded-2xl border border-[#3DE4CF]/30">
                <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">3x</div>
                <div className="text-white font-semibold text-xs sm:text-sm">Mais Rápido</div>
                <div className="text-gray-200 text-xs">Aprendizado acelerado</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#1A4A5A] to-[#2A3A4E] rounded-2xl border border-[#3DE4CF]/30">
                <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">90%</div>
                <div className="text-white font-semibold text-xs sm:text-sm">Retenção</div>
                <div className="text-gray-200 text-xs">Do conhecimento</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#2A3A4E] to-[#1A4A5A] rounded-2xl border border-[#3DE4CF]/30">
                <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">24/7</div>
                <div className="text-white font-semibold text-xs sm:text-sm">Mentoria</div>
                <div className="text-gray-200 text-xs">IA sempre disponível</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#1A4A5A] to-[#2A3A4E] rounded-2xl border border-[#3DE4CF]/30">
                <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">10h+</div>
                <div className="text-white font-semibold text-xs sm:text-sm">Economia</div>
                <div className="text-gray-200 text-xs">Por semana</div>
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
      <section id="student-performance" className="py-16 sm:py-20 px-4 bg-[#1A222E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Decifrando o <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Sucesso nos Exames</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              Uma análise de dados com 200 estudantes revelou os fatores-chave que impulsionam o desempenho acadêmico.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <AnimatedFromLeft>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Principais Insights:</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-200 text-sm sm:text-base">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">+1.56 pontos</strong> a cada hora extra de estudo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">84.1%</strong> da variação nas notas explicada pelos fatores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">+0.95 pontos</strong> por cada hora adicional de sono</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Os 4 Pilares do Desempenho:</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center">
                      <Book className="w-4 h-4 sm:w-5 sm:h-5 text-[#6EEBD4] mr-3 sm:mr-4" />
                      <span className="text-gray-200 text-sm sm:text-base"><strong>Horas de Estudo:</strong> Fator mais decisivo</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#6EEBD4] mr-3 sm:mr-4" />
                      <span className="text-gray-200 text-sm sm:text-base"><strong>Notas Anteriores:</strong> Indicador de sucesso</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-[#6EEBD4] mr-3 sm:mr-4" />
                      <span className="text-gray-200 text-sm sm:text-base"><strong>Qualidade do Sono:</strong> Impacto direto</span>
                    </div>
                    <div className="flex items-center">
                      <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#6EEBD4] mr-3 sm:mr-4" />
                      <span className="text-gray-200 text-sm sm:text-base"><strong>Presença nas Aulas:</strong> Consistência é crucial</span>
                    </div>
                  </div>
                </div>
              </AnimatedFromLeft>
            </div>
            <div className="lg:col-span-3">
              <AnimatedFromRight>
                <div className="bg-[#2A3A4E]/60 p-3 sm:p-4 rounded-2xl border border-[#3A4A5E] shadow-2xl hover:border-[#1A4A5A] transition-all duration-300">
                  <iframe
                    src="https://app-dash-pj41.onrender.com/?embed=true"
                    height="400"
                    width="100%"
                    style={{ border: 'none', borderRadius: '8px' }}
                    title="Análise de Desempenho de Estudantes"
                    className="min-h-[300px] sm:min-h-[400px]"
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
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A222E] to-[#2A3A4E]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#3DE4CF]/30 border border-[#3DE4CF]/40 rounded-full text-[#6EEBD4] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              SISTEMA COMPLETO
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Mais que um Manual: Um <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Sistema Completo</span> de Performance
            </h2>
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
              PDF + Vídeos Exclusivos + Software com Múltiplas IAs Integradas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* PDF */}
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-[#2A3A4E] to-[#1A4A5A] p-4 sm:p-6 rounded-2xl border border-[#3DE4CF]/30 hover:border-[#3DE4CF] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-5 h-5 sm:w-7 sm:h-7 text-[#6EEBD4]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Manual Premium</h3>
                </div>
                <ul className="text-gray-200 space-y-2 sm:space-y-3 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>47 técnicas comprovadas</strong> de produtividade com IA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Scripts prontos</strong> para copiar e usar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Frameworks exclusivos</strong> de organização</span>
                  </li>
                </ul>
                <div className="bg-[#1A222E]/60 p-2 sm:p-3 rounded-xl border border-[#2A3A4E]">
                  <p className="text-[#6EEBD4] text-xs sm:text-sm font-semibold">📚 PDF + Atualizações Vitalícias</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vídeos */}
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-[#1A4A5A] to-[#2A3A4E] p-4 sm:p-6 rounded-2xl border border-[#3DE4CF]/30 hover:border-[#3DE4CF] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-[#1A4A5A] to-[#2A3A4E] rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 text-[#6EEBD4]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Vídeos Exclusivos</h3>
                </div>
                <ul className="text-gray-200 space-y-2 sm:space-y-3 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Demonstrações práticas</strong> de cada técnica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Tutoriais passo a passo</strong> das ferramentas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Casos reais</strong> de aplicação</span>
                  </li>
                </ul>
                <div className="bg-[#1A222E]/60 p-2 sm:p-3 rounded-xl border border-[#2A3A4E]">
                  <p className="text-[#6EEBD4] text-xs sm:text-sm font-semibold">🎬 Acesso Imediato + Novos Vídeos Mensais</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Software */}
            <AnimatedSection delay={0.6}>
              <div className="group bg-gradient-to-br from-[#2A3A4E] to-[#1A4A5A] p-4 sm:p-6 rounded-2xl border border-[#3DE4CF]/30 hover:border-[#3DE4CF] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] rounded-2xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-5 h-5 sm:w-7 sm:h-7 text-[#6EEBD4]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Software Nexus AI</h3>
                </div>
                <ul className="text-gray-200 space-y-2 sm:space-y-3 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Múltiplas IAs integradas</strong> em uma plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Automação de tarefas</strong> repetitivas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3DE4CF] mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Análise inteligente</strong> de dados e projetos</span>
                  </li>
                </ul>
                <div className="bg-[#1A222E]/60 p-2 sm:p-3 rounded-xl border border-[#2A3A4E]">
                  <p className="text-[#6EEBD4] text-xs sm:text-sm font-semibold">🚀 Acesso Premium ao Software</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* SEÇÃO "VEJA O SOFTWARE NEXUS EM AÇÃO" */}
          <AnimatedSection>
            <div className="bg-[#1A222E] rounded-2xl border border-[#2A3A4E] p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Veja o Software Nexus AI em Ação</h3>
                <p className="text-gray-200 text-sm sm:text-lg">Interface intuitiva que reúne o poder de múltiplas IAs especializadas</p>
              </div>
              
              {/* Container visual do software */}
              <div className="bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] p-1 rounded-xl mb-6 sm:mb-8">
                <div className="bg-[#1A222E] rounded-xl p-4 sm:p-6 border border-[#2A3A4E] min-h-[200px] sm:min-h-[300px] flex flex-col justify-center">
                  {/* Interface simulada do software */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-[#2A3A4E] p-2 sm:p-3 rounded-lg border border-[#3DE4CF]/30 text-center">
                      <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                      <p className="text-white text-xs font-semibold">IA de Análise</p>
                    </div>
                    <div className="bg-[#2A3A4E] p-2 sm:p-3 rounded-lg border border-[#3DE4CF]/30 text-center">
                      <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                      <p className="text-white text-xs font-semibold">IA de Produtividade</p>
                    </div>
                    <div className="bg-[#2A3A4E] p-2 sm:p-3 rounded-lg border border-[#3DE4CF]/30 text-center">
                      <Target className="w-4 h-4 sm:w-6 sm:h-6 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                      <p className="text-white text-xs font-semibold">IA Estratégica</p>
                    </div>
                    <div className="bg-[#2A3A4E] p-2 sm:p-3 rounded-lg border border-[#3DE4CF]/30 text-center">
                      <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                      <p className="text-white text-xs font-semibold">IA de Automação</p>
                    </div>
                  </div>
                  
                  {/* Área de preview do Dashboard */}
                  <div className="bg-[#2A3A4E] rounded-lg p-3 sm:p-4 border border-[#2A3A4E]">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-[#6EEBD4] text-xs">nexus-ai-dashboard</div>
                    </div>
                    <div className="bg-[#1A222E] p-2 sm:p-3 rounded border border-[#2A3A4E]">
                      <p className="text-gray-300 text-center text-xs sm:text-sm">
                        🚀 <strong>Interface do Software Nexus AI</strong><br/>
                        <span className="text-xs">Dashboard integrado com múltiplas inteligências artificiais</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEÇÃO DE FERRAMENTAS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {/* IA de Análise */}
                <AnimatedSection delay={0.2}>
                  <div className="group bg-gradient-to-br from-[#2A3A4E]/40 to-[#1A222E]/40 p-3 sm:p-4 rounded-2xl border border-[#2A3A4E] hover:border-[#1A4A5A] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={brainAIImg} alt="IA de Análise" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] rounded-2xl flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">Análise Inteligente</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">IA especializada em análise de dados e insights</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* IA de Produtividade */}
                <AnimatedSection delay={0.3}>
                  <div className="group bg-gradient-to-br from-[#1A4A5A]/40 to-[#2A3A4E]/40 p-3 sm:p-4 rounded-2xl border border-[#2A3A4E] hover:border-[#1A4A5A] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={dataAnalysisImg} alt="IA de Produtividade" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#1A4A5A] to-[#2A3A4E] rounded-2xl flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">Otimização de Processos</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">Automatiza e otimiza fluxos de trabalho</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* IA Estratégica */}
                <AnimatedSection delay={0.4}>
                  <div className="group bg-gradient-to-br from-[#2A3A4E]/40 to-[#1A4A5A]/40 p-3 sm:p-4 rounded-2xl border border-[#2A3A4E] hover:border-[#1A4A5A] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={xadrezStrategiaImg} alt="IA Estratégica" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#2A3A4E] to-[#1A4A5A] rounded-2xl flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">Tomada de Decisão</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">IA para decisões estratégicas e planejamento</p>
                    </div>
                  </div>
                </AnimatedSection>

                {/* IA de Automação */}
                <AnimatedSection delay={0.5}>
                  <div className="group bg-gradient-to-br from-[#1A4A5A]/40 to-[#2A3A4E]/40 p-3 sm:p-4 rounded-2xl border border-[#2A3A4E] hover:border-[#1A4A5A] transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 opacity-10">
                      <img src={servicosIAImg} alt="IA de Automação" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#1A4A5A] to-[#2A3A4E] rounded-2xl flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-white mb-1 sm:mb-2">Automação Avançada</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">Automatiza tarefas complexas e repetitivas</p>
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
// COMPONENTE HOMEPAGE - ATUALIZADO COM CORES MAIS CLARAS
// ===================================================================
function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingStep, setTypingStep] = useState(1);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A222E] font-['Poppins',sans-serif] overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A222E]/90 backdrop-blur-sm border-b border-[#2A3A4E]">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={novaImagemLogo} alt="NEXUS Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                NEXUS
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/detalhes" className="text-gray-200 hover:text-[#6EEBD4] transition-colors text-sm">
                Detalhes do Sistema
              </Link>
              <Link to="/faq" className="text-gray-200 hover:text-[#6EEBD4] transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/quem-somos" className="text-gray-200 hover:text-[#6EEBD4] transition-colors text-sm">
                Quem Somos
              </Link>
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] hover:from-[#6EEBD4]/90 hover:to-[#3DE4CF]/90 text-[#1A222E] font-semibold text-xs">
                  Acessar o Sistema
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
            <div className="md:hidden mt-4 pb-4 border-t border-[#2A3A4E]">
              <div className="flex flex-col space-y-4 pt-4">
                <Link 
                  to="/detalhes" 
                  className="text-gray-200 hover:text-[#6EEBD4] transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Detalhes do Sistema
                </Link>
                <Link 
                  to="/faq" 
                  className="text-gray-200 hover:text-[#6EEBD4] transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link 
                  to="/quem-somos" 
                  className="text-gray-200 hover:text-[#6EEBD4] transition-colors text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Quem Somos
                </Link>
                <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] hover:from-[#6EEBD4]/90 hover:to-[#3DE4CF]/90 text-[#1A222E] font-semibold w-full text-xs">
                    Acessar o Sistema
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION COM IMAGEM DE FUNDO E VÍDEO - CORES MAIS CLARAS */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">
        {/* Background Image - MESMA DO CÓDIGO ANTERIOR */}
        <div className="absolute inset-0 opacity-15">
          <img src={brainNetworkImg} alt="Neural Network Background" className="w-full h-full object-cover" />
        </div>
        
        {/* Logo Video Background - AGORA COM A IMPORT CORRETA */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src={logoVideo} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="absolute inset-0 bg-[#1A222E]/70"></div>
        </div>
        
        <div className="hidden md:block absolute top-20 left-20 w-72 h-72 bg-[#1A4A5A]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-[#2A3A4E]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 mt-16">
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-[#F59E0B]/30 border border-[#F59E0B]/40 rounded-full text-[#F59E0B] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              NÃO COMPRE OUTRO CURSO DE IA
            </div>
            
            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <div className="w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-2 sm:mb-4 rounded-2xl bg-gradient-to-br from-[#6EEBD4] to-[#3DE4CF] p-1">
                <div className="w-full h-full bg-[#1A222E] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <img src={novaImagemLogo} alt="NEXUS Logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">
                      NEXUS
                    </span>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1">Sistema de IA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Títulos com Typewriter Otimizado */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg px-2">
              <Typewriter 
                text="Sistema Nexus: Domine a IA" 
                speed={60} 
                onTypingComplete={() => setTimeout(() => setTypingStep(2), 300)} 
              />
            </h1>

            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent drop-shadow-lg mb-3 sm:mb-4 px-2">
              {typingStep >= 2 && (
                <Typewriter 
                  text="PDF + Vídeos + Software" 
                  speed={70} 
                />
              )}
            </h2>
            
            {/* Texto Principal */}
            <div className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto space-y-3 sm:space-y-4 px-2 sm:px-0">
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                O mercado está cheio de 'cursos completos' de R$ 2.000 que só entregam teoria. Você assiste 50 aulas e... nada muda.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed">
                Você não precisa de mais teoria. Você precisa de um <span className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent">ARSENAL DE IMPLEMENTAÇÃO</span>.
              </p>
              
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                Para nossos <strong>primeiros 100 Fundadores</strong>, estamos liberando o arsenal completo (avaliado em R$ 497) pelo preço especial de lançamento.
              </p>
              
              {/* Preço */}
              <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent py-2 sm:py-3">
                12x de R$ 4,90
              </p>
              
              <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-semibold">ou R$ 47,00 à vista</p>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 px-2 sm:px-0">
              {/* Botão Principal */}
              <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] hover:from-[#F59E0B]/90 hover:to-[#D946EF]/90 text-white py-4 sm:py-5 text-sm sm:text-base font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-[#D946EF]/40 transition-all duration-300 transform hover:scale-105 border-2 border-[#F59E0B]/50 animate-pulse w-full"
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  <span className="whitespace-nowrap text-xs sm:text-sm">
                    QUERO O ARSENAL COMPLETO AGORA
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                </Button>
              </a>
              
              {/* Botão Secundário */}
              <Link to="/detalhes" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-[#3DE4CF]/50 text-[#6EEBD4] hover:bg-[#3DE4CF]/10 hover:text-[#6EEBD4] py-3 sm:py-4 text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl w-full border-2"
                >
                  <LayoutList className="w-4 h-4 sm:w-4 sm:h-4 mr-2" />
                  <span className="whitespace-nowrap">
                    Ver o Sistema Completo
                  </span>
                </Button>
              </Link>
            </div>

            {/* Grid de Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto px-2 sm:px-0">
              <div className="flex items-center justify-center text-gray-200 bg-[#2A3A4E]/50 p-2 sm:p-3 rounded-lg border border-[#3A4A5E]">
                <Shield className="w-4 h-4 sm:w-4 sm:h-4 text-[#6EEBD4] mr-2" />
                <span className="text-xs sm:text-sm">Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center justify-center text-gray-200 bg-[#2A3A4E]/50 p-2 sm:p-3 rounded-lg border border-[#3A4A5E]">
                <Download className="w-4 h-4 sm:w-4 sm:h-4 text-[#6EEBD4] mr-2" />
                <span className="text-xs sm:text-sm">Acesso Imediato</span>
              </div>
              <div className="flex items-center justify-center text-gray-200 bg-[#2A3A4E]/50 p-2 sm:p-3 rounded-lg border border-[#3A4A5E]">
                <Clock className="w-4 h-4 sm:w-4 sm:h-4 text-[#6EEBD4] mr-2" />
                <span className="text-xs sm:text-sm">Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO DE APRESENTAÇÃO */}
      <VideoApresentacao />

      {/* TRANSFORMAÇÃO COM IA */}
      <IATransformationSection />

      {/* SISTEMA NEXUS */}
      <NexusSystemSection />

      {/* RESULTADOS ESPERADOS */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 px-4 bg-[#2A3A4E]/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Resultados <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Concretos</span> em 30 Dias
              </h2>
              <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
                Veja a transformação que o Sistema Nexus vai trazer para sua produtividade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <AnimatedSection delay={0.2}>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#2A3A4E] to-[#1A4A5A] rounded-2xl border border-[#3DE4CF]/30">
                  <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">10h+</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Horas Economizadas</div>
                  <div className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">Por semana com automações</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#1A4A5A] to-[#2A3A4E] rounded-2xl border border-[#3DE4CF]/30">
                  <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">47</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Técnicas</div>
                  <div className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">Comprovadas de produtividade</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#2A3A4E] to-[#1A4A5A] rounded-2xl border border-[#3DE4CF]/30">
                  <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">4</div>
                  <div className="text-white font-semibold text-sm sm:text-base">IAs Integradas</div>
                  <div className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">No software exclusivo</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-[#1A4A5A] to-[#2A3A4E] rounded-2xl border border-[#3DE4CF]/30">
                  <div className="text-2xl sm:text-4xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">100%</div>
                  <div className="text-white font-semibold text-sm sm:text-base">Prático</div>
                  <div className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">Aplicação imediata</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* BANNER SCROLLING */}
      <div className="py-4 sm:py-6 bg-[#1A222E] border-y-2 border-[#2A3A4E]">
        <ScrollingBanner speed={10}>
          <div className="flex items-center text-base sm:text-xl font-bold text-gray-200">
            <Brain className="w-5 h-5 sm:w-7 sm:h-7 mx-4 sm:mx-6 text-[#6EEBD4]" />
            <span>SISTEMA COMPLETO</span>
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 mx-4 sm:mx-6 text-[#3DE4CF]" />
            <span>PDF + VÍDEOS + SOFTWARE</span>
            <Target className="w-5 h-5 sm:w-7 sm:h-7 mx-4 sm:mx-6 text-[#6EEBD4]" />
            <span>4 IAs INTEGRADAS</span>
            <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 mx-4 sm:mx-6 text-[#3DE4CF]" />
            <span>RESULTADOS IMEDIATOS &nbsp;</span>
          </div>
        </ScrollingBanner>
      </div>

      {/* ANÁLISE DE DADOS */}
      <StudentPerformanceSection />

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Quem Já <span className="bg-gradient-to-r from-[#6EEBD4] to-[#3DE4CF] bg-clip-text text-transparent">Usa o Sistema</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto">
                Profissionais reais, resultados reais
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatedFromLeft delay={0.2}>
              <div className="bg-[#2A3A4E]/60 p-4 sm:p-6 rounded-2xl border border-[#3A4A5E] flex flex-col items-center text-center h-full">
                <img src={testimonial1Img} alt="Depoimento de Aluno 1" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3DE4CF] mb-3 sm:mb-4" />
                <p className="text-gray-200 italic mb-3 sm:mb-4 text-sm sm:text-base">
                  "O Software Nexus mudou completamente minha forma de trabalhar. As automações me economizam pelo menos 3 horas por dia!"
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-base sm:text-lg">José Diego</h4>
                  <p className="text-gray-300 text-sm">Gerente de Projetos</p>
                </div>
              </div>
            </AnimatedFromLeft>
            <AnimatedSection delay={0.4}>
              <div className="bg-[#2A3A4E]/60 p-4 sm:p-6 rounded-2xl border border-[#3A4A5E] flex flex-col items-center text-center h-full">
                <img src={testimonial2Img} alt="Depoimento de Aluno 2" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3DE4CF] mb-3 sm:mb-4" />
                <p className="text-gray-200 italic mb-3 sm:mb-4 text-sm sm:text-base">
                  "Os vídeos são incríveis! Ver as técnicas em ação fez toda a diferença. O PDF sozinho já valeria, mas com os vídeos é sensacional."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-base sm:text-lg">Lucas Costa</h4>
                  <p className="text-gray-300 text-sm">Desenvolvedor Sênior</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedFromRight delay={0.2}>
              <div className="bg-[#2A3A4E]/60 p-4 sm:p-6 rounded-2xl border border-[#3A4A5E] flex flex-col items-center text-center h-full">
                 <img src={testimonial3Img} alt="Depoimento de Aluno 3" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#3DE4CF] mb-3 sm:mb-4" />
                <p className="text-gray-200 italic mb-3 sm:mb-4 text-sm sm:text-base">
                  "Ter acesso ao software com múltiplas IAs é um diferencial absurdo. É como ter uma equipe de especialistas 24h por dia."
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-base sm:text-lg">Juliana Pereira</h4>
                  <p className="text-gray-300 text-sm">CEO & Fundadora</p>
                </div>
              </div>
            </AnimatedFromRight>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL DE VENDA */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#1A4A5A] to-[#2A3A4E]">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              A Diferença Entre <span className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent">Teoria e Resultados</span>
            </h2>
            
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8">
              Um 'curso completo' comum te dá horas de vídeos. O <strong>Arsenal Nexus</strong> te dá 47 técnicas prontas, vídeos que vão direto ao ponto e um software para <i>aplicar tudo hoje</i>.
              <br/><br/>
              Não é sobre 'aprender IA'. É sobre <strong>usar</strong> IA para economizar 10h por semana.
              <br/><br/>
              Esta é a oferta de lançamento para os <strong>100 primeiros Fundadores</strong>. Depois disso, o valor oficial será R$ 497,00.
            </p>

            <div className="bg-[#1A222E] p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6 border border-[#F59E0B]/50">
              <div className="grid md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="text-center p-3 sm:p-4">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                  <h4 className="text-white font-bold text-xs sm:text-sm">O Método (Manual PDF)</h4>
                  <p className="text-gray-200 text-xs">Valor: R$ 97,00</p>
                </div>
                <div className="text-center p-3 sm:p-4">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                  <h4 className="text-white font-bold text-xs sm:text-sm">A Prática (Vídeos)</h4>
                  <p className="text-gray-200 text-xs">Valor: R$ 197,00</p>
                </div>
                <div className="text-center p-3 sm:p-4">
                  <Code className="w-8 h-8 sm:w-10 sm:h-10 text-[#6EEBD4] mx-auto mb-1 sm:mb-2" />
                  <h4 className="text-white font-bold text-xs sm:text-sm">A Ferramenta (Software)</h4>
                  <p className="text-gray-200 text-xs">Valor: R$ 203,00</p>
                </div>
              </div>

              <div className="bg-[#2A3A4E] p-3 sm:p-4 rounded-xl border border-[#3DE4CF]/40">
                <p className="text-gray-200 text-sm sm:text-lg mb-1 sm:mb-2">Valor Total do Arsenal: <span className="line-through text-red-400">R$ 497,00</span></p>
                <p className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Preço de Lançamento (HOJE):</p>
                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#6EEBD4] mb-1 sm:mb-2">12x de R$ 4,90</p>
                <p className="text-gray-200 text-lg sm:text-xl font-semibold mb-1 sm:mb-2">ou R$ 47,00 à vista</p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">(Você leva o "Curso Completo", o Software e as Atualizações Vitalícias)</p>
              </div>
            </div>

            <a href="https://pay.cakto.com.br/5dUKrWD" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-[#F59E0B] to-[#D946EF] hover:from-[#F59E0B]/90 hover:to-[#D946EF]/90 text-white px-4 sm:px-12 py-3 sm:py-6 text-sm sm:text-xl font-bold rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl hover:shadow-[#D946EF]/40 transition-all duration-300 transform hover:scale-105 border-2 border-[#F59E0B]/50 animate-pulse w-full max-w-md mx-auto">
                <Rocket className="w-4 h-4 sm:w-7 sm:h-7 mr-2 sm:mr-3" />
                GARANTIR MEU ARSENAL POR R$ 47,00
              </Button>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center text-gray-200">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#6EEBD4] mr-1 sm:mr-2" />
                <span className="text-xs">7 dias de garantia total</span>
              </div>
              <div className="flex items-center justify-center text-gray-200">
                <Download className="w-3 h-3 sm:w-4 sm:h-4 text-[#6EEBD4] mr-1 sm:mr-2" />
                <span className="text-xs">Acesso imediato e vitalício</span>
              </div>
              <div className="flex items-center justify-center text-gray-200">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#6EEBD4] mr-1 sm:mr-2" />
                <span className="text-xs">Suporte Prioritário (Fundador)</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* FOOTER */}
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
