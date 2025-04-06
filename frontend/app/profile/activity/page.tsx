"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProfileActivity } from "@/components/profile/profile-activity"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock activity data
const activityData = [
  {
    id: "act1",
    type: "registration",
    description: "Registered iPhone 13 Pro",
    date: "May 15, 2023",
    time: "10:30 AM",
    deviceId: "device123",
    deviceName: "iPhone 13 Pro",
    location: "Mumbai, India",
    verified: true,
    points: 50,
  },
  {
    id: "act2",
    type: "registration",
    description: "Registered Dell XPS 15 Laptop",
    date: "June 10, 2023",
    time: "3:45 PM",
    deviceId: "device456",
    deviceName: "Dell XPS 15",
    location: "Mumbai, India",
    verified: true,
    points: 50,
  },
  {
    id: "act3",
    type: "recycling",
    description: "Recycled iPad Air 2",
    date: "July 22, 2023",
    time: "2:15 PM",
    deviceId: "device789",
    deviceName: "iPad Air 2",
    location: "EcoCircuit Center, Mumbai",
    verified: true,
    points: 200,
  },
  {
    id: "act4",
    type: "reward",
    description: "Redeemed 100 EcoTokens for discount",
    date: "August 5, 2023",
    time: "11:45 AM",
    verified: true,
  },
  {
    id: "act5",
    type: "reward",
    description: "Earned 'First Recycling' achievement",
    date: "July 22, 2023",
    time: "2:20 PM",
    verified: true,
    points: 100,
  },
  {
    id: "act6",
    type: "registration",
    description: "Updated device information for iPhone 13 Pro",
    date: "June 2, 2023",
    time: "9:15 AM",
    deviceId: "device123",
    deviceName: "iPhone 13 Pro",
    location: "Mumbai, India",
    verified: true,
  },
  {
    id: "act7",
    type: "reward",
    description: "Earned 'Carbon Saver' achievement",
    date: "August 10, 2023",
    time: "4:30 PM",
    verified: true,
    points: 150,
  },
]

export default function ActivityPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/profile">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Profile
              </Button>
            </Link>

            <h1 className="text-3xl font-bold mt-4">Activity History</h1>
            <p className="text-gray-600">View your complete recycling and reward history</p>
          </div>

          <ProfileActivity activities={activityData} />
        </div>
      </div>

    </main>
  )
}

