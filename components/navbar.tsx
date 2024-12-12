"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    Tawk_API?: {
      toggle?: () => void;
      maximize?: () => void;
    };
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  const openChat = () => {
    if (window.Tawk_API?.maximize) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <header 
      className={cn(
        "fixed z-50 w-full transition-all duration-500",
        isScrolled 
          ? "bg-white shadow-md"
          : "bg-white"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex flex-col items-start relative group"
        >
          <Image
            src="/logo.png"
            alt="Alfa Insurance Solutions"
            width={200}
            height={45}
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          <button 
            onClick={() => scrollToSection('services-section')}
            className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about-section')}
            className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('reviews-section')}
            className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('contact-section')}
            className="text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        <button 
          onClick={openChat}
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Chat Now
        </button>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('services-section')}
              className="text-gray-700 text-sm font-medium py-2 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-gray-700 text-sm font-medium py-2 hover:text-blue-600 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('reviews-section')}
              className="text-gray-700 text-sm font-medium py-2 hover:text-blue-600 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact-section')}
              className="text-gray-700 text-sm font-medium py-2 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={openChat}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Chat Now
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
