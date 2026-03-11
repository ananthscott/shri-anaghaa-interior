import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, subtitle, light = false, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={center ? 'text-center' : ''}
    >
      {tag && (
        <span className={`font-body text-[10px] tracking-[0.35em] uppercase block mb-4 ${light ? 'text-gold-light' : 'text-gold'}`}>
          — {tag} —
        </span>
      )}
      <h2
        className={`font-display leading-tight mb-6 ${light ? 'text-ivory' : 'text-walnut'}`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-base leading-relaxed max-w-xl ${center ? 'mx-auto' : ''} ${light ? 'text-ivory/60' : 'text-warm-gray'}`}>
          {subtitle}
        </p>
      )}
      {center && (
        <div className="flex justify-center mt-6">
          <span className="w-16 h-[1px] bg-gold inline-block" />
        </div>
      )}
    </motion.div>
  )
}
