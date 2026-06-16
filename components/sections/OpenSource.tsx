'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const contributions = [
    {
      name: 'Percona Server MongoDB Operator',
      description: 'Kubernetes operator for managing Percona Server MongoDB deployments. Contributes to open-source database operations.',
      link: 'https://github.com/sujalsharmaa/percona-server-mongodb-operator',
      tags: ['Kubernetes', 'MongoDB', 'DevOps', 'Operator'],
    },
    {
      name: 'YouTube Comments Downloader',
      description: 'TypeScript utility to download and analyze YouTube comments. Useful for content analysis and research.',
      link: 'https://github.com/sujalsharmaa/youtube-comments-downloader',
      tags: ['TypeScript', 'YouTube API', 'Automation'],
    },
    {
      name: 'Python ELK Stack',
      description: 'Python implementation and examples for the ELK (Elasticsearch, Logstash, Kibana) stack. Educational resource for logging and monitoring.',
      link: 'https://github.com/sujalsharmaa/python-ELK',
      tags: ['Python', 'Elasticsearch', 'Logging', 'Monitoring'],
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="opensource" className="py-20 px-4 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30 mb-4">
            <span className="text-secondary text-sm font-semibold">Open Source</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 mt-4"
        >
          Open Source Contributions
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {contributions.map((contrib, idx) => (
            <motion.a
              key={idx}
              href={contrib.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-secondary/50 transition-all glow-effect hover:shadow-secondary/10"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold group-hover:text-secondary transition-colors flex-1">
                  {contrib.name}
                </h3>
                <ExternalLink className="text-gray-500 group-hover:text-secondary transition-colors flex-shrink-0 ml-2" size={20} />
              </div>
              <p className="text-gray-400 mb-4">{contrib.description}</p>
              <div className="flex flex-wrap gap-2">
                {contrib.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-medium border border-secondary/30 hover:bg-secondary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;
