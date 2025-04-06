import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <div className="text-2xl font-bold flex items-center">
        {/* EcoCircuit */}
        <Image
        src={"/logo.png"}
        className="w-[150px] h-auto"
        height={50}
        width={150}
        alt="Logo"
        />
        {/* <span className="ml-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="14" width="6" height="6" rx="1" fill="#8B5CF6" />
            <rect x="4" y="14" width="6" height="6" rx="1" fill="#8B5CF6" />
            <rect x="14" y="4" width="6" height="6" rx="1" fill="#8B5CF6" />
            <path d="M7 7C7 5.89543 7.89543 5 9 5H10V10H5V9C5 7.89543 5.89543 7 7 7Z" fill="#8B5CF6" />
            <path d="M10 10H14V14H10V10Z" fill="#8B5CF6" fillOpacity="0.5" />
          </svg>
        </span> */}
      </div>
    </Link>
  )
}

