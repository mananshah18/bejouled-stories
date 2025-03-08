"use client";

import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative h-[40vh] bg-white">
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <SafeImage
            src="/images/hero-banner.svg"
            alt="About Bejewelled Stories"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-white uppercase tracking-widest">
              Our Story
            </h1>
            <p className="text-xl text-white font-light">
              Discover the passion and craftsmanship behind Bejewelled Stories.
            </p>
          </div>
        </div>
      </section>
      
      {/* About content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-light mb-6 uppercase tracking-wider">Our Journey</h2>
              <p className="text-gray-600 mb-6 font-light">
                Bejewelled Stories was born from a passion to bring the rich heritage of Indian jewelry craftsmanship to the modern American woman. 
                Our journey began in the vibrant streets of Jaipur, India, where our founders were captivated by the intricate designs and cultural significance of traditional Indian jewelry.
              </p>
              <p className="text-gray-600 mb-6 font-light">
                We work directly with skilled artisans who have inherited generations of jewelry-making expertise, 
                ensuring that every pearl is ethically sourced and every design is crafted with love and precision.
              </p>
              <p className="text-gray-600 font-light">
                Each piece in our collection tells a story of tradition, artistry, and cultural fusion, 
                creating jewelry that honors its heritage while embracing contemporary design sensibilities.
              </p>
            </div>
            <div className="relative h-96 rounded-none overflow-hidden shadow-sm w-full">
              <SafeImage
                src="/images/products/necklace.svg"
                alt="Traditional Indian jewelry crafting"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 shadow-sm border-b border-[#E6E6E6] transition-transform hover:shadow-md">
              <h3 className="text-xl font-serif font-light mb-4 text-gray-900">Ethical Sourcing</h3>
              <p className="text-gray-600 font-light">
                We are committed to ethical sourcing practices, ensuring that all our materials are responsibly obtained. 
                We work closely with suppliers who share our values of sustainability and fair labor practices.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm border-b border-[#E6E6E6] transition-transform hover:shadow-md">
              <h3 className="text-xl font-serif font-light mb-4 text-gray-900">Artisanal Craftsmanship</h3>
              <p className="text-gray-600 font-light">
                Each piece is handcrafted by skilled artisans who have honed their craft over generations. 
                We celebrate traditional techniques while embracing innovation in design and production.
              </p>
            </div>
            
            <div className="bg-white p-8 shadow-sm border-b border-[#E6E6E6] transition-transform hover:shadow-md">
              <h3 className="text-xl font-serif font-light mb-4 text-gray-900">Cultural Appreciation</h3>
              <p className="text-gray-600 font-light">
                We honor the rich cultural heritage behind our designs, sharing the stories and significance of traditional Indian jewelry 
                while creating pieces that resonate with the modern woman.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Team Member 1 */}
            <div className="bg-white rounded-none overflow-hidden shadow-sm border-b border-[#E6E6E6] transition-transform hover:shadow-md">
              <div className="relative h-80 w-full">
                <SafeImage
                  src="/images/placeholder.svg"
                  alt="Vrishti Shah"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-light mb-2 text-gray-900">Vrishti Shah</h3>
                <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">Founder & Creative Director</p>
                <p className="text-gray-600 font-light">
                  With a background in traditional Indian art and modern jewelry design, Vrishti brings a unique perspective to Bejewelled Stories. 
                  Her passion for cultural heritage and contemporary aesthetics drives the creative vision behind each collection.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-none overflow-hidden shadow-sm border-b border-[#E6E6E6] transition-transform hover:shadow-md">
              <div className="relative h-80 w-full">
                <SafeImage
                  src="/images/placeholder.svg"
                  alt="Manan Shah"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-light mb-2 text-gray-900">Manan Shah</h3>
                <p className="text-gray-500 mb-4 text-sm uppercase tracking-wider">Co-Founder & Technical Director</p>
                <p className="text-gray-600 font-light">
                  Manan combines his technical expertise with a deep appreciation for craftsmanship. 
                  He oversees the production process, ensuring that traditional techniques are preserved while embracing innovative approaches to jewelry making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif font-light mb-6 uppercase tracking-wider">Connect With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            Have questions about our products or interested in learning more about our story? 
            We'd love to hear from you!
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 