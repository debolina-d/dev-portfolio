"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect } from "react";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const resumeTexts = [
    "Steal My Resume",
    "Hire Me Maybe?", 
    "Peek My Resume",
    "Resume Inside",
    "Download Resume"
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % resumeTexts.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [resumeTexts.length]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/AI_DevOps_Resume.pdf';
    link.download = 'Debolina_Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pb-8 sm:pb-20 pt-12 sm:pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center px-4">
          <p className="uppercase tracking-widest text-[10px] sm:text-xs text-center text-blue-100 max-w-80">
            INTELLIGENT SYSTEMS • AI • MACHINE LEARNING
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Building Scalable AI-Powered Applications"
            className="text-center text-[24px] sm:text-[36px] md:text-5xl lg:text-6xl leading-tight sm:leading-normal"
          />

          <p className="text-center md:tracking-wider mb-6 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base lg:text-xl px-2 sm:px-0">
            Hi! I&apos;m Debolina, an AI/ML Engineer focused on autonomous systems and real-world problem solving.
          </p>

          <div onClick={handleResumeDownload} className="cursor-pointer">
            <MagicButton
              title={resumeTexts[currentTextIndex]}
              icon={<FaLocationArrow />}
              position="right"
              otherClasses={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
