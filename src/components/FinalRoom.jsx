import { motion } from 'framer-motion'
import { whatsappLink } from '../data/config'

export default function FinalRoom() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 60px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        style={{ position: 'relative', width: '100%', maxWidth: '440px', paddingTop: '28px' }}
      >
        <div style={{
          position: 'absolute', top: 2, left: 20,
          background: '#2B2926',
          border: '2.5px solid #2B2926',
          borderRadius: '10px 10px 0 0',
          padding: '6px 16px 18px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '12px', fontWeight: 700, color: '#FAF8F4', lineHeight: 1,
        }}>
          🔓 final-room.txt
        </div>

        <div style={{
          background: '#FFFEFB',
          border: '2.5px solid #2B2926',
          borderRadius: '4px 16px 16px 16px',
          boxShadow: '6px 6px 0 #2B2926',
          padding: '32px 28px 28px',
        }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#9A958A', fontWeight: 700, letterSpacing: '0.06em', margin: '0 0 18px' }}>
            emotional firewall — disabled
          </p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 700, color: '#1F1D1A', margin: '0 0 22px', lineHeight: 1.2 }}>
            Why I dodged the question.
          </h2>

          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.7, color: '#2B2926', fontWeight: 500 }}>
            <p style={{ margin: '0 0 14px' }}>I don't usually hide things because I don't trust people.</p>
            <p style={{ margin: '0 0 14px' }}>I hide them because somewhere along the way I convinced myself I should solve everything alone.</p>
            <p style={{ margin: '0 0 14px' }}>By the time I finally find the words, I've usually already decided not to burden anyone.</p>
            <p style={{ margin: '0 0 14px' }}>I'm still learning that friendship doesn't work like that.</p>
            <p style={{ margin: '0 0 24px', fontWeight: 700 }}>So thank you for asking anyway.</p>
          </div>

          <motion.a
            href={whatsappLink("I reached the end.\nNow you don't get to let me escape.\nCoffee soon? ☕🌻")}
            target="_blank"
            rel="noreferrer"
            data-hover
            whileHover={{ x: -2, y: -2, boxShadow: '8px 8px 0 #2B2926' }}
            whileTap={{ x: 2, y: 2, boxShadow: '2px 2px 0 #2B2926' }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
              width: '100%', background: '#E8B33D',
              border: '2.5px solid #2B2926', borderRadius: '999px',
              boxShadow: '4px 4px 0 #2B2926',
              color: '#1A1804', fontFamily: "'Inter', sans-serif",
              fontSize: '14px', fontWeight: 700, padding: '13px 0',
              textDecoration: 'none',
            }}
          >
            ☕ Continue on WhatsApp →
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}
