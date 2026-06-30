import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export default function AchievementToast({ toast, onClear }) {
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(onClear, 3400)
    return () => clearTimeout(t)
  }, [toast, onClear])

  return (
    <div style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 300, pointerEvents: 'none' }}>
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            style={{
              background: '#FFFEFB',
              border: '2px solid #2B2926',
              borderRadius: '14px',
              boxShadow: '4px 4px 0 #2B2926',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              minWidth: '260px',
            }}
          >
            <span style={{ fontSize: '20px' }}>✨</span>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700, color: '#1F1D1A', margin: '0 0 2px' }}>
                {toast.label} <span style={{ color: '#7E9A76' }}>+{toast.xp} XP</span>
              </p>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#5C584F', margin: 0 }}>{toast.sub}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
