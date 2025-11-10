import React from "react";
import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";

const BodyContent = () => {
  return (
    <div className="background">
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection /> */}
    </div>
  );
};

export default BodyContent;