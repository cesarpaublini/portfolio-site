'use client';

import Link from 'next/link';

export default function SkillsSection() {
  return (
    <>
      {/* Top Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <section className="bg-black py-20 px-6 sm:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Custom Intro Title */}
          <h2 className="text-3xl text-white font-bold mb-2">
            Digital Professional with a Sharp Eye for Design and Function
          </h2>
          <p className="text-gray-400 mb-12">
          I build clean, high-performing products using code, design, SEO, and marketing.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-[#0d0d0d] rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold text-white mb-2">What I Can Do</h3>
              <p className="text-sm text-gray-300 mb-3">I can help develop solutions that will help you grow your business:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-200">
                <li>UI/UX Design</li>
                <li>Web & App Development</li>
                <li>API & Database Integration</li>
                <li>SEO & Marketing</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0d0d0d] rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold text-white mb-2">Tools I Use</h3>
              <p className="text-sm text-gray-300 mb-3">I use the latest tools and technologies to build functional and scalable products:</p>
              <p className="text-sm text-gray-200"><strong>Frontend:</strong> Tailwind CSS, React, TypeScript</p>
              <p className="text-sm text-gray-200"><strong>Backend:</strong> Node.js, Fastify, MongoDB, PostgreSQL</p>
              <p className="text-sm text-gray-200"><strong>Design:</strong> Figma, Framer, Photoshop</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0d0d0d] rounded-xl p-6 border border-zinc-700">
              <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-300 mb-3">I am a designer first, developer second. I can help design clean and modern interfaces:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-200">
                <li>User-Centered Design</li>
                <li>Modern & Clean UI</li>
                <li>Responsive Layouts</li>
                <li>Wireframes & Prototypes</li>
              </ul>
            </div>
          </div>

          {/* Call-to-action button */}
          <div className="flex justify-center">
            <Link href="/projects">
              <button className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-sm font-medium px-5 py-2 rounded-md transition">
                View My Projects
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
