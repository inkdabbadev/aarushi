import { motion } from 'framer-motion'
import { useMemo } from 'react'

export default function Background() {
  const particles = useMemo(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size: 2 + Math.random() * 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dur: 12 + Math.random() * 10,
      delay: Math.random() * 6,
    })), [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: '#FAF8F4' }} />
      <motion.div
        className="absolute -top-1/3 -left-1/4 w-[55vw] h-[55vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(232,179,61,0.22), transparent 70%)' }}
        animate={{ x: [0,35,0], y: [0,25,0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 w-[50vw] h-[50vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(124,151,181,0.18), transparent 70%)' }}
        animate={{ x: [0,-25,0], y: [0,-20,0] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-[40vw] h-[40vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(143,168,136,0.15), transparent 70%)' }}
        animate={{ x: [0,18,0], y: [0,-22,0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: 'rgba(43,41,38,0.08)' }}
          animate={{ y: [0,-16,0], opacity: [0.15,0.4,0.15] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="grain" />
    </div>
  )
}
