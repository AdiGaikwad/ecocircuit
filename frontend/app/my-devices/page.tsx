"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { GradientBlob } from "@/components/ui/gradient-blob"
import {
  Smartphone,
  Laptop,
  Tablet,
  Search,
  Plus,
  ArrowRight,
  Clock,
  Check,
  AlertTriangle,
  Recycle,
} from "lucide-react"
import Link from "next/link"

// Mock devices data
const devices = [
  {
    id: "device123",
    name: "My iPhone 13 Pro",
    type: "smartphone",
    manufacturer: "Apple",
    model: "iPhone 13 Pro",
    serialNumber: "C02ZW1YJLVCG",
    registrationDate: "2023-05-15",
    status: "active",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "device456",
    name: "Work Laptop",
    type: "laptop",
    manufacturer: "Dell",
    model: "XPS 15",
    serialNumber: "5CG1234ABC",
    registrationDate: "2023-04-10",
    status: "ready",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "device789",
    name: "Old iPad",
    type: "tablet",
    manufacturer: "Apple",
    model: "iPad Air 2",
    serialNumber: "DMPRX12345",
    registrationDate: "2023-03-22",
    status: "recycled",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function MyDevicesPage() {
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredDevices = filterStatus === "all" ? devices : devices.filter((device) => device.status === filterStatus)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 flex items-center">
            <Check className="h-3 w-3 mr-1" />
            Active
          </Badge>
        )
      case "ready":
        return (
          <Badge className="bg-amber-100 text-amber-800 flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Ready for Recycling
          </Badge>
        )
      case "recycled":
        return (
          <Badge className="bg-blue-100 text-blue-800 flex items-center">
            <Recycle className="h-3 w-3 mr-1" />
            Recycled
          </Badge>
        )
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            Unknown
          </Badge>
        )
    }
  }

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "smartphone":
        return <Smartphone className="h-5 w-5 text-gray-500" />
      case "laptop":
        return <Laptop className="h-5 w-5 text-gray-500" />
      case "tablet":
        return <Tablet className="h-5 w-5 text-gray-500" />
      default:
        return <Smartphone className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <main className="min-h-screen">
-
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
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Devices</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Manage your registered devices and their digital passports
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="relative w-full md:w-auto md:flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Search devices..." className="pl-10 border-gray-300 focus:border-purple-500" />
              </div>

              <div className="flex items-center space-x-4 w-full md:w-auto">
                <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setFilterStatus}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="ready">Ready</TabsTrigger>
                    <TabsTrigger value="recycled">Recycled</TabsTrigger>
                  </TabsList>
                </Tabs>

                <Link href="/device-registration">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Device
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {filteredDevices.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No devices found</h3>
                  <p className="text-gray-500 mb-6">
                    {filterStatus === "all"
                      ? "You haven't registered any devices yet."
                      : `You don't have any devices with "${filterStatus}" status.`}
                  </p>
                  <Link href="/device-registration">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">Register Your First Device</Button>
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {filteredDevices.map((device) => (
                    <motion.div
                      key={device.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                            {getDeviceIcon(device.type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{device.name}</h3>
                            <p className="text-gray-500 text-sm">
                              {device.manufacturer} {device.model}
                            </p>
                            <div className="flex items-center mt-1">
                              <p className="text-xs text-gray-500 mr-3">S/N: {device.serialNumber}</p>
                              {getStatusBadge(device.status)}
                            </div>
                          </div>
                        </div>
                        <div>
                          <Link href={`/digital-passport/${device.id}`}>
                            <Button
                              variant="ghost"
                              className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                            >
                              View Passport
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

