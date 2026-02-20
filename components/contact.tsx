'use client';

import { useState, useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '+919301579493';
const WHATSAPP_MESSAGE = 'Hi! I would like to discuss partnership opportunities with your agency.';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you! We\'ll be in touch shortly.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Something went wrong. Please try again.');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 md:py-32 px-4 sm:px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 md:mb-4">Partner with Build Beyond Studio</h2>
          <p className="text-base sm:text-lg text-gray-700">Get in touch to discuss your web development project and how we can help scale your business.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="opacity-0 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-black placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-base"
              >
                Send Message
              </button>

              {status && (
                <p className={`text-sm text-center ${status.includes('Thank you') ? 'text-green-600' : 'text-blue-600'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 sm:p-10 rounded-xl border border-gray-200 hover:border-green-400 transition-all h-full flex flex-col items-center justify-center text-center">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="font-bold text-black text-xl sm:text-2xl mb-3">Chat with us on WhatsApp</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">Connect with us directly for quick responses</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold text-base"
              >
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
