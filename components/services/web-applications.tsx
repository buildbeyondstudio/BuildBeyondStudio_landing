'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function WebApplicationsService() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Web Application Development',
    'description': 'Production-ready MERN stack web applications built to scale for startups and agencies',
    'provider': {
      '@type': 'Organization',
      'name': 'Build Beyond Studio',
      'url': 'https://buildbeyondstudio.com'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Web Application Development'
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How long does web application development take?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Most web applications take 6–8 weeks from discovery to launch. Scope matters. A simple SaaS dashboard might take 4 weeks. A complex multi-tenant platform might take 12 weeks.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What if we need to scale later? Will your web application handle it?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We architect for scale from day one. Your database, API, and infrastructure are built to handle 10x growth without breaking.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can we hire your team to maintain our web application after launch?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Absolutely. Many clients choose ongoing support packages ($2–5K/month depending on scope). We can also train your team and hand off completely.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What if you\'re building this as a white-label solution for my agency?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We build under your brand, sign NDA, and your clients never know it wasn\'t built in-house. You own the code. Full IP rights included.'
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-white via-blue-50/40 to-white py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 ref={titleRef} className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Production-Ready <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Web Applications</span> Built to Scale
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
              Most web application development agencies over-promise and under-deliver. We build production-grade applications that scale from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold">
                Book a Consultation
              </a>
              <a href="#process" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-semibold">
                See Our Process
              </a>
            </div>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Why Web Application Development Matters</h2>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your business runs on technology. A poorly built web application costs you:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold shrink-0">•</span>
                  <span className="text-gray-700"><strong>Months of delay</strong> launching to market</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold shrink-0">•</span>
                  <span className="text-gray-700"><strong>Thousands in unnecessary infrastructure</strong> costs</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold shrink-0">•</span>
                  <span className="text-gray-700"><strong>Lost trust</strong> when performance fails</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-blue-600 font-bold shrink-0">•</span>
                  <span className="text-gray-700"><strong>Technical debt</strong> that compounds over time</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              A production-grade web application, built right, becomes your competitive advantage. Our web applications are:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Fast', desc: 'Real-world performance, not benchmark tests' },
                { title: 'Scalable', desc: 'Handle growth without re-architecting' },
                { title: 'Maintainable', desc: 'Clean code your team can actually modify' },
                { title: 'Secure', desc: 'Built with industry best practices' }
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-all">
                  <h3 className="font-bold text-lg text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 id="what-we-deliver" className="text-3xl md:text-4xl font-bold text-black mb-12">What Your Web Application Includes</h2>

            <div className="space-y-8">
              {[
                {
                  title: 'MERN Stack Architecture',
                  items: ['React for responsive, modern UI', 'Node.js backend for scalability', 'MongoDB for flexible data management', 'JavaScript/TypeScript end-to-end']
                },
                {
                  title: 'Production-Ready Infrastructure',
                  items: ['Docker containerization', 'Cloud deployment (AWS, GCP, or your preference)', 'Automated CI/CD pipeline', 'Uptime monitoring & alerts']
                },
                {
                  title: 'Performance Optimization',
                  items: ['Sub-second load times', 'Database query optimization', 'Content delivery network (CDN) integration', 'Code splitting & lazy loading']
                },
                {
                  title: 'Security & Compliance',
                  items: ['SSL/TLS encryption', 'Input validation & sanitization', 'OWASP security standards', 'Environment variable management']
                },
                {
                  title: 'Deployment & Handoff',
                  items: ['Fully documented codebase', 'README with setup instructions', 'Postman API collection', '2-week post-launch support']
                }
              ].map((section, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-black mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section id="process" className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Our Web Application Development Process</h2>

            <div className="space-y-8">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Discovery & Architecture (Week 1-2)',
                  desc: 'We analyze your requirements, define database schemas, and create a technical blueprint. No surprises. No scope creep.',
                  deliverable: 'Architecture document, wireframes, tech stack agreement'
                },
                {
                  phase: 'Phase 2',
                  title: 'Development (Week 3-6)',
                  desc: 'We build your web application in 2-week sprints. Regular demos. Transparent progress. Real-time communication.',
                  deliverable: 'Fully functional web application with comprehensive testing'
                },
                {
                  phase: 'Phase 3',
                  title: 'Deployment & Optimization (Week 7)',
                  desc: 'We containerize your application, set up CI/CD, and deploy to production. Performance tuning. Security review.',
                  deliverable: 'Live web application, deployment documentation, monitoring dashboard'
                },
                {
                  phase: 'Phase 4',
                  title: 'Handoff & Support (Week 8)',
                  desc: 'Training for your team. Post-launch troubleshooting. Documentation. We stay for 2 weeks to catch any issues.',
                  deliverable: 'Confident handoff, full documentation'
                }
              ].map((phase, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-400 transition-all">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {phase.phase}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{phase.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{phase.desc}</p>
                  <p className="text-sm text-gray-600"><strong>Deliverable:</strong> {phase.deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Outcomes */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Results & Outcomes You Can Expect</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Performance',
                  items: ['Applications load in under 2 seconds', '99.9% uptime', 'Handles 10x traffic spikes without degradation']
                },
                {
                  title: 'Development Quality',
                  items: ['30–40% faster time-to-market', 'Zero technical debt at launch', 'Code review & best practices built-in']
                },
                {
                  title: 'Cost Efficiency',
                  items: ['Predictable, fixed pricing', 'Scalable infrastructure = lower cloud costs', 'Reduced maintenance burden post-launch']
                },
                {
                  title: 'Business Impact',
                  items: ['Launch faster, beat competitors', 'Scale without rebuilding', 'Confidence your application will grow with you']
                }
              ].map((category, idx) => (
                <div key={idx} className="bg-linear-to-br from-blue-50 to-white rounded-lg p-8 border border-blue-200">
                  <h3 className="text-xl font-bold text-black mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Who This Is For</h2>

            <div className="space-y-6 mb-8">
              {[
                {
                  title: 'Startups needing:',
                  items: ['An MVP that will scale from day one', 'MERN stack expertise without hiring', 'A trusted technical partner']
                },
                {
                  title: 'Agencies offering web development:',
                  items: ['White-label web application solutions', 'Scalable side revenue stream', 'No need to build delivery team']
                },
                {
                  title: 'Modern Businesses needing:',
                  items: ['Internal tools & dashboards', 'Customer-facing web applications', 'Migration from legacy systems']
                }
              ].map((group, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-lg text-black mb-3">{group.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 ml-4">
                        <span className="text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded">
              <p className="text-gray-700">
                <strong>Note:</strong> We are not a low-cost option. We charge premium rates because we deliver premium results. If you're looking for the cheapest option, we're probably not the right fit.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">FAQ: Web Application Development</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How long does web application development take?',
                  a: 'Most web applications take 6-8 weeks from discovery to launch. Scope matters. A simple SaaS dashboard might take 4 weeks. A complex multi-tenant platform might take 12 weeks. We\'ll give you an honest timeline during discovery.'
                },
                {
                  q: 'What if we need to scale later? Will your web application handle it?',
                  a: 'Yes. We architect for scale from day one. Your database, API, and infrastructure are built to handle 10x growth without breaking. You might need to increase server capacity, but your code won\'t need re-architecting.'
                },
                {
                  q: 'Can we hire your team to maintain our web application after launch?',
                  a: 'Absolutely. Many clients choose ongoing support packages ($2–5K/month depending on scope). We can also train your team and hand off completely. Your choice.'
                },
                {
                  q: 'What if you\'re building this as a white-label solution for my agency?',
                  a: 'We\'ve done this. We build under your brand, sign NDA, and your clients never know it wasn\'t built in-house. You own the code. You get full IP rights. We stay invisible.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-all">
                  <h3 className="font-bold text-lg text-black mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 bg-linear-to-r from-blue-600 to-blue-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Web Application That Scales?</h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Stop compromising on quality. Stop worrying about technical debt. Let's build your web application the right way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a href="https://wa.me/919301579493?text=Hi%21%20I%20want%20to%20discuss%20web%20application%20development" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold">
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-sm text-blue-100 mt-6">
              30-minute strategy call. No pressure. Honest advice on building your web application right.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
