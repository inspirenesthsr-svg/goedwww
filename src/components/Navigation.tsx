'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { 
    name: 'Destinations', 
    href: '/#destinations',
    submenu: [
      { name: 'International', href: '/#destinations', type: 'international' },
      { name: 'Domestic (India)', href: '/#destinations', type: 'domestic' },
    ]
  },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'I Need Help', href: '/help' },
  { name: 'Contact', href: '/#contact' },
]

// Custom event to communicate tab changes
const setDestinationTab = (type: string) => {
  window.dispatchEvent(new CustomEvent('setDestinationTab', { detail: type }))
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Header Container */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className={cn(
          "hidden md:block bg-primary-600 text-white text-sm py-2 transition-all duration-300",
          isScrolled && "hidden"
        )}>
          <div className="container-custom flex justify-between items-center px-8">
            <div className="flex items-center gap-6">
              <a href="tel:+919514774633" className="flex items-center gap-2 hover:text-primary-100 transition-colors">
                <Phone size={14} />
                +91 95147 74633
              </a>
              <a href="mailto:enquiry@goed.in" className="flex items-center gap-2 hover:text-primary-100 transition-colors">
                <Mail size={14} />
                enquiry@goed.in
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80">Follow us:</span>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="hover:text-primary-100 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={cn(
            'w-full transition-all duration-500',
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 py-2' 
              : 'bg-white/90 backdrop-blur-sm py-3'
          )}
        >
        <div className="container-custom px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/#home" className="flex items-center gap-3 group">
            <img 
              src="/Goed-Logo.png" 
              alt="Goed - The Complete Travel Co." 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300 text-base font-semibold inline-flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown */}
                {link.submenu && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden min-w-[200px]"
                      >
                        {link.submenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              if (item.type) {
                                setDestinationTab(item.type)
                              }
                              setActiveDropdown(null)
                            }}
                            className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-all text-sm font-semibold"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/#contact"
              className="btn-primary"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white pt-24">
              <div className="flex flex-col items-center gap-2 p-6">
                {/* Logo in mobile menu */}
                <img 
                  src="/Goed-Logo.png" 
                  alt="Goed - The Complete Travel Co." 
                  className="h-24 w-auto object-contain mb-6"
                />
                {navLinks.map((link, index) => (
                  <div key={link.name} className="w-full">
                    <motion.a
                      href={link.submenu ? undefined : link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        if (link.submenu) {
                          setActiveDropdown(activeDropdown === link.name ? null : link.name)
                        } else {
                          setIsMobileMenuOpen(false)
                        }
                      }}
                      className="w-full text-center py-4 text-xl text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {link.name}
                      {link.submenu && (
                        <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name && "rotate-180")} />
                      )}
                    </motion.a>
                    
                    {/* Mobile Submenu */}
                    {link.submenu && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-50 rounded-xl mx-4 mb-2 overflow-hidden"
                      >
                        {link.submenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              if (item.type) {
                                setDestinationTab(item.type)
                              }
                              setIsMobileMenuOpen(false)
                            }}
                            className="block py-3 text-center text-gray-600 hover:text-primary-600 transition-all"
                          >
                            {item.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <motion.a
                  href="/#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary mt-4 w-full text-center"
                >
                  Book Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
