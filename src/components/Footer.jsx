import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossa Abordagem', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-brand-dark text-brand-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto section-padding !py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752866544780_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto mb-4"
              />
            </a>
            <p className="text-blue-200 max-w-xs">
              Construindo o futuro com qualidade, inovação e compromisso.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider uppercase">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 tracking-wider uppercase">
              Contato
            </h4>
            <ul className="space-y-3 text-blue-200">
              <li>
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="hover:text-white transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li>
                <p>Padre Lebret, 801 G05 Bloco 03</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-800 text-center text-blue-300">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
