"use client";
import Image from "next/image";
import React from "react";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

// Dummy Data for Projects
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A web app using Next.js and Tailwind CSS.",
    image: book,
  },
  {
    id: 2,
    title: "Project 2",
    description: "An AI-powered system built with TensorFlow.",
    image: pc,
  },
  {
    id: 3,
    title: "Project 3",
    description: "A full-stack app using React, Node.js, and MongoDB.",
    image: card,
  },
  {
    id: 4,
    title: "Project 4",
    description: "A machine learning project using Python and scikit-learn.",
    image: finance,
  },
  {
    id: 5,
    title: "Project 5",
    description: "A machine learning project using Python and scikit-learn.",
    image: card,
  },
  {
    id: 6,
    title: "Project 6",
    description: "A machine learning project using Python and scikit-learn.",
    image: finance,
  },
  {
    id: 7,
    title: "Project 7",
    description: "A machine learning project using Python and scikit-learn.",
    image: finance,
  },
  {
    id: 8,
    title: "Project 8",
    description: "A machine learning project using Python and scikit-learn.",
    image: finance,
  },
  {
    id: 9,
    title: "Project 9",
    description: "A machine learning project using Python and scikit-learn.",
    image: finance,
  },
  {
    id: 10,
    title: "Project 10",
    description: "A machine learning project using Python and scikit-learn.",
    image: finance,
  },
];

const Carousel = () => {
  return (
    <div className="carousel_wrapper">
      <div>
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 ml-[-90px]">
          Skills
        </h1>
      </div>

      <div className="carousel">
        {projects.map((project, index) => (
          <div className={`slide slide-${index + 1}`} key={project.id}>
            <Image
              src={project.image}
              alt={project.title}
              width={380}
              height={275}
            />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
