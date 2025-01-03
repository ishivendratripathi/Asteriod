import * as React from 'react'
import { Check, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Page from './components/Page'
import { Link } from 'react-router-dom'
const pricingPlans = [
  {
    name: "Developer",
    description: "Perfect for individual developers and testing",
    price: "$0",
    period: "/month",
    features: [
      "1,000 free agent runs per month",
      "Python SDK",
      "Web Supervision Control Center",
      "Default & custom Python supervisors",
      "Local supervision execution (BYO keys)",
      "Community Slack support",
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
    buttonHref: "https://docs.asteroid.ai",
    highlighted: false,
  },
  {
    name: "Premium",
    description: "For growing teams and startups",
    price: "$399",
    period: "/month",
    features: [
      "All Developer features",
      "Unlimited pay-as-you-go agent runs",
      "Slack-based human supervision",
      "Expert supervisor deployment help",
      "Automated prompt optimization",
      "Dedicated Slack support channel",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "primary",
    buttonHref: "mailto:founders@asteroid.ai",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Get in touch",
    period: "",
    features: [
      "All Premium features",
      "Volume discounts on agent runs",
      "Custom API-based supervision",
      "Advanced edge case detection",
      "Self-hosted deployment options",
      "Dedicated support engineer with SLA",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    buttonHref: "mailto:founders@asteroid.ai",
    highlighted: false,
  }
]

export default function PricingPage() {
  return (
    <Page className="py-48 relative">
      <div className="relative z-10">
        <div className="flex justify-center items-center mb-4">
          <img
            src="/logo-128-nobg.png"
            alt="Asteroid Logo"
            className="w-16 h-16 mb-4 transition-transform duration-700 ease-in-out hover:rotate-[360deg]"
          />
        </div>
        <h1 className="text-4xl font-semibold mb-4 text-white">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground mb-12">Choose the perfect plan for your needs</p>

        <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col transition-all duration-300 ease-in-out bg-slate-300 border-none
                ${plan.highlighted
                  ? 'transform scale-105 shadow-lg border-primary hover:-translate-y-4 hover:shadow-2xl'
                  : 'hover:-translate-y-2 hover:shadow-xl'
                }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center justify-center">
                  {plan.name}
                  {plan.highlighted && <Zap className="ml-2 h-5 w-5 text-primary" />}
                </CardTitle>
                <CardDescription className="text-center">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">
                  {plan.price}
                  <span className="text-xl font-normal text-muted-foreground">{plan.period}</span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link to={plan.buttonHref}>
                  <Button
                    className={`w-full transition-all duration-300 
                    ${plan.highlighted
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105'
                        : 'transition-colors'
                      }`}
                    variant={plan.buttonVariant as any}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Page>
  )
}

