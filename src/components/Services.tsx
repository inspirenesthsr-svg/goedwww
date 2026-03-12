'use client'

import { motion } from 'framer-motion'
import { Plane, Hotel, Map, Compass, Heart, Users, ArrowRight, FileCheck, Ship, Church } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap: { [key: string]: React.ElementType } = {
  Plane,
  Hotel,
  Map,
  Compass,
  Heart,
  Users,
  FileCheck,
  Ship,
  Church,
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <span className="text-primary-500"> Perfect Travel</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive travel solutions tailored to make your journey seamless and memorable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-50 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-primary-500 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-8 py-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-600">
              Need something specific?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors"
            >
              Request Custom Package
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
