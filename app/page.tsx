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

  useEffect(() => {
    // Put any browser-only code here
  }, []);

  return (
    <div className={cn("min-h-screen relative", "bg-white")}>
      {isQuoteSent && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
        />
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
          {/* Hero Section */}
          <HeroSection />

          {/* Services Section */}
          <div id="services-section" className="relative z-10">
            <ServicesSection />
          </div>

          {/* About Section */}
          <div id="about-section">
            <AboutSection />
          </div>

          {/* Reviews Section */}
          <div id="reviews-section">
            <ClientReviewsSection />
          </div>

          {/* Footer Section */}
          <div id="footer-section" className="relative z-20">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}