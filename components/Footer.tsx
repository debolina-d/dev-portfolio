import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-16 sm:pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center px-4">
        <h1 className="heading lg:max-w-[55vw] text-center">
          Open to impactful <span className="text-purple">AI and backend</span> opportunities!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-md md:max-w-2xl px-2">
          Let&apos;s collaborate on intelligent, data-driven solutions.
        </p>
        <a href="mailto:diyalinad13@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 md:gap-0 px-4">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          Copyright © 2026 Debolina Das
        </p>

        <div className="flex items-center md:gap-3 gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-transform duration-200"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
