"use client";
import React, { useState, useEffect } from "react";

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
    </section>
  );
};

export default HeroSection;
