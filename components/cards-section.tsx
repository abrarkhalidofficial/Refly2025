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
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

export default function Services() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-6 py-10">
      <motion.div
        className="flex flex-wrap w-full min-h-screen p-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Card 1 */}
        <motion.div
          className="relative rounded-4xl  overflow-hidden group bg-neutral-500 p-6 flex flex-col justify-between w-[39%] mb-6 mr-4"
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
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full pt-5 pr-10 pl-10 pb-3">
            <h2 className="text-white font-extrabold text-4xl mb-3 flex items-end fontClass">
              <motion.span
                variants={letterVariants}
                initial="hidden"
                animate="show"
              >
                UI/UX DESIGN
              </motion.span>
              <div className="w-full h-[1px] bg-white/40 my-2"></div>
            </h2>
            <div className="flex flex-col justify-between">
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                Elevate your digital frontier with AI-crafted interfaces that
                captivate and convert. Our designs don’t just look stunning they
                ignite user obsession with seamless, futuristic flow. Over 150
                projects completed, transforming 120+ brands.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
              >
                CHECK OUT WORK
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative rounded-4xl overflow-hidden group bg-neutral-500 p-6 flex flex-col justify-between w-[60%] mb-6"
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
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full pt-5 pr-10 pl-10 pb-3">
            <h2 className="text-white font-extrabold text-4xl mb-3 flex items-end fontClass">
              <motion.span
                variants={letterVariants}
                initial="hidden"
                animate="show"
              >
                VIDEO EDITING{" "}
              </motion.span>
              <div className="w-full h-[1px] bg-white/40 my-2 m-2 "></div>
            </h2>
            <div className="flex flex-col justify-between">
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                Unleash your brand’s cosmic potential. We fuse AI precision with
                bold creativity, forging identities and strategies that dominate
                markets and soar beyond the competition. Proudly delivered 200+
                campaigns for 85 clients.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
              >
                CHECK OUT WORK
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="relative rounded-4xl overflow-hidden group bg-neutral-500 p-6 flex flex-col justify-between w-[70%] mb-6"
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
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition duration-500"></div>

          <div className="relative z-10 flex flex-col justify-between h-full pt-5 pr-10 pl-10 pb-3">
            <h2 className="text-white font-extrabold text-4xl mb-3 flex items-end  fontClass">
              <motion.span
                variants={letterVariants}
                initial="hidden"
                animate="show"
              >
                BRANDING MARKETING
              </motion.span>
              <div className="w-full h-[1px] bg-white/40 my-2 m-2 "></div>
            </h2>
            <div className="flex flex-col justify-between">
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                Unleash your brand’s cosmic potential. We fuse AI precision with
                bold creativity, forging identities and strategies that dominate
                markets and soar beyond the competition. Proudly delivered 200+
                campaigns for 85 clients.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 border border-gray-400 px-4 py-2 rounded-full text-sm text-white hover:bg-white hover:text-black transition"
              >
                CHECK OUT WORK
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Hire Us Button */}
        <motion.div
          className="w-[28%] flex items-center justify-center"
          variants={cardVariants}
        >
          <motion.button
            whileHover={{ scale: 1.15, rotate: 2 }}
            whileTap={{ scale: 0.9, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-[#FED573] text-black font-bold rounded-full text-4xl hover:scale-110 transition flex items-center justify-center h-full  w-full m-3 fontClass"
          >
            HIRE US!
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
