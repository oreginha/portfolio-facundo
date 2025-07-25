import { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data';
import { scrollToSection, downloadCV } from '@/utils/helpers';
import { motion } from 'framer-motion';

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = personalInfo.title;
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [fullText]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face';
                }}
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p 
            className="text-lg text-muted-foreground mb-4"
            variants={itemVariants}
          >
            👋 ¡Hola! Soy
          </motion.p>

          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Animated title */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground h-16 flex items-center justify-center">
              {displayedText}
              <span className="ml-1 animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            variants={itemVariants}
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group"
            >
              Ver Mis Proyectos
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={downloadCV}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Descargar CV
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
