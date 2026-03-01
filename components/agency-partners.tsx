'use client';

import { ClipboardCheck, RefreshCw, Rocket } from 'lucide-react';
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
                  <div className="text-red-500 font-bold text-lg shrink-0">✕</div>
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

      

        {/* Key Benefits */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6">What You Get</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2"><ClipboardCheck  className="w-6 h-6" /></div>
              <h4 className="font-bold text-black mb-2">Clear Scope & Timeline</h4>
              <p className="text-gray-600 text-sm">Detailed documentation ensures no surprises.</p>
            </div>
            <div>
              <div className="text-3xl mb-2"><RefreshCw className="w-6 h-6" /></div>
              <h4 className="font-bold text-black mb-2">Weekly Updates</h4>
              <p className="text-gray-600 text-sm">Regular progress reports & direct communication.</p>
            </div>
            <div>
              <div className="text-3xl mb-2"><Rocket className="w-6 h-6" /></div>
              <h4 className="font-bold text-black mb-2">Production Ready</h4>
              <p className="text-gray-600 text-sm">Complete DevOps setup & ongoing support included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
