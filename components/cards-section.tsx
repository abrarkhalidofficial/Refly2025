"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1) },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: cubicBezier(0.16, 1, 0.3, 1),
      opacity: { duration: 0.8 },
      scale: { duration: 0.9, ease: cubicBezier(0.34, 1.2, 0.64, 1) },
    },
  }),
};

export default function Services() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-4 py-10">
      <motion.div
        className="flex flex-wrap w-full min-h-screen p-4 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }} // 👈 animate when scrolled into view
      >
        {/* Card 1 */}
        <motion.div
          className="relative rounded-3xl overflow-hidden group bg-neutral-500 p-6 flex flex-col justify-between 
          w-full md:w-[48%] lg:w-[39%] mb-6 md:mr-4"
          variants={cardVariants}
        >
          <video
            src="/IMG_3421.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/10 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full pt-5 pr-6 pl-6 pb-3">
            <h2 className="text-white font-extrabold text-3xl lg:text-4xl mb-3 flex items-end fontClass">
              <motion.span
                variants={letterVariants}
                initial="hidden"
                animate="show"
              >
                UI/UX DESIGN
              </motion.span>
              <div className="w-full h-[1px] bg-white/40 my-2 ml-2" />
            </h2>
            <div className="flex flex-col justify-between">
              <motion.p
                className="text-gray-300 text-sm md:text-base leading-relaxed flex-grow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Elevate your digital frontier with AI-crafted interfaces that
                captivate and convert. Our designs don't just look stunning —
                they ignite user obsession with seamless, futuristic flow.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm md:text-base text-white hover:bg-white hover:text-black transition"
              >
                CHECK OUT WORK
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative rounded-3xl overflow-hidden group bg-neutral-500 p-6 flex flex-col justify-between 
          w-full md:w-[48%] lg:w-[60%] mb-6"
          variants={cardVariants}
        >
          <video
            src="/IMG_3422.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/10 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full pt-5 pr-6 pl-6 pb-3">
            <h2 className="text-white font-extrabold text-3xl lg:text-4xl mb-3 flex items-end fontClass">
              <motion.span
                variants={letterVariants}
                initial="hidden"
                animate="show"
              >
                VIDEO EDITING
              </motion.span>
              <div className="w-full h-[1px] bg-white/40 my-2 ml-2" />
            </h2>
            <motion.p
              className="text-gray-300 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Unleash your brand's cosmic potential. We fuse AI precision with
              bold creativity, forging identities and strategies that dominate.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm md:text-base text-white hover:bg-white hover:text-black transition"
            >
              CHECK OUT WORK
            </motion.button>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative rounded-3xl overflow-hidden group bg-neutral-500 p-6 flex flex-col justify-between 
          w-full lg:w-[70%] mb-6"
          variants={cardVariants}
        >
          <video
            src="/IMG_3423.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/10 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full pt-5 pr-6 pl-6 pb-3">
            <h2 className="text-white font-extrabold text-3xl lg:text-4xl mb-3 flex items-end fontClass">
              <motion.span
                variants={letterVariants}
                initial="hidden"
                animate="show"
              >
                BRANDING & MARKETING
              </motion.span>
              <div className="w-full h-[1px] bg-white/40 my-2 ml-2" />
            </h2>
            <motion.p
              className="text-gray-300 text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We fuse AI precision with bold creativity, forging identities and
              strategies that dominate markets and soar beyond the competition.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm md:text-base text-white hover:bg-white hover:text-black transition"
            >
              CHECK OUT WORK
            </motion.button>
          </div>
        </motion.div>

        {/* Hire Us Button */}
        <motion.div
          className="w-full md:w-[48%] lg:w-[28%] flex items-center justify-center"
          variants={cardVariants}
        >
          <motion.button
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.9, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#FED573] text-black font-bold rounded-full text-3xl lg:text-4xl 
            flex items-center justify-center h-32 w-32 md:h-48 md:w-48 lg:h-full lg:w-full fontClass"
          >
            HIRE US!
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
