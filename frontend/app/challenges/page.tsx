"use client"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GradientBlob } from "@/components/ui/gradient-blob"
import { Button } from "@/components/ui/button"
import { Trophy, Building, BarChart3, Users, Award, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ChallengesPage() {
  return (
    <main className="min-h-screen">

      <div className="pt-24 pb-16 relative overflow-hidden">
        <GradientBlob
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
          colors={["#F59E0B", "#FBBF24", "#FCD34D"]}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Challenges</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Companies sponsor e-waste collection competitions with real-time leaderboards and ESG reporting
              integration, driving engagement and measurable environmental impact.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">How Corporate Challenges Work</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our corporate challenges platform enables businesses to sponsor e-waste collection competitions,
                engaging employees, customers, and communities while making a measurable environmental impact.
              </p>

              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-3 mr-4">
                    <Building className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Corporate Sponsorship</h3>
                    <p className="text-gray-700">
                      Companies sponsor challenges with custom goals, timeframes, and rewards, aligning with their
                      sustainability objectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-3 mr-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Team Formation</h3>
                    <p className="text-gray-700">
                      Participants join as individuals or teams, representing departments, schools, or community groups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-3 mr-4">
                    <BarChart3 className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                    <p className="text-gray-700">
                      Live leaderboards show progress, creating healthy competition and maintaining engagement
                      throughout the challenge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 rounded-full p-3 mr-4">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Recognition & Rewards</h3>
                    <p className="text-gray-700">
                      Winners receive recognition and rewards, while all participants contribute to meaningful
                      environmental impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                    Sponsor a Challenge
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
              <div className="relative w-full h-[500px] bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90%] max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 text-white">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">Tech4Good Challenge</h3>
                        <Trophy className="h-6 w-6" />
                      </div>
                      <p className="text-sm opacity-90 mb-4">Sponsored by EcoTech Industries</p>
                      <div className="bg-white/10 rounded-lg p-3 flex justify-between">
                        <div>
                          <p className="text-sm opacity-90">Time Remaining</p>
                          <p className="text-xl font-bold">14 days</p>
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Goal</p>
                          <p className="text-xl font-bold">5,000 kg</p>
                        </div>
                        <div>
                          <p className="text-sm opacity-90">Collected</p>
                          <p className="text-xl font-bold">3,245 kg</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Leaderboard</h4>

                      <div className="space-y-4">
                        {[
                          {
                            rank: 1,
                            team: "Circuit Breakers",
                            amount: "1,245 kg",
                            members: 12,
                          },
                          {
                            rank: 2,
                            team: "E-Warriors",
                            amount: "982 kg",
                            members: 8,
                          },
                          {
                            rank: 3,
                            team: "Recycle Rangers",
                            amount: "768 kg",
                            members: 15,
                          },
                          {
                            rank: 4,
                            team: "Green Bytes",
                            amount: "250 kg",
                            members: 6,
                          },
                        ].map((team, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`flex items-center justify-between p-3 rounded-lg ${
                              index === 0 ? "bg-amber-50 border border-amber-200" : "border border-gray-100"
                            }`}
                          >
                            <div className="flex items-center">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                  index === 0 ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                <span className="font-bold text-sm">{team.rank}</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{team.team}</p>
                                <p className="text-xs text-gray-500">{team.members} members</p>
                              </div>
                            </div>
                            <p className="font-bold text-gray-900">{team.amount}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 text-center">
                        <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50 w-full">
                          Join Challenge
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
            <h2 className="text-3xl font-bold mb-4">Benefits for Businesses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Corporate challenges offer multiple advantages for businesses committed to sustainability and social
              responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "ESG Reporting Integration",
                description:
                  "Challenge data seamlessly integrates with Environmental, Social, and Governance (ESG) reporting frameworks, providing verified metrics for sustainability reports.",
              },
              {
                title: "Brand Reputation",
                description:
                  "Demonstrate environmental leadership and commitment to sustainability, enhancing brand perception among consumers and stakeholders.",
              },
              {
                title: "Employee Engagement",
                description:
                  "Foster team building and purpose-driven engagement among employees through meaningful environmental action.",
              },
              {
                title: "Community Impact",
                description:
                  "Create positive change in local communities while building goodwill and strengthening community relationships.",
              },
              {
                title: "Supply Chain Improvement",
                description:
                  "Recover valuable materials from the waste stream, potentially creating circular economy opportunities within your industry.",
              },
              {
                title: "Marketing Opportunities",
                description:
                  "Gain authentic content for sustainability marketing and social media, showcasing real impact rather than greenwashing.",
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
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg opacity-90">
                See how companies have made a significant impact through our corporate challenges.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  company: "TechGiant Inc.",
                  challenge: "30-Day Device Drive",
                  result:
                    "Collected over 5,000 devices across 12 office locations, diverting 15 tons of e-waste from landfills.",
                  impact: "Equivalent to planting 250 trees in carbon offset.",
                },
                {
                  company: "EcoFinance Group",
                  challenge: "Banking on a Better Future",
                  result:
                    "Engaged 2,000+ employees and customers in a month-long challenge, collecting 8 tons of e-waste.",
                  impact: "Recovered precious metals valued at $12,000, donated to environmental education programs.",
                },
                {
                  company: "Metro University",
                  challenge: "Campus E-Cycle Competition",
                  result: "Friendly competition between 8 dormitories resulted in 3.5 tons of e-waste collection.",
                  impact: "Created a permanent e-waste collection program now running year-round on campus.",
                },
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <p className="text-lg font-medium mb-3">{story.challenge}</p>
                  <p className="opacity-90 mb-2">{story.result}</p>
                  <p className="opacity-90 font-medium">{story.impact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

