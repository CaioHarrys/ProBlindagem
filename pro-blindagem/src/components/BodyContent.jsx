import React from "react";
import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";
import ImageComparisonSlider from "./ImageComparisonSlider";

const BodyContent = () => {
  return (
    <div className="background">
      <FirstSection />
      <SecondSection />
      <ImageComparisonSlider />
      {/* <ThirdSection /> */}
    </div>
  );
};

export default BodyContent;