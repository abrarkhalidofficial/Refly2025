"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollCard = () => {
  return (
    <div className="bg-neutral-800">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
    title: "Title 7",
    id: 7,
  },
];
