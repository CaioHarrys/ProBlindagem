import "../../assets/css/GradientText.css";
export default function GradientText({
  children,
  className = "",
  colors = [
    "#40ffaa",
    "#6B98F2",
    "#0554F2",
    "#0554F2",
    "#4079ff",
    "#F2F2F2",
    "#40ffaa",
    "#0554F2",
    "#4079ff",
    "#40ffaa",
  ],
  animationSpeed = 10,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
