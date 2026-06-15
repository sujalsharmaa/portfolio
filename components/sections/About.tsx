'use client';

import { motion } from 'framer-motion';

const About = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
            <span className="text-primary text-sm font-semibold">About Me</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-4xl md:text-5xl font-bold mb-8 mt-4"
        >
          Cloud & DevOps Engineer from India
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg text-gray-400 mb-6">
            I'm a passionate Cloud and DevOps Engineer with deep expertise in building and managing scalable cloud infrastructure. My specialty lies in containerization, orchestration, and solving complex distributed systems challenges.
          </p>

          <p className="text-lg text-gray-400 mb-6">
            With hands-on experience in Kubernetes, AWS, and modern DevOps practices, I help organizations build reliable, scalable, and secure cloud solutions. I'm particularly skilled in:
          </p>

          <ul className="text-lg text-gray-400 space-y-3 mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Setting up and managing Kubernetes clusters in production environments</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Designing and implementing CI/CD pipelines using GitHub Actions and other tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Building monitoring and observability solutions with Elasticsearch, Tempo, and Loki</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Creating microservices architectures with gRPC and GraphQL</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 mt-1">✓</span>
              <span>Solving complex distributed systems challenges</span>
            </li>
          </ul>

          <p className="text-lg text-gray-400">
            Currently learning about the EFK stack, Tempo, and Loki to deepen my observability expertise. I regularly write technical articles on Medium to share knowledge with the community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
