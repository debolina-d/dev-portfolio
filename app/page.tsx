"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Education from "@/components/Education";
import AchievementsPublications from "@/components/AchievementsPublications";
import Languages from "@/components/Languages";
import Certifications from "@/components/Certifications";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

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
