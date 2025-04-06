"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { ArrowRight, Recycle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20" ref={containerRef}>
      {/* Background gradient blobs */}
      <GradientBlob
        className="top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-10"
        colors={["#8B5CF6", "#6366F1", "#EC4899"]}
        size={800}
      />
      <GradientBlob
        className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3 opacity-10"
        colors={["#6366F1", "#8B5CF6", "#EC4899"]}
        size={700}
      />

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Renew.</span>
              <span className="block text-purple-600">Recycle.</span>
              <span className="block">Reconnect.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Empowering Change, One Circuit at a Time: Find Your Nearest E-Waste Facility and Join the Recycling
              Revolution!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/locate">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                  Find Drop-off Points
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-purple-100 to-white rounded-2xl shadow-lg overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Recycle className="w-64 h-64 text-purple-200" />
              </motion.div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">74 Million Metric Tons</h2>
                  <p className="text-gray-600 mb-6">
                    of e-waste projected by 2030. Your small actions can make a big difference.
                  </p>
                  <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                    {["Reduce", "Reuse", "Recycle"].map((action, index) => (
                      <motion.div
                        key={action}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                      >
                        <p className="font-medium text-purple-600">{action}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

