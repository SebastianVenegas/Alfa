"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, MessageCircle } from 'lucide-react'
import Image from "next/image"
import { cn } from "@/lib/utils"
import { openTawkToChat } from '@/components/tawk-to-widget'

const navLinks = [
  { href: "#quote", label: "Contact" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#reviews", label: "Customer Reviews" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed z-50 w-full transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link 
          href="/" 
          className="flex flex-col items-start relative group"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <Image
              src="/logo.png"
              alt="Alfa Insurance Solutions"
              width={200}
              height={45}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className={cn(
              "text-[10px] mt-0.5 font-medium",
              isScrolled ? "text-gray-400" : "text-gray-600"
            )}>
              Your Trusted Insurance Partner
            </span>
          </motion.div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative px-3 py-2 text-sm font-medium transition-colors",
                isScrolled 
                  ? "text-gray-600 hover:text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
              )}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ 
                  behavior: "smooth" 
                })
              }}
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-blue-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={openTawkToChat}
              className="bg-blue-600 text-white shadow-lg transition-all duration-300 group hover:bg-blue-700"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Chat Now
            </Button>
          </motion.div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
            >
              <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] p-6"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <SheetTitle className="text-lg font-semibold mb-4 text-gray-900">
                Menu
              </SheetTitle>
              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ 
                        behavior: "smooth" 
                      })
                      setIsOpen(false)
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button
                    size="lg"
                    onClick={openTawkToChat}
                    className="w-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat Now
                  </Button>
                </div>
              </nav>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
