"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt="Build Beyond Studio - Web Development & DevOps Agency"
            width={40}
            height={40}
            className="w-9 sm:w-10 h-9 sm:h-10 shrink-0"
          />
          <span className="font-semibold text-black text-sm sm:text-lg">
            Build Beyond Studio
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className="text-black hover:text-blue-600 transition-colors text-sm font-medium"
          >
            Home
          </a>
          <a
            href="/#services"
            className="text-black hover:text-blue-600 transition-colors text-sm"
          >
            Services
          </a>
          <a
            href="/services/web-applications"
            className="text-black hover:text-blue-600 transition-colors text-sm"
          >
            Web Applications
          </a>
          <a
            href="/#cases"
            className="text-black hover:text-blue-600 transition-colors text-sm"
          >
            Case Studies
          </a>
          <a
            href="/#why"
            className="text-black hover:text-blue-600 transition-colors text-sm"
          >
            Why Us
          </a>
          <a
            href="/#partners"
            className="text-black hover:text-blue-600 transition-colors text-sm"
          >
            For Agencies
          </a>
          <a
            href="/blog"
            className="text-black hover:text-blue-600 transition-colors text-sm"
          >
            Blog
          </a>
          <a
            href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency."
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all hover:shadow-lg"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency."
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center w-9 h-9 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <button
            className="cursor-pointer text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 px-6 py-4 flex flex-col gap-4">
          <a
            href="/"
            className="text-black hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="/#services"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Services
          </a>
          <a
            href="/services/web-applications"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Web Applications
          </a>
          <a
            href="/#cases"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Case Studies
          </a>
          <a
            href="/#why"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Why Us
          </a>
          <a
            href="/#partners"
            className="text-black hover:text-blue-600 transition-colors"
          >
            For Agencies
          </a>
          <a
            href="/blog"
            className="text-black hover:text-blue-600 transition-colors"
          >
            Blog
          </a>
          <a
            href="https://wa.me/919301579493?text=Hi%21%20I%20would%20like%20to%20discuss%20partnership%20opportunities%20with%20your%20agency."
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all font-medium w-full"
          >
            <FaWhatsapp className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
