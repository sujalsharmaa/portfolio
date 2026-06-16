'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Developer – Associate',
      code: '',
      issuer: 'Amazon Web Services',
      date: '2026',
      description: 'AWS Certified Developer – Associate',
      link: '#',
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      code: '',
      issuer: 'HashiCorp',
      date: '2026',
      description: 'Terraform Associate certification',
      link: '#',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30 mb-4">
            <span className="text-secondary text-sm font-semibold">Certifications</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 mt-4"
        >
          Professional Certifications
        </motion.h2>

        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="group block bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-secondary/50 transition-all glow-effect hover:shadow-secondary/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-secondary font-semibold text-sm mt-1">
                      {cert.code} • {cert.issuer}
                    </p>
                    <p className="text-gray-400 mt-2">{cert.description}</p>
                    <p className="text-gray-500 text-sm mt-2">Issued: {cert.date}</p>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
