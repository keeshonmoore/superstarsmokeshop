import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import BrandCarousel from './components/BrandCarousel'
import Location from './components/Location'
import WeCarry from './components/WeCarry'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
// import ScrollToTop from './components/ScrollToTop';


export default function App() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Location', href: '#location' },
    { name: 'We Carry', href: '#we-carry' },
    { name: 'Contact Us', href: '#contact' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-primary font-sans">
      <TopBar />
      <Header navItems={navItems} />
      {/* <ScrollToTop /> */}
      <main className="flex-grow">
        <Hero />
        <BrandCarousel />
        <Location />
        <WeCarry />
        <ContactUs />
      </main>
      <Footer navItems={navItems} />
    </div>
  )
}