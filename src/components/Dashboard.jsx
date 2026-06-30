import { motion } from 'framer-motion'
import { TABS, PILL_STYLES } from '../data/tabs'

export default function Dashboard({ onOpenTab, visitedTabs }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px' }}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 700, color: '#1F1D1A', margin: '0 0 10px', letterSpacing: '-0.02em' }}>
          47 Tabs Open
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#5C584F', margin: 0 }}>
          Pick one. I promise I won't dodge this time.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
        gap: '18px',
        width: '100%',
        maxWidth: '680px',
      }}>
        {TABS.map((tab, i) => {
          const pill = PILL_STYLES[tab.pill] || PILL_STYLES.steady
          const visited = visitedTabs.includes(tab.id)
          return (
            <motion.button
              key={tab.id}
              data-hover
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              onClick={() => onOpenTab(tab)}
              style={{
                position: 'relative',
                background: tab.id === 'artsy' ? '#FFF8FA' : '#FFFEFB',
                border: '2px solid #2B2926',
                borderRadius: '4px 14px 14px 14px',
                boxShadow: '4px 4px 0 #2B2926',
                padding: '18px 10px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.13s ease, box-shadow 0.13s ease',
              }}
              className="retro-grid-card"
            >
              {visited && (
                <span style={{
                  position: 'absolute', top: 6, right: 8,
                  width: 6, height: 6, borderRadius: '50%', background: '#7E9A76'
                }} />
              )}
              <span style={{ fontSize: '26px', lineHeight: 1 }}>{tab.emoji}</span>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: '#1F1D1A',
                lineHeight: 1.2,
              }}>
                {tab.label}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '8.5px',
                color: '#9A958A',
                lineHeight: 1,
              }}>
                {tab.filename}
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '7.5px',
                fontWeight: 700,
                color: pill.color,
                background: pill.bg,
                borderRadius: '999px',
                padding: '3px 8px',
                marginTop: '2px',
                letterSpacing: '0.04em',
              }}>
                {tab.pillLabel}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
