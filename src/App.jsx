import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TABS } from './data/tabs'
import BootSequence from './components/BootSequence'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import Dashboard from './components/Dashboard'
import TabDetail from './components/TabDetail'
import XPBar from './components/XPBar'
import AchievementToast from './components/AchievementToast'
import EasterEggs from './components/EasterEggs'
import FinalRoom from './components/FinalRoom'
import { useProgress } from './hooks/useProgress'

const UNLOCK_THRESHOLD = 6

export default function App() {
  const [booted, setBooted] = useState(false)
  const [activeTab, setActiveTab] = useState(null)
  const [showFinal, setShowFinal] = useState(false)
  const { progress, unlock, visitTab, toast, clearToast } = useProgress()

  const openTab = useCallback((tab) => {
    setActiveTab(tab)
    visitTab(tab.id)
    unlock('curiosity')
    if (tab.id === 'sidequests') unlock('sideQuest')
    if (tab.id === 'batman') unlock('batmanOffline')
    const nextVisited = progress.visitedTabs.includes(tab.id)
      ? progress.visitedTabs
      : [...progress.visitedTabs, tab.id]
    if (nextVisited.length === TABS.length) unlock('allTabs')
  }, [progress.visitedTabs, unlock, visitTab])

  const readyForFinal = progress.visitedTabs.length >= UNLOCK_THRESHOLD

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Background />
      <CustomCursor />

      <AnimatePresence>
        {!booted && <BootSequence onDone={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          <XPBar xp={progress.xp} visited={progress.visitedTabs.length} total={TABS.length} />
          <EasterEggs unlock={unlock} />
          <AchievementToast toast={toast} onClear={clearToast} />

          <AnimatePresence mode="wait">
            {!showFinal ? (
              <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Dashboard onOpenTab={openTab} visitedTabs={progress.visitedTabs} />
              </motion.div>
            ) : (
              <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <FinalRoom />
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!showFinal && readyForFinal && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 30 }}
              >
                <motion.button
                  data-hover
                  whileHover={{ x: -2, y: -2, boxShadow: '6px 6px 0 #2B2926' }}
                  whileTap={{ x: 2, y: 2, boxShadow: '2px 2px 0 #2B2926' }}
                  onClick={() => { unlock('firewallDown'); setShowFinal(true) }}
                  style={{
                    background: '#2B2926', color: '#FAF8F4',
                    border: '2.5px solid #2B2926', borderRadius: '999px',
                    boxShadow: '4px 4px 0 rgba(43,41,38,0.3)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '14px', fontWeight: 700,
                    padding: '12px 28px', cursor: 'pointer',
                  }}
                >
                  One more room →
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <TabDetail tab={activeTab} onClose={() => setActiveTab(null)} />
        </>
      )}
    </div>
  )
}
