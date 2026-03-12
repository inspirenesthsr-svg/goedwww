'use client'

import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
    likes: 1234,
    comments: 56,
    alt: 'Maldives beach vacation',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    likes: 987,
    comments: 43,
    alt: 'Bali temple visit',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    likes: 2156,
    comments: 89,
    alt: 'Mountain adventure',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    likes: 1567,
    comments: 72,
    alt: 'Dubai skyline',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80',
    likes: 876,
    comments: 34,
    alt: 'Kerala backwaters',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80',
    likes: 1890,
    comments: 67,
    alt: 'Santorini sunset',
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80',
    likes: 1345,
    comments: 51,
    alt: 'Thailand temple',
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80',
    likes: 2034,
    comments: 94,
    alt: 'Rajasthan palace',
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary-500" />
            <span className="font-display text-2xl font-bold text-gray-900">@goedtravels</span>
          </div>
          <p className="text-gray-600">
            Follow us on Instagram for travel inspiration and exclusive offers
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/goedtravels"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-semibold">{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Instagram icon on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="w-6 h-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://instagram.com/goedtravels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-shadow"
          >
            <Instagram className="w-5 h-5" />
            Follow @goedtravels
          </a>
        </motion.div>
      </div>
    </section>
  )
}

