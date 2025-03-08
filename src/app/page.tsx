import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import SafeImage from '@/components/ui/SafeImage';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative h-[90vh] bg-white">
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <SafeImage
            src="/images/hero-banner.svg"
            alt="Bejewelled Stories - Timeless Elegance, Modern Design"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-white uppercase tracking-widest">
              Timeless Elegance
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white font-light">
              Discover our exquisite collection of pearl jewelry that brings traditional Indian craftsmanship with a contemporary twist.
            </p>
            <Link href="/collections/aarambh" className="btn-primary inline-flex items-center">
              Explore Collection
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured collection */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">
            Our debut collection "Aarambh" features traditional Indian pearl jewelry 
            with a contemporary twist, perfect for the modern American woman.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Preview item 1 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden w-full">
                <SafeImage
                  src="/images/products/necklace.svg"
                  alt="Pearl necklace"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-light mb-2 text-gray-900">Amara Pearl Necklace</h3>
                <p className="text-gray-600 mb-4 text-sm">A delicate pearl necklace with gold accents inspired by traditional Indian designs.</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-[#B8860B]">$149</span>
                  <Link href="/collections/aarambh/amara-pearl-necklace" className="text-gray-900 hover:text-[#B8860B] text-sm uppercase tracking-wider transition-colors duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Preview item 2 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden w-full">
                <SafeImage
                  src="/images/products/earrings.svg"
                  alt="Pearl earrings"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-light mb-2 text-gray-900">Kavya Pearl Earrings</h3>
                <p className="text-gray-600 mb-4 text-sm">Elegant drop earrings featuring freshwater pearls with intricate silver work.</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-[#B8860B]">$129</span>
                  <Link href="/collections/aarambh/kavya-pearl-earrings" className="text-gray-900 hover:text-[#B8860B] text-sm uppercase tracking-wider transition-colors duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Preview item 3 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden w-full">
                <SafeImage
                  src="/images/products/bangle.svg"
                  alt="Pearl bangle"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-light mb-2 text-gray-900">Leela Pearl Bangle</h3>
                <p className="text-gray-600 mb-4 text-sm">A stunning bangle with alternating pearls and gold beads inspired by royal Indian jewelry.</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-[#B8860B]">$119</span>
                  <Link href="/collections/aarambh/leela-pearl-bangle" className="text-gray-900 hover:text-[#B8860B] text-sm uppercase tracking-wider transition-colors duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/collections/aarambh" className="btn-outline inline-flex items-center">
              View All Products
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-light mb-6 uppercase tracking-wider">Our Story</h2>
              <p className="text-gray-600 mb-6 font-light">
                Bejewelled Stories was born from a passion to bring the rich heritage of Indian jewelry craftsmanship to the modern American woman. 
                Each piece in our collection tells a story of tradition, artistry, and cultural fusion.
              </p>
              <p className="text-gray-600 mb-8 font-light">
                We work directly with skilled artisans who have inherited generations of jewelry-making expertise, 
                ensuring that every pearl is ethically sourced and every design is crafted with love and precision.
              </p>
              <Link href="/about" className="btn-outline inline-flex items-center">
                Learn More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-none overflow-hidden shadow-sm w-full">
              <SafeImage
                src="/images/products/necklace.svg"
                alt="Amara Pearl Necklace"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">
            Hear from women who have added a touch of Bejewelled Stories to their style.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 border-b border-[#E6E6E6]">
              <div className="flex items-center mb-4">
                <div className="text-[#B8860B]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 text-sm font-light">
                "I love how these pieces blend traditional Indian elements with modern design. The pearl necklace I purchased gets compliments everywhere I go!"
              </p>
              <div className="font-medium">
                <p className="text-gray-900 text-sm">Sarah Johnson</p>
                <p className="text-gray-500 text-xs">New York, NY</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 border-b border-[#E6E6E6]">
              <div className="flex items-center mb-4">
                <div className="text-[#B8860B]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 text-sm font-light">
                "The quality of these pearls is exceptional, especially at this price point. I appreciate the cultural story behind each piece and the ethical sourcing."
              </p>
              <div className="font-medium">
                <p className="text-gray-900 text-sm">Emily Rodriguez</p>
                <p className="text-gray-500 text-xs">Los Angeles, CA</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 border-b border-[#E6E6E6]">
              <div className="flex items-center mb-4">
                <div className="text-[#B8860B]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 text-sm font-light">
                "These pearl earrings have become my go-to for both work and special occasions. They're versatile, elegant, and unlike anything I've found elsewhere."
              </p>
              <div className="font-medium">
                <p className="text-gray-900 text-sm">Michelle Thompson</p>
                <p className="text-gray-500 text-xs">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-light mb-4 uppercase tracking-wider">Join Our Community</h2>
            <p className="text-gray-600 mb-8 font-light">
              Subscribe to our newsletter for exclusive offers, new collection previews, and stories about the artisans behind our jewelry.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field flex-grow"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 