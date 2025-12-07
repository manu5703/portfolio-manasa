"use client";
import Image from "next/image";
import React from "react";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

// Dummy Data for Projects (Keeping the existing data)
const projects = [
  {
    id: 1,
    title: "Project 1",
    image: book,
  },
  {
    id: 2,
    title: "Project 2",
    image: pc,
  },
  {
    id: 3,
    title: "Project 3",
    image: card,
  },
  {
    id: 4,
    title: "Project 4",
    image: finance,
  },
  {
    id: 5,
    title: "Project 5",
    image: card,
  },
  {
    id: 6,
    title: "Project 6",
    image: finance,
  },
  {
    id: 7,
    title: "Project 7",
    image: finance,
  },
  {
    id: 8,
    title: "Project 8",
    image: finance,
  },
  {
    id: 9,
    title: "Project 9",
    image: finance,
  },
  {
    id: 10,
    title: "Project 10",
    image: finance,
  },
];

const Carousel = () => {
  return (
    // The main wrapper just centers the content on the screen
    <div className="w-full pt-10">
      {/* Container for the heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Adjusted heading for responsiveness */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold p-4 mb-4 text-center md:text-middle">
          Skills
        </h1>
      </div>

      {/* The 3D Carousel Wrapper */}
      <div className="carousel_wrapper mx-auto">
        <div className="carousel">
          {projects.map((project, index) => (
            <div className={`slide slide-${index + 1}`} key={project.id}>
              {/* Added utility classes to ensure the Image is responsive within the slide */}
              <Image
                src={project.image}
                alt={project.title}
                // Use smaller dimensions, let CSS handle the final sizing
                width={200}
                height={150}
                className="mx-auto" // Tailwind class to center the image
              />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;