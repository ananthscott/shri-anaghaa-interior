import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (currentIndex === null || !images[currentIndex]) return null
  const item = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-walnut/95 lightbox-backdrop flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-ivory/70 hover:text-gold transition-colors duration-300 z-10"
        >
          <CloseIcon fontSize="large" />
        </button>

        {/* Prev */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 md:left-8 text-ivory/70 hover:text-gold transition-colors duration-300 z-10 w-12 h-12 flex items-center justify-center"
          >
            <ChevronLeftIcon fontSize="large" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="max-w-5xl max-h-[85vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
          <div className="mt-4 text-center">
            <p className="font-display text-xl text-ivory">{item.title}</p>
            <p className="font-body text-xs tracking-widest text-gold uppercase mt-1">
              {item.category} — {item.location}
            </p>
          </div>
        </motion.div>

        {/* Next */}
        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 md:right-8 text-ivory/70 hover:text-gold transition-colors duration-300 z-10 w-12 h-12 flex items-center justify-center"
          >
            <ChevronRightIcon fontSize="large" />
          </button>
        )}

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block h-[2px] transition-all duration-300 ${i === currentIndex ? 'w-6 bg-gold' : 'w-2 bg-ivory/30'}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
