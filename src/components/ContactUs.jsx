import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Instagram, Facebook, Twitter } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setAlert({
        type: 'error',
        message: 'Please fill out all fields.',
      })
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
      return
    }

    setIsLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setAlert({
        type: 'success',
        message: 'Your message has been sent successfully!',
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
      setIsLoading(false)
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-primary to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12 animate-fade-in">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-dark text-sm font-medium mb-2 block">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-lg border-secondary/20 bg-primary/80 text-dark shadow-md focus:ring-accent focus:border-secondary py-3 text-base placeholder:text-dark"
                  aria-label="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-dark text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-lg border-secondary/20 bg-primary/80 text-dark shadow-md focus:ring-accent focus:border-secondary py-3 text-base placeholder:text-dark"
                  aria-label="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-dark text-sm font-medium mb-2 block">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="rounded-lg border-secondary/20 bg-primary/80 text-dark shadow-md focus:ring-accent focus:border-secondary py-3 text-base placeholder:text-dark"
                  aria-label="Your Phone Number"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-dark text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-lg border-secondary/20 bg-primary/80 text-dark shadow-md focus:ring-accent focus:border-secondary py-3 text-base placeholder:text-dark h-32"
                  aria-label="Your Message"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 py-3 text-base shadow-md transition-transform hover:scale-105 disabled:opacity-50 w-full"
                aria-label="Submit Contact Form"
              >
                {isLoading ? 'Submitting...' : 'Send Message'}
              </Button>
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
            </form>
          </div>
          <Card className="bg-gradient-to-b from-primary to-secondary/10 shadow-lg border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-dark">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <p className="text-dark/80 text-base">
                We’d love to hear from you! Reach out anytime for inquiries or support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 hover:scale-105 transition-all">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <p className="text-dark text-lg">
                    3325 S Ave 8 E #7, Yuma, AZ 85365
                  </p>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 hover:scale-105 transition-all">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:928-294-1035" className="text-dark text-lg hover:text-highlight transition-colors">
                    928-294-1035
                  </a>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 hover:scale-105 transition-all">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a href="mailto:info@superstarsmokevape.com" className="text-dark text-lg hover:text-highlight transition-colors">
                    info@superstarsmokevape.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://instagram.com"
                  className="text-secondary hover:text-highlight transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com"
                  className="text-secondary hover:text-highlight transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-secondary hover:text-highlight transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}