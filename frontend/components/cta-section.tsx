"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GradientBlob } from "@/components/ui/gradient-blob"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <GradientBlob
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        colors={["#8B5CF6", "#6366F1", "#EC4899"]}
        size={600}
        opacity={0.1}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center md:text-left">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-lg">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  Ready to Make a Difference?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-white/90 md:text-xl"
                >
                  Join thousands of environmentally conscious individuals and organizations in our mission to reduce
                  e-waste and create a sustainable future.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/register">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                    Join Now
                  </Button>
                </Link>
                <Link href="/locate">
                  <Button
                    // variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
                  >
                    Find Drop-off Points
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

