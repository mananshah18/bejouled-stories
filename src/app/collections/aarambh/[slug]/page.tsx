import Link from 'next/link';
import { notFound } from 'next/navigation';
import SafeImage from '@/components/ui/SafeImage';
import { products } from '@/lib/products';
import ProductDetail from './ProductDetail';

export function generateStaticParams() {
  return products
    .filter(product => product.collection === 'aarambh')
    .map(product => ({
      slug: product.slug,
    }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
} 