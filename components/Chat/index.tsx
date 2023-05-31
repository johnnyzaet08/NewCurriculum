"use client";

import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
import SingleMessage from './SingleMessage';
import chatData from './chatData';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const configuration = new Configuration({
    organization: process.env.NEXT_PUBLIC_OPENAI_API_ORGANIZATION,
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  

  async function handleClick() {

    setIsButtonDisabled(true);

    const response_OpenAI = await openai.createCompletion({
      model: "curie:ft-ceassistants:chatbot-webpage-ce-2023-05-25-03-12-18",
      prompt: inputValue + '?\n\n###\n\n',
      max_tokens: 10,
      temperature: 0,
    });

    const response_OpenAI_data = response_OpenAI.data.choices[0].text;
    let response_DataChat = '';

    for (let i = 0; i < response_OpenAI_data.length; i++) {
      if (response_OpenAI_data[i] === "$" || response_OpenAI_data[i] === "\n" || response_OpenAI_data[i] === "#") {
      } else {
        response_DataChat += response_OpenAI_data[i];
      }
    }

    let answer = null;

    chatData.map((data) => {
      if(data.reference === response_DataChat){
        answer = data.answer;
      }
    })

    const message = {
      from: "user",
      text: inputValue,
    }

    const response = {
      from: "OpenAI",
      text: answer,
    }

    setMessages([...messages, message, response]);
    setInputValue('');
    setIsButtonDisabled(false);

  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="justify-center w-full px-4 xl:w-full">
            <div
              className="h-auto wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] h-screen"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-2 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Chat
              </h2>
              <div className="mb-5 ml-3 max-h-[250px] overflow-x-hidden">
              Este chat es generado por una Inteligencia Artificial y, por lo tanto, las respuestas proporcionadas pueden no ser precisas o exactas. 
              En caso de no solucionar su consulta o necesite asistencia adicional, le recomendamos que se ponga en contacto directamente con nosotros utilizando la sección de contacto que se encuentra a continuación.
              </div>
              
              <div className="w-full h-[60%] sm:h-[70%] lg:h-[80%] rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
                <div className="w-full flex-rows justify-center mt-5">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className="w-auto mb-5"
                    >
                      <SingleMessage message={message} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-3 pl-3 chat-form flex items-center px=3">
                <input
                  type="text"
                  className="w-11/12 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  placeholder="Introduce tu pregunta"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className={`rounded-md bg-primary ml-4 py-2 px-3 mr-0 md:mr-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isButtonDisabled} onClick={handleClick}>
                  <svg width="30" height="30" viewBox="0 0 40 41" className="fill-current">
                    <path d="M 5 0 L 5 38 L 43 17 L 5 0 Z" />
                  </svg>
                </button>
              </div>
                
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Chat;