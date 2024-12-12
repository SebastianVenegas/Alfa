"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from 'canvas-confetti'
import Image from "next/image"
import { Car, Truck, Home, Shield } from 'lucide-react'

export function HeroSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    insuranceType: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Your form submission logic here
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })

      // Show success state
      setIsSubmitted(true)

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '',
        insuranceType: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section className="relative min-h-[600px] md:min-h-[900px] pt-8 md:pt-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero.png"
          alt="Professional Business Setting"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-16 items-center">
          {/* Left column - Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8 md:space-y-14"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-4 rounded-full bg-white">
                <span className="text-amber-400 text-lg md:text-2xl">⭐</span>
                <span className="text-[#1E293B] text-base md:text-xl font-medium">
                  Trusted by 10,000+ Happy Clients
                </span>
              </div>
              
              {/* Main Heading with Subheading */}
              <div className="space-y-6">
                <h1 className="text-[42px] md:text-[85px] leading-[1.1] font-bold tracking-tight">
                  <span className="text-white">Protection for</span>
                  <br />
                  <span className="text-[#4169E1]">Life's Journey</span>
                </h1>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 inline-block shadow-lg">
                  <p className="text-xl md:text-2xl text-[#1E293B] font-medium max-w-2xl">
                    Comprehensive coverage for your home, auto, life, and business. All in one place.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Form with Success State */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full mx-auto"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Get a Free Quote
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Car, label: "Auto Insurance" },
                        { icon: Truck, label: "Commercial Trucks" },
                        { icon: Home, label: "Property Insurance" },
                        { icon: Shield, label: "Life Insurance" },
                      ].map((service) => (
                        <button
                          key={service.label}
                          type="button"
                          onClick={() => setSelectedInsurance(service.label)}
                          className={`p-4 rounded-lg border-2 transition-all hover:scale-105 flex flex-col items-center gap-2
                            ${selectedInsurance === service.label 
                              ? 'border-blue-600 bg-blue-50 text-blue-600' 
                              : 'border-gray-200 hover:border-blue-200'}`}
                        >
                          <service.icon className="w-6 h-6" />
                          <span className="text-sm">{service.label}</span>
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    />

                    <button 
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get My Free Quote
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full mx-auto text-center"
                >
                  <div className="mb-4">
                    <svg
                      className="w-16 h-16 mx-auto text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote Sent Successfully!</h2>
                  <p className="text-gray-600 mb-6">
                    We'll get back to you with your personalized quote shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Submit another quote
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}