import HeroSub from "@/components/shared/HeroSub";
import PropertiesListing from "@/components/Properties/PropertyList";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property List | Homely",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Discover inspiring design web."
        description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
        badge="Properties"
      />
      {/* <PropertiesListing /> */}
      <>
        <h1 className="text-4xl text-center py-24">Any</h1>
      </>
    </>
  );
};

export default page;
