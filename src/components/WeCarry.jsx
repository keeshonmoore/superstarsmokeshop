import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Cloud, Cigarette, Droplet, Leaf, Wrench, GlassWater, ChevronDown } from 'lucide-react'

export default function WeCarry() {
  const productTypes = [
    {
      type: 'Vapes',
      icon: Cloud,
      items: [
        {
          title: 'Pod Systems',
          description: 'Compact and user-friendly vaping devices perfect for beginners and on-the-go use.',
          image: 'https://pixabay.com/get/g7a8e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6.jpg',
          alt: 'Pod system vape'
        },
        {
          title: 'Box Mods',
          description: 'Powerful devices for advanced vapers, offering customizable settings and high performance.',
          image: 'https://pixabay.com/get/g8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5.jpg',
          alt: 'Box mod vape'
        }
      ]
    },
    {
      type: 'Tobacco',
      icon: Cigarette,
      items: [
        {
          title: 'Premium Cigars',
          description: 'Hand-rolled cigars from top brands, offering rich flavors for enthusiasts.',
          image: 'https://pixabay.com/get/g0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6.jpg',
          alt: 'Premium cigars'
        },
        {
          title: 'Rolling Tobacco',
          description: 'High-quality loose tobacco for custom rolling, available in various blends.',
          image: 'https://pixabay.com/get/g2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0.jpg',
          alt: 'Rolling tobacco'
        }
      ]
    },
    {
      type: 'E-Juice',
      icon: Droplet,
      items: [
        {
          title: 'Fruit Flavors',
          description: 'Refreshing e-liquids with vibrant fruit profiles, perfect for all-day vaping.',
          image: 'https://pixabay.com/get/g6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6.jpg',
          alt: 'Fruit e-juice'
        },
        {
          title: 'Dessert Flavors',
          description: 'Indulgent e-liquids mimicking your favorite sweets, from creamy to caramel.',
          image: 'https://pixabay.com/get/ga0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f.jpg',
          alt: 'Dessert e-juice'
        }
      ]
    },
    {
      type: 'CBD & Wellness',
      icon: Leaf,
      items: [
        {
          title: 'CBD Gummies',
          description: 'Tasty edibles infused with CBD for relaxation and wellness support.',
          image: 'https://pixabay.com/get/gde0b8e5c9b7f7f6e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5.jpg',
          alt: 'CBD gummies'
        },
        {
          title: 'CBD Tinctures',
          description: 'Pure CBD oils for sublingual use, promoting calm and balance.',
          image: 'https://pixabay.com/get/gf6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2.jpg',
          alt: 'CBD tincture'
        }
      ]
    },
    {
      type: 'Smoke Accessories',
      icon: Wrench,
      items: [
        {
          title: 'Glass Pipes',
          description: 'Artisanal glass pipes in various designs for a smooth smoking experience.',
          image: 'https://pixabay.com/get/g5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5.jpg',
          alt: 'Glass pipe'
        },
        {
          title: 'Rolling Papers',
          description: 'Premium papers for rolling, available in multiple sizes and materials.',
          image: 'https://pixabay.com/get/gc6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e.jpg',
          alt: 'Rolling papers'
        }
      ]
    },
    {
      type: 'Water Pipe',
      icon: GlassWater,
      items: [
        {
          title: 'Bubblers',
          description: 'Compact water pipes combining portability with smooth filtration.',
          image: 'https://pixabay.com/get/g7a8e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6.jpg',
          alt: 'Bubbler water pipe'
        },
        {
          title: 'Bongs',
          description: 'Classic water pipes for powerful hits, available in various styles.',
          image: 'https://pixabay.com/get/g8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5b8f0e2c6f6a0e5e5.jpg',
          alt: 'Bong water pipe'
        }
      ]
    }
  ]

  return (
    <section id="we-carry" className="bg-gradient-to-b from-primary to-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-12 animate-fade-in">
          What We Carry
        </h2>
        <Accordion type="single" collapsible className="animate-fade-in">
          {productTypes.map((category, index) => {
            const Icon = category.icon
            return (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-dark/10">
                <AccordionTrigger
                  className="text-dark text-xl font-semibold hover:text-secondary transition-colors flex items-center w-full py-4 gap-3"
                >
                  <div className="flex items-center gap-3 flex-grow">
                    <Icon className="h-5 w-5 text-secondary" />
                    {category.type}
                  </div>
                  <ChevronDown
                    className="h-6 w-6 text-dark group-data-[state=open]:rotate-180 transition-transform duration-200"
                  />
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="bg-primary shadow-md rounded-lg p-4 animate-fade-in"
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold text-dark mb-2">
                          {item.title}
                        </h3>
                        <p className="text-dark/80 text-base">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}