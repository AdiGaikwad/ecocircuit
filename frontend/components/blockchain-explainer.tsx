"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Database, LinkIcon, Clock } from "lucide-react"
import Link from "next/link"

export function BlockchainExplainer() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Blockchain-Powered Device Tracking
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Every electronic device gets a unique digital passport, creating a transparent record from manufacturing to
            recycling.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: Database,
                  title: "Immutable Records",
                  description:
                    "Every transaction and movement of your device is permanently recorded on the blockchain, creating an unalterable history.",
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Verified Authenticity",
                  description:
                    "Digital passports verify the authenticity of components and help combat counterfeit parts in the electronics supply chain.",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: LinkIcon,
                  title: "Complete Lifecycle Tracking",
                  description:
                    "Follow your device's journey from manufacturing to recycling, with every repair, resale, and upgrade documented.",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Clock,
                  title: "Real-time Updates",
                  description:
                    "Receive notifications about your device's status, maintenance recommendations, and optimal recycling time.",
                  color: "bg-amber-100 text-amber-600",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <div className={`rounded-full p-3 mr-4 ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/device-registration">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Register Your Device
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
            <div className="relative w-full h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <BlockchainAnimation />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function BlockchainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = (canvas.width = 500)
    const height = (canvas.height = 500)

    // Block class
    class Block {
      x: number
      y: number
      size: number
      color: string
      connections: Block[]
      targetX: number
      targetY: number
      speed: number

      constructor(x: number, y: number, size: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.color = color
        this.connections = []
        this.targetX = x
        this.targetY = y
        this.speed = 0.05
      }

      update() {
        // Move towards target
        this.x += (this.targetX - this.x) * this.speed
        this.y += (this.targetY - this.y) * this.speed
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw connections
        for (const block of this.connections) {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(block.x, block.y)
          ctx.strokeStyle = "rgba(139, 92, 246, 0.3)"
          ctx.lineWidth = 2
          ctx.stroke()
        }

        // Draw block
        ctx.fillStyle = this.color
        ctx.shadowColor = "rgba(139, 92, 246, 0.5)"
        ctx.shadowBlur = 15
        ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
        ctx.shadowBlur = 0
      }

      setTarget(x: number, y: number) {
        this.targetX = x
        this.targetY = y
      }

      connect(block: Block) {
        this.connections.push(block)
      }
    }

    // Create blocks
    const blocks: Block[] = []
    const colors = ["#8B5CF6", "#6366F1", "#EC4899", "#10B981"]

    for (let i = 0; i < 7; i++) {
      const block = new Block(
        width / 2 + (Math.random() - 0.5) * 200,
        height / 2 + (Math.random() - 0.5) * 200,
        40,
        colors[i % colors.length],
      )
      blocks.push(block)
    }

    // Connect blocks in a chain
    for (let i = 0; i < blocks.length - 1; i++) {
      blocks[i].connect(blocks[i + 1])
    }

    // Animation loop
    let time = 0
    function animate() {
      ctx.clearRect(0, 0, width, height)

      time += 0.01

      // Update block positions
      for (let i = 0; i < blocks.length; i++) {
        const angle = time + i * ((Math.PI * 2) / blocks.length)
        const radius = 150
        const x = width / 2 + Math.cos(angle) * radius
        const y = height / 2 + Math.sin(angle) * radius
        blocks[i].setTarget(x, y)
        blocks[i].update()
      }

      // Draw blocks (connections first, then blocks)
      for (const block of blocks) {
        block.draw(ctx)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup
    }
  }, [])

  return <canvas ref={canvasRef} width={500} height={500} />
}

