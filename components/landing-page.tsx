'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-[#0A0B2E] text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">🏔 Tourize</div>
        <nav>
          <ul className="flex space-x-6">
            <li>about</li>
            <li>journey</li>
            <li>gallery</li>
            <li>contact</li>
            <li>join</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4B3F72] to-[#0A0B2E]">
          {/* Replace with actual SVG illustration */}
          <div className="w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl font-bold mb-4">Mountain Rocky Path</h1>
          <p className="text-xl mb-8">Journey through the dream</p>
          <Button className="bg-white text-[#0A0B2E] hover:bg-gray-200">discover</Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="w-2 h-2 bg-white rounded-full opacity-50" />
          <span className="w-2 h-2 bg-white rounded-full opacity-50" />
        </div>
      </section>

      {/* Where Are We From Section */}
      <section className="py-20 px-10">
        <div className="flex items-center max-w-6xl mx-auto">
          <div className="w-1/2 pr-10">
            <h2 className="text-4xl font-bold mb-4">Where Are We From</h2>
            <p className="mb-6">The Bellagio, a Las Vegas landmark, is a five-star hotel located on the 122-acre site of the legendary Dunes Hotel and Golf Course at the corner of Flamingo and Las Vegas Blvd.</p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#0A0B2E]">
              read more →
            </Button>
          </div>
          <div className="w-1/2 relative">
            <Card className="w-full h-80 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">▶</span>
            </div>
          </div>
        </div>
      </section>

      {/* Your Fabulous Journey Section */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Your Fabulous Journey</h2>
        <p className="text-center max-w-2xl mx-auto mb-20">
          Mandalay Bay is a tropical theme park resort offering visitors the chance to walk inside a predators' lair through the Shark Reef Aquarium, which holds sharks and rays.
        </p>
        <div className="max-w-4xl mx-auto bg-[#1C1D49] rounded-lg p-10">
          <h3 className="text-2xl font-bold mb-6">Canyon Between The Woodlands</h3>
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-4xl font-bold">186 km</p>
              <p className="text-sm">Distance</p>
            </div>
            <div>
              <p className="text-4xl font-bold">3,417 m</p>
              <p className="text-sm">Elevation</p>
            </div>
            <div>
              <p className="text-4xl font-bold">20 days</p>
              <p className="text-sm">Duration</p>
            </div>
            <div>
              <p className="text-4xl font-bold">8</p>
              <p className="text-sm">Difficulty level</p>
            </div>
          </div>
          {/* Replace with actual SVG map */}
          <div className="w-full h-80 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center mb-6" />
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <span className="w-2 h-2 bg-white rounded-full" />
              <span className="w-2 h-2 bg-white rounded-full opacity-50" />
              <span className="w-2 h-2 bg-white rounded-full opacity-50" />
              <span className="w-2 h-2 bg-white rounded-full opacity-50" />
              <span className="w-2 h-2 bg-white rounded-full opacity-50" />
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-pink-500 rounded-full" />
                <span>Conference Point</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full" />
                <span>Mountain Peak</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full" />
                <span>Camping</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Wild animals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-10">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold">Photo From The Previous Trip</h2>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#0A0B2E]">
            view more →
          </Button>
        </div>
        <div className="flex space-x-6">
          <Card className="w-1/2 h-96 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center" />
          <Card className="w-1/2 h-96 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center relative">
            <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded">
              02/07/2023
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-2xl font-bold">Silent River,</h3>
              <p>White Fur Trees Canyon</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Become a Participant In The Next Trip</h2>
        <p className="max-w-2xl mx-auto mb-10">
          For travelers searching for top of the line accommodations, try the Four Seasons Las Vegas. It offers an oasis of tranquil.
        </p>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">join us</Button>
      </section>

      {/* Footer */}
      <footer className="py-10 px-10 flex justify-between items-center">
        <div className="text-2xl font-bold">🏔 Tourize</div>
        <div className="flex space-x-4">
          <span>fb</span>
          <span>in</span>
          <span>tw</span>
        </div>
      </footer>
    </div>
  )
}