import { motion } from 'framer-motion'
import { finalCta, trust, brand } from '../data/siteContent'

export default function CTAStrip() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Animated pulse background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse at center, rgba(192,57,43,0.3) 0%, rgba(10,14,39,0.9) 60%)',
            'radial-gradient(ellipse at center, rgba(212,164,55,0.25) 0%, rgba(10,14,39,0.9) 60%)',
            'radial-gradient(ellipse at center, rgba(192,57,43,0.3) 0%, rgba(10,14,39,0.9) 60%)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,196,48,0.6), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,196,48,0.6), transparent)' }} aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Urgency lines */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 flex-wrap mb-8">
          {trust.lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-marathi font-semibold text-gold-200"
              style={{ background: 'rgba(244,196,48,0.1)', border: '1px solid rgba(244,196,48,0.2)' }}
            >
              {i === 0 ? '⭐' : i === 1 ? '🔔' : '⚡'} {line}
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-marathi text-2xl md:text-4xl font-bold text-white mb-3 leading-tight"
        >
          {finalCta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="font-sans text-white/55 text-sm mb-8"
        >
          {finalCta.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, type: 'spring', stiffness: 200 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={brand.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-5 px-12 text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {finalCta.button}
          </a>
          <a
            href={`tel:${brand.phone}`}
            className="btn-gold py-5 px-12 text-lg"
          >
            📞 {brand.phoneDisplay}
          </a>
        </motion.div>

        {/* Free badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold-500/30"
          style={{ background: 'rgba(244,196,48,0.07)' }}
        >
          <span className="text-gold-400 text-sm">✦</span>
          <span className="font-marathi text-gold-300 font-bold text-sm">100% FREE • No Hidden Charges • No Spam</span>
          <span className="text-gold-400 text-sm">✦</span>
        </motion.div>
      </div>
    </section>
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
