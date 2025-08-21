"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.video
        className="absolute top-10 left-0 w-full h-full object-cover -z-10 pl-14 pr-14 pt-15 p-15"
        style={{
          borderRadius: "100px",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
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

      <header className="w-full flex justify-between items-center px-8 md:px-8 lg:px-15 py-4 z-20">
        <div>
          <img
            src="/logoBlack.png"
            alt="REFLY Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white text-[18px] font-medium">
          <a href="#" className="hover:opacity-70 transition">
            OUR WORK
          </a>
          <a href="#" className="hover:opacity-70 transition">
            OUR STORY
          </a>
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            LET’S REFLY!
          </button>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center h-full text-center px-4 p-5">
        <div className="relative overflow-hidden">
          <h1
            className="text-white font-bold leading-tight text-4xl md:text-7xl lg:text-7xl overflow-hidden fontClass"
            style={{ lineHeight: 1 }}
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
          className="mt-6 max-w-2xl text-white px-6 py-4 rounded-xl font-urbanist"
          style={{ fontSize: "16px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 3.5 }}
        >
          We ignite brands with <b> AI-fueled wizardry</b>, blasting past the
          ordinary. Our <b>UI/UX</b> electrifies, <b>videos explode</b> with
          viral fire, and <b>branding</b> carves your name among the stars.
          Ready for warp-speed growth? Let Refly catapult you to cosmic heights.
        </motion.p>
      </section>
    </div>
  );
}
