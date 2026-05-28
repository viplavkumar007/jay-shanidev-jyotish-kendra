import { motion } from 'framer-motion'
import { workshopDetails, brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'
import { useScrollReveal } from '../hooks/useScrollReveal'

const icons = {
  video: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  ),
  calendar: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  clock: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  gift: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  )
}

const workshopPosters = [
  { src: '/assets/workshop-posters/poster-1.jpeg', title: 'Prediction Formula System' },
  { src: '/assets/workshop-posters/poster-2.jpeg', title: 'Pro Level कुंडली फलादेश कार्यशाळा' },
  { src: '/assets/workshop-posters/poster-3.jpeg', title: 'कोर्स ब्रॉशर आणि Enroll माहिती' },
  { src: '/assets/workshop-posters/poster-4.jpeg', title: '५ दिवसीय फ्री वर्कशॉप प्लॅन' },
  { src: '/assets/workshop-posters/poster-5.jpeg', title: 'कुंडली कशी सोडवावी - बेसिक्स ते अॅडव्हान्स' },
  { src: '/assets/workshop-posters/poster-6.jpeg', title: 'LIVE कुंडली सोडवण्याचा क्लास' },
  { src: '/assets/workshop-posters/poster-7.jpeg', title: 'फलादेशातील अडचणींचे समाधान' },
  { src: '/assets/workshop-posters/poster-8.jpeg', title: 'Professional Astrology System Highlights' }
]

export default function WorkshopSection() {
  const [ref, isVisible] = useScrollReveal(0.15)

  return (
    <RevealSection id="workshop" className="py-16 md:py-24 relative">
      {/* BG accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(30,38,96,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 text-cosmos-950 tracking-widest uppercase"
            style={{ background: 'linear-gradient(135deg, #f4c430, #b8860b)' }}
          >
            FREE Workshop Details
          </motion.div>
          <h2 className="section-title font-marathi">{workshopDetails.title}</h2>
          <div className="gold-divider" />
          <p className="font-sans text-white/60 text-sm md:text-base">{workshopDetails.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {workshopDetails.cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="gold-border-card group flex flex-col items-center gap-3 p-5 md:p-7 text-center"
            >
              {/* Icon circle with gradient */}
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${card.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
              >
                {icons[card.icon]}
              </div>
              <div>
                <div className="text-gold-500/70 text-xs font-semibold uppercase tracking-widest mb-1">{card.label}</div>
                <div className="font-marathi text-white text-lg md:text-xl font-bold leading-tight">{card.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <div className="text-center mb-6">
            <h3 className="font-marathi text-2xl md:text-3xl font-bold text-gold-300">वर्कशॉप पोस्टर्स</h3>
            <p className="text-white/60 text-sm md:text-base mt-2">कार्यशाळेशी संबंधित माहिती आणि हायलाइट्स</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {workshopPosters.map((poster, i) => (
              <motion.figure
                key={poster.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="gold-border-card p-3"
              >
                <img
                  src={poster.src}
                  alt={poster.title}
                  loading="lazy"
                  className="w-full rounded-xl object-cover"
                />
                <figcaption className="mt-3 text-center font-marathi text-sm md:text-base text-gold-100">
                  {poster.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        {/* CTA after section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <a
            href={brand.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base py-4 px-10"
          >
            <WhatsAppIcon className="w-5 h-5" />
            आत्ताच नोंदणी करा – FREE आहे!
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
