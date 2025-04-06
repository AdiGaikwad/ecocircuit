"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  seller: {
    id: string;
    name: string;
  };
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isApplyingPromo, setIsApplyingPromo] = useState(false);
  
  // Mock data - in a real app, this would come from a cart service
  useEffect(() => {
    setCartItems([
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
    ]);
  }, []);
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const applyPromoCode = () => {
    if (!promoCode) return;
    
    setIsApplyingPromo(true);
    
    // Simulate API call
    setTimeout(() => {
      setPromoApplied(true);
      setIsApplyingPromo(false);
    }, 1000);
  };
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = 99;
  const total = subtotal - discount + shipping;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h2 className="font-semibold text-lg flex items-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
              </h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex-grow overflow-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Looks like you haven't added any items yet.</p>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={onClose}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex border rounded-lg p-3">
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
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-500">Seller: {item.seller.name}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-red-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 rounded-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="font-medium">₹{(item.price * item.quantity / 100).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cartItems.length > 0 && (
              <div className="border-t p-4 space-y-4">
                <div className="flex items-center">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-grow"
                    disabled={promoApplied}
                  />
                  <Button
                    variant="outline"
                    className="ml-2"
                    onClick={applyPromoCode}
                    disabled={!promoCode || promoApplied || isApplyingPromo}
                  >
                    {isApplyingPromo ? "Applying..." : promoApplied ? "Applied" : "Apply"}
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span>₹{(subtotal / 100).toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Discount</span>
                      <span className="text-green-600">-₹{(discount / 100).toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span>₹{(shipping / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total</span>
                    <span>₹{(total / 100).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link href="/marketplace/checkout" onClick={onClose}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full" onClick={onClose}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
