"use client";
import React from "react";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="mx-6 mt-6 relative bg-bgImage rounded-lg"
    >
      <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-12vh)] rounded-lg text-white bg-black/70 bgGradient">
        <h1 className="leading-normal text-4xl font-bold capitalize w-full">
          3rd International Conference On <br />
          Advanced Functional Materials (ICAFM-2024)
        </h1>
        <div className="text-3xl font-medium mt-4 text-primary">
          17-19th October, 2024
        </div>

        <div className="text-xl mt-4">Department of Physics</div>
      </div>
    </motion.div>
  );
}
