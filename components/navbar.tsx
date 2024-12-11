"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Close mobile menu first
      setIsOpen(false)
      
      // Wait a tiny bit for any animations to complete
      setTimeout(() => {
        const headerHeight = 80 // Adjust this to match your header height
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }, 10)
    }
  }

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize()
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image 
              src="/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScroll('services')}
              className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Services
            </button>
            <button
              onClick={() => handleScroll('about')}
              className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              About Us
            </button>
            <button
              onClick={() => handleScroll('reviews')}
              className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Reviews
            </button>
            <button
              onClick={() => handleScroll('quote')}
              className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Contact
            </button>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={openChat}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Chat Now</span>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white absolute w-full left-0 shadow-lg"
            >
              <div className="flex flex-col py-4 px-4">
                <button
                  onClick={() => handleScroll('services')}
                  className="w-full text-left py-3 text-gray-600 hover:text-gray-900"
                >
                  Services
                </button>
                <button
                  onClick={() => handleScroll('about')}
                  className="w-full text-left py-3 text-gray-600 hover:text-gray-900"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleScroll('reviews')}
                  className="w-full text-left py-3 text-gray-600 hover:text-gray-900"
                >
                  Reviews
                </button>
                <button
                  onClick={() => handleScroll('quote')}
                  className="w-full text-left py-3 text-gray-600 hover:text-gray-900"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
