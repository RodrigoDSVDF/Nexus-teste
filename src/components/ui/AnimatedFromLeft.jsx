import { motion } from 'framer-motion';
import useWindowWidth from '../../hooks/useWindowWidth'; // 1. Importe o hook

const AnimatedFromLeft = ({ children, delay = 0.2 }) => {
  const windowWidth = useWindowWidth(); // 2. Use o hook para obter a largura
  const isMobile = windowWidth < 768; // 3. Defina o que é "mobile" (768px é um bom ponto de quebra para tablets e abaixo)

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ 
        // 4. Use uma condição para a duração
        duration: isMobile ? 0.5 : 0.8, // 0.5s no mobile, 0.8s no desktop
        ease: 'easeOut', 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFromLeft;
