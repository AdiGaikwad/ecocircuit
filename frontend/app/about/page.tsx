"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Recycle, Globe, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          colors={["#8B5CF6", "#6366F1", "#EC4899"]}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Discover EcoCircuit – your hub for finding e-waste facilities nearby. Our map makes it simple to locate
              certified recycling centers. Earn credits for responsibly disposing of your e-waste and help protect the
              planet. Join us in making a difference, one device at a time. Explore EcoCircuit now.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  At EcoCircuit, we're on a mission to combat the growing e-waste crisis through innovative technology,
                  community engagement, and sustainable practices. We believe that proper e-waste management is not just
                  an environmental necessity but an opportunity to recover valuable resources and create a circular
                  economy.
                </p>
                <p className="text-gray-700">
                  By making e-waste recycling accessible, rewarding, and educational, we aim to divert millions of
                  electronic devices from landfills and ensure they're properly recycled or repurposed, minimizing
                  environmental impact and maximizing resource recovery.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 md:p-12 text-white flex items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">The E-Waste Crisis</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Recycle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                      <p>The world is projected to generate 74 million metric tons of e-waste by 2030.</p>
                    </li>
                    <li className="flex items-start">
                      <Globe className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                      <p>Only 17.4% of e-waste is formally documented as properly collected and recycled.</p>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                      <p>
                        E-waste contains harmful substances and chemicals, contributing to toxic landfills and
                        environmental degradation.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're tackling the e-waste crisis through a multi-faceted approach that combines technology, incentives,
              and community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Accessibility",
                description:
                  "Making e-waste recycling convenient through AR-powered location services and an extensive network of collection points.",
              },
              {
                icon: Award,
                title: "Incentivization",
                description:
                  "Rewarding responsible disposal through our dynamic rewards system and gamified corporate challenges.",
              },
              {
                icon: Users,
                title: "Education & Awareness",
                description:
                  "Raising awareness about e-waste impacts and promoting creative solutions like our E-Waste to Art initiative.",
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
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">Alignment with UN SDG 12</h3>
                <p className="text-gray-700 mb-4">
                  Our initiatives directly support the United Nations Sustainable Development Goal 12: Responsible
                  Consumption and Production, which aims to ensure sustainable consumption and production patterns.
                </p>
                <p className="text-gray-700">
                  Through our platform, we're contributing to the reduction of waste generation through prevention,
                  reduction, recycling, and reuse—key targets of SDG 12.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-4">Environmental Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduction of toxic substances in landfills</li>
                  <li>• Conservation of natural resources through materials recovery</li>
                  <li>• Decreased energy consumption compared to virgin material extraction</li>
                  <li>• Reduced greenhouse gas emissions associated with manufacturing</li>
                  <li>• Promotion of circular economy principles</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

