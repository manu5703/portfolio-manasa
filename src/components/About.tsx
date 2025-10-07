"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10" id="about">
      {/* Heading */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-10">
        About <span className="text-orange-400">Me</span>
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        {/* Box 1 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={book} alt="book" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
              <p className="text-lg text-white/70 mt-2">xxxx</p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={pc} alt="pc" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
              <p className="text-lg text-white/70 mt-2">xxxx</p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={finance} alt="finance" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
              <p className="text-lg text-white/70 mt-2">xxxx</p>
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={card} alt="card" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
              <p className="text-lg text-white/70 mt-2">xxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
