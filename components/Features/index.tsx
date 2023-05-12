import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Principales cambios"
            paragraph="En esta zona podrá visualizar los cambios principales efectuados sobre el actual plan 2100 de Ingeniería en Computadores. Cada tipo de cambio es representado por un símbolo según corresponda, desde la eliminación cursos, creación de nuevos, modificación, entre otros cambios."
            center
          />

          <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
