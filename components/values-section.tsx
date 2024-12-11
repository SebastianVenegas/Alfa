"use client"

import { motion } from "framer-motion"
import { Shield, Users, Diamond } from 'lucide-react'
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"

export function ValuesSection() {
  const { isDark } = useTheme()
  
  const values = [
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailoring solutions to meet your unique needs"
    },
    {
      icon: Diamond,
      title: "Excellence",
      description: "Delivering outstanding service and comprehensive coverage"
    }
  ]

  return (
    <section className={cn(
      "py-24 relative overflow-hidden",
      isDark ? "bg-gray-900/50" : "bg-gray-50"
    )}>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="container px-4 mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-full mb-4",
                isDark 
                  ? "bg-blue-900/50 text-blue-400" 
                  : "bg-blue-100 text-blue-600"
              )}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className={cn(
                "text-xl font-semibold mb-2",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {value.title}
              </h3>
              <p className={cn(
                "text-base",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

