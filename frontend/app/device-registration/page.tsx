"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Laptop,
  Tablet,
  Tv,
  Watch,
  Headphones,
  Camera,
  Printer,
  QrCode,
  Scan,
  Upload,
  ArrowRight,
  Check,
} from "lucide-react"
import Link from "next/link"

export default function DeviceRegistrationPage() {
  const [registrationStep, setRegistrationStep] = useState(1)
  const [registrationMethod, setRegistrationMethod] = useState("manual")
  const [deviceType, setDeviceType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Redirect to digital passport page after success
      setTimeout(() => {
        window.location.href = "/digital-passport/device123"
      }, 2000)
    }, 1500)
  }

  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
          size={600}
          opacity={0.1}
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Register Your Device</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Create a blockchain-verified digital passport for your electronic device to track its lifecycle and earn
              rewards when recycling.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
                <p className="text-gray-600 mb-6">
                  Your device has been successfully registered on the blockchain. You can now view its digital passport.
                </p>
                <Link href="/digital-passport/device123">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    View Digital Passport
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Device Registration</h2>
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          registrationStep >= 1 ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        1
                      </div>
                      <div className={`w-16 h-1 ${registrationStep >= 2 ? "bg-purple-600" : "bg-gray-200"}`}></div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          registrationStep >= 2 ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        2
                      </div>
                      <div className={`w-16 h-1 ${registrationStep >= 3 ? "bg-purple-600" : "bg-gray-200"}`}></div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          registrationStep >= 3 ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        3
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {registrationStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h3 className="text-xl font-semibold mb-4">Select Device Type</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {[
                          { icon: Smartphone, label: "Smartphone" },
                          { icon: Laptop, label: "Laptop" },
                          { icon: Tablet, label: "Tablet" },
                          { icon: Tv, label: "TV" },
                          { icon: Watch, label: "Smartwatch" },
                          { icon: Headphones, label: "Headphones" },
                          { icon: Camera, label: "Camera" },
                          { icon: Printer, label: "Printer" },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                              deviceType === item.label
                                ? "border-purple-500 bg-purple-50"
                                : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
                            }`}
                            onClick={() => setDeviceType(item.label)}
                          >
                            <div className="flex flex-col items-center text-center">
                              <item.icon
                                className={`h-8 w-8 mb-2 ${
                                  deviceType === item.label ? "text-purple-600" : "text-gray-500"
                                }`}
                              />
                              <span
                                className={deviceType === item.label ? "font-medium text-purple-700" : "text-gray-700"}
                              >
                                {item.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        <Button
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => setRegistrationStep(2)}
                          disabled={!deviceType}
                        >
                          Continue
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {registrationStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h3 className="text-xl font-semibold mb-4">Registration Method</h3>

                      <Tabs
                        defaultValue="manual"
                        className="w-full"
                        onValueChange={(value) => setRegistrationMethod(value)}
                      >
                        <TabsList className="grid grid-cols-3 w-full">
                          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                          <TabsTrigger value="scan">Scan QR/Barcode</TabsTrigger>
                          <TabsTrigger value="upload">Upload Receipt</TabsTrigger>
                        </TabsList>

                        <TabsContent value="manual" className="pt-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="manufacturer">Manufacturer</Label>
                                <Select defaultValue="apple">
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select manufacturer" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="samsung">Samsung</SelectItem>
                                    <SelectItem value="google">Google</SelectItem>
                                    <SelectItem value="sony">Sony</SelectItem>
                                    <SelectItem value="lg">LG</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="model">Model</Label>
                                <Input id="model" placeholder="e.g. iPhone 13 Pro" />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="serial">Serial Number</Label>
                                <Input id="serial" placeholder="e.g. C02ZW1YJLVCG" />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="purchase-date">Purchase Date</Label>
                                <Input id="purchase-date" type="date" />
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="scan" className="pt-6">
                          <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                            <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h4 className="text-lg font-medium mb-2">Scan Device QR Code or Barcode</h4>
                            <p className="text-gray-500 mb-6">
                              Use your camera to scan the QR code or barcode on your device or its packaging.
                            </p>
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                              <Scan className="h-5 w-5 mr-2" />
                              Start Scanning
                            </Button>
                          </div>
                        </TabsContent>

                        <TabsContent value="upload" className="pt-6">
                          <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                            <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h4 className="text-lg font-medium mb-2">Upload Purchase Receipt</h4>
                            <p className="text-gray-500 mb-6">
                              Upload your purchase receipt or invoice to automatically extract device information.
                            </p>
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                              <Upload className="h-5 w-5 mr-2" />
                              Upload Receipt
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>

                      <div className="flex justify-between mt-6">
                        <Button variant="outline" onClick={() => setRegistrationStep(1)}>
                          Back
                        </Button>
                        <Button
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => setRegistrationStep(3)}
                        >
                          Continue
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {registrationStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h3 className="text-xl font-semibold mb-4">Confirm Details</h3>

                      <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <h4 className="font-medium text-lg mb-4">Device Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Device Type</p>
                            <p className="font-medium">{deviceType}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Manufacturer</p>
                            <p className="font-medium">Apple</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Model</p>
                            <p className="font-medium">iPhone 13 Pro</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Serial Number</p>
                            <p className="font-medium font-mono">C02ZW1YJLVCG</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Purchase Date</p>
                            <p className="font-medium">2023-05-15</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Registration Method</p>
                            <p className="font-medium capitalize">{registrationMethod}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-6 mb-6 border border-purple-100">
                        <div className="flex items-start">
                          <div className="bg-purple-100 rounded-full p-2 mr-4">
                            <Coins className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">Potential Rewards</h4>
                            <p className="text-gray-600 mb-2">
                              When you eventually recycle this device through EcoCircuit, you'll earn:
                            </p>
                            <p className="text-xl font-bold text-purple-700">250-350 EcoTokens</p>
                            <p className="text-sm text-gray-500">
                              Exact amount depends on device condition at time of recycling
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start mb-6">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                          I confirm that the information provided is accurate and I agree to the{" "}
                          <Link href="/terms" className="text-purple-600 hover:text-purple-700">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-purple-600 hover:text-purple-700">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setRegistrationStep(2)}>
                          Back
                        </Button>
                        <Button
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processing...
                            </>
                          ) : (
                            <>
                              Register Device
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function Coins({ className }: { className?: string }) {
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
      <circle cx="8" cy="8" r="7" />
      <circle cx="16" cy="16" r="7" />
    </svg>
  )
}

