import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const FOOTER_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
]

const SERVICES_LINKS = [
  'Home Interior Design',
  'Modular Kitchen',
  'Living Room Design',
  'Bedroom Interiors',
  'Office Interiors',
  'Villa Design',
]

export default function Footer() {
  return (
    <footer className="bg-walnut text-ivory">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <div className="font-display text-3xl font-light tracking-wider text-ivory">
                Shri Anaghaa
              </div>
              <div className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mt-1">
                Interior Gallery
              </div>
            </Link>
            <p className="font-body text-sm text-ivory/60 leading-relaxed mb-8">
              Transforming spaces into elegant living experiences with European design sensibility and artisan craftsmanship.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <InstagramIcon fontSize="small" />, href: 'https://instagram.com', label: 'Instagram' },
                { icon: <FacebookIcon fontSize="small" />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <PinterestIcon fontSize="small" />, href: 'https://pinterest.com', label: 'Pinterest' },
                { icon: <YouTubeIcon fontSize="small" />, href: 'https://youtube.com', label: 'YouTube' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-ivory/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-ivory/30 group-hover:bg-gold group-hover:w-6 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-[1px] bg-ivory/30 group-hover:bg-gold group-hover:w-6 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <LocationOnIcon className="text-gold mt-0.5" fontSize="small" />
                <span className="font-body text-sm text-ivory/60 leading-relaxed">
                  No. 42, 3rd Floor, Design District,<br />
                  Indiranagar, Bangalore — 560038
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="text-gold" fontSize="small" />
                <a href="tel:+919876543210" className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  +91 9742479197
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon className="text-gold" fontSize="small" />
                <a href="mailto:hello@shrianaghaagallery.com" className="font-body text-sm text-ivory/60 hover:text-gold transition-colors duration-300">
                  hello@shrianaghaagallery.com
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold text-walnut px-6 py-3 font-body text-xs tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-ivory/40">
            © {new Date().getFullYear()} Shri Anaghaa Interior Gallery. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/30">
            Crafted with passion for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  )
}
