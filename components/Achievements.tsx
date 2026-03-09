import React from "react";
import { achievements } from "@/data";

const Achievements = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Achievements</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-black-100 border border-white/[0.1] rounded-lg p-6 hover:border-purple/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {item.title}
              </h3>
              <span className="text-purple font-semibold text-sm">{item.date}</span>
            </div>
            <p className="text-white-200 text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
