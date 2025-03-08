import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import SafeImage from '@/components/ui/SafeImage';

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative h-[100vh] bg-navy-950">
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <SafeImage
            src="/images/hero-banner.svg"
            alt="Bejewelled Stories - Timeless Elegance, Modern Design"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="absolute inset-0 bg-navy-950 bg-opacity-40" />
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-8 text-white uppercase tracking-ultra-wide">
              Timeless Elegance
            </h1>
            <div className="w-24 h-0.5 bg-gold-500 mb-8"></div>
            <p className="text-lg md:text-xl mb-10 text-silver-100 font-light tracking-wide">
              Discover our exquisite collection of pearl jewelry that brings traditional Indian craftsmanship with a contemporary twist.
            </p>
            <Link href="/collections/aarambh" className="btn-primary inline-flex items-center">
              Explore Collection
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Brand statement */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-light mb-6 text-navy-900 uppercase tracking-widest">Our Philosophy</h2>
          <div className="luxury-divider"></div>
          <p className="text-lg text-navy-700 leading-relaxed font-light mb-0">
            At Bejewelled Stories, we believe that jewelry is more than an accessory—it's a narrative of heritage, craftsmanship, and personal expression. 
            Each piece in our collection is meticulously crafted to honor traditional Indian artistry while embracing contemporary elegance.
          </p>
        </div>
      </section>
      
      {/* Featured collection */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Featured Collection</h2>
          <div className="luxury-divider"></div>
          <p className="section-subtitle">
            Our debut collection "Aarambh" features traditional Indian pearl jewelry 
            with a contemporary twist, perfect for the modern American woman.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {/* Preview item 1 */}
            <div className="card-luxury group">
              <div className="relative h-96 overflow-hidden w-full">
                <SafeImage
                  src="/images/products/necklace.svg"
                  alt="Pearl necklace"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-display font-light mb-3 text-navy-900">Amara Pearl Necklace</h3>
                <p className="text-navy-600 mb-6 text-sm font-light tracking-wide">A delicate pearl necklace with gold accents inspired by traditional Indian designs.</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gold-600">$149</span>
                  <Link href="/collections/aarambh/amara-pearl-necklace" className="text-navy-900 hover:text-gold-600 text-sm uppercase tracking-widest transition-colors duration-300 flex items-center">
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Preview item 2 */}
            <div className="card-luxury group">
              <div className="relative h-96 overflow-hidden w-full">
                <SafeImage
                  src="/images/products/earrings.svg"
                  alt="Pearl earrings"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-display font-light mb-3 text-navy-900">Kavya Pearl Earrings</h3>
                <p className="text-navy-600 mb-6 text-sm font-light tracking-wide">Elegant drop earrings featuring freshwater pearls with intricate silver work.</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gold-600">$129</span>
                  <Link href="/collections/aarambh/kavya-pearl-earrings" className="text-navy-900 hover:text-gold-600 text-sm uppercase tracking-widest transition-colors duration-300 flex items-center">
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Preview item 3 */}
            <div className="card-luxury group">
              <div className="relative h-96 overflow-hidden w-full">
                <SafeImage
                  src="/images/products/bangle.svg"
                  alt="Pearl bangle"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-display font-light mb-3 text-navy-900">Leela Pearl Bangle</h3>
                <p className="text-navy-600 mb-6 text-sm font-light tracking-wide">A stunning bangle with alternating pearls and gold beads inspired by royal Indian jewelry.</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gold-600">$119</span>
                  <Link href="/collections/aarambh/leela-pearl-bangle" className="text-navy-900 hover:text-gold-600 text-sm uppercase tracking-widest transition-colors duration-300 flex items-center">
                    View Details
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/collections/aarambh" className="btn-outline inline-flex items-center">
              View All Products
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Craftsmanship section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <h2 className="text-3xl font-display font-light mb-6 uppercase tracking-widest">Exquisite Craftsmanship</h2>
              <div className="w-24 h-0.5 bg-gold-500 mb-8"></div>
              <p className="text-silver-300 mb-6 font-light tracking-wide leading-relaxed">
                Each piece in our collection is meticulously handcrafted by skilled artisans who have inherited generations of jewelry-making expertise. 
                We work directly with these craftsmen to ensure that every pearl is ethically sourced and every design is created with precision and care.
              </p>
              <p className="text-silver-300 mb-8 font-light tracking-wide leading-relaxed">
                Our commitment to quality means that we use only the finest materials—from lustrous pearls to 18k gold and sterling silver—to create 
                jewelry that is not only beautiful but also built to last and become cherished heirlooms.
              </p>
              <Link href="/about" className="btn-primary bg-gold-600 hover:bg-gold-700 inline-flex items-center">
                Our Story
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] overflow-hidden shadow-elegant animate-slide-in-right">
              <SafeImage
                src="/images/products/necklace.svg"
                alt="Amara Pearl Necklace"
                fill
                style={{ objectFit: 'contain' }}
                className="bg-navy-800"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-cream-50">
        <div className="container-custom">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="luxury-divider"></div>
          <p className="section-subtitle">
            Hear from women who have added a touch of Bejewelled Stories to their style.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 shadow-elegant">
              <div className="flex items-center mb-6">
                <div className="text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-navy-700 italic mb-8 text-base font-light leading-relaxed">
                "I love how these pieces blend traditional Indian elements with modern design. The pearl necklace I purchased gets compliments everywhere I go!"
              </p>
              <div>
                <p className="text-navy-900 text-sm font-medium">Sarah Johnson</p>
                <p className="text-navy-500 text-xs">New York, NY</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-10 shadow-elegant">
              <div className="flex items-center mb-6">
                <div className="text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-navy-700 italic mb-8 text-base font-light leading-relaxed">
                "The quality of these pearls is exceptional, especially at this price point. I appreciate the cultural story behind each piece and the ethical sourcing."
              </p>
              <div>
                <p className="text-navy-900 text-sm font-medium">Emily Rodriguez</p>
                <p className="text-navy-500 text-xs">Los Angeles, CA</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-10 shadow-elegant">
              <div className="flex items-center mb-6">
                <div className="text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-navy-700 italic mb-8 text-base font-light leading-relaxed">
                "These pearl earrings have become my go-to for both work and special occasions. They're versatile, elegant, and unlike anything I've found elsewhere."
              </p>
              <div>
                <p className="text-navy-900 text-sm font-medium">Michelle Thompson</p>
                <p className="text-navy-500 text-xs">Chicago, IL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured products grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Discover Our Collection</h2>
          <div className="luxury-divider"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
            <div className="relative h-80 group overflow-hidden">
              <SafeImage
                src="/images/products/necklace.svg"
                alt="Necklaces"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-30 flex items-center justify-center">
                <Link href="/collections/aarambh" className="text-white text-lg font-display uppercase tracking-widest">Necklaces</Link>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden">
              <SafeImage
                src="/images/products/earrings.svg"
                alt="Earrings"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-30 flex items-center justify-center">
                <Link href="/collections/aarambh" className="text-white text-lg font-display uppercase tracking-widest">Earrings</Link>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden">
              <SafeImage
                src="/images/products/bangle.svg"
                alt="Bracelets"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-30 flex items-center justify-center">
                <Link href="/collections/aarambh" className="text-white text-lg font-display uppercase tracking-widest">Bracelets</Link>
              </div>
            </div>
            
            <div className="relative h-80 group overflow-hidden">
              <SafeImage
                src="/images/products/anklet.svg"
                alt="Anklets"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-30 flex items-center justify-center">
                <Link href="/collections/aarambh" className="text-white text-lg font-display uppercase tracking-widest">Anklets</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram section */}
      <section className="py-16 bg-cream-50">
        <div className="container-custom text-center">
          <h2 className="text-xl font-display font-light mb-6 text-navy-900 uppercase tracking-widest">Follow Our Journey</h2>
          <div className="luxury-divider"></div>
          <p className="text-navy-600 mb-10 font-light max-w-2xl mx-auto">
            Join us on Instagram for exclusive previews, behind-the-scenes glimpses of our craftsmanship, and styling inspiration.
          </p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center">
            @bejewelledstories
            <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
} 