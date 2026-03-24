import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const techStack = [
    "Python",
    "Java",
    "Web Development",
    "MySQL",
    "SQL",
    "ML",
    "Deep Learning",
    "CNN",
    "LLMs",
    "Agentic AI",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "RAG",
    "ChromaDB",
    "FastAPI",
    "REST APIs",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "Git",
    "GitHub",
    "YAML",
    "Figma",
  ];
  const techTagStyles = [
    "bg-purple/10 border-purple/30 text-purple-300 opacity-80",
    "bg-blue-500/10 border-blue-500/30 text-blue-300 opacity-80",
    "bg-green-500/10 border-green-500/30 text-green-300 opacity-80",
  ];
  const techRows = [
    { align: "justify-start", items: techStack.slice(0, 3), spacing: "gap-4 lg:gap-6" },
    { align: "justify-end", items: techStack.slice(3, 7), spacing: "gap-3 lg:gap-5" },
    { align: "justify-center", items: techStack.slice(7, 11), spacing: "gap-4 lg:gap-6" },
    { align: "justify-start", items: techStack.slice(11, 15), spacing: "gap-3 lg:gap-5" },
    { align: "justify-end", items: techStack.slice(15, 19), spacing: "gap-4 lg:gap-6" },
    { align: "justify-center", items: techStack.slice(19, 22), spacing: "gap-5 lg:gap-7" },
    { align: "justify-start", items: techStack.slice(22), spacing: "gap-4 lg:gap-6" },
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "diyalinad13@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {id === 1 ? "My Tech Stack" : title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Animated code deployment visualization for card 3 */}
          {id === 3 && (
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-full h-full relative">
                {/* Animated grid lines */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                
                {/* Floating code blocks */}
                <div className="absolute top-10 left-10 animate-float">
                  <div className="bg-purple/10 border border-purple/30 rounded px-3 py-2 text-xs font-mono text-purple">
                    {'<AI />'}
                  </div>
                </div>
                <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded px-3 py-2 text-xs font-mono text-blue-400">
                    {'deploy()'}
                  </div>
                </div>
                <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="bg-green-500/10 border border-green-500/30 rounded px-3 py-2 text-xs font-mono text-green-400">
                    {'scale ↑'}
                  </div>
                </div>
                <div className="absolute bottom-20 right-32 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="bg-purple/10 border border-purple/30 rounded px-3 py-2 text-xs font-mono text-purple">
                    {'build ✓'}
                  </div>
                </div>
                
                {/* Pulsing dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple rounded-full animate-ping" />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          )}



          {/* Tech stack list div */}
          {id === 1 && (
            <div className="relative mt-4 flex-1 min-h-[300px]">
              {/* Desktop Design */}
              <div className="hidden sm:block">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-50" />

                {/* Reuse deploy-card color language and motion */}
                <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4">
                    <div className="w-2.5 h-2.5 bg-purple-300 rounded-full shadow-[0_0_14px_4px_rgba(168,85,247,0.55)]" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-purple rounded-full animate-ping" />
                  </div>
                  <div
                    className="absolute top-1/2 right-1/3"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="w-2.5 h-2.5 bg-blue-300 rounded-full shadow-[0_0_14px_4px_rgba(59,130,246,0.55)]" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-500 rounded-full animate-ping" />
                  </div>
                  <div
                    className="absolute bottom-1/3 left-1/2"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="w-2.5 h-2.5 bg-green-300 rounded-full shadow-[0_0_14px_4px_rgba(34,197,94,0.55)]" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <div
                    className="absolute top-[18%] right-[18%]"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="w-2 h-2 bg-purple-300 rounded-full shadow-[0_0_12px_3px_rgba(168,85,247,0.45)]" />
                    <div className="absolute inset-0 w-2 h-2 bg-purple rounded-full animate-ping" />
                  </div>
                  <div
                    className="absolute top-[62%] left-[18%]"
                    style={{ animationDelay: "1.4s" }}
                  >
                    <div className="w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_12px_3px_rgba(59,130,246,0.45)]" />
                    <div className="absolute inset-0 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  </div>
                  <div
                    className="absolute bottom-[18%] right-[22%]"
                    style={{ animationDelay: "0.9s" }}
                  >
                    <div className="w-2 h-2 bg-green-300 rounded-full shadow-[0_0_12px_3px_rgba(34,197,94,0.45)]" />
                    <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  </div>
                </div>

                <div className="relative z-10 h-full pt-6 pb-2 flex flex-col justify-between">
                  {techRows.map((row, rowIndex) => (
                    <div
                      key={`row-${rowIndex}`}
                      className={`w-full px-2 md:px-4 lg:px-6 flex flex-wrap ${row.spacing} ${row.align} mb-3 md:mb-4 lg:mb-5`}
                    >
                      {row.items.map((skill, skillIndex) => {
                        const styleIndex = (rowIndex + skillIndex) % techTagStyles.length;
                        const verticalOffsets = {
                          0: ["mt-1", "mt-3", "mt-0"],
                          1: ["mt-2", "mt-0", "mt-4", "mt-1"],
                          2: ["mt-0", "mt-3", "mt-1", "mt-2"],
                          3: ["mt-4", "mt-1", "mt-0", "mt-3"],
                          4: ["mt-2", "mt-0", "mt-3", "mt-1"],
                          5: ["mt-1", "mt-2", "mt-0"],
                          6: ["mt-0", "mt-2", "mt-1"],
                        };
                        const offsetClass = verticalOffsets[rowIndex as keyof typeof verticalOffsets]?.[skillIndex] || "";
                        
                        return (
                          <span
                            key={skill}
                            className={`px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 text-[9px] md:text-xs lg:text-sm rounded-md border font-mono animate-float transition-all duration-300 hover:scale-105 hover:shadow-lg ${techTagStyles[styleIndex]} ${offsetClass}`}
                            style={{ animationDelay: `${((rowIndex * 3 + skillIndex) % 8) * 0.15}s` }}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Design */}
              <div className="block sm:hidden">
                <div className="relative h-full p-3">
                  {/* Simplified tech stack grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech, index) => {
                      const colorSchemes = [
                        "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-purple-200",
                        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30 text-blue-200",
                        "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-emerald-200",
                        "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-orange-200",
                        "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-400/30 text-indigo-200",
                      ];
                      const colorIndex = index % colorSchemes.length;
                      return (
                        <div
                          key={tech}
                          className={`text-center py-3 px-3 border rounded-xl text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 ${colorSchemes[colorIndex]}`}
                          style={{ animationDelay: `${index * 0.03}s` }}
                        >
                          {tech}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};