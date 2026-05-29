import { motion } from 'framer-motion'
import { benefits, brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function BenefitsSection() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <RevealSection className="py-16 md:py-20 relative overflow-hidden">
      {/* Parchment-like section bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(26,19,5,0.3) 0%, rgba(10,14,39,0.6) 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title font-marathi">{benefits.title}</h2>
          <div className="gold-divider" />
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {benefits.items.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex items-start gap-4 p-5 rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'linear-gradient(135deg, rgba(30,38,96,0.7) 0%, rgba(10,14,39,0.9) 100%)',
                border: '1px solid rgba(244,196,48,0.18)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.35)'
              }}
            >
              {/* Gradient icon circle */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 bg-gradient-to-br ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
              >
                {item.icon}
              </div>

              <div className="flex flex-col justify-center">
                <p className="font-marathi text-sm md:text-base font-semibold text-white leading-snug">
                  {item.text}
                </p>
              </div>

              {/* Check indicator */}
              <div className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(244,196,48,0.15)' }}>
                <svg className="w-3 h-3 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-8 bg-gradient-to-br ${item.color} transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Free badge strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-3xl border border-gold-500/25"
          style={{ background: 'linear-gradient(135deg, rgba(244,196,48,0.07) 0%, rgba(10,14,39,0.8) 100%)' }}
        >
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-marathi text-2xl md:text-3xl font-bold text-gold-300">पूर्णतः FREE</span>
            <span className="font-sans text-white/55 text-sm">नोंदणी आवश्यक • जागा मर्यादित</span>
          </div>
          <div className="sm:ml-auto">
            <a
              href={brand.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-4 px-10 text-base"
            >
              <WhatsAppIcon className="w-5 h-5" />
              आत्ताच Join करा
            </a>
          </div>
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

