import * as React from "react"
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Button } from "./components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "./utils"
// import { Badge } from "@/components/ui/badge"

export default function Challenges() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const challenges = [
    {
      title: "Scale",
      description: "Agents operating at millions of requests per second",
      icon: "⚡"
    },
    {
      title: "Complexity",
      description: "Complex interactions with humans and other agents",
      icon: "🔄"
    },
    {
      title: "Integration",
      description: "Execution of arbitrary code and human tools",
      icon: "🔧"
    },
    {
      title: "Evolution",
      description: "Self-evolving and adapting during runtime",
      icon: "🔄"
    }
  ]

  return (
    <section ref={containerRef} className="text-white min-h-screen ">
      <div className="text-center rounded-3xl backdrop-blur-sm space-y-24">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
          Asteroid is building the foundation for an agent-based future.
        </h2>
        {/* Subtitle */}
        <div className="space-y-8">
          <p className="text-gray-400 max-w-xl mx-auto">
            If you're deploying agents and running into challenges relating to reliability, safety or performance, we'd love to chat.
          </p>
          <div>
            <Link to="https://calendly.com/founders-asteroid-hhaf/30min">
              <Button
                size="lg"
                className={cn(
                  "relative group",
                  "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-indigo-500 before:to-purple-500",
                  "before:opacity-100",
                  "text-white",
                  "transition-all duration-300",
                  "hover:scale-105 active:scale-95",
                  "shadow-lg shadow-indigo-500/25",
                  "overflow-hidden"
                )}
              >
                <span className="relative z-10 flex items-center font-bold tracking-wide">
                  Get in touch
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </span>
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

function getChallengeDescription(challenge: string): string {
  switch (challenge) {
    case "Comprehensive Supervision":
      return "Lack of effective solutions for real-time monitoring and control of AI agent actions at scale"
    case "Advanced Simulation":
      return "Insufficient tools for simulating complex scenarios to test agent behavior before deployment"
    case "Continuous Evaluation":
      return "Difficulty in implementing ongoing, automated evaluation of deployed agents to maintain performance and safety"
    case "Regression Testing":
      return "Lack of robust systems for ensuring that agent improvements don't introduce new failure modes"
    default:
      return ""
  }
}

