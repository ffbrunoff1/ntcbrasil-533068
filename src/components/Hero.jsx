import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero-gradient text-white section-padding"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <motion.div
        className="relative z-10 text-center container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          variants={itemVariants}
        >
          Soluções em Drenagem
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100 mb-8"
          variants={itemVariants}
        >
          Transforme projetos em realidade com a NTC Brasil. Sua obra em boas
          mãos, do planejamento à entrega final.
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="inline-block bg-white text-brand-blue font-bold py-4 px-10 rounded-lg shadow-glow hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Comece seu projeto conosco!
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-10 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown className="h-8 w-8 text-white" />
      </motion.a>
    </section>
  );
}
