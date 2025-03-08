import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Bejewelled Stories | Exquisite Indian Jewelry with Contemporary Elegance',
  description: 'Discover our exquisite collection of pearl jewelry that brings traditional Indian craftsmanship with a contemporary twist to the modern American woman.',
  keywords: 'luxury pearl jewelry, Indian jewelry, contemporary jewelry, necklaces, earrings, bracelets, luxury',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-navy-900 font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 