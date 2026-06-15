'use client';

import { motion } from 'framer-motion';

const TechStack = () => {
  const techCategories = [
    {
      category: 'Cloud Infrastructure',
      items: [
        { name: 'Kubernetes', level: 'Expert' },
        { name: 'AWS', level: 'Advanced' },
        { name: 'Docker', level: 'Expert' },
        { name: 'Terraform', level: 'Advanced' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MongoDB', level: 'Advanced' },
        { name: 'Redis', level: 'Advanced' },
        { name: 'Elasticsearch', level: 'Advanced' },
      ],
    },
    {
      category: 'Languages',
      items: [
        { name: 'Go', level: 'Advanced' },
        { name: 'TypeScript', level: 'Expert' },
        { name: 'Python', level: 'Advanced' },
        { name: 'JavaScript', level: 'Expert' },
      ],
    },
    {
      category: 'Frameworks & Tools',
      items: [
        { name: 'Node.js', level: 'Expert' },
        { name: 'GraphQL', level: 'Advanced' },
        { name: 'gRPC', level: 'Advanced' },
        { name: 'GitHub Actions', level: 'Advanced' },
      ],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const levelColors = {
    Expert: 'bg-primary/30 text-primary border-primary/50',
    Advanced: 'bg-secondary/30 text-secondary border-secondary/50',
    Intermediate: 'bg-gray-700/30 text-gray-300 border-gray-700/50',
  };

  return (
    <section id="techstack" className="py-20 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
            <span className="text-primary text-sm font-semibold">Technology Stack</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 mt-4"
        >
          Technologies I Love
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-300">{item.name}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        levelColors[item.level as keyof typeof levelColors] || 'bg-gray-700 text-gray-300 border-gray-600'
                      }`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
