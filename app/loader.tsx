"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const timeOut = 2000;

export const delayAnimationsFor = timeOut / 1000 - 0.5;

import { ReactNode } from "react";

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
        animate={{ scale: 0, borderRadius: "100%" }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: timeOut / 1000 - 0.4,
        }}
        className="loader"
      >
        <motion.div className="loader__content__logo">
          <img src="/loader.gif" alt="logo" />
        </motion.div>
        {/* <motion.div className="loader__content__text">
          <img src="/gif.gif" alt="" />
        </motion.div> */}
        {/* <motion.div className="loader__content__text">{children}</motion.div> */}
      </motion.div>
    )
  );
}
