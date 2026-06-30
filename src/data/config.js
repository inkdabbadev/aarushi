// ── EDIT THIS BEFORE DEPLOYING ──────────────────────────────
// International format, no + or spaces. e.g. "919876543210"
export const WHATSAPP_NUMBER = '919940183984'
// ────────────────────────────────────────────────────────────

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
