"use client";

import React, { useEffect, useRef } from "react";
import { education } from "@/data";

const Education = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !sectionRef.current) return;

      const section = sectionRef.current;
      const timeline = timelineRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress
      const scrollStart = rect.top - windowHeight + 200;
      const scrollEnd = rect.bottom - 200;
      const scrollProgress = Math.max(0, Math.min(1, -scrollStart / (scrollEnd - scrollStart)));

      // Update timeline height based on scroll
      timeline.style.height = `${scrollProgress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="py-20 w-full" id="education">
      <h1 className="heading">
        My <span className="text-purple">Education</span>
      </h1>

      <div className="w-full mt-12 max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Background Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-white/10"></div>
          
          {/* Animated Timeline line - grows on scroll */}
          <div 
            ref={timelineRef}
            className="absolute left-0 md:left-8 top-0 w-0.5 bg-gradient-to-b from-purple via-purple to-transparent transition-all duration-100 ease-out"
            style={{ height: '0%' }}
          ></div>

          {education.map((item, index) => (
            <div
              key={item.id}
              className="relative flex items-start mb-12 pl-12 md:pl-20 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-0 md:left-8 w-4 h-4 bg-purple rounded-full transform -translate-x-1/2 ring-4 ring-black-100 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 0.2 + 0.3}s`,
                  animationFillMode: 'forwards'
                }}
              ></div>

              {/* Content */}
              <div className="w-full">
                <div className="bg-black-100 border border-white/[0.1] rounded-lg p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-white-100 font-semibold mb-2">
                    {item.institution}
                  </p>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-sm text-white-200">
                    <span>{item.duration}</span>
                    <span className="text-purple font-semibold">{item.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Education;
