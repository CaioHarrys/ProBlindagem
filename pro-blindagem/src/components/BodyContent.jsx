import FirstSection from "./Sections/FirstSection";
import SecondSection from "./Sections/SecondSection";
import Servicos from "./Sections/Servicos";

const BodyContent = () => {
  return (
    <div className="background">
      <FirstSection />
      <SecondSection />
      <Servicos />
    </div>
  );
};

export default BodyContent;
