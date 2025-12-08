'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const timeOut = 2000;

export const delayAnimationsFor = timeOut / 1000 - 0.5;

import { ReactNode } from 'react';

export default function Loader({ children }: { children?: ReactNode }) {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, timeOut);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    isLoading && (
      <motion.div
        initial={{ scale: 1, borderRadius: 0 }}
        animate={{ scale: 0, borderRadius: '100%' }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: timeOut / 1000 - 0.4,
        }}
        className="loader"
      >
        <motion.div className="loader__content__logo">
          <img src="/logoBlack.png" alt="logo" className="w-60" />
        </motion.div>
        <motion.div className="loader__content__text">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {'Loading...'.split('').map((char, i) => (
              <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
                {char}
              </motion.span>
            ))}
          </h1>
        </motion.div>
        {/* <motion.div className="loader__content__text">
          <img src="/gif.gif" alt="" />
        </motion.div> */}
        {/* <motion.div className="loader__content__text">{children}</motion.div> */}
      </motion.div>
    )
  );
}
