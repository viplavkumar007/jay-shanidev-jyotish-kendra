import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs, brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen
          ? 'linear-gradient(135deg, rgba(30,38,96,0.95) 0%, rgba(22,28,74,0.9) 100%)'
          : 'linear-gradient(135deg, rgba(15,20,56,0.8) 0%, rgba(10,14,39,0.9) 100%)',
        border: `1px solid ${isOpen ? 'rgba(244,196,48,0.4)' : 'rgba(244,196,48,0.15)'}`,
        boxShadow: isOpen ? '0 4px 24px rgba(244,196,48,0.1)' : 'none',
        transition: 'all 0.35s ease'
      }}
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className="font-marathi font-bold text-sm md:text-base text-white leading-snug">
          <span className="text-gold-400 mr-2">{String(index + 1).padStart(2, '0')}.</span>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            background: isOpen ? 'rgba(244,196,48,0.2)' : 'rgba(255,255,255,0.07)',
            border: `1px solid ${isOpen ? 'rgba(244,196,48,0.4)' : 'rgba(255,255,255,0.1)'}`
          }}
        >
          <svg className={`w-4 h-4 ${isOpen ? 'text-gold-300' : 'text-white/50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6">
              <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, rgba(244,196,48,0.3), transparent)' }} />
              <p className="font-marathi text-white/70 text-sm md:text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <RevealSection id="faq" className="py-16 md:py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(22,28,74,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title font-marathi">वारंवार विचारले जाणारे प्रश्न</h2>
          <div className="gold-divider" />
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="font-sans text-white/50 text-sm mb-5">
            आणखी प्रश्न आहेत? आम्हाला WhatsApp करा!
          </p>
          <a
            href={brand.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-3.5 px-8 text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            +91 75075 36502
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
