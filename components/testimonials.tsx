'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    image: '/feedback1.png',
    title: 'E-Commerce Dashboard',
    client: 'TechStart Agency',
  },
  {
    image: '/feedback2.png',
    title: 'Client Portal',
    client: 'Marketing Pro',
  },
  {
    image: '/feedback3.png',
    title: 'Lead Generation Site',
    client: 'Growth Agency',
  },
  {
    image: '/feedback4.png',
    title: 'Analytics Platform',
    client: 'Data Solutions',
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Trusted by Modern Founders</h2>
          <p className="text-gray-600 text-sm md:text-base">Why leading brands choose Build Beyond Studio</p>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full relative">
            {/* Infinite carousel effect with smooth transitions */}
            <div className="relative w-full h-full flex items-center justify-center px-4">
              {/* Previous item (left) - hidden on mobile */}
              <div className="absolute left-0 w-1/5 h-full opacity-40 scale-75 blur-sm hidden lg:flex items-center justify-center">
                <div className="w-full h-4/5 overflow-hidden rounded-lg">
                  <img
                    src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                    alt="Previous"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Current item (center) */}
              <div className="relative w-full md:w-3/4 h-full flex items-center justify-center transition-all duration-700 ease-out">
                <div className="w-full h-4/5 rounded-xl overflow-hidden shadow-lg bg-white/50 backdrop-blur-sm">
                  <img
                    key={currentIndex}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              </div>

              {/* Next item (right) - hidden on mobile */}
              <div className="absolute right-0 w-1/5 h-full opacity-40 scale-75 blur-sm hidden lg:flex items-center justify-center">
                <div className="w-full h-4/5 overflow-hidden rounded-lg">
                  <img
                    src={testimonials[(currentIndex + 1) % testimonials.length].image}
                    alt="Next"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'bg-blue-600 w-8 h-2'
                  : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client info below carousel */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-xs md:text-sm font-medium mb-1">{testimonials[currentIndex].client}</p>
          <h3 className="text-black text-sm md:text-base font-bold">{testimonials[currentIndex].title}</h3>
        </div>
      </div>
    </section>
  );
}
