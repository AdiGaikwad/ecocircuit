import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4">
              Empowering change, one circuit at a time. Join the recycling revolution and help protect our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/locate" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Locate
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ar-collection" className="text-gray-600 hover:text-purple-600 transition-colors">
                  AR Collection Points
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Dynamic Rewards
                </Link>
              </li>
              <li>
                <Link href="/challenges" className="text-gray-600 hover:text-purple-600 transition-colors">
                  Corporate Challenges
                </Link>
              </li>
              <li>
                <Link href="/e-waste-art" className="text-gray-600 hover:text-purple-600 transition-colors">
                  E-Waste to Art
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Eco Street, Green City, Earth 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-600">info@ecocircuit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EcoCircuit. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-24 border-purple-200 focus:border-purple-500"
              />
              <Button className="absolute right-0 top-0 h-full bg-purple-600 hover:bg-purple-700 text-white rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

