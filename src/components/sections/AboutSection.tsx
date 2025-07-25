import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Users, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
// import { personalInfo } from '@/data';
import { useIntersectionObserver } from '@/hooks';

const highlights = [
  {
    icon: Code,
    title: "4+ Años de Experiencia",
    description: "Desarrollando soluciones robustas en .NET y tecnologías modernas"
  },
  {
    icon: Briefcase,
    title: "Sector Público",
    description: "Experiencia en sistemas críticos que sirven a 100,000+ usuarios"
  },
  {
    icon: Users,
    title: "10+ Proyectos",
    description: "Aplicaciones web, móviles y sistemas de automatización entregados"
  },
  {
    icon: Trophy,
    title: "AI & Automatización",
    description: "Especialista en Model Context Protocol y agentes inteligentes"
  }
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce más sobre mi trayectoria, experiencia y las tecnologías 
              que domino para crear soluciones digitales innovadoras.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Mi Historia</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Comencé mi carrera como <strong>Licenciado en Composición con Medios Electroacústicos</strong> 
                      en la Universidad Nacional de La Plata, donde desarrollé una sólida base en 
                      tecnologías digitales y pensamiento creativo.
                    </p>
                    <p>
                      Desde 2021, trabajo como <strong>Full Stack Developer Senior</strong> en el 
                      Ministerio de Seguridad de la Provincia de Buenos Aires, donde lidero el 
                      desarrollo de sistemas críticos que impactan directamente en la seguridad pública.
                    </p>
                    <p>
                      Mi pasión por la <strong>inteligencia artificial y la automatización</strong> me 
                      llevó a especializarme en Model Context Protocol, desarrollando agentes que 
                      optimizan procesos complejos y mejoran la eficiencia operativa.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">¿Qué me motiva?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Resolver problemas complejos con soluciones elegantes y eficientes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Integrar tecnologías emergentes como AI en aplicaciones reales
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Crear software que genere impacto positivo en la sociedad
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Aprender continuamente y mantenerme actualizado con las últimas tendencias
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="font-semibold mb-2">{highlight.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {highlight.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Personal Touch */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h4 className="text-xl font-semibold mb-4">Más allá del código</h4>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, 
              contribuyendo a proyectos open source, y compartiendo conocimientos con 
              la comunidad de desarrolladores. Mi background en música me ayuda a abordar 
              los problemas de programación con creatividad y una perspectiva única.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
