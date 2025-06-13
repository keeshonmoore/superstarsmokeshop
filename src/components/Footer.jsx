import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { CheckCircle2, AlertCircle, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer({ navItems }) {
  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) {
      setAlert({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
      return
    }

    setIsLoading(true)
    // Simulate newsletter subscription
    setTimeout(() => {
      setAlert({
        type: 'success',
        message: 'You’ve subscribed to our newsletter!',
      })
      setEmail('')
      setIsLoading(false)
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
    }, 1000)
  }

  return (
    <footer className="bg-dark text-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-in">
            <img
              src="./logo.png"
              alt="Superstar Smoke & Vape Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-primary text-base mb-4">
              3325 S Ave 8 E #7, Yuma, AZ 85365<br />
              Phone: <a href="tel:928-294-1035" className="hover:text-accent transition-colors">928-294-1035</a><br />
              Email: <a href="mailto:info@superstarsmokevape.com" className="hover:text-accent transition-colors">info@superstarsmokevape.com</a>
            </p>
            <p className="text-primary/80 text-sm">
              Yuma’s #1 Trusted Smoke Shop
            </p>
          </div>
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary text-base hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold text-primary mb-4">Newsletter</h3>
            <p className="text-primary/80 text-sm mb-4">Stay updated with our latest offers!</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border-primary/20 bg-primary/20 text-primary shadow-md focus:ring-accent focus:border-accent py-3 text-base placeholder:text-primary/60"
                aria-label="Newsletter Email"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-secondary text-primary hover:bg-accent/90 hover:scale-105 rounded-lg px-4 py-3 shadow-md transition-transform disabled:opacity-50"
                aria-label="Subscribe to Newsletter"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            {alert.type && (
              <Alert
                className={`mt-4 ${alert.type === 'success' ? 'bg-primary border-accent' : 'bg-primary border-highlight'} animate-fade-in`}
              >
                {alert.type === 'success' ? (
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-highlight" />
                )}
                <AlertTitle>{alert.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
                <AlertDescription>{alert.message}</AlertDescription>
              </Alert>
            )}
          </div>
        </div>
        <div className="mt-12 border-t border-primary/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary/60 text-sm text-center sm:text-left">
              © 2025 Superstar Smoke & Vape. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                className="text-primary hover:text-highlight transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                className="text-primary hover:text-highlight transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-primary hover:text-highlight transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}