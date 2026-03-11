import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import { IMAGES, STATS } from '../data/siteData'

const VALUES = [
  { title: 'Authenticity', desc: 'Every design reflects the genuine personality of those who live in it. No templates, no shortcuts.' },
  { title: 'Craftsmanship', desc: 'We work with artisan fabricators and premium suppliers to ensure lasting quality in every detail.' },
  { title: 'Collaboration', desc: 'Your vision is our brief. We listen deeply before we design, and design deeply before we build.' },
  { title: 'Sustainability', desc: 'We source responsibly, choosing materials that are ethically made and built to endure for generations.' },
]

const TEAM = [
  { name: 'Spandana', role: 'Principal Designer & Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: '15+ years crafting luxury interiors across India and Europe.' },
  { name: 'Srikanth', role: 'Senior Interior Designer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', bio: 'Specialist in residential and hospitality design.' },
  { name: 'Rajesh', role: 'Space Planning Expert', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'Functional aesthetics through intelligent layouts.' },
]

export default function About() {
  return (
    <PageTransition>
      <Helmet>
        <title>About Us — Shri Anaghaa Interior Gallery</title>
        <meta name="description" content="Learn about our story, vision and design philosophy. European-trained designers crafting premium interiors across India since 2012." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.about1} alt="About us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-gold block mb-4"
          >
            — Our Story —
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-ivory leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            About Shri Anaghaa<br />
            <em className="text-gold-light font-light">Interior Gallery</em>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-tag">Our Beginning</span>
              <h2 className="font-display text-walnut leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Born from a passion<br />for beautiful spaces
              </h2>
              <div className="space-y-5 text-warm-gray font-body text-base leading-relaxed">
                <p>
                  Shri Anaghaa Interior Gallery was founded in 2012 by designer Spandana, whose years of study and practice in Milan, Florence, and London instilled in her a deep appreciation for the European tradition of interior craftsmanship.
                </p>
                <p>
                  Returning to India with a vision to bring this sensibility home, Spandana established a studio in Bangalore where Old World elegance meets contemporary Indian living. Every project since has been a testament to that founding conviction: that interiors should be both beautiful and deeply liveable.
                </p>
                <p>
                  Today, Shri Anaghaa Interior Gallery is a team of 20+ designers, craftsmen, and project managers who share a singular commitment — to design spaces that outlast trends and become a part of the stories of those who inhabit them.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services <ArrowForwardIcon fontSize="small" />
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <img src={IMAGES.about1} alt="Studio work" className="w-full h-64 object-cover mt-8" />
                <img src={IMAGES.living2} alt="Design work" className="w-full h-64 object-cover" />
                <img src={IMAGES.bedroom1} alt="Bedroom design" className="w-full h-48 object-cover" />
                <img src={IMAGES.kitchen1} alt="Kitchen design" className="w-full h-48 object-cover mt-6" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-walnut py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FormatQuoteIcon className="text-gold mb-4" style={{ fontSize: '3rem' }} />
          <blockquote className="font-display text-ivory leading-relaxed italic" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
            We do not decorate rooms. We design lives. Every decision — from the arc of a doorway to the grain of a walnut panel — is made in service of the person who will live there.
          </blockquote>
          <p className="mt-6 font-body text-gold text-sm tracking-widest uppercase">— Spandana, Founder</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl text-gold mb-2">{value}</div>
                <div className="w-8 h-[1px] bg-gold mx-auto mb-3" />
                <div className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="What Guides Us"
            title={<>Design philosophy<br />& core values</>}
            subtitle="Four principles that shape every decision we make — from initial brief to final reveal."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {VALUES.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group border border-beige p-8 hover:border-gold transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  <span className="font-display text-xl text-gold group-hover:text-walnut transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl text-walnut mb-3">{title}</h3>
                <p className="font-body text-sm text-warm-gray leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="The People"
            title="Meet our design team"
            subtitle="Creative minds united by a shared passion for exceptional interiors."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-4xl mx-auto">
            {TEAM.map(({ name, role, img, bio }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden mb-6 mx-auto w-48 h-48">
                  <img src={img} alt={name} className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-gold transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl text-walnut">{name}</h3>
                <p className="font-body text-xs tracking-widest uppercase text-gold mt-1 mb-3">{role}</p>
                <p className="font-body text-sm text-warm-gray">{bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-walnut text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl text-ivory mb-4">Ready to work together?</h2>
          <p className="font-body text-ivory/60 mb-8">Let's create something extraordinary for your space.</p>
          <Link to="/contact" className="btn-gold">
            Start a Conversation <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
