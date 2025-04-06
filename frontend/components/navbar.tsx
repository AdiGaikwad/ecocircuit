"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ar-collection", label: "AR Collection" },
  { href: "/rewards", label: "Rewards" },
  { href: "/challenges", label: "Challenges" },
  { href: "/e-waste-art", label: "E-Waste Art" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/marketplace", label: "Market Place" },
  { href: "/locate", label: "Locate" },

]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const {user, loading} = useAuth();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/50 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-600",
                pathname === link.href ? "text-purple-600 font-semibold" : "text-gray-700",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
        { !loading && user ?  <Link href="/profile">
                <Button  className="w-full border-purple-600 text-white hover:bg-purple-600/90">
                  Dashboard
                </Button>
              </Link> :
              <> <Link href="/login">
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Register</Button>
              </Link> 
              </>
              }
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium py-2 transition-colors hover:text-purple-600",
                  pathname === link.href ? "text-purple-600 font-semibold" : "text-gray-700",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
             { !loading && user ?  <Link href="/profile">
                <Button  className="w-full border-purple-600 text-white hover:bg-purple-600/90">
                  Dashboard
                </Button>
              </Link> :
              <> <Link href="/login">
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Register</Button>
              </Link> 
              </>
              }
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

