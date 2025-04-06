"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Edit,
  Settings,
  Bell,
  Shield,
  BarChart4,
  History,
  Smartphone,
} from "lucide-react";
import { GradientBlob } from "@/components/ui/gradient-blob";

interface ProfileHeaderProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
    joinDate: string;
    level: string;
    totalDevices: number;
    totalRecycled: number;
    totalPoints: number;
  };
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const months = [null, "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
export function ProfileHeader({
  user,
  activeTab,
  setActiveTab,
}: ProfileHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-md mb-8">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-r from-purple-600 to-teal-500"></div>
      <GradientBlob
        className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-20"
        colors={["#5cf6d0", "#639ef1", "#EC4899"]}
        size={300}
      />

      <div className="relative pt-8 px-6 pb-6">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 mt-12">
          <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
            {user.avatar ? (
              <AvatarImage src={user.avatar} alt={user.name} />
            ) : (
              <AvatarFallback className="text-2xl bg-purple-100 text-purple-600">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <p className="text-white">{user.email}</p>
                <div className="flex items-center mt-1">
                  <Badge className="bg-purple-100 text-purple-800 mr-2">
                    {user.level}
                  </Badge>
                  <span className="text-sm text-white">
                    Member since {months[new Date(user.joinDate).getUTCMonth()]}{" "}
                    {new Date(user.joinDate).getFullYear()}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="h-9">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="h-9">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-purple-50 rounded-lg p-4 flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
              <Smartphone className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Registered Devices</p>
              <p className="text-xl font-bold">{user.totalDevices}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-green-50 rounded-lg p-4 flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <RecycleIcon className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Devices Recycled</p>
              <p className="text-xl font-bold">{user.totalRecycled}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-blue-50 rounded-lg p-4 flex items-center"
          >
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <CoinIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">EcoTokens Balance</p>
              <p className="text-xl font-bold">{user.totalPoints}</p>
            </div>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="overview">
              <BarChart4 className="h-4 w-4 mr-2 md:hidden lg:block" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="devices">
              <Smartphone className="h-4 w-4 mr-2 md:hidden lg:block" />
              <span>Devices</span>
            </TabsTrigger>
            <TabsTrigger value="activity">
              <History className="h-4 w-4 mr-2 md:hidden lg:block" />
              <span>Activity</span>
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2 md:hidden lg:block" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="h-4 w-4 mr-2 md:hidden lg:block" />
              <span>Security</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
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
  );
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
  );
}
