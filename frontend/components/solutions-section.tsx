"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Smartphone, Gift, Trophy, Palette, ArrowRight } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Smartphone,
    title: "AR Collection Points",
    description: "Locate drop-off points via AR navigation. Scan QR codes to log your contributions.",
    link: "/ar-collection",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gift,
    title: "Dynamic Rewards",
    description: "AI tailors rewards based on your preferences, from discounts to tree-planting donations.",
    link: "/rewards",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Trophy,
    title: "Corporate Challenges",
    description: "Companies sponsor e-waste collection competitions with real-time leaderboards.",
    link: "/challenges",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Palette,
    title: "E-Waste to Art",
    description: "Transform e-waste into functional art, raising awareness and reducing landfill burden.",
    link: "/e-waste-art",
    color: "from-purple-500 to-pink-500",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Innovative Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tackling the e-waste crisis through technology, community engagement, and creative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
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
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}
                >
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link href={solution.link}>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

