"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Mail, Smartphone, Calendar, Megaphone, Award, Save } from "lucide-react"

export function ProfileNotifications() {
  const [emailNotifications, setEmailNotifications] = useState({
    deviceRegistration: true,
    recyclingReminders: true,
    recyclingConfirmation: true,
    pointsEarned: true,
    levelUp: true,
    newAchievements: true,
    newsletter: false,
    promotions: false,
  })

  const [pushNotifications, setPushNotifications] = useState({
    deviceRegistration: true,
    recyclingReminders: true,
    recyclingConfirmation: true,
    pointsEarned: true,
    levelUp: true,
    newAchievements: true,
    appUpdates: true,
    promotions: false,
  })

  const [isChanged, setIsChanged] = useState(false)

  const handleEmailChange = (key: keyof typeof emailNotifications) => {
    setEmailNotifications((prev) => {
      const updated = { ...prev, [key]: !prev[key] }
      setIsChanged(true)
      return updated
    })
  }

  const handlePushChange = (key: keyof typeof pushNotifications) => {
    setPushNotifications((prev) => {
      const updated = { ...prev, [key]: !prev[key] }
      setIsChanged(true)
      return updated
    })
  }

  const handleSave = () => {
    // In a real app, save changes to the server
    setIsChanged(false)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </div>
            {isChanged && (
              <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email">
            <TabsList className="mb-6">
              <TabsTrigger value="email">
                <Mail className="h-4 w-4 mr-2" />
                Email Notifications
              </TabsTrigger>
              <TabsTrigger value="push">
                <Bell className="h-4 w-4 mr-2" />
                Push Notifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Account Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-device-registration" className="font-medium">
                            Device Registration
                          </Label>
                          <p className="text-sm text-gray-500">Receive confirmation when you register a new device</p>
                        </div>
                      </div>
                      <Switch
                        id="email-device-registration"
                        checked={emailNotifications.deviceRegistration}
                        onCheckedChange={() => handleEmailChange("deviceRegistration")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-recycling-reminders" className="font-medium">
                            Recycling Reminders
                          </Label>
                          <p className="text-sm text-gray-500">
                            Get reminders when your devices are ready for recycling
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="email-recycling-reminders"
                        checked={emailNotifications.recyclingReminders}
                        onCheckedChange={() => handleEmailChange("recyclingReminders")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <RecycleIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-recycling-confirmation" className="font-medium">
                            Recycling Confirmation
                          </Label>
                          <p className="text-sm text-gray-500">Receive confirmation when your device is recycled</p>
                        </div>
                      </div>
                      <Switch
                        id="email-recycling-confirmation"
                        checked={emailNotifications.recyclingConfirmation}
                        onCheckedChange={() => handleEmailChange("recyclingConfirmation")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Rewards & Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <CoinIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-points-earned" className="font-medium">
                            Points Earned
                          </Label>
                          <p className="text-sm text-gray-500">Get notified when you earn EcoTokens</p>
                        </div>
                      </div>
                      <Switch
                        id="email-points-earned"
                        checked={emailNotifications.pointsEarned}
                        onCheckedChange={() => handleEmailChange("pointsEarned")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <LevelUpIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-level-up" className="font-medium">
                            Level Up
                          </Label>
                          <p className="text-sm text-gray-500">Get notified when you reach a new level</p>
                        </div>
                      </div>
                      <Switch
                        id="email-level-up"
                        checked={emailNotifications.levelUp}
                        onCheckedChange={() => handleEmailChange("levelUp")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-new-achievements" className="font-medium">
                            New Achievements
                          </Label>
                          <p className="text-sm text-gray-500">Get notified when you earn new achievements</p>
                        </div>
                      </div>
                      <Switch
                        id="email-new-achievements"
                        checked={emailNotifications.newAchievements}
                        onCheckedChange={() => handleEmailChange("newAchievements")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Marketing & Updates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Megaphone className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-newsletter" className="font-medium">
                            Newsletter
                          </Label>
                          <p className="text-sm text-gray-500">
                            Receive our monthly newsletter with recycling tips and updates
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="email-newsletter"
                        checked={emailNotifications.newsletter}
                        onCheckedChange={() => handleEmailChange("newsletter")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <TagIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="email-promotions" className="font-medium">
                            Promotions & Offers
                          </Label>
                          <p className="text-sm text-gray-500">
                            Receive special offers and promotions from our partners
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="email-promotions"
                        checked={emailNotifications.promotions}
                        onCheckedChange={() => handleEmailChange("promotions")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="push">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Account Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Smartphone className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-device-registration" className="font-medium">
                            Device Registration
                          </Label>
                          <p className="text-sm text-gray-500">Receive confirmation when you register a new device</p>
                        </div>
                      </div>
                      <Switch
                        id="push-device-registration"
                        checked={pushNotifications.deviceRegistration}
                        onCheckedChange={() => handlePushChange("deviceRegistration")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-recycling-reminders" className="font-medium">
                            Recycling Reminders
                          </Label>
                          <p className="text-sm text-gray-500">
                            Get reminders when your devices are ready for recycling
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="push-recycling-reminders"
                        checked={pushNotifications.recyclingReminders}
                        onCheckedChange={() => handlePushChange("recyclingReminders")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <RecycleIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-recycling-confirmation" className="font-medium">
                            Recycling Confirmation
                          </Label>
                          <p className="text-sm text-gray-500">Receive confirmation when your device is recycled</p>
                        </div>
                      </div>
                      <Switch
                        id="push-recycling-confirmation"
                        checked={pushNotifications.recyclingConfirmation}
                        onCheckedChange={() => handlePushChange("recyclingConfirmation")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Rewards & Achievements</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <CoinIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-points-earned" className="font-medium">
                            Points Earned
                          </Label>
                          <p className="text-sm text-gray-500">Get notified when you earn EcoTokens</p>
                        </div>
                      </div>
                      <Switch
                        id="push-points-earned"
                        checked={pushNotifications.pointsEarned}
                        onCheckedChange={() => handlePushChange("pointsEarned")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <LevelUpIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-level-up" className="font-medium">
                            Level Up
                          </Label>
                          <p className="text-sm text-gray-500">Get notified when you reach a new level</p>
                        </div>
                      </div>
                      <Switch
                        id="push-level-up"
                        checked={pushNotifications.levelUp}
                        onCheckedChange={() => handlePushChange("levelUp")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-new-achievements" className="font-medium">
                            New Achievements
                          </Label>
                          <p className="text-sm text-gray-500">Get notified when you earn new achievements</p>
                        </div>
                      </div>
                      <Switch
                        id="push-new-achievements"
                        checked={pushNotifications.newAchievements}
                        onCheckedChange={() => handlePushChange("newAchievements")}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">App Updates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <RefreshIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-app-updates" className="font-medium">
                            App Updates
                          </Label>
                          <p className="text-sm text-gray-500">Get notified about new features and app updates</p>
                        </div>
                      </div>
                      <Switch
                        id="push-app-updates"
                        checked={pushNotifications.appUpdates}
                        onCheckedChange={() => handlePushChange("appUpdates")}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <TagIcon className="h-5 w-5 text-gray-500 mt-0.5" />
                        <div>
                          <Label htmlFor="push-promotions" className="font-medium">
                            Promotions & Offers
                          </Label>
                          <p className="text-sm text-gray-500">
                            Receive special offers and promotions from our partners
                          </p>
                        </div>
                      </div>
                      <Switch
                        id="push-promotions"
                        checked={pushNotifications.promotions}
                        onCheckedChange={() => handlePushChange("promotions")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function RecycleIcon({ className }: { className?: string }) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 4.875 9.5l3.418-4.096" />
      <path d="m7.196 9.5 1.607-2.485a1.81 1.81 0 0 1 3.43.378L14.39 12" />
      <path d="m14 16 3-3-3-3" />
    </svg>
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

function LevelUpIcon({ className }: { className?: string }) {
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
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 8h10" />
      <path d="M11 12h10" />
      <path d="M11 16h10" />
    </svg>
  )
}

function TagIcon({ className }: { className?: string }) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}

function RefreshIcon({ className }: { className?: string }) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}

