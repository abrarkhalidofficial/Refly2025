"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollCard = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-45%"]);

  return (
    <section ref={targetRef} className="relative h-auto md:h-[250vh]">
      <div
        className="p-0 pl-6 md:pl-12 mx-auto relative z-10 w-full pt-6 md:pt-20"
        style={{ marginBottom: "2em" }}
      >
        <div className="flex justify-start">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl md:text-6xl text-left text-white fontClass"
          >
            Hire For
            <span className="text-[#8D8D8D]"> Us</span>
          </motion.h1>
        </div>
      </div>

      <div className="md:sticky md:top-0 flex h-auto md:h-screen items-center overflow-hidden">
        <div className="flex flex-col gap-6 md:hidden w-full px-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>

        <motion.div style={{ x }} className="hidden md:flex gap-4">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-full max-w-[570px] overflow-hidden md:h-[700px] md:w-[570px] mx-auto"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>

      <button className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 rounded-full p-3 shadow-lg flex items-center justify-center">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.11781 19.51C0.685395 19.9424 0.685395 20.6435 1.11781 21.0759C1.55022 21.5083 2.2513 21.5083 2.68371 21.0759L1.90076 20.293L1.11781 19.51ZM21.887 1.41396C21.887 0.802434 21.3913 0.306697 20.7798 0.306697H10.8144C10.2029 0.306697 9.70718 0.802434 9.70718 1.41396C9.70718 2.02548 10.2029 2.52122 10.8144 2.52122H19.6725V11.3793C19.6725 11.9908 20.1682 12.4865 20.7798 12.4865C21.3913 12.4865 21.887 11.9908 21.887 11.3793V1.41396ZM1.90076 20.293L2.68371 21.0759L21.5627 2.19691L20.7798 1.41396L19.9968 0.631006L1.11781 19.51L1.90076 20.293Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollCard;

const cards = [
  { url: "/1.png", title: "Title 1", id: 1 },
  { url: "/2.png", title: "Title 2", id: 2 },
  { url: "/3.png", title: "Title 3", id: 3 },
  { url: "/4.png", title: "Title 4", id: 4 },
];
