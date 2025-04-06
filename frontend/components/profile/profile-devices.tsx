"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Laptop,
  Tablet,
  Tv,
  Search,
  Plus,
  ArrowRight,
  Check,
  AlertTriangle,
  Recycle,
  Filter,
} from "lucide-react"
import Link from "next/link"

interface ProfileDevicesProps {
  devices: {
    id: string
    name: string
    type: string
    manufacturer: string
    model: string
    serialNumber: string
    registrationDate: string
    status: string
    image?: string
  }[]
}

export function ProfileDevices({ devices }: ProfileDevicesProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const filteredDevices = devices.filter((device) => {
    // Filter by search query
    const matchesSearch =
      device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      device.serialNumber.toLowerCase().includes(searchQuery.toLowerCase())

    // Filter by status
    const matchesStatus = filterStatus === "all" || device.status === filterStatus

    // Filter by type
    const matchesType = filterType === "all" || device.type === filterType

    return matchesSearch && matchesStatus && matchesType
  })

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
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
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
      case "tv":
        return <Tv className="h-5 w-5 text-gray-500" />
      default:
        return <Smartphone className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>My Devices</CardTitle>
              <CardDescription>Manage your registered devices</CardDescription>
            </div>
            <Link href="/device-registration">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Register New Device
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-auto md:flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search devices..."
                className="pl-10 border-gray-300 focus:border-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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

              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {filteredDevices.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <Smartphone className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No devices found</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                {searchQuery || filterStatus !== "all" || filterType !== "all"
                  ? "Try adjusting your search or filters to find what you're looking for."
                  : "You haven't registered any devices yet. Register your first device to get started."}
              </p>
              {!searchQuery && filterStatus === "all" && filterType === "all" && (
                <Link href="/device-registration">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Register Your First Device</Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDevices.map((device) => (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        {getDeviceIcon(device.type)}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{device.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <p className="text-sm text-gray-500">
                            {device.manufacturer} {device.model}
                          </p>
                          <p className="text-xs text-gray-400 sm:before:content-['•'] sm:before:mx-2 sm:before:text-gray-300">
                            S/N: {device.serialNumber}
                          </p>
                        </div>
                        <div className="flex items-center mt-1">
                          <p className="text-xs text-gray-400 mr-3">Registered on {device.registrationDate}</p>
                          {getStatusBadge(device.status)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                      <Link href={`/digital-passport/${device.id}`}>
                        <Button variant="outline" size="sm">
                          View Passport
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredDevices.length > 0 && (
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-500">
                Showing {filteredDevices.length} of {devices.length} devices
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

