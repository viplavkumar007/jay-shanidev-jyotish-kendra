import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4500)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === 'success'
  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        aria-live="polite"
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl max-w-sm w-[90vw] border ${
          isSuccess
            ? 'bg-emerald-950/95 border-emerald-500/40 text-emerald-300'
            : 'bg-red-950/95 border-red-500/40 text-red-300'
        }`}
        style={{ backdropFilter: 'blur(16px)' }}
      >
        <span className="text-xl">{isSuccess ? '✅' : '❌'}</span>
        <span className="font-sans text-sm font-medium flex-1">{message}</span>
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="text-white/40 hover:text-white/80 transition-colors text-lg leading-none"
        >
          ×
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
