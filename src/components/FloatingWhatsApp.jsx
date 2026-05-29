import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { brand } from '../data/siteContent'

export default function FloatingWhatsApp() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <a
      href={brand.whatsappCommunity}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join WhatsApp Community"
      className="floating-wa-btn fixed flex items-center justify-center rounded-full"
      style={{
        width: '56px',
        height: '56px',
        opacity: 1,
        visibility: 'visible',
        transform: 'translate3d(0,0,0)',
        WebkitTransform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        background: 'linear-gradient(135deg, #f4c430 0%, #b8860b 100%)',
        boxShadow: '0 4px 20px rgba(244,196,48,0.5), 0 0 40px rgba(244,196,48,0.25)',
        pointerEvents: 'auto'
      }}
    >
      <span
        className="absolute inset-0 rounded-full animate-pulse md:animate-ping"
        style={{ background: 'rgba(244,196,48,0.35)', pointerEvents: 'none' }}
      />
      <svg className="w-6 h-6 relative z-10 text-cosmos-950" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.528 5.845L0 24l6.335-1.652A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.79 9.79 0 01-4.964-1.347l-.356-.212-3.762.982.998-3.662-.232-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
      </svg>
    </a>,
    document.body
  )
}
