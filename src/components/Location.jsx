import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { MapPin, Phone } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="bg-gradient-to-b from-primary to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12 animate-fade-in">
          Visit Us in Yuma
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-primary shadow-md border-0 animate-fade-in h-[450px] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-dark flex items-center gap-2">
                <MapPin className="h-6 w-6 text-secondary" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-dark text-lg">
                  3325 S Ave 8 E #7<br />
                  Yuma, AZ 85365
                </p>
                <p className="flex items-center gap-2 text-dark text-lg mt-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:928-294-1035" className="hover:text-highlight transition-colors">
                    928-294-1035
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-2">Why Visit Us?</h3>
                <ul className="list-disc pl-5 space-y-2 text-dark text-base">
                  <li>Wide selection of premium vape and smoke products.</li>
                  <li>Friendly, knowledgeable staff to assist you.</li>
                  <li>
                    Grand opening special: <span className="text-highlight font-semibold">20% off</span> your first purchase!
                  </li>
                  <li>Convenient location in Yuma with ample parking.</li>
                </ul>
              </div>
              <Button
                asChild
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-6 py-2 shadow-md mt-4"
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3325+S+Ave+8+E+%237,+Yuma,+AZ+85365"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Superstar Smoke & Vape"
                >
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>
          <div className="animate-fade-in h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.6719600700603!2d-114.49709272360728!3d32.66817258953932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d66141fbc5e7d7%3A0xe734a07138c21d42!2sSuper%20star%20smoke%20and%20vape!5e0!3m2!1sen!2sus!4v1749773873860!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Superstar Smoke & Vape Location Map"
              className="shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}