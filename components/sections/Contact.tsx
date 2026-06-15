'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sujalsharma151@gmail.com',
      href: 'mailto:sujalsharma151@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sujalsharma',
      href: 'https://linkedin.com/in/sujalsharma',
      color: 'text-blue-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/sujalsharmaa',
      href: 'https://github.com/sujalsharmaa',
      color: 'text-gray-400',
    },
    {
      icon: MessageCircle,
      title: 'Medium',
      value: 'medium.com/@sujalsharma151',
      href: 'https://medium.com/@sujalsharma151',
      color: 'text-gray-300',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-4">
            <span className="text-primary text-sm font-semibold">Get In Touch</span>
          </div>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4 mt-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-xl text-gray-400 mb-12"
        >
          I'm always interested in hearing about new projects and opportunities. Whether you want to discuss cloud infrastructure, DevOps practices, or just say hello, feel free to reach out!
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-800 group-hover:bg-primary/20 transition-colors ${method.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Looking forward to collaborating with you on exciting cloud and DevOps projects!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
