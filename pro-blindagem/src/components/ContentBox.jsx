import GradientText from "../components/TextComponent/GradientText";

// Versão mais simples com props essenciais
const ContentBox = ({ title, paragraph, titleColors, className = "" }) => {
  return (
    <div className={`content-box ${className}`}>
      <GradientText
        colors={
          titleColors || ["#0339A6", "#A630D9", "#1E1B8C", "#056CF2", "#A630D9"]
        }
        animationSpeed={8}
        showBorder={false}
        className="content-box-title"
      >
        {title}
      </GradientText>

      <p className="plus-jakarta-paragraph-alt">{paragraph}</p>
    </div>
  );
};

export default ContentBox;
