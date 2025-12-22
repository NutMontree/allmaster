import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import WorksListing from "@/components/workList";

import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property List | AllMaster",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Discover inspiring design web."
        description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
        badge="Properties"
      />
      <WorksListing />
    </>
  );
};

export default page;
