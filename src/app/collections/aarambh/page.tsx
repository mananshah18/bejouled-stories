"use client";

import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { products, Product } from '@/lib/products';

export default function AarambhCollectionPage() {
  // Filter products for Aarambh collection
  const aarambhProducts = products.filter((product: Product) => product.collection === 'aarambh');

  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative h-[40vh] bg-pearl-100">
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <SafeImage
            src="/images/hero-banner.svg"
            alt="Aarambh Collection"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20" />
        </div>
        
        <div className="relative container-custom h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-pearl-800 drop-shadow-lg">
              Aarambh Collection
            </h1>
            <p className="text-xl text-pearl-700 drop-shadow-md">
              Our debut collection featuring traditional Indian pearl jewelry with a contemporary twist.
            </p>
          </div>
        </div>
      </section>
      
      {/* Collection description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">The Beginning of a Journey</h2>
            <p className="text-gray-600 mb-6">
              "Aarambh" (Sanskrit for "Beginning") marks the start of our journey to bring traditional Indian jewelry craftsmanship 
              to the modern American woman. Each piece in this collection represents a fusion of cultures, a celebration of heritage, 
              and a step into the future of jewelry design.
            </p>
            <p className="text-gray-600">
              Featuring ethically sourced pearls and precious metals, these pieces are designed to be versatile, elegant, 
              and meaningful additions to your jewelry collection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Products grid */}
      <section className="py-16 bg-pearl-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aarambhProducts.map((product) => (
              <div key={product.id} className="card group">
                <div className="relative h-80 overflow-hidden w-full">
                  <SafeImage
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gold-800">${product.price}</span>
                    <Link href={`/collections/aarambh/${product.slug}`} className="text-gold-500 hover:text-gold-700">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collection story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">The Story Behind Aarambh</h2>
              <p className="text-gray-600 mb-6">
                The Aarambh collection was inspired by a journey to Jaipur, India, where our founder was captivated by the 
                rich tradition of jewelry making that has been passed down through generations. The intricate designs, 
                the skilled craftsmanship, and the cultural significance of each piece told a story that deserved to be shared.
              </p>
              <p className="text-gray-600">
                Working closely with local artisans, we developed a collection that honors these traditions while incorporating 
                contemporary design elements that appeal to the modern American woman. Each piece in the Aarambh collection 
                represents this beautiful fusion of cultures and the beginning of a new chapter in jewelry design.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl w-full">
              <SafeImage
                src="/images/products/necklace.svg"
                alt="Jewelry crafting in India"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Care instructions */}
      <section className="py-16 bg-pearl-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Caring for Your Pearls</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3">•</span>
                  <p className="text-gray-600">
                    <strong>Last On, First Off:</strong> Pearls should be the last thing you put on when getting dressed and the first thing you take off when undressing.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3">•</span>
                  <p className="text-gray-600">
                    <strong>Avoid Chemicals:</strong> Keep pearls away from perfumes, hairsprays, and other cosmetics that can damage their delicate surface.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3">•</span>
                  <p className="text-gray-600">
                    <strong>Gentle Cleaning:</strong> Wipe pearls with a soft, damp cloth after wearing to remove any oils or dirt. Never use harsh cleaners or ultrasonic cleaners.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3">•</span>
                  <p className="text-gray-600">
                    <strong>Proper Storage:</strong> Store pearls separately from other jewelry to prevent scratches. Ideally, keep them in a soft pouch or wrapped in a soft cloth.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3">•</span>
                  <p className="text-gray-600">
                    <strong>Regular Wear:</strong> Pearls benefit from being worn regularly, as the natural oils from your skin help maintain their luster.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 