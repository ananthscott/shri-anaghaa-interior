import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello! I'm interested in a free design consultation from Shri Anaghaa Interior Gallery."
  )
  return (
    <motion.a
      href={`https://wa.me/919876543210?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl wa-pulse hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
    >
      <WhatsAppIcon />
    </motion.a>
  )
}
