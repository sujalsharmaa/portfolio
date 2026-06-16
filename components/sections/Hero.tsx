'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
              <span className="text-primary text-sm font-semibold">Welcome to my portfolio</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <div className="mr-6">
              <Image
                src="/sujalsharma_image%20-%20Copy.jpg"
                alt="Sujal Sharma"
                width={160}
                height={160}
                className="rounded-full object-cover"
              />
            </div>
            <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sujal Sharma</span>
          </motion.h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-400 mb-4"
          >
            Cloud & DevOps Engineer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto"
          >
            Passionate about building scalable cloud infrastructure and solving complex distributed systems problems. Specialized in Kubernetes, AWS, and modern DevOps practices.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 font-semibold transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 font-semibold transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/sujalsharmaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sujalsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sujalsharma151@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
