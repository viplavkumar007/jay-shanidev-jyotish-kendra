import { motion } from 'framer-motion'
import { painPoint, brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'

export default function PainPointSection() {
  return (
    <RevealSection className="py-14 md:py-20 relative overflow-hidden">
      {/* Deep maroon accent background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(96,20,10,0.3) 0%, rgba(10,14,39,0.8) 60%, transparent 100%)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Big bold quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-5xl md:text-7xl font-display text-gold-500/20 leading-none select-none" aria-hidden="true">"</div>
          <h2 className="font-marathi text-2xl md:text-4xl font-bold text-white leading-tight -mt-4 px-4">
            {painPoint.highlight}
          </h2>
          <div className="text-5xl md:text-7xl font-display text-gold-500/20 leading-none select-none mt-2" aria-hidden="true">"</div>
        </motion.div>

        {/* Separator */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />
          <span className="text-gold-400 text-xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />
        </div>

        {/* Problem statement */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-marathi text-xl md:text-3xl font-bold text-gold-300 mb-4"
        >
          {painPoint.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="font-marathi text-base md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-4"
        >
          {painPoint.body}
        </motion.p>

        {/* "Why?" explanation card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-block mt-4 px-6 py-4 rounded-2xl border border-amber-500/30 text-left"
          style={{ background: 'rgba(244,196,48,0.06)' }}
        >
          <p className="font-marathi text-base md:text-lg text-gold-200">
            <span className="text-amber-400 font-bold">"का?"</span> कारण त्यांच्याकडे नाही –{' '}
            <span className="text-gold-300 font-bold">योग्य Prediction Formula!</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={brand.whatsappCommunity}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember py-4 px-10 text-base"
          >
            🔮 Solution जाणून घ्या
          </a>
        </motion.div>
      </div>
    </RevealSection>
  )
}

