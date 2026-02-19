'use client';

import { useEffect, useRef } from 'react';

const workflow = [
  { step: '1', title: 'Agency Closes Client', description: 'You land a deal requiring web development.' },
  { step: '2', title: 'Share Scope', description: 'Send us detailed requirements, wireframes, or brief.' },
  { step: '3', title: 'Estimate & Timeline', description: 'We provide clear estimate, timeline, and roadmap.' },
  { step: '4', title: 'Development & Staging', description: 'Weekly updates, dedicated staging environment for review.' },
  { step: '5', title: 'Deployment & Support', description: 'Clean handover, production deployment, ongoing support.' },
];

const problems = [
  { issue: 'Delayed Developers', solution: 'We have clear timelines & accountability measures.' },
  { issue: 'Poor Communication', solution: 'Weekly progress updates & dedicated Slack channel.' },
  { issue: 'No Deployment Expertise', solution: 'Full DevOps support from staging to production.' },
  { issue: 'Scope Confusion', solution: 'Detailed scope documentation & change order process.' },
];

export default function AgencyPartners() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const workflowRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('animate-slide-in-up');
            } else {
              setTimeout(() => {
                entry.target.classList.add('animate-slide-in-up');
              }, (index % 5) * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    problemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    workflowRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="bg-white py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Built for Growing Marketing Agencies</h2>
          <p className="text-lg text-gray-700">We solve the problems that keep you up at night</p>
        </div>

        {/* Problems & Solutions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">If You Face</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  problemsRef.current[index] = el;
                }}
                className="opacity-0 bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="flex gap-4">
                  <div className="text-red-500 font-bold text-lg flex-shrink-0">✕</div>
                  <div>
                    <h4 className="font-bold text-black mb-2">{item.issue}</h4>
                    <p className="text-gray-600 text-sm">
                      <span className="text-green-600 font-semibold">✓ We Solve It:</span> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-12 text-center">How We Work With You</h3>
          <div className="relative">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 z-0"></div>
            
            <div className="grid md:grid-cols-5 gap-4 relative z-10">
              {workflow.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    workflowRef.current[index] = el;
                  }}
                  className="opacity-0"
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-16 h-16 bg-white border-4 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-black text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-bold text-black mb-2">Clear Scope & Timeline</h4>
              <p className="text-gray-600 text-sm">Detailed documentation ensures no surprises.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-bold text-black mb-2">Weekly Updates</h4>
              <p className="text-gray-600 text-sm">Regular progress reports & direct communication.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-bold text-black mb-2">Production Ready</h4>
              <p className="text-gray-600 text-sm">Complete DevOps setup & ongoing support included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
