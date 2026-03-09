import React from "react";
import { publications } from "@/data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Publications = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Publications</span>
      </h1>

      <div className="w-full mt-12 max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          {publications.map((item) => (
            <div
              key={item.id}
              className="bg-black-100 border border-white/[0.1] rounded-lg p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white-100 text-sm md:text-base mb-2">
                    {item.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white-200">
                    <span className="text-purple font-semibold">{item.journal}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
