"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/emoji1.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#281942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      {/* Background Circle */}
      <div className="absolute rounded-[50%] w-[3000px] h-[2300px] top-[500px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4">
        {/* Animated Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-bold leading-tight"
        >
          <h2 className="text-[#98B4CE] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I am
          </h2>
          <h2 className="text-[#E48A57] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Manasa Vadlamani
          </h2>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl max-w-[600px] mx-auto mt-8 text-white/80 px-2"
        >
          Passionate about AI, machine learning, and building intelligent
          software solutions.
        </motion.p>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto mt-10"
        >
          <Image
            src={profilepic}
            alt="Profile Picture"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full mx-auto border-4 border-orange-400/40 shadow-lg shadow-orange-300/20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
