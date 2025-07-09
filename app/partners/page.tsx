import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Star, MapPin, CheckCircle, ArrowUpRight } from "lucide-react"

export default function PartnersPage() {
  const howItWorksSteps = [
    {
      icon: "📝",
      title: "Customize your proposal",
      description: "Add your details, demographic information, and more to your event",
    },
    {
      icon: "📤",
      title: "Send to brands",
      description: "Share why your event is a good fit to each individual brand",
    },
    {
      icon: "💬",
      title: "Manage conversations",
      description: "Manage multiple partnerships with brands that are interested.",
    },
  ]

  const userTypes = [
    "Event Managers",
    "Streamers",
    "Influencers",
    "Wedding Planners",
    "Fitness Trainer",
    "Musicians",
    "Community",
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Partnering for
                  <br />
                  Community
                  <br />
                  <span className="text-gray-400">made easy</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-md">The largest network of brands, all in one place.</p>
              </div>

              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                Partner with brands today
              </Button>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="People celebrating with drinks"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />

                {/* Notification Overlay */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Pending Proposal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">lemon</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Lemon Perfect</p>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-green-600 font-medium">Perfect</span>
                        <span className="text-gray-400">Match</span>
                        <span className="text-gray-400">$</span>
                        <div className="w-4 h-4 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {howItWorksSteps.map((step, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6">
                <CardContent className="p-0">
                  <div className="text-2xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coachella Demo Image */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 mb-16">
            <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Coachella event interface demo"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Conversation Demo Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Its never been easier</h2>
            <h2 className="text-4xl font-bold text-white">to engage with brands</h2>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-medium">Proposal Accepted</span>
              <Button variant="link" className="text-green-400 p-0">
                Event Details
              </Button>
            </div>

            <div className="space-y-4">
              <div className="text-gray-300">
                <p>Hi! I would love to get sponsored and collaborate!</p>
              </div>

              <div className="bg-[#374F37] rounded-2xl p-4 max-w-md ml-auto">
                <p className="text-white">
                  Hi Jordan, we love your profile and event. Shall we do split in money and product samples?
                </p>
              </div>

              <div className="text-gray-300">
                <p>Awesome, yeah lets do both.</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 bg-[#374F37] rounded flex items-center justify-center text-white font-bold text-xs">
                  V
                </div>
                <span>$*** wired to Jordan 💸</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs">
                  Q
                </div>
                <span>QA103324124</span>
                <Button variant="link" className="text-green-400 p-0 text-sm">
                  Track Order
                </Button>
              </div>

              <div className="bg-[#374F37] rounded-2xl p-4 max-w-md ml-auto">
                <p className="text-white">Perfect, money and 4 box samples are on the way.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-4xl font-bold text-white">Are you Bridgr?</h3>
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white p-4">
                <ArrowUpRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>

        {/* A Better Way to Partner Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-white mb-16">A better way to partner</h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Make your profile standout */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Make your profile standout</h3>
              <p className="text-gray-400 mb-8">Show your experience, skills and offer in one place.</p>

              <Card className="bg-gray-800 border-gray-700 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-pink-300 rounded-xl flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Patricia"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">Patricia</h4>
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>Miami</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <Badge className="bg-green-600 text-white">Professional</Badge>
                    <Badge className="bg-purple-600 text-white">High quality events</Badge>
                    <Badge className="bg-orange-600 text-white">+100 events hosted</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-white font-bold">4.93</span>
                      </div>
                      <p className="text-gray-400 text-sm">Rating</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-white font-bold">2</span>
                      </div>
                      <p className="text-gray-400 text-sm">Active events</p>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">12</p>
                      <p className="text-gray-400 text-sm">Events managed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* For seasoned event managers */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">For seasoned event</h3>
              <h3 className="text-2xl font-bold text-white mb-4">managers to dreamers</h3>
              <p className="text-gray-400 mb-8">Our platform helps you shine in front of the brands.</p>

              <div className="grid grid-cols-2 gap-4">
                {userTypes.map((type, index) => (
                  <div key={index} className="text-gray-300 py-2">
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Manage application section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">Manage application</h3>
            <p className="text-gray-400 mb-8">
              Automate responses and offer, so you can focus on the most important task, building relationships.
            </p>

            {/* Application Demo Modal */}
            <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto">
              <div className="mb-6">
                <h4 className="text-gray-900 font-semibold mb-4">What are you looking for in a sponsorship?</h4>

                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Coachella"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900">Coachella</h5>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      <span>San Antonio</span>
                    </div>
                    <div className="text-sm text-gray-600">Gaming & Entertainment</div>
                    <div className="text-sm text-gray-600">Local Community</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                      AGT
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>AGT</div>
                      <div>100% Match</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Choose the type of sponsorship that you are asking from the brand
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <Button variant="outline" className="flex items-center gap-2 p-4 h-auto bg-transparent">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Package</span>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 p-4 h-auto bg-transparent">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Money</span>
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 p-4 h-auto bg-transparent">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span>Both</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 mb-2">Have you tried AGT?</p>
                  <input
                    type="text"
                    placeholder="Have you tried AGT?"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Its never been easier</h2>
            <h2 className="text-4xl font-bold text-white">to engage with brands</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
