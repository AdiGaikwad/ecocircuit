"use client";

import { useState } from "react";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileOverview } from "@/components/profile/profile-overview";
import { ProfileDevices } from "@/components/profile/profile-devices";
import { ProfileActivity } from "@/components/profile/profile-activity";
import { ProfileNotifications } from "@/components/profile/profile-notifications";
import { ProfileSecurity } from "@/components/profile/profile-security";
import { useAuth } from "@/context/AuthContext";

// Mock user data


// Mock devices data
const devicesData = [
  {
    id: "device123",
    name: "My iPhone 13 Pro",
    type: "smartphone",
    manufacturer: "Apple",
    model: "iPhone 13 Pro",
    serialNumber: "C02ZW1YJLVCG",
    registrationDate: "May 15, 2023",
    status: "active",
  },
  {
    id: "device456",
    name: "Work Laptop",
    type: "laptop",
    manufacturer: "Dell",
    model: "XPS 15",
    serialNumber: "5CG1234ABC",
    registrationDate: "June 10, 2023",
    status: "ready",
  },
  {
    id: "device789",
    name: "Old iPad",
    type: "tablet",
    manufacturer: "Apple",
    model: "iPad Air 2",
    serialNumber: "DMPRX12345",
    registrationDate: "July 22, 2023",
    status: "recycled",
  },
];

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
];

 
export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");
  const { user, loading } = useAuth();
  const userData = {
    name: user.firstName,
    email: user.email,
    avatar: "",
    joinDate: user.joined,
    level: "EcoChampion",
    totalDevices: 3,
    totalRecycled: 2,
    totalPoints: 1250,
    points: 1250,
    pointsToNextLevel: 750,
    nextLevel: "EcoMaster",
    progress: 62,
    achievements: [
      {
        id: "1",
        title: "First Device Registered",
        description: "Registered your first electronic device",
        date: "May 15, 2023",
        icon: "smartphone",
      },
      {
        id: "2",
        title: "First Recycling",
        description: "Recycled your first electronic device",
        date: "July 22, 2023",
        icon: "recycle",
      },
      {
        id: "3",
        title: "Carbon Saver",
        description: "Saved 25kg of CO₂ emissions through recycling",
        date: "August 10, 2023",
        icon: "leaf",
      },
    ],
    impact: {
      totalRecycled: 45,
      co2Saved: 125,
      waterSaved: 2500,
      treesEquivalent: 8,
      monthlyData: [
        { month: "Jan", recycled: 5 },
        { month: "Feb", recycled: 8 },
        { month: "Mar", recycled: 12 },
        { month: "Apr", recycled: 7 },
        { month: "May", recycled: 10 },
        { month: "Jun", recycled: 15 },
      ],
    },
    recentDevices: [
      {
        id: "device123",
        name: "My iPhone 13 Pro",
        type: "smartphone",
        manufacturer: "Apple",
        model: "iPhone 13 Pro",
        status: "active",
        date: "May 15, 2023",
      },
      {
        id: "device456",
        name: "Work Laptop",
        type: "laptop",
        manufacturer: "Dell",
        model: "XPS 15",
        status: "ready",
        date: "June 10, 2023",
      },
      {
        id: "device789",
        name: "Old iPad",
        type: "tablet",
        manufacturer: "Apple",
        model: "iPad Air 2",
        status: "recycled",
        date: "July 22, 2023",
      },
    ],
    recentActivity: [
      {
        id: "act1",
        type: "registration",
        description: "Registered iPhone 13 Pro",
        date: "May 15, 2023",
        time: "10:30 AM",
        points: 50,
      },
      {
        id: "act2",
        type: "recycling",
        description: "Recycled iPad Air 2",
        date: "July 22, 2023",
        time: "2:15 PM",
        points: 200,
      },
      {
        id: "act3",
        type: "reward",
        description: "Redeemed 100 EcoTokens for discount",
        date: "August 5, 2023",
        time: "11:45 AM",
      },
    ],
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        {!loading && user ? (
          <div className="container mx-auto px-4">
            <ProfileHeader
              user={{
                name: user.firstName,
                email: user.email,
                avatar: userData.avatar,
                joinDate: user.joined,
                level: userData.level,
                totalDevices: userData.totalDevices,
                totalRecycled: userData.totalRecycled,
                totalPoints: userData.totalPoints,
              }}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {activeTab === "overview" && <ProfileOverview user={userData} />}

            {activeTab === "devices" && (
              <ProfileDevices devices={devicesData} />
            )}

            {activeTab === "activity" && (
              <ProfileActivity activities={activityData} />
            )}

            {activeTab === "notifications" && <ProfileNotifications />}

            {activeTab === "security" && <ProfileSecurity />}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </main>
  );
}
