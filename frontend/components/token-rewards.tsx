"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coins, Recycle, Tag, Leaf } from "lucide-react"
import Link from "next/link"

export function TokenRewards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Earn EcoTokens for Recycling
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Get rewarded with cryptocurrency tokens when you return devices for recycling, redeemable for discounts or
            carbon credits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Recycle,
              title: "Recycle Devices",
              description: "Return your registered devices to any EcoCircuit collection point for proper recycling.",
              color: "from-green-500 to-emerald-500",
            },
            {
              icon: Coins,
              title: "Earn EcoTokens",
              description:
                "Receive blockchain-verified EcoTokens based on the device type, condition, and recyclable materials.",
              color: "from-purple-500 to-indigo-500",
            },
            {
              icon: Tag,
              title: "Get Discounts",
              description: "Redeem your tokens for discounts on new eco-friendly electronics from our partner brands.",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: Leaf,
              title: "Carbon Credits",
              description: "Convert tokens to carbon credits, offsetting your environmental footprint.",
              color: "from-amber-500 to-orange-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={index === 0 ? "/device-registration" : "/rewards"}>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold mb-4"
                  >
                    Token Economy
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-white/90 mb-6"
                  >
                    Our blockchain-based token system creates a circular economy that incentivizes responsible e-waste
                    disposal while providing tangible benefits to participants.
                  </motion.p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        stat: "250K+",
                        label: "EcoTokens Distributed",
                      },
                      {
                        stat: "₹15M",
                        label: "Value in Discounts",
                      },
                      {
                        stat: "45K",
                        label: "Carbon Credits Generated",
                      },
                      {
                        stat: "12K+",
                        label: "Active Token Holders",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      >
                        <p className="text-2xl font-bold">{item.stat}</p>
                        <p className="text-white/80 text-sm">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                            <Coins className="h-10 w-10 text-purple-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <TokenRing />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TokenRing() {
  return (
    <div className="absolute inset-0">
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="5,3"
          className="animate-spin-slow"
          style={{ animationDuration: "30s" }}
        />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 50 + 45 * Math.cos((angle * Math.PI) / 180)
          const y = 50 + 45 * Math.sin((angle * Math.PI) / 180)
          return <circle key={i} cx={x} cy={y} r="3" fill="#EC4899" className="animate-pulse" />
        })}
      </svg>
    </div>
  )
}

