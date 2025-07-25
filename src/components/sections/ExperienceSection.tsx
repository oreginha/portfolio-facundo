import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data';
import { useIntersectionObserver } from '@/hooks';

export function ExperienceSection() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'default';
      case 'freelance': return 'secondary';
      case 'part-time': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'Tiempo Completo';
      case 'freelance': return 'Freelance';
      case 'part-time': return 'Medio Tiempo';
      case 'contract': return 'Contrato';
      default: return type;
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mi <span className="gradient-text">Experiencia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un recorrido por mi trayectoria profesional, los proyectos en los que he trabajado 
              y las tecnologías que he dominado a lo largo de mi carrera.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-1">
                              {experience.position}
                            </CardTitle>
                            <h4 className="text-lg font-semibold text-primary mb-2">
                              {experience.company}
                            </h4>
                          </div>
                          <Badge variant={getTypeColor(experience.type)}>
                            {getTypeLabel(experience.type)}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {experience.period}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Description */}
                        <div>
                          <h5 className="font-semibold mb-3">Responsabilidades:</h5>
                          <ul className="space-y-2">
                            {experience.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        {experience.achievements.length > 0 && (
                          <div>
                            <h5 className="font-semibold mb-3">Logros destacados:</h5>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <ExternalLink className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold mb-3">Tecnologías utilizadas:</h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100K+</div>
              <div className="text-muted-foreground">Usuarios Impactados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Tecnologías Dominadas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
