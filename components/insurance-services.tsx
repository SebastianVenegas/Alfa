"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Car, Truck, Home, Shield, ChevronDown } from 'lucide-react'
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"

export function InsuranceServices() {
  const { isDark } = useTheme()
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const services = [
    {
      icon: Car,
      title: "Auto Insurance",
      tagline: "Drive with confidence",
      description: "Comprehensive coverage for every mile.",
      benefits: [
        "24/7 Roadside Assistance",
        "Collision Coverage",
        "Personal Injury Protection",
        "Comprehensive Coverage Options"
      ],
      bgColor: "bg-gradient-to-br from-sky-400 to-blue-600"
    },
    {
      icon: Truck,
      title: "Commercial Trucks",
      tagline: "Keep your fleet moving",
      description: "Specialized protection for your business on wheels.",
      benefits: [
        "Fleet Maintenance Assistance",
        "Liability Coverage",
        "Cargo Protection",
        "Driver Accident Insurance"
      ],
      bgColor: "bg-gradient-to-br from-indigo-400 to-purple-600"
    },
    {
      icon: Home,
      title: "Property Insurance",
      tagline: "Secure your sanctuary",
      description: "Protect your most valuable assets.",
      benefits: [
        "Fire and Theft Protection",
        "Flood Damage Coverage",
        "Valuable Item Insurance",
        "Temporary Housing Assistance"
      ],
      bgColor: "bg-gradient-to-br from-emerald-400 to-green-600"
    },
    {
      icon: Shield,
      title: "Life Insurance",
      tagline: "Ensure their future",
      description: "Financial security for your loved ones.",
      benefits: [
        "Customizable Plans",
        "Guaranteed Payouts",
        "Long-Term Investment Options",
        "Critical Illness Coverage"
      ],
      bgColor: "bg-gradient-to-br from-rose-400 to-red-600"
    }
  ]

  return (
    <section className={cn(
      "py-20 relative overflow-hidden",
      isDark ? "bg-gray-900" : "bg-gray-50"
    )}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600",
          )}>
            Tailored Insurance Solutions
          </h2>
          <p className={cn(
            "text-xl md:text-2xl",
            isDark ? "text-gray-400" : "text-gray-600"
          )}>
            Discover comprehensive coverage options designed to protect what matters most to you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedCard === index
            return (
              <motion.div
                key={service.title}
                layout
                className={cn(
                  "group relative rounded-3xl overflow-hidden p-6",
                  "shadow-lg transition-all duration-300",
                  service.bgColor
                )}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <service.icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-lg font-medium text-white/90">{service.tagline}</p>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-6 h-6 text-white transition-transform",
                      isExpanded ? "rotate-180" : ""
                    )}
                  />
                </div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-white/90"
                    >
                      <p>{service.description}</p>
                      <ul className="mt-4 space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-white rounded-full mt-1 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}