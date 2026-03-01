"use client";

import { useEffect, useRef } from "react";

const workflow = [
  {
    step: "1",
    title: "Agency Closes Client",
    description: "You land a deal requiring web development.",
  },
  {
    step: "2",
    title: "Share Scope",
    description: "Send us detailed requirements, wireframes, or brief.",
  },
  {
    step: "3",
    title: "Estimate & Timeline",
    description: "We provide clear estimate, timeline, and roadmap.",
  },
  {
    step: "4",
    title: "Development & Staging",
    description: "Weekly updates, dedicated staging environment for review.",
  },
  {
    step: "5",
    title: "Deployment & Support",
    description: "Clean handover, production deployment, ongoing support.",
  },
];

const Workflow = () => {
  const workflowRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => {
                entry.target.classList.add("animate-slide-in-up");
              },
              (index % 5) * 150,
            );
          }
        });
      },
      { threshold: 0.1 },
    );

    workflowRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex items-center justify-center ">
      <div className=" bg-white py-24 md:py-32 px-6 max-w-6xl">
        <h3 className="text-2xl font-bold text-black mb-12 text-center">
          How We Work With You
        </h3>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-blue-200 via-blue-400 to-blue-200 z-0"></div>

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

                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
