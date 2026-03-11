import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import KitchenIcon from '@mui/icons-material/Kitchen'
import WeekendIcon from '@mui/icons-material/Weekend'
import KingBedIcon from '@mui/icons-material/KingBed'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import { SERVICES, IMAGES } from '../data/siteData'

const ICON_MAP = {
  HomeWork: <HomeWorkIcon />,
  Kitchen: <KitchenIcon />,
  Weekend: <WeekendIcon />,
  KingBed: <KingBedIcon />,
  BusinessCenter: <BusinessCenterIcon />,
}

const PROCESS = [
  { step: '01', title: 'Discovery', desc: 'We understand your lifestyle, preferences, and vision through an in-depth consultation.' },
  { step: '02', title: 'Concept', desc: 'Our designers create a tailored concept board with mood, materials, and spatial planning.' },
  { step: '03', title: 'Design', desc: 'Detailed 3D visualizations and technical drawings bring every element to life before execution.' },
  { step: '04', title: 'Execution', desc: 'Our project managers oversee every detail of the build, ensuring zero compromise on quality.' },
  { step: '05', title: 'Reveal', desc: 'The final walk-through — your space, perfectly realized. No surprises, only delight.' },
]

export default function Services() {
  return (
    <PageTransition>
      <Helmet>
        <title>Services — Shri Anaghaa Interior Gallery</title>
        <meta name="description" content="Home interior design, modular kitchens, living rooms, bedrooms and office interiors. Premium European design services across India." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.living1} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            — What We Offer —
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-ivory" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-28">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden group">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gold flex items-center justify-center text-walnut">
                    {ICON_MAP[service.icon]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
                  Service {String(service.id).padStart(2, '0')}
                </span>
                <h2 className="font-display text-walnut mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {service.title}
                </h2>
                <p className="font-body text-warm-gray leading-relaxed mb-8 text-base">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircleOutlineIcon className="text-gold" fontSize="small" />
                      <span className="font-body text-sm text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary">
                  Enquire Now <ArrowForwardIcon fontSize="small" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-28 bg-walnut">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            tag="Our Process"
            title={<>How we bring<br />your vision to life</>}
            subtitle="A refined five-step journey from first conversation to final reveal."
            light
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-ivory/10 z-0" />
            {PROCESS.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div className="w-24 h-24 rounded-full border border-gold/40 flex flex-col items-center justify-center mx-auto mb-6 bg-walnut">
                  <span className="font-mono text-gold text-2xl">{step}</span>
                </div>
                <h3 className="font-display text-ivory text-xl mb-2">{title}</h3>
                <p className="font-body text-xs text-ivory/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeader
            tag="Get Started"
            title="Ready to transform your space?"
            subtitle="Book your free design consultation today and take the first step toward your dream interior."
            center
          />
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Book Free Consultation <ArrowForwardIcon fontSize="small" />
            </Link>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
