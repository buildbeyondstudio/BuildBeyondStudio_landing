'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '🌐',
    title: 'Business Websites',
    description: 'High-converting, responsive websites built for performance & lead generation.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Lead Capture Forms'],
  },
  {
    icon: '⚙️',
    title: 'Web Applications',
    description: 'Custom dashboards, portals & internal tools tailored to client workflows.',
    features: ['Real-time Updates', 'User Management', 'API Integration', 'Data Analytics'],
  },
  {
    icon: '🚀',
    title: 'DevOps & Deployment',
    description: 'Dockerized builds, server setup, CI/CD & production optimization.',
    features: ['Docker Setup', 'Cloud Deployment', 'CI/CD Pipeline', 'Monitoring'],
  },
  {
    icon: '🔧',
    title: 'Maintenance & Scaling',
    description: 'Ongoing updates, performance monitoring & technical support.',
    features: ['24/7 Support', 'Performance Tuning', 'Security Updates', 'Scaling Support'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-slide-in-up');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-gradient-to-b from-white via-blue-50/30 to-white py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Crafted solutions designed to transform your vision into reality</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group relative"
            >
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-400/5 rounded-2xl border border-blue-200/50 group-hover:border-blue-400/80 transition-all duration-300"></div>

              {/* Premium Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-7 sm:p-8 h-full flex flex-col rounded-2xl backdrop-blur-sm">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-5 flex-grow group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Features - Minimal List */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 group-hover:border-blue-200 transition-colors">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
