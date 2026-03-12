'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '@/lib/data'

const categories = ['All', 'Nature', 'Beaches', 'Resorts', 'Cities', 'Culture', 'Adventure']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (id: number) => setSelectedImage(id)
  const closeLightbox = () => setSelectedImage(null)

  const currentImageIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage) 
    : -1

  const goToNext = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentImageIndex + 1].id)
    }
  }

  const goToPrev = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredImages[currentImageIndex - 1].id)
    }
  }

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Captured
            <span className="text-gradient"> Moments</span>
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse into the extraordinary experiences awaiting you. 
            Browse through memories captured by our travelers.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-primary-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group cursor-pointer ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative h-48 md:h-64 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/50 transition-all duration-300" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/90 flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-primary-600" />
                      </div>
                      <span className="text-white font-medium">{image.category}</span>
                    </div>
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 text-xs font-medium">
                    {image.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Follow us on Instagram
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            {currentImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToPrev()
                }}
                className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {currentImageIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goToNext()
                }}
                className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[currentImageIndex]?.src.replace('w=600', 'w=1200')}
              alt={filteredImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
