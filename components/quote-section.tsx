"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

export function QuoteSection() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const slideIn = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  }

  return (
    <section id="quote-section" className="bg-gradient-to-br from-blue-900 to-indigo-900 py-24 text-white">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Get Your Free Quote
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl"
        >
          <div className="bg-blue-600 p-6">
            <div className="flex justify-between">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`step-${i}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step >= i ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step > i ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <span className="text-lg font-semibold">{i}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeInUp}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Personal Information</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                        <Input id="firstName" placeholder="John" className="border-gray-300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="border-gray-300" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="border-gray-300" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" className="border-gray-300" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button onClick={nextStep} className="w-full bg-blue-600 hover:bg-blue-700">
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Insurance Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="insuranceType" className="text-gray-700">Insurance Type</Label>
                      <Select>
                        <SelectTrigger id="insuranceType" className="border-gray-300">
                          <SelectValue placeholder="Select insurance type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto Insurance</SelectItem>
                          <SelectItem value="home">Home Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="business">Business Insurance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coverageAmount" className="text-gray-700">Desired Coverage Amount</Label>
                      <Input id="coverageAmount" type="number" placeholder="50000" className="border-gray-300" />
                    </div>
                    <div className="flex justify-between">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button onClick={prevStep} variant="outline" className="border-blue-600 text-blue-600">
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                          Next
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="comments" className="text-gray-700">Any additional comments or questions?</Label>
                      <textarea
                        id="comments"
                        className="h-32 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter any additional information here..."
                      />
                    </div>
                    <div className="flex justify-between">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button onClick={prevStep} variant="outline" className="border-blue-600 text-blue-600">
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                          Submit Quote Request
                          <Check className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

