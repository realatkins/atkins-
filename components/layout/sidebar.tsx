"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, MessageSquare, Settings, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const navigation = [
  {
    title: "GENERAL",
    items: [{ name: "Home", href: "/partners", icon: Home }],
  },
  {
    title: "PARTNERSHIP MANAGEMENT",
    items: [
      { name: "Events", href: "/partners/events", icon: Calendar },
      { name: "Messages", href: "/partners/messages", icon: MessageSquare },
    ],
  },
  {
    title: "PROFILE MANAGEMENT",
    items: [{ name: "Profile Settings", href: "/partners/profile", icon: Settings }],
  },
  {
    title: "NOTIFICATIONS MANAGEMENT",
    items: [{ name: "Notifications", href: "/partners/notifications", icon: Bell }],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <Link href="/" className="flex items-center mb-8">
        <Image src="/images/br-01.png" alt="Bridgr" width={120} height={40} className="h-8 w-auto" />
      </Link>

      <nav className="space-y-6">
        {navigation.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-orange-500 text-white">NM</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Nashe Moosa</p>
            <p className="text-xs text-gray-400 truncate">nashe@email.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
