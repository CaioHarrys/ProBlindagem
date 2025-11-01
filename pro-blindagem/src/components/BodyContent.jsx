import React from "react";
import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import "../assets/css/BodyContent.css";

const BodyContent = () => {
  return (
    <div className="background">
      <FirstSection />
      <SecondSection />
    </div>
  );
};

export default BodyContent;