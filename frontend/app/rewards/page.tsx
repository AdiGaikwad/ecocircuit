"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Button } from "@/components/ui/button"
import { Gift, Sparkles, TreePine, ShoppingBag, Ticket, BadgePercent, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RewardsPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          colors={["#10B981", "#34D399", "#6EE7B7"]}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dynamic Rewards</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Our AI-powered reward system tailors incentives based on your preferences and recycling history, offering
              personalized benefits for your e-waste contributions.
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
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold mb-6">Personalized Rewards</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our AI analyzes your preferences, recycling history, and environmental impact to offer rewards that
                truly matter to you. The more you recycle, the more personalized and valuable your rewards become.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <ShoppingBag className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Retail Discounts</h3>
                    <p className="text-gray-700">
                      Exclusive discounts at eco-friendly retailers and electronics stores, tailored to your shopping
                      preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Environmental Donations</h3>
                    <p className="text-gray-700">
                      Convert your recycling points into donations to plant trees or support conservation efforts
                      aligned with your values.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Ticket className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exclusive Experiences</h3>
                    <p className="text-gray-700">
                      Earn tickets to sustainability events, workshops, and experiences based on your interests.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <BadgePercent className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Service Credits</h3>
                    <p className="text-gray-700">
                      Receive credits for electronics repair services, tech support, or digital subscriptions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Start Earning Rewards
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{opacity: 1, x: 0}}
              
              // whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-[500px] bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[320px] bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Your Rewards</h3>
                        <Gift className="h-6 w-6" />
                      </div>
                      <div className="flex items-center">
                        <div className="bg-white/20 rounded-full p-2 mr-3">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Available Points</p>
                          <p className="text-2xl font-bold">1,250</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Recommended for You</h4>

                      <div className="space-y-4">
                        {[
                          {
                            title: "15% Off at EcoTech Store",
                            points: "500 points",
                            icon: ShoppingBag,
                            color: "bg-blue-100 text-blue-600",
                          },
                          {
                            title: "Plant 5 Trees",
                            points: "750 points",
                            icon: TreePine,
                            color: "bg-green-100 text-green-600",
                          },
                          {
                            title: "Sustainable Fashion Coupon",
                            points: "1,000 points",
                            icon: Ticket,
                            color: "bg-purple-100 text-purple-600",
                          },
                        ].map((reward, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center">
                              <div className={`rounded-full p-2 mr-3 ${reward.color}`}>
                                <reward.icon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{reward.title}</p>
                                <p className="text-sm text-gray-500">{reward.points}</p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-green-600 hover:text-green-700 hover:bg-green-50 p-0 h-8 w-8"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 text-center">
                        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 w-full">
                          View All Rewards
                        </Button>
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
            <h2 className="text-3xl font-bold mb-4">How Our AI Tailors Your Rewards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our sophisticated AI system analyzes multiple factors to create a personalized reward experience that
              motivates continued participation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Preference Analysis",
                description:
                  "The AI learns your preferences through your interactions, reward selections, and survey responses.",
              },
              {
                title: "Recycling Patterns",
                description:
                  "Your recycling frequency, volume, and types of e-waste are analyzed to offer relevant incentives.",
              },
              {
                title: "Environmental Impact",
                description:
                  "The system calculates the environmental benefit of your contributions to provide meaningful context.",
              },
              {
                title: "Community Trends",
                description:
                  "Rewards are optimized based on what's working well for users with similar profiles and interests.",
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
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-green-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact of Dynamic Rewards</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our personalized reward system has demonstrated significant benefits for both users and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                stat: "68%",
                description: "Increase in e-waste collection rates among active reward program participants",
              },
              {
                stat: "3.2x",
                description: "Higher user retention compared to traditional recycling programs",
              },
              {
                stat: "91%",
                description: "User satisfaction rate with personalized reward recommendations",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <h3 className="text-4xl font-bold mb-3">{item.stat}</h3>
                <p className="text-lg opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

