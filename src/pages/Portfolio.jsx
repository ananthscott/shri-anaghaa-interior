import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import PageTransition from '../components/PageTransition'
import Lightbox from '../components/Lightbox'
import { PORTFOLIO_ITEMS, IMAGES } from '../data/siteData'

const CATEGORIES = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Office', 'Villa']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio — Shri Anaghaa Interior Gallery</title>
        <meta name="description" content="Explore our portfolio of luxury interior design projects — living rooms, kitchens, bedrooms, offices and villas across India." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.villa2} alt="Portfolio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            — Our Work —
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-ivory" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Portfolio & Gallery
          </motion.h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-14 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-walnut text-ivory border-walnut'
                    : 'border-beige-dark text-warm-gray hover:border-walnut hover:text-walnut'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45 }}
                  className="portfolio-card group relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '4/3' }}
                  onClick={() => {
                    const idx = filtered.indexOf(item)
                    setLightboxIndex(idx)
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="portfolio-img w-full h-full object-cover transition-transform duration-700"
                  />
                  {/* Hover overlay */}
                  <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/20 to-transparent opacity-0 transition-opacity duration-500">
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div className="flex justify-end">
                        <div className="w-10 h-10 bg-gold/90 flex items-center justify-center text-walnut transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                          <ZoomInIcon fontSize="small" />
                        </div>
                      </div>
                      <div>
                        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold">{item.category}</span>
                        <h3 className="font-display text-xl text-ivory mt-1">{item.title}</h3>
                        <p className="font-body text-xs text-ivory/60 mt-1">{item.location} · {item.year}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-warm-gray font-body">
              No projects in this category yet. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-walnut text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl text-ivory mb-4">Want to be our next project?</h2>
          <p className="font-body text-ivory/60 mb-8">We'd love to create something extraordinary together.</p>
          <Link to="/contact" className="btn-gold">
            Get In Touch <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filtered.length)}
        />
      )}
    </PageTransition>
  )
}
