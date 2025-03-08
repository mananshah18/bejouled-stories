"use client";

import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SafeImage from '@/components/ui/SafeImage';

// This is a placeholder for demonstration purposes
// In a real application, this would be fetched from a state management solution or API
const cartItems = [
  {
    id: '1',
    name: 'Amara Pearl Necklace',
    price: 149,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    slug: 'amara-pearl-necklace'
  },
  {
    id: '2',
    name: 'Kavya Pearl Earrings',
    price: 129,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    slug: 'kavya-pearl-earrings'
  }
];

export default function CartPage() {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="animate-fade-in">
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">Your Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
              <Link href="/collections/aarambh" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <h2 className="text-xl font-serif font-bold">Items ({cartItems.length})</h2>
                </div>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start border-b border-gray-200 pb-6">
                      <div className="relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <SafeImage
                          src={item.image}
                          alt={item.name}
                          width={96}
                          height={96}
                        />
                      </div>
                      
                      <div className="ml-6 flex-grow">
                        <div className="flex justify-between">
                          <Link href={`/collections/aarambh/${item.slug}`} className="text-lg font-medium text-gray-800 hover:text-gold-600">
                            {item.name}
                          </Link>
                          <button className="text-gray-400 hover:text-gray-600" aria-label="Remove item">
                            <XMarkIcon className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <p className="text-gold-800 font-medium mt-1">${item.price}</p>
                        
                        <div className="flex items-center mt-4">
                          <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-600 mr-3">
                            Quantity:
                          </label>
                          <select
                            id={`quantity-${item.id}`}
                            name={`quantity-${item.id}`}
                            className="border border-gray-300 rounded-md py-1 px-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-transparent"
                            defaultValue={item.quantity}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href="/collections/aarambh" className="text-gold-600 hover:text-gold-700">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
              
              {/* Order summary */}
              <div>
                <div className="bg-pearl-50 rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-serif font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shipping}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-gold-800">${total}</span>
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary mb-4">
                    Proceed to Checkout
                  </button>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>Secure checkout powered by Stripe</p>
                  </div>
                </div>
                
                <div className="mt-8 bg-pearl-50 rounded-lg p-6 shadow-sm">
                  <h2 className="text-lg font-serif font-bold mb-4">Have a Promo Code?</h2>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="input-field flex-grow"
                    />
                    <button className="ml-2 btn-secondary whitespace-nowrap">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 