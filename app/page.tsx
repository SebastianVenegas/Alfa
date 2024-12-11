"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Car, Truck, HomeIcon, Shield, Star, ArrowRight, CheckCircle } from 'lucide-react'
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ValuesSection } from "@/components/values-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { useTheme } from "@/contexts/ThemeContext"

export default function Home() {
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null)
  const [isQuoteSent, setIsQuoteSent] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const { isDark } = useTheme()

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission delay
    setTimeout(() => {
      setIsQuoteSent(true)
      setShowConfetti(true)
    }, 500)
  }, [])
1
  const resetForm = useCallback(() => {
    setIsQuoteSent(false)
    setSelectedInsurance(null)
  }, [])

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  const insuranceTypes = [
    { icon: Car, label: "Auto Insurance" },
    { icon: Truck, label: "Commercial Trucks" },
    { icon: HomeIcon, label: "Property Insurance" },
    { icon: Shield, label: "Life Insurance" }
  ]

  return (
    <div className={cn("min-h-screen", isDark ? "bg-gray-900" : "bg-white")}>
      {showConfetti && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
          initialVelocityY={20}
          colors={['#FFD700', '#FF6B6B', '#4CAF50', '#2196F3']}
        />
      )}
      <div className="relative">
        {/* Enhanced Background */}
        <div className={cn(
          "absolute inset-0",
          isDark 
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
        )} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative">
          <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Column - Hero Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 mb-8"
                >
                  <span className="text-sm font-medium text-blue-600">
                    Trusted by 10,000+ clients
                  </span>
                  <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                  <span className={isDark ? "text-white" : "text-gray-900"}>
                    Insurance Solutions
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    That Work for You
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={cn(
                    "text-xl mb-8 max-w-2xl mx-auto lg:mx-0",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  Get comprehensive coverage for your vehicles, property, and business with
                  personalized service and support.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Start Your Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className={cn(
                    "flex items-center gap-4 px-6 py-3 rounded-full",
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  )}>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < 4 
                              ? "text-yellow-500 fill-yellow-500" 
                              : "text-gray-300 fill-gray-300"
                          )}
                        />
                      ))}
                    </div>
                    <div>
                      <div className={cn(
                        "font-semibold",
                        isDark ? "text-white" : "text-gray-900"
                      )}>
                        4.9/5 rating
                      </div>
                      <div className={cn(
                        "text-sm",
                        isDark ? "text-gray-400" : "text-gray-600"
                      )}>
                        from our clients
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={cn(
                    "mt-8 text-lg italic",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  "Alfa Insurance made finding the right coverage a breeze. Highly recommended!"
                  <footer className="mt-2 font-medium">
                    - Sarah J., Satisfied Customer
                  </footer>
                </motion.blockquote>
              </div>

              {/* Right Column - Quote Form */}
              <div className="flex-1 w-full max-w-md">
                <Card className={cn(
                  "p-6 rounded-2xl shadow-xl backdrop-blur-sm",
                  isDark ? "bg-gray-800/80" : "bg-white/80"
                )}>
                  <h2 className={cn(
                    "text-2xl font-bold mb-6 text-center",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    Get a Free Quote
                  </h2>
                  <AnimatePresence mode="wait">
                    {isQuoteSent ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                      >
                        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                        <h3 className={cn(
                          "text-xl font-semibold mb-2",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          Quote Sent!
                        </h3>
                        <p className={cn(
                          "text-sm mb-6",
                          isDark ? "text-gray-300" : "text-gray-600"
                        )}>
                          Thank you for your interest. We'll get back to you shortly with your personalized quote.
                        </p>
                        <Button
                          onClick={resetForm}
                          className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Submit Another Quote
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {insuranceTypes.map((type) => (
                            <button
                              key={type.label}
                              type="button"
                              onClick={() => setSelectedInsurance(type.label)}
                              className={cn(
                                "p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2",
                                selectedInsurance === type.label
                                  ? "border-blue-600 bg-blue-50"
                                  : isDark 
                                    ? "border-gray-700 hover:border-blue-500 bg-gray-800"
                                    : "border-gray-200 hover:border-blue-200 bg-white"
                              )}
                            >
                              <type.icon className={cn(
                                "h-6 w-6",
                                selectedInsurance === type.label
                                  ? "text-blue-500"
                                  : isDark ? "text-gray-400" : "text-gray-500"
                              )} />
                              <span className={cn(
                                "text-sm font-medium",
                                selectedInsurance === type.label
                                  ? "text-blue-600"
                                  : isDark ? "text-gray-300" : "text-gray-600"
                              )}>
                                {type.label}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <Input
                            placeholder="First Name"
                            className={cn(
                              "rounded-lg",
                              isDark 
                                ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                                : "bg-white border-gray-200 focus:border-blue-600"
                            )}
                            required
                          />
                          <Input
                            placeholder="Last Name"
                            className={cn(
                              "rounded-lg",
                              isDark 
                                ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                                : "bg-white border-gray-200 focus:border-blue-600"
                            )}
                            required
                          />
                        </div>

                        <Input
                          type="email"
                          placeholder="Email Address"
                          className={cn(
                            "rounded-lg",
                            isDark 
                              ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                              : "bg-white border-gray-200 focus:border-blue-600"
                          )}
                          required
                        />

                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          className={cn(
                            "rounded-lg",
                            isDark 
                              ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                              : "bg-white border-gray-200 focus:border-blue-600"
                          )}
                          required
                        />

                        <Input
                          placeholder="ZIP Code"
                          className={cn(
                            "rounded-lg",
                            isDark 
                              ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                              : "bg-white border-gray-200 focus:border-blue-600"
                          )}
                          required
                        />

                        <Button
                          type="submit"
                          className="w-full h-12 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Get My Free Quote
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </Card>
              </div>
            </div>
          </div>

          <ServicesSection />
          <AboutSection />
          <ValuesSection />
          <TestimonialsSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </div>
  )
}
