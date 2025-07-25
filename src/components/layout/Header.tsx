import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { scrollToSection, downloadCV } from '@/utils/helpers';
import { useActiveSection, useScrollPosition } from '@/hooks';
import { cn } from '@/utils/cn';

const navigationItems = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(navigationItems.map(item => item.id));
  
  const isScrolled = scrollY > 50;

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
            onClick={() => handleNavClick('hero')}
          >
            Facundo<span className="text-primary">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.id 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCV}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick('contact')}
            >
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-accent rounded-md",
                    activeSection === item.id 
                      ? "text-primary bg-accent" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadCV}
                  className="flex items-center gap-2 justify-center"
                >
                  <Download className="h-4 w-4" />
                  Descargar CV
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleNavClick('contact')}
                  className="justify-center"
                >
                  Contacto
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
