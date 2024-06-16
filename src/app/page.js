import React from "react";
import LandingHead from "@/components/LandingHead";
import LandingMain from "@/components/LandingMain";
import LandingPage from "@/components/LandingPage";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="text-center p-16">
      <Carousel />
      <LandingPage />
      <LandingMain />
      <LandingHead />
    </div>
  );
}
