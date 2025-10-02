import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Hello from "@/components/Hello";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Carousel />
      <Portfolio />
    </>
  );
}
