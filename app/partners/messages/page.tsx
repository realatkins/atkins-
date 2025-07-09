import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send } from "lucide-react"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      brand: "Lemme",
      lastMessage: "Thanks for your interest in our wellness campaign!",
      time: "2 hours ago",
      unread: 2,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      brand: "F3 Energy",
      lastMessage: "We'd love to discuss the partnership details with you.",
      time: "1 day ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      brand: "Magna",
      lastMessage: "Your proposal looks great! Let's schedule a call.",
      time: "3 days ago",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Messages</h1>
          <p className="text-gray-400">Communicate with brands and manage your partnerships</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-10 bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className="flex items-center gap-3 p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0"
                    >
                      <Avatar>
                        <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{conversation.brand[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-white font-medium truncate">{conversation.brand}</h3>
                          <span className="text-xs text-gray-400">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-400 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-[#374F37] text-white text-xs">{conversation.unread}</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800 border-gray-700 h-full flex flex-col">
              <CardHeader className="border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-white">Lemme</CardTitle>
                    <p className="text-sm text-gray-400">Online</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                      <p className="text-white text-sm">
                        Hi! We saw your profile and think you'd be a great fit for our wellness campaign.
                      </p>
                      <span className="text-xs text-gray-400 mt-1 block">10:30 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-[#374F37] rounded-lg p-3 max-w-xs">
                      <p className="text-white text-sm">
                        Thank you for reaching out! I'd love to learn more about the campaign.
                      </p>
                      <span className="text-xs text-green-100 mt-1 block">10:32 AM</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-gray-700 rounded-lg p-3 max-w-xs">
                      <p className="text-white text-sm">
                        Great! We're looking for influencers to promote our new supplement line. The campaign runs for 2
                        weeks with a $500 compensation plus products.
                      </p>
                      <span className="text-xs text-gray-400 mt-1 block">10:35 AM</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <div className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." className="flex-1 bg-gray-700 border-gray-600 text-white" />
                  <Button className="bg-[#374F37] hover:bg-[#374F37]/80">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
