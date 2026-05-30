import { useState } from 'react'
import { motion } from 'framer-motion'
import { hero, brand, workshopDetails } from '../data/siteContent'

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } }
  },
  item: {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  }
}

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 30% 0%, #1e2660 0%, #0a0e27 45%, #05060f 100%)' }}
    >
      {/* Animated starfield background */}
      <StarField />

      {/* Zodiac ring decoration */}
      <div
        className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gold-600/10 animate-spin-slow pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[360px] h-[360px] md:w-[520px] md:h-[520px] rounded-full border border-gold-500/8 animate-spin-slow pointer-events-none"
        style={{ animationDirection: 'reverse', animationDuration: '60s' }}
        aria-hidden="true"
      />

      {/* Gold glow behind instructor */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none hidden lg:block"
        style={{ background: 'radial-gradient(ellipse at center, rgba(212,164,55,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left — text content */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start gap-5 md:-mt-10 lg:-mt-14"
          >
            {/* Badge */}
            <motion.div variants={stagger.item}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold text-cosmos-950 tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #f4c430 0%, #e0ac1c 100%)',
                  boxShadow: '0 4px 16px rgba(244,196,48,0.4)'
                }}
              >
                🔥 {hero.badge}
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 variants={stagger.item} className="font-marathi text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white text-shadow-sm">{hero.headline}</span>
              <br />
              <span className="text-gold-300 text-shadow-gold">{hero.headlineAccent}</span>
            </motion.h1>

            {/* Sub headline */}
            <motion.p variants={stagger.item} className="font-marathi text-lg md:text-xl text-gold-100/80 leading-relaxed">
              {hero.subheadline}
            </motion.p>

            {/* Supporting */}
            <motion.p variants={stagger.item} className="font-sans text-sm md:text-base text-white/65 leading-relaxed max-w-xl border-l-2 border-gold-500/50 pl-4">
              {hero.supporting}
            </motion.p>

            {/* Workshop quick info */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-3">
              {[
                { icon: '📅', text: '10 जून पासून' },
                { icon: '🕗', text: 'रात्री 8 ते 9' },
                { icon: '🎥', text: 'LIVE Zoom' },
                { icon: '💰', text: 'FREE' }
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gold-200 border border-gold-500/25"
                  style={{ background: 'rgba(244,196,48,0.08)' }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

                        {/* CTA Buttons */}
            <motion.div variants={stagger.item} className="relative z-20 flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full sm:w-auto">
              <motion.a
                href={brand.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 pointer-events-auto btn-gold attention-shake-alt text-xs md:text-sm py-2.5 px-4 md:px-5 whitespace-nowrap w-fit"
                animate={{ x: [0, 4, -4, 3, -3, 0], rotate: [0, 0.8, -0.8, 0.4, -0.4, 0] }}
                transition={{ duration: 0.75, repeat: Infinity, repeatDelay: 1.9, ease: 'easeInOut' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp Community Join करा
              </motion.a>
              <a
                href="#workshop"
                onClick={(e) => { e.preventDefault(); document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="relative z-20 pointer-events-auto btn-gold text-xs md:text-sm py-2.5 px-4 md:px-5 whitespace-nowrap w-fit"
              >
                ✨ {hero.secondaryCta}
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div variants={stagger.item} className="flex items-center gap-4 text-xs text-white/50">
              <span>⭐⭐⭐⭐⭐</span>
              <span>5000+ satisfied students</span>
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline">100% Free. No Hidden Charges.</span>
            </motion.div>
          </motion.div>

          {/* Right — Instructor image + video */}
          <div className="relative flex flex-col items-center gap-4">
            {/* Instructor photo */}
            <motion.div
              initial={{ opacity: 0, y: -130, scale: 0.9, rotate: -3, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl animate-pulse-glow pointer-events-none"
                style={{ background: 'transparent', boxShadow: '0 0 40px rgba(244,196,48,0.25), 0 0 80px rgba(244,196,48,0.1)' }}
              />
              <img
                src={hero.instructorImage}
                alt="शनिसेवक शेषराज पाटील - Astrology Instructor"
                className="relative z-10 w-full max-w-[150px] md:max-w-[195px] rounded-3xl object-cover object-top border-2 border-gold-500/30 shadow-[0_16px_64px_rgba(0,0,0,0.7)]"
                style={{ minHeight: '240px', objectFit: 'cover' }}
                loading="eager"
              />
            </motion.div>

            {/* Video preview card */}
            <motion.div
              initial={{ opacity: 0, x: 260, scale: 0.92, filter: 'blur(12px)' }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.65, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="relative mt-1 md:mt-2 w-full max-w-[520px] rounded-2xl overflow-hidden border border-gold-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              style={{ background: 'rgba(10,14,39,0.9)' }}
            >
              <video
                src={hero.videoSrc}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-64 md:h-72 object-contain bg-cosmos-950/70"
                aria-label="Workshop preview video"
              />
              <button
                type="button"
                onClick={() => setIsMuted((prev) => !prev)}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-black/60 border border-white/20 hover:bg-black/75 transition"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? 'Listen Sound / आवाज ऐका' : 'Mute / आवाज बंद'}
              </button>
              <div className="px-4 py-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  LIVE Workshop Preview
                </span>
                <span className="ml-auto text-xs text-gold-400/60">10 June ▶</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" aria-hidden="true"
        style={{ background: 'linear-gradient(to top, #05060f, transparent)' }} />
    </section>
  )
}

function StarField() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    duration: 2 + Math.random() * 3
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-gold-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
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





