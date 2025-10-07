// src/components/ui/Typewriter.jsx

import { useState, useEffect } from 'react';

// O componente aceita 'text' (o texto a ser digitado) e 'speed' (a velocidade em ms)
function Typewriter({ text, speed = 50, className }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reseta o efeito se o texto mudar
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      // Limpa o timeout se o componente for desmontado
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      {/* Adiciona um cursor piscando no final do texto */}
      <span className="animate-blink">|</span>
    </span>
  );
}

export default Typewriter;
