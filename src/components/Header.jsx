import { useState } from 'react'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu, Mail, Phone, Instagram, Facebook, Twitter, Clock } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Header({ navItems }) {
  const [isOpen, setIsOpen] = useState(false)

  const businessHours = [
    { day: 'Monday', hours: '7 AM–11 PM' },
    { day: 'Tuesday', hours: '7 AM–11 PM' },
    { day: 'Wednesday', hours: '7 AM–11 PM' },
    { day: 'Thursday', hours: '7 AM–11 PM' },
    { day: 'Friday', hours: '7 AM–11 PM' },
    { day: 'Saturday', hours: '7 AM–11 PM' },
    { day: 'Sunday', hours: '7 AM–11 PM' },
  ]

  return (
    <header className="bg-primary/95 backdrop-blur-sm sticky top-0 z-50 border-b border-dark/10">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="./logo.png"
            alt="Superstar Smoke & Vape Logo"
            className="h-12 w-auto"
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(
                      'text-dark hover:text-secondary transition-colors text-sm font-medium px-3 py-2 rounded-md',
                      'hover:bg-secondary/10'
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2 text-dark text-sm animate-fade-in">
            <Clock className="h-4 w-4 text-secondary" />
            7am - 11pm
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="bg-highlight text-primary hover:bg-highlight/90 rounded-full px-6 py-2 shadow-md"
          >
            Visit Us
          </Button>
        </div>
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-dark" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-dark">
              <div className="flex flex-col gap-6 mt-6">
                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-dark hover:text-secondary transition-colors text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                {/* Mobile Business Hours */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-dark text-sm font-semibold">
                    <Clock className="h-4 w-4 text-secondary" />
                    Business Hours
                  </div>
                  <ul className="text-dark text-sm space-y-1">
                    {businessHours.map((entry, index) => (
                      <li key={index}>
                        {entry.day}: {entry.hours}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Mobile Visit Us Button */}
                <Button
                  className="bg-highlight text-primary hover:bg-highlight/90 rounded-full px-6 py-2 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Visit Us
                </Button>
                {/* Mobile Contact Info */}
                <div className="flex flex-col gap-4">
                  <a href="mailto:info@superstarsmokevape.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Mail size={16} />
                    info@superstarsmokevape.com
                  </a>
                  <a href="tel:928-294-1035" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone size={16} />
                    928-294-1035
                  </a>
                </div>
                {/* Mobile Social Icons */}
                <div className="flex items-center gap-4">
                  <a href="https://instagram.com" className="hover:text-secondary transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="https://facebook.com" className="hover:text-secondary transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="https://twitter.com" className="hover:text-secondary transition-colors">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}