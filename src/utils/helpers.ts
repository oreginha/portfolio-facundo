export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Header height offset
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const downloadCV = () => {
  // Create a link to download CV
  const link = document.createElement('a');
  link.href = '/cv-facundo-alvarez.pdf';
  link.download = 'CV-Facundo-Alvarez.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

export const getSkillColor = (level: number): string => {
  const colors = {
    1: 'bg-red-500',
    2: 'bg-orange-500',
    3: 'bg-yellow-500',
    4: 'bg-blue-500',
    5: 'bg-green-500'
  };
  return colors[level as keyof typeof colors] || 'bg-gray-500';
};

export const getCategoryIcon = (category: string): string => {
  const icons = {
    frontend: '🎨',
    backend: '⚙️',
    database: '🗄️',
    mobile: '📱',
    ai: '🤖',
    tools: '🛠️'
  };
  return icons[category as keyof typeof icons] || '💻';
};

export const filterProjectsByCategory = (projects: any[], category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
