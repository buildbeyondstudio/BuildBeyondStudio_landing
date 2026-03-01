"use client";

import { useEffect, useRef } from "react";
import { Users, Briefcase, ShieldCheck, Layers } from "lucide-react";

const differentiators = [
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "No Need to Hire Developers",
    description:
      "Offer full-scale digital services without building or managing an in-house technical team. We act as your dedicated execution partner.",
    metric: "Scale Without Hiring",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    title: "You Close the Client. We Deliver.",
    description:
      "Focus on strategy, sales, and client relationships while we handle the complete technical build — seamlessly and professionally.",
    metric: "Execution Partner",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Secure & Skilled Development",
    description:
      "Experienced developers, clean code, and secure systems. Every project is built to perform reliably and meet high professional standards.",
    metric: "Trusted Quality",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    title: "White-Label & Long-Term Support",
    description:
      "Deliver under your brand with confidence. We support your agency behind the scenes — not just for one project, but for long-term growth.",
    metric: "Built for Partnership",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-slide-in-up");
            } else {
              setTimeout(
                () => {
                  entry.target.classList.add("animate-slide-in-up");
                },
                (index - 1) * 150,
              );
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="bg-white py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Build Beyond Studio?
          </h2>
          <p className="text-lg text-gray-600">
            Leading web development agency for agencies seeking production-ready
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="opacity-0 group"
            >
              <div className="bg-linear-to-br from-gray-50 to-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-100 to-blue-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">{item.icon}</div>
                  </div>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                    {item.metric}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-linear-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Guarantee
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24-48h</div>
              <p className="text-blue-100">Response time on critical issues</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Code ownership & documentation</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">∞</div>
              <p className="text-blue-100">Support & maintenance partnership</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're not just developers. We're your extension team, committed to
            delivering production-ready solutions that make your clients happy.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg font-semibold">
            <a href="#contact">Book a Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
}
