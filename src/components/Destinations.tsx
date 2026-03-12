'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Star, Clock, ArrowRight, X, Calendar, Users, Check, Globe, Flag } from 'lucide-react'

const internationalDestinations = [
  { 
    id: 1,
    name: 'Maldives',
    country: 'Maldives',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', 
    rating: 5.0,
    reviews: 278,
    startingPrice: 150000,
    duration: '5 Days / 4 Nights',
    featured: true,
    description: 'Experience paradise on Earth with crystal-clear waters, overwater villas, and pristine white sand beaches. The Maldives offers the ultimate luxury escape.',
    highlights: ['Overwater Villa Stay', 'Snorkeling & Diving', 'Sunset Dolphin Cruise', 'Spa & Wellness'],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome', details: 'Airport pickup, speedboat transfer to resort, welcome drink, resort orientation' },
      { day: 2, title: 'Water Adventures', details: 'Snorkeling trip, underwater restaurant lunch, sunset cruise' },
      { day: 3, title: 'Island Hopping', details: 'Visit local islands, cultural experience, beach BBQ dinner' },
      { day: 4, title: 'Relaxation Day', details: 'Spa treatments, private beach time, candlelit dinner' },
      { day: 5, title: 'Departure', details: 'Leisurely breakfast, checkout, transfer to airport' },
    ]
  },
  { 
    id: 2,
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', 
    rating: 4.9,
    reviews: 234,
    startingPrice: 45000,
    duration: '5 Days / 4 Nights',
    featured: true,
    description: 'Discover the Island of Gods with its stunning temples, lush rice terraces, and vibrant culture. Bali offers a perfect blend of adventure and relaxation.',
    highlights: ['Temple Tours', 'Rice Terrace Visit', 'Traditional Dance Show', 'Beach Activities'],
    itinerary: [
      { day: 1, title: 'Arrival in Paradise', details: 'Airport pickup, check-in to resort, Seminyak beach sunset' },
      { day: 2, title: 'Cultural Exploration', details: 'Ubud tour, Tegallalang Rice Terraces, Monkey Forest' },
      { day: 3, title: 'Temple Discovery', details: 'Tanah Lot Temple, Uluwatu Temple, Kecak dance performance' },
      { day: 4, title: 'Adventure Day', details: 'White water rafting, waterfall visit, spa treatment' },
      { day: 5, title: 'Departure', details: 'Shopping time, airport transfer' },
    ]
  },
  { 
    id: 3,
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', 
    rating: 4.8,
    reviews: 189,
    startingPrice: 125000,
    duration: '7 Days / 6 Nights',
    featured: true,
    description: 'Journey through breathtaking alpine landscapes, charming villages, and world-class ski resorts. Switzerland offers unparalleled natural beauty.',
    highlights: ['Mountain Train Rides', 'Scenic Cable Cars', 'Chocolate & Cheese Tours', 'Lake Cruises'],
    itinerary: [
      { day: 1, title: 'Arrive Zurich', details: 'Airport pickup, city tour, check-in to hotel' },
      { day: 2, title: 'Lucerne & Mt. Pilatus', details: 'Golden Round Trip, cable car ride, panoramic views' },
      { day: 3, title: 'Interlaken Adventure', details: 'Transfer to Interlaken, paragliding option, lake cruise' },
      { day: 4, title: 'Jungfraujoch', details: 'Top of Europe excursion, ice palace, snow activities' },
      { day: 5, title: 'Zermatt & Matterhorn', details: 'Scenic train to Zermatt, Gornergrat railway' },
      { day: 6, title: 'Geneva & Leisure', details: 'Transfer to Geneva, city tour, chocolate factory' },
      { day: 7, title: 'Departure', details: 'Airport transfer, departure' },
    ]
  },
  { 
    id: 4,
    name: 'Dubai',
    country: 'UAE',
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', 
    rating: 4.7,
    reviews: 456,
    startingPrice: 65000,
    duration: '5 Days / 4 Nights',
    featured: true,
    description: 'Experience the city of superlatives with stunning architecture, luxury shopping, and desert adventures. Dubai seamlessly blends tradition with modernity.',
    highlights: ['Burj Khalifa Visit', 'Desert Safari', 'Dubai Mall & Fountains', 'Palm Jumeirah'],
    itinerary: [
      { day: 1, title: 'Welcome to Dubai', details: 'Airport transfer, hotel check-in, Dubai Marina walk' },
      { day: 2, title: 'City Highlights', details: 'Burj Khalifa, Dubai Mall, fountain show, souks visit' },
      { day: 3, title: 'Desert Adventure', details: 'Desert safari, dune bashing, camel ride, BBQ dinner' },
      { day: 4, title: 'Leisure & Shopping', details: 'Palm Jumeirah, Atlantis visit, shopping time' },
      { day: 5, title: 'Departure', details: 'Last minute shopping, airport transfer' },
    ]
  },
  { 
    id: 5,
    name: 'Santorini',
    country: 'Greece',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80', 
    rating: 4.9,
    reviews: 312,
    startingPrice: 95000,
    duration: '6 Days / 5 Nights',
    featured: true,
    description: 'Discover the magic of iconic white-washed buildings, stunning sunsets, and the deep blue Aegean Sea. Santorini is romance personified.',
    highlights: ['Oia Sunset', 'Wine Tasting', 'Volcano Tour', 'Beach Hopping'],
    itinerary: [
      { day: 1, title: 'Arrival', details: 'Ferry/flight arrival, hotel check-in in Fira, sunset viewing' },
      { day: 2, title: 'Island Discovery', details: 'Fira to Oia hike, village exploration, famous sunset' },
      { day: 3, title: 'Volcano & Hot Springs', details: 'Boat trip to volcano, swim in hot springs' },
      { day: 4, title: 'Wine & Culture', details: 'Wine tasting tour, ancient Akrotiri ruins' },
      { day: 5, title: 'Beach Day', details: 'Red Beach, Black Beach, Perissa, leisure time' },
      { day: 6, title: 'Departure', details: 'Breakfast, transfer to port/airport' },
    ]
  },
  { 
    id: 6,
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', 
    rating: 4.8,
    reviews: 567,
    startingPrice: 110000,
    duration: '6 Days / 5 Nights',
    featured: false,
    description: 'Fall in love with the City of Light. From the Eiffel Tower to world-class museums and cuisine, Paris offers an unforgettable romantic escape.',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Versailles Day Trip'],
    itinerary: [
      { day: 1, title: 'Bonjour Paris', details: 'Airport transfer, Champs-Élysées walk, Arc de Triomphe' },
      { day: 2, title: 'Iconic Landmarks', details: 'Eiffel Tower, Trocadéro, Seine river cruise' },
      { day: 3, title: 'Art & Culture', details: 'Louvre Museum, Notre-Dame area, Latin Quarter' },
      { day: 4, title: 'Versailles', details: 'Full day at Palace of Versailles and gardens' },
      { day: 5, title: 'Montmartre & Shopping', details: 'Sacré-Cœur, artist square, shopping districts' },
      { day: 6, title: 'Au Revoir', details: 'Last minute shopping, airport transfer' },
    ]
  },
  { 
    id: 7,
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', 
    rating: 4.9,
    reviews: 345,
    startingPrice: 135000,
    duration: '8 Days / 7 Nights',
    featured: false,
    description: 'Experience the perfect fusion of ancient traditions and cutting-edge technology. Tokyo offers temples, cherry blossoms, and futuristic attractions.',
    highlights: ['Mount Fuji Day Trip', 'Traditional Tea Ceremony', 'Shibuya & Harajuku', 'Temple Visits'],
    itinerary: [
      { day: 1, title: 'Konnichiwa Tokyo', details: 'Narita airport transfer, Shinjuku exploration' },
      { day: 2, title: 'Traditional Tokyo', details: 'Senso-ji Temple, Asakusa, traditional lunch' },
      { day: 3, title: 'Modern Tokyo', details: 'Shibuya crossing, Harajuku, teamLab exhibition' },
      { day: 4, title: 'Mount Fuji', details: 'Full day trip to Mt. Fuji and Hakone' },
      { day: 5, title: 'Day Trip Kyoto', details: 'Bullet train to Kyoto, temples, Geisha district' },
      { day: 6, title: 'Pop Culture', details: 'Akihabara, anime shops, maid café experience' },
      { day: 7, title: 'Leisure', details: 'Tsukiji Market, shopping, Japanese spa' },
      { day: 8, title: 'Sayonara', details: 'Airport transfer, departure' },
    ]
  },
  { 
    id: 8,
    name: 'Thailand',
    country: 'Thailand',
    region: 'Asia',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', 
    rating: 4.8,
    reviews: 423,
    startingPrice: 55000,
    duration: '6 Days / 5 Nights',
    featured: false,
    description: 'From bustling Bangkok to serene beaches, Thailand offers diverse experiences. Enjoy temples, street food, and tropical paradise.',
    highlights: ['Grand Palace', 'Phi Phi Islands', 'Thai Cooking Class', 'Night Markets'],
    itinerary: [
      { day: 1, title: 'Sawadee Bangkok', details: 'Airport pickup, hotel check-in, Khao San Road' },
      { day: 2, title: 'Bangkok Temples', details: 'Grand Palace, Wat Pho, Wat Arun, river cruise' },
      { day: 3, title: 'Fly to Phuket', details: 'Morning flight, beach time, Patong exploration' },
      { day: 4, title: 'Island Hopping', details: 'Phi Phi Islands tour, snorkeling, Maya Bay' },
      { day: 5, title: 'Beach & Spa', details: 'Leisure day, Thai massage, sunset dinner' },
      { day: 6, title: 'Departure', details: 'Beach breakfast, airport transfer' },
    ]
  },
]

