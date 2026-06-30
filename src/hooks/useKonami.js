import { useEffect, useRef } from 'react'

const CODE = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function useKonami(onComplete) {
  const idx = useRef(0)
  useEffect(() => {
    function handler(e) {
      const k = e.key
      if (k === CODE[idx.current] || k.toLowerCase() === CODE[idx.current]) {
        idx.current += 1
        if (idx.current === CODE.length) { idx.current = 0; onComplete() }
      } else {
        idx.current = (k === CODE[0]) ? 1 : 0
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onComplete])
}
