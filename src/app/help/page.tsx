import Navigation from '@/components/Navigation'
import TravelAssistant from '@/components/TravelAssistant'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'I Need Help - AI Travel Assistant | Goed Travels',
  description: 'Let our AI Travel Assistant help you find the perfect destination based on your preferences, budget, and travel style.',
}

export default function HelpPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <TravelAssistant />
      </div>
      <Footer />
    </main>
  )
}

