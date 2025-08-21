"use client";

import React from "react";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-10 left-0 w-full h-full object-cover -z-10 pl-14 pr-14 pt-15 p-15 "
        style={{
          borderRadius: "100px",
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
        <h1 className="text-white font-bold leading-tight text-4xl md:text-7xl lg:text-7xl overflow-hidden fontClass">
          <span className="block animate-reveal fontClass">WHERE BRANDS</span>
          <span className="block animate-reveal delay-500 fontClass">
            DEFY GRAVITY
          </span>
        </h1>

        <p
          className="mt-6 max-w-2xl text-white px-6 py-4 rounded-xl font-urbanist"
          style={{ fontSize: "16px" }}
        >
          We ignite brands with <b> AI-fueled wizardry</b>, blasting past the
          ordinary. Our
          <b> UI/UX</b> electrifies, <b>videos explode</b> with viral fire, and{" "}
          <b>branding</b> carves your name among the stars. Ready for warp-speed
          growth? Let Refly catapult you to cosmic heights.
        </p>
      </section>
    </div>
  );
}
