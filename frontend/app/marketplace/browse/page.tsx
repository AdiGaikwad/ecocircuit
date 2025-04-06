"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SearchFilters } from "@/components/marketplace/search-filters"
import { ProductCard } from "@/components/marketplace/product-card"
import { useMediaQuery } from "@/hooks/use-mobile"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Mock data for products (reusing the same data structure from marketplace/page.tsx)
const allProducts = Array.from({ length: 24 }).map((_, index) => ({
  id: `product${index + 1}`,
  title: [
    "Circuit Board Wall Art - Geometric Pattern",
    "Upcycled Laptop Desk Lamp - Adjustable LED",
    "Smartphone Component Jewelry Set - Necklace & Earrings",
    "Recycled Computer Memory Keychain",
    "Vintage Keyboard Plant Holder - Succulent Planter",
    "Recycled CPU Coasters - Set of 4",
    "Hard Drive Clock - Industrial Wall Clock",
    "Copper Wire from Recycled Electronics - 500g",
    "Smartphone Camera Lens Set - Macro Photography",
    "Recycled Laptop Battery Power Bank - 20000mAh",
    "Circuit Board Bookmarks - Set of 5",
    "Upcycled Monitor Terrarium - Desktop Garden",
  ][index % 12],
  price: Math.floor(Math.random() * 4000) + 300,
  originalPrice: Math.random() > 0.7 ? Math.floor(Math.random() * 5000) + 1000 : undefined,
  image: "/shop/e-waste.webp",
  category: ["Art", "Furniture", "Accessories", "Gadgets", "Components", "Raw Materials", "Home Decor"][index % 7],
  condition: ["New", "Like New", "Good", "Fair", "Salvage"][index % 5],
  rating: (Math.random() * 2 + 3).toFixed(1),
  reviewCount: Math.floor(Math.random() * 30) + 1,
  seller: {
    id: `seller${(index % 9) + 1}`,
    name: [
      "EcoArtistry",
      "TechRevive",
      "CircuitChic",
      "MemoryLane",
      "GreenTech",
      "ChipCraft",
      "MaterialsReborn",
      "LensMaster",
      "PowerUp",
    ][index % 9],
    rating: (Math.random() * 1 + 4).toFixed(1),
  },
  isVerified: Math.random() > 0.7,
  isNew: Math.random() > 0.8,
  isFeatured: Math.random() > 0.9,
  timeLeft: Math.random() > 0.8 ? `${Math.floor(Math.random() * 5) + 1} days` : undefined,
}))

export default function BrowsePage() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const productsPerPage = 12
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handleSearch = (filters: any) => {
    console.log("Search filters:", filters)
    // In a real app, this would filter the products based on the search criteria
    // For now, we'll just use the mock data
    setFilteredProducts(allProducts)
    setCurrentPage(1)
  }

  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Browse Products</h1>
            <p className="text-gray-600">Discover unique upcycled products made from e-waste</p>
          </div>

          <SearchFilters onSearch={handleSearch} isMobile={true} />

          {paginatedProducts.length === 0 ? (
            <div className="mt-12 text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search filters to find what you're looking for.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setFilteredProducts(allProducts)
                  setCurrentPage(1)
                }}
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1
                    // Show current page, first page, last page, and pages around current page
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <Button
                          key={pageNumber}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          className={currentPage === pageNumber ? "bg-purple-600 hover:bg-purple-700" : ""}
                          onClick={() => setCurrentPage(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      )
                    } else if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return <span key={pageNumber}>...</span>
                    }
                    return null
                  })}

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

    </main>
  )
}

