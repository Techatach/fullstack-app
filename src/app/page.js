import LandingHead from "@/components/LandingHead";
import LandingMain from "@/components/LandingMain";
import LandingPage from "@/components/LandingPage";
import React from "react";

export default function Home() {
  return (
    <div className="text-center p-16">
      <LandingPage />
      <LandingMain />
      <LandingHead/>
    </div>
  );
}
