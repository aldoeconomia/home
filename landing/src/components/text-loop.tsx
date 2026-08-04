"use client";

import { useEffect, useState } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  Transition,
} from "motion/react";
import { cn } from "@/lib/utils";

interface TextLoopProps {
  staticText?: string;
  rotatingTexts?: string[];
  className?: string;
  interval?: number;
  transition?: Transition;
  staticTextClassName?: string;
  rotatingTextClassName?: string;
  backgroundClassName?: string;
  cursorClassName?: string;
}

export default function TextLoop({
  staticText = "Design",
  rotatingTexts = ["Limitless", "Timeless", "Flawless"],
  className,
  interval = 3000,
  transition = { duration: 0.8, ease: "easeInOut" },
  staticTextClassName,
  rotatingTextClassName,
  cursorClassName,
}: TextLoopProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [rotatingTexts.length, interval]);

  return (
    <LazyMotion features={domAnimation}>
      <span
        className={cn(
          "inline-flex flex-row items-center justify-start w-fit tracking-tight",
          className,
        )}
      >
        <span className={cn("mr-1 whitespace-nowrap", staticTextClassName)}>
          {staticText}
        </span>

        {/* Changed from <div> to <span> with inline-flex */}
        <span className="relative inline-flex items-center">
          <AnimatePresence mode="wait">
            {/* Changed from <m.div> to <m.span> */}
            <m.span
              key={rotatingTexts[index]}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={transition}
              className="overflow-hidden whitespace-nowrap relative inline-block"
            >
              <span
                className={cn(
                  "relative bg-white px-1 py-0.5",
                  "text-[#ce312f] font-bold",
                  rotatingTextClassName,
                )}
              >
                {rotatingTexts[index]}
              </span>
            </m.span>
          </AnimatePresence>

          {/* Changed Cursor from <m.div> to <m.span> */}
          <m.span
            className={cn(
              "w-0.75 md:w-1 bg-[#ce312f] h-[1.2em] inline-block",
              cursorClassName,
            )}
            animate={{ opacity: [1, 0.5] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </span>
      </span>
    </LazyMotion>
  );
}
