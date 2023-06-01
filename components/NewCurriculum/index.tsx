
import React from "react";
import "@/styles/modal.css";
import SectionTitle from "@/components/Common/SectionTitle";


const ModalImage = () => {

  const ImgURL = "/images/image/NuevoPlan.png";


  return (
    <div className="container pt-10">
      <SectionTitle
        title="Nuevo plan curricular"
        paragraph="Acá podrás observar la nueva malla curricular, en la pestaña 'Pasarme de malla' podrás conocer cuál es tu estado actual respecto a la nueva malla curricular."
        center
        mb="80px"
      />

      <div>
        <div className="flex top-0 left-0 w-full h-full flex justify-center items-center z-100">
          <img src={ImgURL} alt={"Modal Image"} className="max-w-full max-h-full rounded-5 shadow-md" />
        </div>
      </div>
    </div>

  );
};

export default ModalImage;