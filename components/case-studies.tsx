'use client';

import { useEffect, useRef, useState } from 'react';

const caseStudies = [
  {
    title: 'TipsyBombs – Brand & E-Commerce Platform',
    industry: 'Food & Beverage / D2C E-Commerce',
    problem:
      'The brand needed a modern digital presence to showcase products, sell online, and manage inventory efficiently through a centralized system.',
    solution:
      'Developed a full-featured e-commerce platform with product listings, secure checkout, inventory management, and an admin dashboard for order and stock control.',
    deployment:
      'Deployed on scalable cloud infrastructure with optimized performance and production-ready configurations.',
    impact:
      'Enabled online sales channel, streamlined inventory management, improved brand visibility, and reduced manual product handling efforts.',
    liveUrl: 'https://tipsybombs.com/',
    screenshots: [
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468854/Screenshot_2026-02-19_080030_cwoegj.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468852/Screenshot_2026-02-19_080039_ujlwtx.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468852/Screenshot_2026-02-19_080047_hpeotz.png?w=1200&h=800&fit=crop&q=100&dpr=2',
    ],
  },

  {
    title: 'Coccon Curry – Restaurant Brand Website',
    industry: 'Hospitality / Restaurant',
    problem:
      'The restaurant lacked a professional online presence to communicate its brand story, menu, and identity to potential customers.',
    solution:
      'Built a clean, visually appealing brand website focused on storytelling, menu presentation, and brand awareness without online ordering or reservations.',
    deployment:
      'Hosted on a fast and reliable hosting platform with SEO optimization for local discoverability.',
    impact:
      'Strengthened brand credibility, improved online visibility, and provided customers with a clear understanding of the restaurant’s offerings.',
    liveUrl: 'https://www.cocconcurry.com/',
    screenshots: [
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468859/Screenshot_2026-02-19_080136_iyow84.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468857/Screenshot_2026-02-19_080154_ihqlkf.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468854/Screenshot_2026-02-19_080223_pjaipj.png?w=1200&h=800&fit=crop&q=100&dpr=2',
    ],
  },

  {
    title: 'TranquilityLux – Luxury Brand & International E-Commerce',
    industry: 'Luxury Lifestyle / Global E-Commerce',
    problem:
      'The brand required a premium digital platform to sell luxury products globally with a seamless and customized checkout experience.',
    solution:
      'Designed and developed a luxury-focused e-commerce platform with custom checkout flow, international pricing, and a refined UI aligned with high-end branding.',
    deployment:
      'Deployed on a globally optimized hosting environment ensuring fast load times and secure transactions for international users.',
    impact:
      'Expanded global reach, improved conversion rates for international customers, and delivered a premium online shopping experience.',
    liveUrl: 'https://www.tranquilitylux.com/',
    screenshots: [
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468854/Screenshot_2026-02-19_080245_lvtxs4.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468854/Screenshot_2026-02-19_080250_anuy3g.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468854/Screenshot_2026-02-19_080305_sn5c77.png?w=1200&h=800&fit=crop&q=100&dpr=2',
    ],
  },

  {
    title: 'DLAR Dashboard – Enterprise Data Visualization Platform',
    industry: 'Enterprise / Data Analytics',
    problem:
      'DLAR managed large volumes of store-level data using spreadsheets, making analysis, monitoring, and decision-making inefficient.',
    solution:
      'Built a personalized dashboard to automate sheet data processing with advanced visualizations, charts, and role-based access for admins, clients, and managers.',
    deployment:
      'Deployed on secure cloud infrastructure with performance-optimized backend and scalable database architecture.',
    impact:
      'Automated data workflows, improved reporting accuracy, enabled faster insights through visual analytics, and reduced dependency on manual spreadsheets.',
    screenshots: [
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468853/Screenshot_2026-02-19_080436_ty42mg.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468854/Screenshot_2026-02-19_080448_ukyp8g.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468851/Screenshot_2026-02-19_080504_zmlcjd.png?w=1200&h=800&fit=crop&q=100&dpr=2',
    ],
  },

  {
    title: 'Pinnacle Dashboard – Lightweight Data Monitoring System',
    industry: 'Business Intelligence / Internal Tools',
    problem:
      'The team needed a simple system to display structured sheet data without complex analytics or administrative controls.',
    solution:
      'Developed a streamlined dashboard focused on displaying sheet data in structured table formats with essential details and minimal configuration.',
    deployment:
      'Hosted on a reliable cloud platform ensuring consistent access and performance.',
    impact:
      'Simplified data access, reduced dependency on raw spreadsheets, and provided a clean, readable data view for internal users.',
    screenshots: [
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468851/Screenshot_2026-02-19_080649_sfzpje.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468851/Screenshot_2026-02-19_080711_j1cpci.png?w=1200&h=800&fit=crop&q=100&dpr=2',
      'https://res.cloudinary.com/dnnsjmrku/image/upload/v1771468851/Screenshot_2026-02-19_080638_dmo4xg.png?w=1200&h=800&fit=crop&q=100&dpr=2',
    ],
  },
];


