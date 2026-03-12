'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, ArrowRight } from 'lucide-react'
import { stats } from '@/lib/data'

const heroSlides = [
  {
    id: 1,
    destination: 'MALDIVES',
    tagline: 'Where Paradise Meets the Sea',
    description: 'Dive into crystal-clear waters and wake up to endless horizons',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80',
  },
  {
    id: 2,
    destination: 'BALI',
    tagline: 'Find Your Inner Peace',
    description: 'Ancient temples, emerald rice terraces, and spiritual awakening await',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80',
  },
  {
    id: 3,
    destination: 'SWISS ALPS',
    tagline: 'Touch the Sky',
    description: 'Where majestic peaks meet endless adventure',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80',
  },
  {
    id: 4,
    destination: 'DUBAI',
    tagline: 'Where Dreams Touch the Clouds',
    description: 'Experience luxury beyond imagination in the city of gold',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
  },
  {
    id: 5,
    destination: 'SANTORINI',
    tagline: 'Sunsets That Steal Your Heart',
    description: 'White-washed magic perched above the deep blue Aegean',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80',
  },
  {
    id: 6,
    destination: 'PARIS',
    tagline: 'Fall in Love Again',
    description: 'The city of lights, love, and timeless romance',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
  },
  {
    id: 7,
    destination: 'TOKYO',
    tagline: 'Where Tradition Meets Tomorrow',
    description: 'Ancient shrines and neon lights in perfect harmony',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
  },
  {
    id: 8,
    destination: 'THAILAND',
    tagline: 'The Land of Smiles Awaits',
    description: 'Golden temples, tropical beaches, and unforgettable flavors',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&q=80',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images with smooth crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Ken Burns effect on each image */}
            <motion.div
              animate={{ 
                scale: [1, 1.08],
              }}
              transition={{ 
                duration: 8,
                ease: "easeOut",
              }}
              className="absolute inset-0 w-[110%] h-[110%] -top-[5%] -left-[5%]"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container-custom px-4 md:px-8">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
            >
              <Plane className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-white/90 font-medium">The Complete Travel Co.</span>
            </motion.div>

            {/* Destination name */}
            <div className="overflow-hidden mb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`dest-${currentSlide}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -80, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span className="text-primary-400 text-2xl md:text-3xl lg:text-4xl font-black tracking-[0.3em] uppercase">
                    {heroSlides[currentSlide].destination}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Main Tagline */}
            <div className="overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`tagline-${currentSlide}`}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]"
                >
                  {heroSlides[currentSlide].tagline}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description */}
            <div className="overflow-hidden mb-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="text-xl md:text-2xl lg:text-3xl text-white/70 max-w-3xl font-light"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a 
                href="#destinations" 
                className="px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary-500/30"
              >
                Explore Destinations
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center gap-2"
              >
                Get a Quote
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl md:text-5xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Progress bar for slides */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex">
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="flex-1 h-1 bg-white/10">
              {index === currentSlide && (
                <motion.div
                  key={`progress-${currentSlide}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-full bg-primary-500"
                />
              )}
              {index < currentSlide && (
                <div className="h-full w-full bg-primary-500/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/40 font-mono text-sm">
        <span className="text-white text-lg font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(heroSlides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-8 z-20 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
        <span className="text-white/40 text-sm uppercase tracking-wider">Scroll</span>
      </motion.div>
    </section>
  )
}
