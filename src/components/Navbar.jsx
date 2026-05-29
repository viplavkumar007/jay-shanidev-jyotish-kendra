import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand, navLinks } from '../data/siteContent'
import { useActiveSection } from '../hooks/useScrollReveal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(['home', 'workshop', 'instructor', 'learn', 'faq', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cosmos-950/90 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.6)] border-b border-gold-600/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home') }}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src={brand.logo}
                alt="Jay Shanidev Jyotish Kendra Logo"
                className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover border-2 border-gold-400/60 shadow-[0_0_16px_rgba(244,196,48,0.4)] group-hover:shadow-[0_0_24px_rgba(244,196,48,0.7)] transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-40 pointer-events-none" />
            </div>
            <div className="hidden sm:block">
              <div className="font-marathi text-gold-300 text-sm md:text-base font-bold leading-tight text-shadow-gold">
                जय शनिदेव
              </div>
              <div className="font-display text-gold-500/80 text-[10px] md:text-xs tracking-widest uppercase">
                Jyotish Kendra
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = active === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-gold-300'
                      : 'text-white/70 hover:text-gold-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gold-400"
                    />
                  )}
                </button>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href={brand.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold attention-shake-alt text-sm py-2.5 px-4"
              animate={{ x: [0, 3.5, -3.5, 2.5, -2.5, 0], rotate: [0, 0.7, -0.7, 0.3, -0.3, 0] }}
              transition={{ duration: 0.75, repeat: Infinity, repeatDelay: 2.1, ease: 'easeInOut' }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Community
            </motion.a>
          </div>

          <button
            className="md:hidden p-2 text-gold-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gold-300 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-0.5 bg-gold-300 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-gold-300 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-cosmos-900/95 backdrop-blur-xl border-b border-gold-600/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 font-sans text-white/80 hover:text-gold-300 rounded-xl hover:bg-gold-600/10 transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                href={brand.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold attention-shake-alt mt-2 text-sm"
                onClick={() => setMenuOpen(false)}
                animate={{ x: [0, 3, -3, 2, -2, 0], rotate: [0, 0.6, -0.6, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 2.1, ease: 'easeInOut' }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Join WhatsApp Community
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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


