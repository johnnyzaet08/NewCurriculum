"use client";

import { useState, useEffect } from "react";

import Breadcrumb from "@/components/Common/Breadcrumb";
import oldCurriculumData from "@/components/Semester/oldCurriculumData";
import newCurriculumData from "@/components/Semester/newCurriculumData";
import SingleOldSemester from "@/components/Semester/SingleOldSemester";
import SingleNewSemester from "@/components/Semester/SingleNewSemester";
import Cookies from "js-cookie";

const curriculum = () => {

  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
    for(let i = 0; i < oldCurriculumData.length; i++){
      for(let j = 0; j < oldCurriculumData[i].courses.length; j++){
        if(Cookies.get(oldCurriculumData[i].courses[j].code) == "on"){
          Cookies.remove(oldCurriculumData[i].courses[j].code);
        }
      }
    }
    handleClick();
  }, []);

  function handleClick() {
    setShowSection(false);
    setTimeout(() => {
      setShowSection(true);
    }, 100);
  }

  return (
    <>
      <Breadcrumb
        pageName="Pasarme de plan curricular"
        description="En la siguiente página podrá encontrar un sistema donde puede llegar a conocer su estado actual respecto al nuevo plan curricular."
      />

      <section id="=oldCurriculumPlugin" className="overflow-hidden mb-[5vh]">
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
                  {oldCurriculumData.map((oldSemester) => (
                    <div
                      key={oldSemester.id}
                      className="flex justify-center w-full mt-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 3xl:w-1/7 px-6"
                    >
                      <SingleOldSemester semester={oldSemester} />
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="w-full px-4 mb-[5vh]">
        <div className="flex justify-center">
          <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                  onClick={handleClick} >
            Ver mi estado actual
          </button>
        </div>
      </div>
      
      <div>
        {showSection&& (
          <section id="=oldCurriculumPlugin" className="overflow-hidden mb-[15vh]">
            <div className="items-center justify-center h-auto w-full mt-20 md:mt-10 lg:py-10 pl-[5vh] pr-[5vh] md:pl-[6vh] md:pr-[6vh] lg:pl-[10vh] lg:pr-[10vh]">
              <div className="-mx-4 flex flex-wrap">
                <div className="justify-center w-full px-4">
                  <div
                    className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                    data-wow-delay=".15s
                    "
                  >
                    <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                      XXXX INGENIERIA EN COMPUTADORES
                    </h2>
                    
                    <div className="full flex h-auto resize-none justify-left flex-wrap">
                      {newCurriculumData.map((newSemester) => (
                        <div
                          key={newSemester.id}
                          className="flex justify-center w-full mt-10 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 3xl:w-1/7 px-6"
                        >
                          <SingleNewSemester semester={newSemester} />
                        </div>
                      ))}
                    </div>
    
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      
      


    </>
  );
};

export default curriculum;
