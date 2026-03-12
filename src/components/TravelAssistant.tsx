'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, 
  Send, 
  Users, 
  Globe, 
  Flag, 
  Mountain, 
  Palmtree, 
  Building, 
  Church,
  Heart,
  Briefcase,
  GraduationCap,
  Plane,
  IndianRupee,
  MapPin,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react'

type Step = 'purpose' | 'travelers' | 'destination' | 'preference' | 'budget' | 'results'

interface UserPreferences {
  purpose: string
  travelers: string
  destination: string
  preference: string[]
  budget: string
}

const purposes = [
  { id: 'leisure', label: 'Leisure & Vacation', icon: Palmtree },
  { id: 'honeymoon', label: 'Honeymoon', icon: Heart },
  { id: 'family', label: 'Family Trip', icon: Users },
  { id: 'business', label: 'Business Travel', icon: Briefcase },
  { id: 'pilgrimage', label: 'Pilgrimage / Spiritual', icon: Church },
  { id: 'adventure', label: 'Adventure & Exploration', icon: Mountain },
]

const travelerOptions = [
  { id: 'solo', label: 'Solo Traveler', count: '1 person' },
  { id: 'couple', label: 'Couple', count: '2 people' },
  { id: 'family-small', label: 'Small Family', count: '3-4 people' },
  { id: 'family-large', label: 'Large Family', count: '5-8 people' },
  { id: 'group', label: 'Group', count: '9+ people' },
]

const destinationTypes = [
  { id: 'international', label: 'International', icon: Globe, desc: 'Explore the world' },
  { id: 'domestic', label: 'Domestic (India)', icon: Flag, desc: 'Discover India' },
  { id: 'both', label: 'Open to Both', icon: Plane, desc: 'Show me everything' },
]

const preferenceOptions = [
  { id: 'beach', label: 'Beaches', icon: '🏖️' },
  { id: 'mountain', label: 'Mountains', icon: '🏔️' },
  { id: 'city', label: 'City & Culture', icon: '🏙️' },
  { id: 'nature', label: 'Nature & Wildlife', icon: '🌿' },
  { id: 'adventure', label: 'Adventure Sports', icon: '🎿' },
  { id: 'spiritual', label: 'Spiritual / Temples', icon: '🛕' },
  { id: 'heritage', label: 'Heritage & History', icon: '🏛️' },
  { id: 'romantic', label: 'Romantic', icon: '💕' },
]

const budgetRanges = [
  { id: 'budget', label: 'Budget Friendly', range: 'Under ₹25,000', perPerson: 'per person' },
  { id: 'mid', label: 'Mid Range', range: '₹25,000 - ₹75,000', perPerson: 'per person' },
  { id: 'premium', label: 'Premium', range: '₹75,000 - ₹1,50,000', perPerson: 'per person' },
  { id: 'luxury', label: 'Luxury', range: 'Above ₹1,50,000', perPerson: 'per person' },
]

