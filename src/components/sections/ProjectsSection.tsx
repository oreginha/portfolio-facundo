import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data';
import { useIntersectionObserver } from '@/hooks';
import { filterProjectsByCategory } from '@/utils/helpers';

const categories = [
  { id: 'all', label: 'Todos', icon: '💻' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'mobile', label: 'Móvil', icon: '📱' },
  { id: 'ai', label: 'AI', icon: '🤖' },
  { id: 'desktop', label: 'Desktop', icon: '🖥️' }
];

const statusColors = {
  completed: 'default',
  'in-progress': 'secondary',
  planning: 'outline'
};

const statusLabels = {
  completed: 'Completado',
  'in-progress': 'En Progreso',
  planning: 'Planeando'
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const filteredProjects = filterProjectsByCategory(projects, activeCategory);

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

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <motion.div
      layout
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/10 to-purple-500/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop`;
            }}
          />
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.liveUrl && (
              <Button
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
              >
                <Github className="h-4 w-4 mr-2" />
                Código
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedProject(project.id)}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <Eye className="h-4 w-4 mr-2" />
              Detalles
            </Button>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <Badge variant={statusColors[project.status] as any}>
              {statusLabels[project.status]}
            </Badge>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-500 text-black">
                ⭐ Destacado
              </Badge>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </CardHeader>

        <CardContent>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4} más
              </Badge>
            )}
          </div>

          {/* Year */}
          <div className="text-xs text-muted-foreground">
            {project.year}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Una colección de proyectos que demuestran mis habilidades y experiencia 
              en diferentes tecnologías y dominios.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div className="flex flex-wrap justify-center gap-2 mb-12" variants={itemVariants}>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.label}
                {category.id === 'all' && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {projects.length}
                  </Badge>
                )}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">
                No hay proyectos en esta categoría aún.
              </p>
            </motion.div>
          )}

          {/* GitHub CTA */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <p className="text-muted-foreground mb-4">
              ¿Quieres ver más de mi trabajo?
            </p>
            <Button
              variant="outline"
              onClick={() => window.open('https://github.com/oreginha', '_blank')}
              className="group"
            >
              <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              Ver GitHub Completo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal - Placeholder for future implementation */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content would go here */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Detalles del Proyecto</h3>
              <p className="text-muted-foreground">
                Modal de detalles del proyecto (por implementar)
              </p>
              <Button 
                className="mt-4" 
                onClick={() => setSelectedProject(null)}
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
