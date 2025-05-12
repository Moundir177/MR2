import { motion } from 'framer-motion';

const partnerLogos = [
  { name: 'Company 1', logo: '🏢' },
  { name: 'Company 2', logo: '🏛️' },
  { name: 'Company 3', logo: '🏭' },
  { name: 'Company 4', logo: '🏗️' },
  { name: 'Company 5', logo: '🏢' },
  { name: 'Company 6', logo: '🏬' },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our courses and graduates are recognized by top companies across industries
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center h-24 w-24 bg-gray-50 rounded-lg mb-3">
                <span className="text-5xl">{partner.logo}</span>
              </div>
              <p className="text-gray-700 font-medium">{partner.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-600">
            Want to become a partner? <a href="/contact" className="text-blue-600 font-medium hover:text-blue-800 underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection; 