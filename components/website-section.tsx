'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WebsiteDesign = () => {
  const images = [
    ['/projects/project1.png', '/projects/project2.png', '/projects/project3.png'],
    ['/projects/project4.png', '/projects/project5.png', '/projects/project6.png'],
    ['/projects/project7.png', '/projects/project8.png', '/projects/project9.png'],
    ['/projects/project10.png', '/projects/project11.png', '/projects/project12.png'],
  ];

  return (
    <div className="text-white overflow-hidden">
      {/* Heading */}
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-6xl text-center text-white fontClass"
        >
          Website Design <br /> that works
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4 urbanist"
        >
          Creating, designing and developing websites that work for your business.
        </motion.p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        {images.map((col, colIndex) => (
          <div key={colIndex} className="grid gap-4">
            {col.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Image
                  width={500}
                  height={500}
                  priority
                  className="h-auto max-w-full  shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-out"
                  src={src}
                  alt={`gallery-${colIndex}-${i}`}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteDesign;
