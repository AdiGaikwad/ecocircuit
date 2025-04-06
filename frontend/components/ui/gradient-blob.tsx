"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface GradientBlobProps {
  className?: string
  colors?: string[]
  speed?: number
  size?: number
  opacity?: number
}

export function GradientBlob({
  className,
  colors = ["#4F46E5", "#8B5CF6", "#EC4899"],
  speed = 0.5,
  size = 700,
  opacity = 0.15,
}: GradientBlobProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = size
    canvas.height = size

    let time = 0
    let animationFrameId: number

    const gradient = ctx.createLinearGradient(0, 0, size, size)
    colors.forEach((color, index) => {
      gradient.addColorStop(index / (colors.length - 1), color)
    })

    const render = () => {
      time += 0.003 * speed

      ctx.clearRect(0, 0, size, size)
      ctx.globalAlpha = opacity

      // Draw multiple blobs with different frequencies
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()

        const frequency = 0.6 + i * 0.2
        const amplitude = 0.3 - i * 0.05

        for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
          const xOffset = Math.cos(angle * frequency + time) * amplitude
          const yOffset = Math.sin(angle * 2 * frequency + time) * amplitude
          const radius = size * 0.3 * (1 + xOffset + yOffset)

          const x = size / 2 + Math.cos(angle) * radius
          const y = size / 2 + Math.sin(angle) * radius

          if (angle === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.closePath()
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [colors, speed, size, opacity])

  return <canvas ref={canvasRef} className={cn("absolute pointer-events-none", className)} width={size} height={size} />
}

