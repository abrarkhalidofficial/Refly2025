'use client';

import { motion } from 'framer-motion';
import { TextGradientScroll } from './scroll-reveal';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden min-h-screen p-2 bg-black">
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row h-full md:p-12 relative">
          {/* LEFT SIDE TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 p-6 md:p-8 relative z-10 text-white flex items-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-urbanist font-extralight leading-tight z-20">
              <TextGradientScroll text="Born in a supernova of code and creativity, Refly isn't just an agency it's a rebellion against boring. We’re the rogue pilots of the digital galaxy, fusing AI's raw horsepower with human spark to launch brands into orbits unseen. From UI/UX that hijacks hearts, video edits that detonate virality, to branding that rewrites destinies, our AI-driven crew thrives on chaos and precision." />
            </h1>
          </motion.div>

          {/* RIGHT SIDE VIDEO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative flex items-center justify-center mt-8 md:mt-0"
          >
            <div className="w-full h-64 md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/HeroSecondVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
