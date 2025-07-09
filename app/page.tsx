"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Zap, Shield, ArrowRight } from "lucide-react"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  const features = [
    {
      icon: Users,
      title: "Connect Brands & Influencers",
      description: "Bridge the gap between brands and content creators with our intelligent matching system",
    },
    {
      icon: Zap,
      title: "Streamlined Partnerships",
      description: "Simplify collaboration workflows from discovery to payment with our all-in-one platform",
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Built-in protection and clear communication tools ensure successful partnerships every time",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Image src="/images/br-01.png" alt="Bridgr" width={120} height={40} className="h-8 w-auto" />
          <Badge variant="outline" className="bg-[#374F37]/20 text-green-300 border-[#374F37] font-semibold">
            Coming Soon
          </Badge>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-6 bg-[#374F37]/20 text-green-300 hover:bg-[#374F37]/30 px-4 py-2 border border-[#374F37] font-semibold">
                🚀 Launching Soon
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                The Future of
                <br />
                <span className="text-white font-bold">Brand Partnerships</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                Bridgr connects brands with the perfect influencers and content creators. Join thousands waiting for the
                most intuitive partnership platform ever built.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-sm sm:max-w-md mx-auto mb-2 px-4 sm:px-0">
              {!isSubmitted ? (
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-11 sm:h-12 text-base sm:text-lg bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#374F37] focus:bg-gray-800 shadow-md"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#374F37] hover:bg-[#374F37]/90 h-11 sm:h-12 px-6 sm:px-8 text-white font-semibold shadow-md text-sm sm:text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? "Joining..." : "Join Waitlist"}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-400">Be the first to know when we launch. No spam, ever.</p>
                </form>
              ) : (
                <Card className="border-green-700 bg-green-900/30 shadow-md">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-300 mb-2">You're on the list!</h3>
                    <p className="text-green-200">
                      Thanks for joining our waitlist. We'll notify you as soon as Bridgr is ready.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Why Bridgr Will Change Everything
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
              We're building the most powerful and intuitive platform for brand partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all shadow-lg hover:shadow-xl"
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#374F37]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Enhanced Preview Section with Key Actions */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Get a Sneak Peek</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4 sm:px-0">
              Here's what you can expect from Bridgr
            </p>
          </div>

          {/* Key Actions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
            <Card className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Customize your proposal</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Add your details, demographic information, and more to your event
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl mb-4">📤</div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Send to brands</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Share why your event is a good fit to each individual brand
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all shadow-lg hover:shadow-xl">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Manage conversations</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manage multiple partnerships with brands that are interested
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#374F37] to-green-700 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">For Brands</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" />
                      <span className="text-sm md:text-base">Find perfect influencer matches</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" />
                      <span className="text-sm md:text-base">Manage campaigns effortlessly</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" />
                      <span className="text-sm md:text-base">Track ROI in real-time</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">For Creators</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" />
                      <span className="text-sm md:text-base">Connect with quality brands</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" />
                      <span className="text-sm md:text-base">Streamlined collaboration tools</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" />
                      <span className="text-sm md:text-base">Secure and timely payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
              Join our waitlist and be among the first to experience the future of brand partnerships.
            </p>

            {!isSubmitted && (
              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-11 sm:h-12 text-base sm:text-lg bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#374F37] focus:bg-gray-800 shadow-md"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#374F37] hover:bg-[#374F37]/90 h-11 sm:h-12 px-6 sm:px-8 text-white font-semibold shadow-md text-sm sm:text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? "Joining..." : "Get Early Access"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Image src="/images/br-01.png" alt="Bridgr" width={120} height={40} className="h-8 w-auto mb-4 md:mb-0" />
            <div className="text-gray-300 text-center md:text-right">
              <p>Building the future of brand partnerships.</p>
              <p className="text-sm mt-1 text-gray-400">© 2024 Bridgr. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
