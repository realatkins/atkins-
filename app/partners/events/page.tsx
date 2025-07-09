import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Summer Wellness Festival",
      date: "July 15, 2024",
      location: "Los Angeles, CA",
      attendees: 5000,
      status: "Active",
      brands: ["Lemme", "Bloom", "Magna"],
    },
    {
      id: 2,
      title: "Tech Innovation Summit",
      date: "August 22, 2024",
      location: "San Francisco, CA",
      attendees: 3000,
      status: "Pending",
      brands: ["F3 Energy", "ALLDAY"],
    },
    {
      id: 3,
      title: "Food & Beverage Expo",
      date: "September 10, 2024",
      location: "New York, NY",
      attendees: 8000,
      status: "Completed",
      brands: ["Saint James", "Gruns"],
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Events</h1>
          <p className="text-gray-400">Manage your event partnerships and collaborations</p>
        </div>

        <div className="grid gap-6">
          {events.map((event) => (
            <Card key={event.id} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white text-xl mb-2">{event.title}</CardTitle>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees.toLocaleString()} attendees
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      event.status === "Active" ? "default" : event.status === "Pending" ? "secondary" : "outline"
                    }
                    className={
                      event.status === "Active"
                        ? "bg-green-600"
                        : event.status === "Pending"
                          ? "bg-yellow-600"
                          : "bg-gray-600"
                    }
                  >
                    {event.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Partner Brands:</p>
                    <div className="flex gap-2">
                      {event.brands.map((brand) => (
                        <Badge key={brand} variant="outline" className="text-gray-300 border-gray-600">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="bg-[#374F37] hover:bg-[#374F37]/80">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
