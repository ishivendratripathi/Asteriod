import * as React from "react"
import Stars from "./Stars"
import Hero from "./Hero"
import { DeploymentSteps } from "./Process"
import { KeyFeatures } from "./KeyFeatures"
import Challenges from "./Challenges"
import Step123 from "./Step123"
import { InstallTabs } from "./Install"

export default function App() {
  return (
    <div className="max-w-6xl mx-auto">

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
          <Hero />

          <div className="space-y-32 md:space-y-48 lg:space-y-64">
            <Step123 />

            <DeploymentSteps />

            <KeyFeatures />

            <Challenges />

          </div>

        </div>
      </div>
    </div>
  )
}
