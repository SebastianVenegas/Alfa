"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"

export function CTASection() {
  const { isDark } = useTheme()

  return (
    <section className={cn(
      "py-24 relative overflow-hidden",
      isDark ? "bg-gray-900" : "bg-gray-100"
    )}>
      {/* Gradient Background */}
      <div className={cn(
        "absolute inset-0",
        isDark 
          ? "bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20" 
          : "bg-gradient-to-br from-blue-50/90 via-white to-purple-50/90"
      )} />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      {/* Decorative Elements */}
      <div className={cn(
        "absolute top-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob",
        isDark ? "bg-blue-900" : "bg-blue-100"
      )} />
      <div className={cn(
        "absolute bottom-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000",
        isDark ? "bg-purple-900" : "bg-purple-100"
      )} />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-6",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Ready to Get Started?
          </h2>
          <p className={cn(
            "text-xl mb-12",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Contact us today for more information about our insurance solutions. 
            We're here to protect what matters most to you.
          </p>
          <motion.button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
            className={cn(
              "group inline-flex items-center justify-center",
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
          >
            <span>Get Your Free Quote</span>
            <motion.div
              className="ml-2"
              initial={{ y: 0 }}
              animate={{ y: -3 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "easeInOut"
              }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

