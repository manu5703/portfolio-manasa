"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "../assets/image2.png";
import project1 from "../assets/image3.png";
import project2 from "../assets/image5.png";
import project3 from "../assets/image4.png";
import project4 from "../assets/image6.png";
//import project5 from "../assets/image7.png";
import project6 from "../assets/covid.png";
import project7 from "../assets/brain.png";

const projects = [
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
    title: "Brain Tumor segmentation using medical imaging",
    desc: "Developed and evaluated deep learning models for brain tumor segmentation using U-Net, V-Net, and an AutoML-optimized U-Net.",
    devStack: "CNN • Medical Imaging ",
    link: "https://github.com/manu5703/Medical-Imaging.git",
    git: "https://github.com/manu5703/Medical-Imaging.git",
    src: project7,
  },

  {
    title: "Personalized Yoga Recommendation & Posture Correction",
    desc: "A transformer-based wellness platform offering personalized yoga posture recommendations using FAISS semantic search and E5 embeddings. Includes real-time posture correction using MoveNet and CNN angle analysis with audio feedback.",
    devStack: "Transformers • FAISS • MoveNet • Django • CNN",
    link: "https://github.com/manu5703/health-and-yoga-",
    git: "https://github.com/manu5703/health-and-yoga-",
    src: project,
  },
  {
    title: "Covid 19 Data Analysis using Power BI",
    desc: "The purpose of this analysis is to study global COVID-19 trends and provide country-wise and WHO region-wise insights into confirmed, recovered, and death cases over time using PowerBI Additionally, forecasting techniques are used to predict future case trends for better preparedness and understanding of the pandemic dynamics. ",
    devStack: "PowerBI ",
    link: "https://github.com/manu5703/power-bi-dashboard.git",
    git: "https://github.com/manu5703/power-bi-dashboard.git",
    src: project6,
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
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-20 mt-40"
      id="portfolio"
    >
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold text-center mb-20">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="max-w-[1200px] mx-auto space-y-24 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex items-center gap-10 md:gap-20 ${
              index % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }`}
          >
            {/* Text Section */}
            <div className="space-y-3 max-w-[550px] w-full">
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-white/70">
                {index + 1}
              </h2>

              <h2 className="text-2xl sm:text-3xl md:text-4xl">
                {project.title}
              </h2>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed break-words">
                {project.desc}
              </p>

              <p className="text-lg sm:text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>

              <div className="border-b border-gray-400 w-full pb-2">
                <a
                  href={project.link}
                  className="mr-6 hover:text-orange-400 transition"
                >
                  Link
                </a>
                <a
                  href={project.git}
                  className="hover:text-orange-400 transition"
                >
                  Git
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center w-full">
              <Image
                src={project.src}
                alt={project.title}
                className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
