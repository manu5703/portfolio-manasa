"use client";
import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10" id="education">
      {/* Heading */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-10">
        Education
      </h1>

      {/* Single Card per Row */}
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={book} alt="book" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">
                Masters in Science
              </h2>
              <p className="text-lg text-white/70 mt-2">
                Computer Science, University Of Utah, 2025 - 2027
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={book} alt="book" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">High School</h2>
              <p className="text-lg text-white/70 mt-2">
                Computer Science and Engineering, Chaitanya Bharathi Institute
                Of Technology, 2021 - 2025
              </p>
              <p className="text-lg text-white/70 mt-2">CGPA : 9.33</p>
            </div>
          </div>
        </div>

        <div className="w-full relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>

          <div className="flex flex-col sm:flex-row items-center p-6">
            <Image src={book} alt="book" className="w-24 h-24 sm:h-[130px]" />
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold text-white/80">High School</h2>
              <p className="text-lg text-white/70 mt-2">
                MPC,Sri Chaitanya Junior College, 2019 - 2021
              </p>
              <p className="text-lg text-white/70 mt-2">
                Percentage : 98.6% JEE MAINS : 98.2 percentile EAMCET : Rank
                1024
              </p>
              <p className="text-lg text-white/70 mt-2">Course Work :</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
