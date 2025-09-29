import { motion } from 'framer-motion';

// Este é o nosso componente reutilizável
const AnimatedSection = ({ children, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // A animação ocorre apenas uma vez
      transition={{ 
        duration: 0.8, 
        ease: 'easeOut', 
        delay: delay // Usamos o delay que passamos como propriedade
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
