import OurMission from "@/components/mission/OurMission";
import Hero from "@/components/mission/Hero";
import React from "react";
import History from "@/components/mission/History";

export default function HistoryAndMission() {
  return (
    <div>
      <Hero />
      <div className="">
      <OurMission />
      <History />
      </div>
    </div>
  );
}
