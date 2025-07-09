"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Mail, Send, Download, Search, MoreHorizontal, Eye, TrendingUp, UserPlus, BarChart3 } from "lucide-react"
import Image from "next/image"

// Mock data
const mockSubscribers = [
  { id: 1, email: "john@example.com", type: "waitlist", joinedAt: "2024-01-15", status: "active" },
  { id: 2, email: "sarah@company.com", type: "newsletter", joinedAt: "2024-01-14", status: "active" },
  { id: 3, email: "mike@startup.io", type: "both", joinedAt: "2024-01-13", status: "active" },
  { id: 4, email: "lisa@agency.com", type: "newsletter", joinedAt: "2024-01-12", status: "unsubscribed" },
  { id: 5, email: "alex@brand.com", type: "waitlist", joinedAt: "2024-01-11", status: "active" },
]

const mockCampaigns = [
  {
    id: 1,
    subject: "Welcome to Bridgr Updates",
    type: "newsletter",
    status: "sent",
    sentAt: "2024-01-10",
    recipients: 245,
    openRate: "68%",
    clickRate: "12%",
  },
  {
    id: 2,
    subject: "Development Progress - Week 3",
    type: "newsletter",
    status: "sent",
    sentAt: "2024-01-03",
    recipients: 198,
    openRate: "72%",
    clickRate: "15%",
  },
  {
    id: 3,
    subject: "Bridgr Launch Update",
    type: "waitlist",
    status: "draft",
    sentAt: null,
    recipients: 0,
    openRate: null,
    clickRate: null,
  },
]

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [selectedSubscribers, setSelectedSubscribers] = useState<number[]>([])

  // Email composer state
  const [emailSubject, setEmailSubject] = useState("")
  const [emailContent, setEmailContent] = useState("")
  const [emailType, setEmailType] = useState("newsletter")
  const [isPreview, setIsPreview] = useState(false)

  const filteredSubscribers = mockSubscribers.filter((subscriber) => {
    const matchesSearch = subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter =
      filterType === "all" || subscriber.type === filterType || (filterType === "both" && subscriber.type === "both")
    return matchesSearch && matchesFilter
  })

  const stats = {
    totalSubscribers: mockSubscribers.length,
    waitlistCount: mockSubscribers.filter((s) => s.type === "waitlist" || s.type === "both").length,
    newsletterCount: mockSubscribers.filter((s) => s.type === "newsletter" || s.type === "both").length,
    activeCount: mockSubscribers.filter((s) => s.status === "active").length,
  }

  const handleSendEmail = () => {
    // Simulate sending email
    alert(`Email "${emailSubject}" sent to ${emailType} subscribers!`)
    setEmailSubject("")
    setEmailContent("")
  }

  const handleExportSubscribers = () => {
    // Simulate CSV export
    const csvContent =
      "Email,Type,Joined Date,Status\n" +
      filteredSubscribers.map((s) => `${s.email},${s.type},${s.joinedAt},${s.status}`).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "bridgr-subscribers.csv"
    a.click()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/images/br-01.png" alt="Bridgr" width={120} height={40} className="h-8 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-white">Admin</h1>
                <p className="text-gray-400">Manage subscribers and campaigns</p>
              </div>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-900 bg-transparent">
              <Eye className="w-4 h-4 mr-2" />
              View Site
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Subscribers</p>
                  <p className="text-2xl font-bold text-white">{stats.totalSubscribers}</p>
                </div>
                <Users className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Waitlist</p>
                  <p className="text-2xl font-bold text-white">{stats.waitlistCount}</p>
                </div>
                <UserPlus className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Newsletter</p>
                  <p className="text-2xl font-bold text-white">{stats.newsletterCount}</p>
                </div>
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active</p>
                  <p className="text-2xl font-bold text-white">{stats.activeCount}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="subscribers" className="space-y-6">
          <TabsList className="bg-gray-900 border-gray-800">
            <TabsTrigger value="subscribers" className="data-[state=active]:bg-gray-800 text-gray-300">
              <Users className="w-4 h-4 mr-2" />
              Subscribers
            </TabsTrigger>
            <TabsTrigger value="compose" className="data-[state=active]:bg-gray-800 text-gray-300">
              <Send className="w-4 h-4 mr-2" />
              Compose Email
            </TabsTrigger>
            <TabsTrigger value="campaigns" className="data-[state=active]:bg-gray-800 text-gray-300">
              <BarChart3 className="w-4 h-4 mr-2" />
              Campaigns
            </TabsTrigger>
          </TabsList>

          {/* Subscribers Tab */}
          <TabsContent value="subscribers">
            <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <CardTitle className="text-white">Subscriber Management</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleExportSubscribers}
                      variant="outline"
                      className="border-gray-600 text-gray-300 bg-transparent hover:bg-gray-800"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </Button>
                  </div>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search subscribers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-800 border-gray-700 text-white focus:border-[#374F37]"
                    />
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                  >
                    <option value="all">All Types</option>
                    <option value="waitlist">Waitlist Only</option>
                    <option value="newsletter">Newsletter Only</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </CardHeader>

              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-300">Email</th>
                        <th className="text-left py-3 px-4 text-gray-300">Type</th>
                        <th className="text-left py-3 px-4 text-gray-300">Joined</th>
                        <th className="text-left py-3 px-4 text-gray-300">Status</th>
                        <th className="text-left py-3 px-4 text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubscribers.map((subscriber) => (
                        <tr key={subscriber.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                          <td className="py-3 px-4 text-white">{subscriber.email}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant="outline"
                              className={
                                subscriber.type === "waitlist"
                                  ? "border-green-600 text-green-400"
                                  : subscriber.type === "newsletter"
                                    ? "border-purple-600 text-purple-400"
                                    : "border-[#374F37] text-green-400"
                              }
                            >
                              {subscriber.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-gray-300">{subscriber.joinedAt}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={subscriber.status === "active" ? "default" : "secondary"}
                              className={subscriber.status === "active" ? "bg-green-600" : "bg-gray-600"}
                            >
                              {subscriber.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compose Email Tab */}
          <TabsContent value="compose">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Email Composer */}
              <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Compose Email</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Type</label>
                    <select
                      value={emailType}
                      onChange={(e) => setEmailType(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                    >
                      <option value="newsletter">Newsletter Subscribers</option>
                      <option value="waitlist">Waitlist Subscribers</option>
                      <option value="both">All Subscribers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject Line</label>
                    <Input
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      placeholder="Enter email subject..."
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#374F37]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Content</label>
                    <Textarea
                      value={emailContent}
                      onChange={(e) => setEmailContent(e.target.value)}
                      placeholder="Write your email content here..."
                      rows={10}
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#374F37]"
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => setIsPreview(!isPreview)}
                      variant="outline"
                      className="border-gray-600 text-gray-300 bg-transparent hover:bg-gray-800"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      {isPreview ? "Edit" : "Preview"}
                    </Button>
                    <Button
                      onClick={handleSendEmail}
                      className="bg-[#374F37] hover:bg-[#374F37]/80"
                      disabled={!emailSubject || !emailContent}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  {isPreview ? (
                    <div className="bg-white text-black p-6 rounded-lg">
                      <div className="border-b pb-4 mb-4">
                        <h3 className="text-xl font-bold">{emailSubject || "Subject Line"}</h3>
                        <p className="text-gray-600 text-sm">From: Bridgr Team</p>
                      </div>
                      <div className="whitespace-pre-wrap">{emailContent || "Email content will appear here..."}</div>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 py-12">
                      <Eye className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Click "Preview" to see how your email will look</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Campaigns Tab */}
          <TabsContent value="campaigns">
            <Card className="bg-gray-900/50 border-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white">Email Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-300">Subject</th>
                        <th className="text-left py-3 px-4 text-gray-300">Type</th>
                        <th className="text-left py-3 px-4 text-gray-300">Status</th>
                        <th className="text-left py-3 px-4 text-gray-300">Recipients</th>
                        <th className="text-left py-3 px-4 text-gray-300">Open Rate</th>
                        <th className="text-left py-3 px-4 text-gray-300">Click Rate</th>
                        <th className="text-left py-3 px-4 text-gray-300">Sent Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCampaigns.map((campaign) => (
                        <tr key={campaign.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                          <td className="py-3 px-4 text-white">{campaign.subject}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant="outline"
                              className={
                                campaign.type === "newsletter"
                                  ? "border-purple-600 text-purple-400"
                                  : "border-green-600 text-green-400"
                              }
                            >
                              {campaign.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              variant={campaign.status === "sent" ? "default" : "secondary"}
                              className={campaign.status === "sent" ? "bg-green-600" : "bg-yellow-600"}
                            >
                              {campaign.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-gray-300">{campaign.recipients}</td>
                          <td className="py-3 px-4 text-gray-300">{campaign.openRate || "-"}</td>
                          <td className="py-3 px-4 text-gray-300">{campaign.clickRate || "-"}</td>
                          <td className="py-3 px-4 text-gray-300">{campaign.sentAt || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
