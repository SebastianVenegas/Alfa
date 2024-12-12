"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "Excellent service! They helped me find the perfect auto insurance policy at a great rate.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    review: "Very professional and knowledgeable team. Made the whole process smooth and easy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    review: "Outstanding customer service. They took the time to understand my needs and found the best coverage.",
    rating: 5,
  }
]

export function ClientReviewsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.review}</p>
              <p className="font-medium text-gray-900">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}