const domesticDestinations = [
  { 
    id: 101,
    name: 'Kerala Backwaters',
    state: 'Kerala',
    region: 'South India',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', 
    rating: 4.9,
    reviews: 892,
    startingPrice: 25000,
    duration: '5 Days / 4 Nights',
    featured: true,
    description: 'Experience God\'s Own Country with serene backwaters, lush tea plantations, and Ayurvedic wellness. Kerala offers a perfect blend of nature and tranquility.',
    highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Ayurvedic Spa', 'Kathakali Dance'],
    itinerary: [
      { day: 1, title: 'Arrive Kochi', details: 'Airport pickup, Fort Kochi walk, Chinese fishing nets' },
      { day: 2, title: 'Munnar Hills', details: 'Drive to Munnar, tea plantations, Eravikulam National Park' },
      { day: 3, title: 'Thekkady Wildlife', details: 'Periyar Tiger Reserve, spice plantation visit' },
      { day: 4, title: 'Alleppey Backwaters', details: 'Houseboat cruise, traditional Kerala meals, sunset views' },
      { day: 5, title: 'Departure', details: 'Breakfast on houseboat, transfer to Kochi airport' },
    ]
  },
  { 
    id: 102,
    name: 'Goa Beaches',
    state: 'Goa',
    region: 'West India',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', 
    rating: 4.7,
    reviews: 1234,
    startingPrice: 18000,
    duration: '4 Days / 3 Nights',
    featured: true,
    description: 'Sun, sand, and vibrant nightlife await in India\'s beach paradise. Explore Portuguese heritage, pristine beaches, and delicious seafood.',
    highlights: ['Beach Hopping', 'Water Sports', 'Old Goa Churches', 'Nightlife & Casinos'],
    itinerary: [
      { day: 1, title: 'Welcome to Goa', details: 'Airport transfer, North Goa beaches, sunset at Anjuna' },
      { day: 2, title: 'Heritage & Culture', details: 'Old Goa churches, Fontainhas Latin Quarter, local cuisine' },
      { day: 3, title: 'Adventure Day', details: 'Water sports at Baga, Dudhsagar falls excursion' },
      { day: 4, title: 'Departure', details: 'Beach breakfast, shopping at flea market, airport transfer' },
    ]
  },
  { 
    id: 103,
    name: 'Rajasthan Royal',
    state: 'Rajasthan',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80', 
    rating: 4.9,
    reviews: 756,
    startingPrice: 35000,
    duration: '7 Days / 6 Nights',
    featured: true,
    description: 'Step into the land of kings with magnificent forts, colorful culture, and desert adventures. Rajasthan offers an unforgettable royal experience.',
    highlights: ['Palace Stays', 'Desert Safari', 'Elephant Ride', 'Cultural Shows'],
    itinerary: [
      { day: 1, title: 'Arrive Jaipur', details: 'Airport pickup, local sightseeing, dinner at palace' },
      { day: 2, title: 'Pink City Exploration', details: 'Amber Fort, City Palace, Hawa Mahal, Jantar Mantar' },
      { day: 3, title: 'Jaipur to Jodhpur', details: 'Drive to Blue City, Mehrangarh Fort, sunset view' },
      { day: 4, title: 'Jodhpur to Jaisalmer', details: 'Golden City arrival, Jaisalmer Fort, Patwon Ki Haveli' },
      { day: 5, title: 'Desert Experience', details: 'Sam Sand Dunes, camel safari, desert camp overnight' },
      { day: 6, title: 'Jaisalmer to Udaipur', details: 'Lake City arrival, boat ride, City Palace' },
      { day: 7, title: 'Departure', details: 'Morning lakeside breakfast, airport transfer' },
    ]
  },
  { 
    id: 104,
    name: 'Ladakh Adventure',
    state: 'Ladakh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', 
    rating: 4.8,
    reviews: 445,
    startingPrice: 45000,
    duration: '7 Days / 6 Nights',
    featured: true,
    description: 'Journey to the roof of the world with stunning high-altitude landscapes, ancient monasteries, and crystal-clear lakes. An adventure seeker\'s paradise.',
    highlights: ['Pangong Lake', 'Nubra Valley', 'Khardung La Pass', 'Ancient Monasteries'],
    itinerary: [
      { day: 1, title: 'Arrive Leh', details: 'Airport pickup, acclimatization day, Leh market walk' },
      { day: 2, title: 'Leh Sightseeing', details: 'Shanti Stupa, Leh Palace, Hall of Fame' },
      { day: 3, title: 'Nubra Valley', details: 'Khardung La pass, Diskit Monastery, sand dunes' },
      { day: 4, title: 'Nubra to Pangong', details: 'Scenic drive, Pangong Lake, camping by the lake' },
      { day: 5, title: 'Pangong to Leh', details: 'Sunrise at lake, return via Chang La pass' },
      { day: 6, title: 'Monastery Tour', details: 'Hemis, Thiksey, Shey monasteries, local cuisine' },
      { day: 7, title: 'Departure', details: 'Morning prayer flags visit, airport transfer' },
    ]
  },
  { 
    id: 105,
    name: 'Andaman Islands',
    state: 'Andaman & Nicobar',
    region: 'Islands',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', 
    rating: 4.8,
    reviews: 567,
    startingPrice: 38000,
    duration: '6 Days / 5 Nights',
    featured: true,
    description: 'Discover pristine beaches, turquoise waters, and rich marine life in India\'s tropical paradise. Perfect for beach lovers and adventure enthusiasts.',
    highlights: ['Scuba Diving', 'Cellular Jail', 'Havelock Island', 'Bioluminescence'],
    itinerary: [
      { day: 1, title: 'Arrive Port Blair', details: 'Airport pickup, Cellular Jail visit, Light & Sound show' },
      { day: 2, title: 'Havelock Island', details: 'Ferry to Havelock, Radhanagar Beach sunset' },
      { day: 3, title: 'Water Activities', details: 'Scuba diving/snorkeling at Elephant Beach' },
      { day: 4, title: 'Neil Island', details: 'Day trip to Neil Island, natural rock formations' },
      { day: 5, title: 'Return Port Blair', details: 'Ferry back, Corbyn\'s Cove Beach, shopping' },
      { day: 6, title: 'Departure', details: 'Ross Island morning trip, airport transfer' },
    ]
  },
  { 
    id: 106,
    name: 'Shimla Manali',
    state: 'Himachal Pradesh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80', 
    rating: 4.6,
    reviews: 1089,
    startingPrice: 22000,
    duration: '6 Days / 5 Nights',
    featured: false,
    description: 'Escape to the Queen of Hills and the valley of Gods. Snow-capped mountains, adventure activities, and colonial charm await.',
    highlights: ['Mall Road', 'Rohtang Pass', 'Solang Valley', 'River Rafting'],
    itinerary: [
      { day: 1, title: 'Arrive Shimla', details: 'Chandigarh pickup, drive to Shimla, Mall Road walk' },
      { day: 2, title: 'Shimla Sightseeing', details: 'Kufri, Jakhu Temple, Christ Church' },
      { day: 3, title: 'Shimla to Manali', details: 'Scenic drive through Kullu Valley' },
      { day: 4, title: 'Manali Exploration', details: 'Hadimba Temple, Old Manali, Vashisht Hot Springs' },
      { day: 5, title: 'Adventure Day', details: 'Solang Valley activities, Rohtang Pass excursion' },
      { day: 6, title: 'Departure', details: 'Morning leisure, drive to Chandigarh, departure' },
    ]
  },
  { 
    id: 107,
    name: 'Varanasi Spiritual',
    state: 'Uttar Pradesh',
    region: 'North India',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80', 
    rating: 4.7,
    reviews: 678,
    startingPrice: 15000,
    duration: '3 Days / 2 Nights',
    featured: false,
    description: 'Experience the spiritual heart of India on the banks of the sacred Ganges. Ancient temples, evening aarti, and profound spirituality await.',
    highlights: ['Ganga Aarti', 'Boat Ride', 'Sarnath Excursion', 'Temple Visits'],
    itinerary: [
      { day: 1, title: 'Arrive Varanasi', details: 'Airport pickup, evening Ganga Aarti at Dashashwamedh Ghat' },
      { day: 2, title: 'Spiritual Journey', details: 'Sunrise boat ride, temple visits, Sarnath excursion' },
      { day: 3, title: 'Departure', details: 'Morning walk through old city lanes, airport transfer' },
    ]
  },
  { 
    id: 108,
    name: 'Darjeeling & Sikkim',
    state: 'West Bengal & Sikkim',
    region: 'East India',
    image: 'https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&q=80', 
    rating: 4.8,
    reviews: 423,
    startingPrice: 32000,
    duration: '7 Days / 6 Nights',
    featured: false,
    description: 'Journey through misty mountains, tea gardens, and Buddhist monasteries. Experience the beauty of the Eastern Himalayas.',
    highlights: ['Tiger Hill Sunrise', 'Toy Train', 'Gangtok Monastery', 'Tea Plantation'],
    itinerary: [
      { day: 1, title: 'Arrive Bagdogra', details: 'Airport pickup, drive to Darjeeling, evening leisure' },
      { day: 2, title: 'Darjeeling Delights', details: 'Tiger Hill sunrise, Batasia Loop, tea garden visit' },
      { day: 3, title: 'Heritage Railway', details: 'Toy train ride, Himalayan Mountaineering Institute' },
      { day: 4, title: 'Darjeeling to Gangtok', details: 'Scenic drive to Sikkim capital, MG Marg walk' },
      { day: 5, title: 'Gangtok Sightseeing', details: 'Rumtek Monastery, Do Drul Chorten, handicraft center' },
      { day: 6, title: 'Tsomgo Lake', details: 'Excursion to Tsomgo Lake and Baba Mandir' },
      { day: 7, title: 'Departure', details: 'Morning leisure, drive to Bagdogra, departure' },
    ]
  },
  { 
    id: 109,
    name: 'Coorg Coffee Trail',
    state: 'Karnataka',
    region: 'South India',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', 
    rating: 4.7,
    reviews: 534,
    startingPrice: 20000,
    duration: '4 Days / 3 Nights',
    featured: false,
    description: 'Discover the Scotland of India with misty hills, coffee plantations, and lush greenery. Perfect for nature lovers and coffee enthusiasts.',
    highlights: ['Coffee Plantation Tour', 'Abbey Falls', 'Dubare Elephant Camp', 'Trekking'],
    itinerary: [
      { day: 1, title: 'Arrive Coorg', details: 'Bangalore/Mysore pickup, drive through scenic Western Ghats' },
      { day: 2, title: 'Plantation Experience', details: 'Coffee estate tour, Abbey Falls, Raja\'s Seat sunset' },
      { day: 3, title: 'Nature & Wildlife', details: 'Dubare Elephant Camp, Nisargadhama, Bylakuppe monastery' },
      { day: 4, title: 'Departure', details: 'Morning trek, shopping for coffee, departure' },
    ]
  },
  { 
    id: 110,
    name: 'Rann of Kutch',
    state: 'Gujarat',
    region: 'West India',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80', 
    rating: 4.6,
    reviews: 345,
    startingPrice: 28000,
    duration: '4 Days / 3 Nights',
    featured: false,
    description: 'Experience the magical white desert under the full moon. Vibrant culture, handicrafts, and the spectacular Rann Utsav festival await.',
    highlights: ['White Rann', 'Kutchi Handicrafts', 'Folk Performances', 'Camel Safari'],
    itinerary: [
      { day: 1, title: 'Arrive Bhuj', details: 'Airport pickup, local sightseeing, Aina Mahal' },
      { day: 2, title: 'Rann Experience', details: 'Drive to White Rann, tent city check-in, sunset at Rann' },
      { day: 3, title: 'Cultural Immersion', details: 'Village visits, handicraft shopping, folk performances' },
      { day: 4, title: 'Departure', details: 'Sunrise at Rann, return to Bhuj, airport transfer' },
    ]
  },
  { 
    id: 111,
    name: 'Ooty & Kodaikanal',
    state: 'Tamil Nadu',
    region: 'South India',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80', 
    rating: 4.7,
    reviews: 678,
    startingPrice: 22000,
    duration: '5 Days / 4 Nights',
    featured: false,
    description: 'Twin hill stations offering cool climate, pristine lakes, and verdant valleys. Perfect honeymoon and family destination.',
    highlights: ['Nilgiri Toy Train', 'Ooty Lake', 'Kodai Lake', 'Pine Forests'],
    itinerary: [
      { day: 1, title: 'Arrive Ooty', details: 'Coimbatore pickup, toy train experience to Ooty' },
      { day: 2, title: 'Ooty Sightseeing', details: 'Botanical Gardens, Ooty Lake, Doddabetta Peak' },
      { day: 3, title: 'Ooty to Kodaikanal', details: 'Scenic drive, evening at Coaker\'s Walk' },
      { day: 4, title: 'Kodaikanal Exploration', details: 'Kodai Lake, Pillar Rocks, Green Valley View' },
      { day: 5, title: 'Departure', details: 'Bryant Park visit, drive to Madurai/Coimbatore' },
    ]
  },
  { 
    id: 112,
    name: 'Northeast Explorer',
    state: 'Meghalaya & Assam',
    region: 'East India',
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80', 
    rating: 4.9,
    reviews: 234,
    startingPrice: 42000,
    duration: '8 Days / 7 Nights',
    featured: true,
    description: 'Explore the unexplored with living root bridges, cleanest village in Asia, and stunning waterfalls. Northeast India is nature at its purest.',
    highlights: ['Living Root Bridges', 'Mawlynnong Village', 'Kaziranga Safari', 'Dawki River'],
    itinerary: [
      { day: 1, title: 'Arrive Guwahati', details: 'Airport pickup, Kamakhya Temple, drive to Shillong' },
      { day: 2, title: 'Shillong Sightseeing', details: 'Ward\'s Lake, Don Bosco Museum, Police Bazaar' },
      { day: 3, title: 'Cherrapunji', details: 'Nohkalikai Falls, Seven Sisters Falls, Mawsmai Caves' },
      { day: 4, title: 'Living Root Bridges', details: 'Trek to Double Decker Root Bridge, village stay' },
      { day: 5, title: 'Dawki & Mawlynnong', details: 'Crystal clear Dawki River, Asia\'s cleanest village' },
      { day: 6, title: 'Kaziranga', details: 'Drive to Kaziranga, evening cultural show' },
      { day: 7, title: 'Wildlife Safari', details: 'Elephant and jeep safari, one-horned rhino spotting' },
      { day: 8, title: 'Departure', details: 'Morning bird watching, drive to Guwahati airport' },
    ]
  },
]

