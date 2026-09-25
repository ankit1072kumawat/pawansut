"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useCounter(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    if (target <= 0) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

const Stat = ({
  number,
  label,
  showPlus = true,
}: {
  number: number;
  label: string;
  showPlus?: boolean;
}) => {
  const [inView, setInView] = useState(false);
  const count = useCounter(number, 2000, inView);

  return (
    <motion.div
      className="relative flex flex-col items-center px-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <span className="text-primary text-5xl font-extrabold">
        {count}
        {showPlus ? "+" : ""}
      </span>
      <span className="mt-2 text-base font-medium text-gray-300">{label}</span>
    </motion.div>
  );
};

export default function Accomplishments() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          Our Accomplishments
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
          <Stat number={200} showPlus={false} label="Day Build Guarantee" />
          <div className="bg-primary/60 hidden h-12 w-px md:block" />
          <Stat number={50} label="Design Experts" />
          <div className="bg-primary/60 hidden h-12 w-px md:block" />
          <Stat number={100} label="Homes Constructed" />
        </div>
      </div>
    </section>
  );
}
