import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data';
import { useIntersectionObserver } from '@/hooks';
import { validateEmail } from '@/utils/helpers';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const ref = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Create mailto link as fallback
      const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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
    <section id="contact" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Hablemos<span className="gradient-text">!</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? ¿O simplemente quieres saludar? 
              Me encantaría conocer tu idea y ver cómo podemos trabajar juntos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">{personalInfo.contact.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Teléfono</div>
                        <div className="text-sm text-muted-foreground">{personalInfo.contact.phone}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Ubicación</div>
                        <div className="text-sm text-muted-foreground">{personalInfo.contact.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="font-semibold mb-4">Sígueme en:</h4>
                    <div className="flex gap-4">
                      <a
                        href={personalInfo.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border transition-all duration-300 hover:bg-gray-900 hover:text-white"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={personalInfo.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg border transition-all duration-300 hover:bg-blue-700 hover:text-white"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-medium text-green-700 dark:text-green-300">Disponible para proyectos</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      Actualmente estoy abierto a nuevas oportunidades y colaboraciones.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Envíame un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Tu nombre completo"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="tu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Asunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="¿De qué quieres hablar?"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        rows={5}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="Cuéntame sobre tu proyecto, idea o simplemente saluda..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                          <CheckCircle className="h-5 w-5" />
                          <span>¡Mensaje enviado! Te responderé pronto.</span>
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
