import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import * as React from "react"
import { GithubIcon, CalendarIcon, MailIcon, TerminalIcon, BookIcon, LibraryIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"
import { MailingList } from "./components/mailing_list"
import { Link } from "react-router-dom"
import Stars from "./Stars"
import Hero from "./Hero"
import Nav from "./Nav"
import Terminal from "./Terminal"
import { DeploymentSteps } from "./Process"
import { KeyFeatures } from "./KeyFeatures"
import Challenges from "./Challenges"
import Step123 from "./Step123"
import Footer from "./Footer"
import { InstallTabs } from "./Install"

export default function Component() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("founders@asteroid.ai")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-screen">
      {/* Stars as background */}
      <div className="fixed inset-0 z-0">
        <Stars />
      </div>
      {/* Install Tabs */}
      <div className="fixed bottom-8 right-8 z-50 hidden xl:block">
        <InstallTabs />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <Nav />
        <Hero />

        <div className="space-y-32 md:space-y-48 lg:space-y-64">
          <Step123 />

          <DeploymentSteps />

          <KeyFeatures />

          <Challenges />

        </div>

      </div>
    </div>
  )
}

