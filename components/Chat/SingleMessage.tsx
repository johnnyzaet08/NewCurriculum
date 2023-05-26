"use client";

import { Message } from "@/types/message";
import { useState, useEffect } from "react";

const SingleMessage = ({ message }: { message: Message }) => {
    const { from, text } = message;

    const [messageFrom, setMessageFrom] = useState(false);

    
    useEffect(() => {
        if(from == "OpenAI"){
            setMessageFrom(true);
        }
    }, []);
    
    return (
      <div>
        { messageFrom ?

          <div className="flex">
            <div className="flex w-auto max-w-screen h-auto">
              <div className="d-flex justify-content-between ml-2">
                <p className="mb-5 text-left text-sm text-black dark:text-white sm:text-sm lg:text-lg mb-1">Bot</p>
                <div className="block w-[50px] h-[50px] items-center">
                  <img
                    className="w-[45px] h-[45px]"
                    src="/images/chat/robot_avatar.png"
                    alt="avatar 1"
                  />
                </div>
              </div>
              <div className="flex flex-cols mt-3 justify-content-between">
                <p
                  className="text-justify p-2 pl-8 pr-8 ms-3 mb-3 rounded-full text-black bg-gray-200 dark:bg-gray-600 dark:text-white text-sm sm:text-lg lg:text-xl"
                >
                  {text}
                </p>
              </div>
            </div>
          </div>
        
          :

          <div className="flex">
            <div className="flex w-auto max-w-screen h-auto ml-auto">
              
              <div className="d-flex flex-cols justify-content-between -mr-2">
                <p
                  className="pr-5 pl-5 p-2 ms-3 mb-3 rounded-full text-black bg-gray-200 dark:bg-gray-600 dark:text-white text-sm sm:text-lg lg:text-xl"
                >
                  {text}
                </p>
              </div>

              <div className="d-flex justify-content-between ml-2">
                <p className="text-right text-sm text-black dark:text-white sm:text-sm lg:text-lg mb-1">Yo</p>
                <div className="block w-[50px] h-[50px] items-center">
                  <img
                    className="block w-[45px] h-[45px]"
                    src="/images/chat/person_avatar.png"
                    alt="avatar 1"
                  />
                </div>
              </div>

            </div>
          </div>

        }
      </div>
      
        
    );
  };
  
  export default SingleMessage;