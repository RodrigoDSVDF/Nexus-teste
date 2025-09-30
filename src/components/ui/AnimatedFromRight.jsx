import { motion } from 'framer-motion';

const AnimatedFromRight = ({ children, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}  // Começa 50px para a DIREITA
      whileInView={{ opacity: 1, x: 0 }}    // Termina na posição original
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        ease: 'easeOut', 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedFromRight;
