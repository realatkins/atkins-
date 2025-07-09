import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Target, Star } from "lucide-react"

export default function BrandsPage() {
  const features = [
    {
      icon: Users,
      title: "Access Top Influencers",
      description: "Connect with verified influencers across all major platforms and niches",
    },
    {
      icon: TrendingUp,
      title: "Track Performance",
      description: "Monitor campaign performance with detailed analytics and reporting",
    },
    {
      icon: Target,
      title: "Targeted Campaigns",
      description: "Reach your ideal audience with precision targeting and matching",
    },
    {
      icon: Star,
      title: "Quality Partnerships",
      description: "Work with pre-vetted influencers who align with your brand values",
    },
  ]

  const stats = [
    { number: "10K+", label: "Active Influencers" },
    { number: "500+", label: "Brand Partners" },
    { number: "1M+", label: "Successful Campaigns" },
    { number: "95%", label: "Satisfaction Rate" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-800 hover:bg-purple-100">For Brands & Businesses</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find the Perfect
              <br />
              <span className="text-[#374F37]">Influencer Partners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with thousands of verified influencers and content creators. Launch campaigns that drive real
              results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#374F37] hover:bg-[#374F37]/80 px-8 py-4 text-lg">
                Start Your Campaign
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                Browse Influencers
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-[#374F37] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Brands Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to run successful influencer marketing campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="text-center border-0 shadow-lg">
                    <CardHeader>
                      <div className="w-16 h-16 bg-[#374F37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-[#374F37]" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works for Brands</h2>
              <p className="text-xl text-gray-600">Launch your influencer campaign in just a few simple steps</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Create Your Campaign</h3>
                <p className="text-gray-600">
                  Define your campaign goals, target audience, and budget. Our platform will help you create the perfect
                  brief.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Find Perfect Matches</h3>
                <p className="text-gray-600">
                  Browse through thousands of influencers or let our AI recommend the best matches for your brand and
                  campaign.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Track & Measure</h3>
                <p className="text-gray-600">
                  Monitor campaign performance in real-time with detailed analytics and comprehensive reporting tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#374F37]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale Your Brand?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of brands already using our platform to connect with the perfect influencers for their
              campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#374F37] hover:bg-gray-100 px-8 py-4 text-lg">
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#374F37] px-8 py-4 text-lg bg-transparent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
