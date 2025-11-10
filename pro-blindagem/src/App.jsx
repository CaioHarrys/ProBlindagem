import { useState } from "react";
import Header from "./components/Header";
import ParticleBackground from "./components/ParticleBackground";
import "./App.css";
import BodyContent from "./components/BodyContent";
import FooterEspacial from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParticleBackground />
      <Header />
      <BodyContent />
      <FooterEspacial />
    </>
  );
}

export default App;
