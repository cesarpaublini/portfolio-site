'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add email service integration here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Top Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      <section className="bg-black py-20 px-6 sm:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I&apos;m always open to discussing new projects, 
              creative opportunities, or just having a chat about technology and design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#0d0d0d] rounded-xl p-8 border border-zinc-700">
              <h3 className="text-xl font-semibold text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-violet-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Get in touch</h3>
                <p className="text-gray-400 mb-8">
                  I&apos;m currently available for freelance work and full-time opportunities. 
                  Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-violet-400 text-xl" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href="mailto:cesar.paublini001@gmail.com" className="text-gray-400 hover:text-violet-400 transition-colors">
                      cesar.paublini001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-violet-400 text-xl" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a href="tel:+17862344456" className="text-gray-400 hover:text-violet-400 transition-colors">
                      +1 (786) 234-4456
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-violet-400 text-xl" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-400">Miami, Florida</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Follow me</h4>
                <div className="flex space-x-4">
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
        </div>
      </section>
    </>
  );
} 