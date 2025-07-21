'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import GridBackground from "@/components/GridBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center px-8 sm:px-16">
      <GridBackground />
      <div className="max-w-2xl z-10 text-left">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
          {`Hey, I'm `}<span className="text-violet-400">Cesar</span>
        </h1>
        <h2 className="text-3xl sm:text-5xl font-semibold mt-2 text-gray-300">
          A Creative Technologist
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">
          Passionate about turning ideas into immersive digital experiences.
          I work at the intersection of creativity, technology, and impact.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link href="/contact">
            <button className="bg-black text-white border border-gray-400 font-semibold px-5 py-2 rounded-md hover:bg-gray-800">
              Contact Me
            </button>
          </Link>
          <Link href="/projects">
            <button className="bg-black text-white border border-gray-400 font-semibold px-5 py-2 rounded-md hover:bg-gray-800">
              View Projects
            </button>
          </Link>
          <div className="flex gap-4 text-2xl ml-4">
            <a href="https://github.com/cesarpaublini" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-gray-300 transition-transform hover:scale-105" />
            </a>
            <a href="https://www.linkedin.com/in/paublini" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white hover:text-gray-300 transition-transform hover:scale-105" />
            </a>
            <a href="https://www.instagram.com/paublini" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-300 transition-transform hover:scale-105" />
            </a>
            <a href="https://wa.me/17862344456" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-white hover:text-gray-300 transition-transform hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
}
