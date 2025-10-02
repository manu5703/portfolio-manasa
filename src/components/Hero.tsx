"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import cursor from "../assets/icon1.png"; // Ensure this is imported correctly

const Hero = () => {
  return (
    <div className="py-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#281942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[2300px] top-[500px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-bold"
        >
          <h2 className="text-[#98B4CE]">Hi, I am</h2>
          <h2 className="text-[#E48A57]">Manasa Vadlamani</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl max-w-[500px] mx-auto mt-8 text-white/80"
        >
          I am a full stack developer focused on creating websites that provide
          the best experience for users.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mx-auto"
        >
          <Image
            src={profilepic}
            alt="Profile Picture"
            className="h-auto w-auto mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
