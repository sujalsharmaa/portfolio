'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'go-grpc-graphql-microservices',
      description: 'Production-ready microservices project showcasing GoLang, gRPC, GraphQL, PostgreSQL, Elasticsearch, and Docker Compose.',
      technologies: ['Go', 'gRPC', 'GraphQL', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Docker Compose'],
      github: 'https://github.com/sujalsharmaa/go-grpc-graphql-microservices',
      featured: true,
    },
    {
      title: 'CloudSync',
      description: 'Cloud synchronization solution built with TypeScript. Handles distributed data synchronization across multiple cloud regions.',
      technologies: ['TypeScript', 'Cloud', 'AWS'],
      github: 'https://github.com/sujalsharmaa/CloudSync',
      featured: true,
    },
    {
      title: 'LMS-Platform',
      description: 'Learning Management System platform with modern tech stack. Full-featured educational platform with user management and course delivery.',
      technologies: ['TypeScript', 'Node.js', 'React', 'MongoDB', 'PostgreSQL'],
      github: 'https://github.com/sujalsharmaa/LMS-Platform',
      featured: true,
    },
    {
      title: 'ecommerce-app',
      description: 'Full-stack e-commerce application with TypeScript. Includes product catalog, shopping cart, and payment integration.',
      technologies: ['TypeScript', 'Node.js', 'React', 'MongoDB'],
      github: 'https://github.com/sujalsharmaa/ecommerce-app',
    },
    {
      title: 'Twitter Clone',
      description: 'Social media application clone with real-time features. Built with modern tech stack including WebSockets for live updates.',
      technologies: ['TypeScript', 'Node.js', 'React', 'WebSockets', 'MongoDB'],
      github: 'https://github.com/sujalsharmaa/twitter',
    },
    {
      title: 'URL Shortener',
      description: 'Scalable URL shortening service with analytics. Infrastructure-as-code deployment with Terraform.',
      technologies: ['TypeScript', 'Node.js', 'Redis', 'Terraform'],
      github: 'https://github.com/sujalsharmaa/Url-Shortner',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
            <span className="text-primary text-sm font-semibold">Featured Work</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 mt-4"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group rounded-lg overflow-hidden border transition-all ${
                project.featured
                  ? 'bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 glow-effect hover:shadow-primary/20'
                  : 'bg-gray-900 border-gray-700 hover:border-primary/30'
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                  {project.featured && (
                    <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Featured</span>
                  )}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-400 transition-colors font-semibold group/link"
                >
                  View on GitHub
                  <Github className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
