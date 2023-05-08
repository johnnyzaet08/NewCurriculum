import Breadcrumb from "@/components/Common/Breadcrumb";
import oldCurriculumData from "@/components/Semester/oldCurriculumData";
import SingleSemester from "@/components/Semester/SingleSemester";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pasarme de plan curricular"
        description="En la siguiente página podrá encontrar un sistema donde puede llegar a conocer su estado actual respecto al nuevo plan curricular."
      />

      <section id="newCurriculumPlugin" className="overflow-hidden mb-[15vh]">
        <div className="items-center justify-center h-auto w-full mt-20 md:mt-10 lg:py-10 pl-[5vh] pr-[5vh] md:pl-[6vh] md:pr-[6vh] lg:pl-[10vh] lg:pr-[10vh]">
          <div className="-mx-4 flex flex-wrap">
            <div className="justify-center w-full px-4">
              <div
                className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s
                "
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  2100 INGENIERIA EN COMPUTADORES
                </h2>
                <p className="mb-6 text-base font-large">
                  Por favor seleccione los cursos aprobados en el plan 2100, posterior a esto presione el boton "pasar de malla" para mostrar las respectivas equivalencias.
                </p>
                
                <div className="full flex h-auto resize-none justify-left flex-wrap">
                  {oldCurriculumData.map((Semester) => (
                    <div
                      key={Semester.id}
                      className="flex justify-center w-full mt-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 3xl:w-1/7 px-6"
                    >
                      <SingleSemester semester={Semester} />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Blog;
