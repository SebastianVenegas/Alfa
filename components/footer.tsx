import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const locations = [
    {
      address: "639 W. Channel St. Suite F",
      city: "San Pedro",
      state: "CA",
      zip: "90731",
      phone: "(310) 256-4748",
      email: "customerservice@arisins.com",
      mapsUrl: "https://maps.google.com/?q=639+W+Channel+St+Suite+F+San+Pedro+CA+90731"
    },
    {
      address: "1240 S Soto St",
      city: "Los Angeles", 
      state: "CA",
      zip: "90023",
      phone: "(323) 881-0510",
      email: "customerservice@arisins.com",
      mapsUrl: "https://maps.google.com/?q=1240+S+Soto+St+Los+Angeles+CA+90023"
    },
    {
      address: "5150 E Pacific Coast Hwy",
      city: "Long Beach",
      state: "CA", 
      zip: "90804",
      phone: "(562) 494-4700",
      email: "customerservice@arisins.com",
      mapsUrl: "https://maps.google.com/?q=5150+E+Pacific+Coast+Hwy+Long+Beach+CA+90804"
    }
  ]

  const footerSections = [
    {
      title: "Insurance",
      links: [
        { label: "Auto Insurance", href: "/auto" },
        { label: "Home Insurance", href: "/home" },
        { label: "Life Insurance", href: "/life" },
        { label: "Business Insurance", href: "/business" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Insurance Guide", href: "/guide" },
        { label: "FAQs", href: "/faqs" },
        { label: "Claims", href: "/claims" },
        { label: "Support", href: "/support" }
      ]
    }
  ]

  const scrollToQuote = () => {
    const element = document.getElementById('quote-section')
    if (element) {
      const offset = 80 // header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-2">
          Contact us today for more information about our insurance solutions.
        </p>
        <p className="text-gray-600 mb-8">
          We're here to protect what matters most to you.
        </p>
        <Button 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          onClick={scrollToQuote}
        >
          Get Your Free Quote ↑
        </Button>
      </div>

      {/* Links Section */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index}>
                <Button
                  variant="outline"
                  onClick={() => window.open(location.mapsUrl, '_blank')}
                  className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-gray-50 group mb-3"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{location.address}</p>
                      <p className="text-gray-600">{location.city}, {location.state} {location.zip}</p>
                    </div>
                  </div>
                </Button>
                
                <div className="flex flex-col gap-2 px-4">
                  <a 
                    href={`tel:${location.phone}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    <Phone className="w-4 h-4" />
                    {location.phone}
                  </a>
                  <a 
                    href={`mailto:${location.email}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="w-4 h-4" />
                    {location.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Alfa Insurance Solutions"
                width={120}
                height={30}
                className="h-6 w-auto"
              />
              <span className="text-sm text-gray-500">
                © 2024 Alfa Insurance Solutions. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 hover:text-gray-900">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}