"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Smartphone, Search, Calendar, Download, Recycle, Check } from "lucide-react"

interface ProfileActivityProps {
  activities: {
    id: string
    type: string
    description: string
    date: string
    time: string
    points?: number
    deviceId?: string
    deviceName?: string
    location?: string
    verified: boolean
  }[]
}

export function ProfileActivity({ activities }: ProfileActivityProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [dateRange, setDateRange] = useState("all")

  const filteredActivities = activities.filter((activity) => {
    // Filter by search query
    const matchesSearch =
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (activity.deviceName && activity.deviceName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (activity.location && activity.location.toLowerCase().includes(searchQuery.toLowerCase()))

    // Filter by type
    const matchesType = filterType === "all" || activity.type === filterType

    // Filter by date range (simplified for this example)
    const matchesDate = dateRange === "all" // In a real app, implement date filtering

    return matchesSearch && matchesType && matchesDate
  })

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "registration":
        return <Smartphone className="h-5 w-5 text-purple-600" />
      case "recycling":
        return <Recycle className="h-5 w-5 text-green-600" />
      case "reward":
        return <CoinIcon className="h-5 w-5 text-amber-600" />
      default:
        return <Calendar className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Activity History</CardTitle>
              <CardDescription>Track your recycling activities and rewards</CardDescription>
            </div>
            <Button variant="outline" className="h-9">
              <Download className="h-4 w-4 mr-2" />
              Export History
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="relative w-full md:w-auto md:flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search activities..."
                className="pl-10 border-gray-300 focus:border-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-4 w-full md:w-auto">
              <Select defaultValue="all" onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Activities</SelectItem>
                  <SelectItem value="registration">Registrations</SelectItem>
                  <SelectItem value="recycling">Recycling</SelectItem>
                  <SelectItem value="reward">Rewards</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all" onValueChange={setDateRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">Last Week</SelectItem>
                  <SelectItem value="month">Last Month</SelectItem>
                  <SelectItem value="year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredActivities.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No activities found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                {searchQuery || filterType !== "all" || dateRange !== "all"
                  ? "Try adjusting your search or filters to find what you're looking for."
                  : "You haven't recorded any activities yet. Register or recycle a device to get started."}
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 border-l-2 border-gray-200"></div>
              <div className="space-y-6">
                {filteredActivities.map((activity) => (
                  <div key={activity.id} className="relative ml-12">
                    <div className="absolute -left-12 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-gray-200 z-10">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <div className="flex items-start gap-2">
                            <p className="font-medium">{activity.description}</p>
                            {activity.verified && (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                <Check className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 text-sm text-gray-500 mt-1">
                            <span>{activity.date}</span>
                            <span className="hidden sm:inline mx-2">•</span>
                            <span>{activity.time}</span>
                            {activity.location && (
                              <>
                                <span className="hidden sm:inline mx-2">•</span>
                                <span>{activity.location}</span>
                              </>
                            )}
                          </div>

                          {activity.deviceName && (
                            <div className="flex items-center mt-2">
                              <Smartphone className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-sm text-gray-500">{activity.deviceName}</span>
                            </div>
                          )}
                        </div>

                        {activity.points && (
                          <Badge className="bg-blue-100 text-blue-800 ml-auto">+{activity.points} points</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredActivities.length > 0 && (
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-500">
                Showing {filteredActivities.length} of {activities.length} activities
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

function CoinIcon({ className }: { className?: string }) {
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

