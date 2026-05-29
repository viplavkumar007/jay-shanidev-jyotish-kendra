import { motion } from 'framer-motion'
import { brand, footer } from '../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative py-10 border-t border-gold-600/15"
      style={{ background: 'linear-gradient(180deg, #0a0e27 0%, #05060f 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src={brand.logo}
                alt="Jay Shanidev Logo"
                className="w-12 h-12 rounded-full border border-gold-500/30 object-cover"
              />
              <div>
                <div className="font-marathi text-gold-300 font-bold text-base leading-tight">जय शनिदेव</div>
                <div className="text-gold-600/60 text-xs font-display tracking-wider">Jyotish Kendra</div>
              </div>
            </div>
            <p className="font-sans text-white/40 text-xs leading-relaxed">
              Online Jyotish Classes • Kundali Analysis • Pro Level Prediction Workshop
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold-400 font-semibold text-sm mb-3 font-display tracking-wide uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Workshop Details', href: '#workshop' },
                { label: 'Instructor', href: '#instructor' },
                { label: 'What You Learn', href: '#learn' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' }
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="text-white/45 hover:text-gold-300 text-xs font-sans transition-colors duration-200 w-fit"
                >
                  › {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-semibold text-sm mb-3 font-display tracking-wide uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-xs font-sans">
              <a href={`tel:${brand.phone}`} className="text-white/45 hover:text-gold-300 transition-colors">
                📞 {brand.phoneDisplay}
              </a>
              <a href={`mailto:${brand.email}`} className="text-white/45 hover:text-gold-300 transition-colors break-all">
                📧 {brand.email}
              </a>
              <span className="text-white/45">📍 {brand.location}</span>
              <a
                href={brand.whatsappCommunity}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.528 5.845L0 24l6.335-1.652A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-4.964-1.347l-.356-.212-3.762.982.998-3.662-.232-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Join WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,196,48,0.25), transparent)' }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-white/30 text-xs font-sans">{footer.copyright}</p>
          <p className="text-white/25 text-xs font-sans">
            Designed with ❤️ for{' '}
            <span className="text-gold-600/60 font-marathi">जय शनिदेव ज्योतिष केंद्र</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

