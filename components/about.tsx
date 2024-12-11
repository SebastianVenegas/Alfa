"use client"

import { Clock, Users, Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-100 rounded-full px-4 py-2 text-sm font-medium text-blue-600 mb-6">
              About Us
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              About Alfa Insurance Solutions
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              For over two decades, we've been your trusted insurance partner, delivering top-tier
              coverage to protect what matters most.
            </p>
            
            <p className="text-gray-600 text-lg mb-12">
              Our personalized approach ensures you get the exact protection you need.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-1">20+</h3>
                <p className="text-gray-600 text-sm">Years of Experience</p>
                <span className="text-gray-500 text-xs">Since 2003</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-1">10K+</h3>
                <p className="text-gray-600 text-sm">Happy Clients</p>
                <span className="text-gray-500 text-xs">Trust our coverage</span>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold mb-1">4.9/5</h3>
                <p className="text-gray-600 text-sm">Client Rating</p>
                <span className="text-gray-500 text-xs">Verified reviews</span>
              </div>
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Us
            </Button>
          </div>

          {/* Right images */}
          <div className="lg:w-1/2 relative">
            <div className="w-[80%] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/insurance-meeting.jpg"
                alt="Insurance professionals in a team meeting discussing client solutions"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            <div className="absolute top-[20%] right-0 w-[40%] rounded-3xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/person-laptop.jpg"
                alt="Person working on a laptop"
                width={300}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 