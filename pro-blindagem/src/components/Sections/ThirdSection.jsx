import React from "react";
import ClientCard from "../ClientCard";
import ImageComparisonSlider from "../ImageComparisonSlider";
import "../../assets/css/ThirdSection.css";
import MagicBento from "../MagicBento";

const ThirdSection = () => {
  return (
    <section className="third-section">
      <div className="container">
        <div className="left-side">
          <div className="left-side-content">
            <ImageComparisonSlider />
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-content">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
