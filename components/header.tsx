"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const navItems = [
    { label: "Personal Insurance", href: "/personal" },
    { label: "Commercial Insurance", href: "/commercial" },
    { label: "Life & Retirement", href: "/life" },
    { label: "Auto Registration", href: "/auto" },
    { label: "Contact", href: "/contact" },
  ]

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
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <MessageSquare className="w-4 h-4 mr-2" />
              Chat Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}