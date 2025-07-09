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
      {/* Skip to main content link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#374F37] text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="container mx-auto px-4 py-6" role="banner">
        <div className="flex items-center justify-between">
          <Image
            src="/images/br-01.png"
            alt="Bridgr - Brand Partnership Platform"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <Badge
            variant="outline"
            className="bg-[#374F37]/20 text-green-300 border-[#374F37] font-semibold"
            role="status"
            aria-label="Platform status: Coming Soon"
          >
            Coming Soon
          </Badge>
        </div>
      </header>

      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-12" aria-labelledby="hero-heading">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge
                className="mb-6 bg-[#374F37]/20 text-green-300 hover:bg-[#374F37]/30 px-4 py-2 border border-[#374F37] font-semibold"
                role="status"
                aria-label="Launch status: Launching Soon"
              >
                🚀 Launching Soon
              </Badge>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              >
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
                <form
                  onSubmit={handleWaitlistSubmit}
                  className="space-y-4"
                  aria-labelledby="waitlist-form-heading"
                  noValidate
                >
                  <div className="sr-only">
                    <h2 id="waitlist-form-heading">Join Waitlist Form</h2>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label htmlFor="email-input" className="sr-only">
                      Email address for waitlist signup
                    </label>
                    <Input
                      id="email-input"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-11 sm:h-12 text-base sm:text-lg bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#374F37] focus:bg-gray-800 shadow-md"
                      required
                      aria-required="true"
                      aria-describedby="email-description"
                      aria-invalid={email && !email.includes("@") ? "true" : "false"}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#374F37] hover:bg-[#374F37]/90 h-11 sm:h-12 px-6 sm:px-8 text-white font-semibold shadow-md text-sm sm:text-base"
                      disabled={isLoading}
                      aria-describedby="submit-button-description"
                    >
                      <span className="sr-only">
                        {isLoading ? "Submitting your email to join the waitlist" : "Submit email to join waitlist"}
                      </span>
                      <span aria-hidden="true">{isLoading ? "Joining..." : "Join Waitlist"}</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Button>
                  </div>
                  <p id="email-description" className="text-sm text-gray-400">
                    Be the first to know when we launch. No spam, ever.
                  </p>
                  <div id="submit-button-description" className="sr-only">
                    Click to submit your email and join the Bridgr waitlist
                  </div>
                </form>
              ) : (
                <Card
                  className="border-green-700 bg-green-900/30 shadow-md"
                  role="alert"
                  aria-live="polite"
                  aria-labelledby="success-heading"
                >
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
                    <h3 id="success-heading" className="text-xl font-semibold text-green-300 mb-2">
                      You're on the list!
                    </h3>
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
        <section className="container mx-auto px-4 py-4" aria-labelledby="features-heading">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
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
                  role="article"
                  aria-labelledby={`feature-${index}-title`}
                >
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#374F37]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      aria-hidden="true"
                    >
                      <Icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3
                      id={`feature-${index}-title`}
                      className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Enhanced Preview Section with Key Actions */}
        <section className="container mx-auto px-4 py-16" aria-labelledby="preview-heading">
          <div className="text-center mb-12">
            <h2 id="preview-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Sneak Peek
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 px-4 sm:px-0">
              Here's what you can expect from Bridgr
            </p>
          </div>

          {/* Key Actions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
            {[
              {
                emoji: "📝",
                title: "Customize your proposal",
                desc: "Add your details, demographic information, and more to your event",
              },
              {
                emoji: "📤",
                title: "Send to brands",
                desc: "Share why your event is a good fit to each individual brand",
              },
              {
                emoji: "💬",
                title: "Manage conversations",
                desc: "Manage multiple partnerships with brands that are interested",
              },
            ].map((action, index) => (
              <Card
                key={index}
                className="border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all shadow-lg hover:shadow-xl"
                role="article"
                aria-labelledby={`action-${index}-title`}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-3xl mb-4" aria-hidden="true">
                    {action.emoji}
                  </div>
                  <h3
                    id={`action-${index}-title`}
                    className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3"
                  >
                    {action.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{action.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="bg-gradient-to-r from-[#374F37] to-green-700 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-lg"
              role="region"
              aria-labelledby="audience-heading"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <h3 id="audience-heading" className="text-xl md:text-2xl font-bold mb-4">
                    For Brands
                  </h3>
                  <ul className="space-y-3" role="list">
                    <li className="flex items-center gap-3" role="listitem">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base">Find perfect influencer matches</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base">Manage campaigns effortlessly</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base">Track ROI in real-time</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">For Creators</h3>
                  <ul className="space-y-3" role="list">
                    <li className="flex items-center gap-3" role="listitem">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base">Connect with quality brands</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base">Streamlined collaboration tools</span>
                    </li>
                    <li className="flex items-center gap-3" role="listitem">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-200 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm md:text-base">Secure and timely payments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16" aria-labelledby="final-cta-heading">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="final-cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Bridge the Gap?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
              Join our waitlist and be among the first to experience the future of brand partnerships.
            </p>

            {!isSubmitted && (
              <form
                onSubmit={handleWaitlistSubmit}
                className="max-w-md mx-auto"
                aria-labelledby="final-form-heading"
                noValidate
              >
                <div className="sr-only">
                  <h3 id="final-form-heading">Final Waitlist Signup</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label htmlFor="final-email-input" className="sr-only">
                    Email address for final waitlist signup
                  </label>
                  <Input
                    id="final-email-input"
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-11 sm:h-12 text-base sm:text-lg bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 focus:border-[#374F37] focus:bg-gray-800 shadow-md"
                    required
                    aria-required="true"
                    aria-describedby="final-email-description"
                    aria-invalid={email && !email.includes("@") ? "true" : "false"}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#374F37] hover:bg-[#374F37]/90 h-11 sm:h-12 px-6 sm:px-8 text-white font-semibold shadow-md text-sm sm:text-base"
                    disabled={isLoading}
                  >
                    <span className="sr-only">
                      {isLoading ? "Submitting your email for early access" : "Submit email for early access"}
                    </span>
                    <span aria-hidden="true">{isLoading ? "Joining..." : "Get Early Access"}</span>
                  </Button>
                </div>
                <div id="final-email-description" className="sr-only">
                  Enter your email to get early access to Bridgr platform
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Image
              src="/images/br-01.png"
              alt="Bridgr - Brand Partnership Platform"
              width={120}
              height={40}
              className="h-8 w-auto mb-4 md:mb-0"
            />
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
