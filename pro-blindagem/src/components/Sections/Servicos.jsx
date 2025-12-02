import "../../assets/css/FirstSection.css";
import "../../assets/css/BodyContent.css";
import "../../assets/css/SecondSection.css";
import "../../App.css";
import ContentBox from "../ContentBox";
import ProductCard from "../ProductCard";

const Servicos = () => {
  return (
    <section className="second-section">
      <div className="container">
        <div className="second-hero-content">
          <div className="hero-2-content">
            <div className="box-sec2">
              <ContentBox
                title="Serviços"
                paragraph="Oferecemos blindagem invisível para uma ampla variedade de dispositivos, incluindo smartphones, tablets e smartwatches. Nosso serviço é compatível com todas as principais marcas e modelos, garantindo proteção eficaz sem comprometer a funcionalidade ou o design do seu dispositivo."
                titleColors={[
                  "#0339A6",
                  "#A630D9",
                  "#1E1B8C",
                  "#056CF2",
                  "#A630D9",
                  "#1E1B8C",
                  "#A630D9",
                  "#A630D9",
                  "#1E1B8C",
                  "#A630D9",
                ]}
              />
            </div>
          </div>
          aqui
        </div>
      </div>
    </section>
  );
};
export default Servicos;
