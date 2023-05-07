"use client";

import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, inputValue]);
    setInputValue('');
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="justify-center w-full px-4 lg:w-7/12 xl:w-full">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Chat
              </h2>
              
              <div className="w-full h-[500px] overflow-y-auto resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp">
                {messages.map((message, index) => (
                  <div key={index} className="chat-message">
                    <p className="text-gray-800">{message}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="py-3 pl-3 chat-form flex items-center px=3">
                <input
                  type="text"
                  className="w-11/12 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  placeholder="Introduce tu pregunta"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="rounded-md bg-primary ml-4 py-2 px-3 mr-0 md:mr-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                  <svg width="30" height="30" viewBox="0 0 40 41" className="fill-current">
                    <path d="M 5 0 L 5 38 L 43 17 L 5 0 Z" />
                  </svg>
                </button>
              </form>
                
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Chat;