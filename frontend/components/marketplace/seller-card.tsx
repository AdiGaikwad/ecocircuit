"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Link from "next/link";

interface SellerCardProps {
  seller: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    reviewCount: number;
    responseRate: number;
    responseTime: string;
    location: string;
    joinDate: string;
    isVerified: boolean;
    productCount: number;
  };
  isDetailed?: boolean;
}

export function SellerCard({ seller, isDetailed = false }: SellerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <CardContent className={`${isDetailed ? 'p-6' : 'p-4'}`}>
          <div className="flex items-center">
            <Avatar className={`${isDetailed ? 'h-16 w-16' : 'h-10 w-10'} mr-3`}>
              {seller.avatar ? (
                <AvatarImage src={seller.avatar} alt={seller.name} />
              ) : (
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  {seller.name.charAt(0)}
                </AvatarFallback>
              )}
            </Avatar>
            <div>
              <div className="flex items-center">
                <h3 className={`font-medium ${isDetailed ? 'text-xl' : 'text-base'}`}>{seller.name}</h3>
                {seller.isVerified && (
                  <Badge className="ml-2 bg-green-100 text-green-800 flex items-center">
                    <ShieldCheck className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-3.5 w-3.5 ${
                        star <= Math.round(seller.rating)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm ml-1">{seller.rating.toFixed(1)}</span>
                <span className="text-xs text-gray-500 ml-1">({seller.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
          
          {isDetailed && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Response Time</p>
                  <p className="text-xs text-gray-500">{seller.responseTime}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Response Rate</p>
                  <p className="text-xs text-gray-500">{seller.responseRate}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-xs text-gray-500">{seller.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Member Since</p>
                  <p className="text-xs text-gray-500">{seller.joinDate}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className={`${isDetailed ? 'px-6 pb-6 pt-0' : 'p-4 pt-0'}`}>
          {isDetailed ? (
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Total Products</span>
                <span className="font-medium">{seller.productCount}</span>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Seller
              </Button>
            </div>
          ) : (
            <Link href={`/marketplace/seller/${seller.id}`} className="w-full">
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

function Calendar({ className }: { className?: string }) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
