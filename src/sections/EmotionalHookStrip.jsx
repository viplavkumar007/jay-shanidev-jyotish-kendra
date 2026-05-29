import { motion } from 'framer-motion'
import RevealSection from '../components/RevealSection'

const painLines = [
  'ग्रह दिसतात पण त्यांचा परिणाम समजत नाही?',
  'दशा आणि गोचर जोडताना अडचण येते?',
  'विवाह, करिअर आणि पैसा यांचे अचूक Prediction होत नाही?',
  'अनेक पुस्तके वाचूनही Practical Knowledge मिळत नाही?'
]

export default function EmotionalHookStrip() {
  return (
    <RevealSection className="py-10 md:py-14 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(8,11,28,0.95) 0%, rgba(20,26,68,0.85) 60%, rgba(8,11,28,0.95) 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-6 md:p-8 border border-rose-500/30"
          style={{ background: 'rgba(8, 10, 22, 0.85)', boxShadow: '0 0 40px rgba(189, 24, 54, 0.15)' }}
        >
          <h2 className="font-marathi text-xl md:text-3xl font-bold text-rose-300 mb-5">
            🚩 फलादेश करताना Confusion होते का?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {painLines.map((line) => (
              <div key={line} className="rounded-xl px-4 py-3 text-sm md:text-base text-white/90 border border-white/10 bg-white/5 font-marathi">
                ❌ {line}
              </div>
            ))}
          </div>

          <p className="mt-6 font-marathi text-lg md:text-2xl font-bold text-amber-300">
            👉 मग ही कार्यशाळा तुमच्यासाठीच आहे!
          </p>
        </motion.div>
      </div>
    </RevealSection>
  )
}

