"use client";

import * as React from "react";
import HomeSection from "@/sections/Home";
import Navigation from "@/components/Navigation";
import PortfolioSection from "@/sections/Portfolio";
import AchievementsSection from "@/sections/Achievements";
import { useState } from "react";

export default function Home() {
  const [isCurrentSection, setCurrentSection] = useState("Home");
  return (
    <main className="col-start-2 col-end-12 flex flex-col gap-20 py-20 h-full">
      <div className="w-full h-full">
        <Navigation onChange={setCurrentSection} />
      </div>
      <div className="w-full h-full">
        {isCurrentSection === "Home" ? (
          <HomeSection />
        ) : isCurrentSection === "Portfolio" ? (
          <PortfolioSection />
        ) : (
          <AchievementsSection />
        )}
      </div>
    </main>
  );
}
