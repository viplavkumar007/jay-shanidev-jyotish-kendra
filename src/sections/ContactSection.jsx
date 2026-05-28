import { useState } from 'react'
import { motion } from 'framer-motion'
import { brand } from '../data/siteContent'
import RevealSection from '../components/RevealSection'
import Toast from '../components/Toast'

const initialForm = { name: '', phone: '', email: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'नाव आवश्यक आहे'
    if (!form.phone.trim()) errs.phone = 'फोन नंबर आवश्यक आहे'
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'वैध 10-अंकी नंबर द्या'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)

    // Build WhatsApp message
    const waMsg = encodeURIComponent(
      `🙏 नमस्कार सर!\n\nमला Pro Level कुंडली फलादेश कार्यशाळेसाठी नोंदणी करायची आहे.\n\n👤 नाव: ${form.name}\n📱 फोन: ${form.phone}${form.email ? `\n📧 Email: ${form.email}` : ''}${form.message ? `\n💬 संदेश: ${form.message}` : ''}\n\n✅ Jay Shanidev Jyotish Kendra`
    )
    const waUrl = `https://wa.me/91${brand.phone}?text=${waMsg}`

    // Build email
    const emailSubject = encodeURIComponent(`Workshop Enquiry – ${form.name}`)
    const emailBody = encodeURIComponent(
      `नमस्कार,\n\nPro Level कुंडली फलादेश कार्यशाळेसाठी नोंदणी:\n\nनाव: ${form.name}\nफोन: ${form.phone}\nEmail: ${form.email || 'N/A'}\nसंदेश: ${form.message || 'N/A'}\n\nJay Shanidev Jyotish Kendra Website`
    )
    const mailUrl = `mailto:${brand.email}?subject=${emailSubject}&body=${emailBody}`

    setTimeout(() => {
      window.open(waUrl, '_blank')
      window.location.href = mailUrl
      setLoading(false)
      setForm(initialForm)
      setToast({ message: 'तुमची नोंदणी यशस्वी! WhatsApp आणि Email वर संदेश पाठवला गेला. 🙏', type: 'success' })
    }, 800)
  }

  return (
    <RevealSection id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(30,38,96,0.5) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title font-marathi">संपर्क करा</h2>
          <div className="gold-divider" />
          <p className="font-sans text-white/55 text-sm">नोंदणी करा आणि Workshop Join करा</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Logo + name */}
            <div className="flex items-center gap-4 mb-2">
              <img
                src={brand.logo}
                alt="Logo"
                className="w-16 h-16 rounded-full border-2 border-gold-500/40 shadow-gold-glow object-cover"
              />
              <div>
                <div className="font-marathi text-gold-300 font-bold text-lg leading-tight">जय शनिदेव ज्योतिष केंद्र</div>
                <div className="text-white/50 text-xs font-display tracking-wider">Online Jyotish Classes</div>
              </div>
            </div>

            {/* Info cards */}
            {[
              {
                icon: '📍',
                label: 'स्थान',
                value: brand.location,
                gradient: 'from-rose-500 to-pink-600'
              },
              {
                icon: '📞',
                label: 'फोन',
                value: brand.phoneDisplay,
                link: `tel:${brand.phone}`,
                gradient: 'from-sky-500 to-blue-600'
              },
              {
                icon: '📧',
                label: 'Email',
                value: brand.email,
                link: `mailto:${brand.email}`,
                gradient: 'from-amber-500 to-orange-600'
              }
            ].map((item) => (
              <div
                key={item.label}
                className="gold-border-card flex items-center gap-4 p-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br ${item.gradient} shrink-0`}
                  style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-gold-500/70 text-xs font-sans uppercase tracking-widest mb-0.5">{item.label}</div>
                  {item.link ? (
                    <a href={item.link} className="font-sans text-white hover:text-gold-300 transition-colors text-sm break-all">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-sans text-white text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp Group CTA card */}
            <motion.a
              href={brand.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/30 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(37,211,102,0.12) 0%, rgba(18,140,62,0.08) 100%)',
                boxShadow: '0 4px 16px rgba(37,211,102,0.1)'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c3e)' }}>
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-marathi font-bold text-emerald-300 text-base">WhatsApp Group Join करा</div>
                <div className="text-white/50 text-xs font-sans mt-0.5">Click करून आत्ताच Join व्हा!</div>
              </div>
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl p-6 md:p-8 flex flex-col gap-5"
              style={{
                background: 'linear-gradient(135deg, rgba(22,28,74,0.9) 0%, rgba(10,14,39,0.95) 100%)',
                border: '1px solid rgba(244,196,48,0.2)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.4)'
              }}
            >
              <div>
                <h3 className="font-marathi text-gold-300 text-xl font-bold mb-1">नोंदणी अर्ज</h3>
                <p className="text-white/45 text-xs font-sans">संदेश WhatsApp + Email वर पाठवला जाईल</p>
              </div>

              {/* Name */}
              <Field label="तुमचे नाव *" error={errors.name}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="पूर्ण नाव लिहा"
                  className={`form-input ${errors.name ? 'border-red-500/60 focus:ring-red-500/40' : ''}`}
                  autoComplete="name"
                />
              </Field>

              {/* Phone */}
              <Field label="मोबाईल नंबर *" error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-अंकी मोबाईल नंबर"
                  maxLength={10}
                  className={`form-input ${errors.phone ? 'border-red-500/60 focus:ring-red-500/40' : ''}`}
                  autoComplete="tel"
                />
              </Field>

              {/* Email */}
              <Field label="Email (Optional)">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="form-input"
                  autoComplete="email"
                />
              </Field>

              {/* Message */}
              <Field label="संदेश (Optional)">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="तुमचा प्रश्न किंवा संदेश..."
                  rows={3}
                  className="form-input resize-none"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="btn-whatsapp w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    पाठवत आहे...
                  </span>
                ) : (
                  <>
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp वर नोंदणी करा
                  </>
                )}
              </button>

              <p className="text-white/30 text-xs font-sans text-center">
                🔒 तुमची माहिती सुरक्षित आहे. Spam नाही.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Form input styles injected via style tag equivalent using global CSS already defined */}
      <style>{`
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.875rem;
          font-family: 'Noto Sans Devanagari', system-ui, sans-serif;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.85);
          background: rgba(10,14,39,0.8);
          border: 1px solid rgba(244,196,48,0.2);
          outline: none;
          transition: all 0.25s ease;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.3); }
        .form-input:focus {
          border-color: rgba(244,196,48,0.5);
          box-shadow: 0 0 0 3px rgba(244,196,48,0.12);
          background: rgba(15,20,56,0.9);
        }
      `}</style>
    </RevealSection>
  )
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-gold-400/80 text-xs font-sans font-semibold uppercase tracking-wide">{label}</label>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-400 text-xs font-sans"
          role="alert"
        >
          ⚠️ {error}
        </motion.span>
      )}
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
