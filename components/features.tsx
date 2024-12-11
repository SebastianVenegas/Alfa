"use client"

import { motion } from "framer-motion"
import { Shield, Truck, Home, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Coverage",
      description: "Protect all aspects of your life with our wide range of insurance options."
    },
    {
      icon: Truck,
      title: "Commercial Solutions",
      description: "Tailored insurance plans to keep your business running smoothly."
    },
    {
      icon: Home,
      title: "Property Protection",
      description: "Safeguard your home and belongings with our robust property insurance."
    },
    {
      icon: Users,
      title: "Family First",
      description: "Ensure your loved ones' future with our life and retirement plans."
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
          Why Choose Alfa Insurance
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mb-4 rounded-full bg-blue-100 p-3 text-blue-600"
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

