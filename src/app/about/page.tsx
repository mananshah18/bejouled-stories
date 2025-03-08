"use client";

import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative h-[60vh] bg-navy-950">
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <SafeImage
            src="/images/hero-banner.svg"
            alt="About Bejewelled Stories"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-navy-950 bg-opacity-40" />
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-8 text-white uppercase tracking-ultra-wide">
              Our Story
            </h1>
            <div className="w-24 h-0.5 bg-gold-500 mb-8"></div>
            <p className="text-xl text-silver-100 font-light tracking-wide">
              Discover the passion and craftsmanship behind Bejewelled Stories.
            </p>
          </div>
        </div>
      </section>
      
      {/* About content */}
      <section className="py-24 bg-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-display font-light mb-6 uppercase tracking-widest text-navy-900">Our Journey</h2>
              <div className="w-24 h-0.5 bg-gold-500 mb-8"></div>
              <p className="text-navy-700 mb-6 font-light tracking-wide leading-relaxed">
                Bejewelled Stories was born from a passion to bring the rich heritage of Indian jewelry craftsmanship to the modern American woman. 
                Our journey began in the vibrant streets of Jaipur, India, where our founders were captivated by the intricate designs and cultural significance of traditional Indian jewelry.
              </p>
              <p className="text-navy-700 mb-6 font-light tracking-wide leading-relaxed">
                We work directly with skilled artisans who have inherited generations of jewelry-making expertise, 
                ensuring that every pearl is ethically sourced and every design is crafted with love and precision.
              </p>
              <p className="text-navy-700 font-light tracking-wide leading-relaxed">
                Each piece in our collection tells a story of tradition, artistry, and cultural fusion, 
                creating jewelry that honors its heritage while embracing contemporary design sensibilities.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden shadow-elegant w-full animate-slide-in-right">
              <SafeImage
                src="/images/products/necklace.svg"
                alt="Traditional Indian jewelry crafting"
                fill
                style={{ objectFit: 'contain' }}
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Values</h2>
          <div className="luxury-divider"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <div className="card-luxury p-10 transition-all duration-300 hover:border-gold-400">
              <div className="text-gold-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-light mb-4 text-navy-900">Ethical Sourcing</h3>
              <p className="text-navy-700 font-light tracking-wide leading-relaxed">
                We are committed to ethical sourcing practices, ensuring that all our materials are responsibly obtained. 
                We work closely with suppliers who share our values of sustainability and fair labor practices.
              </p>
            </div>
            
            <div className="card-luxury p-10 transition-all duration-300 hover:border-gold-400">
              <div className="text-gold-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-light mb-4 text-navy-900">Artisanal Craftsmanship</h3>
              <p className="text-navy-700 font-light tracking-wide leading-relaxed">
                Each piece is handcrafted by skilled artisans who have honed their craft over generations. 
                We celebrate traditional techniques while embracing innovation in design and production.
              </p>
            </div>
            
            <div className="card-luxury p-10 transition-all duration-300 hover:border-gold-400">
              <div className="text-gold-500 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-light mb-4 text-navy-900">Cultural Appreciation</h3>
              <p className="text-navy-700 font-light tracking-wide leading-relaxed">
                We honor the rich cultural heritage behind our designs, sharing the stories and significance of traditional Indian jewelry 
                while creating pieces that resonate with the modern woman.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display font-light mb-6 text-center uppercase tracking-widest text-white">Meet Our Team</h2>
          <div className="w-24 h-0.5 bg-gold-500 mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Team Member 1 */}
            <div className="bg-navy-800 overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-soft group">
              <div className="relative h-96 w-full">
                <SafeImage
                  src="/images/placeholder.svg"
                  alt="Vrishti Shah"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-display font-light mb-2 text-white">Vrishti Shah</h3>
                <p className="text-gold-400 mb-6 text-sm uppercase tracking-widest">Founder & Creative Director</p>
                <p className="text-silver-300 font-light tracking-wide leading-relaxed">
                  With a background in traditional Indian art and modern jewelry design, Vrishti brings a unique perspective to Bejewelled Stories. 
                  Her passion for cultural heritage and contemporary aesthetics drives the creative vision behind each collection.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-navy-800 overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-soft group">
              <div className="relative h-96 w-full">
                <SafeImage
                  src="/images/placeholder.svg"
                  alt="Manan Shah"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-display font-light mb-2 text-white">Manan Shah</h3>
                <p className="text-gold-400 mb-6 text-sm uppercase tracking-widest">Co-Founder & Technical Director</p>
                <p className="text-silver-300 font-light tracking-wide leading-relaxed">
                  Manan combines his technical expertise with a deep appreciation for craftsmanship. 
                  He oversees the production process, ensuring that traditional techniques are preserved while embracing innovative approaches to jewelry making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-24 bg-cream-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-light mb-6 uppercase tracking-widest text-navy-900">Connect With Us</h2>
          <div className="luxury-divider"></div>
          <p className="text-navy-700 max-w-2xl mx-auto mb-10 font-light tracking-wide leading-relaxed">
            Have questions about our products or interested in learning more about our story? 
            We'd love to hear from you and help you find the perfect piece for your collection.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Contact Us
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
} 