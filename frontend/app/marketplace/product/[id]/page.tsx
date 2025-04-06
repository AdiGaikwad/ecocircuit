"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductGallery } from "@/components/marketplace/product-gallery";
import { SellerCard } from "@/components/marketplace/seller-card";
// import { ProductReviews } from "@/components/marketplace/product-reviews";
import { ShoppingCart } from "@/components/marketplace/shopping-cart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { Heart, ShoppingBag, Share2, ArrowLeft, Truck, Shield, Recycle, Info, Star } from 'lucide-react';
import Link from "next/link";

// Mock product data
const product = {
  id: "prod1",
  title: "Circuit Board Wall Art - Geometric Pattern",
  description: "This unique wall art is handcrafted from recycled circuit boards, featuring an intricate geometric pattern. Each piece is one-of-a-kind, with the natural colors and components of the circuit boards creating a stunning visual effect. The circuit boards have been thoroughly cleaned and treated to ensure safety and longevity.",
  price: 2499,
  originalPrice: 2999,
  stock: 5,
  images: [
    {
      id: "img1",
      url: "/placeholder.svg?height=600&width=600",
      alt: "Circuit Board Wall Art - Front View"
    },
    {
      id: "img2",
      url: "/placeholder.svg?height=600&width=600",
      alt: "Circuit Board Wall Art - Side View"
    },
    {
      id: "img3",
      url: "/placeholder.svg?height=600&width=600",
      alt: "Circuit Board Wall Art - Detail View"
    },
    {
      id: "img4",
      url: "/placeholder.svg?height=600&width=600",
      alt: "Circuit Board Wall Art - In Room Setting"
    }
  ],
  category: "Art & Decor",
  materials: ["Circuit Boards", "Aluminum Frame", "LED Lights"],
  dimensions: "40cm x 40cm x 3cm",
  weight: "1.2kg",
  features: [
    "Made from 100% recycled electronic components",
    "Integrated LED backlighting with remote control",
    "Aluminum frame with hanging hardware included",
    "Each piece is unique and one-of-a-kind",
    "Comes with certificate of authenticity"
  ],
  seller: {
    id: "seller1",
    name: "TechArt Creations",
    avatar: "",
    rating: 4.9,
    reviewCount: 124,
    responseRate: 98,
    responseTime: "Within 24 hours",
    location: "Mumbai, India",
    joinDate: "January 2022",
    isVerified: true,
    productCount: 37
  },
  rating: 4.8,
  reviewCount: 24,
  isVerified: true,
  isFeatured: true,
  shippingInfo: {
    free: true,
    estimatedDelivery: "3-5 business days"
  },
  warranty: "1 year manufacturer warranty",
  returnPolicy: "30-day returns accepted if unused and in original packaging",
  sustainabilityImpact: {
    wasteReduced: "1.5kg of e-waste diverted from landfill",
    co2Reduced: "3.2kg CO2 emissions saved",
    waterSaved: "450 liters of water conserved"
  },
  blockchainInfo: {
    verified: true,
    components: [
      {
        type: "Circuit Boards",
        source: "Recycled computer motherboards",
        age: "5-8 years",
        previousUse: "Desktop computers"
      },
      {
        type: "LED Lights",
        source: "Repurposed from LCD monitors",
        age: "3-5 years",
        previousUse: "Computer displays"
      }
    ]
  }
};

