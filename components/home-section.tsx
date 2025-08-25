"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <motion.video
        className="absolute top-12 left-0 w-full h-full object-cover -z-10 pl:4 pr:4 pt:15 p-5 rounded-[50px] md:pl-14 md:pr-14 md:pt-15 md:p-15 md:rounded-[100px]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Navbar */}
      <header className="absolute top-0 w-full flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 z-20">
        <div>
          <img
            src="/logoBlack.png"
            alt="REFLY Logo"
            width={120}
            height={40}
            className="object-contain md:w-[140px]"
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-white text-sm md:text-base lg:text-lg font-medium">
          <a href="#" className="hover:opacity-70 transition">
            OUR WORK
          </a>
          <a href="#" className="hover:opacity-70 transition">
            OUR STORY
          </a>
          <button className="bg-white text-black px-4 md:px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition text-sm md:text-base">
            LET’S REFLY!
          </button>
        </nav>
      </header>

      {/* Hero Content */}
      <section className="flex flex-col items-center justify-center h-full text-center px-4">
        <div className="relative overflow-hidden">
          <h1
            className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl fontClass"
            style={{ lineHeight: 1.1 }}
          >
            <div className="overflow-hidden">
              <motion.span
                className="block fontClass"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.77, 0, 0.175, 1],
                  delay: 0.5,
                }}
              >
                WHERE BRANDS
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block fontClass"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.77, 0, 0.175, 1],
                  delay: 1.5,
                }}
              >
                DEFY GRAVITY
              </motion.span>
            </div>
          </h1>
        </div>

        <motion.p
          className="mt-6 max-w-xl sm:max-w-2xl text-white px-4 sm:px-6 py-4 rounded-xl font-urbanist text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 3.5 }}
        >
          We ignite brands with <b>AI-fueled wizardry</b>, blasting past the
          ordinary. Our <b>UI/UX</b> electrifies, <b>videos explode</b> with
          viral fire, and <b>branding</b> carves your name among the stars.
          Ready for warp-speed growth? Let Refly catapult you to cosmic heights.
        </motion.p>
      </section>
    </div>
  );
}
