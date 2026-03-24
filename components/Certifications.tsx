"use client";

import React, { useEffect, useRef } from "react";
import { certifications } from "@/data";

const Certifications = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".cert-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 sm:py-20 w-full" id="certifications">
      <h1 className="heading opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        My <span className="text-purple">Certifications</span>
      </h1>

      <div className="w-full mt-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="cert-card bg-black-100 border border-white/[0.1] rounded-lg p-4 sm:p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple/20 flex flex-col opacity-0 group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-3">
                {cert.logo && (
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white line-clamp-2 flex-1 group-hover:text-purple transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>
              <p className="text-purple font-semibold text-[10px] sm:text-xs md:text-sm mb-2">
                {cert.issuer}
              </p>
              <p className="text-white-200 text-[10px] sm:text-xs md:text-sm mb-2">
                Issued {cert.date}
              </p>
              {cert.credentialId && (
                <p className="text-white-100 text-[10px] sm:text-xs mt-auto pt-3 border-t border-white/[0.1]">
                  Credential ID: {cert.credentialId}
                </p>
              )}
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
        .cert-card.animate-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Certifications;
