"use client";

import { TextGradientScroll } from "./scroll-reveal";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden h-screen p-2 ">
      <div className="p-8 ">
        <div className="flex flex-col md:flex-row h-full p-12 ">
          <div className="w-full p-8 relative z-10 text-white flex items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-urbanist font-extralight leading-tight md:w-1/2 z-20 ">
              <TextGradientScroll text="Born in a supernova of code and creativity, Refly isn't just an agency it's a rebellion against boring. We’re the rogue pilots of the digital galaxy, fusing AI's raw horsepower with human spark to launch brands into orbits unseen. From UI/UX that hijacks hearts, video edits that detonate virality, to branding that rewrites destinies, our AI-driven crew thrives on chaos and precision." />
            </h1>
            <div className="absolute top-10 right-30 bottom-0 w-full md:w-1/2 flex items-center justify-center z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover "
              >
                <source src="/HeroSecondVideo.mp4" type="video/mp4" />
                Your browser does not support video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
