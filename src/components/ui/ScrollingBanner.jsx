import { motion } from 'framer-motion';

// Props:
// - children: O conteúdo que vai rolar (texto, ícones, etc.)
// - speed: A velocidade da rolagem (quanto maior, mais lento)
const ScrollingBanner = ({ children, speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-100%'], // Anima da posição inicial para a esquerda em 100% da largura
        }}
        transition={{
          ease: 'linear',      // Velocidade constante, crucial para um loop perfeito
          duration: speed,     // Duração da animação (controla a velocidade)
          repeat: Infinity,    // Repete infinitamente
        }}
      >
        {/* Duplicamos o conteúdo para o efeito de loop */}
        <span className="mr-4">{children}</span>
        <span className="mr-4">{children}</span>
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;
