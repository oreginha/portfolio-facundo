import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '@/data';
import { scrollToSection } from '@/utils/helpers';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.contact.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: personalInfo.contact.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.contact.email}`,
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'Sobre Mí', section: 'about' },
    { label: 'Experiencia', section: 'experience' },
    { label: 'Proyectos', section: 'projects' },
    { label: 'Habilidades', section: 'skills' },
    { label: 'Contacto', section: 'contact' }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-xl mb-4">
              Facundo<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Desarrollador Full Stack especializado en .NET y React. 
              Transformando ideas en soluciones digitales innovadoras con 
              enfoque en AI y automatización.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-background border hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>La Plata, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a 
                  href={`tel:${personalInfo.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${personalInfo.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Facundo Álvarez. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-red-500" /> y mucho café
          </p>
        </div>
      </div>
    </footer>
  );
}