const internationalRegions = ['All', 'Asia', 'Europe', 'Middle East']
const domesticRegions = ['All', 'North India', 'South India', 'West India', 'East India', 'Islands']

export default function Destinations() {
  const [activeTab, setActiveTab] = useState<'international' | 'domestic'>('international')
  const [activeRegion, setActiveRegion] = useState('All')
  const [selectedDestination, setSelectedDestination] = useState<typeof internationalDestinations[0] | typeof domesticDestinations[0] | null>(null)

  // Handle tab switching from navigation
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      const type = event.detail as 'international' | 'domestic'
      setActiveTab(type)
      setActiveRegion('All')
    }
    
    window.addEventListener('setDestinationTab', handleTabChange as EventListener)
    return () => window.removeEventListener('setDestinationTab', handleTabChange as EventListener)
  }, [])

  const currentDestinations = activeTab === 'international' ? internationalDestinations : domesticDestinations
  const currentRegions = activeTab === 'international' ? internationalRegions : domesticRegions
  
  const filteredDestinations = activeRegion === 'All' 
    ? currentDestinations 
    : currentDestinations.filter(d => d.region === activeRegion)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="destinations" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-medium mb-4">
            Popular Destinations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Amazing
            <span className="text-gradient"> Destinations</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover handpicked destinations with curated packages designed to give you 
            the ultimate travel experience at the best prices.
          </p>
        </motion.div>

        {/* International / Domestic Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => { setActiveTab('international'); setActiveRegion('All'); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'international'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Globe className="w-5 h-5" />
            International
          </button>
          <button
            onClick={() => { setActiveTab('domestic'); setActiveRegion('All'); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'domestic'
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Flag className="w-5 h-5" />
            Domestic (India)
          </button>
        </motion.div>

        {/* Region Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {currentRegions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeRegion === region
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {region}
            </button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedDestination(destination)}
                className="group relative cursor-pointer"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary-100 transition-all duration-500 border border-gray-100 h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                    
                    {/* Featured badge */}
                    {destination.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-gray-800 text-sm font-medium">{destination.rating}</span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-primary-500/20">
                      <span className="px-4 py-2 bg-white rounded-full text-primary-600 font-semibold text-sm shadow-lg">
                        View Details & Itinerary
                      </span>
                    </div>

                    {/* Duration on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <div className="flex items-center gap-2 text-white text-sm">
                        <Clock className="w-4 h-4" />
                        {destination.duration}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {destination.name}
                        </h3>
                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                          <MapPin className="w-3 h-3" />
                          {'country' in destination ? destination.country : destination.state}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {destination.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-gray-500 text-xs">Starting from</span>
                        <div className="text-xl font-bold text-primary-600">
                          {formatPrice(destination.startingPrice)}
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-primary-100 hover:bg-primary-500 rounded-xl text-primary-600 hover:text-white transition-all duration-300"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Request Custom Destination
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Destination Detail Popup */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with image */}
              <div className="relative h-72 md:h-96">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full">
                      {'country' in selectedDestination ? 'INTERNATIONAL' : 'DOMESTIC'}
                    </span>
                    <div className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-sm font-medium">{selectedDestination.rating}</span>
                    </div>
                    <span className="text-white/70 text-sm">({selectedDestination.reviews} reviews)</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                    {selectedDestination.name}
                  </h2>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {'country' in selectedDestination ? selectedDestination.country : selectedDestination.state}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedDestination.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[50vh] overflow-y-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left - Description & Highlights */}
                  <div className="md:col-span-2">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedDestination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-3">Highlights</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDestination.highlights.map((highlight, i) => (
                          <span key={i} className="flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                            <Check className="w-3 h-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary */}
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-4">Sample Itinerary</h3>
                      <div className="space-y-3">
                        {selectedDestination.itinerary.map((day, i) => (
                          <div key={i} className="flex gap-4 p-3 bg-gray-50 rounded-xl">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold">D{day.day}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{day.title}</h4>
                              <p className="text-sm text-gray-600">{day.details}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right - Booking Card */}
                  <div className="md:col-span-1">
                    <div className="bg-gray-50 rounded-2xl p-6 sticky top-0">
                      <div className="text-center mb-4">
                        <span className="text-gray-500 text-sm">Starting from</span>
                        <div className="font-display text-3xl font-bold text-primary-600">
                          {formatPrice(selectedDestination.startingPrice)}
                        </div>
                        <span className="text-gray-500 text-sm">per person</span>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Calendar className="w-4 h-4 text-primary-500" />
                          {selectedDestination.duration}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-primary-500" />
                          Min. 2 travelers
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500" />
                          Free cancellation
                        </div>
                      </div>

                      <a
                        href="#contact"
                        onClick={() => setSelectedDestination(null)}
                        className="block w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl text-center hover:from-primary-500 hover:to-primary-400 transition-all shadow-lg shadow-primary-500/30"
                      >
                        Book Now
                      </a>
                      
                      <button
                        onClick={() => setSelectedDestination(null)}
                        className="block w-full py-3 mt-3 border border-gray-300 text-gray-700 font-medium rounded-xl text-center hover:bg-gray-100 transition-all"
                      >
                        Request Custom Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
