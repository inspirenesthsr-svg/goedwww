# Goed Travels - Premium Travel Website

A modern, enterprise-grade travel website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

![Goed Travels](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80)

## ✨ Features

- **Modern Design**: Stunning dark theme with emerald/gold accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Search**: Destination and package search functionality
- **Destination Showcase**: Filterable destinations by region
- **Pricing Packages**: Clear, transparent pricing tiers
- **Testimonials Carousel**: Customer reviews with ratings
- **Gallery with Lightbox**: Filterable image gallery
- **Contact Form**: Quote request functionality
- **Performance Optimized**: Built with Next.js for optimal loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: DM Sans + Playfair Display

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd goed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
goed/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout with fonts
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── Navigation.tsx   # Header & mobile menu
│   │   ├── Hero.tsx         # Hero section with search
│   │   ├── Services.tsx     # Services showcase
│   │   ├── Destinations.tsx # Destination cards
│   │   ├── Pricing.tsx      # Pricing packages
│   │   ├── Testimonials.tsx # Customer reviews
│   │   ├── Gallery.tsx      # Image gallery
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer section
│   └── lib/
│       ├── utils.ts         # Utility functions
│       └── data.ts          # Static data
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## 🎨 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
- `primary`: Emerald green tones
- `accent`: Gold/yellow tones
- `navy`: Dark blue tones

### Content
Update the data in `src/lib/data.ts`:
- Destinations
- Packages & Pricing
- Services
- Testimonials
- Gallery images

### Branding
- Update logo in `Navigation.tsx` and `Footer.tsx`
- Change contact details in `Contact.tsx` and `Footer.tsx`
- Modify metadata in `layout.tsx`

## 📦 Build for Production

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## 🌐 Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Deploy to Vercel

```bash
npx vercel
```

## 📝 License

© 2026 Goed Travels. All rights reserved.

---

Built with ❤️ for Goed Travels

