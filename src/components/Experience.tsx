"use client";
import React from "react";

const experiences = [
  {
    title: "Teaching Assistant",
    company: "IS 4495 - AI in Business Strategy",
    period: "Aug 2025 - Present",
    description: [
      "Assisted and supervised students in their final project of building a prototype of an AI-based solution to a real-time business problem, helping them with web development, cloud deployment, and machine learning parts.",
      "Assisted Professor David Agogo in designing lab exercises and quizzes for students.",
      "Created videos explaining lab concepts (e.g., working of CI/CD pipeline) for student reference.",
      "Graded students’ assignments and held office hours to clarify their doubts.",
    ],
  },
  {
    title: "AI Intern",
    company: "Rinex Technologies",
    period: "Sept 2023 - Nov 2023",
    description: [
      "Implemented DenseNet121 model from MONAI for classification. Trained it on 3k images and ran it on multiple epochs. Adjusted the weights using backpropagation.",
      "Created a user friendly interface using Django framework to display classification results.",
    ],
  },
  {
    title: "Internship Trainee - Web Development",
    company: "Pragyashal Cloud Solutions",
    period: "Oct 2023 - Dec 2023",
    description: [
      "Developed a full-stack, cloud-native web application that provides secure user authentication, dynamic content management, and real-time interactions.",
      "The frontend was built with React, while the backend utilized Flask providing set of RESTful APIs for user management, session handling, and data processing",
    ],
  },
  {
    title: "Joint Secretary",
    company: "United Coders Club - CBIT",
    period: "Jan 2024 - Jan 2025",
    description: [
      "Conducted fun technical events during College Fest",
      "Conducted Speaker Sessions ",
      "Conducted hackathon and coding events",
    ],
  },
];

const cardColors = [
  "bg-orange-500/30",
  "bg-purple-500/30",
  "bg-blue-500/30",
  "bg-green-500/30",
];

const Experience = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10" id="experience">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
        Experience
      </h1>

      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/20"></div>

        <div className="flex flex-col space-y-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const color = cardColors[index % cardColors.length];

            return (
              <div key={index} className="flex w-full relative items-center">
                {/* Left Card */}
                {!isLeft && (
                  <div className="w-5/12 pr-8 text-left ml-auto">
                    <div
                      className={`timeline-card ${color} backdrop-blur-lg border-white/20 rounded-xl p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40`}
                    >
                      <h2 className="text-2xl font-bold text-orange-400">
                        {exp.title}
                      </h2>
                      <h3 className="text-lg text-white/80 mt-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-white/70 mt-1 italic">
                        {exp.period}
                      </p>
                      <ul className="list-disc list-inside mt-4 space-y-3 text-white/80 text-lg">
                        {" "}
                        {/* bigger bullets */}
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Right Card */}
                {isLeft && (
                  <div className="w-5/12 pl-8 text-left mr-auto">
                    <div
                      className={`timeline-card ${color} backdrop-blur-lg border-white/20 rounded-xl p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40`}
                    >
                      <h2 className="text-2xl font-bold text-purple-400">
                        {exp.title}
                      </h2>
                      <h3 className="text-lg text-white/80 mt-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-white/70 mt-1 italic">
                        {exp.period}
                      </p>
                      <ul className="list-disc list-inside mt-4 space-y-3 text-white/80 text-lg">
                        {" "}
                        {/* bigger bullets */}
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Central Dot & Connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                  <div className="timeline-dot w-4 h-4 bg-white rounded-full z-10 animate-pulse"></div>
                  <div
                    className={`timeline-connector ${
                      isLeft
                        ? "timeline-connector-left"
                        : "timeline-connector-right"
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
