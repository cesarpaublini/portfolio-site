'use client';

import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      {/* Top Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      
      <footer className="bg-black py-16 px-6 sm:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Personal Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-3">Cesar Paublini</h3>
              <p className="text-gray-400 mb-2">📍 Based in Miami, Florida</p>
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Cesar. All rights reserved.</p>
            </div>

            {/* Right Column - Tech Stack & Social */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-4">
                Website designed in Figma. Built with Next.js 14, React, TypeScript, Tailwind CSS, and deployed on Vercel.
              </p>
              <div className="flex justify-center md:justify-end gap-4">
                <a 
                  href="https://github.com/cesarpaublini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/paublini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a 
                  href="https://www.instagram.com/paublini" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a 
                  href="https://wa.me/17862344456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 