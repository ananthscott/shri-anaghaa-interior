import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import { TESTIMONIALS, IMAGES, STATS } from '../data/siteData'

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="text-gold" style={{ fontSize: '1rem' }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [featured, setFeatured] = useState(0)

  const prev = () => setFeatured((featured - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setFeatured((featured + 1) % TESTIMONIALS.length)

  const current = TESTIMONIALS[featured]

  return (
    <PageTransition>
      <Helmet>
        <title>Testimonials — Shri Anaghaa Interior Gallery</title>
        <meta name="description" content="Read what our clients say about their interior design experience with Shri Anaghaa Interior Gallery." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.living2} alt="Testimonials" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            — Client Stories —
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-ivory" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            What Our Clients Say
          </motion.h1>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-28 bg-walnut overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="relative">
            <FormatQuoteIcon className="text-gold/20 absolute -top-4 -left-4" style={{ fontSize: '8rem' }} />
            <motion.div
              key={featured}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 text-center"
            >
              <img
                src={current.avatar}
                alt={current.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-2 border-gold"
              />
              <StarRating count={current.rating} />
              <blockquote className="font-display text-ivory italic leading-relaxed mt-6 mb-8" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}>
                "{current.review}"
              </blockquote>
              <p className="font-body text-gold text-sm tracking-widest uppercase">{current.name}</p>
              <p className="font-body text-ivory/40 text-xs mt-1">{current.role}</p>
              <p className="font-body text-ivory/30 text-xs mt-0.5">Project: {current.project}</p>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-14">
            <button onClick={prev} className="w-12 h-12 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300">
              <ArrowBackIcon fontSize="small" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeatured(i)}
                  className={`transition-all duration-300 ${i === featured ? 'w-8 h-1 bg-gold' : 'w-2 h-1 bg-ivory/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300">
              <ArrowForwardIcon fontSize="small" />
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="All Reviews"
            title="Stories from happy homes"
            subtitle="Every review represents a space transformed and a family delighted."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream p-8 border border-beige hover:border-gold transition-all duration-300 hover:shadow-lg group"
              >
                <StarRating count={t.rating} />
                <blockquote className="font-body text-sm text-warm-gray leading-relaxed mt-4 mb-6 line-clamp-5 italic">
                  "{t.review}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-beige">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-beige-dark group-hover:border-gold transition-all duration-300" />
                  <div>
                    <p className="font-body text-sm font-500 text-walnut">{t.name}</p>
                    <p className="font-body text-xs text-warm-gray">{t.role}</p>
                    <p className="font-body text-[10px] text-gold tracking-wider mt-0.5">{t.project}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-gold mb-4">— By The Numbers —</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div className="font-display text-4xl text-walnut mb-2">{value}</div>
                <div className="font-body text-xs tracking-widest uppercase text-warm-gray">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-walnut text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl text-ivory mb-4">Join our growing family</h2>
          <p className="font-body text-ivory/60 mb-8">Experience the difference that genuine design passion makes.</p>
          <Link to="/contact" className="btn-gold">
            Start Your Project <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
