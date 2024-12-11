"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export function Services() {
  const services = [
    {
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicles including cars, motorcycles, and classic cars.",
      icon: "🚗"
    },
    {
      title: "Commercial Insurance",
      description: "Protect your business with tailored insurance solutions for commercial vehicles and operations.",
      icon: "🚛"
    },
    {
      title: "Property Insurance",
      description: "Secure your home, condo, or apartment with our comprehensive property coverage.",
      icon: "🏠"
    },
    {
      title: "Life Insurance",
      description: "Plan for your family's future with our life insurance and retirement planning options.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Workers Compensation",
      description: "Ensure your employees are protected with comprehensive workers compensation coverage.",
      icon: "👷"
    },
    {
      title: "Auto Registration",
      description: "Quick and convenient auto registration services with no waiting time.",
      icon: "📝"
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
    <section className="bg-gray-50 py-24">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl"
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mb-4 text-4xl"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Learn More
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link></CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

