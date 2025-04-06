"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Button } from "@/components/ui/button"
import { Smartphone, MapPin, QrCode, Navigation, BarChart4, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ARCollectionPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          colors={["#6366F1", "#8B5CF6", "#EC4899"]}
          size={600}
          opacity={0.1}
        />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AR Collection Points</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Locate e-waste drop-off points with augmented reality navigation. Simply scan a QR code at the bin to log
              your contribution and earn rewards.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{opacity: 1, x: 0}}

              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Open the App</h3>
                    <p className="text-gray-700">
                      Launch the EcoCircuit app on your smartphone and tap on the "Find Drop-off Points" button.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discover Nearby Points</h3>
                    <p className="text-gray-700">
                      The app will show you the nearest e-waste collection points based on your current location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Navigation className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AR Navigation</h3>
                    <p className="text-gray-700">
                      Use the AR view to get real-time directions to your chosen collection point with visual cues
                      overlaid on your camera feed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <QrCode className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scan & Log</h3>
                    <p className="text-gray-700">
                      Once you arrive, scan the QR code on the collection bin to log your e-waste contribution and earn
                      rewards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <BarChart4 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Track Your Impact</h3>
                    <p className="text-gray-700">
                      Monitor your recycling history, environmental impact, and rewards in your personal dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/locate">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Find Drop-off Points
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[280px] h-[600px] bg-black rounded-[36px] border-[8px] border-gray-800 overflow-hidden shadow-xl">
                    <div className="relative h-full w-full bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
                      {/* Mock AR interface */}
                      <div className="absolute inset-0 flex flex-col">
                        <div className="h-12 bg-black/20 flex items-center justify-between px-4">
                          <span className="text-white text-sm">AR View</span>
                          <span className="text-white text-sm">12:34 PM</span>
                        </div>

                        <div className="flex-1 relative">
                          {/* AR overlay elements */}
                          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500/80 text-white px-4 py-2 rounded-lg flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="text-sm">E-Waste Bin 250m</span>
                          </div>

                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-blue-500 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          </div>

                          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-blue-900 px-4 py-3 rounded-xl shadow-lg w-5/6">
                            <h4 className="font-bold text-sm mb-1">Community E-Waste Center</h4>
                            <p className="text-xs text-gray-700 mb-2">Open: 9AM - 6PM • 250m away</p>
                            <div className="flex items-center text-xs text-blue-600">
                              <Navigation className="h-3 w-3 mr-1" />
                              <span>Navigate</span>
                            </div>
                          </div>
                        </div>

                        <div className="h-16 bg-black/20 flex items-center justify-around px-4">
                          <div className="flex flex-col items-center">
                            <MapPin className="h-5 w-5 text-white" />
                            <span className="text-white text-xs mt-1">Map</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <QrCode className="h-5 w-5 text-white" />
                            <span className="text-white text-xs mt-1">Scan</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <BarChart4 className="h-5 w-5 text-white" />
                            <span className="text-white text-xs mt-1">Stats</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of AR Collection</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our augmented reality approach to e-waste collection offers numerous advantages for users and the
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Increased Accessibility",
                description:
                  "Makes finding e-waste collection points intuitive and accessible for everyone, regardless of their familiarity with the area.",
              },
              {
                title: "Verified Contributions",
                description:
                  "QR code scanning ensures accurate tracking of e-waste disposal, creating a transparent and accountable system.",
              },
              {
                title: "Gamified Experience",
                description:
                  "Turns responsible e-waste disposal into an engaging, interactive experience that encourages regular participation.",
              },
              {
                title: "Real-time Updates",
                description:
                  "Collection points can update their status (e.g., capacity, operating hours) in real-time, improving user experience.",
              },
              {
                title: "Data Collection",
                description:
                  "Provides valuable insights on e-waste disposal patterns, helping optimize collection networks and resources.",
              },
              {
                title: "Reduced Search Time",
                description:
                  "Minimizes the time and effort needed to find appropriate disposal locations, removing barriers to responsible recycling.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

