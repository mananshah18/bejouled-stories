"use client";

import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import { products, Product } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="animate-fade-in">
      {/* Product detail section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product images */}
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-md w-full">
                <SafeImage
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-32 rounded-lg overflow-hidden shadow-sm w-full">
                    <SafeImage
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product details */}
            <div>
              <div className="mb-8">
                <Link href="/collections/aarambh" className="text-gold-600 hover:text-gold-700">
                  ← Back to Aarambh Collection
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{product.name}</h1>
              <p className="text-2xl text-gold-800 font-medium mb-6">${product.price}</p>
              
              <div className="prose prose-lg mb-8">
                <p>{product.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold mb-4">Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-500 mr-3">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold mb-4">Materials</h2>
                <ul className="space-y-2">
                  {product.materials.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-500 mr-3">•</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-serif font-bold mb-4">Dimensions</h2>
                <p>{product.dimensions}</p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full btn-primary">Add to Cart</button>
                <button className="w-full btn-outline">Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product story section */}
      <section className="py-16 bg-pearl-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">The Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-center">{product.story}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Care instructions */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Caring for Your Pearls</h2>
            <div className="bg-pearl-50 p-8 rounded-lg shadow-md">
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
      
      {/* Related products */}
      <section className="py-16 bg-pearl-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.collection === 'aarambh' && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="card group">
                  <div className="relative h-80 overflow-hidden w-full">
                    <SafeImage
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 mb-4">{relatedProduct.shortDescription}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gold-800">${relatedProduct.price}</span>
                      <Link href={`/collections/aarambh/${relatedProduct.slug}`} className="text-gold-500 hover:text-gold-700">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 