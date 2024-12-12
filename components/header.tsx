"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Alfa Insurance Solutions"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-blue-600 transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            Chat Now
          </Button>
        </div>
      </div>
    </header>
  )
}