"use client"

import { motion, useAnimation, PanInfo } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"

export function TestimonialsSection() {
  const { isDark } = useTheme()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimation()
  
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [isPaused])

  const testimonials = [
    {
      content: "I've been with Alfa for years, and they've always gone above and beyond. Their team is knowledgeable, friendly, and truly cares about their clients.",
      author: "Maria Rodriguez",
      role: "Small Business Owner",
      image: "/testimonials/maria.jpg",
      rating: 5
    },
    {
      content: "The best insurance experience I've ever had. They made everything simple and straightforward, with exceptional support throughout.",
      author: "James Chen",
      role: "Homeowner",
      image: "/testimonials/james.jpg",
      rating: 5
    },
    {
      content: "Exceptional service and support. They're always there when you need them most, providing peace of mind for my family.",
      author: "Sarah Thompson",
      role: "Family Insurance",
      image: "/testimonials/sarah.jpg",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Handle manual swipe
  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50
    if (Math.abs(info.offset.x) > swipeThreshold) {
      if (info.offset.x > 0) {
        prevTestimonial()
      } else {
        nextTestimonial()
      }
    } else {
      // Reset position if swipe wasn't strong enough
      controls.start({ x: 0 })
    }
  }

  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      <div className={cn(
        "absolute top-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-25",
        isDark ? "bg-blue-900" : "bg-blue-100"
      )} />
      
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4",
              isDark ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-600"
            )}
          >
            Real Stories, Real Trust
          </motion.div>
          
          <h2 className={cn(
            "text-4xl font-bold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}>
            What Our Clients Say
          </h2>

          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
              <div className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                Satisfied Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                Customer Rating
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            key={activeIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            animate={controls}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "p-8 rounded-2xl backdrop-blur-sm cursor-grab active:cursor-grabbing",
              isDark ? "bg-gray-800/50" : "bg-white/80"
            )}
          >
            <Quote className={cn(
              "w-12 h-12 mb-6",
              isDark ? "text-blue-400" : "text-blue-600"
            )} />
            
            <p className={cn(
              "text-xl md:text-2xl leading-relaxed mb-8",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              {testimonials[activeIndex].content}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className={cn(
                  "font-semibold mb-1",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {testimonials[activeIndex].author}
                </div>
                <div className={cn(
                  "text-sm",
                  isDark ? "text-gray-400" : "text-gray-600"
                )}>
                  {testimonials[activeIndex].role}
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-full h-1 bg-gray-200 mt-8 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 8, // Slowed down to 8 seconds
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }}
              style={{ 
                originX: 0,
                scaleX: isPaused ? 0 : 1
              }}
              className="h-full bg-blue-600"
            />
          </div>

          {/* Touch indicator (visible on touch devices) */}
          <div className="mt-4 text-center text-sm text-gray-500 md:hidden">
            Swipe left or right to navigate
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className={cn(
                "rounded-full",
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              )}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === activeIndex
                      ? "bg-blue-600 w-6"
                      : isDark
                        ? "bg-gray-700"
                        : "bg-gray-300"
                  )}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className={cn(
                "rounded-full",
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              )}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

