"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = [
  { id: "vehicle", label: "Vehicle Insurance" },
  { id: "property", label: "Property Insurance" },
  { id: "business", label: "Business Insurance" },
  { id: "personal", label: "Personal Insurance" }
]

const services = {
  vehicle: [
    { 
      title: "Automobile Insurance",
      description: "Protects against damages or losses from collisions, theft, fire, and other perils.",
      image: "/Car.png"
    },
    { 
      title: "Motorcycle Insurance",
      description: "Coverage options for scooters, mopeds, or superbikes.",
      image: "/Moto.png"
    },
    { 
      title: "Boat Insurance",
      description: "Covers personal or commercial boats/yachts against collision, fire, theft.",
      image: "/Boat.png"
    },
    { 
      title: "RV Insurance",
      description: "Specialized motorhome insurance to protect while traveling on the road.",
      image: "/RV.png"
    },
    { 
      title: "Classic Car Insurance",
      description: "Tailored coverage for classic or vintage cars.",
      image: "/Classic.png"
    },
    { 
      title: "Commercial Auto",
      description: "Protects commercial vehicles from collision damage, theft, and liability claims.",
      image: "/Semi.png"
    }
  ],
  property: [
    {
      title: "Homeowners Insurance",
      description: "Protects your home and its contents from fire, flood, earthquakes, and other disasters.",
      image: "/Home.png"
    }
  ],
  business: [
    {
      title: "Business Insurance",
      description: "Coverage for property damage or loss and legal liability claims.",
      image: "/Business.png"
    },
    {
      title: "Workers' Compensation",
      description: "Provides protection for workplace injuries or accidents.",
      image: "/Workers.png"
    }
  ],
  personal: [
    {
      title: "Life Insurance",
      description: "Life insurance and retirement planning options to secure your family's future.",
      image: "/Life.png"
    },
    {
      title: "Auto Registration",
      description: "Assistance with vehicle registrations, instant renewals, and title transfers.",
      image: "/Registration.png"
    }
  ]
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("vehicle")

  const scrollToQuote = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Explore our insurance products
        </h2>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-12">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={cn(
                  "pb-4 text-sm font-medium relative",
                  activeTab === category.id
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900",
                  activeTab === category.id && "before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-blue-600"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services[activeTab as keyof typeof services].map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/3] mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-center mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-center mb-4 text-gray-600">
                {service.description}
              </p>
              <button 
                onClick={scrollToQuote}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md py-2 px-4 transition-all duration-200 hover:scale-105"
              >
                Get Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}