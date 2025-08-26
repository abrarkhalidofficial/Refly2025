"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [device, setDevice] = useState("");

  return (
    <>
      {/* Trigger Button */}
      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-3 bg-[#eaff7b] text-gray-900 rounded-full font-semibold text-lg shadow-md hover:bg-[#d9f25f] transition"
        >
          Open Contact Form
        </button>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full h-full md:h-[90%] md:w-[90%] rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-gray-800 bg-gray-900"
            >
              {/* Left Side */}
              <div className="relative flex flex-col justify-center items-center bg-black p-10">
                <img
                  src="/boring.gif"
                  alt="background"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  style={{ filter: "blur(3px)" }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
                  <h1
                    className="text-5xl text-white tracking-wide"
                    style={{ fontFamily: "Akira_Expanded, sans-serif" }}
                  >
                    RE<span className="font-normal text-[#eaff7b]">FL</span>Y
                  </h1>
                  <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                    Your self-care journey starts here.
                  </p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="relative bg-gradient-to-br from-[#181c2a] to-[#2a2250] flex flex-col min-h-full border-l border-white/20">
                {/* Close Button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center bg-transparent rounded-full text-gray-400 hover:text-white transition"
                  aria-label="Close"
                >
                  ×
                </button>
                <div className="flex-1 flex flex-col justify-center items-center p-10">
                  <form className="space-y-8 w-full max-w-md bg-white/5 border border-white/20 rounded-xl p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      We're Here to Help
                    </h2>
                    <p className="text-sm text-gray-300 mb-6">
                      Questions, ideas, or feedback—let's make progress
                      together.
                    </p>
                    <div className="space-y-6">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 px-2 outline-none focus:border-white transition"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 px-2 outline-none focus:border-white transition"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 px-2 outline-none focus:border-white transition"
                      />
                      <textarea
                        placeholder="Message or Inquiry"
                        rows={4}
                        className="w-full bg-transparent border-b border-white/40 text-white placeholder-gray-400 py-3 px-2 outline-none focus:border-white transition resize-none"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-white text-[#181c2a] py-3 rounded-md font-semibold text-lg mt-4 shadow hover:bg-gray-100 transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
