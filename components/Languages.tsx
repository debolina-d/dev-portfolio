"use client";

import React, { useEffect, useRef } from "react";
import { languages } from "@/data";

const Languages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Animate bars
            const bars = entry.target.querySelectorAll(".bar-fill");
            bars.forEach((bar, i) => {
              setTimeout(() => {
                bar.classList.add("fill-animate");
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll(".lang-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 sm:py-20 w-full">
      <h1 className="heading opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        <span className="text-purple">Languages</span>
      </h1>

      <div className="w-full mt-12 max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {languages.map((lang, index) => (
            <div
              key={lang.id}
              className="lang-card bg-black-100 border border-white/[0.1] rounded-lg p-4 sm:p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple/20 opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  {lang.name}
                </h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-6 sm:w-2 sm:h-8 rounded-full transition-all duration-500 ${
                        i < lang.level
                          ? "bar-fill bg-white/10"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-white-200 text-[10px] sm:text-xs md:text-sm">
                {lang.proficiency}
              </p>
            </div>
          ))}
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
        .lang-card.animate-in {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bar-fill.fill-animate {
          background: linear-gradient(180deg, #CBACF9 0%, #8B5CF6 100%);
          box-shadow: 0 0 10px rgba(203, 172, 249, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Languages;
