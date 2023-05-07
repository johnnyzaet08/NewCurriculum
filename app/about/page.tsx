import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import NewCurriculum from "@/components/NewCurriculum";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nueva malla curricular"
        description="Acá podrá encontrar todo lo relacionado a la nueva malla curricular. Desde el plan curricular completo hasta sus respectiva tabla de convalidaciones"
      />
      <NewCurriculum />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