// Recommendation database
const recommendations = {
  international: {
    beach: [
      { name: 'Maldives', price: '₹1,50,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80', highlight: 'Overwater Villas' },
      { name: 'Bali, Indonesia', price: '₹45,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', highlight: 'Temples & Beaches' },
      { name: 'Thailand', price: '₹55,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=400&q=80', highlight: 'Phi Phi Islands' },
    ],
    mountain: [
      { name: 'Swiss Alps', price: '₹1,25,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80', highlight: 'Jungfraujoch' },
      { name: 'New Zealand', price: '₹1,80,000', duration: '10D/9N', image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&q=80', highlight: 'Milford Sound' },
    ],
    city: [
      { name: 'Paris, France', price: '₹1,10,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80', highlight: 'Eiffel Tower' },
      { name: 'Tokyo, Japan', price: '₹1,35,000', duration: '8D/7N', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80', highlight: 'Mt. Fuji' },
      { name: 'Dubai, UAE', price: '₹65,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80', highlight: 'Burj Khalifa' },
    ],
    romantic: [
      { name: 'Santorini, Greece', price: '₹95,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80', highlight: 'Sunset Views' },
      { name: 'Maldives', price: '₹1,50,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80', highlight: 'Private Villas' },
      { name: 'Paris, France', price: '₹1,10,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80', highlight: 'City of Love' },
    ],
    adventure: [
      { name: 'New Zealand', price: '₹1,80,000', duration: '10D/9N', image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=400&q=80', highlight: 'Bungee & Skydiving' },
      { name: 'Switzerland', price: '₹1,25,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80', highlight: 'Paragliding' },
    ],
    spiritual: [
      { name: 'Bali, Indonesia', price: '₹45,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', highlight: 'Ancient Temples' },
      { name: 'Cambodia', price: '₹50,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=400&q=80', highlight: 'Angkor Wat' },
    ],
    heritage: [
      { name: 'Egypt', price: '₹85,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&q=80', highlight: 'Pyramids' },
      { name: 'Rome, Italy', price: '₹1,00,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80', highlight: 'Colosseum' },
    ],
    nature: [
      { name: 'Kenya Safari', price: '₹1,40,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80', highlight: 'Wildlife Safari' },
      { name: 'Iceland', price: '₹1,60,000', duration: '8D/7N', image: 'https://images.unsplash.com/photo-1520769669658-f07657e5b307?w=400&q=80', highlight: 'Northern Lights' },
    ],
  },
  domestic: {
    beach: [
      { name: 'Goa', price: '₹18,000', duration: '4D/3N', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80', highlight: 'Beach Paradise' },
      { name: 'Andaman Islands', price: '₹38,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', highlight: 'Scuba Diving' },
      { name: 'Kerala Beaches', price: '₹22,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&q=80', highlight: 'Kovalam & Varkala' },
    ],
    mountain: [
      { name: 'Ladakh', price: '₹45,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80', highlight: 'Pangong Lake' },
      { name: 'Shimla Manali', price: '₹22,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&q=80', highlight: 'Snow Mountains' },
      { name: 'Darjeeling & Sikkim', price: '₹32,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=400&q=80', highlight: 'Tea Gardens' },
    ],
    city: [
      { name: 'Rajasthan Royal', price: '₹35,000', duration: '7D/6N', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80', highlight: 'Palace & Forts' },
      { name: 'Mumbai & Goa', price: '₹28,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80', highlight: 'City & Beach' },
    ],
    romantic: [
      { name: 'Kerala Backwaters', price: '₹25,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80', highlight: 'Houseboat Stay' },
      { name: 'Udaipur', price: '₹28,000', duration: '4D/3N', image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=400&q=80', highlight: 'Lake City' },
      { name: 'Andaman Honeymoon', price: '₹42,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', highlight: 'Island Romance' },
    ],
    adventure: [
      { name: 'Rishikesh', price: '₹15,000', duration: '3D/2N', image: 'https://images.unsplash.com/photo-1588096344356-9b497df0a04e?w=400&q=80', highlight: 'River Rafting' },
      { name: 'Ladakh Bike Trip', price: '₹55,000', duration: '10D/9N', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80', highlight: 'Khardung La' },
      { name: 'Northeast Explorer', price: '₹42,000', duration: '8D/7N', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=400&q=80', highlight: 'Living Root Bridges' },
    ],
    spiritual: [
      { name: 'Varanasi', price: '₹15,000', duration: '3D/2N', image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&q=80', highlight: 'Ganga Aarti' },
      { name: 'Golden Temple & Vaishno Devi', price: '₹20,000', duration: '5D/4N', image: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=400&q=80', highlight: 'Pilgrimage' },
      { name: 'Char Dham Yatra', price: '₹35,000', duration: '10D/9N', image: 'https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=400&q=80', highlight: 'Sacred Journey' },
    ],
    heritage: [
      { name: 'Rajasthan Heritage', price: '₹40,000', duration: '8D/7N', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&q=80', highlight: 'Forts & Palaces' },
      { name: 'Hampi & Badami', price: '₹22,000', duration: '4D/3N', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&q=80', highlight: 'Ancient Ruins' },
    ],
    nature: [
      { name: 'Coorg', price: '₹20,000', duration: '4D/3N', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', highlight: 'Coffee Plantations' },
      { name: 'Meghalaya', price: '₹35,000', duration: '6D/5N', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=400&q=80', highlight: 'Cleanest Village' },
      { name: 'Rann of Kutch', price: '₹28,000', duration: '4D/3N', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&q=80', highlight: 'White Desert' },
    ],
  },
}

export default function TravelAssistant() {
  const [currentStep, setCurrentStep] = useState<Step>('purpose')
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    purpose: '',
    travelers: '',
    destination: '',
    preference: [],
    budget: '',
  })
  const [results, setResults] = useState<typeof recommendations.international.beach>([])

  const handlePurposeSelect = (purpose: string) => {
    setUserPreferences(prev => ({ ...prev, purpose }))
    setCurrentStep('travelers')
  }

  const handleTravelersSelect = (travelers: string) => {
    setUserPreferences(prev => ({ ...prev, travelers }))
    setCurrentStep('destination')
  }

  const handleDestinationSelect = (destination: string) => {
    setUserPreferences(prev => ({ ...prev, destination }))
    setCurrentStep('preference')
  }

  const handlePreferenceToggle = (pref: string) => {
    setUserPreferences(prev => ({
      ...prev,
      preference: prev.preference.includes(pref)
        ? prev.preference.filter(p => p !== pref)
        : [...prev.preference, pref]
    }))
  }

  const handlePreferenceNext = () => {
    if (userPreferences.preference.length > 0) {
      setCurrentStep('budget')
    }
  }

  const handleBudgetSelect = (budget: string) => {
    setUserPreferences(prev => ({ ...prev, budget }))
    generateResults(budget)
  }

  const generateResults = (budget: string) => {
    let allResults: typeof recommendations.international.beach = []
    const destType = userPreferences.destination
    const prefs = userPreferences.preference

    prefs.forEach(pref => {
      if (destType === 'international' || destType === 'both') {
        const intlRecs = recommendations.international[pref as keyof typeof recommendations.international] || []
        allResults = [...allResults, ...intlRecs]
      }
      if (destType === 'domestic' || destType === 'both') {
        const domRecs = recommendations.domestic[pref as keyof typeof recommendations.domestic] || []
        allResults = [...allResults, ...domRecs]
      }
    })

    // Remove duplicates
    const uniqueResults = allResults.filter((item, index, self) =>
      index === self.findIndex(t => t.name === item.name)
    )

    // Filter by budget
    const budgetFiltered = uniqueResults.filter(item => {
      const price = parseInt(item.price.replace(/[₹,]/g, ''))
      switch (budget) {
        case 'budget': return price <= 25000
        case 'mid': return price > 25000 && price <= 75000
        case 'premium': return price > 75000 && price <= 150000
        case 'luxury': return price > 150000
        default: return true
      }
    })

    // If no results match budget, show all and let user know
    setResults(budgetFiltered.length > 0 ? budgetFiltered.slice(0, 6) : uniqueResults.slice(0, 6))
    setCurrentStep('results')
  }

  const resetAssistant = () => {
    setUserPreferences({
      purpose: '',
      travelers: '',
      destination: '',
      preference: [],
      budget: '',
    })
    setResults([])
    setCurrentStep('purpose')
  }

  const stepTitles: Record<Step, string> = {
    purpose: "What's the purpose of your trip?",
    travelers: "How many travelers?",
    destination: "Where would you like to go?",
    preference: "What kind of experience are you looking for?",
    budget: "What's your budget per person?",
    results: "Here are your personalized recommendations!",
  }

  return (
    <section id="help" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full mb-4">
            <Bot className="w-5 h-5 text-primary-500" />
            <span className="text-primary-600 font-medium">AI Travel Assistant</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Need Help
            <span className="text-primary-500"> Planning My Trip</span>
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few questions and let our AI assistant find the perfect destinations for you!
          </p>
        </motion.div>

        {/* Assistant Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Progress bar */}
            <div className="h-2 bg-gray-100">
              <motion.div
                className="h-full bg-primary-500"
                initial={{ width: '0%' }}
                animate={{
                  width: currentStep === 'purpose' ? '16%' :
                         currentStep === 'travelers' ? '33%' :
                         currentStep === 'destination' ? '50%' :
                         currentStep === 'preference' ? '66%' :
                         currentStep === 'budget' ? '83%' : '100%'
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="p-8 md:p-12">
              {/* Bot message */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-primary-500" />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-lg">
                  <p className="text-gray-800 font-medium">{stepTitles[currentStep]}</p>
                  {currentStep === 'preference' && (
                    <p className="text-gray-500 text-sm mt-1">Select one or more options</p>
                  )}
                </div>
              </div>

              {/* Options */}
              <AnimatePresence mode="wait">
                {/* Step 1: Purpose */}
                {currentStep === 'purpose' && (
                  <motion.div
                    key="purpose"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {purposes.map((purpose) => (
                      <button
                        key={purpose.id}
                        onClick={() => handlePurposeSelect(purpose.id)}
                        className="group p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all text-left"
                      >
                        <purpose.icon className="w-8 h-8 text-primary-500 mb-2" />
                        <span className="font-medium text-gray-800 group-hover:text-primary-600">{purpose.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 2: Travelers */}
                {currentStep === 'travelers' && (
                  <motion.div
                    key="travelers"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                  >
                    {travelerOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleTravelersSelect(option.id)}
                        className="group p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all text-left"
                      >
                        <Users className="w-8 h-8 text-primary-500 mb-2" />
                        <span className="font-medium text-gray-800 block group-hover:text-primary-600">{option.label}</span>
                        <span className="text-sm text-gray-500">{option.count}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 3: Destination Type */}
                {currentStep === 'destination' && (
                  <motion.div
                    key="destination"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {destinationTypes.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => handleDestinationSelect(dest.id)}
                        className="group p-6 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all text-center"
                      >
                        <dest.icon className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                        <span className="font-semibold text-gray-800 block group-hover:text-primary-600">{dest.label}</span>
                        <span className="text-sm text-gray-500">{dest.desc}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Step 4: Preferences */}
                {currentStep === 'preference' && (
                  <motion.div
                    key="preference"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {preferenceOptions.map((pref) => (
                        <button
                          key={pref.id}
                          onClick={() => handlePreferenceToggle(pref.id)}
                          className={`p-4 border-2 rounded-xl transition-all text-center ${
                            userPreferences.preference.includes(pref.id)
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <span className="text-2xl block mb-1">{pref.icon}</span>
                          <span className={`text-sm font-medium ${
                            userPreferences.preference.includes(pref.id) ? 'text-primary-600' : 'text-gray-700'
                          }`}>{pref.label}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handlePreferenceNext}
                      disabled={userPreferences.preference.length === 0}
                      className="w-full py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* Step 5: Budget */}
                {currentStep === 'budget' && (
                  <motion.div
                    key="budget"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.id}
                        onClick={() => handleBudgetSelect(budget.id)}
                        className="group p-4 border-2 border-gray-200 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all text-center"
                      >
                        <IndianRupee className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                        <span className="font-semibold text-gray-800 block group-hover:text-primary-600">{budget.label}</span>
                        <span className="text-sm text-gray-500 block">{budget.range}</span>
                        <span className="text-xs text-gray-400">{budget.perPerson}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Results */}
                {currentStep === 'results' && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {results.length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          {results.map((result, index) => (
                            <motion.div
                              key={result.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                            >
                              <div className="relative h-40 overflow-hidden">
                                <img
                                  src={result.image}
                                  alt={result.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-700">
                                  {result.duration}
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="font-semibold text-gray-900">{result.name}</h4>
                                    <p className="text-xs text-primary-500 flex items-center gap-1">
                                      <Sparkles className="w-3 h-3" />
                                      {result.highlight}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <span className="font-bold text-primary-600">{result.price}</span>
                                    <span className="text-xs text-gray-500 block">per person</span>
                                  </div>
                                </div>
                                <a
                                  href="/#contact"
                                  className="block w-full py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg text-center transition-colors"
                                >
                                  Book Now
                                </a>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button
                            onClick={resetAssistant}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <RotateCcw className="w-5 h-5" />
                            Start Over
                          </button>
                          <a
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                          >
                            <Send className="w-5 h-5" />
                            Get Custom Quote
                          </a>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">No exact matches found for your criteria. Let us help you find something perfect!</p>
                        <a
                          href="/#contact"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors"
                        >
                          Contact Us for Custom Package
                        </a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

