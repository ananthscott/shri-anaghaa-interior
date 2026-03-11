import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-beige'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span
              className={`font-body text-2xl font-medium tracking-wider transition-colors duration-300 ${
                scrolled || !isHome ? 'text-walnut' : 'text-ivory'
              }`}
            >
              Shri Anaghaa
            </span>
            <span
              className={`font-body font-medium text-[9px] tracking-[0.35em] uppercase transition-colors duration-300 ${
                scrolled || !isHome ? 'text-gold' : 'text-gold-light'
              }`}
            >
              Interior Gallery
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`font-body text-[11px] tracking-[0.2em] uppercase transition-all duration-300 relative pb-1
                  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300
                  ${location.pathname === path ? 'text-gold after:w-full' : 'after:w-0 hover:after:w-full'}
                  ${scrolled || !isHome ? 'text-charcoal hover:text-gold' : 'text-ivory/90 hover:text-gold-light'}
                `}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className={`font-body text-[10px] tracking-[0.25em] uppercase px-6 py-3 border transition-all duration-300 ${
                scrolled || !isHome
                  ? 'border-walnut text-walnut hover:bg-walnut hover:text-ivory'
                  : 'border-ivory/70 text-ivory hover:bg-ivory hover:text-walnut'
              }`}
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled || !isHome ? 'text-walnut' : 'text-ivory'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed inset-0 z-40 bg-walnut flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-8 mt-8">
              {NAV_LINKS.map(({ label, path }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    to={path}
                    className={`font-display text-3xl font-light tracking-wide ${
                      location.pathname === path ? 'text-gold' : 'text-ivory hover:text-gold-light'
                    } transition-colors duration-300`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 pt-8 border-t border-walnut-light">
              <Link to="/contact" className="btn-gold inline-block">
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
