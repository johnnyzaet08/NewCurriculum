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
                <img
                  className="block w-[45px] h-[45px]"
                  src="/images/chat/robot_avatar.png"
                  alt="avatar 1"
                />
              </div>
              <div className="d-flex flex-cols justify-content-between">
                <p
                  className="p-2 ms-3 mb-3 rounded-full text-black bg-gray-200 dark:bg-gray-600 dark:text-white text-sm sm:text-lg lg:text-xl"
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
                  className="small p-2 ms-3 mb-3 rounded-full text-black bg-gray-200 dark:bg-gray-600 dark:text-white text-sm sm:text-lg lg:text-xl"
                >
                  {text}
                </p>
              </div>

              <div className="d-flex justify-content-between ml-2">
                <p className="mb-5 text-right text-sm text-black dark:text-white sm:text-sm lg:text-lg mb-1">
                  Yo
                </p>
                <img
                  className="block w-[45px] h-[45px]"
                  src="/images/chat/person_avatar.png"
                  alt="avatar 1"
                />
              </div>

            </div>
          </div>

        }
      </div>
      
        
    );
  };
  
  export default SingleMessage;