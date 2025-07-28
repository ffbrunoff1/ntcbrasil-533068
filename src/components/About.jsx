import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const featureCards = [
    {
      icon: <Target size={40} className="text-brand-blue" />,
      title: 'Nossa Missão',
      description:
        'Executar projetos de construção com excelência, superando as expectativas dos clientes através da inovação, pontualidade e qualidade superior.',
    },
    {
      icon: <Building size={40} className="text-brand-blue" />,
      title: 'Nossa Visão',
      description:
        'Ser a empresa de construção de referência no Brasil, reconhecida pela confiabilidade, sustentabilidade e pela capacidade de transformar desafios em marcos de sucesso.',
    },
    {
      icon: <ShieldCheck size={40} className="text-brand-blue" />,
      title: 'Nossos Valores',
      description:
        'Compromisso, integridade, segurança em primeiro lugar e foco no cliente são os pilares que sustentam cada tijolo que assentamos.',
    },
  ];

  return (
    <section id="about" className="bg-brand-light-gray section-padding">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Sobre a <span className="text-gradient">NTC Brasil</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos mais que uma construtora. Somos parceiros na realização de
            sonhos e na construção de um futuro sólido e promissor para nossos
            clientes e para a comunidade.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
