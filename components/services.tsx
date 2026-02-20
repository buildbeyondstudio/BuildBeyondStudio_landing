'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: '💻',
    title: 'Web Application Development',
    description: 'Production-ready MERN stack applications built to scale from day one.',
    features: ['MERN Stack', 'Scalable Architecture', 'Production-Ready'],
    link: '/services/web-applications'
  },
  {
    icon: '🚀',
    title: 'DevOps & Deployment',
    description: 'Docker, CI/CD, cloud deployment, and infrastructure that handles growth.',
    features: ['Docker Setup', 'CI/CD Pipeline', 'Cloud Deployment'],
    link: '/services/devops'
  },
  {
    icon: '🤝',
    title: 'White-Label Solutions',
    description: 'Build custom applications under your brand. Your reputation, our expertise.',
    features: ['Full IP Rights', 'Your Branding', 'Complete Ownership'],
    link: '/services/white-label'
  },
  {
    icon: '⚙️',
    title: 'Technical Consulting',
    description: 'Strategic guidance on architecture, technology selection, and scalability.',
    features: ['Tech Strategy', 'Architecture Review', 'Best Practices'],
    link: '/services/consulting'
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

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
    <section id="services" className="bg-linear-to-b from-white via-blue-50/30 to-white py-28 md:py-40 px-4 sm:px-6 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">Web Development Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Build Beyond Studio specializes in MERN stack development, DevOps deployment, and white-label solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group relative block cursor-pointer"
            >
              {/* Card Background with Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-blue-400/5 rounded-2xl border border-blue-200/50 group-hover:border-blue-400/80 transition-all duration-300"></div>

              {/* Premium Hover Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-white to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-7 sm:p-8 h-full flex flex-col rounded-2xl backdrop-blur-sm">
                {/* Icon Container */}
                <div className="w-14 h-14 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm mb-5 grow group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                {/* Features & Arrow */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 group-hover:border-blue-200 transition-colors items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-100 transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-600 group-hover:text-blue-700 font-semibold text-sm">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
