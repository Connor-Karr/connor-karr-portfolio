import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import { personalInfo } from '@data/personalInfo';

const About = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-800" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Get to know me better
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 p-1">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-dark-900 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-600">📍</span>
                    {personalInfo.location}
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-600">💼</span>
                    {personalInfo.title}
                  </li>
                  <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="text-primary-600">🎯</span>
                    {personalInfo.availability.message}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
