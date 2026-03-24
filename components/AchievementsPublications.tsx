"use client";

import React, { useEffect, useRef } from "react";
import { achievements, publications } from "@/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const AchievementsPublications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".card-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 sm:py-20 w-full" id="achievements">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Achievements Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              My <span className="text-purple">Achievements</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={item.id}
                  className="card-item bg-black-100 border border-white/[0.1] rounded-lg p-4 sm:p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple/20 opacity-0 relative overflow-hidden group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-purple font-semibold text-[10px] sm:text-xs md:text-sm mb-2">
                      Issued by {item.issuer} · {item.date}
                    </p>
                    <p className="text-white-200 text-[10px] sm:text-xs md:text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              My <span className="text-purple">Publications</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {publications.map((item, index) => (
                <div
                  key={item.id}
                  className="card-item bg-black-100 border border-white/[0.1] rounded-lg p-4 sm:p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple/20 opacity-0 relative overflow-hidden group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm text-white-200">
                          <span className="text-purple font-semibold">{item.journal}</span>
                          <span>•</span>
                          <span>{item.year}</span>
                        </div>
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 flex-shrink-0"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .card-item.animate-in {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AchievementsPublications;
