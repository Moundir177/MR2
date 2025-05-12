import { motion } from 'framer-motion';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Join thousands of students who have transformed their careers with our industry-leading courses.
              Enroll now and take the first step toward your future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/courses" 
                className="px-8 py-4 rounded-lg bg-white text-blue-700 font-bold text-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Browse Courses
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-colors duration-300"
              >
                Contact an Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 