"use client"

import { useEffect, useRef } from "react"

interface ImpactChartProps {
  data: {
    month: string
    recycled: number
  }[]
}

export function ImpactChart({ data }: ImpactChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = chartRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Chart dimensions
    const width = rect.width
    const height = rect.height
    const padding = { top: 40, right: 20, bottom: 40, left: 40 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Find max value for scaling
    const maxValue = Math.max(...data.map((d) => d.recycled)) * 1.2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, height - padding.bottom)
    ctx.lineTo(width - padding.right, height - padding.bottom)
    ctx.stroke()

    // Draw grid lines
    const gridLines = 5
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.setLineDash([5, 5])
    for (let i = 1; i <= gridLines; i++) {
      const y = padding.top + (chartHeight / gridLines) * i
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width - padding.right, y)
    }
    ctx.stroke()
    ctx.setLineDash([])

    // Draw bars
    const barWidth = (chartWidth / data.length) * 0.6
    const barSpacing = (chartWidth / data.length) * 0.4

    data.forEach((d, i) => {
      const x = padding.left + (chartWidth / data.length) * i + barSpacing / 2
      const barHeight = (d.recycled / maxValue) * chartHeight
      const y = height - padding.bottom - barHeight

      // Draw bar gradient
      const gradient = ctx.createLinearGradient(x, y, x, height - padding.bottom)
      gradient.addColorStop(0, "#8b5cf6")
      gradient.addColorStop(1, "#6366f1")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0])
      ctx.fill()

      // Draw value
      ctx.fillStyle = "#6366f1"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`${d.recycled}kg`, x + barWidth / 2, y - 10)

      // Draw month label
      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(d.month, x + barWidth / 2, height - padding.bottom + 20)
    })

    // Draw y-axis labels
    ctx.fillStyle = "#64748b"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "right"
    for (let i = 0; i <= gridLines; i++) {
      const value = maxValue - (maxValue / gridLines) * i
      const y = padding.top + (chartHeight / gridLines) * i
      ctx.fillText(`${Math.round(value)}kg`, padding.left - 10, y + 3)
    }

    // Draw title
    ctx.fillStyle = "#1e293b"
    ctx.font = "bold 14px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Monthly E-Waste Recycled (kg)", width / 2, 20)
  }, [data])

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