// Mock reviews data
const reviews = [
  {
    id: "rev1",
    user: {
      id: "user1",
      name: "Priya Sharma",
      avatar: ""
    },
    rating: 5,
    date: "August 15, 2023",
    title: "Absolutely stunning piece!",
    content: "This circuit board art exceeded my expectations. The craftsmanship is exceptional, and the LED backlighting creates a beautiful ambiance in my home office. I love that it's made from recycled components - it's a great conversation starter!",
    helpful: 12,
    verified: true
  },
  {
    id: "rev2",
    user: {
      id: "user2",
      name: "Rahul Patel",
      avatar: ""
    },
    rating: 4,
    date: "July 28, 2023",
    title: "Beautiful and unique",
    content: "Very happy with this purchase. The colors and patterns in the circuit boards are fascinating, and I appreciate the sustainable aspect. Giving 4 stars instead of 5 only because the LED remote is a bit finicky, but the art itself is perfect.",
    helpful: 8,
    verified: true
  },
  {
    id: "rev3",
    user: {
      id: "user3",
      name: "Amit Desai",
      avatar: ""
    },
    rating: 5,
    date: "July 10, 2023",
    title: "Perfect gift for tech enthusiasts",
    content: "Bought this as a gift for my brother who works in IT, and he absolutely loves it. The quality is excellent, and the seller included a nice note about the specific components used in the piece. Highly recommend!",
    helpful: 5,
    images: [
      {
        id: "revimg1",
        url: "/placeholder.svg?height=100&width=100"
      },
      {
        id: "revimg2",
        url: "/placeholder.svg?height=100&width=100"
      }
    ],
    verified: true
  }
];

