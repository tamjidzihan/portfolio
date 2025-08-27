import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:tamjidzihan@gmail.com',
      text: 'tamjidzihan@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/tamjid-islam',
      text: 'linkedin.com/in/tamjid-islam'
    },
    {
      icon: Globe,
      label: 'Portfolio',
      href: 'https://tizdev.netlify.app',
      text: 'tizdev.netlify.app'
    }
  ];

  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    asChild
                    className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{link.text}</span>
                      <span className="sm:hidden">{link.label}</span>
                    </a>
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8"
          >
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Md. Tamzid Islam. Made with <Heart className="h-4 w-4 text-red-500" /> using React & TypeScript
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;