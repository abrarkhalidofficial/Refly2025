"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="pr-12 pl-12 pb-10 py-16 max-w-8xl mx-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-16 text-center relative overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/footerBackground.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-center"
          >
            How We Build Solutions
            <br />
            That Inspire Growth
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white text-gray-900 hover:bg-green-100 hover:scale-105 transition-all px-8 py-3 rounded-full font-medium flex items-center gap-3 shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-800 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            Start today
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 mt-12 border-t border-green-700/40 pt-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-black">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 Superside. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            {[
              "/linkedin.svg",
              "/twitter.svg",
              "/instagram.svg",
              "/youtube.svg",
            ].map((icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-green-700 transition"
              >
                <img src={icon} alt="social" className="w-10 h-10" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
