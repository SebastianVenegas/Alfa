"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Car, Truck, Home, Shield, Mail, Phone, MapPin, Star } from 'lucide-react'
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ReactConfetti from 'react-confetti'

export function HeroSection() {
  const { isDark } = useTheme()
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    { icon: Car, label: "Auto Insurance" },
    { icon: Truck, label: "Commercial Trucks" },
    { icon: Home, label: "Property Insurance" },
    { icon: Shield, label: "Life Insurance" },
  ]

  const formFields = [
    { icon: Mail, placeholder: "Email Address", type: "email" },
    { icon: Phone, placeholder: "Phone Number", type: "tel" },
    { icon: MapPin, placeholder: "ZIP Code", type: "text" },
  ]

  return (
    <section className={cn(
      "relative min-h-screen flex items-center py-20",
      isDark ? "bg-gray-900" : "bg-white"
    )}>
      {/* Add Confetti component */}
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl" 
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
                Trusted by 10,000+ clients
              </span>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className={isDark ? "text-white" : "text-gray-900"}>
                  Insurance Solutions
                </span>
                <br />
                <span className="text-blue-500 font-extrabold">
                  That Work for You
                </span>
              </h1>
              
              <p className={cn(
                "text-xl mb-8",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                Get comprehensive coverage for your vehicles, property, and business
                with personalized service and support.
              </p>
            </motion.div>

            <div className="flex items-center gap-6 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Quote →
              </Button>
              
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 rating</span>
                <span className="text-gray-500">from our clients</span>
              </div>
            </div>

            <blockquote className={cn(
              "text-lg italic",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              "Alfa Insurance made finding the right coverage a breeze. Highly recommended!"
              <footer className="mt-2 font-medium">- Sarah J., Satisfied Customer</footer>
            </blockquote>
          </div>

          {/* Right column - Form */}
          <div className={cn(
            "rounded-3xl p-8 shadow-2xl backdrop-blur-sm",
            "border border-gray-100/20",
            "transform transition-all duration-500 hover:shadow-xl",
            isDark 
              ? "bg-gray-800/50 hover:bg-gray-800/80" 
              : "bg-white/80 hover:bg-white"
          )}>
            <h2 className={cn(
              "text-3xl font-bold mb-8",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Get a Free Quote
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service) => (
                <Button
                  key={service.label}
                  variant={selectedService === service.label ? "default" : "outline"}
                  className={cn(
                    "h-auto py-4 px-3 flex flex-col items-center gap-2",
                    "transition-all duration-300 hover:scale-105",
                    selectedService === service.label
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : isDark
                        ? "hover:border-blue-500"
                        : "hover:border-blue-600"
                  )}
                  onClick={() => setSelectedService(service.label)}
                >
                  <service.icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{service.label}</span>
                </Button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className={cn(
                    "bg-transparent h-12 rounded-xl",
                    "border-gray-200 focus:border-blue-500",
                    isDark && "border-gray-700"
                  )} 
                />
                <Input 
                  placeholder="Last Name" 
                  className={cn(
                    "bg-transparent h-12 rounded-xl",
                    "border-gray-200 focus:border-blue-500",
                    isDark && "border-gray-700"
                  )} 
                />
              </div>
              
              {formFields.map((field) => (
                <div key={field.placeholder} className="relative">
                  <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={field.type}
                    placeholder={field.placeholder}
                    className={cn(
                      "pl-12 bg-transparent h-12 rounded-xl",
                      "border-gray-200 focus:border-blue-500",
                      isDark && "border-gray-700"
                    )}
                  />
                </div>
              ))}

              <Button 
                className={cn(
                  "w-full h-12 text-lg font-medium rounded-xl",
                  "bg-blue-600 hover:bg-blue-700",
                  "transform transition-all duration-300 hover:scale-[1.02]",
                  "shadow-lg hover:shadow-blue-500/25"
                )}
              >
                Get My Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 