import { AnimatePresence, motion } from 'framer-motion'
import { whatsappLink } from '../data/config'

export default function TabDetail({ tab, onClose }) {
  return (
    <AnimatePresence>
      {tab && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 50,
            background: 'rgba(43,41,38,0.35)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 28, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            onClick={e => e.stopPropagation()}
            style={{ position: 'relative', width: '100%', maxWidth: '400px', paddingTop: '28px' }}
          >
            {/* Tab nub */}
            <div style={{
              position: 'absolute',
              top: 2, left: 20,
              background: tab.id === 'artsy' ? '#D4537E' : '#E8B33D',
              border: '2.5px solid #2B2926',
              borderRadius: '10px 10px 0 0',
              padding: '6px 16px 18px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              fontWeight: 700,
              color: tab.id === 'artsy' ? '#fff' : '#2B2926',
              lineHeight: 1,
            }}>
              {tab.emoji} {tab.filename}
            </div>

            {/* Card body */}
            <div style={{
              background: tab.id === 'artsy' ? '#FFF8FA' : '#FFFEFB',
              border: '2.5px solid #2B2926',
              borderRadius: '4px 16px 16px 16px',
              boxShadow: '6px 6px 0 #2B2926',
              padding: '26px 22px 22px',
            }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{ fontSize: '28px', lineHeight: 1 }}>{tab.emoji}</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', fontWeight: 700, color: '#1F1D1A' }}>
                  {tab.id === 'artsy' ? 'Unexpected Side Quest' : tab.label}
                </span>
                <button
                  data-hover
                  onClick={onClose}
                  style={{
                    marginLeft: 'auto', width: '26px', height: '26px',
                    border: '2.5px solid #2B2926', borderRadius: '50%',
                    background: 'transparent', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 700, color: '#2B2926', flexShrink: 0,
                  }}
                >×</button>
              </div>

              {/* Quest mode (Cute Artsy Girl) */}
              {tab.isQuest ? (
                <>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#993556', fontWeight: 700, letterSpacing: '0.05em', margin: '0 0 14px' }}>
                    QUEST LOG — ANNA NAGAR
                  </p>
                  <div style={{ background: '#FBEAF0', border: '2px solid #2B2926', borderRadius: '10px', padding: '2px 16px', marginBottom: '16px' }}>
                    {tab.questLog.map((row, i) => (
                      <div key={i} style={{
                        padding: '10px 0',
                        borderBottom: i < tab.questLog.length - 1 ? '1.5px solid #F0CBDB' : 'none',
                      }}>
                        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#993556', margin: '0 0 3px', fontWeight: 700 }}>
                          {row.label}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#1F1D1A', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#993556', fontWeight: 700, textAlign: 'center', margin: '0 0 20px' }}>
                    {tab.questFooter}
                  </p>
                </>
              ) : (
                <>
                  {/* Standard stat block */}
                  <div style={{ background: '#F4F0E6', border: '2px solid #2B2926', borderRadius: '10px', padding: '2px 16px', marginBottom: '16px' }}>
                    {tab.stats.map((s, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderBottom: i < tab.stats.length - 1 ? '1.5px solid #DCD5C2' : 'none',
                        gap: '12px',
                      }}>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#5C584F', flexShrink: 0 }}>{s.label}</span>
                        <span style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '12px',
                          fontWeight: 700,
                          color: s.warn ? '#B5550F' : '#1F1D1A',
                          textAlign: 'right',
                        }}>{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 500, color: '#2B2926', lineHeight: 1.65, margin: '0 0 20px' }}>
                    {tab.note}
                  </p>
                </>
              )}

              {/* CTA */}
              <a
                href={whatsappLink(tab.whatsapp)}
                target="_blank"
                rel="noreferrer"
                data-hover
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  background: tab.id === 'artsy' ? '#D4537E' : '#7E9A76',
                  border: '2.5px solid #2B2926',
                  borderRadius: '999px',
                  boxShadow: '4px 4px 0 #2B2926',
                  color: '#fff',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  padding: '13px 0',
                  textDecoration: 'none',
                  transition: 'transform 0.1s ease, box-shadow 0.1s ease',
                }}
              >
                💬 continue this conversation →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
