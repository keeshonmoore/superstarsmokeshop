import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="hidden md:block bg-dark text-primary py-2 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <a href="mailto:info@superstarsmokevape.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={16} />
            info@superstarsmokevape.com
          </a>
          <a href="tel:928-294-1035" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} />
            928-294-1035
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" className="hover:text-accent transition-colors">
            <Instagram size={16} />
          </a>
          <a href="https://facebook.com" className="hover:text-accent transition-colors">
            <Facebook size={16} />
          </a>
          <a href="https://twitter.com" className="hover:text-accent transition-colors">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}