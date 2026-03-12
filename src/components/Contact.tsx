'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your
            <span className="text-yellow-300"> Journey Today</span>
          </h2>
          <p className="text-lg text-white/80">
            Ready to explore? Get in touch with our travel experts and let us craft 
            your perfect vacation package.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <h3 className="font-display text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="tel:+919514774633" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call us</p>
                    <p className="text-white font-medium">+91 99418 43344</p>
                  </div>
                </a>

                <a href="mailto:enquiry@goed.in" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email us</p>
                    <p className="text-white font-medium">enquiry@goed.in</p>
                  </div>
                </a>

                {/* Head Office - Chennai */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Head Office - Chennai</p>
                    <p className="text-white font-medium">
                      Prince Towers, College Road,<br />
                      Nungambakkam, Chennai - 600034,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Branch - Hosur */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Branch - Hosur</p>
                    <p className="text-white font-medium">
                      SRS Building, Denkanikottai Main Road,<br />
                      Mathigiri, Hosur - 635109<br />
                      (Near By Ratna Cards)
                    </p>
                  </div>
                </div>

                {/* Branch - Bangalore */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Branch - Bangalore</p>
                    <p className="text-white font-medium">
                      Floor 91, Gopal Krishna Complex,<br />
                      Springboard Business Hub, Ashok Nagar,<br />
                      Bengaluru, Karnataka - 560025
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Working hours</p>
                    <p className="text-white font-medium">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sun: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick contact */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-white mb-4">Quick Connect</h3>
              <p className="text-white/70 text-sm mb-4">
                Prefer instant messaging? Reach us on:
              </p>
              <div className="flex gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-green-500 hover:bg-green-400 rounded-xl text-white font-medium text-center transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="flex-1 py-3 px-4 bg-blue-500 hover:bg-blue-400 rounded-xl text-white font-medium text-center transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                Request a Quote
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    We&apos;ve received your inquiry. Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2 font-medium">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2 font-medium">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 95147 74633"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2 font-medium">Preferred Destination</label>
                      <select
                        name="destination"
                        value={formState.destination}
                        onChange={handleChange}
                        className="input-field appearance-none cursor-pointer"
                      >
                        <option value="">Select destination</option>
                        <option value="bali">Bali, Indonesia</option>
                        <option value="maldives">Maldives</option>
                        <option value="dubai">Dubai, UAE</option>
                        <option value="switzerland">Switzerland</option>
                        <option value="greece">Greece</option>
                        <option value="paris">Paris, France</option>
                        <option value="kerala">Kerala, India</option>
                        <option value="japan">Japan</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formState.travelers}
                      onChange={handleChange}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Person (Solo)</option>
                      <option value="2">2 People (Couple)</option>
                      <option value="3-4">3-4 People (Family)</option>
                      <option value="5-10">5-10 People (Group)</option>
                      <option value="10+">10+ People (Large Group)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Your Message</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your travel plans, preferred dates, budget, and any special requirements..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </button>

                  <p className="text-center text-gray-400 text-sm">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
