import { motion } from 'framer-motion';
import {
  ClipboardList,
  HardHat,
  DraftingCompass,
  CheckCircle,
} from 'lucide-react';

export default function Services() {
  const approachSteps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-brand-white" />,
      title: 'Planejamento Detalhado',
      description:
        'Cada projeto começa com um planejamento meticuloso, garantindo que todos os aspectos sejam considerados para uma execução sem surpresas.',
    },
    {
      icon: <DraftingCompass className="h-10 w-10 text-brand-white" />,
      title: 'Engenharia de Precisão',
      description:
        'Utilizamos as mais recentes tecnologias e técnicas de engenharia para garantir estruturas seguras, eficientes e duradouras.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-brand-white" />,
      title: 'Gestão de Obra Eficaz',
      description:
        'Nossa equipe de gestão experiente coordena todos os processos, mantendo o cronograma e o orçamento sob controle rigoroso.',
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-white" />,
      title: 'Controle de Qualidade',
      description:
        'Implementamos um sistema de controle de qualidade em todas as fases do projeto, assegurando um acabamento impecável e a satisfação total do cliente.',
    },
  ];

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-brand-white">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Nossa Abordagem <span className="text-gradient">Diferenciada</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Não temos uma lista de serviços, pois cada projeto é único. Nossa
            abordagem é o nosso principal diferencial, garantindo excelência do
            início ao fim.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-brand-blue rounded-xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-site.jpg"
              alt="Canteiro de obras moderno"
              className="relative w-full h-auto object-cover rounded-xl shadow-2xl"
            />
          </motion.div>

          <motion.ul
            className="space-y-8"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {approachSteps.map((step, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-6"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 bg-brand-blue rounded-full p-4 shadow-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
