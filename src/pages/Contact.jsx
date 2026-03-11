import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PageTransition from '../components/PageTransition'
import SectionHeader from '../components/SectionHeader'
import { IMAGES } from '../data/siteData'

const SERVICES_LIST = [
  'Home Interior Design',
  'Modular Kitchen',
  'Living Room Design',
  'Bedroom Interiors',
  'Office Interiors',
  'Villa Design',
  'Other',
]

const BUDGETS = [
  'Below ₹5 Lakhs',
  '₹5 – ₹15 Lakhs',
  '₹15 – ₹30 Lakhs',
  '₹30 – ₹60 Lakhs',
  'Above ₹60 Lakhs',
]

const CONTACT_INFO = [
  {
    icon: <PhoneIcon />,
    title: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon – Sat, 10am – 7pm',
    href: 'tel:+919876543210',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'WhatsApp',
    value: '+91 98765 43210',
    sub: 'Quick responses guaranteed',
    href: 'https://wa.me/919876543210?text=Hello%2C%20I%27m%20interested%20in%20a%20design%20consultation',
  },
  {
    icon: <EmailIcon />,
    title: 'Email Us',
    value: 'hello@shrianaghaagallery.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:hello@shrianaghaagallery.com',
  },
  {
    icon: <LocationOnIcon />,
    title: 'Visit Studio',
    value: 'No. 42, 3rd Floor, Design District',
    sub: 'Indiranagar, Bangalore — 560038',
    href: 'https://maps.google.com',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errs.email = 'Valid email required'
    if (!formData.phone.match(/^[0-9+\- ]{7,15}$/)) errs.phone = 'Valid phone required'
    if (!formData.message.trim()) errs.message = 'Please tell us about your project'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => { const n = { ...prev }; delete n[e.target.name]; return n })
    }
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Contact — Shri Anaghaa Interior Gallery</title>
        <meta name="description" content="Get in touch with Shri Anaghaa Interior Gallery. Book a free design consultation or visit our studio in Bangalore." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.about2} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut via-walnut/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-body text-[10px] tracking-[0.35em] uppercase text-gold block mb-4">
            — Say Hello —
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-ivory" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Let's Create Something<br />
            <em className="text-gold-light font-light">Beautiful Together</em>
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO.map(({ icon, title, value, sub, href }, i) => (
              <motion.a
                key={title}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-ivory border border-beige p-6 hover:border-gold hover:shadow-lg transition-all duration-300 block"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {icon}
                </div>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-2">{title}</p>
                <p className="font-display text-walnut text-lg">{value}</p>
                <p className="font-body text-xs text-warm-gray mt-1">{sub}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                tag="Book Consultation"
                title={<>Free design<br />consultation</>}
                subtitle="Fill in the form below and our team will reach out within 24 hours to schedule your consultation."
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-10 bg-olive/10 border border-olive/30 p-10 text-center"
                >
                  <CheckCircleIcon className="text-olive mb-4" style={{ fontSize: '3rem' }} />
                  <h3 className="font-display text-2xl text-walnut mb-2">Thank You!</h3>
                  <p className="font-body text-warm-gray">
                    We've received your enquiry. Our design team will contact you within 24 hours to schedule your free consultation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full bg-cream border px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 ${errors.name ? 'border-red-400' : 'border-beige-dark'}`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray block mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={`w-full bg-cream border px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 ${errors.phone ? 'border-red-400' : 'border-beige-dark'}`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full bg-cream border px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 ${errors.email ? 'border-red-400' : 'border-beige-dark'}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Service */}
                    <div>
                      <label className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray block mb-2">
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-cream border border-beige-dark px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    {/* Budget */}
                    <div>
                      <label className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray block mb-2">
                        Approximate Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-cream border border-beige-dark px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 cursor-pointer"
                      >
                        <option value="">Select budget range</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-warm-gray block mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your space, style preferences, timeline..."
                      className={`w-full bg-cream border px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold transition-colors duration-300 resize-none ${errors.message ? 'border-red-400' : 'border-beige-dark'}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button type="submit" className="btn-primary">
                      Send Enquiry <SendIcon fontSize="small" />
                    </button>
                    <a
                      href="https://wa.me/919876543210?text=Hello%2C%20I%27d%20like%20to%20book%20a%20free%20design%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 font-body text-sm tracking-[0.1em] uppercase hover:bg-[#20BA5A] transition-colors duration-300"
                    >
                      <WhatsAppIcon fontSize="small" /> WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Map + Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Embedded map */}
              <div className="relative overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  title="Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.832!2d77.6414!3d12.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168da0c3a78d%3A0x74e3e354e13c5a71!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'sepia(20%) saturate(80%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 pointer-events-none border-2 border-gold/20" />
              </div>

              {/* Hours */}
              <div className="bg-cream border border-beige p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AccessTimeIcon className="text-gold" />
                  <h3 className="font-body text-sm tracking-[0.2em] uppercase text-walnut">Studio Hours</h3>
                </div>
                <div className="space-y-2 font-body text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '10:00 AM – 7:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
                    { day: 'Sunday', hours: 'By Appointment Only' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between text-warm-gray">
                      <span>{day}</span>
                      <span className="text-walnut">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Studio image */}
              <div className="relative overflow-hidden h-48 group">
                <img
                  src={IMAGES.office2}
                  alt="Our design studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-walnut/40 flex items-center justify-center">
                  <p className="font-display text-ivory text-xl italic">Visit Our Studio</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
