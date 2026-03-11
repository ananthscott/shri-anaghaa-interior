# Shri Anaghaa Interior Gallery — React Website

A premium, fully responsive interior design website built with React, Tailwind CSS, MUI Icons, and Framer Motion. Designed with European luxury aesthetics.

---

## 🚀 Quick Start (VSCode)

```bash
# 1. Open the project folder in VSCode

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at:
http://localhost:5173
```

---

## 🏗 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling |
| **MUI Icons** | Icon components |
| **Framer Motion** | Page & scroll animations |
| **React Router DOM 6** | Client-side routing |
| **React Helmet Async** | SEO meta tags |

---

## 📁 Project Structure

```
shri-anaghaa/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navbar with mobile menu
│   │   ├── Footer.jsx           # Footer with social links
│   │   ├── WhatsAppButton.jsx   # Floating WhatsApp CTA
│   │   ├── Lightbox.jsx         # Image lightbox gallery
│   │   ├── PageTransition.jsx   # Animated page wrapper
│   │   └── SectionHeader.jsx    # Reusable section heading
│   ├── pages/
│   │   ├── Home.jsx             # Hero + featured projects + Instagram
│   │   ├── About.jsx            # Story, team, values
│   │   ├── Services.jsx         # All 5 services with process
│   │   ├── Portfolio.jsx        # Filterable gallery with lightbox
│   │   ├── Testimonials.jsx     # Reviews carousel + grid
│   │   └── Contact.jsx          # Form + map + WhatsApp
│   ├── data/
│   │   └── siteData.js          # All content, images, services
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json                  # Vercel deployment config
├── amplify.yml                  # AWS Amplify config
├── deploy-aws.sh                # AWS S3 + CloudFront script
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

### Color Palette
```
Ivory:      #FAFAF7    (background)
Cream:      #F5EFE6    (section backgrounds)
Beige:      #E8E0D5    (borders, subtle bg)
Gold:       #C9A96E    (primary accent)
Walnut:     #3D2B1F    (dark sections, headings)
Olive:      #6B7C5C    (success, nature accents)
Charcoal:   #2C2C2C    (body text)
```

### Typography
- **Display Font**: Cormorant Garamond (headings, quotes)
- **Body Font**: Jost (body text, navigation)
- **Accent Font**: Playfair Display (special callouts)

---

## 📄 Pages

| Page | Route | Features |
|---|---|---|
| Home | `/` | Hero, stats, services preview, featured projects, Instagram |
| About | `/about` | Story, quote, values, team, stats |
| Services | `/services` | All 5 services with alternating layout, design process |
| Portfolio | `/portfolio` | Filterable grid, lightbox viewer |
| Testimonials | `/testimonials` | Carousel + grid layout |
| Contact | `/contact` | Form with validation, Google Map, WhatsApp |

---

## ☁️ Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or connect GitHub repo at [vercel.com](https://vercel.com) — `vercel.json` is pre-configured.

### AWS Amplify
1. Push to GitHub
2. Go to AWS Amplify → New App → Host web app
3. Connect your repo — `amplify.yml` is pre-configured

### AWS S3 + CloudFront
```bash
# Set your bucket and distribution
export S3_BUCKET=your-bucket-name
export CF_DIST_ID=your-cloudfront-id

chmod +x deploy-aws.sh
./deploy-aws.sh
```

---

## ✏️ Customization

### Update Business Info
Edit `src/data/siteData.js` — change phone, email, address, Instagram handle.

### Update Images
Images use Unsplash CDN. Replace URLs in `src/data/siteData.js` with your own.

### Update Colors
Edit `tailwind.config.js` → `theme.extend.colors`.

### Update Fonts
Edit `index.html` Google Fonts link + `tailwind.config.js` fontFamily.

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth page transitions with Framer Motion
- ✅ Filterable portfolio with lightbox
- ✅ Testimonial carousel
- ✅ Form validation on contact page
- ✅ Sticky navbar (transparent on hero, solid on scroll)
- ✅ Floating WhatsApp button with pulse animation
- ✅ SEO meta tags per page
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Performance optimized (lazy loading images)

---

## 📞 Contact Details (Update in siteData.js)

- **Phone**: +91 98765 43210
- **Email**: hello@shrianaghaagallery.com
- **Address**: No. 42, 3rd Floor, Indiranagar, Bangalore

---

*Built with ❤️ for Shri Anaghaa Interior Gallery*
