"use client";
import React from "react";

import { motion } from "framer-motion";

import banner from "@/assets/images/bannerimage.jpg";

import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="mt-6 relative flex flex-col lg:flex-row w-full items-center max-w-7xl px-4 lg:mx-auto gap-x-8"
      >
        <div className="flex flex-col justify-center lg:h-[calc(100vh-12vh)] rounded-lg">
          <div className="space-y-4 mb-4">
            <h1 className="leading-tight text-4xl font-bold capitalize w-full">
              3rd International Conference On <br />
              Advanced Functional Materials (ICAFM-2024)
            </h1>
            <div className="text-2xl font-medium mt-4 text-primary">
              17-19th October, 2024
            </div>
            <div className="text-lg mt-4">Department of Physics</div>
            <div className="flex justify-between items-center text-sm py-4 border-b border-t">
              <div>
                Sri Sivasubramaniya Nadar College of Engineering,
                <br /> Rajiv Gandhi Salai, Kalavakkam - 603 110 Chennai,
                <br /> Tamilnadu, India
              </div>
              <Link href={"#"} className={buttonVariants({ size: "sm" })}>
                Register Now
              </Link>
            </div>
          </div>
        </div>

        <Image src={banner} className="w-auto md:w-[550px] h-full rounded-lg" />
      </motion.div>
    </section>
  );
}
