"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, Wallet, Truck, Shield, Check } from 'lucide-react';
import Link from "next/link";

interface CheckoutFormProps {
  onComplete: () => void;
}

export function CheckoutForm({ onComplete }: CheckoutFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Shipping details
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    // Payment details
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    savePaymentInfo: false,
    // Additional
    orderNotes: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onComplete();
    }, 2000);
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${currentStep >= 1 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
              currentStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {currentStep > 1 ? <Check className="h-5 w-5" /> : 1}
            </div>
            <span className="font-medium">Shipping</span>
          </div>
          <div className={`h-1 flex-grow mx-4 ${currentStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center ${currentStep >= 2 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
              currentStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {currentStep > 2 ? <Check className="h-5 w-5" /> : 2}
            </div>
            <span className="font-medium">Payment</span>
          </div>
          <div className={`h-1 flex-grow mx-4 ${currentStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
          <div className={`flex items-center ${currentStep >= 3 ? 'text-purple-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
              currentStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
            <span className="font-medium">Confirmation</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pincode">PIN Code</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="orderNotes">Order Notes (Optional)</Label>
              <Textarea
                id="orderNotes"
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleInputChange}
                placeholder="Special instructions for delivery"
                className="min-h-[100px]"
              />
            </div>
            
            <div className="flex justify-end">
              <Button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={handleNextStep}
              >
                Continue to Payment
              </Button>
            </div>
          </motion.div>
        )}
        
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold">Payment Method</h2>
            
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-purple-500 transition-colors">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card" className="flex items-center cursor-pointer flex-grow">
                  <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Credit / Debit Card</span>
                </Label>
                <div className="flex space-x-1">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-purple-500 transition-colors">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex items-center cursor-pointer flex-grow">
                  <Wallet className="h-5 w-5 mr-2 text-purple-600" />
                  <span>UPI Payment</span>
                </Label>
                <div className="flex space-x-1">
                  <div className="w-8 h-6 bg-gray-200 rounded"></div>
                  <div className="w-8 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:border-purple-500 transition-colors">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex items-center cursor-pointer">
                  <Truck className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Cash on Delivery</span>
                </Label>
              </div>
            </RadioGroup>
            
            {paymentMethod === "credit-card" && (
              <div className="space-y-4 border-t pt-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="savePaymentInfo"
                    checked={formData.savePaymentInfo}
                    onCheckedChange={(checked) => 
                      handleCheckboxChange("savePaymentInfo", checked as boolean)
                    }
                  />
                  <Label htmlFor="savePaymentInfo" className="text-sm">
                    Save this card for future payments
                  </Label>
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
              <Shield className="h-5 w-5 text-purple-600" />
              <p className="text-sm text-gray-600">
                Your payment information is secure. We use industry-standard encryption to protect your data.
              </p>
            </div>
            
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevStep}
              >
                Back to Shipping
              </Button>
              <Button
                type="button"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={handleNextStep}
              >
                Review Order
              </Button>
            </div>
          </motion.div>
        )}
        
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold">Review Your Order</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Shipping Information</h3>
                <p className="text-gray-700">{formData.fullName}</p>
                <p className="text-gray-700">{formData.address}</p>
                <p className="text-gray-700">{formData.city}, {formData.state} {formData.pincode}</p>
                <p className="text-gray-700">{formData.phone}</p>
                <p className="text-gray-700">{formData.email}</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Payment Method</h3>
                <div className="flex items-center">
                  {paymentMethod === "credit-card" && (
                    <>
                      <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
                      <span>Credit Card ending in {formData.cardNumber.slice(-4)}</span>
                    </>
                  )}
                  {paymentMethod === "upi" && (
                    <>
                      <Wallet className="h-5 w-5 mr-2 text-purple-600" />
                      <span>UPI Payment</span>
                    </>
                  )}
                  {paymentMethod === "cod" && (
                    <>
                      <Truck className="h-5 w-5 mr-2 text-purple-600" />
                      <span>Cash on Delivery</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹3,797.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>₹99.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span>₹683.46</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t">
                    <span>Total</span>
                    <span>₹4,579.46</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the <Link href="/marketplace/terms" className="text-purple-600 hover:underline">Terms and Conditions</Link> and <Link href="/marketplace/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevStep}
              >
                Back to Payment
              </Button>
              <Button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
