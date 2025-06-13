import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      background: './hero/background-1.jpg',
      product: './hero/display-1.png',
      alt: 'Vape product 1'
    },
    {
      background: './hero/background-2.jpg',
      product: './hero/display-2.png',
      alt: 'Vape product 2'
    },
    {
      background: './hero/background-3.jpg',
      product: './hero/display-3.png',
      alt: 'Vape product 3'
    },
    {
      background: './hero/background-4.jpg',
      product: './hero/display-4.png',
      alt: 'Vape product 4'
    },
    {
      background: './hero/background-5.jpg',
      product: './hero/display-5.png',
      alt: 'Vape product 5'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  const handleSubmit = (e) => {
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
    setTimeout(() => {
      setAlert({
        type: 'success',
        message: 'You’ve joined our newsletter. Stay tuned for updates!',
      })
      setEmail('')
      setIsLoading(false)
      setTimeout(() => setAlert({ type: '', message: '' }), 3000)
    }, 1000)
  }

  return (
    <section
      className="relative bg-primary py-20 overflow-hidden"
      style={{
        backgroundImage: `url('${images[currentImage].background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-dark/20 backdrop-blur-[5px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left animate-fade-in">
          <div className="inline-block border border-primary bg-transparent rounded-full px-3 py-1 mb-4 mx-auto md:mx-0">
            <p className="text-primary text-xs font-semibold">Yuma's #1 Trusted SmokeShop</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight mb-4">
            Discover Superstar Smoke & Vape
          </h1>
          <p className="text-xl text-primary/90 mb-6 font-medium">
            Now Open From 7am - 11pm Daily!
          </p>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto lg:mx-0">
            Show this at checkout for <span className="text-secondary font-semibold">20% off</span> your first purchase!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border-secondary/20 bg-primary/80 text-dark shadow-md focus:ring-accent focus:border-secondary py-3 text-base w-full sm:w-64 placeholder:text-dark"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-secondary text-primary hover:bg-accent/90 rounded-full px-8 py-3 text-base shadow-md transition-transform hover:scale-105 disabled:opacity-50"
              aria-label="Join newsletter"
            >
              {isLoading ? 'Submitting...' : 'Join Now'}
            </Button>
          </form>
          {alert.type && (
            <Alert
              className={`mt-4 max-w-md mx-auto lg:mx-0 ${
                alert.type === 'success' ? 'bg-primary border-accent' : 'bg-primary border-highlight'
              } animate-fade-in`}
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
        <div className="flex-1 animate-fade-in">
          <img
            src={images[currentImage].product}
            alt={images[currentImage].alt}
            className="w-full h-[350px] sm:h-[400px] object-contain transition-opacity duration-500"
          />
        </div>
      </div>
    </section>
  )
}