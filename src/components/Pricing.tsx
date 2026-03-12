'use client'

import { motion } from 'framer-motion'
import { Check, X, Sparkles } from 'lucide-react'
import { packages } from '@/lib/data'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            Our Packages
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparent
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect package that suits your travel style and budget. 
            All packages are customizable to your preferences.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${pkg.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-bold rounded-full shadow-lg shadow-primary-500/30">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] ${
                  pkg.popular
                    ? 'bg-white border-2 border-primary-500 shadow-2xl shadow-primary-200/50'
                    : 'bg-white border border-gray-200 shadow-lg shadow-gray-200/50 hover:border-primary-300 hover:shadow-xl'
                }`}
              >
                {/* Package name */}
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-lg">₹</span>
                    <span className="font-display text-5xl font-bold text-gray-900">
                      {(pkg.price / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">per person</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-50">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <X className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/30'
                      : 'bg-gray-100 text-gray-800 hover:bg-primary-100 hover:text-primary-700 border border-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white border border-gray-200 rounded-2xl inline-flex flex-wrap items-center justify-center gap-6 md:gap-12 p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700">No hidden charges</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-700">Free cancellation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-gray-700">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
