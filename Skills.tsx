import React from 'react';
import { motion } from 'framer-motion';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref, controls, containerVariants, itemVariants } = useStaggerAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800" },
        { name: "Vue.js", level: 85, color: "from-green-500 to-teal-500" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-cyan-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-600 to-green-800" },
        { name: "Python", level: 82, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL", level: 85, color: "from-blue-700 to-indigo-700" },
        { name: "MongoDB", level: 80, color: "from-green-700 to-green-900" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 78, color: "from-blue-500 to-blue-700" },
        { name: "AWS", level: 75, color: "from-orange-400 to-yellow-500" },
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/20 dark:border-blue-700/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Always Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and methodologies to stay at the cutting edge of web development. 
              Currently diving deep into AI integration and Web3 technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;