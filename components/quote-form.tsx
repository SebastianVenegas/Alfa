"use client"

import { Car, Truck, Home, Shield } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function QuoteForm() {
  return (
    <section id="quote" className="relative py-24 overflow-hidden">
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Get a Free Quote
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <Car className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-700">Auto Insurance</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <Truck className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-700">Commercial Trucks</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <Home className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-700">Property Insurance</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center gap-2 p-4 h-auto hover:bg-blue-50 hover:border-blue-500 transition-colors"
          >
            <Shield className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-700">Life Insurance</span>
          </Button>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input 
              type="text" 
              placeholder="First Name" 
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <Input 
              type="text" 
              placeholder="Last Name"
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <Input 
            type="email" 
            placeholder="Email Address"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          
          <Input 
            type="tel" 
            placeholder="Phone Number"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          
          <Input 
            type="text" 
            placeholder="ZIP Code"
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />

          <Button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-base font-medium"
          >
            Get My Free Quote
          </Button>
        </form>
      </div>
    </section>
  )
}