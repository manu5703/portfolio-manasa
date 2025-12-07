"use client";
import Image from "next/image";
import React from "react";
//import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/image.png";

// Dummy Data for Projects (Keeping the existing data)
const projects = [
  {
    id: 1,
    title: "Python",
    title2: "C",
    image: card,
  },
  {
    id: 2,
    title: "Java",
    title2: "JS",
    image: card,
  },
  {
    id: 3,
    title: "Pandas",
    title2: "Numpy",
    image: pc,
  },
  {
    id: 4,
    title: "MONAI",
    title2: "Transformers",
    image: pc,
  },
  {
    id: 5,
    title: "MNE",
    title2: "NLTK",
    image: pc,
  },
  {
    id: 6,
    title: "Django",
    title2: "MERN",
    image: finance,
  },
  {
    id: 7,
    title: "Flask",
    title2: "Fast API",
    image: finance,
  },
  {
    id: 8,
    title: "AWS",
    title2: "Git",
    image: finance,
  },
  {
    id: 9,
    title: "Tableau",
    title2: "Power BI",
    image: finance,
  },
  {
    id: 10,
    title: "MatPlotLib",
    title2: "Tensorflow",
    image: pc,
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
              <h2>{project.title}</h2>
              <h2>{project.title2}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
