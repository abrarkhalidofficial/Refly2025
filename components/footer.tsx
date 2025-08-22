import React from "react";

export default function Footer() {
  return (
    <section className=" pr-12 pl-12 pb-10 py-16 max-w-8xl mx-auto bg-white">
      <div
        className="bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-16 text-center relative overflow-hidden flex flex-col items-center justify-center "
        style={{
          backgroundImage: `url('/footerBackground.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-center">
            How We Build Solutions
            <br />
            That Inspire Growth
          </h2>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-800"
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
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-12 border-t border-green-700/40 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-black">
          <div>© 2025 Superside. All rights reserved.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.47619"
                  y="0.47619"
                  width="44.7619"
                  height="44.7619"
                  rx="22.381"
                  stroke="black"
                  stroke-width="0.952381"
                />
                <path
                  d="M16.1746 18.2838C17.3255 18.2838 18.2584 17.3509 18.2584 16.2C18.2584 15.0492 17.3255 14.1162 16.1746 14.1162C15.0238 14.1162 14.0908 15.0492 14.0908 16.2C14.0908 17.3509 15.0238 18.2838 16.1746 18.2838Z"
                  fill="black"
                />
                <path
                  d="M20.2255 19.8619V31.4228H23.815V25.7057C23.815 24.1971 24.0988 22.7362 25.9693 22.7362C27.8141 22.7362 27.8369 24.4609 27.8369 25.8009V31.4238H31.4284V25.0838C31.4284 21.9695 30.7579 19.5762 27.1179 19.5762C25.3703 19.5762 24.1988 20.5352 23.7198 21.4428H23.6712V19.8619H20.2255ZM14.376 19.8619H17.9712V31.4228H14.376V19.8619Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-black transition">
              <svg
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.809198"
                  y="0.47619"
                  width="44.7619"
                  height="44.7619"
                  rx="22.381"
                  stroke="black"
                  stroke-width="0.952381"
                />
                <path
                  d="M28.175 14H30.9357L24.9058 21.201L32 31H26.4459L22.0955 25.0559L17.1174 31H14.3555L20.8051 23.2972L14 14H19.6959L23.6277 19.4318L28.175 14ZM27.2075 29.2742H28.7375L18.8634 15.6355H17.2231L27.2075 29.2742Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-black transition">
              <svg
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.14318"
                  y="0.47619"
                  width="44.7619"
                  height="44.7619"
                  rx="22.381"
                  stroke="black"
                  stroke-width="0.952381"
                />
                <path
                  d="M23.9978 20.3322C22.5289 20.3322 21.3301 21.531 21.3301 23C21.3301 24.469 22.5289 25.6678 23.9978 25.6678C25.4668 25.6678 26.6656 24.469 26.6656 23C26.6656 21.531 25.4668 20.3322 23.9978 20.3322ZM31.9991 23C31.9991 21.8953 32.0091 20.8005 31.9471 19.6978C31.885 18.4169 31.5928 17.2801 30.6562 16.3435C29.7176 15.4049 28.5829 15.1147 27.302 15.0526C26.1973 14.9906 25.1026 15.0006 23.9999 15.0006C22.8951 15.0006 21.8004 14.9906 20.6977 15.0526C19.4168 15.1147 18.2801 15.4069 17.3435 16.3435C16.4049 17.2821 16.1147 18.4169 16.0526 19.6978C15.9906 20.8025 16.0006 21.8973 16.0006 23C16.0006 24.1027 15.9906 25.1995 16.0526 26.3022C16.1147 27.5831 16.4069 28.7199 17.3435 29.6565C18.2821 30.5951 19.4168 30.8853 20.6977 30.9474C21.8024 31.0094 22.8971 30.9994 23.9999 30.9994C25.1046 30.9994 26.1993 31.0094 27.302 30.9474C28.5829 30.8853 29.7196 30.5931 30.6562 29.6565C31.5948 28.7179 31.885 27.5831 31.9471 26.3022C32.0111 25.1995 31.9991 24.1047 31.9991 23ZM23.9978 27.1048C21.7264 27.1048 19.8932 25.2715 19.8932 23C19.8932 20.7285 21.7264 18.8952 23.9978 18.8952C26.2693 18.8952 28.1025 20.7285 28.1025 23C28.1025 25.2715 26.2693 27.1048 23.9978 27.1048ZM28.2707 19.6858C27.7403 19.6858 27.312 19.2575 27.312 18.7271C27.312 18.1968 27.7403 17.7685 28.2707 17.7685C28.801 17.7685 29.2293 18.1968 29.2293 18.7271C29.2294 18.853 29.2048 18.9778 29.1566 19.0942C29.1085 19.2105 29.0379 19.3163 28.9489 19.4053C28.8598 19.4944 28.7541 19.565 28.6377 19.6131C28.5213 19.6612 28.3966 19.6859 28.2707 19.6858Z"
                  fill="black"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-black transition">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.47619"
                  y="0.47619"
                  width="44.7619"
                  height="44.7619"
                  rx="22.381"
                  stroke="black"
                  stroke-width="0.952381"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.5549 17.2159C30.293 17.4134 30.873 17.9934 31.0705 18.7315C31.4276 20.0678 31.429 22.8577 31.429 22.8577C31.429 22.8577 31.429 25.6476 31.0705 26.984C30.873 27.722 30.293 28.302 29.5549 28.4995C28.2186 28.858 22.8576 28.858 22.8576 28.858C22.8576 28.858 17.4965 28.858 16.1602 28.4995C15.4221 28.302 14.8421 27.722 14.6446 26.984C14.2861 25.6476 14.2861 22.8577 14.2861 22.8577C14.2861 22.8577 14.2861 20.0678 14.6446 18.7315C14.8421 17.9934 15.4221 17.4134 16.1602 17.2159C17.4965 16.8574 22.8576 16.8574 22.8576 16.8574C22.8576 16.8574 28.2186 16.8574 29.5549 17.2159ZM25.5953 22.8579L21.1417 25.429V20.2868L25.5953 22.8579Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
