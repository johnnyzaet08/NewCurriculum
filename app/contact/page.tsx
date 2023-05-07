import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Página de ayuda"
        description="Acá podrás encontrar un chat con nuestro bot, cualquier consulta que tengas respecto a la nueva malla curricular.
                     Si nuestro bot no te pudo ayudar también puedes pasar a la zona de contacto para poder ayudarte."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
