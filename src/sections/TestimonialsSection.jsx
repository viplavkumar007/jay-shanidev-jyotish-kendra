import { motion } from 'framer-motion'
import { testimonials } from '../data/siteContent'
import RevealSection from '../components/RevealSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cardGradients = [
  'from-amber-500/10 to-orange-600/5',
  'from-blue-500/10 to-indigo-600/5',
  'from-emerald-500/10 to-teal-600/5',
  'from-purple-500/10 to-violet-600/5'
]
const borderColors = [
  'rgba(245,158,11,0.3)',
  'rgba(99,102,241,0.3)',
  'rgba(16,185,129,0.3)',
  'rgba(139,92,246,0.3)'
]

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <RevealSection className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(30,38,96,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title font-marathi">विद्यार्थ्यांचे अनुभव</h2>
          <div className="gold-divider" />
          <p className="text-white/55 text-sm font-sans">5000+ students ने याचा लाभ घेतला आहे</p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${cardGradients[i]}`}
              style={{
                background: `linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(22,28,74,0.8) 100%)`,
                border: `1px solid ${borderColors[i]}`,
                boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
              }}
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 text-5xl font-display text-gold-500/15 leading-none select-none" aria-hidden="true">"</span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="font-marathi text-white/80 text-sm md:text-base leading-relaxed mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-cosmos-950"
                  style={{ background: `linear-gradient(135deg, #f4c430, #b8860b)` }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-marathi font-bold text-gold-300 text-sm">{t.name}</div>
                  <div className="text-white/45 text-xs font-sans">📍 {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}
