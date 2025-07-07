'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { slides } from './IntroSlides'
import { IntroSlide } from './IntroSlide';
import { IntroNavigation } from './IntroNavigation';

export function IntroPage() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const current = slides[index];

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 text-center">
      <IntroSlide title={current.title} description={current.description} />
      <IntroNavigation index={index} total={slides.length} onNext={nextSlide} />
    </div>
  );
}