import { motion } from 'framer-motion'

export default function XPBar({ xp, visited, total }) {
  const pct = Math.min(100, (visited / total) * 100)
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40, padding: '16px 20px', pointerEvents: 'none' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div style={{
          background: 'rgba(255,254,251,0.85)',
          border: '2px solid #2B2926',
          borderRadius: '999px',
          padding: '5px 14px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#5C584F',
          fontWeight: 700,
          pointerEvents: 'auto',
        }}>
          XP {xp}
        </div>
        <div style={{
          background: 'rgba(255,254,251,0.85)',
          border: '2px solid #2B2926',
          borderRadius: '999px',
          padding: '5px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          pointerEvents: 'auto',
        }}>
          <div style={{ width: 80, height: 5, borderRadius: 99, background: '#DDD9CF', overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', borderRadius: 99, background: '#7E9A76' }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#5C584F', fontWeight: 700 }}>
            {visited}/{total}
          </span>
        </div>
      </div>
    </div>
  )
}
