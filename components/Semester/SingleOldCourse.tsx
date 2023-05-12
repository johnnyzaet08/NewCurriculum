"use client";

import { Course } from "@/types/curriculum";
import { useState } from "react";
import Cookies from "js-cookie";

const SingleOldCourse = ({ course }: { course: Course }) => {
    const { code, name, credits } = course;
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
      if(isClicked){
        Cookies.remove(code);
        setIsClicked(false);
      }else{
        Cookies.set(code, 'on', { expires: 1});
        setIsClicked(true);
      }
    };

    return (
      <button className={`block w-full h-[200px] border-[1px] rounded-[10px] justify-center items-center ${ isClicked ? "bg-green-300 dark:bg-gray-500" : "" }`}
              onClick={handleButtonClick}
      >
        <div className="block w-full h-[140px]" data-wow-delay=".15s">
          <div className="flex">
            <h3 className="ml-2 mb-5 text-xl w-full h-auto text-center font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {code}
            </h3>
            <span className="mt-2 -mr-2 text-sm w-full h-auto text-center font-bold text-black dark:text-white">
              {credits} cr
            </span>
          </div>
          <div className="flex h-full justify-center">
            <span className="flex items-center mb-5 mr-1 ml-1 text-center text-black dark:text-white text-xl">
              {name}
            </span>
          </div>
        </div>
      </button>
    );
  };
  
  export default SingleOldCourse;