export default function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentScreenshots, setCurrentScreenshots] = useState<{ [key: number]: number }>({});
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

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

  useEffect(() => {
    const intervals = caseStudies.map((_, idx) => {
      return setInterval(() => {
        setCurrentScreenshots((prev) => ({
          ...prev,
          [idx]: ((prev[idx] || 0) + 1) % caseStudies[idx].screenshots.length,
        }));
      }, 4000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section id="cases" className="bg-white py-20 md:py-32 px-4 sm:px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">Latest Projects</h2>
          <p className="text-base sm:text-lg text-gray-600">Real impact across diverse industries and use cases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onClick={() => setSelectedStudy(index)}
              className="opacity-0 group cursor-pointer"
            >
              <div className="h-full bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col overflow-hidden hover:shadow-blue-500/10">
                {/* Image Carousel - Larger & Premium */}
                <div className="relative h-40 sm:h-48 md:h-56 bg-gray-700 overflow-hidden shrink-0 group">
                  <img
                    src={study.screenshots[currentScreenshots[index] || 0]}
                    alt={`${study.title} screenshot`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 filter"
                    style={{
                      filter: 'brightness(1.02) contrast(1.08)',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>

                  {/* Go Live Button - Absolute Positioned */}
                  {study.liveUrl && !study.liveUrl.includes('example.com') && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 sm:top-6 right-4 sm:right-6 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/95 hover:bg-white text-gray-900 font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/30 flex items-center gap-2 backdrop-blur-sm border border-white/20"
                    >
                      <span>Go Live</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  )}

                  {/* Carousel dots */}
                  <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
                    {study.screenshots.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`rounded-full transition-all ${dotIndex === (currentScreenshots[index] || 0)
                          ? 'bg-white w-5 sm:w-6 h-2'
                          : 'bg-white/50 w-2 h-2'
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col grow">
                  {/* Industry Badge */}
                  <p className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">{study.industry}</p>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {study.title}
                  </h3>

                  {/* Problem & Solution */}
                  <div className="space-y-5 mb-6 grow">
                    <div className="border-l-2 border-blue-500 pl-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Challenge</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{study.problem}</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-4">
                      <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Impact</p>
                      <p className="text-sm text-green-300 font-semibold leading-relaxed">{study.impact}</p>
                    </div>
                  </div>

                  {/* Footer with arrow hint */}
                  <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">View Full Case Study</span>
                    <svg className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedStudy !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto shadow-2xl animate-scale-in my-auto border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-linear-to-r from-gray-900 to-gray-800 border-b border-gray-700 z-10 p-6 sm:p-8 flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs sm:text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">{caseStudies[selectedStudy].industry}</p>
                <h2 className="text-2xl sm:text-4xl font-bold text-white">{caseStudies[selectedStudy].title}</h2>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="cursor-pointer shrink-0 text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg ml-4"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-12">
              {/* Full Images Gallery */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Project Showcase</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudies[selectedStudy].screenshots.map((screenshot, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-xl border border-gray-700 group-hover:border-blue-500 transition-all">
                      <img
                        src={screenshot}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-auto object-contain bg-gray-800 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Challenge */}
                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 border border-blue-500/30 group-hover:bg-blue-600/30 group-hover:border-blue-500 transition-all">
                    <span className="text-lg text-blue-400 font-bold">①</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed">{caseStudies[selectedStudy].problem}</p>
                </div>

                {/* Solution */}
                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-lg mb-4 border border-green-500/30 group-hover:bg-green-600/30 group-hover:border-green-500 transition-all">
                    <span className="text-lg text-green-400 font-bold">②</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Our Solution</h3>
                  <p className="text-gray-300 leading-relaxed">{caseStudies[selectedStudy].solution}</p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="border-t border-gray-700 mb-8 pt-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Stack */}
                <div className="group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600/20 rounded-lg mb-4 border border-purple-500/30 group-hover:bg-purple-600/30 group-hover:border-purple-500 transition-all">
                    <span className="text-lg text-purple-400 font-bold">③</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Technical Stack</h3>
                  <p className="text-gray-300 leading-relaxed">{caseStudies[selectedStudy].deployment}</p>
                </div>

                {/* Results */}
                <div className="group bg-linear-to-br from-blue-600/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 group-hover:border-blue-500/40 group-hover:from-blue-600/15 transition-all">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/30 rounded-lg mb-4 border border-blue-500/50">
                    <span className="text-lg text-blue-300 font-bold">④</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">Results & Impact</h3>
                  <p className="text-blue-100 font-medium leading-relaxed">{caseStudies[selectedStudy].impact}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 justify-end">
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="cursor-pointer px-4 sm:px-6 py-2.5 sm:py-3 text-gray-300 hover:text-white hover:bg-gray-700 border border-gray-600 transition-all font-medium text-sm sm:text-base rounded-lg"
                >
                  Close
                </button>
                {caseStudies[selectedStudy].liveUrl && !caseStudies[selectedStudy].liveUrl.includes('example.com') && (
                  <a
                    href={caseStudies[selectedStudy].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-blue-500 transition-all inline-flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/20 rounded-lg"
                  >
                    View Live →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
