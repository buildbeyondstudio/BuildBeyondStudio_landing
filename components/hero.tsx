'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (buttonsRef.current) observer.observe(buttonsRef.current);
    if (trustRef.current) observer.observe(trustRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-gradient-to-br from-white via-blue-50/40 to-white pt-0 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Premium pattern background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]" width="100%" height="100%">
        <defs>
          {/* Subtle dot pattern */}
          <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="currentColor" opacity="0.6" />
          </pattern>

          {/* Diagonal lines pattern */}
          <pattern id="diagonalLines" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
          </pattern>

          {/* Main grid pattern */}
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
          </pattern>
        </defs>

        {/* Layered pattern combination */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#diagonalLines)" opacity="0.4" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-soft-light">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <filter id="perlin">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="rgb(100, 150, 255)" filter="url(#perlin)" />
        </svg>
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary animated orb - top right */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/35 to-blue-200/15 rounded-full blur-3xl" style={{
          animation: 'float 8s ease-in-out infinite',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.5s ease-out',
          marginLeft: '0'
        }}></div>

        {/* Secondary animated orb - bottom left */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-300/25 to-blue-100/15 rounded-full blur-3xl" style={{
          animation: 'float 10s ease-in-out infinite 1s',
          transform: `translate(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px)`,
          transition: 'transform 0.5s ease-out',
          marginRight: '0'
        }}></div>

        {/* Tertiary accent - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-b from-blue-200/15 to-transparent rounded-full blur-3xl" style={{
          animation: 'float 12s ease-in-out infinite 2s',
        }}></div>
      </div>

      {/* Animated accent lines */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {/* Top left accent line */}
        <div className="absolute top-1/4 left-0 w-64 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0" style={{
          animation: 'shimmer 3s ease-in-out infinite'
        }}></div>

        {/* Bottom right accent line */}
        <div className="absolute bottom-1/3 right-0 w-80 h-0.5 bg-gradient-to-l from-blue-300/0 via-blue-300/25 to-blue-300/0" style={{
          animation: 'shimmer 4s ease-in-out infinite 0.5s'
        }}></div>
      </div>

      {/* Interactive shapes - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full" style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'twinkle 4s ease-in-out infinite',
          boxShadow: '0 0 20px rgba(96, 165, 250, 0.6)'
        }}></div>
        <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full" style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
          animation: 'twinkle 5s ease-in-out infinite 0.5s',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
        }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full" style={{
          transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.4s ease-out',
          animation: 'twinkle 6s ease-in-out infinite 1s',
          boxShadow: '0 0 10px rgba(147, 197, 253, 0.5)'
        }}></div>
      </div>

      {/* Subtle premium background shapes - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400/15 to-blue-200/5 rounded-full blur-3xl" style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}></div>
        <div className="absolute bottom-10 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-tr from-blue-300/10 to-blue-100/3 rounded-full blur-3xl" style={{
          transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        {/* Decorative circles above title */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5 opacity-0 animate-slide-in-up">
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
          <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-widest">Tech Partner for Agencies</span>
          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"></div>
        </div>

        <h1
          ref={titleRef}
          className="opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight tracking-tight"
          style={{
            transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
            transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)'
          }}
        >
          <span className="inline-block">Build Beyond Studio:</span>
          <br />
          <span className="inline-block">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-black">Web Applications</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 blur-xl opacity-20 -z-10" style={{
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></span>
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{
                width: '0%',
                animation: 'expandWidth 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards'
              }}></div>
            </span>
          </span>
          <br />
          <span className="text-gray-900">Built to Scale</span>
        </h1>

        <p
          ref={subtitleRef}
          className="opacity-0 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Partner with us to deliver stunning, <span className="font-semibold text-gray-900 relative">
            production-ready web applications.
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" style={{
              animation: 'slideIn 1.2s ease-out 0.8s forwards',
              opacity: 0
            }}></div>
          </span> While you focus on client relationships, we handle MERN stack, DevOps, and technical excellence. White-label or co-branded.
        </p>

        <div ref={trustRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 md:gap-7 mb-6 sm:mb-8 flex-wrap">
          {[
            { icon: '✓', label: 'MERN Stack Expert' },
            { icon: '✓', label: 'DevOps & Deployment' },
            { icon: '✓', label: 'White-Label Ready' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/40 backdrop-blur-md border border-blue-200/60 hover:border-blue-400 transition-all duration-300 hover:bg-white/60 hover:shadow-lg hover:shadow-blue-500/10 group cursor-pointer"
              style={{
                animation: `slideUp 0.6s ease-out ${0.2 + idx * 0.15}s forwards`,
                opacity: 0
              }}
            >
              <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/50 transition-all text-xs font-bold text-white">
                {item.icon}
              </div>
              <span className="text-black font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition-colors">{item.label}</span>
            </div>
          ))}
        </div>

        <div ref={buttonsRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            onMouseEnter={() => setIsHoveringButton('call')}
            onMouseLeave={() => setIsHoveringButton(null)}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 font-semibold text-sm sm:text-base transform hover:scale-105 active:scale-95 w-full sm:w-auto border border-blue-400/40 backdrop-blur-sm group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Book a Call
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0" style={{
              transform: 'translateX(-100%)',
              animation: `shine 3s ease-in-out infinite`
            }}></div>
          </button>
          <button
            onMouseEnter={() => setIsHoveringButton('cases')}
            onMouseLeave={() => setIsHoveringButton(null)}
            onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer border-2 border-blue-600 bg-white/30 backdrop-blur-md text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-white/60 hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 font-semibold text-sm sm:text-base transform hover:scale-105 active:scale-95 w-full sm:w-auto group"
          >
            <span className="group-hover:text-blue-700 transition-colors">See Our Work</span>
          </button>
        </div>

        {/* Scroll indicator - hidden on small screens */}
        <div className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-gray-400 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
            <div className="w-0.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors" style={{
              animation: 'bounce 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-20px);
          }
          50% {
            opacity: 0.8;
            transform: translateX(20px);
          }
        }

        @keyframes slideIn {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
      `}</style>
    </section>
  );
}
