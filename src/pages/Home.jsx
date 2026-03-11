import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InstagramIcon from '@mui/icons-material/Instagram'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import Lightbox from '../components/Lightbox'
import { IMAGES, PORTFOLIO_ITEMS, SERVICES, STATS, INSTAGRAM_POSTS } from '../data/siteData'

const HERO_SLIDES = [
  { img: IMAGES.hero, label: 'Villa Interior' },
  { img: IMAGES.living1, label: 'Living Room' },
  { img: IMAGES.bedroom1, label: 'Bedroom Suite' },
]

const FEATURED = PORTFOLIO_ITEMS.slice(0, 6)

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <PageTransition>
      <Helmet>
        <title>Shri Anaghaa Interior Gallery — Transforming Spaces into Elegant Living</title>
        <meta name="description" content="Premium European interior design studio. Modular kitchens, luxury bedrooms, living rooms and office interiors across India." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-walnut/75 via-walnut/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-body text-[10px] tracking-[0.4em] uppercase text-gold block mb-6"
            >
              — Est. 2012 — Bangalore, India —
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-display text-ivory leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)' }}
            >
              Transforming Spaces<br />
              <em className="text-gold-light font-light">into Elegant</em><br />
              Living Experiences
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-body text-ivory/70 text-base md:text-lg max-w-md leading-relaxed mb-10"
            >
              European aesthetics. Artisan craftsmanship. Spaces designed to inspire, comfort, and endure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-gold">
                Book Free Consultation
              </Link>
              <Link to="/portfolio" className="btn-outline border-ivory/60 text-ivory hover:bg-ivory hover:text-walnut">
                View Portfolio <ArrowForwardIcon fontSize="small" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-ivory/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 right-8 lg:right-16 hidden md:flex flex-col items-center justify-center w-28 h-28 border border-gold/40 rounded-full text-center"
          style={{ background: 'rgba(61,43,31,0.5)', backdropFilter: 'blur(8px)' }}
        >
            <span className="font-mono text-3xl text-gold">250</span>
          <span className="font-body text-[8px] tracking-[0.2em] uppercase text-ivory/60">Projects</span>
          <span className="font-body text-[8px] tracking-[0.2em] uppercase text-ivory/60">Completed</span>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-walnut py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-ivory/10">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-center px-4"
              >
                <div className="font-mono text-4xl text-gold mb-1">{value}</div>
                <div className="font-body text-xs tracking-[0.2em] uppercase text-ivory/50">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                tag="Our Philosophy"
                title={<>Design that<br />tells your story</>}
                subtitle="We believe every space carries the soul of those who inhabit it. Our European-trained designers bring a refined eye for proportion, material, and light to craft interiors that are not just beautiful — they are deeply personal."
              />
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Our Story <ArrowForwardIcon fontSize="small" />
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={IMAGES.about1}
                  alt="Interior design detail"
                  className="w-full h-[520px] object-cover"
                />
                <div className="absolute -bottom-8 -left-8 w-52 h-52 border-4 border-ivory p-1">
                  <img src={IMAGES.about2} alt="Design detail" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold flex flex-col items-center justify-center text-walnut">
                  <span className="font-mono text-3xl font-light">12</span>
                  <span className="font-body text-[8px] tracking-widest uppercase">Years</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="What We Do"
            title={<>Spaces crafted with<br />European precision</>}
            subtitle="From modular kitchens to luxury villas, every project receives the same meticulous attention to detail."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {SERVICES.slice(0, 3).map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="group relative overflow-hidden bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-walnut/40 group-hover:bg-walnut/20 transition-all duration-500" />
                </div>
                <div className="p-8 border-b-2 border-transparent group-hover:border-gold transition-all duration-300">
                  <h3 className="font-display text-2xl text-walnut mb-3">{service.title}</h3>
                  <p className="font-body text-sm text-warm-gray leading-relaxed line-clamp-2">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 mt-4 font-body text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-dark transition-colors duration-300">
                    Learn More <ArrowForwardIcon fontSize="small" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              View All Services <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              tag="Featured Projects"
              title={<>Our finest<br />recent work</>}
            />
            <Link to="/portfolio" className="btn-outline shrink-0">
              Full Portfolio <ArrowForwardIcon fontSize="small" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`portfolio-card group relative overflow-hidden cursor-pointer ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ aspectRatio: i === 3 ? '16/10' : '4/3' }}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="portfolio-img w-full h-full object-cover transition-transform duration-700"
                />
                <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/30 to-transparent opacity-0 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold">{item.category}</span>
                  <h3 className="font-display text-xl text-ivory mt-1">{item.title}</h3>
                  <p className="font-body text-xs text-ivory/60 mt-1">{item.location} · {item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.villa1} alt="Luxury villa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-walnut/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-[10px] tracking-[0.35em] uppercase text-gold block mb-6">— Start Your Journey —</span>
            <h2 className="font-display text-ivory leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              Your dream space is just<br />
              <em className="text-gold-light">one conversation away</em>
            </h2>
            <p className="font-body text-ivory/60 text-base max-w-lg mx-auto mb-10 leading-relaxed">
              Schedule a complimentary design consultation and let our experts guide you through the possibilities.
            </p>
            <Link to="/contact" className="btn-gold text-base px-10 py-5">
              Book Free Design Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── INSTAGRAM ── */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <InstagramIcon className="text-gold" />
              <span className="font-body text-sm tracking-[0.2em] uppercase text-walnut">@shrianaghaainteriors</span>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-dark flex items-center gap-1 transition-colors duration-300"
            >
              Follow Us <ArrowForwardIcon fontSize="small" />
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {INSTAGRAM_POSTS.map((post, i) => (
              <motion.a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative aspect-square overflow-hidden"
              >
                <img src={post.img} alt={post.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-walnut/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1">
                  <FavoriteIcon className="text-ivory" fontSize="small" />
                  <span className="font-mono text-[10px] text-ivory">{post.likes}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={FEATURED}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + FEATURED.length) % FEATURED.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % FEATURED.length)}
        />
      )}
    </PageTransition>
  )
}
