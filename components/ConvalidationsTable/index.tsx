"use client";

import SectionTitle from "../Common/SectionTitle";
import convalidationData from "./convalidationData";

const ConvalidationTable = () => {
  const imageUrl = "/images/image/InProgress.gif"

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tabla de convalidaciones"
          paragraph="Acá podrás observar toda la tabla de convalidaciones, en la pestaña 'Pasarme de malla' podrás conocer cuál es tu estado actual respecto a la nueva malla curricular según la tabla presentada."
          center
          mb="80px"
        />
        <section className="py-2 lg:p-[10px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-gray-300 dark:bg-primary text-center">
                        <th
                          className="w-1/8 min-w-[20px] border-t border-r border-l border-gray-300 py-4 px-3 text-lg font-semibold lg:py-7 lg:px-4 dark:text-white text-gray-900"
                        >
                          Sem.
                        </th>
                        <th
                          className="w-3/8 min-w-[60px] border-t border-r border-gray-300 py-4 px-3 text-lg font-semibold lg:py-7 lg:px-4 dark:text-white text-gray-900"
                        >
                          Curso Aprobado
                        </th>
                        <th
                          className="w-1/8 min-w-[20px] border-t border-r border-gray-300 py-4 px-3 text-lg font-semibold lg:py-7 lg:px-4 dark:text-white text-gray-900"
                          >
                          Sem.
                        </th>
                        <th
                          className="w-3/8 min-w-[60px] border-t border-r border-l border-gray-300 py-4 px-3 text-lg font-semibold lg:py-7 lg:px-4 dark:text-white text-gray-900"
                        >
                          Cursos Convalidado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      { convalidationData.map( (convalidation) => (
                        <tr key={convalidation.id}>
                          <td
                            className="text-dark dark:text-white border-b border-r border-l border-gray-300 dark:bg-dark bg-white py-5 px-2 text-center text-base font-medium"
                          >
                            {convalidation.Sem_1}
                          </td>
                          <td
                            className="text-dark dark:text-white border-b border-r border-gray-300 dark:bg-dark bg-white py-5 px-2 text-center text-base font-medium"
                          >
                            {convalidation.Curso_1}
                          </td>
                          <td
                            className="text-dark dark:text-white border-b border-r border-gray-300 dark:bg-dark bg-white py-5 px-2 text-center text-base font-medium"
                          >
                            {convalidation.Sem_2}
                          </td>
                          <td
                            className="text-dark dark:text-white border-b border-r border-gray-300 dark:bg-dark bg-white py-5 px-2 text-center text-base font-medium"
                          >
                            {convalidation.Curso_2}
                          </td>
                        </tr>
                      )) }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ConvalidationTable;