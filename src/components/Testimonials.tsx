'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, Award, ThumbsUp, Heart } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full text-yellow-700 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Travelers
            <span className="text-gradient"> Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            have to say about their experiences with Goed Travels.
          </p>
        </motion.div>

        {/* Customer Satisfaction Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Star, label: 'Average Rating', value: '4.9/5', color: 'bg-yellow-100 text-yellow-600' },
            { icon: ThumbsUp, label: 'Would Recommend', value: '98%', color: 'bg-primary-100 text-primary-600' },
            { icon: Heart, label: 'Repeat Customers', value: '75%', color: 'bg-rose-100 text-rose-600' },
            { icon: Award, label: 'Industry Awards', value: '15+', color: 'bg-blue-100 text-blue-600' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-display text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100 rounded-3xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-display text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                    <p className="text-primary-600 text-sm mt-1 font-medium">{testimonials[currentIndex].trip}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 bg-white hover:bg-primary-50 border border-gray-200 rounded-xl text-gray-700 transition-all duration-300 hover:border-primary-300 shadow-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 bg-white hover:bg-primary-50 border border-gray-200 rounded-xl text-gray-700 transition-all duration-300 hover:border-primary-300 shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['TechCorp', 'GlobalFinance', 'InnovateCo', 'PremierInd', 'ApexTech'].map((client) => (
              <div
                key={client}
                className="text-gray-300 font-display text-xl font-bold hover:text-primary-400 transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
