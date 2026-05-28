import { motion } from 'framer-motion'
import { learnings, brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cardColors = [
  'from-amber-500 to-orange-600',
  'from-blue-500 to-indigo-600',
  'from-rose-500 to-pink-600',
  'from-emerald-500 to-teal-600',
  'from-purple-500 to-violet-600',
  'from-yellow-400 to-amber-500',
  'from-sky-400 to-blue-500',
  'from-red-500 to-rose-600',
  'from-green-400 to-emerald-500',
  'from-fuchsia-500 to-purple-600'
]

export default function LearnSection() {
  const [ref, isVisible] = useScrollReveal(0.1)

  return (
    <RevealSection id="learn" className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(30,38,96,0.4) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-widest uppercase"
            style={{ background: 'rgba(244,196,48,0.12)', color: '#f4c430', border: '1px solid rgba(244,196,48,0.25)' }}
          >
            या Workshop मध्ये शिकाल
          </motion.span>
          <h2 className="section-title font-marathi">
            Pro Level कुंडली फलादेश – <span className="text-white">तुम्ही शिकणार आहात</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-white/55 text-sm max-w-xl mx-auto font-sans">
            Beginner असो किंवा Advanced... ही Workshop तुमचा Confidence वाढवेल!
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {learnings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(135deg, rgba(22,28,74,0.9) 0%, rgba(10,14,39,0.95) 100%)',
                border: '1px solid rgba(244,196,48,0.15)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }}
            >
              {/* Top color accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cardColors[i]}`} />

              <div className="p-5 flex flex-col gap-3">
                {/* Icon with gradient bg */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${cardColors[i]} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-marathi font-bold text-white text-sm md:text-base leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-xs font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Hover glow overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${cardColors[i]} pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA after section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-12"
        >
          <a href={brand.whatsappGroup} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-4 px-10 text-base">
            <WhatsAppIcon className="w-5 h-5" />
            Join WhatsApp Group – Free!
          </a>
        </motion.div>
      </div>
    </RevealSection>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.528 5.845L0 24l6.335-1.652A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-4.964-1.347l-.356-.212-3.762.982.998-3.662-.232-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}