// Mock review summary
const reviewSummary = {
  average: 4.8,
  total: 24,
  distribution: {
    5: 20,
    4: 3,
    3: 1,
    2: 0,
    1: 0
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > product.stock) return;
    setQuantity(newQuantity);
  };
  
  const handleAddToCart = () => {
    // In a real app, this would add the product to the cart
    console.log("Adding to cart:", product.id, "Quantity:", quantity);
    setIsCartOpen(true);
  };
  
  const handleBuyNow = () => {
    // In a real app, this would add the product to the cart and redirect to checkout
    console.log("Buying now:", product.id, "Quantity:", quantity);
    window.location.href = "/marketplace/checkout";
  };
  
  const handleToggleSave = () => {
    setIsSaved(!isSaved);
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog
    console.log("Sharing product:", product.id);
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-10"
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ProductGallery images={product.images} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="bg-gray-100 text-gray-800 font-normal">
                      {product.category}
                    </Badge>
                    {product.isVerified && (
                      <Badge className="bg-green-100 text-green-800">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {product.isFeatured && (
                      <Badge className="bg-purple-100 text-purple-800">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                  
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.round(product.rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium">{product.rating}</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <Link href="#reviews" className="text-sm text-gray-600 hover:text-purple-600">
                      {product.reviewCount} reviews
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">₹{(product.price / 100).toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">
                      ₹{(product.originalPrice / 100).toFixed(2)}
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="ml-2 text-green-600 font-medium">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>
                
                <div className="border-t border-b py-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-gray-700 mr-4">Quantity</span>
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => handleQuantityChange(quantity - 1)}
                        >
                          <MinusIcon className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center">{quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => handleQuantityChange(quantity + 1)}
                        >
                          <PlusIcon className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.stock} available
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      className="flex-1"
                      variant="outline"
                      onClick={handleBuyNow}
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className={`h-10 w-10 ${isSaved ? 'text-red-500 border-red-500' : ''}`}
                      onClick={handleToggleSave}
                    >
                      <Heart className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-10 w-10"
                      onClick={handleShare}
                    >
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Truck className="h-4 w-4 text-gray-500 mr-2" />
                    <span>
                      {product.shippingInfo.free ? 'Free shipping' : 'Standard shipping'} • 
                      Estimated delivery: {product.shippingInfo.estimatedDelivery}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Shield className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{product.warranty}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Recycle className="h-4 w-4 text-gray-500 mr-2" />
                    <span>Made from 100% recycled electronic components</span>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-medium text-green-800 flex items-center mb-2">
                    <Leaf className="h-4 w-4 mr-2" />
                    Environmental Impact
                  </h3>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• {product.sustainabilityImpact.wasteReduced} of e-waste diverted from landfill</li>
                    <li>• {product.sustainabilityImpact.co2Reduced} CO₂ emissions saved</li>
                    <li>• {product.sustainabilityImpact.waterSaved} of water conserved</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full grid grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-6">
                  <div className="prose max-w-none">
                    <p>{product.description}</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-3">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="details" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Product Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border-b pb-2">
                          <span className="text-gray-500 text-sm">Dimensions</span>
                          <p>{product.dimensions}</p>
                        </div>
                        <div className="border-b pb-2">
                          <span className="text-gray-500 text-sm">Weight</span>
                          <p>{product.weight}</p>
                        </div>
                        <div className="border-b pb-2">
                          <span className="text-gray-500 text-sm">Materials</span>
                          <p>{product.materials.join(", ")}</p>
                        </div>
                        <div className="border-b pb-2">
                          <span className="text-gray-500 text-sm">Category</span>
                          <p>{product.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Care Instructions</h3>
                      <p className="text-gray-700">
                        Dust with a soft, dry cloth. Avoid direct sunlight and excessive moisture. Do not use chemical cleaners as they may damage the electronic components.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="blockchain" className="mt-6">
                  <div className="space-y-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Shield className="h-5 w-5 text-purple-600 mr-2" />
                        Blockchain Verification
                      </h3>
                      <p className="text-gray-700 mb-4">
                        This product has been verified on the blockchain, ensuring transparency and traceability of all components used in its creation.
                      </p>
                      
                      <div className="border-t border-purple-100 pt-4 mt-4">
                        <h4 className="font-medium mb-2">Component Tracking</h4>
                        <div className="space-y-4">
                          {product.blockchainInfo.components.map((component, index) => (
                            <div key={index} className="bg-white rounded-lg p-3 border border-purple-100">
                              <div className="flex justify-between">
                                <h5 className="font-medium">{component.type}</h5>
                                <Badge className="bg-purple-100 text-purple-800">Verified</Badge>
                              </div>
                              <div className="mt-2 space-y-1 text-sm">
                                <p><span className="text-gray-500">Source:</span> {component.source}</p>
                                <p><span className="text-gray-500">Age:</span> {component.age}</p>
                                <p><span className="text-gray-500">Previous Use:</span> {component.previousUse}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                          <Info className="h-4 w-4 mr-2" />
                          View Full Blockchain Record
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="shipping" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Shipping Information</h3>
                      <p className="text-gray-700 mb-4">
                        We ship to all major cities in India. International shipping is available for select countries.
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Estimated Delivery Times</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Major Cities (Delhi, Mumbai, Bangalore)</span>
                            <span className="font-medium">2-3 business days</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Other Cities</span>
                            <span className="font-medium">3-5 business days</span>
                          </div>
                          <div className="flex justify-between">
                            <span>International</span>
                            <span className="font-medium">7-14 business days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Return Policy</h3>
                      <p className="text-gray-700 mb-2">
                        {product.returnPolicy}
                      </p>
                      <p className="text-gray-700">
                        Please note that due to the unique nature of handcrafted items, slight variations in appearance are normal and not considered defects.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div id="reviews" className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                {/* <ProductReviews
                  productId={product.id}
                  reviews={reviews}
                  summary={reviewSummary}
                /> */}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <SellerCard seller={product.seller} isDetailed={true} />
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-3">You May Also Like</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <Link href={`/marketplace/product/related-${item}`} key={item}>
                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-colors">
                          <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={`/placeholder.svg?height=64&width=64`}
                              alt={`Related product ${item}`}
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-sm">Related Product {item}</h4>
                            <p className="text-sm text-gray-500">₹1,{item}99.00</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      <Footer />
    </main>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function Leaf({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M2 22c1.25-1.25 2.5-2.5 3.5-4 .83-1.25 1.5-2.5 2-4 .5-1.5.5-3 .5-4.5 0-2-.5-3.5-1-5C6.5 2.5 5 1 5 1c0 0 1.5 1.5 3 2.5 1.5 1 3 1.5 5 1.5 1.5 0 3 0 4.5-.5 1.5-.5 2.75-1.17 4-2C23 1 22 2 22 2c0 0-1.5 1.5-3 2.5-1.5 1-3 1.5-5 1.5-1.5 0-3 0-4.5.5-1.5.5-2.75 1.17-4 2-1.25 1.25-2.5 2.5-3.5 4-.83 1.25-1.5 2.5-2 4-.5 1.5-.5 3-.5 4.5 0 2 .5 3.5 1 5 .5 1.5 2 3 2 3" />
    </svg>
  );
}
