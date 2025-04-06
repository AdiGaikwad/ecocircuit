"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { DevicePassportCard } from "@/components/device-passport-card"
import { ArrowLeft, Share2, Download, QrCode } from "lucide-react"
import Link from "next/link"

// Mock device data
const deviceData = {
  id: "0x7a69c0d72eb53c9f8c9a6d6e6b6d6e6b6d6e6b6d",
  name: "My iPhone 13 Pro",
  type: "Smartphone",
  manufacturer: "Apple",
  model: "iPhone 13 Pro",
  serialNumber: "C02ZW1YJLVCG",
  manufactureDate: "2022-09-15",
  components: [
    {
      name: "Processor",
      status: "verified",
      recyclable: true,
      lastUpdated: "2023-05-15",
    },
    {
      name: "Battery",
      status: "warning",
      recyclable: true,
      lastUpdated: "2023-05-15",
    },
    {
      name: "Display",
      status: "verified",
      recyclable: true,
      lastUpdated: "2023-05-15",
    },
    {
      name: "Storage",
      status: "verified",
      recyclable: true,
      lastUpdated: "2023-05-15",
    },
  ],
  history: [
    {
      date: "2022-09-10",
      event: "Manufactured",
      location: "Shenzhen, China",
      verified: true,
    },
    {
      date: "2022-09-20",
      event: "Sold to Retailer",
      location: "Mumbai, India",
      verified: true,
    },
    {
      date: "2022-10-05",
      event: "Purchased by Consumer",
      location: "Mumbai, India",
      verified: true,
    },
    {
      date: "2023-02-15",
      event: "Battery Replacement",
      location: "Authorized Service Center, Mumbai",
      verified: true,
    },
  ],
  recyclingStatus: "active",
  tokenReward: 300,
  carbonSaved: 25.4,
}

export default function DigitalPassportPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
          size={600}
          opacity={0.1}
        />

        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/my-devices">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to My Devices
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Passport</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your device's blockchain-verified digital identity and lifecycle record
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <DevicePassportCard device={deviceData} />
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6">Actions</h2>

                  <div className="space-y-4">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
                      <Share2 className="h-5 w-5 mr-3" />
                      Share Digital Passport
                    </Button>

                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-5 w-5 mr-3" />
                      Export as PDF
                    </Button>

                    <Button variant="outline" className="w-full justify-start">
                      <QrCode className="h-5 w-5 mr-3" />
                      View QR Code
                    </Button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold mb-4">Blockchain Verification</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Transaction Hash</p>
                      <p className="font-mono text-xs break-all">0x7a69c0d72eb53c9f8c9a6d6e6b6d6e6b6d6e6b6d</p>

                      <p className="text-sm text-gray-600 mt-4 mb-2">Verified On</p>
                      <p className="font-medium">May 15, 2023 at 14:32 UTC</p>

                      <div className="mt-4 flex justify-center">
                        <Button variant="outline" size="sm" className="text-xs">
                          View on Blockchain Explorer
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold mb-4">Need Help?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Have questions about your device's digital passport or recycling options?
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full">
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

