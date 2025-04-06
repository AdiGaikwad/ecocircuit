"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckoutForm } from "@/components/marketplace/checkout-form";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/ui/gradient-blob";
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

export default function CheckoutPage() {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  
  const handleOrderComplete = () => {
    setIsOrderComplete(true);
    
    // In a real app, this would redirect to an order confirmation page
    window.scrollTo(0, 0);
  };
  
  // Mock cart items
  const cartItems = [
    {
      id: "prod1",
      title: "Circuit Board Wall Art",
      price: 2499,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 1,
      seller: {
        id: "seller1",
        name: "TechArt Creations"
      }
    },
    {
      id: "prod2",
      title: "Upcycled Keyboard Planter",
      price: 1299,
      image: "/placeholder.svg?height=80&width=80",
      quantity: 2,
      seller: {
        id: "seller2",
        name: "GreenTech Designs"
      }
    }
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 99;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;
  
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
          {!isOrderComplete ? (
            <>
              <div className="mb-6">
                <Link href="/marketplace">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Shopping
                  </Button>
                </Link>
              </div>
              
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold mb-2">Checkout</h1>
                <p className="text-gray-600">Complete your purchase</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <CheckoutForm onComplete={handleOrderComplete} />
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                    <div className="p-6 border-b">
                      <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
                      
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex">
                            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                            
                            <div className="ml-3 flex-grow">
                              <h4 className="font-medium text-sm">{item.title}</h4>
                              <p className="text-xs text-gray-500">Seller: {item.seller.name}</p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                                <span className="font-medium">₹{(item.price * item.quantity / 100).toFixed(2)}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Subtotal</span>
                          <span>₹{(subtotal / 100).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Shipping</span>
                          <span>₹{(shipping / 100).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Tax (18% GST)</span>
                          <span>₹{(tax / 100).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-medium pt-2 border-t">
                          <span>Total</span>
                          <span>₹{(total / 100).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-green-50 rounded-lg p-3">
                        <h3 className="font-medium text-green-800 text-sm mb-1">Environmental Impact</h3>
                        <p className="text-xs text-green-700">
                          Your purchase helps divert approximately 2.7kg of e-waste from landfills and saves 7.5kg of CO₂ emissions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your purchase. Your order has been placed and is being processed.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="font-medium mb-4">Order Details</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Order Number:</span>
                    <span className="font-medium">EC-{Math.floor(Math.random() * 10000)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Order Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Payment Method:</span>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Amount:</span>
                    <span className="font-medium">₹{(total / 100).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/marketplace">
                    <Button variant="outline" className="w-full sm:w-auto">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Link href="/profile">
                    <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white">
                      View Order History
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
