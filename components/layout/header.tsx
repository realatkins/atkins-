"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()
  const isPartnersPage = pathname.startsWith("/partners")

  return (
    <header className={`border-b ${isPartnersPage ? "bg-gray-900 border-gray-700" : "bg-white"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/br-01.png" alt="Bridgr" width={120} height={40} className="h-8 w-auto" />
        </Link>

        <nav className="flex items-center gap-1">
          <Link href="/partners">
            <Button
              variant={pathname.startsWith("/partners") ? "default" : "ghost"}
              className={
                pathname.startsWith("/partners")
                  ? "bg-[#374F37] text-white hover:bg-[#374F37]"
                  : isPartnersPage
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : ""
              }
            >
              For Partners
            </Button>
          </Link>
          <Link href="/brands">
            <Button
              variant={pathname.startsWith("/brands") ? "default" : "ghost"}
              className={
                pathname.startsWith("/brands")
                  ? "bg-[#374F37] text-white"
                  : isPartnersPage
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : ""
              }
            >
              For Brands
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className={isPartnersPage ? "text-gray-300 hover:text-white hover:bg-gray-800" : ""}>
            Log in
          </Button>
          <Button
            className={
              isPartnersPage ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white hover:bg-gray-800"
            }
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}
