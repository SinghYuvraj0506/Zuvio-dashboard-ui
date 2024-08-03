
import React from "react";
import HeroSection from "./_components/HeroSection";
import TrustedSection from "./_components/TrustedSection";
import Stats from "./_components/Stats";
import FeaturesSection from "./_components/FeaturesSection";
import ExtraFeatures from "./_components/ExtraFeatures";
import PricingSection from "./_components/PricingSection";

const page = () => {
  return (
    <div className="flex flex-col gap-32 items-center">
      <HeroSection/>
      <TrustedSection/>
      <Stats/>
      <FeaturesSection/>
      <ExtraFeatures/>
      <PricingSection/>

    </div>
  );
};

export default page;
