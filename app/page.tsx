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

export default function Page() {
  const { width, height } = useWindowSize();
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(
    null
  );
  const [isQuoteSent, setIsQuoteSent] = useState(false);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedInsurance) {
        alert("Please select an insurance type.");
        return;
      }
      setIsQuoteSent(true);
    },
    [selectedInsurance]
  );

  const handleReset = useCallback(() => {
    setSelectedInsurance(null);
    setIsQuoteSent(false);
  }, []);

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
          <div className="container mx-auto px-4 pt-32 pb-20">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Column */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 mb-8"
                >
                  <span className="text-sm font-medium text-blue-600">
                    Trusted by 10,000+ clients
                  </span>
                  <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                >
                  <span className="text-gray-900">Insurance Solutions</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                    That Work for You
                  </span>
                </motion.h1>
              </div>

              {/* Quote Section */}
              <div
                id="quote"
                className="flex-1 w-full max-w-lg relative z-20 pointer-events-auto"
              >
                <Card className="p-8 rounded-3xl shadow-xl border border-gray-200 bg-white">
                  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
                    Get a Free Quote
                  </h2>
                  {isQuoteSent ? (
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                      <h3 className="text-xl font-bold text-gray-800">
                        Quote Sent!
                      </h3>
                      <p className="text-sm text-gray-600 mb-6">
                        Thank you! We'll contact you shortly.
                      </p>
                      <Button
                        onClick={handleReset}
                        className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Request Another Quote
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Insurance Options */}
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`p-4 rounded-lg border cursor-pointer transition ${
                            selectedInsurance === "Auto Insurance"
                              ? "bg-blue-100 border-blue-500"
                              : "border-gray-200 hover:border-blue-400"
                          }`}
                          onClick={() => setSelectedInsurance("Auto Insurance")}
                        >
                          <Car
                            className={`h-8 w-8 mx-auto ${
                              selectedInsurance === "Auto Insurance"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }`}
                          />
                          <p className="mt-2 text-center text-sm font-medium text-gray-800">
                            Auto Insurance
                          </p>
                        </div>
                        <div
                          className={`p-4 rounded-lg border cursor-pointer transition ${
                            selectedInsurance === "Commercial Trucks"
                              ? "bg-blue-100 border-blue-500"
                              : "border-gray-200 hover:border-blue-400"
                          }`}
                          onClick={() =>
                            setSelectedInsurance("Commercial Trucks")
                          }
                        >
                          <Truck
                            className={`h-8 w-8 mx-auto ${
                              selectedInsurance === "Commercial Trucks"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }`}
                          />
                          <p className="mt-2 text-center text-sm font-medium text-gray-800">
                            Commercial Trucks
                          </p>
                        </div>
                        <div
                          className={`p-4 rounded-lg border cursor-pointer transition ${
                            selectedInsurance === "Property Insurance"
                              ? "bg-blue-100 border-blue-500"
                              : "border-gray-200 hover:border-blue-400"
                          }`}
                          onClick={() =>
                            setSelectedInsurance("Property Insurance")
                          }
                        >
                          <HomeIcon
                            className={`h-8 w-8 mx-auto ${
                              selectedInsurance === "Property Insurance"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }`}
                          />
                          <p className="mt-2 text-center text-sm font-medium text-gray-800">
                            Property Insurance
                          </p>
                        </div>
                        <div
                          className={`p-4 rounded-lg border cursor-pointer transition ${
                            selectedInsurance === "Life Insurance"
                              ? "bg-blue-100 border-blue-500"
                              : "border-gray-200 hover:border-blue-400"
                          }`}
                          onClick={() =>
                            setSelectedInsurance("Life Insurance")
                          }
                        >
                          <Shield
                            className={`h-8 w-8 mx-auto ${
                              selectedInsurance === "Life Insurance"
                                ? "text-blue-500"
                                : "text-gray-400"
                            }`}
                          />
                          <p className="mt-2 text-center text-sm font-medium text-gray-800">
                            Life Insurance
                          </p>
                        </div>
                      </div>

                      {/* Form Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="First Name"
                          required
                          className="border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-100"
                        />
                        <Input
                          placeholder="Last Name"
                          required
                          className="border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-100"
                        />
                      </div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-100"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-100"
                      />
                      <Input
                        placeholder="ZIP Code"
                        required
                        className="border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-100"
                      />

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Get My Free Quote
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>

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