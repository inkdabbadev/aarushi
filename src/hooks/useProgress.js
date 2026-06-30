import { useCallback, useEffect, useState } from 'react'
import { ACHIEVEMENTS } from '../data/achievements'

const KEY = 'unlock-bhuvi-v2'

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : { xp: 0, unlocked: [], visitedTabs: [] }
  } catch {
    return { xp: 0, unlocked: [], visitedTabs: [] }
  }
}

export function useProgress() {
  const [progress, setProgress] = useState(load)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(progress))
  }, [progress])

  const unlock = useCallback((key) => {
    setProgress(prev => {
      if (prev.unlocked.includes(key)) return prev
      const def = ACHIEVEMENTS[key]
      if (!def) return prev
      setToast({ ...def, id: Date.now() })
      return { ...prev, xp: prev.xp + def.xp, unlocked: [...prev.unlocked, key] }
    })
  }, [])

  const visitTab = useCallback((id) => {
    setProgress(prev => {
      if (prev.visitedTabs.includes(id)) return prev
      return { ...prev, visitedTabs: [...prev.visitedTabs, id] }
    })
  }, [])

  const clearToast = useCallback(() => setToast(null), [])

  return { progress, unlock, visitTab, toast, clearToast }
}
