// src/components/ui/Typewriter.jsx (VERSÃO CORRIGIDA E FINAL)

import { useState, useEffect } from 'react';

function Typewriter({ text, speed = 50, className, onTypingComplete }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // ✅ ADICIONADO: Estado para controlar se a animação já foi completada.
  const [isCompleted, setIsCompleted] = useState(false);

  // Efeito para reiniciar a animação se o texto mudar
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsCompleted(false); // Reinicia o estado de conclusão
  }, [text]);

  // Efeito principal da digitação
  useEffect(() => {
    // Se já completou, não faz mais nada.
    if (isCompleted) return;

    // Se ainda há texto para digitar
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } 
    // ✅ LÓGICA CORRIGIDA: Assim que a digitação termina
    else {
      setIsCompleted(true); // Marca como concluído para não repetir
      if (onTypingComplete) {
        onTypingComplete(); // Chama a função de conclusão APENAS UMA VEZ
      }
    }
  }, [currentIndex, text, speed, onTypingComplete, isCompleted]);

  return (
    <span className={className}>
      {displayText}
      {/* O cursor só aparece enquanto não estiver completo */}
      {!isCompleted && <span className="animate-blink">|</span>}
    </span>
  );
}

export default Typewriter;
