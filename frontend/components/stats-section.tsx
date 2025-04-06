"use client"
import { motion } from "framer-motion"
import { Trash2, Recycle, Users, Award } from "lucide-react"

const stats = [
  {
    icon: Trash2,
    value: "74M",
    label: "Metric Tons",
    description: "Projected e-waste by 2030",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Recycle,
    value: "17.4%",
    label: "Recycled",
    description: "Global e-waste recycling rate",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    value: "15K+",
    label: "Users",
    description: "Joined our recycling network",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Award,
    value: "500+",
    label: "Collection Points",
    description: "Available worldwide",
    color: "from-purple-500 to-violet-500",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Measurable Impact</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Together, we're tackling the e-waste crisis through innovative solutions and community action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-lg font-medium text-gray-900 mb-2">{stat.label}</p>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

