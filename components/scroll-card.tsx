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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="p-0 pl-12 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="flex justify-start">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-7xl text-left text-white fontClass"
          >
            Hire For
            <span className="text-[#8D8D8D]"> Us</span>{" "}
          </motion.h1>
        </div>
      </div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
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
      className="group relative h-[700px] w-[570px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default ScrollCard;

const cards = [
  {
    url: "/1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/4.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/1.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/2.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/3.png",
    title: "Title 7",
    id: 7,
  },
];
