"use client";

import { div } from "framer-motion/m";
import React from "react";

export default function Services() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-6 py-10">
      <div className="flex flex-wrap w-full max-w-7xl">
        <div className="relative rounded-2xl overflow-hidden group bg-neutral-600 p-6 flex flex-col justify-between w-[35%] mb-6 mr-4">
          <video
            src="/IMG_3421.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <h2 className="text-white font-extrabold text-2xl mb-3 flex items-end fontClass">
              UI/UX DESIGN{" "}
              <div className="w-full h-[1px] bg-white/40 my-2"></div>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              Elevate your digital frontier with AI-crafted interfaces that
              captivate and convert. Our designs don't just look stunning—they
              ignite user obsession with seamless, futuristic flow. Over 150
              projects completed, transforming 120+ brands.
            </p>
            <button className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition">
              CHECK OUT WORK
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden group bg-neutral-600 p-6 flex flex-col justify-between w-[60%] mb-6">
          <video
            src="/IMG_3422.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <h2 className="text-white font-extrabold text-2xl mb-3 flex items-end fontClass">
              VIDEO EDITING
              <div className="w-full h-[1px] bg-white/40 my-2 m-2 "></div>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              Unleash your brand’s cosmic potential. We fuse AI precision with
              bold creativity, forging identities and strategies that dominate
              markets. Proudly delivered 200+ campaigns for 85 clients.
            </p>
            <button className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition">
              CHECK OUT WORK
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden group bg-neutral-600 p-6 flex flex-col justify-between w-[60%] mb-6">
          <video
            src="/IMG_3423.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full">
            <h2 className="text-white font-extrabold text-2xl mb-3 flex items-end fontClass">
              BRANDING MARKETING
              <div className="w-full h-[1px] bg-white/40 my-2 m-2 "></div>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              We craft bold, market-dominating strategies to build unforgettable
              brand identities. From campaigns to execution, we ensure impact
              and recognition.
            </p>
            <button className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition">
              CHECK OUT WORK
            </button>
          </div>
        </div>
        <div className="aspect-square w-[400px] flex items-center justify-center">
          <button className="bg-yellow-400 text-black font-bold rounded-full text-2xl hover:scale-110 transition flex items-center justify-center w-3/5 h-3/5 aspect-square fontClass">
            HIRE US!
          </button>
        </div>
      </div>
    </div>
  );
}
