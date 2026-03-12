import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Destinations from '@/components/Destinations'
import Testimonials from '@/components/Testimonials'
import InstagramFeed from '@/components/Instagram'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  )
}
