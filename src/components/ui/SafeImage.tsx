"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

export default function SafeImage({ src, alt, fallbackSrc = '/images/placeholder.svg', ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (!isError) {
      setImgSrc(fallbackSrc);
      setIsError(true);
    }
  };

  // Determine if we're using fill mode
  const isFill = props.fill === true;

  return (
    <div 
      className={`relative ${props.className || ''} ${isFill ? 'w-full h-full' : ''}`} 
      style={{
        ...(props.style || {}),
        position: isFill ? 'relative' : 'relative',
        width: isFill ? '100%' : undefined,
        height: isFill ? '100%' : undefined,
      }}
    >
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onError={handleError}
      />
    </div>
  );
} 