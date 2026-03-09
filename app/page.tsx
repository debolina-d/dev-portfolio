"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";

// Dynamically import all components that might use browser APIs
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Education = dynamic(() => import("@/components/Education"), { ssr: false });
const AchievementsPublications = dynamic(() => import("@/components/AchievementsPublications"), { ssr: false });
const Languages = dynamic(() => import("@/components/Languages"), { ssr: false });
const Certifications = dynamic(() => import("@/components/Certifications"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => ({ default: mod.FloatingNav })), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Education />
        <AchievementsPublications />
        <Languages />
        <Certifications />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
