'use client'

import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Heart
} from 'lucide-react'

const footerLinks = {
  destinations: [
    { name: 'Bali, Indonesia', href: '#destinations' },
    { name: 'Maldives', href: '#destinations' },
    { name: 'Dubai, UAE', href: '#destinations' },
    { name: 'Switzerland', href: '#destinations' },
    { name: 'Paris, France', href: '#destinations' },
  ],
  services: [
    { name: 'Flight Booking', href: '#services' },
    { name: 'Hotel Reservations', href: '#services' },
    { name: 'Tour Packages', href: '#services' },
    { name: 'Honeymoon Specials', href: '#services' },
    { name: 'Corporate Travel', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  support: [
    { name: 'FAQs', href: '/#contact' },
    { name: 'Contact Us', href: '/#contact' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-16 px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <a href="#home" className="inline-block mb-6">
                <img 
                  src="/Goed-Logo.png" 
                  alt="Goed - The Complete Travel Co." 
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </a>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for extraordinary travel experiences. 
                We turn your dream destinations into unforgettable realities.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <a href="tel:+919514774633" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +91 95147 74633
                </a>
                <a href="mailto:enquiry@goed.in" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  enquiry@goed.in
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-300 font-medium">Head Office - Chennai</span><br />
                      <span>Prince Towers, College Road, Nungambakkam, Chennai - 600034</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Branch - Hosur</span><br />
                      <span>SRS Building, Denkanikottai Main Road, Mathigiri, Hosur - 635109</span>
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Branch - Bangalore</span><br />
                      <span>Floor 91, Gopal Krishna Complex, Ashok Nagar, Bengaluru - 560025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-6">Destinations</h3>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-display text-lg font-bold text-white mb-6">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="py-12 px-4 md:px-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-400">Get exclusive deals and travel inspiration delivered to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg shadow-primary-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 px-4 md:px-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Goed Travels - The Complete Travel Co. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-primary-500 fill-primary-500" /> in India
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-primary-500 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
