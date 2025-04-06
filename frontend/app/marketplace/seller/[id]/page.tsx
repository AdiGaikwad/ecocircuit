"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/marketplace/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Star, MessageCircle, ShieldCheck, MapPin, Calendar, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// Mock seller data
const seller = {
  id: "seller1",
  name: "TechArt Creations",
  bio: "We specialize in transforming e-waste into beautiful, functional art pieces. Our team of artists and engineers work together to give discarded electronics a new life, reducing environmental impact while creating unique items for your home or office.",
  avatar: "",
  coverImage: "/placeholder.svg?height=300&width=1200",
  rating: 4.9,
  reviewCount: 124,
  responseRate: 98,
  responseTime: "Within 24 hours",
  location: "Mumbai, India",
  joinDate: "January 2022",
  isVerified: true,
  productCount: 37,
  totalSales: 215,
  specialties: ["Circuit Board Art", "LED Lighting", "Upcycled Furniture", "Tech Accessories"],
  socialLinks: {
    website: "https://techart-creations.com",
    instagram: "techart_creations",
    facebook: "TechArtCreations",
  },
}

// Mock products data
const products = [
  {
    id: "prod1",
    title: "Circuit Board Wall Art",
    price: 2499,
    image: "/placeholder.svg?height=300&width=300",
    category: "Art & Decor",
    rating: 4.8,
    reviewCount: 24,
    seller: {
      id: "seller1",
      name: "TechArt Creations",
      rating: 4.9,
    },
    isFeatured: true,
    isVerified: true,
  },
  {
    id: "prod2",
    title: "Motherboard Coasters (Set of 4)",
    price: 999,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    rating: 4.6,
    reviewCount: 15,
    seller: {
      id: "seller1",
      name: "TechArt Creations",
      rating: 4.9,
    },
  },
  {
    id: "prod3",
    title: "LED Lamp from Computer Parts",
    price: 3499,
    image: "/placeholder.svg?height=300&width=300",
    category: "Lighting",
    rating: 4.9,
    reviewCount: 27,
    seller: {
      id: "seller1",
      name: "TechArt Creations",
      rating: 4.9,
    },
    isFeatured: true,
    isVerified: true,
  },
  {
    id: "prod4",
    title: "Upcycled Hard Drive Clock",
    price: 1899,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    rating: 4.7,
    reviewCount: 19,
    seller: {
      id: "seller1",
      name: "TechArt Creations",
      rating: 4.9,
    },
    isVerified: true,
  },
  {
    id: "prod5",
    title: "Computer Chip Earrings",
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
    category: "Jewelry",
    rating: 4.5,
    reviewCount: 12,
    seller: {
      id: "seller1",
      name: "TechArt Creations",
      rating: 4.9,
    },
    isNew: true,
  },
  {
    id: "prod6",
    title: "Keyboard Key Fridge Magnets",
    price: 599,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    rating: 4.4,
    reviewCount: 8,
    seller: {
      id: "seller1",
      name: "TechArt Creations",
      rating: 4.9,
    },
  },
]

// Mock reviews data
const reviews = [
  {
    id: "rev1",
    user: {
      id: "user1",
      name: "Priya Sharma",
      avatar: "",
    },
    rating: 5,
    date: "August 15, 2023",
    content:
      "Amazing seller! The circuit board art I purchased is absolutely stunning. Great communication throughout the process and fast shipping. Highly recommend!",
    productId: "prod1",
    productTitle: "Circuit Board Wall Art",
  },
  {
    id: "rev2",
    user: {
      id: "user2",
      name: "Rahul Patel",
      avatar: "",
    },
    rating: 5,
    date: "July 28, 2023",
    content:
      "TechArt Creations is fantastic! The LED lamp I bought is not only beautiful but also a great conversation starter. Excellent craftsmanship and attention to detail.",
    productId: "prod3",
    productTitle: "LED Lamp from Computer Parts",
  },
  {
    id: "rev3",
    user: {
      id: "user3",
      name: "Amit Desai",
      avatar: "",
    },
    rating: 4,
    date: "July 10, 2023",
    content:
      "Very happy with my purchase. The coasters look great and are well-made. Shipping was a bit slow, but the quality makes up for it.",
    productId: "prod2",
    productTitle: "Motherboard Coasters (Set of 4)",
  },
]

export default function SellerPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("all")

  const handleAddToCart = (productId: string) => {
    // In a real app, this would add the product to the cart
    console.log("Adding to cart:", productId)
  }

  const handleSaveProduct = (productId: string) => {
    // In a real app, this would save/unsave the product
    console.log("Saving product:", productId)
  }

  const handleShare = () => {
    // In a real app, this would open a share dialog
    console.log("Sharing seller profile:", seller.id)
  }

  const filteredProducts = products.filter((product) => {
    if (activeTab === "all") return true
    if (activeTab === "featured") return product.isFeatured
    if (activeTab === "new") return product.isNew
    if (activeTab === "verified") return product.isVerified
    return true
  })

  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 opacity-10"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
          size={600}
        />

        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/marketplace">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Marketplace
              </Button>
            </Link>
          </div>

          <div className="relative mb-8">
            <div className="h-48 md:h-64 rounded-xl overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600">
              {seller.coverImage && (
                <img
                  src={seller.coverImage || "/placeholder.svg"}
                  alt={`${seller.name} cover`}
                  className="w-full h-full object-cover opacity-50"
                />
              )}
            </div>

            <div className="absolute -bottom-12 left-8 flex items-end">
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                {seller.avatar ? (
                  <AvatarImage src={seller.avatar} alt={seller.name} />
                ) : (
                  <AvatarFallback className="bg-purple-100 text-purple-600 text-2xl">
                    {seller.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <h1 className="text-2xl font-bold">{seller.name}</h1>
                        {seller.isVerified && (
                          <Badge className="ml-2 bg-green-100 text-green-800 flex items-center">
                            <ShieldCheck className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= Math.round(seller.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm font-medium">{seller.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({seller.reviewCount} reviews)</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-700">{seller.bio}</p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">{seller.location}</span>
                    </div>

                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                      <span className="text-gray-700">Member since {seller.joinDate}</span>
                    </div>

                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 text-gray-500 mr-2" />
                      <div>
                        <span className="text-gray-700">{seller.responseRate}% Response Rate</span>
                        <span className="text-gray-500 text-sm block">{seller.responseTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {seller.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold">{seller.productCount}</p>
                        <p className="text-sm text-gray-500">Products</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{seller.totalSales}</p>
                        <p className="text-sm text-gray-500">Sales</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Seller
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="font-medium mb-4">Recent Reviews</h3>

                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-start">
                          <Avatar className="h-8 w-8 mr-2">
                            {review.user.avatar ? (
                              <AvatarImage src={review.user.avatar} alt={review.user.name} />
                            ) : (
                              <AvatarFallback className="bg-purple-100 text-purple-600 text-xs">
                                {review.user.name.charAt(0)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">{review.user.name}</p>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-3 w-3 ${
                                      star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-700 mt-2">{review.content}</p>

                        <div className="mt-2">
                          <Link
                            href={`/marketplace/product/${review.productId}`}
                            className="text-xs text-purple-600 hover:underline"
                          >
                            {review.productTitle}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <Button variant="link" className="text-purple-600">
                      View All Reviews
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold">Products by {seller.name}</h2>

                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="featured">Featured</TabsTrigger>
                    <TabsTrigger value="new">New</TabsTrigger>
                    <TabsTrigger value="verified">Verified</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    seller={product.seller}
                    price={product.price}
                    onSave={handleSaveProduct}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

