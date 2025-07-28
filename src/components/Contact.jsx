import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    // Simulação de envio de formulário
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Aqui você integraria com um serviço de e-mail como Formspree, EmailJS, etc.
    // Exemplo: const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... });

    // Simulando sucesso
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-brand-light-gray">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Vamos <span className="text-gradient">Construir Juntos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tem um projeto em mente? Preencha o formulário abaixo ou entre em
            contato. Estamos prontos para transformar sua visão em realidade.
          </p>
        </motion.div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-mail</h4>
                    <a
                      href="mailto:ffbrunoff@yahoo.com.br"
                      className="text-gray-600 hover:text-brand-blue transition-colors"
                    >
                      ffbrunoff@yahoo.com.br
                    </a>
                    <p className="text-sm text-gray-500">
                      Respondemos em até 24 horas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Localização</h4>
                    <p className="text-gray-600">
                      Padre Lebret, 801 G05 Bloco 03
                    </p>
                    <p className="text-sm text-gray-500">
                      Atendemos em toda a região.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-brand-blue focus:border-brand-blue transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center bg-brand-blue text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                  {status === 'sending' && (
                    <Loader className="animate-spin mr-2" />
                  )}
                  {status === 'success' && <Check className="mr-2" />}
                  {status === 'idle' && <Send className="mr-2" />}
                  {status === 'sending'
                    ? 'Enviando...'
                    : status === 'success'
                      ? 'Enviado com Sucesso!'
                      : 'Enviar Mensagem'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
