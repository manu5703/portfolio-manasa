"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/image2.png";
import project1 from "../assets/image3.png";
import project2 from "../assets/image5.png";
import project3 from "../assets/image4.png";
import project4 from "../assets/image6.png";

const projects = [
  {
    title: "Personalized Yoga Recommendation & Posture Correction",
    desc: "A transformer-based wellness platform offering personalized yoga posture recommendations using FAISS semantic search and E5 embeddings. Includes real-time posture correction using MoveNet and CNN angle analysis with audio feedback.",
    devStack: "Transformers • FAISS • MoveNet • Django • CNN",
    link: "https://github.com/manu5703/health-and-yoga-",
    git: "https://github.com/manu5703/health-and-yoga-",
    src: project,
  },
  {
    title: "Library Management System using AWS",
    desc: "A cloud-native library management system using AWS Lambda for serverless backend workflows, Amazon S3 for frontend hosting, and CloudWatch for performance monitoring and logging.",
    devStack: "AWS Lambda • S3 • CloudWatch • Python • Serverless",
    link: "https://github.com/manu5703/Library-Management-System-Using-AWS.git",
    git: "https://github.com/manu5703/Library-Management-System-Using-AWS.git",
    src: project1,
  },
  {
    title: "EEG-Based Motor Imagery Classification",
    desc: "A deep learning pipeline using EEG preprocessing, PSD extraction, and ML/DL models (CNN, SVM, RF) for classifying mental states. Includes visualizations, EDA, and multi-model performance comparison.",
    devStack: "Python • MNE • CNN • SVM • Random Forest",
    link: "https://github.com/manu5703/EEG-Motor-Imagery-Classification.git",
    git: "https://github.com/manu5703/EEG-Motor-Imagery-Classification.git",
    src: project2,
  },
  {
    title: "Neurodegenerative Disease Prediction Using Gait Data",
    desc: "Machine learning models for diagnosing ALS, Parkinson’s, and Huntington’s using gait characteristics. Used SMOTE for imbalance, feature engineering, and LIME for model explainability.",
    devStack: "Python • ML • SMOTE • LIME • 1D CNN",
    link: "https://github.com/manu5703/Neurodegenerative-Disease-prediction",
    git: "https://github.com/manu5703/Neurodegenerative-Disease-prediction",
    src: project3,
  },
  {
    title: "PINN + GAN Hybrid Model for Scientific PDE Modeling",
    desc: "A Physics-Informed Neural Network combined with GANs to solve 2D heat equations with higher accuracy, reducing RMSE and improving physical consistency in predictions.",
    devStack: "PyTorch • PINN • GAN • Scientific ML",
    link: "https://github.com/manu5703/PINN-and-GAN.git",
    git: "https://github.com/manu5703/PINN-and-GAN.git",
    src: project4,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 ">
        Selected <span className="text-orange-400">Projects</span>
      </h1>
      <div className="max-w-[1200px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-lg text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6">
                  Link
                </a>
                <a href={project.git}>Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[400px] w-auto object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
