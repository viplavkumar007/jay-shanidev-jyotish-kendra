import { motion } from 'framer-motion'
import RevealSection from '../components/RevealSection'

const features = [
  '100% Practical Learning',
  'Live Kundali Analysis',
  'PDF Notes',
  'Q&A Session',
  'Professional Guidance',
  'Consultation Techniques'
]

export default function WorkshopFeaturesSection() {
  return (
    <RevealSection className="py-14 md:py-18 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="section-title font-marathi">💎 या कार्यशाळेची खास वैशिष्ट्ये</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-2xl p-5 border border-gold-400/30"
              style={{ background: 'linear-gradient(135deg, rgba(25,20,5,0.45) 0%, rgba(10,14,39,0.95) 100%)' }}
            >
              <p className="font-marathi text-white text-base md:text-lg">✅ {item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

