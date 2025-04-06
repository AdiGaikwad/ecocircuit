"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Award, Leaf, Smartphone, Recycle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { ImpactChart } from "@/components/profile/impact-chart"

interface ProfileOverviewProps {
  user: {
    name: string
    level: string
    points: number
    pointsToNextLevel: number
    nextLevel: string
    progress: number
    achievements: {
      id: string
      title: string
      description: string
      date: string
      icon: string
    }[]
    impact: {
      totalRecycled: number
      co2Saved: number
      waterSaved: number
      treesEquivalent: number
      monthlyData: {
        month: string
        recycled: number
      }[]
    }
    recentDevices: {
      id: string
      name: string
      type: string
      manufacturer: string
      model: string
      status: string
      date: string
    }[]
    recentActivity: {
      id: string
      type: string
      description: string
      date: string
      points?: number
    }[]
  }
}

export function ProfileOverview({ user }: ProfileOverviewProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Environmental Impact</CardTitle>
              <CardDescription>Your contribution to a sustainable future</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="chart">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="chart">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Chart
                    </TabsTrigger>
                    <TabsTrigger value="stats">
                      <Leaf className="h-4 w-4 mr-2" />
                      Stats
                    </TabsTrigger>
                  </TabsList>

                  <select className="text-sm border rounded-md px-2 py-1 bg-white">
                    <option>Last 6 Months</option>
                    <option>Last Year</option>
                    <option>All Time</option>
                  </select>
                </div>

                <TabsContent value="chart" className="h-[300px]">
                  <ImpactChart data={user.impact.monthlyData} />
                </TabsContent>

                <TabsContent value="stats">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <Recycle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-700">{user.impact.totalRecycled} kg</p>
                      <p className="text-xs text-green-600">E-waste Recycled</p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <svg
                        className="h-6 w-6 text-blue-600 mx-auto mb-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M7 9L12 12L17 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-2xl font-bold text-blue-700">{user.impact.co2Saved} kg</p>
                      <p className="text-xs text-blue-600">CO₂ Emissions Saved</p>
                    </div>

                    <div className="bg-cyan-50 rounded-lg p-4 text-center">
                      <svg
                        className="h-6 w-6 text-cyan-600 mx-auto mb-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <p className="text-2xl font-bold text-cyan-700">{user.impact.waterSaved} L</p>
                      <p className="text-xs text-cyan-600">Water Saved</p>
                    </div>

                    <div className="bg-amber-50 rounded-lg p-4 text-center">
                      <svg
                        className="h-6 w-6 text-amber-600 mx-auto mb-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 22V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path
                          d="M12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path d="M12 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M4 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M22 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M18 4L20 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6 4L4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <p className="text-2xl font-bold text-amber-700">{user.impact.treesEquivalent}</p>
                      <p className="text-xs text-amber-600">Trees Equivalent</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Level Progress</CardTitle>
              <CardDescription>
                {user.points} points towards {user.nextLevel}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-purple-100 mb-4">
                    <div className="text-purple-600 font-bold text-md">{user.level}</div>
                  </div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-500">EcoChampion</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{user.points} points</span>
                    <span>{user.points + user.pointsToNextLevel} points</span>
                  </div>
                  <Progress value={user.progress} className="h-2" />
                  <p className="text-xs text-center text-gray-500">
                    {user.pointsToNextLevel} more points to reach {user.nextLevel}
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  View Rewards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Recent Devices</CardTitle>
                  <CardDescription>Your recently registered devices</CardDescription>
                </div>
                <Link href="/my-devices">
                  <Button variant="ghost" size="sm" className="text-xs h-8">
                    View All
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.recentDevices.length === 0 ? (
                  <div className="text-center py-6">
                    <Smartphone className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">No devices registered yet</p>
                    <Link href="/device-registration">
                      <Button variant="link" className="mt-2">
                        Register your first device
                      </Button>
                    </Link>
                  </div>
                ) : (
                  user.recentDevices.map((device) => (
                    <div
                      key={device.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <Smartphone className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-xs text-gray-500">
                            {device.manufacturer} {device.model}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge
                          className={`
                          ${
                            device.status === "active"
                              ? "bg-green-100 text-green-800"
                              : device.status === "ready"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-blue-100 text-blue-800"
                          }
                        `}
                        >
                          {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your recycling milestones</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-xs h-8">
                  View All
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.achievements.length === 0 ? (
                  <div className="text-center py-6">
                    <Award className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">No achievements yet</p>
                    <p className="text-xs text-gray-400 mt-1">Start recycling to earn achievements</p>
                  </div>
                ) : (
                  user.achievements.slice(0, 3).map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Award className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-xs text-gray-500 mb-1">{achievement.description}</p>
                        <p className="text-xs text-gray-400">{achievement.date}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Card>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest recycling activities</CardDescription>
              </div>
              <Link href="/profile/activity">
                <Button variant="ghost" size="sm" className="text-xs h-8">
                  View All
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.recentActivity.length === 0 ? (
                <div className="text-center py-6">
                  <svg
                    className="h-10 w-10 text-gray-300 mx-auto mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <p className="text-gray-500">No activity recorded yet</p>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 border-l-2 border-gray-200"></div>
                  <div className="space-y-6">
                    {user.recentActivity.map((activity) => (
                      <div key={activity.id} className="relative ml-12">
                        <div className="absolute -left-12 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 border-2 border-white z-10">
                          {activity.type === "registration" ? (
                            <Smartphone className="h-3 w-3 text-purple-600" />
                          ) : activity.type === "recycling" ? (
                            <Recycle className="h-3 w-3 text-purple-600" />
                          ) : (
                            <CoinIcon className="h-3 w-3 text-purple-600" />
                          )}
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <p className="font-medium">{activity.description}</p>
                            {activity.points && (
                              <Badge className="bg-blue-100 text-blue-800">+{activity.points} points</Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
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

