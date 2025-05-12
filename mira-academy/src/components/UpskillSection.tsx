import { motion } from 'framer-motion';
import Image from 'next/image';

const featureItems = [
  {
    title: "Flexible Learning",
    description: "Learn at your own pace with 24/7 access to courses and materials that fit your schedule.",
    icon: "⏱️"
  },
  {
    title: "Industry-Relevant Skills",
    description: "Gain practical skills that employers are actively seeking in today's competitive job market.",
    icon: "💼"
  },
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience in their respective fields.",
    icon: "👨‍🏫"
  },
  {
    title: "Career Advancement",
    description: "Increase your earning potential and open new career opportunities with in-demand skills.",
    icon: "📈"
  }
];

const UpskillSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full opacity-50"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-3 w-full" style={{ position: 'relative', height: '400px' }}>
                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-lg text-gray-500">
                  {/* Replace with actual image when available */}
                  <div className="text-center p-4">
                    <div className="text-5xl mb-4">🎓</div>
                    <p>Educational illustration showing people learning and growing professionally</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Invest in Your Future with Continuous Learning
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                In today's rapidly evolving job market, continuous learning is essential to staying competitive. 
                Our courses are designed to help you acquire the latest skills and knowledge that employers 
                are looking for, enabling you to advance your career and achieve your professional goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {featureItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpskillSection; 