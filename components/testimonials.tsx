'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e4be4f7d?w=400&h=300&fit=crop',
    title: 'E-Commerce Dashboard',
    client: 'TechStart Agency',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    title: 'Client Portal',
    client: 'Marketing Pro',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    title: 'Lead Generation Site',
    client: 'Growth Agency',
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    title: 'Analytics Platform',
    client: 'Data Solutions',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    title: 'SaaS Dashboard',
    client: 'Automation Plus',
  },
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
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Client Feedbacks</h2>
          <p className="text-gray-600">Latest projects we've delivered</p>
        </div>

        {/* Carousel */}
        <div ref={containerRef} className="relative h-80 md:h-96">
          <div className="flex items-center justify-center h-full relative">
            {/* Infinite carousel effect with smooth transitions */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Previous item (left) */}
              <div className="absolute left-0 w-1/4 h-full opacity-40 scale-75 blur-sm hidden lg:block">
                <img
                  src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].image}
                  alt="Previous"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Current item (center) */}
              <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
                <div className="w-full md:w-2/3 h-full transition-all duration-700 ease-out">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      key={currentIndex}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].title}
                      className="w-full h-full object-cover animate-scale-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <div>
                        <p className="text-white/80 text-sm font-medium">{testimonials[currentIndex].client}</p>
                        <h3 className="text-white text-xl font-bold">{testimonials[currentIndex].title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next item (right) */}
              <div className="absolute right-0 w-1/4 h-full opacity-40 scale-75 blur-sm hidden lg:block">
                <img
                  src={testimonials[(currentIndex + 1) % testimonials.length].image}
                  alt="Next"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation info */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            ← Previous
          </button>
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
