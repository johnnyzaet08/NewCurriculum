"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const ConvalidationTable = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const imageUrl = "/images/image/InProgress.gif"

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Tabla de convalidaciones"
          paragraph="Acá podrás observar toda la tabla de convalidaciones, en la pestaña 'Pasarme de malla' podrás conocer cuál es tu estado actual respecto a la nueva malla curricular según la tabla presentada."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              
              <div className="relative aspect-[77/40] items-center justify-center">
                <div className="relative top-0 right-0 flex h-full w-full items-center justify-center">
                  <button
                    className="relative h-full w-full items-center justify-center rounded-full bg-opacity-100 text-primary transition hover:bg-opacity-0"
                  >
                    <Image src={imageUrl} alt="Modal Image" fill 
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                  </button>
                </div>
              </div>

              {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-40">
                  <div className="absolute top-0 left-0 w-full h-full bg-opacity-100" onClick={handleCloseModal} />
                  <img src={imageUrl} alt={"Modal Image"} className="max-w-full max-h-full rounded-5 shadow-md" />
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ConvalidationTable;