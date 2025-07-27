'use client';

import { CSSProperties } from 'react'; 
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type FeatureSectionProps = {
  imageSide: 'left' | 'right';
  imageUrl: string;
  title: string;
  description: string;
  imageCaption?: string;
  imageStyle?: CSSProperties; 
};

export default function FeatureSection({ imageSide, imageUrl, title, description, imageCaption, imageStyle }: FeatureSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const imageAnimation = isVisible ? 'opacity-100 translate-x-0 scale-100' : `opacity-0 scale-95 ${imageSide === 'left' ? '-translate-x-20' : 'translate-x-20'}`;
  const textAnimation = isVisible ? 'opacity-100 translate-x-0 scale-100' : `opacity-0 scale-95 ${imageSide === 'left' ? 'translate-x-20' : '-translate-x-20'}`;

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-12 md:py-20`}
    >
      {/* Resim Bölümü */}
      <div className={`w-full md:w-1/2 transition-all duration-1000 ease-in-out ${imageSide === 'left' ? 'md:order-1' : 'md:order-2'} ${imageAnimation}`}>

        <figure className="transition-transform duration-500 ease-in-out hover:scale-[1.03]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto rounded-lg shadow-2xl max-w-full"
            style={imageStyle}
          />

          {imageCaption && (
            <figcaption className="mt-4 text-center text-sm text-gray-400 italic">
              {imageCaption}
            </figcaption>
          )}
        </figure>

      </div>

      {/* Metin Bölümü */}
      <div className={`w-full md:w-1/2 transition-all duration-1000 ease-in-out delay-200 ${imageSide === 'left' ? 'md:order-2' : 'md:order-1'} ${textAnimation}`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}