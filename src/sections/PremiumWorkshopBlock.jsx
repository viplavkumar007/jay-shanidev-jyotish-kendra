import { motion } from 'framer-motion'
import RevealSection from '../components/RevealSection'

const points = [
  'Step-by-Step मार्गदर्शन',
  'Beginner ते Advanced',
  'Real Kundali Examples',
  'FREE Online Workshop'
]

export default function PremiumWorkshopBlock() {
  return (
    <RevealSection className="py-10 md:py-14 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-6 md:p-8 border border-gold-500/35"
          style={{
            background: 'linear-gradient(135deg, rgba(15,20,52,0.95) 0%, rgba(10,14,39,0.95) 100%)',
            boxShadow: '0 8px 36px rgba(244,196,48,0.12)'
          }}
        >
          <h3 className="font-marathi text-2xl md:text-3xl font-bold text-gold-300 mb-3">🔱 ही साधी Astrology Class नाही...</h3>
          <p className="font-marathi text-white/85 text-base md:text-lg leading-relaxed">
            ही एक Practical, Live आणि Advanced Training Workshop आहे जिथे तुम्हाला प्रत्यक्ष कुंडलीचे विश्लेषण करून भविष्य सांगण्याची Professional पद्धत शिकवली जाईल.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {points.map((item) => (
              <div key={item} className="rounded-xl px-4 py-3 border border-gold-500/20 bg-gold-500/5 font-marathi text-gold-100">
                📌 {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </RevealSection>
  )
}

