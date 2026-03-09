"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-20" id="projects">
      <h1 className="heading opacity-0 animate-fadeIn" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
        My <span className="text-purple">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 max-w-7xl mx-auto">
        {projects.map((item, index) => (
          <div
            className="project-card opacity-0"
            key={item.id}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <PinContainer
              title=""
              href=""
            >
              <div className="w-80 h-72 flex flex-col p-6">
                <h1 className="font-bold text-base text-white leading-tight mb-3 transition-colors duration-300 hover:text-purple">
                  {item.title}
                </h1>

                <p
                  className="text-sm leading-relaxed line-clamp-4"
                  style={{
                    color: "#BEC1DD",
                  }}
                >
                  {item.des}
                </p>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .project-card.animate-in {
          animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scaleIn {
          0% { 
            opacity: 0; 
            transform: scale(0.9) translateY(30px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default RecentProjects;
