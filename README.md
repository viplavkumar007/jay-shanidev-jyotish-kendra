# जय शनिदेव ज्योतिष केंद्र — Landing Page

A high-converting Marathi astrology workshop landing page built with:
- **React 18** (JavaScript)
- **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**

---

## 📁 Project Structure

```
jay-shanidev/
├── public/
│   └── assets/
│       ├── logo.jpeg          ← Brand logo
│       ├── instructor.jpeg    ← Sheshraj Patil photo
│       ├── poster-1..8.jpeg   ← Reference posters
│       └── workshop-preview.mp4
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FloatingWhatsApp.jsx
│   │   ├── RevealSection.jsx
│   │   └── Toast.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── WorkshopSection.jsx
│   │   ├── PainPointSection.jsx
│   │   ├── InstructorSection.jsx
│   │   ├── LearnSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── CTAStrip.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── siteContent.js     ← ✏️ Edit all content here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 🏗️ Production Build

```bash
npm run build
# Output: dist/ folder

# Preview production build locally
npm run preview
```

---

## ☁️ Deploy to Netlify (Recommended — Free)

### Option A: Drag & Drop (Easiest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → Sign up free
3. Drag the `dist/` folder to the Netlify dashboard
4. Your site is live instantly! ✅

### Option B: Git + Netlify (Auto-deploy)
1. Push this project to GitHub
2. Go to Netlify → **New site from Git**
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy** → Done!

---

## ☁️ Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts:
# Framework: Vite
# Build command: npm run build
# Output dir: dist
```

---

## ✏️ Editing Content

**All content is in one file:** `src/data/siteContent.js`

To update:
- Business name, phone, email, WhatsApp link → `brand` object
- Hero headlines → `hero` object
- Workshop details → `workshopDetails`
- Instructor info → `instructor`
- What you learn cards → `learnings` array
- Benefits → `benefits`
- Testimonials → `testimonials` array
- FAQ → `faqs` array
- Final CTA text → `finalCta`

---

## 🎨 Customization

### Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Fonts
Edit `index.html` → Google Fonts import link
Edit `tailwind.config.js` → `theme.extend.fontFamily`

### Images
Replace files in `public/assets/` with same filenames.

---

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with blur on scroll + active section highlight
- ✅ Framer Motion staggered hero entrance
- ✅ Scroll-triggered reveal animations
- ✅ Floating WhatsApp button (always visible)
- ✅ Enquiry form → opens WhatsApp + Email simultaneously
- ✅ FAQ accordion with smooth height animation
- ✅ Toast notifications (success/error)
- ✅ Marathi font support (Tiro Devanagari Marathi + Noto Sans Devanagari)
- ✅ CTA repeated after every 2 sections
- ✅ Video preview (autoplay muted loop)
- ✅ SEO meta tags in Marathi + English
- ✅ Keyboard accessible + ARIA labels
- ✅ prefers-reduced-motion respected

---

## 📞 Support

**जय शनिदेव ज्योतिष केंद्र**  
📱 +91 75075 36502  
📧 jayshanidevjyotishkendra@gmail.com  
📍 छ. संभाजीनगर, महाराष्ट्र
