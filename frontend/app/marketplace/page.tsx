"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { SearchFilters } from "@/components/marketplace/search-filters"
import { ProductCard } from "@/components/marketplace/product-card"
import { useMediaQuery } from "@/hooks/use-mobile"
import { ArrowRight, Plus } from "lucide-react"
import Link from "next/link"

// Mock data for featured products
const featuredProducts = [
  {
    id: "product1",
    title: "Circuit Board Wall Art - Geometric Pattern",
    price: 3500,
    originalPrice: 4500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Art",
    condition: "New",
    rating: 4.8,
    reviewCount: 24,
    seller: {
      id: "seller1",
      name: "EcoArtistry",
      rating: 4.9,
    },
    isVerified: true,
    isNew: true,
  },
  {
    id: "product2",
    title: "Upcycled Laptop Desk Lamp - Adjustable LED",
    price: 2200,
    image: "/placeholder.svg?height=300&width=300",
    category: "Furniture",
    condition: "Like New",
    rating: 4.5,
    reviewCount: 18,
    seller: {
      id: "seller2",
      name: "TechRevive",
      rating: 4.7,
    },
    isFeatured: true,
  },
  {
    id: "product3",
    title: "Smartphone Component Jewelry Set - Necklace & Earrings",
    price: 1800,
    originalPrice: 2500,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    condition: "New",
    rating: 4.7,
    reviewCount: 32,
    seller: {
      id: "seller3",
      name: "CircuitChic",
      rating: 4.8,
    },
    isVerified: true,
  },
  {
    id: "product4",
    title: "Recycled Computer Memory Keychain",
    price: 450,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    condition: "New",
    rating: 4.3,
    reviewCount: 15,
    seller: {
      id: "seller4",
      name: "MemoryLane",
      rating: 4.5,
    },
  },
]

// Mock data for all products
const allProducts = [
  ...featuredProducts,
  {
    id: "product5",
    title: "Vintage Keyboard Plant Holder - Succulent Planter",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    condition: "Good",
    rating: 4.6,
    reviewCount: 21,
    seller: {
      id: "seller5",
      name: "GreenTech",
      rating: 4.4,
    },
  },
  {
    id: "product6",
    title: "Recycled CPU Coasters - Set of 4",
    price: 800,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    condition: "New",
    rating: 4.2,
    reviewCount: 9,
    seller: {
      id: "seller6",
      name: "ChipCraft",
      rating: 4.3,
    },
  },
  {
    id: "product7",
    title: "Hard Drive Clock - Industrial Wall Clock",
    price: 1800,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    condition: "New",
    rating: 4.7,
    reviewCount: 14,
    seller: {
      id: "seller2",
      name: "TechRevive",
      rating: 4.7,
    },
    isVerified: true,
  },
  {
    id: "product8",
    title: "Copper Wire from Recycled Electronics - 500g",
    price: 650,
    image: "/placeholder.svg?height=300&width=300",
    category: "Raw Materials",
    condition: "Good",
    rating: 4.4,
    reviewCount: 7,
    seller: {
      id: "seller7",
      name: "MaterialsReborn",
      rating: 4.6,
    },
  },
  {
    id: "product9",
    title: "Smartphone Camera Lens Set - Macro Photography",
    price: 1500,
    originalPrice: 2000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Components",
    condition: "Like New",
    rating: 4.1,
    reviewCount: 11,
    seller: {
      id: "seller8",
      name: "LensMaster",
      rating: 4.2,
    },
    timeLeft: "2 days",
  },
  {
    id: "product10",
    title: "Recycled Laptop Battery Power Bank - 20000mAh",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300",
    category: "Gadgets",
    condition: "Good",
    rating: 3.9,
    reviewCount: 23,
    seller: {
      id: "seller9",
      name: "PowerUp",
      rating: 4.0,
    },
  },
  {
    id: "product11",
    title: "Circuit Board Bookmarks - Set of 5",
    price: 350,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    condition: "New",
    rating: 4.8,
    reviewCount: 19,
    seller: {
      id: "seller3",
      name: "CircuitChic",
      rating: 4.8,
    },
    isVerified: true,
  },
  {
    id: "product12",
    title: "Upcycled Monitor Terrarium - Desktop Garden",
    price: 2800,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
    condition: "New",
    rating: 4.9,
    reviewCount: 27,
    seller: {
      id: "seller5",
      name: "GreenTech",
      rating: 4.4,
    },
    isFeatured: true,
  },
]

// Categories for the marketplace
const categories = [
  { id: "art", name: "Art Pieces", icon: "🎨" },
  { id: "furniture", name: "Furniture", icon: "🪑" },
  { id: "accessories", name: "Accessories", icon: "💍" },
  { id: "gadgets", name: "Gadgets", icon: "🔌" },
  { id: "components", name: "Components", icon: "🔧" },
  { id: "raw-materials", name: "Raw Materials", icon: "🧱" },
]

export default function MarketplacePage() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleSearch = (filters: any) => {
    console.log("Search filters:", filters)
    // In a real app, this would filter the products based on the search criteria
    // For now, we'll just use the mock data
    setFilteredProducts(allProducts)
  }

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
          size={600}
          opacity={0.1}
        />

        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">EcoCircuit Marketplace</h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              Discover unique upcycled products made from e-waste. From art pieces to functional gadgets, find
              sustainable treasures while supporting the circular economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/marketplace/browse">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/marketplace/create-listing">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  Sell Your Creation
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Categories Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/marketplace/category/${category.id}`}>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center">
                      <span className="text-3xl mb-3">{category.icon}</span>
                      <h3 className="font-medium">{category.name}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <Link href="/marketplace/featured">
                <Button variant="link" className="text-purple-600">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard   
                seller={product.seller}
                price={product.price} key={product.id}   />
              ))}
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">All Products</h2>
            <SearchFilters onSearch={handleSearch} isMobile={isMobile} />

            {isMobile ? (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProducts.slice(0, 6).map((product) => (
                  <ProductCard key={product.id}    
                      seller={product.seller}
                      price={product.price} />
                ))}
              </div>
            ) : (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 col-span-9">
                {filteredProducts.slice(0, 9).map((product) => (
                  <ProductCard key={product.id}    
                      seller={product.seller}
                      price={product.price} />
                ))}
              </div>
            )}

            <div className="mt-8 text-center">
              <Link href="/marketplace/browse">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Seller CTA Section */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-white">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-8 md:mb-0 md:max-w-lg">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                  >
                    Turn E-Waste into Income
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg text-white/90 md:text-xl"
                  >
                    Join our community of creative recyclers. List your upcycled creations and earn while helping the
                    planet.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link href="/marketplace/create-listing">
                    <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                      Start Selling
                      <Plus className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/marketplace/seller-guide">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
                    >
                      Seller Guide
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

