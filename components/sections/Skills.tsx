'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & Platforms',
      skills: ['AWS (EKS, EC2, S3, IAM, Route53, CloudFront, Lambda, RDS, CloudWatch, API Gateway)', 'Terraform', 'Serverless'],
    },
    {
      category: 'Containerization & Orchestration',
      skills: ['Docker', 'Kubernetes (EKS)', 'Helm', 'Istio'],
    },
    {
      category: 'Observability',
      skills: ['Prometheus', 'Grafana', 'Kiali', 'CloudWatch'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'ChromaDB'],
    },
    {
      category: 'Backend & Languages',
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'DevOps & CI/CD',
      skills: ['Jenkins', 'Argo CD', 'GitOps', 'Bash', 'Linux'],
    },
    {
      category: 'Messaging & Streaming',
      skills: ['Kafka', 'Redis Pub/Sub'],
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
    <section id="skills" className="py-20 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
            <span className="text-primary text-sm font-semibold">Skills & Expertise</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 mt-4"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary/50 transition-colors glow-effect hover:shadow-primary/10"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
