import { motion } from 'framer-motion'
import { instructor, brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'

export default function InstructorSection() {
  return (
    <RevealSection id="instructor" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, rgba(22,28,74,0.6) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div
                className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(244,196,48,0.15), transparent 60%)', border: '1px solid rgba(244,196,48,0.2)' }}
                aria-hidden="true"
              />
              <img
                src={instructor.image}
                alt="शनिसेवक शेषराज पाटील"
                className="relative w-full max-w-[320px] rounded-2xl object-cover shadow-[0_16px_64px_rgba(0,0,0,0.7)] border border-gold-500/20"
                style={{ minHeight: '380px', objectFit: 'cover', objectPosition: 'top' }}
                loading="lazy"
              />
              {/* Name tag */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl text-center shadow-xl border border-gold-500/30 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #1e2660 0%, #0a0e27 100%)' }}
              >
                <div className="font-marathi text-gold-300 font-bold text-lg">शनिसेवक शेषराज पाटील</div>
                <div className="text-gold-500/70 text-xs font-display tracking-wider uppercase">Jyotish Acharya</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-3 w-full max-w-xs">
              {instructor.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="gold-border-card flex flex-col items-center gap-1 p-3 text-center"
                >
                  <div className="text-gold-300 text-xl md:text-2xl font-bold font-display">{stat.number}</div>
                  <div className="text-white/50 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-widest uppercase"
                style={{ background: 'rgba(244,196,48,0.12)', color: '#f4c430', border: '1px solid rgba(244,196,48,0.25)' }}
              >
                तर आता काळजी नाही!
              </div>
              <h2 className="section-title text-left text-3xl md:text-4xl font-marathi">{instructor.title}</h2>
              <div className="w-16 h-0.5 mt-3 mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, #f4c430, transparent)' }} />
            </div>

            <p className="font-marathi text-lg md:text-xl text-white/80 leading-relaxed">
              {instructor.body}
            </p>

            {/* Quote block */}
            <blockquote
              className="relative px-6 py-5 rounded-2xl border-l-4 border-gold-500"
              style={{ background: 'rgba(244,196,48,0.07)' }}
            >
              <span className="absolute -top-3 left-4 text-gold-400 text-4xl font-display leading-none select-none" aria-hidden="true">"</span>
              <p className="font-marathi text-gold-200 italic text-base md:text-lg leading-relaxed">
                {instructor.quote}
              </p>
            </blockquote>

            {/* Credentials */}
            <div className="flex flex-col gap-2">
              {[
                '🎓 15+ वर्षांचा ज्योतिष अध्यापनाचा अनुभव',
                '📚 Vedic Astrology तज्ञ – Theory + Practical',
                '🌟 5000+ satisfied students across Maharashtra',
                '🔴 LIVE Interactive Sessions with Q&A'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/70 text-sm font-sans">
                  <span className="mt-0.5 text-base shrink-0">{item.split(' ')[0]}</span>
                  <span>{item.slice(item.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>

            <a
              href={brand.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-fit text-base py-4 px-8"
            >
              🙏 Workshop Join करा
            </a>
          </motion.div>
        </div>
      </div>
    </RevealSection>
  )
}

