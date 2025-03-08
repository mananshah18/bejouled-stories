"use client";

import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';

export default function CollectionsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative h-[40vh] bg-pearl-100">
        <div className="absolute inset-0 overflow-hidden">
          <SafeImage
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Pearl jewelry collection"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Collections
            </h1>
            <p className="text-xl">
              Discover our curated collections of pearl jewelry, each telling a unique story of tradition and modernity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Collections overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Explore Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each collection represents a unique fusion of traditional Indian craftsmanship and contemporary design, 
              created to bring elegance and cultural richness to the modern woman's jewelry box.
            </p>
          </div>
          
          {/* Collection 1 - Aarambh */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <SafeImage
                  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Aarambh Collection"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">Aarambh Collection</h3>
                <p className="text-gray-600 mb-6">
                  "Aarambh" (Sanskrit for "Beginning") is our debut collection, featuring traditional Indian pearl jewelry 
                  with a contemporary twist. Each piece in this collection represents the beginning of a journey, 
                  a fusion of cultures, and a celebration of craftsmanship.
                </p>
                <p className="text-gray-600 mb-8">
                  The collection includes necklaces, earrings, bracelets, and rings, all designed to be versatile enough 
                  for everyday wear while making a statement on special occasions.
                </p>
                <Link href="/collections/aarambh" className="btn-primary">
                  Explore Aarambh
                </Link>
              </div>
            </div>
          </div>
          
          {/* Collection 2 - Coming Soon */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-2 relative h-96 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-pearl-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h4 className="text-2xl font-serif font-bold mb-4">Coming Soon</h4>
                    <p className="text-gray-600">
                      Our designers are hard at work creating our next collection. 
                      Sign up for our newsletter to be the first to know when it launches.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-serif font-bold mb-4">Upcoming Collection</h3>
                <p className="text-gray-600 mb-6">
                  We're excited to announce that our next collection is in the works! Drawing inspiration from the 
                  rich cultural heritage of India and contemporary design trends, this collection will introduce 
                  new styles and motifs to our jewelry line.
                </p>
                <p className="text-gray-600 mb-8">
                  Stay tuned for updates and be the first to explore our new pieces when they launch.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="input-field"
                    required
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Collection process */}
      <section className="py-20 bg-pearl-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Collection Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From inspiration to creation, discover how our collections come to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-serif font-bold text-gold-600">1</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Inspiration</h3>
              <p className="text-gray-600">
                Our designers draw inspiration from traditional Indian motifs, architecture, nature, and contemporary fashion trends.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-serif font-bold text-gold-600">2</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Design</h3>
              <p className="text-gray-600">
                Our skilled designers create sketches and digital renderings, refining each piece until it perfectly balances tradition and modernity.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-serif font-bold text-gold-600">3</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Crafting</h3>
              <p className="text-gray-600">
                Master artisans bring the designs to life using traditional techniques and ethically sourced materials, ensuring quality and authenticity.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-serif font-bold text-gold-600">4</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Curation</h3>
              <p className="text-gray-600">
                Each piece undergoes rigorous quality checks before being carefully selected to become part of our collection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-16 bg-gold-50">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Explore?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our Aarambh collection and find the perfect piece to add to your jewelry collection.
            </p>
            <Link href="/collections/aarambh" className="btn-primary">
              Shop Aarambh Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 