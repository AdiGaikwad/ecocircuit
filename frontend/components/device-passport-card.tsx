"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Smartphone,
  Cpu,
  Battery,
  Monitor,
  HardDrive,
  Check,
  AlertTriangle,
  Clock,
  Recycle,
  ArrowRight,
  ShieldCheck,
  Truck,
  PenToolIcon as Tool,
  RotateCw,
} from "lucide-react"

interface DevicePassportCardProps {
  device: {
    id: string
    name: string
    type: string
    manufacturer: string
    model: string
    serialNumber: string
    manufactureDate: string
    components: {
      name: string
      status: "verified" | "warning" | "recycled"
      recyclable: boolean
      lastUpdated: string
    }[]
    history: {
      date: string
      event: string
      location: string
      verified: boolean
    }[]
    recyclingStatus: "active" | "ready" | "recycled"
    tokenReward: number
    carbonSaved: number
  }
}

export function DevicePassportCard({ device }: DevicePassportCardProps) {
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <Check className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      case "recycled":
        return <Recycle className="h-4 w-4 text-blue-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800 border-green-200"
      case "warning":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "recycled":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRecyclingStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "ready":
        return "bg-amber-100 text-amber-800"
      case "recycled":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRecyclingStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "In Use"
      case "ready":
        return "Ready for Recycling"
      case "recycled":
        return "Recycled"
      default:
        return "Unknown"
    }
  }

  const getEventIcon = (event: string) => {
    if (event.includes("Manufactured")) return <Truck className="h-4 w-4" />
    if (event.includes("Repair")) return <Tool className="h-4 w-4" />
    if (event.includes("Upgrade")) return <RotateCw className="h-4 w-4" />
    if (event.includes("Recycled")) return <Recycle className="h-4 w-4" />
    return <Clock className="h-4 w-4" />
  }

  return (
    <div className="max-w-md mx-auto">
      <div
        className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateY(${rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold mb-1">{device.name}</h3>
              <p className="text-white/80 text-sm">
                {device.manufacturer} {device.model}
              </p>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-white/70">Device ID</p>
              <p className="font-mono text-sm">
                {device.id.substring(0, 8)}...{device.id.substring(device.id.length - 4)}
              </p>
            </div>
            <Badge className={`${getRecyclingStatusColor(device.recyclingStatus)}`}>
              {getRecyclingStatusText(device.recyclingStatus)}
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Type</p>
                  <p className="font-medium">{device.type}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Serial Number</p>
                  <p className="font-medium font-mono">{device.serialNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Manufacture Date</p>
                  <p className="font-medium">{device.manufactureDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Recycling Value</p>
                  <p className="font-medium">{device.tokenReward} EcoTokens</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Environmental Impact</p>
                <div className="bg-green-50 rounded-lg p-3 flex items-center">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <div>
                    <p className="font-medium text-green-800">{device.carbonSaved} kg CO₂ saved</p>
                    <p className="text-xs text-green-700">by proper recycling of this device</p>
                  </div>
                </div>
              </div>

              {device.recyclingStatus === "ready" && (
                <div className="pt-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Recycle This Device
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="components" className="p-6">
            <div className="space-y-4">
              {device.components.map((component, index) => (
                <div key={index} className="flex items-start justify-between p-3 rounded-lg border border-gray-100">
                  <div className="flex items-start">
                    <ComponentIcon name={component.name} className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">{component.name}</p>
                      <p className="text-xs text-gray-500">Last updated: {component.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(component.status)}
                    <Badge className={`ml-2 ${getStatusColor(component.status)}`}>
                      {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="p-6">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 border-l-2 border-gray-200"></div>
              <div className="space-y-6">
                {device.history.map((event, index) => (
                  <div key={index} className="relative ml-12">
                    <div className="absolute -left-12 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 border-2 border-white z-10">
                      {getEventIcon(event.event)}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <p className="font-medium">{event.event}</p>
                        {event.verified && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Check className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{event.location}</p>
                      <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ComponentIcon({ name, className }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "processor":
    case "cpu":
      return <Cpu className={className} />
    case "battery":
      return <Battery className={className} />
    case "display":
    case "screen":
      return <Monitor className={className} />
    case "storage":
    case "hard drive":
    case "ssd":
      return <HardDrive className={className} />
    default:
      return <Smartphone className={className} />
  }
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
  )
}

