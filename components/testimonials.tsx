"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Business Owner",
      content: "Alfa Insurance has been a game-changer for my business. Their commercial insurance solutions are top-notch!",
      rating: 5
    },
    {
      name: "Jane Smith",
      role: "Homeowner",
      content: "I've never felt more secure about my property. Alfa's customer service is exceptional.",
      rating: 5
    },
    {
      name: "Mike Johnson",
      role: "Car Enthusiast",
      content: "As a classic car owner, finding the right insurance was crucial. Alfa understood my needs perfectly.",
      rating: 4
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="bg-white py-24">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl"
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <p className="mb-4 text-gray-600">{testimonial.content}</p>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

