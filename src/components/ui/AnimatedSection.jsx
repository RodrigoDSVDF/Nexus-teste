import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} // Começa um pouco menor
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 120,
        damping: 25,
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
