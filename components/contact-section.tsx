'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#000] via-[#000] to-[#000] px-6 py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="text-white space-y-10 md:col-span-1">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#e70505] mb-3">Refly Agency </p>
            <h1 className="text-4xl md:text-4xl font-bold leading-tight fontClass">Let's Elevate Your Brand</h1>
            <p className="text-gray-400 mt-4 text-lg leading-relaxed">Have a project, question, or want to collaborate? Reach out and let's create something amazing together. </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase text-gray-500 mb-1">Email</p>
              <p className="text-base font-medium">info@refly.agencys</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 mb-1">Location</p>
              <p className="text-base font-medium leading-relaxed">
                45 Constellation Tower, <br /> Innovation Street, London, UK
              </p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500 mb-1">Social Media</p>
              <div className="flex gap-6 items-center mt-2">
                <a href="#" className="flex items-center gap-2 text-base hover:text-[#e70505] transition">
                  <span className="text-lg">&#x1F4F7;</span> @constellation.ai
                </a>
                <a href="#" className="flex items-center gap-2 text-base hover:text-[#e70505] transition">
                  <span className="text-lg">&#x1F465;</span> constellation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Center: 3D Image */}
        <div className="flex justify-center items-center md:col-span-1 order-first md:order-none">
          <img src="/boring.gif" alt="3D centerpiece" className="w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] object-contain " />
        </div>

        {/* Right: Form Card */}
        <div className="flex justify-center items-center md:col-span-1">
          <form className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md">
            <div className="flex items-center mb-6">
              <span className="w-3 h-3 rounded-full bg-[#e70505] mr-2"></span>
              <span className="text-gray-300 text-lg font-semibold">Contact Form</span>
            </div>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-500 py-3 px-2 outline-none focus:border-[#e70505] transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-500 py-3 px-2 outline-none focus:border-[#e70505] transition"
                required
              />
              <input
                type="text"
                placeholder="Company / Organization"
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-500 py-3 px-2 outline-none focus:border-[#e70505] transition"
              />
              <textarea
                placeholder="Message or Inquiry"
                rows={4}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-gray-500 py-3 px-2 outline-none focus:border-[#e70505] transition resize-none"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#e70505] text-white py-3 rounded-lg font-semibold text-lg mt-8 shadow-md hover:bg-[#ffffff] hover:text-red-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
