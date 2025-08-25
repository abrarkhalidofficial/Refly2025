"use client";
import React, { useState, useEffect } from "react";

const logos = [
  "/herologo1.png",
  "/herologo2.png",
  "/herologo3.png",
  "/herologo4.png",
  "/herologo1.png",
  "/herologo2.png",
  "/herologo3.png",
  "/herologo4.png",
  "/herologo1.png",
  "/herologo2.png",
  "/herologo3.png",
  "/herologo4.png",
  "/herologo1.png",
  "/herologo2.png",
  "/herologo3.png",
  "/herologo4.png",
  "/herologo1.png",
  "/herologo2.png",
  "/herologo3.png",
  "/herologo4.png",
];

const HeroSection: React.FC = () => {
  const [imageSrc, setImageSrc] = useState("/hero.gif");

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageSrc("/heroTwo.gif");
    }, 4190);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        width: "100%",
      }}
    >
      <img
        src={imageSrc}
        alt="Hero GIF"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            animation: "scrollLogos 20s linear infinite",
            minWidth: "max-content",
          }}
        >
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Logo ${idx + 1}`}
              style={{ height: "50px", width: "auto" }}
            />
          ))}
        </div>
        <style>
          {`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
          `}
        </style>
      </div>
    </section>
  );
};

export default HeroSection;
