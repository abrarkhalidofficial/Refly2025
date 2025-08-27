"use client";
import { useState } from "react";

export default function ContactForm() {
  const [selected, setSelected] = useState<string | null>("UI/UX design");

  const services = [
    "UI/UX design",
    "Website",
    "Branding",
    "Design system",
    "Other",
  ];

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row p-15">
      <div
        className="w-full flex flex-col md:flex-row p-15"
        style={{
          backgroundImage: "url('/footerBackground.png')", // 🔥 Replace with your GIF file
        }}
      >
        {/* Left side with GIF background */}
        <div
          className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 text-white bg-cover bg-center relative"
          // style={{
          //   backgroundImage: "url('/footerBackground.png')",
          // }}
        >
          {/* Overlay to improve text visibility */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}

          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-snug">
              Have a project? <br /> We would love to help.
            </h1>
            <p className="mt-6 text-sm md:text-base">reflyagency@gmail.com</p>
          </div>
        </div>

        {/* Right side (Form) */}
        <div
          className="bg-black text-white px-8 md:px-16 py-12"
          style={{ width: "600px" }}
        >
          {/* Navbar */}
          <div className="flex justify-end gap-8 mb-12 text-gray-400 text-sm font-medium">
            <a href="#" className="hover:text-white">
              Works
            </a>
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="text-white border-b border-white pb-1">
              Contacts
            </a>
          </div>

          {/* Form */}
          <form className="flex flex-col space-y-8">
            <div>
              <p className="text-sm mb-3 text-gray-400">I’m interested in...</p>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => setSelected(service)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selected === service
                        ? "bg-white text-black"
                        : "border-gray-600 text-gray-300 hover:border-white"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-sm"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-sm"
            />

            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full bg-transparent border-b border-gray-600 focus:border-white focus:outline-none py-2 text-sm resize-none"
            ></textarea>

            <div className="flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:text-white">
              <span className="text-lg">📎</span>
              <span>Add attachment</span>
            </div>

            <button
              type="submit"
              className="bg-white text-black font-medium py-3 rounded-md hover:bg-gray-200 transition"
            >
              Sent request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
