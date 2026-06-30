import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setHidden(false)
      setHovering(!!e.target.closest('button, a, [data-hover]'))
    }
    const leave = () => setHidden(true)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseleave', leave) }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-multiply"
      animate={{
        x: pos.x - (hovering ? 20 : 7),
        y: pos.y - (hovering ? 20 : 7),
        width: hovering ? 40 : 14,
        height: hovering ? 40 : 14,
        opacity: hidden ? 0 : 1,
        backgroundColor: hovering ? 'rgba(232,179,61,0.4)' : 'rgba(43,41,38,0.6)',
      }}
      transition={{ type: 'spring', stiffness: 450, damping: 38, mass: 0.3 }}
    />
  )
}
