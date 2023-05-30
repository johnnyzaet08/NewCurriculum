"use client";

import React, {useState} from "react";

const Contact: React.FC = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');
  const [disabledB, setDisabledB] = useState(false);

  function disableButtom () {
    setDisabledB(true);
  }

  function enableButtom () {
    setDisabledB(false);
  }

  function clearAll () {
    setNombre('');
    setEmail('');
    setConsulta('');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    disableButtom();

    let asunto = "Consulta - " + nombre;
    let texto = "Nombre: " + nombre + "\nEmail: " + email + "\n\nConsulta: " + consulta;

    const html = `
      <h1> Nombre: ${nombre} </h1>
      <h2> Email: ${email} </p>
      <p> Consulta: ${consulta} </p>
      `

    //sendEmailAux(texto, asunto);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ asunto, texto, html }),
      });

      if (response.ok) {
        alert('El correo ha sido enviado correctamente');
        clearAll();
      } else {
        alert('Error sending email');
      }

      enableButtom();

    } catch (error) {
      alert('Network error: ' + error);
      enableButtom();
    }
  };

  return (
    <section id="contact" className="overflow-hidden mb-[15vh]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="justify-center w-full px-4 lg:w-7/12 xl:w-full">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Nuestro chat no te ayudó? Contactanos
              </h2>
              <p className="mb-6 text-base font-large">
                Nuestro equipo de soporte se comunicará con usted lo antes posible por correo electrónico. O bien contacta directamente
                a uno de nuestro colaboradores para facilitarte la información.
              </p>
              <p className="mb-12">
                También podés visitar la página web de la 
                <a
                  href="https://aseic.github.io/representacion_estudiantil.html#junta-directiva"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-1 ml-1 underline inline-block text-base font-large text-body-color hover:text-primary"
                >
                  asociación de estudiantes 
                </a>
                para obtener el contacto y comunicarse con ellos directamente.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nombre
                      </label>
                      <input
                        id="name_in"
                        type="name"
                        placeholder="Introduce tu nombre"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        required
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        id="email_in"
                        type="email"
                        placeholder="Introduce tu correo electrónico"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Tu consulta
                      </label>
                      <textarea
                        id="message_in"
                        name="message"
                        rows={5}
                        placeholder="Introduce la consulta"
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        onChange={(e) => setConsulta(e.target.value)}
                        value={consulta}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className={`rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 `}
                      style={{ opacity: disabledB ? 0.5 : 1, cursor: disabledB ? 'not-allowed' : 'pointer' }}
                      type='submit'
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
