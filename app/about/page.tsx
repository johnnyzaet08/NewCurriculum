import ConvalidationTable from "@/components/ConvalidationsTable";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ModalImage from "@/components/NewCurriculum";
import SectionTitle from "@/components/Common/SectionTitle";

const AboutPage = () => {



  return (
    <>
      <Breadcrumb
        pageName="Nueva malla curricular"
        description="Acá podrá encontrar todo lo relacionado a la nueva malla curricular. Desde el plan curricular completo hasta sus respectiva tabla de convalidaciones"
      />
      
      <ModalImage />

      <div
        className={`wow fadeInUp w-[80%] mx-auto mt-5 justify-center`}
        data-wow-delay=".1s"
      >
        <p className="text-base !leading-relaxed  text-black dark:text-gray-200  md:text-lg text-center">
          Nota: En la imagen anterior no se contempla el semestre 0, de igual forma este semestre se mantiene con los cursos: 
          <br />CI0205 Pureba avanzada de inglés 
          <br />MA0101 Matemática general
        </p>
      </div>

      <ConvalidationTable />

    </>
  );
};

export default AboutPage;
