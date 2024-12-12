import * as React from "react"
import { motion } from "framer-motion"
import { MenuIcon, Slack, GithubIcon, BookIcon, LibraryIcon, CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const NavLink = motion(Link)

// Animation variants
const navItemVariants = {
  initial: { y: 0 },
  hover: {
    y: -2,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

const iconMotionProps = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.2 }
}

// Navigation items
const navItems = [
  { name: "Demo", href: "https://calendly.com/founders-asteroid/30min", icon: CalendarIcon },
  { name: "Docs", href: "https://docs.asteroid.ai", icon: BookIcon },
  { name: "Blog", href: "https://blog.asteroid.ai/agents", icon: LibraryIcon },
]

const socialItems = [
  {
    icon: GithubIcon,
    href: "https://github.com/asteroidai/asteroid-python-sdk",
    label: "GitHub"
  },
  {
    icon: Slack,
    href: "https://join.slack.com/t/asteroidcommunity/shared_invite/zt-2w0zvuqow-eIzIRLK~3vlEvN83d9qgxw",
    label: "Slack"
  }
]

// Reusable components
const SocialButton = ({ icon: Icon, href, label }: { icon: any, href: string, label: string }) => (
  <motion.div initial="initial" animate="animate" whileHover="hover" variants={navItemVariants}>
    <Link to={href} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon" className="bg-transparent text-white hover:text-white/80 hover:bg-transparent">
        <Icon className="h-5 w-5" />
        {label && <span className="sr-only">{label}</span>}
      </Button>
    </Link>
  </motion.div>
)

const NavItem = ({ item, index, mobile = false, onClick }: {
  item: typeof navItems[0],
  index: number,
  mobile?: boolean,
  onClick?: () => void
}) => {
  const pathname = useLocation().pathname

  if (mobile) {
    return (
      <NavLink
        to={item.href}
        className={cn(
          "flex items-center px-4 py-2 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5",
          pathname === item.href && "text-white bg-white/10"
        )}
        onClick={onClick}
        variants={navItemVariants}
        initial="initial"
        animate="animate"
        custom={index}
      >
        <item.icon className="h-4 w-4 mr-2" />
        {item.name}
      </NavLink>
    )
  }

  return (
    <NavigationMenuItem>
      <NavLink
        to={item.href}
        className={cn(
          navigationMenuTriggerStyle(),
          "bg-transparent text-white hover:text-white/80 hover:bg-transparent data-[state=open]:bg-transparent active:bg-transparent focus:bg-transparent focus:outline-none"
        )}
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={navItemVariants}
        custom={index}
      >
        <motion.div {...iconMotionProps} className="flex items-center gap-2">
          <div>

            <item.icon className="h-4 w-4" />
          </div>
          {item.name}
        </motion.div>
      </NavLink>
    </NavigationMenuItem>
  )
}

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-non backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-2xl font-bold text-white font-['Source_Serif_4']">
          Asteroid
        </p>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavItem key={item.name} item={item} index={index} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {socialItems.map((item) => (
            <SocialButton key={item.label} {...item} />
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="bg-transparent text-white hover:text-white/80 hover:bg-transparent">
              <MenuIcon className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#0a1527]/90 backdrop-blur-sm border-none">
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  item={item}
                  index={index}
                  mobile
                  onClick={() => setIsOpen(false)}
                />
              ))}
              <div className="flex gap-4 px-4 mt-2">
                {socialItems.map((item, index) => (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                    variants={navItemVariants}
                    initial="initial"
                    animate="animate"
                    custom={navItems.length + index}
                  >
                    <item.icon className="h-5 w-5" />
                  </NavLink>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
