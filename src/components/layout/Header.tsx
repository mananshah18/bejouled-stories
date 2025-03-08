"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Aarambh', href: '/collections/aarambh' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-navy-900 text-white py-2 text-xs tracking-widest">
        <div className="container-custom flex justify-between items-center">
          <div className="hidden md:block">
            <span>Free shipping on orders over $150</span>
          </div>
          <div className="flex space-x-6 mx-auto md:mx-0">
            <Link href="/shipping" className="hover:text-gold-300 transition-colors duration-300">Shipping</Link>
            <Link href="/returns" className="hover:text-gold-300 transition-colors duration-300">Returns</Link>
            <Link href="/faq" className="hover:text-gold-300 transition-colors duration-300">FAQ</Link>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <Disclosure as="nav" className={`bg-cream-50 transition-all duration-300 ${scrolled ? 'shadow-elegant' : 'border-b border-silver-200'}`}>
        {({ open }: { open: boolean }) => (
          <>
            <div className="container-custom">
              <div className="relative flex items-center justify-between h-24">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-none text-navy-500 hover:text-navy-900 hover:bg-cream-100 focus:outline-none focus:ring-1 focus:ring-gold-600">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                
                {/* Logo */}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="flex items-center">
                      <span className="font-display text-2xl md:text-3xl font-light text-navy-900 uppercase tracking-ultra-wide">Bejewelled Stories</span>
                    </Link>
                  </div>
                </div>
                
                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={pathname === item.href ? 'nav-link-active' : 'nav-link'}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                {/* Icons */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                  <button className="p-2 text-navy-500 hover:text-navy-900 transition-colors duration-300">
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  
                  <button className="p-2 text-navy-500 hover:text-navy-900 transition-colors duration-300">
                    <HeartIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  
                  <button className="p-2 text-navy-500 hover:text-navy-900 transition-colors duration-300">
                    <UserIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  
                  <Link href="/cart" className="p-2 text-navy-500 hover:text-navy-900 relative transition-colors duration-300">
                    <ShoppingBagIcon className="h-5 w-5" aria-hidden="true" />
                    {cartItemCount > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-gold-600 rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile menu panel */}
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Disclosure.Panel className="sm:hidden bg-cream-50 border-t border-silver-200">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={`block pl-3 pr-4 py-3 border-l-2 text-base font-light uppercase tracking-widest transition-colors duration-300 ${
                        pathname === item.href
                          ? 'border-gold-600 text-navy-900 bg-cream-100'
                          : 'border-transparent text-navy-500 hover:text-navy-900 hover:bg-cream-100 hover:border-gold-300'
                      }`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
} 