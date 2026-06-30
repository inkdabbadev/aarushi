import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useKonami } from '../hooks/useKonami'

function useTypedKeyword() {
  const [buf, setBuf] = useState('')
  const [result, setResult] = useState(null)
  useEffect(() => {
    function h(e) {
      if (e.key.length !== 1) return
      setBuf(b => (b + e.key).slice(-10).toLowerCase())
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])
  useEffect(() => {
    if (buf.includes('coffee')) { setResult('coffee'); setBuf('') }
    else if (buf.includes('wordle')) { setResult('wordle'); setBuf('') }
  }, [buf])
  return result
}

export default function EasterEggs({ unlock }) {
  const [sunNote, setSunNote] = useState(false)
  const [folder, setFolder] = useState(false)
  const [coffee, setCoffee] = useState(false)
  const typed = useTypedKeyword()

  useKonami(useCallback(() => unlock('devMode'), [unlock]))

  useEffect(() => {
    if (typed === 'coffee') { unlock('coffeeFriend'); setCoffee(true); setTimeout(() => setCoffee(false), 3800) }
    if (typed === 'wordle') unlock('wordleMode')
  }, [typed, unlock])

  useEffect(() => {
    function h() { setFolder(v => { if (!v) unlock('hiddenFolder'); return !v }) }
    window.addEventListener('dblclick', h)
    return () => window.removeEventListener('dblclick', h)
  }, [unlock])

  return (
    <>
      {/* Flower */}
      <motion.button
        data-hover
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.88 }}
        onClick={() => unlock('trustedHuman')}
        style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 30, background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', lineHeight: 1 }}
        aria-label="A flower"
      >🌸</motion.button>

      {/* Sun */}
      <motion.button
        data-hover
        whileHover={{ scale: 1.15, rotate: -8 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setSunNote(true); unlock('sunSecret') }}
        style={{ position: 'fixed', top: 68, right: 24, zIndex: 30, background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', lineHeight: 1 }}
        aria-label="The sun"
      >☀️</motion.button>

      <AnimatePresence>
        {sunNote && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            onAnimationComplete={() => { if (sunNote) setTimeout(() => setSunNote(false), 2800) }}
            style={{
              position: 'fixed', top: 100, right: 24, zIndex: 30,
              background: '#FFFEFB', border: '2px solid #2B2926', borderRadius: '12px',
              boxShadow: '3px 3px 0 #2B2926', padding: '10px 14px',
              fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#2B2926',
              fontWeight: 500, maxWidth: '200px', lineHeight: 1.5,
            }}
          >
            Thanks for asking questions I usually avoid answering.
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {folder && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            style={{
              position: 'fixed', bottom: 80, left: '50%', transform: 'translateX(-50%)', zIndex: 30,
              background: '#FFFEFB', border: '2px solid #2B2926', borderRadius: '14px',
              boxShadow: '4px 4px 0 #2B2926', padding: '12px 18px',
              fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#2B2926',
              fontWeight: 500, maxWidth: '280px', lineHeight: 1.6, textAlign: 'center',
            }}
          >
            📁 A hidden folder. Mostly unfinished side projects and one apology I never sent. Both still in progress.
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {coffee && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', bottom: 24, right: 24, zIndex: 30,
              background: '#FFFEFB', border: '2px solid #2B2926', borderRadius: '14px',
              boxShadow: '4px 4px 0 #2B2926', padding: '10px 16px',
              fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#2B2926', fontWeight: 700,
            }}
          >
            ☕ Coffee mode: activated.
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
