"use client";

import { Card, CardContent } from "@/components/card";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BusinessSection() {
  const cards = [
    {
      id: "01",
      title: "Focused Strategy",
      desc: "We help you define your vision and goals with strategic planning that drives measurable results.",
    },
    {
      id: "02",
      title: "Innovative Ideas",
      desc: "We bring fresh perspectives and creative solutions that set your brand apart from the competition.",
    },
    {
      id: "03",
      title: "Engaging Content",
      desc: "We create compelling content that resonates with your audience and drives meaningful engagement.",
    },
    {
      id: "04",
      title: "Creative Design",
      desc: "We craft beautiful, functional designs that capture your brand essence and delight users.",
    },
    {
      id: "05",
      title: "Smart Execution",
      desc: "We implement solutions with precision and attention to detail for optimal performance.",
    },
    {
      id: "06",
      title: "Lasting Impact",
      desc: "We build solutions that create sustainable growth and leave a lasting positive impact.",
    },
  ];

  // Type-safe variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen p-8 font-['Urbanist']">
      {/* Section Header */}
      <section className="p-8 py-16 max-w-8xl mx-auto">
        <div className="mb-6">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm text-white px-5 py-2 rounded-full border border-indigo-700 font-medium inline-block"
          >
            Business & Approach
          </motion.span>
        </div>

        {/* Animate heading + paragraph one by one */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Building Solutions
            <br /> That Inspire Growth
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-lg leading-relaxed"
          >
            We are a creative studio passionate about innovation, helping brands
            unlock their full potential with smart strategies, stunning design,
            and impactful execution.
          </motion.p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="px-6 max-w-8xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="relative border border-gray-500 bg-black transition-all group
                rounded-3xl shadow-md hover:shadow-xl hover:border-indigo-500/50 
                hover:bg-gradient-to-br hover:from-indigo-950 hover:to-black overflow-hidden"
              >
                <CardContent className="p-8 relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="absolute top-6 right-6"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center 
                      bg-indigo-900 text-indigo-400 group-hover:bg-black group-hover:text-purple-400
                      transition-colors shadow-md"
                    >
                      <Sparkles className="w-6 h-6" />
                    </div>
                  </motion.div>

                  {/* Card Number */}
                  <motion.div
                    variants={fadeUp}
                    className="text-3xl mb-6 font-bold text-white group-hover:text-indigo-300"
                  >
                    {card.id}
                  </motion.div>

                  {/* Card Title */}
                  <motion.h3
                    variants={fadeUp}
                    className="text-2xl font-semibold mb-4 transition-colors
                    text-white group-hover:text-indigo-200"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Card Description */}
                  <motion.p
                    variants={fadeUp}
                    className="text-base leading-relaxed transition-colors
                    text-gray-400 group-hover:text-gray-200"
                  >
                    {card.desc}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
