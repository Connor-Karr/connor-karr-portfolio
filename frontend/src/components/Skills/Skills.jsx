import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { skillCategories } from '@data/skills';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const Skills = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const getIcon = (iconName) => {
    const Icons = { ...FaIcons, ...SiIcons };
    const Icon = Icons[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Skills & Expertise</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600">
                    {getIcon(category.icon)}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isIntersecting ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
