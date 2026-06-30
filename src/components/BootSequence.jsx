import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  { text: 'Initializing Bhuvi OS...', type: 'normal' },
  { text: 'Loading humour...', type: 'normal' },
  { text: 'Loading sarcasm...', type: 'normal' },
  { text: 'Loading overthinking...', type: 'normal' },
  { text: 'Checking emotional firewall...', type: 'normal' },
  { text: 'Searching vulnerability...', type: 'normal' },
  { text: '...', type: 'normal' },
  { text: 'Error.', type: 'error' },
  { text: 'Retrying...', type: 'normal' },
  { text: 'Loading curiosity...', type: 'normal' },
  { text: 'Loading coffee...', type: 'normal' },
  { text: 'Loading tiny side quests...', type: 'normal' },
  { text: 'Access Granted.', type: 'success' },
]

const DELAYS = { normal: 360, error: 700, success: 400 }

export default function BootSequence({ onDone }) {
  const [phase, setPhase] = useState('title')
  const [lineIdx, setLineIdx] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setPhase('console'), 1600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase !== 'console') return
    if (lineIdx >= LINES.length) {
      const t = setTimeout(() => setPhase('welcome'), 600)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setLineIdx(i => i + 1), DELAYS[LINES[lineIdx]?.type ?? 'normal'])
    return () => clearTimeout(t)
  }, [phase, lineIdx])

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#111110', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', zIndex: 100 }}>
      <AnimatePresence mode="wait">

        {phase === 'title' && (
          <motion.div key="title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.4 } }} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '36px', fontWeight: 700, color: '#E8E4DC', margin: 0, letterSpacing: '-0.02em' }}>Unlock Bhuvi</p>
          </motion.div>
        )}

        {phase === 'console' && (
          <motion.div key="console" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ width: '100%', maxWidth: '440px' }}>
            {LINES.slice(0, lineIdx).map((line, i) => (
              <motion.p key={i} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px',
                lineHeight: '2',
                margin: 0,
                color: line.type === 'error' ? '#D88C7A' : line.type === 'success' ? '#E8E4DC' : '#9C9890',
                fontWeight: line.type === 'success' ? 700 : 400,
              }}>
                <span style={{ color: '#E8B33D', marginRight: '10px' }}>{'>'}</span>
                {line.text}
                {i === lineIdx - 1 && <span style={{ color: '#E8B33D', animation: 'none' }}>▋</span>}
              </motion.p>
            ))}
          </motion.div>
        )}

        {phase === 'welcome' && (
          <motion.div key="welcome" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: 'center', maxWidth: '380px' }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: 700, color: '#E8E4DC', margin: '0 0 14px' }}>Welcome, Aarushi.</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#9C9890', lineHeight: '1.7', margin: '0 0 6px' }}>Admin privileges unlocked.</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#9C9890', lineHeight: '1.7', margin: '0 0 36px' }}>You've successfully discovered a section very few people ever get to see.</p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              data-hover
              onClick={onDone}
              style={{ background: '#E8B33D', color: '#1A1804', border: 'none', borderRadius: '999px', padding: '13px 30px', fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}
            >
              Continue →
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
