import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import * as React from "react"
import { GithubIcon, CalendarIcon, MailIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs"

export default function Component() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("devs@entropy-labs.ai")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const features = [
    {
      title: "Real-time Monitoring",
      description: "Monitor and log agent execution with real-time, granular model and action traces.",
      tasks: ["Monitor Agent Behavior", "Detect Milestones", "Investigate Real-time Insights"]
    },
    {
      title: "Supervision Policy Enforcement",
      description: "Define agent goals and policies, control access and execution at a granular level.",
      tasks: ["Control Access & Execution", "Define Agent Goals", "Escalate to Humans"]
    },
    {
      title: "Simulation & Testing",
      description: "Test and simulate agent behavior before real-world deployment.",
      tasks: ["Simulate & Evaluate", "Test Agent Deployment", "Detect Failure Modes"]
    },
    {
      title: "Cognitive Architecture Evaluation",
      description: "Evaluate and update cognitive architectures using comprehensive logged data.",
      tasks: ["Improve Agents", "Evaluate Architectures", "Maintain Agent Capabilities"]
    }
  ]

  const tabsContent = [
    {
      title: "Agent Developers",
      value: "developers",
      challenge: "Creating reliable and safe AI agents for complex, critical tasks.",
      benefits: [
        "Enforce precise control over agent capabilities, ensuring safe development and deployment",
        "Uncover failure modes pre-deployment through comprehensive simulations",
        "Auto-generate test cases and conduct regression testing, accelerating development",
        "Rapidly iterate designs with real-time monitoring and granular insights",
        "Optimize agent performance using detailed execution traces"
      ]
    },
    {
      title: "Agent Operators",
      value: "operators",
      challenge: "Safely deploying and maintaining AI agents in production while ensuring consistent performance.",
      benefits: [
        "Implement fine-grained supervision policies for live environments",
        "Monitor agent actions in real-time, detecting anomalies instantly",
        "Escalate critical decisions to human operators seamlessly",
        "Track key milestones and interactions for compliance and auditing",
        "Safely update deployed architectures without disrupting functionality"
      ]
    },
    {
      title: "Evaluation Researchers",
      value: "researchers",
      challenge: "Assessing agent capabilities, benchmarking performance, and identifying improvement areas.",
      benefits: [
        "Unprecedented control and visibility for thorough capability assessments",
        "Tools to simulate and track various agent scenarios and milestones",
        "Automatic generation of domain-specific evaluations from agent traces",
        "Comprehensive logged data for in-depth decision-making analysis",
        "Advanced tools to compare different cognitive architectures and designs"
      ]
    }
  ]

  return (
    <div className="container mx-auto space-y-16 pt-36">
      <Card className="outline-none shadow-none border-none">
        <CardHeader className="px-0 pb-12">
          <CardTitle className="">
            <div className="flex flex-row items-center justify-between">
              <p className="text-4xl font-bold">
                Entropy Labs
              </p>
              <div className="flex flex-col items-end gap-2">
                <div className="flex flex-row items-center gap-8">
                  <button
                    onClick={copyEmail}
                    className="text-sm text-muted-foreground font-mono font-normal tracking-wide hover:text-foreground transition-colors relative flex items-center gap-2"
                  >
                    <MailIcon className="h-4 w-4" />
                    copy email
                    {copied && (
                      <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-white text-xs py-1 px-2 rounded">
                        Copied!
                      </span>
                    )}
                  </button>
                  <a
                    href="https://calendly.com/david-mlcoch-entropy-labs/entropy-labs-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground font-mono font-normal tracking-wide hover:text-foreground transition-colors relative flex items-center gap-2"
                  >
                    <CalendarIcon className="h-4 w-4" />
                    book demo
                  </a>

                  <a href="https://github.com/EntropyLabsAI/sentinel" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="https://img.shields.io/github/stars/EntropyLabsAI/sentinel?style=social" alt="GitHub stars" />
                  </a>
                </div>
              </div>
            </div>
          </CardTitle>
          <CardDescription className="text-lg">Supervision and evaluation for agentic systems</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <p className="px-0">
            Entropy Labs enables <b className="text-foreground">supervision and control of AI agents</b>, unlocking broad deployment across complex and critical domains. We supervise agents during experimentation and deployment, surfacing critical information to developers, automatically enforcing <b className="text-foreground">supervision policies</b>, and creating domain-specific evaluations.
            This empowers agent operators to <b className="text-foreground">flag and mitigate unexpected behaviours</b>, uncover failure modes, and significantly reduce development time while enhancing agent reliability. Our system leverages agent traces to automatically generate evaluations, conduct regression tests, and iteratively improve cognitive architectures.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col h-full shadow-none rounded-none">
            <CardHeader>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription className="text-sm">{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow content-end">
              <ul className=" space-y-2 text-sm font-semibold text-muted-foreground">
                {feature.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-100 p-6 space-y-4">
        <p className="text-3xl font-bold">Introducing <b className="text-gray-700" >Sentinel</b> </p>
        <p className="">We have just open sourced our first project, <a href="https://github.com/EntropyLabsAI/sentinel" target="_blank" rel="noopener noreferrer" className="text-blue-500 ">Sentinel <GithubIcon className="h-4 w-4 inline" /></a>, the software layer that enables scalable oversight of agentic systems with quantitative safety guarantees, enabling safe and effective agentic AI systems in the wild. </p>
        <p>
          To get started, check out the <a href="https://github.com/EntropyLabsAI/sentinel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub repository</a>.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-3xl font-bold">Use Cases</p>
        <Tabs defaultValue="developers" className="w-full rounded-none">
          <TabsList className="grid w-full grid-cols-3 rounded-none">
            {tabsContent.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="rounded-none">
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsContent.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="bg-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-2">{tab.title}</h3>
              <p className="mb-4"><strong>Challenge:</strong> {tab.challenge}</p>
              <p className="mb-2">Entropy Labs {tab.value === "researchers" ? "provides researchers with" : "empowers " + tab.value + " to"}:</p>
              <ul className="list-disc pl-5 mb-4">
                {tab.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>

      </div>

      <ChallengeSection />
    </div>
  )
}

const ChallengeSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">The Challenge</h2>
    <h3 className="text-xl">How do we ensure reliable and effective AI agent deployment at scale?</h3>
    <p>
      We are rapidly approaching a future where AI agents will be integrated into every service and company, with billions of agents operating autonomously. This paradigm shift presents unprecedented challenges that current supervision techniques are ill-equipped to handle.
    </p>

    <div>
      <h4 className="text-xl font-semibold mb-2">The Emerging Landscape</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li>Agents operating at millions of requests per second will make critical decisions on our behalf</li>
        <li>AI systems will engage in complex interactions with humans and other agents</li>
        <li>Highly capable agents will execute arbitrary code and utilise human tools autonomously</li>
        <li>Self-evolving agents will adapt and improve during runtime</li>
      </ul>
    </div>

    <div>
      <h4 className="text-xl font-semibold mb-2">The Need for Advanced Supervision</h4>
      <p>
        As we transition towards clusters of millions of agents performing critical tasks across the internet, traditional methods become unsustainable. It is imperative that those deploying agents in real-world scenarios have robust systems to supervise, evaluate, and ensure the reliability of their AI systems.
      </p>
    </div>

    <div>
      <h4 className="text-xl font-semibold mb-2">Key Challenges We Address</h4>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Comprehensive Supervision:</strong> Lack of effective solutions for real-time monitoring and control of AI agent actions at scale</li>
        <li><strong>Advanced Simulation:</strong> Insufficient tools for simulating complex scenarios to test agent behavior before deployment</li>
        <li><strong>Continuous Evaluation:</strong> Difficulty in implementing ongoing, automated evaluation of deployed agents to maintain performance and safety</li>
        <li><strong>Regression Testing:</strong> Lack of robust systems for ensuring that agent improvements don't introduce new failure modes</li>
      </ul>
    </div>

    <p>
      Entropy Labs is building the foundation for a future where billions of AI agents can be deployed reliably, scalably, and safely in any context. Our goal is to ensure that as AI agents become integral to our digital infrastructure, we maintain control, understanding, and trust in their operations through rigorous supervision and evaluation.
    </p>

    <p>
      If any of this aligns with your needs, please reach out!{" "}
      <a href="https://calendly.com/david-mlcoch-entropy-labs/entropy-labs-demo" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-primary hover:underline">
        Schedule a meeting
      </a>
    </p>

    <p>
      We're currently working with early adopters to build out this technology. If you're an AI lab or an agent company and would like to test it out, please get in touch and we'll help you integrate it.
    </p>

    <footer className="mt-16 p-8 border-t-2 border-black text-center text-sm flex flex-row justify-between">
      <p>&copy; 2024 Entropy Labs. All rights reserved.</p>
      <a href="https://github.com/EntropyLabsAI/sentinel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        <GithubIcon className="h-4 w-4 inline" />
      </a>
      <p className="text-center text-xl">
        <a href="mail:devs@entropy-labs.ai" className="text-blue-700 underline mr-8">devs@entropy-labs.ai</a>
      </p>
    </footer>
  </div>
)
