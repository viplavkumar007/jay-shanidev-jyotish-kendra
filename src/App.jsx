import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Hero from './sections/Hero'
import WorkshopSection from './sections/WorkshopSection'
import PainPointSection from './sections/PainPointSection'
import InstructorSection from './sections/InstructorSection'
import LearnSection from './sections/LearnSection'
import BenefitsSection from './sections/BenefitsSection'
import CTAStrip from './sections/CTAStrip'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: '#05060f' }}
    >
      <Navbar />
      <main>
        <Hero />
        <WorkshopSection />
        <PainPointSection />
        <InstructorSection />
        {/* CTA after instructor */}
        <CTAStrip />
        <LearnSection />
        <BenefitsSection />
        {/* CTA strip repeated */}
        <section className="py-10 flex justify-center"
          style={{ background: 'linear-gradient(135deg, rgba(22,28,74,0.4) 0%, rgba(5,6,15,0.8) 100%)' }}>
          <a
            href="https://chat.whatsapp.com/GxHhcw7RP0AD8lqWDDy9Re"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp py-5 px-12 text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Join WhatsApp Group – FREE Workshop!
          </a>
        </section>
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <CTAStrip />
      </main>
      <Footer />
      <FloatingWhatsApp />
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
