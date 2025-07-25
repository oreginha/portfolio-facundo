import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
// import { Progress } from '@/components/ui/Progress';
import { skills } from '@/data';
import { useIntersectionObserver } from '@/hooks';
import { getCategoryIcon } from '@/utils/helpers';

const skillCategories = [
  { id: 'backend', label: 'Backend', color: 'bg-blue-500' },
  { id: 'frontend', label: 'Frontend', color: 'bg-green-500' },
  { id: 'database', label: 'Database', color: 'bg-purple-500' },
  { id: 'mobile', label: 'Mobile', color: 'bg-pink-500' },
  { id: 'ai', label: 'AI & ML', color: 'bg-orange-500' },
  { id: 'tools', label: 'Tools', color: 'bg-gray-500' }
];

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${(level / 5) * 100}%`,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 1: return 'Básico';
      case 2: return 'Principiante';
      case 3: return 'Intermedio';
      case 4: return 'Avanzado';
      case 5: return 'Experto';
      default: return 'Sin definir';
    }
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-blue-500';
      case 5: return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const groupedSkills = skillCategories.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.id)
  }));

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">Habilidades</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un resumen de las tecnologías y herramientas que domino, 
              organizadas por categorías y con mi nivel de experiencia en cada una.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedSkills.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      <span className="flex items-center gap-2">
                        {getCategoryIcon(category.id)}
                        {category.label}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <span className="text-xs text-muted-foreground">
                              {getLevelLabel(skill.level)}
                            </span>
                          </div>
                          
                          {/* Custom Progress Bar */}
                          <div className="relative">
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full ${getLevelColor(skill.level)} rounded-full`}
                                variants={progressVariants}
                                custom={skill.level}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                              />
                            </div>
                            
                            {/* Level indicators */}
                            <div className="flex justify-between mt-1">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <div
                                  key={level}
                                  className={`w-1 h-1 rounded-full ${
                                    skill.level >= level ? category.color : 'bg-muted'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {skills.filter(s => s.level === 5).length}
              </div>
              <div className="text-sm text-muted-foreground">Tecnologías Expertas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {skills.filter(s => s.level >= 4).length}
              </div>
              <div className="text-sm text-muted-foreground">Nivel Avanzado+</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {skills.filter(s => s.category === 'backend').length + 
                 skills.filter(s => s.category === 'frontend').length}
              </div>
              <div className="text-sm text-muted-foreground">Full Stack</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {new Date().getFullYear() - 2020}+
              </div>
              <div className="text-sm text-muted-foreground">Años Programando</div>
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8"
            variants={itemVariants}
          >
            <h4 className="text-xl font-semibold mb-4">Filosofía de Aprendizaje</h4>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Creo firmemente en el aprendizaje continuo y la adaptación a nuevas tecnologías. 
              Mi enfoque se basa en entender los fundamentos sólidos que me permiten aprender 
              rápidamente cualquier nueva herramienta o framework que el proyecto requiera.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Aprendizaje continuo
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Fundamentos sólidos
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Adaptabilidad
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Curiosidad técnica
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
