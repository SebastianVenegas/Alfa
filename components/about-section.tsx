"use client"

import { motion } from "framer-motion"
import { Clock, Users, Star } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const isDark = false // TODO: Replace with proper theme implementation
  
  const stats = [
    {
      icon: Clock,
      value: "20+",
      label: "Years of Experience",
      subtext: "Since 2003"
    },
    {
      icon: Users,
      value: "10K+",
      label: "Happy Clients",
      subtext: "Trust our coverage"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating",
      subtext: "Verified reviews"
    }
  ]

  return (
    <div id="about" className="py-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="container px-4 mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(
                "inline-block px-4 py-1.5 rounded-full text-sm font-medium",
                isDark 
                  ? "bg-blue-900/50 text-blue-400" 
                  : "bg-blue-100 text-blue-600"
              )}
            >
              About Us
            </motion.div>
            
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold",
              isDark ? "text-white" : "text-gray-900"
            )}>
              About Alfa Insurance Solutions
            </h2>
            
            <div className="space-y-4">
              <p className={cn(
                "text-base md:text-lg leading-relaxed",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                For over two decades, we've been your trusted insurance partner, delivering 
                top-tier coverage to protect what matters most.
              </p>
              <p className={cn(
                "text-base md:text-lg leading-relaxed",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                Our personalized approach ensures you get the exact protection you need.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-4 md:p-6 rounded-xl text-center group cursor-pointer backdrop-blur-sm",
                    isDark 
                      ? "bg-gray-800/50 hover:bg-gray-800/70" 
                      : "bg-white/80 hover:bg-white"
                  )}
                >
                  <div className="mb-4 relative">
                    <div className={cn(
                      "absolute inset-0 rounded-full transform group-hover:scale-110 transition-transform duration-300",
                      isDark ? "bg-blue-900/50" : "bg-blue-50"
                    )} />
                    <div className="relative flex justify-center py-3">
                      <stat.icon className={cn(
                        "w-5 h-5 md:w-6 md:h-6",
                        isDark ? "text-blue-400" : "text-blue-600"
                      )} />
                    </div>
                  </div>
                  <div className={cn(
                    "text-2xl md:text-3xl font-bold mb-1",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {stat.value}
                  </div>
                  <div className={cn(
                    "text-sm font-medium mb-1",
                    isDark ? "text-gray-300" : "text-gray-900"
                  )}>
                    {stat.label}
                  </div>
                  <div className={cn(
                    "text-xs",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}>
                    {stat.subtext}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => {
                // You can add any additional click handling here
              }}
              className={cn(
                "inline-flex items-center justify-center",
                "px-8 py-3 rounded-full",
                "bg-blue-600 text-white font-medium",
                "transition-all duration-300",
                "hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25",
                "active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                isDark && "hover:shadow-blue-500/10"
              )}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <span>Learn More About Us</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: 3 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1
                }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row gap-4 md:gap-6 mt-8 lg:mt-0"
          >
            <div className="w-full md:w-3/5 h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/meeting-celebration.jpg"
                alt="Insurance professionals celebrating success"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <div className="w-full md:w-2/5 h-[200px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/person-laptop.jpg"
                alt="Person working on laptop"
                width={400}
                height={500}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
