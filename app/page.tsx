"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Car, Truck, HomeIcon, Shield, CheckCircle } from "lucide-react";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ClientReviewsSection } from "@/components/client-reviews-section";
import { HeroSection } from "@/components/hero";

export default function Page() {
  const { width, height } = useWindowSize();
  const [isQuoteSent, setIsQuoteSent] = useState(false);

  // Add scroll handler utility
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = 80; // Adjust this value based on your header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element?.getBoundingClientRect().top ?? 0;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    // Handle hash changes for direct links
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.replace('#', '');
        setTimeout(() => scrollToSection(sectionId), 100);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [scrollToSection]);

  return (
    <div className={cn("min-h-screen relative", "bg-white")}>
      {isQuoteSent && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <ReactConfetti
            width={width}
            height={document.documentElement.scrollHeight}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
          />
        </div>
      )}
      <div className="relative">
        {/* Background Gradient */}
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            "bg-gradient-to-br from-gray-50 via-white to-gray-50"
          )}
        />

        <div className="relative z-10">
          {/* Hero Section with Quote Form */}
          <section id="quote-section" className="scroll-mt-20">
            <HeroSection />
          </section>

          {/* Other sections */}
          <section id="services-section" className="relative z-10 scroll-mt-20">
            <ServicesSection />
          </section>

          <section id="about-section" className="scroll-mt-20">
            <AboutSection />
          </section>

          <section id="reviews-section" className="scroll-mt-20">
            <ClientReviewsSection />
          </section>

          <div id="footer-section" className="relative z-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}